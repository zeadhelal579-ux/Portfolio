// =============================================================================
// File: achievements.js
// Purpose: Content for the new "Achievements & Awards" section (see
//          ARCHITECTURE.md section 6).
// Logic:   Holds the real competition results, ordered by rank (1st, 2nd, 3rd),
//          then the university honoring. Only results the owner confirmed are
//          listed. renderAchievements.js shows a friendly "coming soon"
//          message whenever this array is empty.
// Schema:  Each entry supports:
//            title        (required) - e.g. "1st Place - Example Hackathon"
//            date         (optional) - e.g. "September 2026"; the line is hidden when omitted
//            description  (required) - one short line on the project/win
//            image        (optional) - path under assets/images/achievements/
//            link         (optional) - URL with more details
//            wide         (optional) - true makes the card span the full row (used for the last card)
// Update:  Add a new win by appending one object below, for example:
//   {
//       title: "1st Place — Anomaly Hackathon",
//       date: "September 2026",
//       description: "Short description of the project and why it won.",
//       image: "assets/images/achievements/hackathon-sep2026.jpg",
//       link: ""
//   }
// =============================================================================

const achievementsData = [
    {
        title: "1st Place, Healthcare — Tanta",
        description: "First place in the healthcare track with PulseForge.",
        image: "assets/images/achievements/tanta-pulseforge-1st.jpg"
    },
    {
        title: "1st Place — Damietta",
        description: "Won first place with Raa'i, our AI livestock monitoring system.",
        image: "assets/images/achievements/damietta-1st.jpg"
    },
    {
        title: "2nd Place — Ismailia (ICEALEX)",
        description: "Second place at an ICEALEX competition in Ismailia, with Raa'i.",
        image: "assets/images/achievements/ismailia-icealex-2nd.jpg"
    },
    {
        title: "2nd Place, Agriculture — Kafr El Sheikh",
        description: "Second place in the agriculture track with Raa'i.",
        image: "assets/images/achievements/kafr-el-sheikh-2nd.jpg"
    },
    {
        title: "2nd Place, Healthcare — Tanta",
        description: "Second place in the healthcare track with Raa'i.",
        image: "assets/images/achievements/tanta-healthcare-2nd.jpg"
    },
    {
        title: "3rd Place — RoboDam 2026",
        description: "Third place in the Smart Systems Track of the national AI and robotics competition in Damanhour, with Raa'i.",
        image: "assets/images/achievements/robodam-2026-3rd.jpg"
    },
    {
        title: "Honored by the President of Suez University",
        description: "Recognized for these competition achievements.",
        image: "assets/images/achievements/suez-university-honoring.jpg",
        wide: true
    }
];
