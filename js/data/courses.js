// =============================================================================
// File: courses.js
// Purpose: Content for the new "Courses & Certifications" section (see
//          ARCHITECTURE.md section 6).
// Logic:   Empty by default — no real course/certificate data was provided
//          for this section, so it is left empty rather than filled with
//          placeholder entries. While this array is empty, renderCourses.js
//          hides the whole section and its nav link, so visitors never see an
//          empty block. Adding the first entry brings both back automatically.
// Schema:  Each entry supports:
//            title              (required) - course or certification name
//            provider           (required) - who issued it, e.g. "Coursera"
//            date               (required) - e.g. "August 2026"
//            certificateImage   (optional) - path under assets/images/courses/
//            certificateLink    (optional) - URL to view/verify the certificate
// Update:  Add a finished course by appending one object below, for example:
//   {
//       title: "React - The Complete Guide",
//       provider: "Udemy",
//       date: "August 2026",
//       certificateImage: "assets/images/courses/react-complete-guide.jpg",
//       certificateLink: ""
//   }
// =============================================================================

const coursesData = [];
