import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "senam-ui";
import "senam-ui/style.css";

import { fn } from "storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "outline",
        "secondary",
        "ghost",
        "destructive",
        "link",
      ],
    },
    size: {
      control: "select",
      options: [
        "default",
        "xs",
        "sm",
        "lg",
        "icon",
        "icon-xs",
        "icon-sm",
        "icon-lg",
      ],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
  },
  render: (args) => (
    <Button {...args}>
      {args.size.startsWith("icon") ? <Icon /> : "Default"}
    </Button>
  ),
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "default",
  },
  render: (args) => (
    <Button {...args}>
      {args.size.startsWith("icon") ? <Icon /> : "Secondary"}
    </Button>
  ),
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "default",
  },
  render: (args) => (
    <Button {...args}>
      {args.size.startsWith("icon") ? <Icon /> : "Outline"}
    </Button>
  ),
};

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-code-icon lucide-code"
    >
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </svg>
  );
};
