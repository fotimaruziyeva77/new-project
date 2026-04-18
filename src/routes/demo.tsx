import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useEffect, type FormEvent } from "react";
import { Navbar } from "@/components/verdiq/Navbar";
import { Footer } from "@/components/verdiq/Footer";
import { GradientBlobs } from "@/components/verdiq/GradientBlobs";
import { Section, SectionDivider } from "@/components/verdiq/Section";
import { Reveal } from "@/components/verdiq/Reveal";
import { useI18n } from "@/lib/i18n/I18nProvider";
import {
  Play, ExternalLink, Figma, Github, Code2, Sparkles, Send,
  ArrowLeft, Mail, Bot, User,
} from "lucide-react";

export const Route = createFileRoute("/demo")({
  component: DemoPage,
  head: () => ({
    meta: [
      { title: "Verdiq Demo — See ESG Intelligence in Action" },
      {
        name: "description",
        content:
          "Watch the Verdiq prototype: AI ESG scoring, risk detection, the sustainability dashboard, and the AI ESG advisor.",
      },
      { property: "og:title", content: "Verdiq Demo — See ESG Intelligence in Action" },
      {
        property: "og:description",
        content: "Prototype walkthrough of Verdiq's AI-powered ESG platform.",
      },
    ],
  }),
});

const PROTO_ICONS = [Play, Figma, Code2, Github];

