# Articles

A public blog of short, readable data science articles — published with GitHub Pages and Jekyll.

**Read live:** [augustodiaz-dev.github.io/articles](https://augustodiaz-dev.github.io/articles/)

## Features

- Blog index with **search** and **category filters**
- Clean article URLs based on title slugs (e.g. `/data-science-lifecycle/`)
- **Continue reading** recommendations at the end of each article
- Custom **404** page

## Current articles

| Article | URL | Category |
|---------|-----|----------|
| Data Science Lifecycle: A Practical Overview | [/data-science-lifecycle/](https://augustodiaz-dev.github.io/articles/data-science-lifecycle/) | Workflow |
| Introduction to Machine Learning | [/intro-to-machine-learning/](https://augustodiaz-dev.github.io/articles/intro-to-machine-learning/) | Machine Learning |
| Exploratory Data Analysis Basics | [/exploratory-data-analysis-basics/](https://augustodiaz-dev.github.io/articles/exploratory-data-analysis-basics/) | Data Analysis |

## Project structure

```text
core/
├── index.html              # Blog homepage with search & categories
├── 404.html                # Not found page
├── _config.yml             # Jekyll config
├── _posts/                 # Markdown articles
├── _layouts/               # Post layout with recommendations
├── _includes/              # Shared components & assets
└── assets/
    ├── css/blog.css
    ├── js/blog.js
    └── data-science-lifecycle.png
```

## Add a new article

1. Create a file in `_posts/` named `YYYY-MM-DD-your-slug.md`
2. Add front matter:

```yaml
---
title: "Your Article Title"
slug: your-slug
date: 2026-05-24
categories: [Your Category]
excerpt: "Short summary for the index and search."
---
```

3. Push to `main` — GitHub Pages redeploys in 1–2 minutes.

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://127.0.0.1:4000/articles/`.
