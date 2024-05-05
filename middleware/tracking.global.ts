export default defineNuxtRouteMiddleware(() => {
  if (process.server) return; // we only want to send page analytics on the client side

  const { $segment } = useNuxtApp();
  const { fullPath } = useRoute();

  setTimeout(() => {
    if (!$segment) {
      // in case there is an error in the plugins (e.g. loading the platform)
      return;
    }

    $segment.page("Page", fullPath);
  }, 2000);
});
