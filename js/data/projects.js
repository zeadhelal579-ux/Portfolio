// =============================================================================
// File: projects.js
// Purpose: Content for the "Projects" section — the filter categories and
//          every project card.
// Logic:   "projectCategories" maps each category key to the label shown to
//          the user. It is the single source for that label, used both to
//          build the filter buttons and to look up each project card's tag
//          text — so renaming a category (e.g. "Full Stack" -> "Web Apps")
//          only requires changing it in this one place.
//          "projectsData" is a flat array of project objects. "category"
//          must match a key in "projectCategories" above it.
//          "image", "githubLink", and "liveLink" are OPTIONAL fields (see
//          ARCHITECTURE.md section 4) — renderProjects.js checks whether
//          each one is present before rendering it, so existing project
//          entries below simply omit them.
// Update:  Add a new project by appending one object to "projectsData".
//          Add a brand-new category by adding one key to
//          "projectCategories" first, then using that key in "category".
// =============================================================================

const projectCategories = {
    all: "All",
    fullstack: "Full Stack",
    frontend: "Frontend",
    csharp: "C#",
    cpp: "C++",
    hardware: "Hardware"
};

const projectsData = [
    // --- Full Stack: competition and flagship projects first ---
    {
        title: "Raa'i",
        category: "fullstack",
        description: "An AI livestock monitoring system for farms. Cameras watch each cow around the clock, predict health problems before symptoms appear, and send simple daily reports to farm owners. It placed on the podium in five competitions. My role: COO."
    },
    {
        title: "METHIX",
        category: "fullstack",
        description: "An AI decision-support system for cattle farms that predicts methane emissions per cow, classifies them as Low, Moderate, or High, explains each result with SHAP, and recommends actions. Built for the FortyGuard Global AI Hackathon '26. My role: COO."
    },
    {
        title: "CROP",
        category: "fullstack",
        description: "Control and Radical Outbreak Protection: forecasts crop-pest outbreaks about a week ahead using growing-degree-day thermal modeling, with a farmer dashboard and SMS and WhatsApp alerts. My role: COO."
    },
    {
        title: "PulseForge",
        category: "fullstack",
        description: "A device that monitors the heart's electrical activity (ECG), with an AI model that generates a report for the doctor about the patient's condition. First place in the healthcare track at Tanta. My role: CTO."
    },
    {
        title: "ERP System",
        category: "fullstack",
        description: "A general-purpose ERP system that tracks everything from raw materials to the finished product sold in the shop. Not tied to one specific factory. Built with C#."
    },
    {
        title: "MedCare Portal",
        category: "fullstack",
        description: "A booking system for any clinic, so patients reserve an appointment before they go. Browse doctors by specialty, pick an available time slot, and the system prevents double-booking."
    },
    {
        title: "Video Streaming",
        category: "fullstack",
        description: "A YouTube-style platform for publishing videos and live streams. Uploads are processed by background workers into multiple resolutions and streamed with HLS."
    },
    {
        title: "Scan & Eat",
        category: "fullstack",
        description: "A scan-to-order system for restaurants — customers scan a code at the table, browse the menu, and place their order directly."
    },
    {
        title: "Online Shopping Website",
        category: "fullstack",
        description: "An e-commerce site covering product browsing, cart, and checkout flows end to end."
    },
    {
        title: "Pharmacy System",
        category: "fullstack",
        description: "A management system for handling pharmacy inventory and sales."
    },
    {
        title: "Anomaly Web",
        category: "fullstack",
        description: "The web platform for Anomaly Community, the tech and AI community I coach and organize for."
    },
    {
        title: "My Brain",
        category: "fullstack",
        description: "A personal knowledge/notes system for organizing and retrieving my own ideas and learning."
    },

    // --- Frontend ---
    {
        title: "Wedding Invitation Site",
        category: "frontend",
        description: "A dark navy and gold invitation site built for a couple in Ismailia, with a countdown timer, scroll animations, and a small canvas maze game."
    },
    {
        title: "Weather App",
        category: "frontend",
        description: "A weather lookup interface showing live conditions for a chosen location."
    },
    {
        title: "Timer & To-Do List",
        category: "frontend",
        description: "A small productivity tool combining a countdown timer with a task list."
    },
    {
        title: "XO (Tic-Tac-Toe)",
        category: "frontend",
        description: "A browser version of the classic two-player game."
    },
    {
        title: "Rock, Paper, Scissors",
        category: "frontend",
        description: "A simple interactive game built to practice DOM logic and state."
    },

    // --- C# ---
    {
        title: "Calculator",
        category: "csharp",
        description: "A desktop calculator app — an early C# project focused on core logic and OOP fundamentals."
    },
    {
        title: "Problem Solving in C#",
        category: "csharp",
        description: "Solving programming problems in C# to sharpen core logic and OOP skills."
    },
    {
        title: "Backend Development with C#",
        category: "csharp",
        description: "Building backend services and APIs with C# and ASP.NET Core, used across my full-stack projects."
    },

    // --- C++ ---
    {
        title: "Calculator",
        category: "cpp",
        description: "A console calculator built to practice core C++ syntax and logic."
    },
    {
        title: "Math Problem Solver",
        category: "cpp",
        description: "A program that solves a set of math problems step by step."
    },
    {
        title: "XO & Rock, Paper, Scissors",
        category: "cpp",
        description: "Console versions of both games, used to practice logic before moving them to the browser."
    },

    // --- Hardware ---
    {
        title: "PulseForge Hardware",
        category: "hardware",
        description: "The hardware of PulseForge, a wearable device that monitors the heart's electrical activity (ECG). I work on its hardware as CTO."
    },
    {
        title: "IR-Sensor Cars",
        category: "hardware",
        description: "Two cars with IR sensors, controlled from a mobile phone."
    },
    {
        title: "Vegetable Health Detector",
        category: "hardware",
        description: "An Arduino Uno-based system with an ESP32-CAM and additional sensors that checks the health/freshness of vegetables."
    }
];
