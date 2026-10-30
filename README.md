# Georgi Koleshanski · QA Portfolio

**Live site:** https://joretok.github.io/QA-Portfolio/

A personal portfolio for a QA Engineer with manual and automated testing experience, designed to look like a QA team's workspace.

## What's inside

| Section | Content |
|---|---|
| **Dashboard** | Profile overview, career timeline and skill coverage at a glance |
| **Profile** | Professional summary and contact details |
| **Board** | Work experience shown as tracker issues |
| **Skills** | Skills shown as a test coverage report, plus the full QA tech stack |
| **Projects** | QA tooling and products I've built (see below) |
| **Certifications** | 12 verifiable credentials |
| **Education** | Academic background and training programs |

### Featured projects

- **TestForge AI**: an AI-powered web platform that turns user stories, HTML and UI screenshots into reviewed, versioned Playwright tests (bachelor's thesis)
- **QA Dashboard**: unified test coverage visualization across .NET and Playwright suites
- **AI Test Generator**: auto-generates QA test plans and test cases from Jira tickets
- **QA Test Copilot**: a custom Claude Code command that code-reviews, live-tests and documents a ticket end-to-end
- **Kolario**: a digital service book for your car, live on [Google Play](https://play.google.com/store/apps/details?id=com.kolario.kolario) and the [App Store](https://apps.apple.com/bg/app/kolario/id6818195174)

## Built with

Plain HTML, CSS and JavaScript, with no frameworks and no build step.

- **Bilingual (EN / BG):** a small custom i18n layer (`i18n.js` + `locales/`) translates text, attributes, dates and plurals, and remembers the visitor's choice
- **Responsive:** sidebar navigation that collapses on mobile
- **Accessible:** semantic landmarks, ARIA labels and keyboard-friendly navigation
- **Hosted on GitHub Pages**

## Project structure

```
index.html        page markup and all sections
styles.css        styles
script.js         view switching, sidebar, filters, animations
i18n.js           translation engine
locales/en.js     English strings
locales/bg.js     Bulgarian strings
*.pdf             CV in English and Bulgarian
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```

Then open http://localhost:8000.

## Contact

- LinkedIn: [Georgi Koleshanski](https://www.linkedin.com/in/georgi-koleshanski-002791312/)
- Email: joretok79@gmail.com
