// =============================================================================
// File: renderCourses.js
// Purpose: Render the "Courses & Certifications" cards.
// Logic:   When js/data/courses.js is still an empty array, this shows a
//          short italic placeholder message instead of an empty grid, so the
//          new section never looks broken before real content is added.
// Depends on: js/data/courses.js (must be loaded before this file runs).
// Targets:  #courses-grid in index.html.
// =============================================================================

function renderCourses(courses) {
    const container = document.getElementById('courses-grid');
    if (!container) return;

    if (!courses.length) {
        // Nothing to show yet: hide the whole section and its nav link instead of
        // showing a developer note to visitors. Adding entries to courses.js brings
        // both back automatically.
        const section = document.getElementById('courses');
        if (section) section.style.display = 'none';
        document.querySelectorAll('a[href="#courses"]').forEach(link => { link.style.display = 'none'; });
        return;
    }

    container.innerHTML = courses.map(course => {
        const imageHtml = course.certificateImage
            ? `<img src="${course.certificateImage}" alt="${course.title} certificate">`
            : '';

        const linkHtml = course.certificateLink
            ? `<a class="course-link" href="${course.certificateLink}" target="_blank" rel="noopener">View certificate &rarr;</a>`
            : '';

        return `
            <div class="card course-card">
                <h3>${course.title}</h3>
                <p class="course-meta">${course.provider} · ${course.date}</p>
                ${imageHtml}
                ${linkHtml}
            </div>
        `;
    }).join('');
}
