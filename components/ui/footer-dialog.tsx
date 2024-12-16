import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/index";

const FooterDialog = ({
  title,
  description,
  content,
  open,
  onOpenChange,
}: {
  title: string;
  description: string;
  content: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[450px] bg-SYSTEM-white">
        <DialogHeader>
          <div className="flex gap-2">
            <DialogTitle className="text-xl">{title}</DialogTitle>
            <DialogDescription className="self-end">
              {description}
            </DialogDescription>
          </div>
        </DialogHeader>
        <div className="bg-ELSE-F6 rounded-sm py-7 px-5 text-ELSE-7374 text-m whitespace-pre-wrap max-h-[350px] overflow-y-auto">
          {content}
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default FooterDialog;
