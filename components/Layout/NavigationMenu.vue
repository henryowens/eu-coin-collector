<script setup lang="ts">
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";

const { data: countries } = useCountries();
</script>

<template>
  <div
    class="w-full bg-masala-950 mb-0 sm:mb-3 p-2 flex justify-end px-4 sm:px-6"
  >
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NuxtLink to="/">
            <NavigationMenuLink
              :class="navigationMenuTriggerStyle()"
              class="flex items-center"
            >
              <Icon
                name="ion:home-sharp"
                class="mr-2"
              />
              Home
            </NavigationMenuLink>
          </NuxtLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger class="flex items-center">
            <Icon
              name="ion:flag"
              class="mr-2"
            />
            Countries
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              class="countries__list grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
            >
              <li
                v-for="country in countries"
                :key="country.id"
              >
                <NuxtLink :to="`/countries/${country.normalised_name}`">
                  <NavigationMenuLink :as-child="true">
                    <span
                      class="cursor-pointer flex items-center gap-2 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <Icon
                        :name="`flag:${country.locale}-1x1`"
                        class="w-[15px] h-[15px] rounded-full"
                      />
                      <div class="text-sm font-medium leading-none">
                        {{ country.name }}
                      </div>
                    </span>
                  </NavigationMenuLink>
                </NuxtLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
</template>

<style scoped lang="scss">
.countries__list {
  @apply w-dvw sm:w-[600px] overflow-y-scroll;
}
@media (max-width: 640px) {
  .countries__list {
    height: calc(100dvh - 192px);
  }
}
</style>
