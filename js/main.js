// =============================================================================
// File: main.js
// Purpose: The single entry point for the whole page. Runs every render
//          function once the DOM is ready, then wires up the two pieces of
//          interactive behavior the original design was missing (see
//          ARCHITECTURE.md problem #1): the mobile menu toggle and the
//          project category filter.
// Load order: this file must be the LAST <script> tag in index.html, after
//          every file in js/data/ and every file in js/components/, since it
//          calls functions and reads data objects that those files define.
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Populate every dynamic section from its data file. Each call is
    // independent, so if one section's container is ever removed from
    // index.html the rest keep working (every render function checks that
    // its container exists before touching it).
    renderContactInfo(profileData);
    renderSkills(skillsData);
    renderSoftSkills(softSkillsData);
    renderProjects(projectsData, projectCategories);
    renderCourses(coursesData);
    renderAchievements(achievementsData);
    renderHobbies(hobbiesData);

    // Keep the browser tab title in sync with profile.js, using the same
    // name/title values as the static <title> tag in index.html's <head>.
    document.title = `${profileData.name} — ${profileData.title}`;

    // General page behavior, not specific to any one section.
    initMobileMenu();
    initProjectFilter();
});

// Opens/closes the mobile nav dropdown when the hamburger button is tapped,
// and closes it again after the user picks a link (better mobile UX). This
// is the missing piece that makes ".nav-toggle" actually do something —
// previously it existed in the HTML/CSS with no behavior attached.
function initMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
        links.classList.toggle('open');
    });

    links.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => links.classList.remove('open'));
    });
}

// Wires up the project filter buttons rendered by renderProjects(). Clicking
// a button marks it active and hides any project card whose "data-cat"
// doesn't match the chosen filter ("all" shows everything). This is the
// second missing behavior from ARCHITECTURE.md problem #1.
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    if (!filterButtons.length || !projectCards.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.dataset.filter;
            projectCards.forEach(card => {
                const matches = filter === 'all' || card.dataset.cat === filter;
                card.classList.toggle('hidden', !matches);
            });
        });
    });
}
