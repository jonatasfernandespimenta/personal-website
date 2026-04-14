export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-32 grid-bg">
      <div className="mb-12">
        <span className="mono-label px-3 py-1 bg-surface-container-highest border border-outline-variant/30 text-primary flex items-center gap-2 w-fit">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Available for Projects · Q2 2026
        </span>
      </div>
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 max-w-5xl">
        Architecture That Scales.
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
          AI That Ships.
        </span>
        <br />
        Engineering That Delivers.
      </h1>
      <p className="text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
        Senior Full-Stack Engineer &amp; AI Architect. I help CTOs and technical founders design distributed systems, build production AI features — LangGraph agents, RAG pipelines, ML ensembles — and ship products that compound. 6+ years at enterprise scale, from microservices to multi-agent AI.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#contact" className="bg-gradient-to-r from-primary to-primary-container text-on-primary-container px-8 py-4 font-bold text-lg hover:brightness-110 transition-all text-center">
          Schedule a Strategy Call
        </a>
        <a href="#work" className="border border-outline-variant/50 px-8 py-4 font-bold text-lg hover:bg-surface-container-highest transition-all text-center">
          See My Work
        </a>
      </div>
    </section>
  );
}
