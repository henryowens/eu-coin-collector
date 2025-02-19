<script setup lang="ts">
const filterSelected = defineModel<"all" | "selected" | "unselected">({
  default: "all",
});

const onClearFilters = () => {
  filterSelected.value = "all";
};
</script>

<template>
  <Sheet>
    <SheetTrigger
      class="fixed right-2 bottom-2 sm:right-5 sm:bottom-5"
      :as-child="true"
    >
      <Button
        variant="outline"
        class="rounded-full !p-0 w-14 h-14 flex items-center justify-center z-50"
        size="lg"
      >
        <Icon
          name="ion:funnel"
          class="text-masala-800 w-6 h-6"
        />
      </Button>
    </SheetTrigger>
    <SheetContent class="flex flex-col gap-8 w-full sm:w-[75%]">
      <SheetHeader class="text-left">
        <SheetTitle>Filters</SheetTitle>
        <SheetDescription>
          Apply filters to the coins that are displayed.
        </SheetDescription>
      </SheetHeader>
      <div class="flex-1 py-4">
        <div class="flex flex-col gap-2">
          <Label>Selected Coins</Label>
          <Select v-model="filterSelected">
            <SelectTrigger>
              <SelectValue placeholder="Filter on selected coins" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="selected">Selected</SelectItem>
                <SelectItem value="unselected">Not Selected</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <SheetFooter class="sm:flex-col gap-y-2">
        <Button
          type="submit"
          variant="outline"
          class="text-accent-foreground w-full"
          @click="onClearFilters"
        >
          Clear
        </Button>

        <SheetClose :as-child="true">
          <Button
            type="submit"
            class="w-full"
          >
            Apply Filters
          </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>
