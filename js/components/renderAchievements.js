// =============================================================================
// File: renderAchievements.js
// Purpose: Render the "Achievements & Awards" cards.
// Logic:   Same empty-state approach as renderCourses.js — shows a short
//          placeholder message while js/data/achievements.js is still empty.
// Depends on: js/data/achievements.js (must be loaded before this file runs).
// Targets:  #achievements-grid in index.html.
// =============================================================================

function renderAchievements(achievements) {
    const container = document.getElementById('achievements-grid');
    if (!container) return;

    if (!achievements.length) {
        container.innerHTML = `<p class="empty-state">Hackathon wins and awards will show up here once they're added to js/data/achievements.js.</p>`;
        return;
    }

    container.innerHTML = achievements.map(item => {
        const dateHtml = item.date
            ? `<p class="achievement-date">${item.date}</p>`
            : '';

        const imageHtml = item.image
            ? `<img src="${item.image}" alt="${item.title}">`
            : '';

        const linkHtml = item.link
            ? `<a class="achievement-link" href="${item.link}" target="_blank" rel="noopener">Learn more &rarr;</a>`
            : '';

        return `
            <div class="card achievement-card${item.wide ? ' achievement-card--wide' : ''}">
                <h3>${item.title}</h3>
                ${dateHtml}
                <p>${item.description}</p>
                ${imageHtml}
                ${linkHtml}
            </div>
        `;
    }).join('');
}
