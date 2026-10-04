// =============================================================================
// File: renderHobbies.js
// Purpose: Render the Hobbies section pills.
// Depends on: js/data/hobbies.js (must be loaded before this file runs).
// Targets:  #hobbies-row in index.html.
// =============================================================================

function renderHobbies(hobbies) {
    const container = document.getElementById('hobbies-row');
    if (!container) return;

    container.innerHTML = hobbies
        .map(hobby => `<div class="hobby-pill">${hobby.emoji} ${hobby.label}</div>`)
        .join('');
}
