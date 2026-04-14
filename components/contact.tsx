export function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-48" id="contact">
      <div className="bg-surface-container p-12 md:p-20 border border-outline-variant/10 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">Let&apos;s Talk About Your Project</h2>
          <p className="text-on-surface-variant mb-12">I&apos;m currently accepting new high-impact projects for 2026. Briefly describe your challenge and let&apos;s see if we&apos;re a fit.</p>
          <iframe
            src="https://app.pipefy.com/public/form/4id1Zwjt"
            width="100%"
            height="700"
            className="border-none rounded"
            title="Contact Form"
          />
        </div>
      </div>
    </section>
  );
}
