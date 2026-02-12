---
title: "The Agentic AI Market Map"
slug: "agentic-market-map"
date: "2026-01"
description: "Where the infrastructure and application layers are forming, who's funded, and where the gaps are."
category: "Overview"
featured: true
lastUpdated: "January 2026"
relatedSlugs:
  - "agent-governance-bet"
  - "outcome-pricing-shift"
  - "healthcare-ai-deployment"
---

*Last updated: January 2026*

The agentic AI market is splitting into two distinct layers, and most investors are conflating them. The infrastructure layer (orchestration, governance, tool integration) and the application layer (vertical agents that do specific jobs) have different economics, different moats, and different timing. Confusing the two leads to bad bets.

Roughly ~$18B has flowed into agentic AI since 2023, split approximately 60/40 between application and infrastructure. But that infrastructure number is misleading. Most of it went to general purpose AI infrastructure (compute, model training, developer tools). Pure play agentic infrastructure (orchestration, governance, agent specific tooling) has received only ~$2B. The application layer is overfunded relative to infrastructure, which is the classic pattern before a platform correction.

## The Infrastructure Layer

Infrastructure companies build the plumbing that agents run on. This layer is consolidating fast.

**Orchestration frameworks** manage how agents coordinate. LangChain has developer mindshare with LangGraph but is struggling to convert open source adoption into enterprise revenue. CrewAI carved out multi agent coordination as a niche but faces the classic "framework vs. platform" challenge. Microsoft's AutoGen remains research grade. The winner here likely isn't any of these, it's whoever embeds orchestration into an existing enterprise workflow tool.

**Governance and observability** is the layer I'm most bullish on. Agents that spend money and take actions need audit trails, cost controls, and approval workflows. This is where I'd look for the next platform company. The closest analogy is Kubernetes for containers: the orchestration layer that made a new compute paradigm enterprise ready. No one owns this yet. (I wrote a full thesis on this: [Agent Governance Will Become a Platform Category](/writing/agent-governance-bet).)

**Tool integration** is standardizing around Anthropic's Model Context Protocol (MCP). This is good for the ecosystem but bad for companies that were building proprietary tool integration layers. MCP commoditizes the connection between agents and enterprise software. The value moves up the stack to what you do with the connection, not the connection itself.

## The Application Layer

Application layer companies build agents that do specific jobs in specific verticals. This is where most of the venture funding is going, and where most of the failures will happen.

**Customer support** is the most funded vertical. Sierra ($10B+ valuation), Decagon ($35M Series A), and dozens of others. The market is real: $350B+ in global support spend, and agents that take actions (not just answer questions) can resolve 60 to 80% of issues. But differentiation is thin. The winners will be the ones who crack outcome based pricing, not the ones with the best agent. (More on this in [The End of Per-Seat Pricing](/writing/outcome-pricing-shift).)

**Sales and GTM** agents are proliferating. The pitch is always "automate the SDR." The problem is that automated outreach at scale produces worse outcomes as adoption increases. The signal to noise ratio drops to zero when every company uses the same playbook.

**Developer tools** agents (Cursor, Windsurf, etc.) are the category where agents have achieved genuine product market fit. Developers will pay for tools that make them faster. But the moat question is real: if the underlying models keep improving, do developer tool companies become thin wrappers?

**Healthcare, legal, and financial services** are where deployment architecture matters more than model selection. Regulated industries need local inference, audit trails, and explainability. The companies that solve deployment trust in these verticals will have the deepest moats because switching costs are enormous once compliance approves a pipeline. (I explored this in depth in [Why Deployment Architecture Matters More Than Model Selection](/writing/healthcare-ai-deployment).)

## Where the Gaps Are

Three areas I think are underfunded relative to their importance:

**Agent governance platforms.** The Kubernetes of agents. Every enterprise deploying agents needs cost controls, approval workflows, and audit trails. No one is building this as a standalone platform yet, and the framework companies (LangChain, CrewAI) are trying to add it as a feature rather than building it as the core product.

**Vertical data infrastructure for agents.** Agents are only as good as the data and tools they can access. Companies building deep integrations with vertical specific data sources (EHR systems in healthcare, financial data terminals in capital markets) will have structural advantages.

**Agent testing and evaluation.** How do you know if an agent is working? The evaluation problem for agentic systems is fundamentally harder than for single prompt LLM applications. The companies building agent evaluation infrastructure will be to agents what Datadog is to cloud infrastructure.

## What's Overhyped

**"Autonomous" agents that do everything.** The market is moving toward specialized agents that do one thing well, not general purpose agents that do everything poorly. The "AGI agent" pitch is a red flag.

**Agent to agent marketplaces.** The idea that agents will transact with each other in open marketplaces assumes a level of standardization and trust that doesn't exist and won't for years. Fetch.ai and SingularityNET have been pushing decentralized agent marketplaces, but enterprises want controlled, governed agent workflows, not agent bazaars. The disconnect between the crypto adjacent agent marketplace vision and actual enterprise procurement is enormous.

**Wrapper companies with "AI agent" rebrand.** If the product was a chatbot six months ago and is now an "AI agent" because it can call one API, it's still a chatbot. The capability bar for "agent" should be autonomous multi step workflows with tool use and state management.

## Where I Think the Opportunities Are

If I were betting on this space, I would focus on:

1. **Governance first agent platforms** targeting the CFO buyer, not the CTO buyer
2. **Vertical agents in regulated industries** where deployment trust is the moat
3. **Agent evaluation and testing infrastructure** for the enterprise DevOps buyer
4. **Outcome based pricing infrastructure** that enables the business model shift from per seat to per outcome

These overlap significantly with my individual thesis pieces: governance ([agent governance bet](/writing/agent-governance-bet)), deployment trust ([healthcare AI deployment](/writing/healthcare-ai-deployment)), and pricing model innovation ([outcome pricing shift](/writing/outcome-pricing-shift)). This market map is the summary view; those pieces go deeper on each opportunity.

The agentic AI market will be enormous. But most of the value will accrue to infrastructure and to vertical applications with deep domain moats, not to horizontal "do everything" agent companies.

---

*Changelog: Updated quarterly. Next update: April 2026.*
- *January 2026: Initial publication with infrastructure/application layer analysis, funding estimates, and gap identification.*
