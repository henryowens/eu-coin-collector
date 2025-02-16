enum Env {
  Local = "local",
  Acceptance = "acceptance",
  Production = "production",
}

export default () => {
  const { $config } = useNuxtApp();

  const appEnv = computed(() => $config.public.env);

  const isLocal = computed(() => appEnv.value === Env.Local);
  const isAcceptance = computed(() => appEnv.value === Env.Acceptance);
  const isProduction = computed(() => appEnv.value === Env.Production);

  return {
    appEnv,
    isLocal,
    isAcceptance,
    isProduction,
  };
};
