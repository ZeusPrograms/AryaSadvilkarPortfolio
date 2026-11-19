/*
  EDIT THIS FILE to change the portfolio. Nothing else needs to change.
  - Set show: false on any section to hide it.
  - Add, edit or delete items in any list.
  - Keep the quotes and commas as they are.
*/
window.SITE = {
  person: {
    first: "Arya",
    last: "Sadvilkar",
    roles: ["UX researcher", "data analyst", "process analyst", "product thinker"],
    status: "Mumbai · Open to research, analytics & UX roles",
    intro: "Product and UX research, data analysis and process analysis. I find the patterns, structure the problem and make the next decision easier.",
    summary: "Arya Sadvilkar: product and UX research, data analysis and process analysis. Published researcher in sports analytics.",
    photo: "assets/photo.jpg",
    photoAlt: "Portrait of Arya Sadvilkar",
    email: "arya.sadvilkar@gmail.com",
    phone: "+91 77386 84644",
    whatsapp: "917738684644",
    resume: "assets/Arya_Sadvilkar_CV.pdf",
    // Leave phone, whatsapp or resume empty ("") to hide that button.
    location: "Mumbai, India",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/arya-sadvilkar/" },
      { label: "GitHub", url: "https://github.com/ZeusPrograms" }
    ]
  },

  marquee: ["UX Research", "Usability & Accessibility", "Power BI", "Data Analysis", "Process Analysis", "Figma"],

  about: {
    show: true, nav: "About", eyebrow: "01 — About",
    title: "I'm an analyst who works across research, data and design.",
    text: "I start by understanding how a problem actually behaves, then I structure the information, test the assumptions and build the tools that make the answer usable, whether that's a usability review, a dashboard or a process map.",
    facts: [["MCA", "CGPI 9.26 · TIMSCDR"], ["B.Sc IT", "CGPA 9.78 · KCC"], ["1", "Published paper, 2026"], ["Mumbai", "India"]]
  },

  experience: {
    show: true, nav: "Experience", eyebrow: "02 — Experience", title: "Where I've worked.",
    items: [
      {
        role: "Instructional Design Analyst / UX Research Analyst",
        org: "Zeus Learning",
        place: "Mumbai",
        period: "Jun 2026 – Sep 2026",
        points: [
          "Contributed UX research to Athena | Assessment Solution, an enterprise K-12 digital assessment platform.",
          "Compared competing assessment and learning platforms across features, workflows and accessibility.",
          "Evaluated Technology Enhanced Items for usability and accessibility against WCAG-informed principles.",
          "Built comparison matrices that turned observations into clear, reviewable recommendations.",
          "Partnered with designers, instructional designers and stakeholders on UX decisions."
        ]
      }
    ]
  },

  education: {
    show: true, nav: "Education", eyebrow: "03 — Education", title: "Education.",
    items: [
      { degree: "Master of Computer Applications (MCA)", school: "Thakur Institute of Management Studies, Career Development & Research (TIMSCDR), Mumbai", period: "2024 – 2026", detail: "CGPI 9.26" },
      { degree: "B.Sc. Information Technology", school: "Kishinchand Chellaram College, Mumbai", period: "2021 – 2024", detail: "CGPA 9.78" }
    ]
  },

  research: {
    show: true, nav: "Research", eyebrow: "04 — Research", title: "Published research.",
    items: [
      {
        title: "The Influence of Data Analytics on Sports Performance",
        venue: "Recent Trends in Sports · Vol. 03, Issue 01 · pp. 15–21",
        year: "2026",
        authors: ["Arya Amit Sadvilkar (lead)", "Ritik Saha", "Rohini Bagul"],
        abstract: "How real-time tracking data on speed, movement, fatigue and efficiency supports objective decisions across football, cricket, hockey and basketball, using Python and machine learning for prediction and injury prevention.",
        tags: ["Sports analytics", "Machine learning", "Predictive modeling", "Injury prevention", "Python"],
        link: "https://journals.stmjournals.com/rts/article=2026/view=243050/"
      }
    ]
  },

  projects: {
    show: true, nav: "Work", eyebrow: "05 — Selected work", title: "Selected work.",
    items: [
      { title: "Sales Performance Dashboard", tags: "Power BI · Power Query · Excel", text: "Cleaned and profiled sales data, built a Net Sales measure and an interactive KPI dashboard.", link: "" },
      { title: "Raj Aircon Website Redesign", tags: "UX/UI · Information Architecture · Responsive", text: "Restructured navigation and content for HVAC, MEP and clean-room services, then delivered a high-fidelity prototype.", link: "" },
      { title: "Pravaas Ticket Booking", tags: "Power Apps · Process Analysis", text: "Mapped the unreserved ticket journey, cut unnecessary steps, and built the streamlined flow with payment integration.", link: "" },
      { title: "Promptly, AI Prompt Tool", tags: "Product Design · UX Research", text: "Concept for an assistant that helps users create and refine prompts across platforms, with history and a freemium model.", link: "" }
    ]
  },

  skills: {
    show: true, nav: "Skills", eyebrow: "06 — Capabilities", title: "Capabilities.",
    groups: [
      { name: "Research & UX", items: ["User testing", "Competitor analysis", "Usability evaluation", "WCAG accessibility", "User journeys", "Information architecture", "Wireframing", "Prototyping", "Design systems"] },
      { name: "Data & Analytics", items: ["Power BI", "Power Query", "Excel", "SQL / MySQL", "Data cleaning", "KPI analysis", "Dashboards", "Python (basic)"] },
      { name: "Process & Business", items: ["Workflow analysis", "Process improvement", "Requirements analysis", "Insight synthesis", "Problem analysis"] },
      { name: "Tools", items: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Microsoft Power Apps", "Power Pages", "Wix Studio"] }
    ],
    certifications: ["UI/UX Design", "Project Management", "Python for Data Science"]
  },

  achievements: {
    show: true, nav: "Beyond work", eyebrow: "07 — Beyond work", title: "Beyond work.",
    items: [
      { title: "Second Prize, Synapse 2024 Ideation Challenge", note: "AI urban farming" },
      { title: "Winner, Table Tennis, VISTA 2025", note: "Sport" },
      { title: "Best NSS Volunteer", note: "2023–2024" },
      { title: "Represented India at Pravaasi Bharatiya Divas", note: "Through NSS" },
      { title: "Certified Medical First Responder", note: "NDRF guidance" }
    ]
  },

  contact: {
    show: true, nav: "Contact", eyebrow: "08 — Contact", title: "Let's talk.",
    lead: "I'm looking for research, analytics and UX roles, and selected collaborations where data and people meet.",
    tags: ["UX research", "Data analysis", "Dashboards", "Process analysis"],
    note: "Resume available on request."
  },

  footer: "Arya Sadvilkar · Mumbai, India"
};
