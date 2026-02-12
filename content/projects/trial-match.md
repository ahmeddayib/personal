---
title: "Clinical Trial Matching Engine"
slug: "trial-match"
date: "2025-02"
featured: false
tags: ["AI/ML", "Healthcare AI", "RAG", "Open-Source Models", "Biotech"]
tech: ["DeepSeek R1", "Claude 3.7 Sonnet", "ClinicalTrials.gov API", "Synthea", "Pinecone", "LlamaIndex", "FastAPI", "React"]
github: null
demo: null
image: "/images/projects/trial-match-cover.jpg"
marketCategory: "Biotech / Healthcare AI"
problemStatement: "40% of cancer clinical trials fail to enroll enough patients, not because eligible patients don't exist, but because matching patients to trials requires synthesizing complex eligibility criteria across thousands of active studies against nuanced medical histories"
thesis: "Tempus built a $6.1B business on genomic data, but their cloud dependency gates every hospital deal on compliance cycles. Open-source reasoning models running locally solve the PHI compliance problem that has blocked hospital adoption. The clinical trial matching wedge is a $4.3B opportunity where AI can measurably save lives, and the regulatory environment is finally enabling it."
---

I built this to answer a question: does where a model runs matter more than which model you pick? Here is what I learned.

## The Build

A RAG powered system that matches synthetic patient profiles against the full ClinicalTrials.gov database using a dual model architecture: DeepSeek R1 for local, PHI safe reasoning over patient records and Claude 3.7 Sonnet for complex eligibility criteria interpretation. The system processes unstructured medical narratives, extracts structured clinical features, and ranks trial matches with explainable reasoning chains.

### Architecture

**Patient Data Pipeline:** Synthea generates realistic synthetic patient records (demographics, conditions, medications, lab results, procedures) in FHIR format. A clinical NLP layer extracts structured features (diagnosis codes, biomarkers, treatment history, performance status) from unstructured clinical narratives.

**Trial Knowledge Base:** ClinicalTrials.gov API ingests active trials with full eligibility criteria. LlamaIndex processes inclusion/exclusion criteria into structured, queryable representations. Pinecone stores trial embeddings with metadata filters for phase, condition, location, and status.

**Dual Model Reasoning:** DeepSeek R1 runs locally for PHI sensitive patient data processing, ensuring no patient information leaves the hospital network. Claude 3.7 Sonnet handles complex eligibility logic requiring extended reasoning (multi step criteria evaluation, temporal reasoning about treatment history, biomarker threshold analysis).

**Match Interface:** React frontend displays ranked trial matches with match score breakdowns, eligibility criterion by criterion evaluation, and reasoning traces. Clinicians see exactly why a patient matched or didn't match each criterion.

### Key Technical Decisions

- **Dual model architecture (local + cloud):** PHI never leaves the local environment. DeepSeek R1 handles patient side reasoning; Claude handles trial side reasoning. This isn't a technical compromise. It's the only deployment architecture hospitals will approve.
- **Reasoning traces over black box scores:** Oncologists won't act on a match score without understanding why. Extended thinking from both models provides step by step eligibility reasoning that clinicians can verify.
- **Synthea for development, FHIR for production:** Building on synthetic data with the same schema as production EHR systems means the pipeline is production ready without ever touching real PHI during development.

## What I Learned

Before building this, I assumed the most important technical decision in healthcare AI was model selection. It's not. It's deployment architecture. DeepSeek R1 running locally isn't as capable as Claude 3.7 Sonnet, but it's infinitely more deployable in a hospital. The dual model pattern (local for sensitive data, cloud for complex reasoning on non PHI content) is the template for all healthcare AI that handles protected data. Deployment architecture is the bottleneck, not model performance.
