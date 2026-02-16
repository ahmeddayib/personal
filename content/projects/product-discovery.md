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

I built this to explore whether distribution through an existing platform beats having better technology. Here is what I found out.

## The Build

A product search tool that lets shoppers find things using images, voice, text, or any combination. Something like "find me something like this photo but in blue and under $50." It uses Gemini 3.0 Flash for understanding multimodal queries, OpenCLIP for visual similarity, and GPT 5.2 for conversational shopping. It plugs directly into Shopify so any of their 4.61M stores can install it.

### How It Works

- **Multimodal Intake.** Shoppers can search however feels natural. Upload a photo to find similar products. Describe what they want by voice (Whisper v3 handles the transcription). Type a query. Or combine them, like a photo plus "but in blue." Everything gets turned into a single representation that captures visual features, meaning, and constraints like price or size.

- **Visual Embedding Engine.** OpenCLIP generates embeddings for every product in the catalog, not just from the main image but from multiple angles and extracted attributes like pattern, texture, and shape. Weaviate stores all of this and handles search by combining visual similarity with metadata filters.

- **Conversational Discovery.** GPT 5.2 powers a shopping assistant that remembers conversation context. "Show me summer dresses" then "something more casual" then "in that blue from the photo I uploaded" then "under $80." Each turn narrows the search and the system keeps track of the full conversation.

- **Shopify Integration Layer.** Shopify APIs handle catalog sync, inventory, cart, and checkout. New products get embedded automatically. Deploys as a Shopify app for one click installation.

- **Analytics Dashboard.** Merchant facing dashboard showing search to purchase funnels, conversion rates by search type, and product discovery gaps, which tells merchants what shoppers are looking for but not finding.

### Key Decisions

- **Gemini 3.0 Flash for multimodal understanding.** Speed matters in shopping. Sub 200ms responses are not optional. People leave after 3 seconds.
- **OpenCLIP over proprietary vision models.** Open source embeddings mean no per query cost, which matters at a million searches a day.
- **Shopify first distribution.** Building for Shopify is a distribution strategy, not just a platform choice. The app ecosystem gives you discovery, installation, and billing out of the box. Merchants install apps. They do not evaluate AI vendors.

## What I Learned

Embedding quality broke down at catalog scale. OpenCLIP worked great for a few hundred products, but at 10,000+ items the similarity search started returning irrelevant results. The problem was that product photography is not natural photography. Two different white t shirts on white backgrounds produce nearly identical embeddings. I had to add a second pass that extracted specific attributes like neckline shape, sleeve length, and fabric texture, then combined those with the visual similarity scores.

Getting sub 200ms latency was genuinely hard when combining vector search, metadata filtering, and LLM reranking in a single query. I ended up caching the reranking step aggressively, which meant newly added products had stale results until the cache refreshed.
