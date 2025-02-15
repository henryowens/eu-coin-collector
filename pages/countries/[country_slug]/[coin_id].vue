<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";

import queries from "~/queries";

const route = useRoute();

const coinId = computed(() => route.params.coin_id?.toString());

const { data: coin } = useQuery({
  ...queries.coins.details(coinId.value ?? ""),
  enabled: !!coinId.value,
});
</script>

<template>
  {{ coinId }}
  {{ coin }}
</template>
