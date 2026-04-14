export function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-48" id="contact">
      <div className="bg-surface-container p-12 md:p-20 border border-outline-variant/10 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">Let&apos;s Talk About Your Project</h2>
          <p className="text-on-surface-variant mb-12">I&apos;m currently accepting new high-impact projects for 2026. Briefly describe your challenge and let&apos;s see if we&apos;re a fit.</p>
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="mono-label text-slate-500">Name</label>
                <input className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary h-12 px-4 text-on-surface" placeholder="Alexander Hamilton" type="text" name="name" />
              </div>
              <div className="space-y-2">
                <label className="mono-label text-slate-500">Email</label>
                <input className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary h-12 px-4 text-on-surface" placeholder="alex@company.com" type="email" name="email" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="mono-label text-slate-500">Project Type</label>
                <select className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary h-12 px-4 text-on-surface" name="projectType">
                  <option>AI Engineering / Agents</option>
                  <option>Architecture Audit / Refactor</option>
                  <option>New Product Development</option>
                  <option>Interim CTO / Consulting</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="mono-label text-slate-500">Estimated Budget</label>
                <select className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary h-12 px-4 text-on-surface" name="budget">
                  <option>$5k - $15k</option>
                  <option>$15k - $50k</option>
                  <option>$50k+</option>
                  <option>Retainer Basis</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="mono-label text-slate-500">Project Details</label>
              <textarea className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary h-32 px-4 py-3 text-on-surface" placeholder="What are we building? What's the main technical hurdle?" name="details" />
            </div>
            <button className="w-full md:w-auto bg-primary text-on-primary font-bold px-12 py-4 hover:brightness-110 transition-all" type="submit">Send Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}
