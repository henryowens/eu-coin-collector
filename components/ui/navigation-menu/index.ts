import { cva } from "class-variance-authority";

export { default as NavigationMenu } from "./NavigationMenu.vue";
export { default as NavigationMenuContent } from "./NavigationMenuContent.vue";
export { default as NavigationMenuIndicator } from "./NavigationMenuIndicator.vue";
export { default as NavigationMenuItem } from "./NavigationMenuItem.vue";
export { default as NavigationMenuLink } from "./NavigationMenuLink.vue";
export { default as NavigationMenuList } from "./NavigationMenuList.vue";
export { default as NavigationMenuTrigger } from "./NavigationMenuTrigger.vue";
export { default as NavigationMenuViewport } from "./NavigationMenuViewport.vue";

export const navigationMenuTriggerStyle = cva(
  "text-masala-50 group inline-flex h-10 w-max items-center justify-center rounded-md bg-masala-500 px-4 py-2 text-sm font-medium transition-colors hover:bg-masala-400 hover:text-masala-50 focus:bg-masala-400 focus:text-masala-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-masala-500/50 data-[state=open]:bg-masala-500/50",
);
