import { toast as sonnerToast } from "sonner";

// Fonts
import { dmSans } from "@/ui/fonts";

// Components
import { IconAlertTriangleFilled } from "@tabler/icons-react";

// Schemas
import { ToastProps } from "@/schemas";

export function toast(toast: Omit<ToastProps, "id">) {
  return sonnerToast.custom(id => (
    <Toast id={id} title={toast.title} description={toast.description} />
  ));
}

export default function Toast(props: ToastProps) {
  const { title, description } = props;

  return (
    <div
      className={`flex gap-4 items-center px-300 py-200 bg-neutral-0 rounded-12 ${dmSans.className} text-orange-700`}
    >
      <IconAlertTriangleFilled size={48} />
      <div>
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
}
