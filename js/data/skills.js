// =============================================================================
// File: skills.js
// Purpose: Content for the "Skills & Tools" section.
// Logic:   The four cards themselves (Languages / Frameworks & Libraries /
//          Fields / Tools — their
//          icon, title, and description) are a fixed layout that doesn't
//          grow, so that part lives in renderSkills.js instead of here. Only
//          the chip lists inside each card — the part that actually grows
//          over time — is treated as data.
// Update:  Add a new language/field/tool by adding one string to the
//          matching array below. No HTML or CSS file needs to change.
// =============================================================================

const skillsData = {
    languages: ["JavaScript", "TypeScript", "Python", "C#", "C++", "HTML", "CSS"],
    frameworks: ["React", "Tailwind CSS", ".NET", "FastAPI", "Pandas"],
    fields: ["Frontend", "Backend", "Networking", "Machine Learning", "Hardware"],
    tools: ["Visual Studio", "Git", "GitHub", "Postman", "Figma", "Stitch", "Claude", "Vercel", "Railway", "Firebase", "PostgreSQL", "SQL"]
};
