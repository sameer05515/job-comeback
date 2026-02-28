# Job Comeback

Personal knowledge base & interview prep — Java, Spring Boot, ReactJS, SQL, and more. Built with [Jekyll](https://jekyllrb.com/).

## Quick Start

### Prerequisites

- [Ruby](https://www.ruby-lang.org/) (3.0+)
- [Bundler](https://bundler.io/): `gem install bundler`

### Run locally

```bash
bundle install
bundle exec jekyll serve
```

Open [http://localhost:4000](http://localhost:4000).

### Build for production

```bash
bundle exec jekyll build
```

Output goes to `_site/`.

## Project structure

```
job-comeback/
├── _config.yml      # Jekyll config
├── Gemfile          # Ruby dependencies
├── src/             # All content (source)
│   ├── _layouts/    # HTML layouts
│   ├── _includes/   # Reusable snippets
│   ├── index.md     # Home page
│   ├── java-8/      # Java 8 topics
│   ├── spring-boot/
│   ├── reactjs/
│   └── ...
└── _site/           # Generated output (gitignored)
```

## Deploy to GitHub Pages

1. **Push** your repo to GitHub (create one at [github.com/new](https://github.com/new) if needed).

2. **Enable Pages**: Repo → **Settings** → **Pages** → **Build and deployment**:
   - Source: **GitHub Actions**

3. **Commit and push** the workflow, `Gemfile`, and `Gemfile.lock` (run `bundle install` locally first to create `Gemfile.lock`). Each push to `main` will build and deploy.

4. Your site will be at: `https://<username>.github.io/<repo-name>/`

   If the repo is `job-comeback`, the URL is: `https://<username>.github.io/job-comeback/`

**Note:** If your default branch is `master` instead of `main`, edit the workflow and change `branches: ["main"]` to `branches: ["master"]`.

**Project site URLs:** If your site is at `username.github.io/job-comeback/`, set `baseurl: "/job-comeback"` in `_config.yml` so links work correctly.

---

🙏 Jai Mata Di | SHANTI Framework
