# Articles

A public blog of short, readable data science articles — published with GitHub Pages and Jekyll.

**Read live:** [augustodiaz-dev.github.io/articles](https://augustodiaz-dev.github.io/articles/)

## Features

- Blog index with **search** and **category filters** (newest first)
- Clean article URLs based on title slugs (e.g. `/data-science-lifecycle/`)
- **Continue reading** recommendations at the end of each article
- Central **category registry** for consistent labels and filter order
- Custom **404** page

## Project structure

```text
├── index.html                  # Blog homepage with search & categories
├── 404.html                    # Not found page
├── _config.yml                 # Jekyll config
├── _data/categories.yml        # Canonical categories, labels, and filter order
├── _posts/                     # Markdown articles
├── _layouts/                   # Post layout with recommendations
├── _includes/
│   ├── accordion-post.html     # Index list item (reused per article)
│   ├── category-filters.html   # Filter buttons from registry + posts
│   ├── category-label.html     # Display label for a category name
│   └── related-posts.html      # End-of-article recommendations
└── assets/
    ├── css/blog.css
    ├── js/blog.js
    └── …                       # Images and other static files
```

## Add a new article

1. Create a file in `_posts/` named `YYYY-MM-DD-your-slug.md`
2. Add front matter (use a `date` that matches the filename):

```yaml
---
title: "Your Article Title"
slug: your-slug
date: 2026-05-25
categories: [Machine Learning]
excerpt: "Short summary for the index and search."
---
```

3. Pick categories from `_data/categories.yml` (`name` field). Add a new entry there when you introduce a topic that needs its own filter.
4. Push to `main` — GitHub Pages redeploys in 1–2 minutes.

## Categories

Edit `_data/categories.yml` to add or reorder topics. Each entry has:

| Field | Purpose |
|-------|---------|
| `name` | Value used in post front matter |
| `label` | Short text shown in filters and badges |
| `order` | Filter button order on the homepage |
| `aliases` | Optional legacy names (prefer `name` in new posts) |

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://127.0.0.1:4000/articles/`.
