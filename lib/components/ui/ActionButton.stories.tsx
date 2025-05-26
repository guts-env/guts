import ActionButton, { type ActionButtonProps } from "./ActionButton";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { useState } from "react";
import { OctagonAlert } from "lucide-react";

const meta: Meta<typeof ActionButton> = {
  title: "UI/ActionButton",
  component: ActionButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ActionButton>;

export const Default: Story = {
  args: {
    buttonProps: {
      children: "Open Dialog",
    },
    hideIcon: true,
    onCancel: action("Cancel clicked"),
    onOk: action("Ok clicked"),
  },
};

export const Destructive: Story = {
  args: {
    destructive: true,
    buttonProps: {
      children: "Delete Item",
    },
    title: "Delete Confirmation",
    description:
      "Are you sure you want to delete this item? This action cannot be undone.",
    okText: "Delete",
    cancelText: "Cancel",
    onCancel: action("Cancel clicked"),
    onOk: action("Ok clicked"),
  },
};

export const CustomText: Story = {
  args: {
    buttonProps: {
      children: "Proceed",
    },
    title: "Proceed with Action?",
    description: "This will perform a custom action.",
    hideIcon: true,
    okText: "Yes, Proceed",
    cancelText: "No, Cancel",
    onCancel: action("Cancel clicked"),
    onOk: action("Ok clicked"),
  },
};

export const CustomIcon: Story = {
  args: {
    buttonProps: {
      children: "Proceed",
    },
    title: "Proceed with Action?",
    description: "This will perform a custom action.",
    icon: <OctagonAlert className="size-8 text-red-500" />,
    okText: "Yes, Proceed",
    cancelText: "No, Cancel",
    onCancel: action("Cancel clicked"),
    onOk: action("Ok clicked"),
  },
};

const LoadingActionButton = (args: ActionButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleOk = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    args.onOk?.();
  };

  return (
    <ActionButton
      {...args}
      buttonProps={{ ...args.buttonProps, loading }}
      onOk={handleOk}
    />
  );
};

export const Loading: Story = {
  args: {
    buttonProps: {
      children: "Proceed",
      loadingText: "Processing...",
    },
    onCancel: action("Cancel clicked"),
    onOk: action("Ok clicked"),
  },
  render: (args) => <LoadingActionButton {...args} />,
};
