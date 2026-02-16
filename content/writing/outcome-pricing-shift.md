---
title: "The End of Per Seat Pricing in AI Native SaaS"
slug: "outcome-pricing-shift"
date: "2025-10"
description: "Why outcome based pricing will replace per seat models in AI native SaaS, and what that means for incumbents."
category: "Essay"
featured: true
lastUpdated: "February 2026"
relatedSlugs:
  - "agentic-market-map"
  - "agent-governance-bet"
---

Per seat pricing made sense when software was a tool that humans used. You sold access to the tool, charged per user, and expanded by adding more users. The entire SaaS economy was built on this model. Salesforce, Zendesk, Intercom, Slack, every major SaaS company prices per seat.

AI agents break this model. When an agent resolves a support ticket, processes a refund, or qualifies a lead, who is the "user"? The agent isn't a seat. It's a worker that produces outcomes. Charging per seat for a worker that can handle thousands of tasks simultaneously doesn't make sense for the buyer or the seller.

I built an AI support agent with outcome based pricing infrastructure to test this idea. The technical challenge of building the agent was straightforward. The interesting part was the business model. Charging $0.10 when the agent processes a refund, $0.25 when it resolves a complex issue, $0 when it escalates to a human. Here's what I learned.

## Why Per Seat Dies

**The math doesn't work for buyers.** A support team of 50 agents at $50/seat/month costs $30,000/month. An AI agent that resolves 70% of tickets at $0.15/resolution handles the same volume for $3,000 to 5,000/month. The 6 to 10x cost reduction is too large for enterprise buyers to ignore, but only if they can measure it. Per seat pricing for the AI agent would obscure the comparison.

**Per seat creates perverse incentives.** Under per seat pricing, the vendor benefits when the customer adds more seats. Under outcome pricing, the vendor benefits when the agent resolves more issues. Outcome pricing aligns vendor incentives with customer success for the first time in SaaS history.

**Enterprise buyers want measurable ROI.** The CFO approving a $30,000/month support tool wants to know the cost per resolved ticket. Per seat pricing can't answer this question directly. Outcome pricing answers it by definition. Every dollar spent maps to a specific outcome.

## The CFO's Objection. Predictable Budgets

The strongest argument against outcome based pricing isn't technical. It's financial. CFOs want predictable line items. Per seat pricing gives them that. 50 seats × $50/month = $2,500/month, every month. Outcome pricing introduces variability. A spike in support tickets means a spike in cost.

This is a real objection, and it's why the transition won't be binary. The likely path is hybrid models: a base platform fee that covers infrastructure and a minimum commitment, plus variable outcome based pricing on top. Think of it like a cloud computing bill. A reserved instance baseline with on demand scaling. Sierra is already experimenting with this structure at the enterprise level.

The hybrid model gives CFOs their budget predictability while preserving the incentive alignment that makes outcome pricing powerful. The companies that figure out this pricing architecture (where to draw the line between fixed and variable) will have a structural advantage in sales cycles.

## Why Incumbents Can't Make the Switch

Zendesk, Intercom, Freshdesk, and every other support platform could, in theory, add AI agents with outcome based pricing. In practice, they can't. Here's why.

**Revenue model dependency.** Zendesk's entire revenue base is per seat. Switching existing customers to outcome pricing would cannibalize revenue in the short term, even if it's the right long term move. Public company quarterly earnings pressure makes this transition nearly impossible to execute.

**Architecture mismatch.** Legacy support platforms were built as ticket management systems. The agent is an add on that sits on top of the ticket system. AI native support platforms are built around the agent, with the ticket system as a logging layer. The architectural difference is fundamental, not incremental.

**Sales motion conflict.** Per seat pricing produces predictable, seat based revenue that scales with the customer's headcount. Outcome pricing produces variable revenue that scales with the customer's ticket volume. The sales team, the finance team, and the investor relations team all need to change how they model the business. This is a multi year organizational transformation.

## The Mid Market Gap

Sierra ($10B+ valuation) proved the category at the enterprise level. They sell to Fortune 500 companies with dedicated AI budgets and long sales cycles. Decagon ($35M Series A) is going after a similar enterprise market.

The mid market is wide open. SaaS companies doing 1,000 to 10,000 support tickets per month don't have dedicated AI budgets. They need a solution that's obviously cheaper, obviously better, and doesn't require a 6 month implementation. Outcome based pricing is the unlock for this market because the value proposition is self evident. You pay when the agent resolves something, you don't pay when it doesn't.

The go to market motion for mid market looks fundamentally different from enterprise. It's product led. Self serve onboarding, usage based pricing from day one, and time to value measured in hours not months. The specific wedge I'd target is Shopify merchants and SMB SaaS companies. They already understand usage based billing (Shopify charges per transaction), they have high support ticket volumes relative to team size, and they're underserved by enterprise focused AI support tools.

The unit economics question is whether outcome pricing at SMB scale generates enough revenue per customer to sustain the business. At $0.15/resolution and 2,000 tickets/month with 70% AI resolution, that's ~$210/month per customer. Not enterprise scale revenue, but with product led acquisition costs near zero and gross margins above 80% (the marginal cost of an AI resolution is a few cents in API calls), it's a viable wedge to prove the model before moving upmarket.

## What Outcome Pricing Requires

Building outcome based pricing isn't just a billing change. It requires

**Outcome classification.** The system needs to know what counts as a "resolved" ticket versus an "escalated" ticket versus a "deflected" ticket. This requires a classification model that runs alongside the agent, evaluating every interaction for outcome quality.

**Metering infrastructure.** Every agent action needs to be tracked, classified, and priced. This is the equivalent of usage based billing infrastructure (like what Orb or Metronome provides for API companies), but for agent outcomes.

**Transparency dashboards.** Customers need to see exactly what they're paying for. A real time dashboard showing outcomes, costs, and agent performance is mandatory. Opaque outcome pricing would be worse than per seat pricing because customers wouldn't trust it.

**Quality guarantees.** If the agent marks a ticket as "resolved" but the customer comes back, does the company still pay? Outcome pricing requires a definition of quality, not just a count of actions.

## What I Think Happens

Within three years (by end of 2028), the majority of new AI native SaaS companies in customer service will use outcome based pricing as their primary model, and at least one $1B+ company will have been built on it.

If this doesn't happen, it means either (a) the cost advantage of AI agents wasn't as large as projected, making outcome pricing unnecessary, (b) incumbents successfully added AI agents without changing their pricing model, or (c) a different pricing model (usage based per token, or hybrid) won instead.

I think the prediction is directionally right even if the timing is slightly off. The economic logic is too strong: buyers want to pay for outcomes, and AI agents can deliver measurable outcomes. The pricing model shift is the business model innovation that matters more than any model improvement.

## What This Means for Infrastructure

If outcome pricing wins, it changes the entire SaaS stack.

**Billing infrastructure is the most immediate opportunity.** Orb and Metronome are building usage based billing for API companies, but neither has purpose built outcome based metering yet. Stigg and Lago are open source alternatives approaching the problem from the developer tooling side. The company that adds outcome classification on top of usage metering (understanding not just "how many API calls" but "how many successful resolutions") captures the billing layer for every AI native SaaS company.

**Revenue analytics companies** (ChartMogul, Baremetrics) need new metrics. "Seats" and "MRR per seat" don't apply. "Cost per outcome" and "resolution rate" become the key metrics.

**Sales tooling** needs to change. Enterprise sales for outcome priced products is ROI first. "We'll save you X per ticket" rather than "here's the per seat price."

The companies that build tooling for the outcome pricing economy have a large opportunity, because every AI native SaaS company will need this infrastructure.
