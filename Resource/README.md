# Zead Helal — Portfolio

Personal portfolio for **Zead Helal**, Computer Science student at Suez University and full-stack developer working across frontend, backend, networking, and embedded hardware. Also a coach and organizer at Anomaly Community.

Built with plain **HTML5, CSS3, and vanilla JavaScript** — no frameworks, no build tools, no dependencies.

🔗 **Live site:** _add your Vercel URL here once deployed_

---

## Sections

- Hero
- About
- Skills & Tools
- Beyond the Code (soft skills)
- Projects (filterable by category)
- Courses & Certifications
- Achievements & Awards
- Hobbies
- Contact

## Project structure

```
zead-portfolio/
├── index.html
├── ARCHITECTURE.md        → full breakdown of every file's responsibility
├── assets/
│   ├── images/            → profile photo, project/course/achievement images
│   └── qr/                → QR code linking to the live site
├── css/
│   ├── base.css           → design tokens (colors, type) + shared elements
│   ├── nav.css, hero.css, about.css, skills.css, soft-skills.css,
│   ├── projects.css, courses.css, achievements.css, hobbies.css,
│   ├── contact.css, footer.css
│   └── responsive.css     → all media queries in one place
└── js/
    ├── data/               → content only — arrays/objects, no logic
    ├── components/         → one render function per section
    └── main.js             → wires everything together on page load
```

See **ARCHITECTURE.md** for the reasoning behind this structure and the exact data schema for each section.

## Running locally

No build step needed — just open `index.html` in a browser. For the smoothest experience (auto-reload on save), use a local server such as VS Code's "Live Server" extension, but it isn't required.

## Updating content

This site is data-driven: adding new content almost never requires touching HTML or CSS — just edit the relevant file in `js/data/`.

**Add a project** — `js/data/projects.js`:
```js
{
  title: "Project Name",
  category: "fullstack", // fullstack | frontend | csharp | cpp | hardware
  description: "One or two sentences about it."
}
```

**Add an achievement** (e.g. a hackathon win) — `js/data/achievements.js`:
```js
{
  title: "1st Place — Example Hackathon",
  date: "2026",
  description: "What the project did and why it won.",
  image: "assets/images/achievements/example.jpg" // optional
}
```

**Add a course/certificate** — `js/data/courses.js`, same pattern.

**Update contact info** (email, phone, LinkedIn, GitHub) — edit `js/data/profile.js` once; it automatically updates the About card, Contact section, and footer.

## Deployment

Deploy on [Vercel](https://vercel.com): import this repository, framework preset **"Other"**, no build command required — it's already static.

Once live, generate a QR code pointing to the URL for sharing at hackathons and events.

## Contact

- ✉️ [zeadhelal579@gmail.com](mailto:zeadhelal579@gmail.com)
- 📞 [+20 010 0259 5281](tel:+201002595281)
- 💼 [LinkedIn](https://www.linkedin.com/in/zead-helal-759270422/)
- 🐙 [GitHub](https://github.com/zeadhelal579-ux)
