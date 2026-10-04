// =============================================================================
// File: renderProjects.js
// Purpose: Render the category filter buttons and the project card grid.
// Logic:   This file only builds markup — it does NOT attach any click
//          handlers. The actual filter behavior (show/hide cards when a
//          button is clicked) lives in main.js (initProjectFilter), which
//          runs after this render call so the buttons/cards already exist in
//          the DOM. This mirrors ARCHITECTURE.md section 4, which assigns
//          general interactive behavior to main.js rather than to a
//          component file.
// Depends on: js/data/projects.js (must be loaded before this file runs).
// Targets:  #projects-filter and #projects-grid in index.html.
// =============================================================================

// Builds the row of filter buttons from the category lookup. The first key
// ("all") is marked active by default, matching the original design.
function renderProjectFilters(categories) {
    const container = document.getElementById('projects-filter');
    if (!container) return;

    container.innerHTML = Object.entries(categories)
        .map(([key, label], index) => (
            `<button class="filter-btn${index === 0 ? ' active' : ''}" data-filter="${key}">${label}</button>`
        ))
        .join('');
}

// Builds one card per project. "image", "githubLink", and "liveLink" are
// optional fields (see js/data/projects.js) — each is only rendered when
// present on a given project object.
function renderProjectCards(projects, categories) {
    const container = document.getElementById('projects-grid');
    if (!container) return;

    container.innerHTML = projects.map(project => {
        const tagLabel = categories[project.category] || project.category;

        const imageHtml = project.image
            ? `<img src="${project.image}" alt="${project.title}">`
            : '';

        const linksHtml = (project.githubLink || project.liveLink)
            ? `<div class="project-links">
                    ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" rel="noopener">GitHub</a>` : ''}
                    ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" rel="noopener">Live</a>` : ''}
               </div>`
            : '';

        return `
            <div class="project-card" data-cat="${project.category}">
                <span class="tag">${tagLabel}</span>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                ${imageHtml}
                ${linksHtml}
            </div>
        `;
    }).join('');
}

// Single entry point called from main.js.
function renderProjects(projects, categories) {
    renderProjectFilters(categories);
    renderProjectCards(projects, categories);
}
