// =============================================================================
// File: renderContactInfo.js
// Purpose: Distribute the single "profileData" object (js/data/profile.js)
//          into the three places contact info appears on the page: the
//          About card, the Contact section, and the footer. This is the
//          direct fix for problem #2 in ARCHITECTURE.md — the same email,
//          phone, LinkedIn, and GitHub used to be hand-typed three times.
// Depends on: js/data/profile.js (must be loaded before this file runs).
// Targets:  #about-info-card, #contact-links, #footer-links in index.html.
// =============================================================================

// Fills the About card with plain label/value rows (not clickable links —
// this matches how the original About card looked: informational only).
function renderAboutInfoCard(profile) {
    const container = document.getElementById('about-info-card');
    if (!container) return;

    const rows = [
        ['Location', profile.location],
        ['Education', profile.education],
        ['Role', profile.role],
        ['Email', profile.email],
        ['Phone', profile.phone]
    ];

    container.innerHTML = rows
        .map(([label, value]) => `<div class="info-row"><span>${label}</span><span>${value}</span></div>`)
        .join('');
}

// Egyptian mobile numbers are written locally with a leading trunk "0"
// (e.g. 010 xxx xxxx). That "0" must be dropped right after the "+20"
// country code for the number to actually be dialable internationally.
// This turns the display text "+20 010 0259 5281" into the correct link
// "tel:+201002595281" (matching the original site's working phone link)
// without changing a single character of the visible text.
function toDialablePhoneHref(phone) {
    return `tel:${phone.replace(/\s+/g, '').replace(/^(\+20)0/, '$1')}`;
}

// Fills the Contact section with clickable pill links (mailto/tel/external),
// each with the same emoji icon the original design used.
function renderContactLinks(profile) {
    const container = document.getElementById('contact-links');
    if (!container) return;

    const phoneHref = toDialablePhoneHref(profile.phone);

    container.innerHTML = `
        <a class="contact-pill" href="mailto:${profile.email}">✉️ ${profile.email}</a>
        <a class="contact-pill" href="${phoneHref}">📞 ${profile.phone}</a>
        <a class="contact-pill" href="${profile.linkedin}" target="_blank" rel="noopener">💼 LinkedIn</a>
        <a class="contact-pill" href="${profile.github}" target="_blank" rel="noopener">🐙 GitHub</a>
    `;
}

// Fills the footer's link row: LinkedIn + GitHub (from profile data) plus a
// plain in-page anchor back up to the Contact section.
function renderFooterLinks(profile) {
    const container = document.getElementById('footer-links');
    if (!container) return;

    container.innerHTML = `
        <a href="${profile.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
        <a href="${profile.github}" target="_blank" rel="noopener">GitHub</a>
        <a href="#contact">Contact</a>
    `;
}

// Single entry point called from main.js — runs all three renders together
// so every call site only needs to remember one function name.
function renderContactInfo(profile) {
    renderAboutInfoCard(profile);
    renderContactLinks(profile);
    renderFooterLinks(profile);
}
