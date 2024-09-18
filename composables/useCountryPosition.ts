import { useElementBounding } from "@vueuse/core";

const useCountryPosition = () => {
  const templateRef = ref<HTMLElement | null>(null);

  const bounding = useElementBounding(templateRef);

  return {
    templateRef,
    bounding,
  };
};

const instance = useCountryPosition();

export default () => instance;
