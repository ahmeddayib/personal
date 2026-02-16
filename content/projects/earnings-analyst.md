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

I built this to explore a question. In regulated industries, does structured, auditable output matter more than raw model intelligence? Here is what I found.

## The Build

A system that reads earnings call transcripts, SEC filings, and market data, then produces structured intelligence briefs. It tracks sentiment over time, pulls out guidance numbers, flags risks, and finds trends across quarters. It runs on GPT 4o Structured Outputs so every piece of output follows a strict schema, which matters when the data feeds into trading systems and compliance workflows.

### How It Works

- **Data Ingestion Pipeline.** SEC EDGAR API pulls 10 Q and 10 K filings. yfinance fills in price data for context. Documents get split using custom logic I wrote for financial documents, because generic text splitters destroy tables and cut forward looking statements in half.

- **Structured Extraction Layer.** GPT 4o Structured Outputs handles all the extraction. Sentiment scores, guidance figures, risk factors, shifts in management tone. Everything comes back as valid JSON against a defined schema, and every data point links back to the exact passage it came from.

- **Vector Knowledge Base.** Chroma stores embeddings of historical earnings data so you can ask questions like "how did management tone on margins change from Q2 to Q3" and get cross quarter comparisons.

- **Intelligence Dashboard.** Streamlit interface showing quarter over quarter sentiment, guidance versus actuals, risk flags, and drill down to source text. It follows the analyst workflow. Scan the brief, investigate the flags, make the call.

### Key Decisions

- **Structured Outputs over function calling.** Guaranteed schema compliance means nothing downstream breaks on bad data. That is table stakes for institutional use.
- **Citation linked extractions.** Every data point links back to source text with a page and paragraph reference. Compliance teams will not use AI outputs without an audit trail.
- **Financial domain chunking.** I wrote custom document splitting because LangChain's defaults mangled financial tables and broke statements mid sentence. Preserving document structure turned out to be a prerequisite for everything else working.

## What I Learned

The financial document splitting was harder than I expected. It took custom logic to detect table boundaries, keep footnote references intact, and preserve safe harbor language blocks. Without that, the extraction layer was working with broken input before it even started.

The other challenge was schema design. My first schemas were too rigid and the model failed silently on edge cases, like earnings calls where management gave qualitative guidance instead of hard numbers. I went through four iterations before landing on something that handled the variance in how different companies report, with optional fields and fallback paths for non standard disclosures.
