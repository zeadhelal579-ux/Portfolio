// =============================================================================
// File: renderSoftSkills.js
// Purpose: Render the "Beyond the Code" (soft skills) cards.
// Depends on: js/data/softSkills.js (must be loaded before this file runs).
// Targets:  #soft-skills-grid in index.html.
// =============================================================================

function renderSoftSkills(items) {
    const container = document.getElementById('soft-skills-grid');
    if (!container) return;

    container.innerHTML = items.map(item => `
        <div class="card">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `).join('');
}
