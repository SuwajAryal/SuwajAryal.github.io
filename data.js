// ============================================================
//  PORTFOLIO DATA: Edit ONLY this file to update your site!
// ============================================================

const DATA = {

  // ──────────────────────────────────────────────────
  //  PERSONAL INFO
  // ──────────────────────────────────────────────────
  name: "Suwaj Aryal",
  firstName: "Suwaj",
  title: "Civil & Hydropower Engineer",
  tagline: "I design how water moves, from rivers to turbines.",
  location: "Budhanilkantha-10, Kathmandu, Nepal",
  phone: "+977 9869667002",
  email: "suwajaryal2016@gmail.com",
  academicEmail: "080MSHPE023.suwaj@pcampus.edu.np",
  social: {
    linkedin: "https://www.linkedin.com/in/suwaj-aryal-7a1527265/",
    github: "https://github.com/SuwajAryal",
  },

  // ──────────────────────────────────────────────────
  //  HERO: Rotating titles
  // ──────────────────────────────────────────────────
  heroWords: [
    "Water Resources Engineer",
    "Hydropower Enthusiast",
    "Hydraulic Modeller",
    "Physics-Governed ML Modeller",
    "Scientific Python Developer",
    "Football Lover",
    "Nature Enjoyer",
  ],

  // ──────────────────────────────────────────────────
  //  ABOUT ME
  // ──────────────────────────────────────────────────
  aboutIntro: "Civil Engineer who fell in love with water.",

  aboutStory: `I've always been drawn to how water shapes the world, not just as a resource, but as a force worth understanding, modelling, and designing around. That curiosity took me from Civil Engineering into Hydropower, and keeps pushing me deeper into hydraulics, river systems, and sediment dynamics.

I studied at Pulchowk Campus on merit scholarship for both my Bachelor's and Master's degrees. I'm not someone who chases grades, but when something matters, I show up. Scholarships, tough selections, and clutch moments are where I perform best.

What I value most is hands-on work. I've designed full irrigation systems from scratch, modelled river flows for urban planning, sized hydropower components, and gotten my hands dirty with real engineering problems. I care about work that actually gets built.

Outside of work, I'm into football, cricket, and weekly futsal. I play Valorant with friends, read manga, watch anime, and pick up the guitar when I need to switch off. I like staying curious about things beyond just engineering.`,

  aboutHighlights: [
    { icon: "🌊", label: "Water Resources & Hydraulics" },
    { icon: "⚡", label: "Hydropower Design" },
    { icon: "🌍", label: "River & Sediment Systems" },
    { icon: "🛠️", label: "Hands-on Design Engineering" },
  ],

  // ──────────────────────────────────────────────────
  //  EDUCATION
  // ──────────────────────────────────────────────────
  education: [
    {
      degree: "M.Sc. in Hydropower Engineering",
      institution: "Pulchowk Campus, Tribhuvan University",
      period: "2024 – Present",
      status: "Ongoing",
      highlights: [
        "Merit scholarship through national-level entrance",
        "Focus areas: Hydraulic modelling, sediment dynamics, river engineering",
      ],
    },
    {
      degree: "B.E. in Civil Engineering",
      institution: "Pulchowk Campus, Tribhuvan University",
      period: "2018 – 2023",
      status: "Completed",
      highlights: [
        "Full merit scholarship through national-level entrance",
        "Final Year Project: Complete irrigation system design from headwork to canal network",
      ],
    },
  ],

  // ──────────────────────────────────────────────────
  //  WORK EXPERIENCE
  // ──────────────────────────────────────────────────
  experience: [
    {
      role: "Intern / Trainee Engineer",
      company: "NCER",
      period: "~2.5 months",
      story: "Worked as an intern on international projects, gaining exposure to global engineering standards and workflows.",
      points: [
        "Hydraulic modelling using HEC-RAS, HEC-HMS, and EPA SWMM",
        "Developed automation scripts using VBA for engineering workflows",
        "Designed drainage systems for terrain modification studies",
        "Exposure to US engineering standards and environmental policies",
      ],
    },
    {
      role: "Civil Design Engineer",
      company: "Madi Consultancy Pvt. Ltd.",
      period: "Short-term",
      story: "Joined after obtaining my engineering license to design water supply systems for rural communities.",
      points: [
        "Designed irrigation and water supply distribution networks",
      ],
    },
    {
      role: "Freelance Engineer",
      company: "Independent",
      period: "Project-based",
      story: "Managed independent projects, including hydropower component sizing and river modelling.",
      points: [
        "Pre-feasibility study of Junbesi Khola Cascade Hydropower Project (990kW): intake, weir, settling basin, and powerhouse design",
        "1D and 2D Hydraulic modelling of Bagmati River for urban area planning",
      ],
    },
  ],

  // ──────────────────────────────────────────────────
  //  RESEARCH & PROJECTS
  // ──────────────────────────────────────────────────
  research: [
    {
      title: "Physics-Governed Neural Network (PGNN) for Sediment Prediction",
      type: "M.Sc. Thesis (Ongoing)",
      description: "Developing a hybrid machine learning framework integrating physical equations like Yang and Engelund-Hansen to predict suspended sediment load in the West Rapti River catchment.",
    },
    {
      title: "Suspended Sediment Load Prediction in Flashy Catchments",
      type: "Conference Paper (In Prep for IOEGC)",
      description: "Preparing a research submission for the IOE Graduate Conference focusing on the integration of remote sensing and station data into PGNN models.",
    },
    {
      title: "Hydrological Impact of Land-Use Change in Kathmandu Watershed",
      type: "Research Collaboration",
      description: "Analysed how urbanization affects water flow patterns using HEC-RAS for hydrological modelling.",
    },
    {
      title: "Detail Design of Bhuteni Irrigation Project",
      type: "Bachelor's Final Year Project",
      description: "Designed a complete irrigation system including the barrage, under-sluice, canal network, and cross-drainage structures.",
    },
  ],

  // ──────────────────────────────────────────────────
  //  RESEARCH INTERESTS
  // ──────────────────────────────────────────────────
  researchInterests: [
    "Computational Hydraulics & River Modelling",
    "Physics-Informed Machine Learning (PIML)",
    "Sediment Transport & Reservoir Sustainability",
    "Hydropower System Design & Optimization",
    "Flood & Watershed Modelling",
  ],

  // ──────────────────────────────────────────────────
  //  TECHNICAL SKILLS
  // ──────────────────────────────────────────────────
  skills: [
    { category: "Hydrological Tools", items: ["HEC-HMS", "HEC-RAS", "HEC-ResSim", "SWAT", "EPA SWMM"] },
    { category: "Programming & Web",  items: ["Python", "JavaScript", "HTML", "VBA", "C", "FORTRAN"] },
    { category: "CAD & Design",       items: ["AutoCAD", "Civil 3D"] },
    { category: "CFD & Modelling",    items: ["OpenFOAM", "RESCON 2"] },
    { category: "Academic Tools",     items: ["Excel", "Zotero", "LaTeX", "Word", "PowerPoint"] },
  ],

  // ──────────────────────────────────────────────────
  //  BEYOND ENGINEERING
  // ──────────────────────────────────────────────────
  beyondEngineering: [
    {
      icon: "football",
      title: "Football & Futsal",
      description: "My primary sport for fitness and fun. I play weekly futsal for the exercise and the community.",
    },
    {
      icon: "cricket",
      title: "Cricket",
      description: "Enjoy casual weekend matches, focusing on the fun and the rare boundary.",
    },
    {
      icon: "gaming",
      title: "Gaming",
      description: "Playing Valorant with friends to unwind and stay mentally sharp.",
    },
    {
      icon: "guitar",
      title: "Guitar",
      description: "Self-taught strummer playing for vibes and good times.",
    },
    {
      icon: "hiking",
      title: "Hiking",
      description: "Exploring the trails of Nepal to clear my head and appreciate the mountain landscapes.",
    },
  ],

  // ──────────────────────────────────────────────────
  //  WHERE I'M HEADED
  // ──────────────────────────────────────────────────
  futureGoals: "I want to solve real-world problems for communities living alongside water systems by combining strong engineering fundamentals with modern computational tools.",

  // ──────────────────────────────────────────────────
  //  FOOTER
  // ──────────────────────────────────────────────────
  footerQuote: "Water is the driving force of all nature. - Leonardo da Vinci",
};
