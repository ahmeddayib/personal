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

I built this to answer a question: is the pricing model more important than the agent architecture? Here is what I learned.

## The Build

A fully agentic customer support system that doesn't just answer questions but takes actions. Refund processing, subscription modifications, order tracking, account changes, and escalation management, all executed autonomously with human in the loop for high stakes decisions. Built on Claude Sonnet 4 with MCP tool integration, tracked with per outcome pricing infrastructure.

### Architecture

**Agent Core:** Claude Sonnet 4 as the primary reasoning engine with system prompts encoding support policy, escalation rules, and action boundaries. LangGraph manages conversation state, enabling multi turn resolution flows that maintain context across complex support scenarios.

**MCP Tool Layer:** Model Context Protocol integrates external systems as tools the agent can invoke: Stripe for payment operations, PostgreSQL for account data, email for follow ups, knowledge base for policy lookup. Each tool has defined input/output schemas and permission scopes.

**Outcome Tracking Engine:** Every agent action is classified into outcome categories (refund processed, subscription changed, issue resolved, escalated to human) with associated pricing tiers. PostgreSQL tracks resolution metrics, agent performance, and per outcome billing data. This isn't just analytics. It's the pricing infrastructure.

**Governance Layer:** OpenAI Agents SDK provides guardrails for action authorization. High value actions (refunds over $100, account deletions) require human approval. The agent explains its reasoning and proposed action; a human approves or redirects. This creates a trust gradient from fully autonomous (FAQ answers) to human approved (financial actions).

**Interface:** Next.js customer facing chat with real time action status. Internal dashboard shows agent performance, outcome distribution, cost per resolution, and escalation patterns.

### Key Technical Decisions

- **MCP over custom integrations:** MCP provides a standardized protocol for tool integration. Adding a new tool (CRM, ticketing system, inventory) is a configuration change, not a code change. This is how agents scale across enterprise tool stacks.
- **Outcome based pricing infrastructure from day one:** Building the metering and billing layer alongside the agent, not as an afterthought. The business model IS the product. Outcome pricing aligns incentives and creates measurable ROI that enterprise buyers can approve.
- **Graduated autonomy model:** Not all actions are equal. The trust gradient (autonomous to supervised to human approved) maps to risk levels, not technical capability. The agent CAN process a $5,000 refund, but it SHOULDN'T without human approval.

## What I Learned

The MCP integration was smoother than expected. What was not smooth was the graduated autonomy model. I initially built a binary system: the agent either acts autonomously or escalates to a human. That failed immediately because most support actions exist in a gray zone. A $12 refund should be automatic. A $200 refund probably should too, but a $200 refund for a customer who has already gotten three refunds this month needs a human. The trust gradient ended up being the most complex part of the system, more nuanced than the agent reasoning itself. I also underestimated how much infrastructure the outcome tracking requires. Classifying whether a ticket was truly "resolved" versus just "closed" is its own ML problem, and getting it wrong means your pricing is wrong.
