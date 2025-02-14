export default defineNuxtRouteMiddleware(() => {
  if (process.server) return; // we only want to send page analytics on the client side

  const { $segment } = useNuxtApp();
  const { currentRoute } = useRouter();

  setTimeout(() => {
    $segment?.page("Page", currentRoute.value.fullPath);
  }, 2000);
});
