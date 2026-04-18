import { useState, type FormEvent } from "react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const { t } = useI18n();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success(t.contact.sent);
    }, 700);
  };

  return (
    <Section id="contact" eyebrow="Contact" title={t.contact.title} subtitle={t.contact.subtitle}>
      <Reveal>
        <form
          onSubmit={onSubmit}
          className="mx-auto max-w-2xl space-y-4 rounded-2xl border border-white/10 bg-surface/50 p-6 backdrop-blur-xl sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Input name="name" placeholder={t.contact.name} required />
            <Input type="email" name="email" placeholder={t.contact.email} required />
          </div>
          <Textarea name="message" placeholder={t.contact.message} rows={4} required />
          <button
            type="submit"
            disabled={submitting}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-glow to-green-glow px-6 py-3 text-sm font-semibold text-background shadow-glow-cyan transition hover:brightness-110 disabled:opacity-60"
          >
            {submitting ? "…" : t.contact.send}
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </form>
      </Reveal>
    </Section>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-lg border border-white/10 bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-cyan-glow/50 focus:ring-2 focus:ring-cyan-glow/20"
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="w-full resize-none rounded-lg border border-white/10 bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-cyan-glow/50 focus:ring-2 focus:ring-cyan-glow/20"
    />
  );
}
