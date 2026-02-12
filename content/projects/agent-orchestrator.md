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

I built this to answer a question: is governance the real bottleneck for enterprise agent adoption, not agent capability? Here is what I learned.

## The Build

A multi agent orchestration platform where specialized agents collaborate on complex workflows (research, analysis, content generation, data processing) with a governance layer that provides real time cost tracking, approval gates, audit trails, and rollback capabilities. Built on GPT 5 and Claude Sonnet 4.5 with CrewAI for agent coordination and LangGraph for workflow state management.

### Architecture

**Agent Registry:** Specialized agents with defined roles, capabilities, tool access, and spending limits. A Research Agent with web access and document analysis. An Analysis Agent with data processing and reasoning. A Writing Agent with content generation. A Code Agent with Anthropic Computer Use for development tasks. Each agent has a capability manifest and cost ceiling.

**Orchestration Engine:** CrewAI manages agent collaboration patterns: sequential pipelines, parallel fan out, hierarchical delegation. LangGraph tracks workflow state across multi step processes. The orchestrator decides which agent handles which subtask, manages hand offs, and resolves conflicts when agents produce contradictory outputs.

**Governance Layer:** The core differentiator. Real time dashboards show per agent cost accrual, token usage, tool invocations, and decision logs. Approval gates pause workflows when cumulative cost exceeds thresholds or when agents propose high stakes actions. Full audit trails record every agent decision, tool call, and output for compliance review.

**Workflow Builder:** Next.js interface where users define workflows as DAGs. Connect agents, set triggers, configure approval gates, define success criteria. Templates for common patterns (research report, competitive analysis, data pipeline, content calendar) provide starting points.

**Persistence & Recovery:** PostgreSQL stores workflow state, enabling pause/resume, rollback to any checkpoint, and replay with modified parameters. If an agent produces a bad output at step 7 of a 10 step workflow, you can rollback to step 6 and re run with different parameters.

### Key Technical Decisions

- **Multi model architecture:** GPT 5 for tasks requiring broad knowledge and reasoning, Claude Sonnet 4.5 for tasks requiring careful analysis and code generation. Model selection per agent, not per platform, optimizes for capability and cost.
- **Governance first design:** Most agent platforms add governance as an afterthought. Building cost controls, approval gates, and audit trails into the orchestration layer (not on top of it) means governance doesn't slow down workflows. It's woven into them.
- **DAG based workflow definition:** Complex workflows have dependencies, parallelization opportunities, and conditional branches. DAGs (Directed Acyclic Graphs) naturally model this. Users think in workflows, not in agent configurations.

## What I Learned

The biggest surprise was how fragile multi agent workflows are at the handoff points. Two agents can each be individually reliable, but when Agent A passes output to Agent B, the format assumptions break constantly. I spent more time building schema validation and retry logic between agents than I spent on any individual agent's capabilities. LangGraph helped with state management, but the real fix was treating every inter agent handoff as an API contract with explicit schemas and fallback behaviors. The other thing I did not expect: cost tracking had to be built into the orchestration layer itself, not layered on top. By the time a workflow finishes and you tally costs after the fact, you have already overspent. Real time cost accrual that can pause a workflow mid execution turned out to be the feature that made everything else work.
