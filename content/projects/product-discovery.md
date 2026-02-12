---
title: "Multimodal Product Discovery Engine"
slug: "product-discovery"
date: "2025-12"
featured: false
tags: ["AI/ML", "Multimodal AI", "E-Commerce", "Visual Search", "Platform APIs"]
tech: ["Gemini 3.0 Flash", "OpenCLIP", "GPT-5.2", "Shopify APIs", "Weaviate", "Whisper v3", "Next.js", "Python"]
github: null
demo: null
image: "/images/projects/product-discovery-cover.jpg"
marketCategory: "E-Commerce / Visual Commerce"
problemStatement: "E-commerce search is fundamentally broken. Shoppers know what they want visually but can only search with keywords, creating a 75% cart abandonment rate partly driven by the inability to find products that match what they envision"
thesis: "E-commerce is a $6.3T market where product discovery is still keyword-based. Google processes 20B visual searches per month, proving consumer demand for visual-first shopping. Shopify's 4.61M stores need multimodal search but can't build it. AI-powered product discovery drives 4X conversion over traditional search. The platform distribution play, plugging into Shopify's ecosystem, turns this from a startup into infrastructure."
---

I built this to answer a question: does distribution through an existing platform ecosystem beat technology differentiation? Here is what I learned.

## The Build

A multimodal product discovery platform that lets shoppers search with images, voice, text, or any combination ("find me something like this photo but in blue and under $50"). Built on Gemini 3.0 Flash for multimodal understanding, OpenCLIP for visual embeddings, and GPT 5.2 for conversational commerce, with native Shopify integration for instant deployment to 4.61M stores.

### Architecture

**Multimodal Intake:** Shoppers can search via photo upload (find similar products), voice description (Whisper v3 transcription + intent extraction), text query, or hybrid (photo + "but in blue"). Every modality is normalized into a unified query representation that captures visual features, semantic intent, and constraints (price, size, color, brand).

**Visual Embedding Engine:** OpenCLIP generates visual embeddings for every product in the catalog. Products are embedded not just by their primary image but by multiple angles, lifestyle context, and extracted attributes (pattern, texture, silhouette). Weaviate stores these embeddings with hybrid search capability, combining vector similarity with metadata filters.

**Conversational Discovery:** GPT 5.2 powers a shopping assistant that maintains conversation context. "Show me summer dresses" then "something more casual" then "in that blue from the photo I uploaded" then "under $80." Each turn refines the search, and the system remembers the full conversation context, building a preference profile in real time.

**Shopify Integration Layer:** Native Shopify APIs for catalog sync, inventory checking, cart management, and checkout. New products are automatically embedded and indexed. The system respects Shopify's variant structure (size/color/style), inventory levels, and pricing rules. Deployed as a Shopify app for one click installation.

**Analytics Dashboard:** Merchant facing analytics showing search to purchase funnels by modality, visual search conversion rates, trending visual queries, and product discovery gaps (searches with no good matches, indicating inventory opportunities).

### Key Technical Decisions

- **Gemini 3.0 Flash for multimodal understanding:** Fastest multimodal model available for real time search. Sub 200ms response times are non negotiable for e commerce, since shoppers abandon after 3 seconds.
- **OpenCLIP over proprietary vision models:** Open source visual embeddings mean no per query vision API costs at scale. At 1M+ daily searches, API based vision models are cost prohibitive. OpenCLIP runs on premise with fixed infrastructure cost.
- **Shopify first distribution:** Building for Shopify's 4.61M stores isn't a platform bet. It's a distribution strategy. The Shopify app ecosystem provides discovery, installation, and billing infrastructure. Merchants don't evaluate AI vendors. They install apps.

## What I Learned

The technical surprise was embedding quality at catalog scale. OpenCLIP embeddings worked well for the first few hundred products, but at 10,000+ SKUs the similarity search started returning visually irrelevant results. The problem was that product photography is not natural photography. A white t shirt on a white background against another white t shirt on a white background produces nearly identical embeddings even when the products are different. I had to build a secondary embedding pass that extracted specific attributes (neckline shape, sleeve length, fabric texture) and combined those with the visual similarity scores. The other thing I learned: sub 200ms latency is genuinely hard when you are combining vector search, metadata filtering, and LLM reranking in a single query. Weaviate's hybrid search helped, but I ended up caching the reranking step aggressively, which meant stale results for newly added products until the cache refreshed.
