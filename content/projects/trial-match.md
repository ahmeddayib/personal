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

I built this to find out whether where a model runs matters more than which model you pick. Here is what I found.

## The Build

A system that matches patient profiles against the full ClinicalTrials.gov database. It uses two models. DeepSeek R1 runs locally to handle patient data so nothing sensitive leaves the hospital network. Claude 3.7 Sonnet handles the complex eligibility criteria interpretation. The system reads unstructured medical notes, extracts structured clinical features, and ranks trial matches with step by step reasoning you can follow.

### How It Works

- **Patient Data Pipeline.** Synthea generates realistic synthetic patient records in FHIR format, covering demographics, conditions, medications, lab results, and procedures. A clinical NLP layer pulls structured features out of unstructured notes, things like diagnosis codes, biomarkers, treatment history, and performance status.

- **Trial Knowledge Base.** ClinicalTrials.gov API brings in active trials with their full eligibility criteria. LlamaIndex processes the inclusion and exclusion criteria into structured representations you can actually query against. Pinecone stores trial embeddings with filters for phase, condition, location, and status.

- **Dual Model Reasoning.** DeepSeek R1 runs locally and handles everything involving patient information. Claude 3.7 Sonnet handles the eligibility logic that needs deeper reasoning, like multi step criteria evaluation, temporal reasoning about treatment timelines, and biomarker threshold analysis. The two models split the work by where the data lives.

- **Match Interface.** React frontend showing ranked trial matches with score breakdowns, criterion by criterion evaluation, and full reasoning traces. A clinician can see exactly why a patient matched or did not match each criterion.

### Key Decisions

- **Dual model architecture (local + cloud).** This is not a compromise. It is the only architecture hospitals will actually approve. Patient data stays local. Trial data goes to the cloud. Clean separation.
- **Reasoning traces over black box scores.** Oncologists will not act on a match score they cannot understand. Both models show their step by step thinking so clinicians can verify against their own judgment.
- **Synthea for development, FHIR for production.** Building on synthetic data that follows the same schema as production EHR systems means the pipeline works with real data without ever touching real patient information during development.

## What I Learned

Getting DeepSeek R1 to produce consistent structured output from messy clinical narratives was the hardest part. Synthea generates clean records, but real clinical notes are full of abbreviations, contradictions, and implied context that the model would hallucinate around. I added a preprocessing step to normalize shorthand and flag ambiguous entries as uncertain instead of letting the model guess.

The other challenge was eligibility criteria with nested logic. Something like "must have EGFR mutation AND (no prior immunotherapy OR completed immunotherapy more than 6 months ago)" needed custom parsing because the default chunking flattened the boolean structure. The model would evaluate criteria independently instead of as a group, which gave wrong results.
