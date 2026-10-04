// =============================================================================
// File: profile.js
// Purpose: Single source of truth for Zead's identity and contact details.
// Logic:   Plain data object, no functions. The fields below are consumed in
//          two places:
//            - renderContactInfo() (js/components/renderContactInfo.js) reads
//              location/education/role/email/phone/linkedin/github and
//              distributes them into the About card, the Contact section,
//              and the footer, so each value is typed here exactly once.
//            - main.js reads name/title to set the browser tab title.
//          Hero's headline and tagline paragraph stay as static text directly
//          in index.html (see ARCHITECTURE.md section 4), so "title" and
//          "tagline" here are the canonical values an editor should copy from
//          if that static text is ever updated, keeping both in sync by hand.
// Update:  To change any contact detail (e.g. a new phone number), edit the
//          single value below — it will apply everywhere automatically the
//          next time the page loads.
// =============================================================================

const profileData = {
    name: "Zead Helal",
    title: "Computer Science Student & Full-Stack Developer",
    tagline: "I'm Zead Helal — a full-stack developer who also wires up hardware. I move comfortably between frontend interfaces, backend systems, and embedded electronics, and I care about writing clean, working code more than writing a lot of it.",
    location: "Faqous, Sharqia, Egypt",
    education: "Faculty of Computers and Information, Suez University",
    role: "Full-Stack Developer",
    email: "zeadhelal579@gmail.com",
    phone: "+20 010 0259 5281",
    linkedin: "https://www.linkedin.com/in/zead-helal-759270422/",
    github: "https://github.com/zeadhelal579-ux"
};
