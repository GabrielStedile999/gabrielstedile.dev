export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-muted font-mono text-xs tracking-[0.3em] uppercase">
        Portfolio in progress
      </p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Gabriel{" "}
        <span className="from-accent-from to-accent-to bg-gradient-to-r bg-clip-text text-transparent">
          Stedile
        </span>
      </h1>
      <p className="text-muted max-w-md text-lg">
        Senior Frontend Engineer — React · TypeScript · Node.js · AI Integration
      </p>
      <div className="flex gap-4 font-mono text-sm">
        <a
          className="decoration-accent-from/50 hover:decoration-accent-to underline underline-offset-4"
          href="https://www.linkedin.com/in/gabriel-stedile"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="decoration-accent-from/50 hover:decoration-accent-to underline underline-offset-4"
          href="mailto:gabriel.stedile9@gmail.com"
        >
          Email
        </a>
      </div>
    </main>
  );
}
