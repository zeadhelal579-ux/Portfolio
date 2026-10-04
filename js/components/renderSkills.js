// =============================================================================
// File: renderSkills.js
// Purpose: Render the "Skills & Tools" cards.
// Logic:   The card shells (icon, title, description) are fixed — there are
//          always exactly 4 (Languages / Frameworks & Libraries / Fields / Tools) — so they are
//          defined here as a small local template, not as data. Only the
//          chip list inside each card comes from js/data/skills.js.
// Depends on: js/data/skills.js (must be loaded before this file runs).
// Targets:  #skills-grid in index.html.
// =============================================================================

function renderSkills(skills) {
    const container = document.getElementById('skills-grid');
    if (!container) return;

    // Fixed card shells; only the "chips" list per card is dynamic data.
    const cards = [
        {
            icon: '&#60;/&#62;',
            title: 'Languages',
            description: 'The languages I write and build with day to day.',
            chips: skills.languages
        },
        {
            icon: '&#123;&#125;',
            title: 'Frameworks & Libraries',
            description: "What I build with on top of those languages.",
            chips: skills.frameworks
        },
        {
            icon: '&#9881;',
            title: 'Fields',
            description: "Areas I've built real projects in.",
            chips: skills.fields
        },
        {
            icon: '&#128295;',
            title: 'Tools',
            description: "What's usually open while I work.",
            chips: skills.tools
        }
    ];

    container.innerHTML = cards.map(card => `
        <div class="card">
            <div class="icon-badge">${card.icon}</div>
            <h3>${card.title}</h3>
            <p>${card.description}</p>
            <div class="chip-row">
                ${card.chips.map(chip => `<span class="chip">${chip}</span>`).join('')}
            </div>
        </div>
    `).join('');
}
