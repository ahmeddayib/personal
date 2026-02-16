---
title: "AI Support Agent with Outcome Pricing"
slug: "support-agent"
date: "2025-06"
featured: false
tags: ["AI/ML", "Agentic AI", "MCP", "SaaS", "Customer Service"]
tech: ["Claude Sonnet 4", "MCP", "OpenAI Agents SDK", "LangGraph", "Pinecone", "Next.js", "PostgreSQL", "Stripe"]
github: null
demo: null
image: "/images/projects/support-agent-cover.jpg"
marketCategory: "SaaS / AI Customer Service"
problemStatement: "Enterprise customer support costs $15-25 per human-handled ticket, but current AI chatbots resolve only 15-20% of issues because they can't take actions. They can only suggest answers, creating a frustrating hand-off experience"
thesis: "The copilot-to-agent shift is the defining transition in SaaS AI. Sierra's $10B+ valuation proves the market. But the real unlock is the business model: outcome-based pricing ($0.10-0.50 per resolved action) aligns vendor incentives with customer outcomes for the first time. 63% of this market will be captured by startups, not incumbents, because legacy support platforms can't rebuild around agent-native architecture."
---

I built this to find out whether the pricing model matters more than the agent architecture. Here is what I learned.

## The Build

A customer support system that does not just answer questions but actually does things. Processing refunds, changing subscriptions, tracking orders, updating accounts, and handling escalations. It runs autonomously for straightforward requests and brings a human in for high stakes decisions. Built on Claude Sonnet 4 with MCP for tool integration, and the whole thing is wired up with per outcome pricing.

### How It Works

- **Agent Core.** Claude Sonnet 4 is the reasoning engine, with system prompts that encode support policy, escalation rules, and what the agent is and is not allowed to do. LangGraph manages conversation state so it can handle multi turn support scenarios without losing context.

- **MCP Tool Layer.** Model Context Protocol is how the agent talks to external systems. Stripe for payments, PostgreSQL for account data, email for follow ups, and a knowledge base for policy lookups. Each tool has a defined interface and permission scope.

- **Outcome Tracking Engine.** Every action gets classified. Refund processed, subscription changed, issue resolved, escalated to human. Each category has a price attached. PostgreSQL tracks all of this, not just for analytics but as the actual billing infrastructure.

- **Governance Layer.** High value actions like refunds over $100 or account deletions require human approval. The agent explains what it wants to do and why, then waits for a human to approve or redirect. Lower risk actions happen automatically. It is a sliding scale based on risk, not on what the agent is technically capable of doing.

- **Interface.** Next.js customer facing chat with real time action status. Internal dashboard showing agent performance, outcome distribution, cost per resolution, and escalation patterns.

### Key Decisions

- **MCP over custom integrations.** A standardized protocol means adding a new tool, like a CRM or ticketing system, is a configuration change instead of a code change. That is how you scale across different company toolsets.
- **Outcome pricing from day one.** I built the metering and billing layer alongside the agent, not after. The business model is the product. Outcome pricing gives buyers measurable ROI they can actually get approved.
- **Graduated autonomy model.** Not all actions are equal. The agent can process a $5,000 refund, but it should not do that without a human checking. The trust gradient maps to risk, not to technical capability.

## What I Learned

The MCP integration was smoother than expected. The graduated autonomy was not. I initially built a binary system where the agent either acts on its own or escalates to a human. That failed immediately because most support actions live in a gray zone. A $12 refund should be automatic. A $200 refund probably should too, but a $200 refund for someone who has already gotten three this month needs a human to look at it. The trust gradient ended up being more complex than the agent reasoning itself.

I also underestimated the outcome tracking infrastructure. Figuring out whether a ticket was truly "resolved" versus just "closed" is its own problem, and getting it wrong means your pricing is wrong.
