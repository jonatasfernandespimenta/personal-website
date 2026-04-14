import { getTranslations } from "next-intl/server";

export async function Engineering() {
  const t = await getTranslations("engineering");

  return (
    <section className="bg-surface-container-low py-32 mb-48">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-8">{t("heading")}</h2>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-3xl mb-16">
          {t("description")}
        </p>
        <div className="grid md:grid-cols-2 gap-8 font-label text-xs">
          <div className="bg-surface-container-lowest p-6 border border-outline-variant/20 rounded shadow-2xl">
            <div className="flex gap-1.5 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/20" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
              <div className="w-3 h-3 rounded-full bg-green-500/20" />
              <span className="ml-4 text-slate-500">{"// domain/order.service.ts (DDD)"}</span>
            </div>
            <pre className="text-slate-300 overflow-x-auto"><code>{`@Injectable()
export class OrderService {
  async createOrder(cmd: CreateOrderCommand) {
    // Transactional consistency boundary
    return await this.uow.execute(async (ctx) => {
      const order = Order.create(cmd);
      await this.repo.save(order, ctx);
      this.events.dispatch(new OrderCreated(order));
    });
  }
}`}</code></pre>
          </div>
          <div className="bg-surface-container-lowest p-6 border border-outline-variant/20 rounded shadow-2xl">
            <div className="flex gap-1.5 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/20" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
              <div className="w-3 h-3 rounded-full bg-green-500/20" />
              <span className="ml-4 text-slate-500">{"# ai/agent_workflow.py (LangGraph)"}</span>
            </div>
            <pre className="text-slate-300 overflow-x-auto"><code>{`workflow = StateGraph(AgentState)
workflow.add_node("reason", reasoner_node)
workflow.add_node("tool_call", tool_executor)

workflow.add_conditional_edges(
    "reason",
    should_continue,
    {"continue": "tool_call", "end": END}
)

app = workflow.compile()`}</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}
