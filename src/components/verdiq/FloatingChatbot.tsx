import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { AiChatbot } from "./AiChatbot";

export function FloatingChatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-glow to-green-glow text-background shadow-[0_10px_30px_-10px_rgba(34,211,238,0.55)] transition hover:scale-105 sm:bottom-6 sm:right-6"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-cyan-glow/30" />
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-3 z-50 w-[calc(100vw-1.5rem)] max-w-[400px] sm:right-6 sm:w-[400px]">
          <div className="overflow-hidden rounded-2xl border border-hairline bg-background/95 shadow-2xl backdrop-blur-xl">
            <AiChatbot />
          </div>
        </div>
      )}
    </>
  );
}
