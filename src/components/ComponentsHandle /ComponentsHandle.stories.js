// 8/6/2023
// Sean Peters
// stories.js file for the handle component

import { ComponentsHandle } from ".";

export default {
  title: "Components/ComponentsHandle",
  component: ComponentsHandle,
  argTypes: {
    stateProp: {
      options: ["hovered", "focused", "normal"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "hovered",
    className: {},
  },
};
