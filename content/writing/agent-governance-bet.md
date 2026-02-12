---
title: "Agent Governance Will Become a Platform Category"
slug: "agent-governance-bet"
date: "2025-12"
description: "Why governance is the real bottleneck for enterprise agent adoption, and who's positioned to own it."
category: "Essay"
featured: true
lastUpdated: "February 2026"
relatedSlugs:
  - "agentic-market-map"
  - "outcome-pricing-shift"
---

Here's the bet: agent governance will become a standalone platform category within two years, and the company that owns it will be worth more than any individual agent application company. This isn't an observation about the market. It's a prediction with stakes.

## The Problem No One Is Solving

Every enterprise conversation about AI agents hits the same wall. It's not "can the agent do the task?" The models are good enough. It's not "can the agent use our tools?" MCP is solving that. The wall is: "who approved this, how much did it cost, and can we audit it?"

I built a multi agent orchestrator to test this idea. The technical challenge of making agents collaborate was interesting but increasingly routine. The hard problem was making a hypothetical CFO comfortable with autonomous systems that make decisions and spend money. Cost ceilings, approval gates, audit trails, and rollback capabilities aren't enterprise overhead. They're the reason enterprises adopt.

The buyer for enterprise agent systems isn't the CTO. It's the CFO. And the CFO needs three things: predictable costs, audit trails, and a kill switch.

## Why Governance Is a Platform, Not a Feature

LangChain is adding governance features. CrewAI is adding governance features. Every agent framework is adding governance features. This is the wrong approach, and here's why:

**Governance needs to be model agnostic and framework agnostic.** An enterprise running some agents on GPT-5, some on Claude, and some on open source models needs a single governance layer across all of them. A governance feature inside LangChain doesn't help with agents running on CrewAI.

**Governance requires its own data model.** Cost accrual, approval workflows, audit logs, and compliance reports are a fundamentally different data model from agent orchestration. Bolting them onto an orchestration framework produces a worse version of both.

**Governance is where the enterprise buying decision happens.** The CTO evaluates agent capabilities. The CFO approves agent budgets. The compliance team approves agent deployment. A platform that serves all three buyers has a more defensible position than a framework that serves only the first.

## The Kubernetes Analogy (And Why It's Incomplete)

Containers were useful individually. But enterprises didn't adopt them at scale until Kubernetes solved orchestration, scheduling, networking, and observability. Kubernetes didn't make containers better. It made containers governable. Agent governance is in the same phase: individual agents work, multi agent workflows work, but enterprises won't deploy them at scale until someone solves the governance layer.

But here's why the Kubernetes analogy understates the difficulty: Kubernetes schedules compute. Agent governance governs financial decisions. When a Kubernetes pod fails, you lose some compute cycles. When an ungoverned agent fails, it might execute a $50,000 transaction, send an email to a client with wrong information, or make a compliance violating decision that triggers regulatory action. The consequences are financial and reputational, not just operational. This means the governance platform needs to be even more robust than Kubernetes. It needs real time cost tracking, approval gates with SLAs, and rollback capabilities that can unwind multi step business processes, not just restart containers.

## What I Think the Winning Company Looks Like

The winning agent governance platform will have:

- **Real time cost tracking per agent and per workflow.** Not just token counts, but actual dollar costs including tool invocations, API calls, and compute.
- **Configurable approval gates.** Low risk actions auto approved. Medium risk actions require async approval. High risk actions require synchronous human in the loop.
- **Full audit trails.** Every agent decision, every tool call, every output, logged and searchable. This is table stakes for regulated industries.
- **Rollback capabilities.** If an agent makes a bad decision at step 7 of a 10 step workflow, you can roll back to step 6 and rerun.
- **Predictive governance.** Over time, the system learns which actions need human approval and which can be auto approved based on risk patterns.

## Who's Positioned Today

Honestly? No one is positioned well. That's what makes this interesting, and what makes it a startup opportunity rather than an incumbent expansion.

**Why doesn't this exist yet?** Two reasons. First, agent adoption is still early enough that most enterprises are running single agents, not multi agent workflows. Governance becomes urgent when agents coordinate, spend money, and take actions across systems. We're just now entering that phase. Second, the founding team required is rare: you need deep infrastructure engineering (the Datadog/HashiCorp DNA of building developer facing observability and policy tooling) combined with enterprise sales experience (understanding how CFOs and compliance teams buy). Most AI founders have neither.

- **LangChain/LangGraph:** Has developer mindshare but is trying to be everything (framework + platform + governance). The "do everything" approach dilutes focus on governance.
- **Salesforce Agentforce:** Has enterprise relationships but is platform locked. Governance for Salesforce agents only isn't a platform category.
- **Microsoft:** Could build this into Azure, but their track record on developer tooling governance (see: Azure DevOps) suggests they'll build something adequate but not category defining.
- **Startups:** The gap is wide open for a startup that builds governance as the core product, not as a feature of something else.

**The startup I'd want to see:** A founding team with Datadog or HashiCorp DNA. People who've built enterprise observability and infrastructure policy tooling. Open source governance layer in year one to build developer adoption and community trust (the same playbook HashiCorp used with Terraform and Vault). Cloud hosted platform in year two for enterprise customers who want managed governance. Sell to the CFO and compliance team from day one, not the CTO.

## What I Think Happens

By the end of 2027, there will be at least one major agent governance company that was founded after 2024. The company will sell to the CFO and compliance team, not to the CTO. It will be framework agnostic and model agnostic. And it will be the layer that makes enterprise agent deployment possible at scale.

**Why faster than historical precedent?** Datadog took 8 years from founding (2010) to IPO (2019). HashiCorp took 8 years from founding (2012) to IPO (2021). Agent governance should reach the $1B mark faster for one reason: compressed adoption curves. Cloud infrastructure adoption took a decade because enterprises had to migrate existing workloads. Agent adoption is greenfield: there are no existing agent workloads to migrate, just new ones to govern. And unlike cloud containers, which were cost neutral to the business, agents spend money from day one. Every agent that processes a refund, executes a trade, or sends a customer communication has immediate financial consequences. The governance pain is acute from the first deployment, not something that accumulates gradually over years.

If this doesn't happen, it means either: (a) agent adoption stalled for other reasons, (b) the cloud providers absorbed governance into their platforms before a startup could win, or (c) I'm wrong about governance being a standalone category and it turns out to be a feature. I think (c) is most likely to be wrong. Governance is too important and too complex to be a feature.

**Where I think this is heading:** A founding team with enterprise infrastructure DNA, ideally ex Datadog, ex HashiCorp, or ex Stripe. Open source governance layer in year one, cloud product in year two. First enterprise customers from the compliance and finance buyer, not the engineering buyer.
