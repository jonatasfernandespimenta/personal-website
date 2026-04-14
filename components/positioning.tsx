import { stats } from "@/lib/data";

export function Positioning() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-48">
      <div className="grid md:grid-cols-2 gap-24 items-start">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Architecture + AI.<br />One Senior Engineer.<br />No Agency Overhead.
          </h2>
          <p className="text-on-surface-variant leading-relaxed text-lg">
            I bridge the gap between complex software architecture and production AI systems. No project managers, no junior devs — just one senior engineer who builds LangGraph multi-agent systems, architects microservices with DDD, and ships real products.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="mono-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
