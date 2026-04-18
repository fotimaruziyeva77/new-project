import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Coffee } from "lucide-react";

export function TestModeModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-hairline bg-glass-strong backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Hozirda sayt test rejimida!</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground pt-2">
            Hozirda sayt test rejimida, iltimos keyinroq urinib ko'ring. Xizmatlarni yaxshilash uchun bizni qo'llab-quvvatlashingiz mumkin.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start pt-4">
          <a
            href="https://buymeacoffee.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex max-w-fit items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-glow to-green-glow px-5 py-2.5 text-sm font-semibold text-background shadow-glow-cyan transition hover:brightness-110"
          >
            <Coffee className="h-4 w-4" />
            Donation
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
