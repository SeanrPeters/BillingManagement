import { DropdownTrigger } from ".";

export default {
  title: "Components/DropdownTrigger",
  component: DropdownTrigger,
  argTypes: {
    colored: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    colored: "off",
    className: {},
    text: "Hover me",
  },
};