function DemoPage() {
  const { t } = useI18n();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <GradientBlobs />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative px-4 pt-32 pb-12 sm:px-6 sm:pt-36 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <span className="inline-block rounded-full border border-cyan-glow/30 bg-cyan-glow/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan-glow">
                Verdiq · Demo
              </span>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-gradient">{t.demo.heroTitle}</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
                {t.demo.heroSubtitle}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Video */}
        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-5 text-center text-xs font-semibold uppercase tracking-wider text-foreground/60">
                {t.demo.videoTitle}
              </h2>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated/60 p-1.5 backdrop-blur-xl shadow-elevated">
                <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-cyan-glow/15 via-transparent to-green-glow/15 blur-2xl" />
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-background via-surface to-background">
                  <div className="flex h-full w-full items-center justify-center">
                    <button
                      type="button"
                      className="group/play relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-glow to-green-glow shadow-glow-cyan transition hover:scale-110"
                    >
                      <Play className="ml-1 h-7 w-7 text-background" fill="currentColor" />
                      <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-cyan-glow to-green-glow opacity-50 blur-xl transition group-hover/play:opacity-80" />
                    </button>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-muted-foreground">{t.demo.videoNote}</p>
            </div>
          </Reveal>
        </section>

        <SectionDivider />

        {/* About */}
        <Section eyebrow="About" title={t.demo.aboutTitle}>
          <Reveal>
            <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.demo.aboutText}
            </p>
          </Reveal>
        </Section>

        <SectionDivider />

        {/* Prototype links */}
        <Section eyebrow="Access" title={t.demo.protoTitle}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.demo.protoLinks.map((p, i) => {
              const Icon = PROTO_ICONS[i] ?? ExternalLink;
              return (
                <Reveal key={p.t} delay={i * 80}>
                  <a
                    href="#"
                    className="group block h-full overflow-hidden rounded-2xl border border-white/10 bg-surface/50 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-glow/30"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-glow/20 to-green-glow/20 text-cyan-glow ring-1 ring-cyan-glow/20">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <ExternalLink className="h-3.5 w-3.5 text-muted-foreground transition group-hover:text-cyan-glow" />
                    </div>
                    <div className="mt-5 text-sm font-semibold text-foreground">{p.t}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{p.d}</div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </Section>

        <SectionDivider />

        {/* AI Chatbot */}
        <Section eyebrow="AI Advisor" title={t.demo.chatTitle} subtitle={t.demo.chatSubtitle}>
          <Reveal>
            <ChatbotMock />
          </Reveal>
        </Section>

        <SectionDivider />

        {/* API Access */}
        <Section eyebrow="API" title={t.demo.apiTitle} subtitle={t.demo.apiSubtitle}>
          <Reveal>
            <ApiBlock />
          </Reveal>
        </Section>

        {/* Final CTA */}
        <section className="relative px-4 py-24 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-cyan-glow/20 bg-gradient-to-br from-cyan-glow/[0.08] via-blue-glow/[0.05] to-green-glow/[0.08] p-10 text-center backdrop-blur-xl sm:p-14">
              <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-cyan-glow/30 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-green-glow/30 blur-3xl" />
              <div className="relative">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  <span className="text-gradient">{t.demo.finalTitle}</span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
                  {t.demo.finalSubtitle}
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition hover:border-cyan-glow/40 hover:bg-white/10"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    {t.cta.backHome}
                  </Link>
                  <a
                    href="mailto:hello@verdiq.ai"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-glow to-green-glow px-6 py-3 text-sm font-semibold text-background shadow-glow-cyan transition hover:brightness-110"
                  >
                    <Mail className="h-4 w-4" />
                    {t.cta.contactTeam}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}

/* ─── Chatbot mock ───────────────────────────────────── */

interface ChatMsg {
  role: "user" | "bot";
  text: string;
}

function ChatbotMock() {
  const { t } = useI18n();
  const [messages, setMessages] = useState<ChatMsg[]>([
    { role: "bot", text: "Hi — I'm the Verdiq ESG advisor. Try a sample question below." },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, thinking]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    setInput("");
    setThinking(true);
    setTimeout(() => {
      const answer =
        t.chatbot[trimmed] ??
        "This is a demo response — in production, Verdiq's AI advisor will reply with a contextual ESG analysis based on your data.";
      setMessages((m) => [...m, { role: "bot", text: answer }]);
      setThinking(false);
    }, 800);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    send(input);
  };

  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-surface/50 backdrop-blur-xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-glow to-green-glow text-background">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground">Verdiq AI Advisor</div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-green-glow">● Online</div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="max-h-[420px] space-y-4 overflow-y-auto px-5 py-5">
        {messages.map((m, i) => (
          <div key={i} className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                m.role === "user"
                  ? "bg-white/10 text-foreground"
                  : "bg-gradient-to-br from-cyan-glow to-green-glow text-background"
              }`}
            >
              {m.role === "user" ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
            </div>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                m.role === "user"
                  ? "bg-cyan-glow/10 text-foreground"
                  : "border border-white/10 bg-white/[0.03] text-foreground/90"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        {thinking && (
          <div className="flex gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-glow to-green-glow">
              <Bot className="h-3.5 w-3.5 text-background" />
            </div>
            <div className="flex items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-glow" />
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-glow" style={{ animationDelay: "150ms" }} />
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-glow" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        )}
      </div>

      {/* Suggestions */}
      <div className="flex flex-wrap gap-2 border-t border-white/5 bg-white/[0.02] px-5 py-3">
        {t.demo.chatSamples.map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => send(q)}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/80 transition hover:border-cyan-glow/40 hover:text-cyan-glow"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={onSubmit} className="flex gap-2 border-t border-white/5 px-5 py-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.demo.chatPlaceholder}
          className="flex-1 rounded-lg border border-white/10 bg-background/40 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-cyan-glow/50 focus:ring-2 focus:ring-cyan-glow/20"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-glow to-green-glow px-4 text-background transition hover:brightness-110"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}

/* ─── API block ──────────────────────────────────────── */

const ENDPOINTS = [
  {
    method: "POST",
    path: "/api/esg-score",
    desc: "Compute an ESG score from company data.",
    body: `{
  "company": "Acme Corp",
  "sector": "fintech",
  "answers": { ... }
}`,
  },
  {
    method: "GET",
    path: "/api/report",
    desc: "Fetch a generated investor-ready ESG report.",
    body: `{
  "report_id": "rep_2k3jx9",
  "format": "pdf"
}`,
  },
  {
    method: "GET",
    path: "/api/recommendations",
    desc: "AI-generated next-best ESG actions, ranked by impact.",
    body: `{
  "company_id": "cmp_a1b2c3"
}`,
  },
];

function ApiBlock() {
  return (
    <div className="mx-auto max-w-4xl space-y-4">
      {ENDPOINTS.map((e) => (
        <div
          key={e.path}
          className="overflow-hidden rounded-2xl border border-white/10 bg-surface/50 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3 border-b border-white/5 px-5 py-3">
            <span
              className={`rounded-md px-2 py-0.5 font-mono text-[10px] font-semibold ${
                e.method === "POST"
                  ? "bg-green-glow/15 text-green-glow"
                  : "bg-cyan-glow/15 text-cyan-glow"
              }`}
            >
              {e.method}
            </span>
            <code className="font-mono text-sm text-foreground">{e.path}</code>
          </div>
          <div className="px-5 py-4">
            <p className="mb-3 text-xs text-muted-foreground">{e.desc}</p>
            <pre className="overflow-x-auto rounded-lg border border-white/5 bg-background/60 p-4 font-mono text-xs leading-relaxed text-foreground/85">
              <code>{e.body}</code>
            </pre>
          </div>
        </div>
      ))}
    </div>
  );
}
