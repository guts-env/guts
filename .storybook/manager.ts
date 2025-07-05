import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

const theme = create({
  base: "dark",
  brandTitle: "Guts UI Library",
  brandTarget: "_self",
});

addons.setConfig({
  theme,
});
