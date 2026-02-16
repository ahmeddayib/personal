---
title: "Multi-Agent Workflow Orchestrator"
slug: "agent-orchestrator"
date: "2025-09"
featured: false
tags: ["AI/ML", "Multi-Agent Systems", "Agent Governance", "Productivity", "Orchestration"]
tech: ["GPT-5", "Claude Sonnet 4.5", "CrewAI", "LangGraph", "MCP", "Anthropic Computer Use", "Next.js", "PostgreSQL"]
github: null
demo: null
image: "/images/projects/agent-orchestrator-cover.jpg"
marketCategory: "Productivity / Agentic AI Infrastructure"
problemStatement: "Enterprises can build individual AI agents, but orchestrating multiple agents to complete complex workflows with proper governance, cost control, and audit trails remains unsolved, blocking adoption of agentic AI for real business processes"
thesis: "Datadog built a $40B business making cloud infrastructure observable; the same gap exists for AI agents. The adoption bottleneck isn't agent capability; it's governance. The real buyer isn't the CTO; it's the CFO who needs to approve budgets for autonomous systems that make decisions. Agent governance (audit trails, cost controls, approval workflows) is the unlock, and whoever builds it becomes the Kubernetes of the agent era."
---

I built this to test a hypothesis. That governance, not capability, is the real thing blocking enterprise agent adoption. Here is what I found.

## The Build

A platform where multiple AI agents work together on workflows like research, analysis, content generation, and data processing. The interesting part is not the agents themselves but the governance layer sitting on top of them. Real time cost tracking, approval gates, audit trails, and the ability to roll back when something goes wrong. It uses GPT 5 and Claude Sonnet 4.5, with CrewAI coordinating the agents and LangGraph managing state.

### How It Works

- **Agent Registry.** Four specialized agents, each with a defined role, tool access, and spending limit. A research agent that browses the web and analyzes documents. An analysis agent for processing data. A writing agent for content. A code agent that uses Anthropic Computer Use for development tasks.

- **Orchestration Engine.** CrewAI handles how agents collaborate. Sometimes they work in sequence, sometimes in parallel, sometimes one delegates to another. LangGraph keeps track of where the workflow is at any given moment. The orchestrator decides which agent handles which piece of work, manages the handoffs, and deals with it when two agents disagree.

- **Governance Layer.** This is what makes it more than just agents talking to each other. Dashboards show what each agent is spending, what tools it is calling, and what decisions it is making. If costs get too high or an agent tries to do something risky, the workflow pauses and waits for approval. Everything gets logged so you can review any decision the system made.

- **Workflow Builder.** A Next.js interface where users wire agents together as a graph. Templates for common things like research reports and competitive analysis. PostgreSQL stores the full workflow state, so if something breaks at step 7 you can roll back to step 6 and try again with different settings.

### Key Decisions

- **Multi model architecture.** GPT 5 for tasks needing broad reasoning, Claude Sonnet 4.5 for analysis and code generation. Picking the model per agent instead of per platform lets you balance quality and cost.
- **Governance first design.** Most agent platforms add governance as an afterthought. I built cost controls and approval gates directly into the orchestration layer so governance is part of how workflows run, not something bolted on top.
- **DAG based workflows.** Real work has dependencies, parallel steps, and conditional branches. People think in workflows, not in agent configurations.

## What I Learned

The biggest surprise was how fragile multi agent workflows are at the handoff points. Two agents can each be individually reliable, but when one passes output to another, format assumptions break constantly. I spent more time building validation and retry logic between agents than I spent on any individual agent. The fix was treating every handoff like an API contract with explicit schemas and fallback behaviors.

The other thing I did not expect was that cost tracking had to live inside the orchestration layer, not on top of it. By the time a workflow finishes and you tally costs after the fact, you have already overspent. Real time tracking that can pause a workflow mid execution turned out to be the feature that made everything else work.
