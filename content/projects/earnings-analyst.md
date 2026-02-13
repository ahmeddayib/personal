---
title: "AI Earnings Intelligence Analyst"
slug: "earnings-analyst"
date: "2024-08"
featured: false
tags: ["AI/ML", "Financial NLP", "Structured Outputs", "Capital Markets"]
tech: ["GPT-4o Structured Outputs", "SEC EDGAR API", "yfinance", "Chroma", "LangChain", "Streamlit", "Python"]
github: null
demo: null
image: "/images/projects/earnings-analyst-cover.jpg"
marketCategory: "Capital Markets / Financial Intelligence"
problemStatement: "Earnings calls contain alpha-generating signals buried in 10,000+ words of management commentary, but analysts manually review them under time pressure, missing nuance and patterns across quarters"
thesis: "Bloomberg built a $15B/yr terminal business on structured financial data. The next Bloomberg disrupts unstructured financial intelligence (earnings calls, SEC filings, management guidance) with AI that extracts structured signals at machine speed. The $38B AI in financial services market rewards systems that create auditable, trust-layered outputs institutional investors can actually act on."
---

I built this to answer a question: does structured, auditable output matter more than model intelligence for adoption in regulated industries? Here is what I learned.

## The Build

An AI system that ingests earnings call transcripts, SEC filings, and market data, then produces structured intelligence briefs with sentiment trajectories, guidance extraction, risk flag detection, and cross quarter trend analysis. Built on GPT 4o's Structured Outputs to guarantee schema compliant JSON, which is critical for downstream consumption by trading systems and compliance workflows.

### Architecture

**Data Ingestion Pipeline:** SEC EDGAR API pulls 10 Q/10 K filings and earnings transcripts. yfinance provides price action and fundamentals for context. Raw documents are chunked with financial domain aware splitting (preserving tables, footnotes, and forward looking statement blocks).

**Structured Extraction Layer:** GPT 4o Structured Outputs enforces strict JSON schemas for every extraction: sentiment scores, guidance figures, risk factors, management tone shifts. No free text hallucination. Every output field maps to a source passage with citation.

**Vector Knowledge Base:** Chroma stores embeddings of historical earnings data, enabling cross quarter comparisons ("How did management tone on margins change from Q2 to Q3?") and peer benchmarking.

**Intelligence Dashboard:** Streamlit interface with quarter over quarter sentiment trajectories, guidance vs. actuals tracking, automated risk flags, and drill down to source passages. Designed for the analyst workflow: scan the brief, investigate the flags, make the call.

### Key Technical Decisions

- **Structured Outputs over function calling:** Guaranteed schema compliance means downstream systems never break on malformed data. This is table stakes for institutional adoption.
- **Citation linked extractions:** Every data point links to source text with page/paragraph reference. Compliance teams won't touch AI outputs without audit trails.
- **Financial domain chunking:** Generic text splitters destroy table structures and break forward looking statements mid sentence. Custom splitters preserve financial document semantics.

## What I Learned

The financial domain chunking was far harder than I expected. Generic text splitters from LangChain destroyed table structures in 10 K filings and split forward looking statements mid sentence, which meant the extraction layer was working with mangled input before it even started. I had to write custom splitting logic that detected table boundaries, preserved footnote references, and kept safe harbor language blocks intact. The other surprise was Structured Outputs schema design. My first schemas were too rigid and the model would fail silently on edge cases like earnings calls where management gave qualitative guidance instead of numbers. I went through four schema iterations before landing on one that handled the variance in how different companies report, with optional fields and fallback extraction paths for non standard disclosures.
