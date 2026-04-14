export const stats = [
  { value: "6+", label: "Years Exp" },
  { value: "50+", label: "Systems" },
  { value: "5+", label: "AI Systems" },
  { value: "2", label: "Products" },
  { value: "20%", label: "AWS Reduction" },
  { value: "6", label: "ML Models" },
];

export const services = [
  {
    title: "AI Agents, RAG Pipelines & Intelligent Products",
    description:
      "Production AI systems, not prototypes. LangGraph multi-agent architectures, RAG pipelines with vector search, AI copilots with tool-calling, recommendation engines, ML model ensembles, and structured LLM outputs.",
    tags: ["LangGraph", "LangChain", "OpenAI", "RAG", "CopilotKit", "AI Agents"],
    icon: "neurology",
    featured: true,
  },
  {
    title: "Architecture Consulting",
    description: "Auditing and designing distributed systems for teams that need to scale 10x without breaking.",
    tags: ["DDD", "Microservices", "AWS", "Event-Driven"],
    icon: "account_tree",
  },
  {
    title: "Product Engineering",
    description: "Full-stack execution from Figma to production. Modern tech stacks built for speed and maintainability.",
    tags: ["NestJS", "React", "Next.js", "TypeScript"],
    icon: "deployed_code",
  },
  {
    title: "System Integration",
    description: "Connecting fragmented legacy systems, universal hardware integration, and IoT ecosystems.",
    tags: ["MQTT", "IoT", "SFTP", "Data Pipelines"],
    icon: "hub",
  },
  {
    title: "Interim CTO",
    description: "Strategic technical leadership, hiring roadmaps, and engineering culture for startups.",
    tags: ["Leadership", "Mentoring", "Process", "Roadmap"],
    icon: "shield_person",
  },
];

