export const FEATURES_DATA = [
  {
    icon: "Zap",
    title: "Lightning Fast",
    description: "Built for speed. Every action is optimized for instant response, keeping your team in flow state.",
  },
  {
    icon: "Shield",
    title: "Enterprise Security",
    description: "Bank-grade encryption, SOC 2 compliance, and advanced access controls. Your data stays yours.",
  },
  {
    icon: "Users",
    title: "Team Collaboration",
    description: "Real-time editing, comments, and mentions. Keep everyone aligned without the endless meetings.",
  },
  {
    icon: "BarChart",
    title: "Smart Analytics",
    description: "AI-powered insights reveal bottlenecks and opportunities before they become problems.",
  },
  {
    icon: "Puzzle",
    title: "200+ Integrations",
    description: "Connect with Slack, GitHub, Jira, Figma, and every tool your team already uses.",
  },
  {
    icon: "Sparkles",
    title: "AI Assistant",
    description: "Let AI handle the mundane. Auto-summarize meetings, generate reports, and suggest next steps.",
  },
];

export const TESTIMONIALS_DATA = [
  {
    quote: "FlowSync cut our meeting time by 60%. We finally have time to actually build instead of talking about building.",
    author: "Sarah Chen",
    role: "CTO at Vertex Labs",
    avatar: "https://picsum.photos/100/100?random=1",
    company: "Vertex Labs",
  },
  {
    quote: "The AI features are genuinely useful, not gimmicky. It's like having a project manager who never sleeps.",
    author: "Marcus Webb",
    role: "Engineering Lead at Stripe",
    avatar: "https://picsum.photos/100/100?random=2",
    company: "Stripe",
  },
  {
    quote: "We evaluated 12 tools. FlowSync was the only one the entire team actually wanted to use.",
    author: "Elena Rodriguez",
    role: "VP of Product at Notion",
    avatar: "https://picsum.photos/100/100?random=3",
    company: "Notion",
  },
];

export const PRICING_TIERS = [
  {
    name: "Starter",
    price: 0,
    description: "Perfect for trying out FlowSync with a small team.",
    features: [
      "Up to 5 team members",
      "5 projects",
      "Basic integrations",
      "Community support",
      "1GB storage",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: 29,
    description: "For growing teams that need more power.",
    features: [
      "Unlimited team members",
      "Unlimited projects",
      "All integrations",
      "Priority support",
      "100GB storage",
      "AI assistant",
      "Advanced analytics",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: 99,
    description: "For organizations that need full control.",
    features: [
      "Everything in Pro",
      "SSO & SAML",
      "Custom integrations",
      "Dedicated success manager",
      "Unlimited storage",
      "SLA guarantee",
      "On-premise option",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export const NAVIGATION_LINKS = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "#" },
    { name: "Changelog", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Security", href: "#" },
  ],
};