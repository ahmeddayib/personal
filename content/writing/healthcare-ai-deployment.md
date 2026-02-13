---
title: "Why Deployment Architecture Matters More Than Model Selection in Healthcare AI"
slug: "healthcare-ai-deployment"
date: "2025-11"
description: "The contrarian case against 'bigger model = better' in regulated industries, drawn from building a clinical trial matching engine."
category: "Essay"
featured: true
lastUpdated: "February 2026"
relatedSlugs:
  - "agent-governance-bet"
  - "agentic-market-map"
---

A less capable model running locally inside a hospital network will beat a more capable model running in the cloud. That's the contrarian claim, and it's the whole lesson from building a clinical trial matching engine with a dual model architecture.

I used DeepSeek R1 running locally for patient data processing and Claude 3.7 Sonnet in the cloud for eligibility criteria reasoning. The local model was less capable. It was also infinitely more deployable inside a hospital network. In healthcare, deployability is everything.

## The Deployment Trust Problem

Hospitals don't reject AI because it doesn't work. They reject AI because they can't deploy it within their compliance framework. Protected Health Information (PHI) can't leave the hospital network without patient consent and extensive legal review. This isn't a bureaucratic inconvenience. It's federal law (HIPAA), and the penalties for violations are severe.

Cloud only AI products face a binary choice in healthcare: either process PHI in the cloud (legal risk, slow adoption) or don't process PHI at all (limited utility). Most healthcare AI startups choose the first option and spend years navigating Business Associate Agreements, security reviews, and compliance approvals. Some never close a hospital deal because the compliance process outlasts the pilot budget.

The third option is local inference. Run the model inside the hospital's own infrastructure, and PHI never leaves the network. No BAA negotiation for the AI processing. No security review for data egress. The compliance team's primary objection disappears.

## Why Local Models Are Good Enough

The "bigger model = better" assumption fails in healthcare for three reasons:

**Clinical reasoning is narrow, not broad.** Matching a patient to a clinical trial requires evaluating specific eligibility criteria against specific patient data. This is a structured reasoning task with defined inputs and outputs, not an open ended generation task. A smaller, focused model handles it well.

**Explainability matters more than accuracy at the margin.** An oncologist won't act on a trial match recommendation they can't understand. A model that's 95% accurate with full reasoning traces is more useful than a model that's 98% accurate but opaque. Local models with explicit reasoning chains (like DeepSeek R1's chain of thought) provide the transparency clinicians need.

**Speed and availability trump peak capability.** A model that runs locally is always available, doesn't depend on internet connectivity, and responds in predictable time. In a clinical setting where a doctor has 15 minutes with a patient, network latency or API downtime isn't acceptable.

## The Dual Model Pattern

The architecture that works in healthcare isn't local only or cloud only. It's dual model:

- **Local model for PHI sensitive processing.** Patient records, medical histories, lab results, and any data that identifies a patient stays on premise. The local model extracts structured clinical features, evaluates patient side criteria, and produces intermediate representations that contain no PHI.
- **Cloud model for complex reasoning on non PHI data.** Eligibility criteria interpretation, cross trial analysis, and medical knowledge reasoning happen in the cloud using more capable models. The cloud model never sees patient data, only anonymized clinical features and trial criteria.

This pattern isn't a compromise. It's a better architecture. Each model operates in its optimal domain: the local model handles privacy sensitive extraction, the cloud model handles knowledge intensive reasoning. The interface between them is a clean, PHI free data layer.

## Who Is Building This

**Tempus ($6.1B valuation)** leads in genomic driven oncology AI but runs primarily on cloud infrastructure. Their moat is data. They've built the largest library of clinical and molecular data in oncology, and that data compounds. Every new hospital partnership makes the models better, which attracts more hospitals. But this data moat is also a ceiling: every new hospital deal requires navigating data sharing agreements and cloud compliance reviews. Tempus's cloud dependency means their adoption curve is gated by the speed of enterprise compliance, not the quality of their models. They'll own genomic oncology. The question is whether a deployment first competitor captures the broader clinical AI market while Tempus is locked in compliance cycles.

**Flatiron Health (acquired by Roche for $1.9B)** owns the oncology data layer but isn't building AI inference capabilities. They're a data company, not an AI deployment company.

**Epic Systems** has the distribution (hospital EHR installations) but moves slowly on AI integration. Their advantage is access, not technology.

The gap: no one has built a deployment first AI platform for healthcare that treats local inference as the core architecture rather than a fallback. The company that builds this will have structural advantages because once compliance approves a local inference pipeline, switching costs are enormous.

## The Broader Lesson: Financial Services

Healthcare is the clearest example of the deployment trust problem, but it's not unique. I'm focusing on financial services here because the SEC is actively tightening scrutiny on AI driven trading decisions, which makes the deployment trust question urgent in a way that legal and government verticals aren't yet.

Audit trail requirements in financial services mean AI systems need to log every decision with full provenance. When an AI system processes sensitive financial data (trading signals from earnings calls, portfolio positions, client information), the same deployment architecture applies: local processing for sensitive data, cloud processing for general reasoning on anonymized inputs. The SEC's increasing scrutiny of AI driven trading decisions means that "we sent your portfolio data to an API endpoint" is becoming as unacceptable in finance as "we sent your medical records to the cloud" is in healthcare.

The dual model pattern I built for clinical trial matching maps directly to financial AI: a local model that processes proprietary trading data and client information, producing structured signals that a cloud model can reason over without ever seeing the sensitive inputs. The firms that adopt this architecture first will have a compliance advantage that compounds over time, just like in healthcare.

Legal and government sectors face similar data residency requirements, but the financial services case is the most immediate because the regulatory pressure is intensifying now and the market size ($38B in AI for financial services) justifies purpose built infrastructure.

## Why This Matters

If you're building in healthcare AI, ask about deployment architecture before you ask about model performance. Specifically:

1. **Can the product operate with local inference?** If not, every hospital deal will take 12 to 18 months of compliance review.
2. **Does the architecture separate PHI processing from general reasoning?** Dual model architectures are a sign of real healthcare AI expertise.
3. **Has the product been deployed inside a hospital network?** Pilot agreements with cloud based processing don't count. The real test is running inside the hospital's infrastructure.

The $21.7B healthcare AI market will be won by companies that solve deployment trust, not by companies that wait for hospitals to relax their compliance requirements. The requirements aren't going to relax. The AI has to meet them where they are.
