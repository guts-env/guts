import type { Meta, StoryObj } from "@storybook/react";
import Button, { type ButtonProps } from "./Button";
import { Loader, Search } from "lucide-react";
import { useState } from "react";

const meta = {
  title: "Form/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
};

export const Icon: Story = {
  args: {
    size: "icon",
    children: <Search />,
    variant: "outline",
  },
};

export const WithIcon: Story = {
  args: {
    size: "default",
    children: (
      <>
        <Search />
        <span>Search</span>
      </>
    ),
    variant: "outline",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

const LoadingButton = (args: ButtonProps) => {
  const [loading, setLoading] = useState(false);

  return (
    <Button {...args} loading={loading} onClick={() => setLoading(true)} />
  );
};

export const Loading: Story = {
  args: {
    children: "Click Me",
  },
  render: (args) => <LoadingButton {...args} />,
};

export const LoadingCustomIcon: Story = {
  args: {
    loadingIcon: <Loader className="animate-spin" />,
    children: "Click Me",
  },
  render: (args) => <LoadingButton {...args} />,
};

export const LoadingCustomText: Story = {
  args: {
    loadingText: "Custom loading text...",
    children: "Click Me",
  },
  render: (args) => <LoadingButton {...args} />,
};

export const LoadingCustomTextAndIcon: Story = {
  args: {
    loadingText: "Custom loading text and icon...",
    loadingIcon: <Loader className="animate-spin" />,
    children: "Click Me",
  },
  render: (args) => <LoadingButton {...args} />,
};