export const caseStudies = [
  {
    company: "CxMapper / EzFlow",
    tag: "Enterprise SaaS · Insurance",
    year: "2024–2025",
    title: "Omnichannel Communication Platform — 30+ Workflow Nodes, Git-Like Versioning",
    metrics: [
      { value: "30+", label: "Workflow Nodes" },
      { value: "2", label: "Enterprise Clients" },
      { value: "40M+", label: "Msgs/Month" },
    ],
    tags: ["NestJS", "Next.js", "Prisma", "PostgreSQL", "AWS SES", "WhatsApp", "OpenTelemetry"],
    description: "Built a SaaS platform for visual communication automation used by SulAmérica and Caixa Seguradora. Visual DAG workflow builder with 30+ node types, unique Git-like versioning system (branches, commits, PRs, approval gates), WhatsApp chatbot orchestrator, 4 template types, multi-tenant architecture with RBAC, and full observability. NestJS monolith consolidated from 20+ microservices.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAWY_x0qXruoRuGTNDVvqvZx_RpGbwPXefGv9J6UC3VVXJCoefinns8ZodV4iC10DpL7th9NLVzHdyfatXr6ZXB2M7zHOelyBCyPCpAG8KiL6HzList-ysmyUnzDbt5IyKRQtOJoxzrw9T69b8UgKEEs8SNOdMg-WdiWR9jRMsVjr7--iIPXF32UrLAalXw_grgTRnu-7gdrJbZpD8uccayBomwP3L0DCp1J0iP1YdXUjgOFlg9zs763suvIm2vjxmUf-LPxAuIQ",
  },
  {
    company: "Resilion / Koru",
    tag: "AI · IoT · Infrastructure",
    year: "2025",
    title: "Infrastructure Intelligence Platform — AI Copilot + IoT Sensor Network",
    metrics: [
      { value: "5", label: "Systems Built" },
      { value: "15+", label: "AI Tools" },
      { value: "6", label: "ML Models" },
    ],
    tags: ["Hono", "Next.js 15", "LangGraph", "CopilotKit", "TimescaleDB", "MQTT"],
    description: "Architected the entire Resilion platform end-to-end: Nexus backend (Hono + PostgreSQL/TimescaleDB), Sentinel dashboard (Next.js 15 + Mapbox + Three.js), AI Copilot (LangGraph with 15+ tools and intent classification), Ranger data collector agent (two-layer architecture with offline durability), and Courier IoT gateway (protocol-agnostic FTP/SFTP/MQTT). Designed a 6-model ML ensemble for predictive failure forecasting.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMINMcNQmoaOW182eOmioFF6D--Uuat5NugBHNelLerScUYMQVPhD81GM45fMIc1EKneiHgyrEoWgsjfiN4FH7cHAZRZv1gqiT1olZgmNRfoZpjJQ_FHYUzUjWI7NspcXyZHyQ1OXYv5hHc8I4uTrhbGzZt_aN1o-kb8I_wGQbuQLsTsIBcggooa5st_JhC76wzCoCHZLPcl6lmFbSNTG78kUZMkwRUpJB0gJVgshgx0XncIVtNOcArQfimd9cehD-EMPvrN0Grg",
  },
  {
    company: "Zurich Santander",
    tag: "Financial Services · Enterprise",
    year: "2024",
    title: "Document Processing: 12 Months → 2 Months — 6x Acceleration",
    metrics: [
      { value: "6x", label: "Faster" },
      { value: "80%", label: "Automation" },
      { value: "~€2M", label: "Annual Savings" },
    ],
    tags: ["DDD", "Strangler Fig", "AWS Lambda", "Resilience4j"],
    description: "Reengineered document processing through pipeline parallelization. Authored a full Solution Architecture Document with 8 ADRs, 82 business rules, 37 use cases, and 8 Bounded Contexts using DDD tactical patterns. Planned gradual migration using Strangler Fig Pattern with canary deployments and automatic rollback.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAWY_x0qXruoRuGTNDVvqvZx_RpGbwPXefGv9J6UC3VVXJCoefinns8ZodV4iC10DpL7th9NLVzHdyfatXr6ZXB2M7zHOelyBCyPCpAG8KiL6HzList-ysmyUnzDbt5IyKRQtOJoxzrw9T69b8UgKEEs8SNOdMg-WdiWR9jRMsVjr7--iIPXF32UrLAalXw_grgTRnu-7gdrJbZpD8uccayBomwP3L0DCp1J0iP1YdXUjgOFlg9zs763suvIm2vjxmUf-LPxAuIQ",
  },
  {
    company: "Livo",
    tag: "Consumer AI · SaaS",
    year: "2025–2026",
    title: "3 AI Pipelines — Recommendations, Retrospectives & Reading Plans",
    metrics: [
      { value: "3", label: "AI Systems" },
      { value: "20", label: "Agent Iterations" },
      { value: "7", label: "Candidate Engine" },
    ],
    tags: ["LangGraph", "OpenAI GPT-4o", "NestJS", "Stripe", "SQS"],
    description: "Built three production AI pipelines: a two-phase LangGraph agent for reading plans (20-iteration tool-calling loops against Google Books API), a recommendation engine with recency-weighted context (GPT-4o, 7 candidates monthly), and a retrospective generator with 13 structured AI-generated text fields. All async via SQS, premium-gated, multi-language.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLN6N8N_9Eu8lmI2JOHZpEhHlxqJkWlLLudcqX05bGldCoNz4fxg1RvFR4u1ETdFVQ_5Xv4TqAXEHsXZLIvEVwXhPyQ89wAhPbsrVgMoWm1u3mbi95zzJcAhpDHutxG-8GnBLwcqPuo4mJ6LM2c0jL7SM7NFHH5gP4rVCJpedFNyD60Vss1bbbsLQSltd637sPRxU1voTSsXrXFWd3NDDDWNgd233_ZPiHuD911UCfiR78HmnWNF9WOiBI-Kjh4svrf_av0wuonA",
  },
];

