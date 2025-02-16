<script setup lang="ts">
import { ContentLoader } from "vue-content-loader";

import type { FullCountry } from "~/queries/countries";

const props = defineProps<{
  country: FullCountry;
  set: FullCountry["coin_sets"][number];
  coin: FullCountry["coin_sets"][number]["coins"][number];
}>();

const emit = defineEmits<{
  (e: "coin-selected"): void;
}>();

const user = useSupabaseUser();

const isLoading = ref(false);

const imageUrl = computed(
  () =>
    `/assets/coins/${props.country.normalised_name.toLowerCase()}/${props.set.title ? `${props.set.title.toLowerCase().replaceAll(" ", "_")}-` : ""}${props.coin.base_coin.name.toLowerCase().replaceAll(" ", "_")}.png`,
);

const { data: selectedCoins } = useRealtimeSelectedCoins();

const isSelected = computed(() => {
  if (!user.value) return false;

  return !(
    !selectedCoins.value ||
    selectedCoins.value.findIndex(
      ({ coin_id: coinId }) => coinId === props.coin.id,
    ) === -1
  );
});

const router = useRouter();
const onCoinView = () => {
  console.log("Viewing coin", props.coin.id);
  router.push(`/countries/${props.country.slug}/${props.coin.id}`);
};

const isContextMenuOpen = ref(false);

const keys = useMagicKeys();

const onAddRemoveCoinViaContextMenu = () => {
  if (isContextMenuOpen.value) {
    if (!user.value) isContextMenuOpen.value = false;
    emit("coin-selected");

    console.log("contextMenu", isContextMenuOpen.value);
  }
};

const addToCollectionShortcut = keys["Shift+A"];
const removeFromCollectionShortcut = keys["Shift+R"];
const viewCoinShortcut = keys["Shift+V"];

watch(addToCollectionShortcut, (v) => {
  if (v && !isSelected.value) onAddRemoveCoinViaContextMenu();
});

watch(removeFromCollectionShortcut, (v) => {
  if (v && isSelected.value) onAddRemoveCoinViaContextMenu();
});

watch(viewCoinShortcut, (v) => {
  if (v && isContextMenuOpen.value) onCoinView();
});

const contextMenuIndex = ref(0);
watch(isContextMenuOpen, () => contextMenuIndex.value++);
</script>

<template>
  <ContextMenu v-model:open="isContextMenuOpen">
    <ContextMenuTrigger
      class="coin"
      :class="{
        'coin-selected': isSelected,
      }"
      @click="$emit('coin-selected')"
    >
      <img
        :src="imageUrl"
        :alt="`Image of a ${coin.base_coin.value} coin from ${country.name}`"
        width="90"
        height="90"
        @load="() => (isLoading = false)"
      />
      <Transition name="fade">
        <ContentLoader
          v-if="isLoading"
          width="75"
          height="75"
          class="coin--loader"
        />
      </Transition>
    </ContextMenuTrigger>

    <ContextMenuContent class="w-64 p-0 border-none">
      <div
        v-if="isContextMenuOpen"
        class="p-1 border"
      >
        <ContextMenuItem
          :inset="true"
          class="flex items-center gap-2"
          @select="() => onCoinView()"
        >
          <Icon name="ion:eye" />
          View Coin
          <ContextMenuShortcut class="flex items-center">
            <Icon name="ion:chevron-up" />
            V
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem
          v-if="isSelected"
          :inset="true"
          class="flex items-center gap-2"
          @select="() => onAddRemoveCoinViaContextMenu()"
        >
          <Icon name="ion:minus" />
          Remove from Collection
          <ContextMenuShortcut class="flex items-center">
            <Icon name="ion:chevron-up" />
            R
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem
          v-else
          :inset="true"
          class="flex items-center gap-2"
          @select="() => onAddRemoveCoinViaContextMenu()"
        >
          <Icon name="ion:plus" />
          Add to Collection
          <ContextMenuShortcut class="flex items-center">
            <Icon name="ion:chevron-up" />
            A
          </ContextMenuShortcut>
        </ContextMenuItem>
      </div>
    </ContextMenuContent>
  </ContextMenu>
</template>

<style lang="scss">
.coin {
  @apply cursor-pointer;
  @apply h-[100px] w-[100px];
  @apply flex items-center justify-center;
  @apply relative;
  &--loader {
    @apply absolute;
    @apply rounded-full;
  }

  img {
    @apply h-[75px] w-[75px];
    @apply rounded-full;
    @apply outline;
    @apply outline-4;
    @apply outline-gray-200;
    @apply transition-all;
  }
  &:hover {
    img {
      @apply outline-8;
    }
  }
}
.coin-selected {
  @apply items-center;
  img {
    @apply transition-all;
    @apply relative;
    @apply outline-green-600;
  }
  &::after {
    content: "";
    @apply rounded-full h-[75px] w-[75px];
    @apply bg-green-600;
    @apply opacity-30;
    @apply absolute;
    z-index: 1;
  }
}
</style>
