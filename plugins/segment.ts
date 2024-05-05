import { AnalyticsBrowser } from "@segment/analytics-next";
import axios from "axios";

const logError = () => {
  if (process.server) {
    console.warn("Segment is not available on the server side");

    return;
  }

  console.warn(
    "Trying to use segment even though there was an error loading it",
  );
};

const segmentMock = {
  isMock: true,
  track: logError,
  page: logError,
  identify: logError,
  user: () => {
    logError();

    return Promise.resolve(undefined);
  },
} as const;

export default defineNuxtPlugin<{
  segment: AnalyticsBrowser | typeof segmentMock;
}>({
  name: "segment",
  parallel: true,
  setup: (nuxtApp) => {
    const {
      public: { env },
    } = useRuntimeConfig();
    if (process.server || env === "local") {
      return nuxtApp.provide("segment", segmentMock);
    }

    const segment = new AnalyticsBrowser();
    segment.load({
      writeKey: "26fJzg2RR0wEUS9VdcI15dpocAIeRbRF",
    });

    // axios.get<IPApiResponse>("http://ip-api.com/json").then(({ data }) => {
    //   if (data.status === "success")
    segment.identify({
      // ip: data.query,
    });
    // });

    segment.user().then((user) => {
      axios.defaults.headers.common["Anonymous-Id"] = user.anonymousId();
    });

    return nuxtApp.provide("segment", segment);
  },
});