export const products = [
  {
    name: "Livo",
    subtitle: "AI-Powered Reading Platform",
    description: "3 production AI pipelines: LangGraph reading plan agent, GPT-4o book recommendation engine, and retrospective generator (like Spotify Wrapped for readers). NestJS backend, Stripe payments.",
  },
  {
    name: "ClaudIA",
    subtitle: "Multi-Agent AI Assistant",
    description: "CLI productivity assistant with LangGraph multi-agent architecture (Main, Planning, Summary agents). RAG knowledge base via Qdrant vector database. Google Calendar + Microsoft Calendar integrations.",
  },
  {
    name: "Cronock",
    subtitle: "B2B2C Appointment Booking SaaS",
    description: "Appointment booking platform for beauty and aesthetic services in Brazil. NestJS + PostgreSQL with DDD/Clean Architecture, React Native/Expo mobile app, MercadoPago payments.",
  },
];

export const articles = [
  {
    date: "Mar 12, 2024",
    readTime: "8 min read",
    title: "Demystifying Distributed Systems Fallacies",
    description: "Practical lessons from building real distributed systems.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLN6N8N_9Eu8lmI2JOHZpEhHlxqJkWlLLudcqX05bGldCoNz4fxg1RvFR4u1ETdFVQ_5Xv4TqAXEHsXZLIvEVwXhPyQ89wAhPbsrVgMoWm1u3mbi95zzJcAhpDHutxG-8GnBLwcqPuo4mJ6LM2c0jL7SM7NFHH5gP4rVCJpedFNyD60Vss1bbbsLQSltd637sPRxU1voTSsXrXFWd3NDDDWNgd233_ZPiHuD911UCfiR78HmnWNF9WOiBI-Kjh4svrf_av0wuonA",
    url: "https://medium.com/@jonatasfernandespimenta",
  },
  {
    date: "Feb 24, 2024",
    readTime: "12 min read",
    title: "Architecture Series: Space-Based, Service-Based, and Microkernel",
    description: "Deep dives into three architecture patterns and real-world trade-offs.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRp7ppFPve3advuRwZm1CnaPXWOWW2nOtq-qsO4evRR5t3SWwcHgNi0PC-N1hpz8vDIwcDlHDr3O_ZIp9SZB6nR47y25yYbS2raGb6ibFtWYhyMTDSxMpzT8dizMMHFpccZsikoGAbmiri7u0-W0VF3hG76qbjliULuZPbySZ24lu4evDKv31Z9vxsrFfEtn0Om1aBYrLYCQmcn65tAATDyjnrSQGn-fyFKMKPkpDB2ADrqj3K4W5YRLsUsaJG9vWm-kt2ABxUSw",
    url: "https://medium.com/@jonatasfernandespimenta",
  },
  {
    date: "Jan 15, 2024",
    readTime: "10 min read",
    title: "How to Establish Processes in Your Business",
    description: "Systemizing the predictable so you can humanize the exceptional.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1KBqhq5Oa01e1xR6WrhQR4Bhk1xxHQUYHcTywrwgBAK5ia7kxz-AkbIt-cwbUQJRvg7F-tBtuXOuJNoCfJyLW02Lgr84XuIBbpRtfPWZ6nohDhU1bLBkEQoo8Pt6RvGYm-uVTy-IgpM8Sg7ZDXp5Z5UGas_GhMqsC6eFbSA_tBhlke-PivlCA0so6_k8UKYKEJVgG3fgUPylJt_b4c43U1Zwd0UhctmVYiI60EXVYPQH4zsV3aHnzbYFslEUTEYyJWWpRK1d3_g",
    url: "https://medium.com/@jonatasfernandespimenta",
  },
];

export const socialLinks = {
  github: "https://github.com/jonatasfernandespimenta",
  linkedin: "https://www.linkedin.com/in/j%C3%B4natas-fernandes-pimenta-67069b199/",
  medium: "https://medium.com/@jonatasfernandespimenta",
};
