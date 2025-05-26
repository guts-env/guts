import { TriangleAlert } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./AlertDialog";
import Button, { type ButtonProps } from "./Button";

export interface ActionButtonProps {
  buttonProps: ButtonProps;
  destructive?: boolean;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  hideIcon?: boolean;
  cancelText?: string;
  okText?: string;
  onCancel?: () => void;
  onOk?: () => void;
}

function ActionButton({
  buttonProps,
  destructive = false,
  title = "Are you sure?",
  description = "This action cannot be undone.",
  icon,
  hideIcon = false,
  cancelText = "Cancel",
  okText = "Continue",
  onCancel,
  onOk,
}: ActionButtonProps) {
  const alertIcon = icon || <TriangleAlert className="size-10" />;

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant={destructive ? "destructive" : "default"}
          {...buttonProps}
        />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <div className="flex items-center gap-4">
            {!hideIcon && alertIcon}
            <AlertDialogDescription>{description}</AlertDialogDescription>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>{cancelText}</AlertDialogCancel>
          <AlertDialogAction onClick={onOk}>{okText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ActionButton;
