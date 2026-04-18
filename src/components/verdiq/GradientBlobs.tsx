export function GradientBlobs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-glow/20 blur-3xl animate-blob" />
      <div
        className="absolute top-1/3 -right-20 h-[450px] w-[450px] rounded-full bg-green-glow/15 blur-3xl animate-blob"
        style={{ animationDelay: "5s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-blue-glow/15 blur-3xl animate-blob"
        style={{ animationDelay: "10s" }}
      />
    </div>
  );
}
