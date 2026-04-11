// ============================================================
//  PORTFOLIO DATA — Edit ONLY this file to update your site!
// ============================================================
//
//  HOW TO EDIT (no coding needed!):
//
//  1. Only change text inside "quotes"
//  2. Don't delete commas at the end of lines
//  3. To ADD a new item to a list, copy an existing one
//     and paste it below (keep the comma after it)
//  4. To REMOVE an item, delete the whole block
//     from { to }, (including the comma)
//  5. Save the file, push to GitHub — done!
//
//  RULES:
//   - Text goes inside "double quotes"
//   - Long text goes inside `backticks like this`
//   - Lists use [ ] with items separated by commas
//   - Groups use { } with key: "value" pairs
//   - Lines starting with // are comments (ignored)
//
// ============================================================

const DATA = {

  // ──────────────────────────────────────────────────
  //  PERSONAL INFO
  //  Just change the text in "quotes" to update
  // ──────────────────────────────────────────────────
  name: "Suwaj Aryal",
  firstName: "Suwaj",
  title: "Civil & Hydropower Engineer",
  tagline: "I design how water moves — from rivers to turbines.",
  location: "Kapan, Kathmandu, Nepal",
  phone: "+977 9869667002",
  email: "suwajaryal2016@gmail.com",
  academicEmail: "080MSHPE023.suwaj@pcampus.edu.np",
  social: {
    linkedin: "https://www.linkedin.com/in/suwaj-aryal-7a1527265/",
    github: "",       // paste your GitHub link inside the quotes
    scholar: "",      // paste Google Scholar link inside the quotes
  },


  // ──────────────────────────────────────────────────
  //  HERO — words that rotate on the main screen
  //  Add or remove lines. Keep quotes and commas.
  // ──────────────────────────────────────────────────
  heroWords: [
    "Water Resources Engineer",
    "Hydropower Enthusiast",
    "Hydraulic Modeller",
    "River Systems Thinker",
    "Futsal Player",
    "Guitar Strummer",
  ],


  // ──────────────────────────────────────────────────
  //  ABOUT ME — your personal story
  //  aboutIntro = the bold opening line
  //  aboutStory = the full story (use `backticks` for long text)
  //  Blank lines inside backticks = new paragraphs on the site
  // ──────────────────────────────────────────────────
  aboutIntro: "Civil Engineer who fell in love with water.",

  aboutStory: `I've always been drawn to how water shapes the world — not just as a resource, but as a force worth understanding, modelling, and designing around. That curiosity took me from Civil Engineering into Hydropower, and keeps pushing me deeper into hydraulics, river systems, and sediment dynamics.

I studied at Pulchowk Campus on merit scholarship for both my Bachelor's and Master's degrees. I'm not someone who chases grades — but when something matters, I show up. Scholarships, tough selections, clutch moments — that's where I perform.

What I value most is hands-on work. I've designed full irrigation systems from scratch, modelled river flows for urban planning, sized hydropower components, and gotten my hands dirty with real engineering problems. I care about work that actually gets built.

Outside of work, I'm into football, cricket, and weekly futsal. I play Valorant with friends, read manga, watch anime, and pick up the guitar when I need to switch off. I like staying curious about things beyond just engineering.`,


  // ──────────────────────────────────────────────────
  //  ABOUT SIDEBAR — icon + label cards beside your story
  //  To change icon: use any emoji like "🌊" "⚡" "🔧"
  //  To change label: edit the text in quotes
  // ──────────────────────────────────────────────────
  aboutHighlights: [
    { icon: "🌊", label: "Water Resources & Hydraulics" },
    { icon: "⚡", label: "Hydropower Design" },
    { icon: "🌍", label: "River & Sediment Systems" },
    { icon: "🛠️", label: "Hands-on Design Engineering" },
  ],


  // ──────────────────────────────────────────────────
  //  EDUCATION
  //  To add a new degree: copy a whole { } block and edit it
  //  To add a bullet: add a new "line", in highlights
  // ──────────────────────────────────────────────────
  education: [
    {
      degree: "M.Sc. in Hydropower Engineering",
      institution: "Pulchowk Campus, Tribhuvan University",
      period: "2024 – Present",
      status: "Ongoing",                     // shows as a badge
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
  //  story = italic paragraph describing the experience
  //  points = bullet points below it
  // ──────────────────────────────────────────────────
  experience: [
    {
      role: "Intern / Trainee Engineer",
      company: "NCER",
      period: "~2.5 months",
      story: "Got selected through one of the toughest hiring processes I've seen — two 8-hour written exams followed by an interview, with only 8 people making it through. Worked on international-standard projects including US-based terrain modification studies where the goal was ensuring water levels stay unchanged before and after construction. It opened my eyes to how seriously water engineering is taken globally.",
      points: [
        "Hydraulic modelling using HEC-RAS, HEC-HMS, EPA SWMM",
        "Automation scripts using VBA for engineering workflows",
        "Drainage system design",
        "Exposure to US engineering standards and environmental policies",
      ],
    },
    {
      role: "Civil Design Engineer",
      company: "Madi Consultancy Pvt. Ltd.",
      period: "Short-term",
      story: "Joined right after obtaining my engineering license. Designed water supply distribution systems for rural communities.",
      points: [
        "Irrigation and water supply distribution design",
      ],
    },
    {
      role: "Freelance Engineer",
      company: "Independent",
      period: "Project-based",
      story: "Took on independent engineering projects — from sizing hydropower components to modelling one of Nepal's most important rivers.",
      points: [
        "Pre-feasibility study of Junbesi Khola Cascade Hydropower Project (990kW) — intake, headrace, weir, syphon, settling basin, anchor blocks, turbine & powerhouse design",
        "1D & 2D Hydraulic modelling of Bagmati River for urban area planning",
      ],
    },
  ],


  // ──────────────────────────────────────────────────
  //  RESEARCH & PROJECTS
  //  type = small label above the title (e.g. "Academic Research")
  // ──────────────────────────────────────────────────
  research: [
    {
      title: "Hydrological Impact of Land-Use Change in Kathmandu Watershed",
      type: "Research Collaboration",
      description: "Contributed to research analysing how urbanization and land-use changes affect water flow patterns in the Kathmandu watershed, using HEC-RAS for hydrological modelling.",
    },
    {
      title: "Pre-Feasibility Study of Badigad Hydropower Project",
      type: "Master's Minor Project",
      description: "Evaluated hydrological and topographical feasibility for a run-of-river hydropower plant. Contributed to layout planning and structural sizing of intake, headrace tunnel, and surge shaft.",
    },
    {
      title: "Reservoir Sediment Management Strategies",
      type: "Academic Research",
      description: "Explored sediment management approaches for reservoirs using RESCON 2 — understanding how sediment accumulation affects long-term dam performance and sustainability.",
    },
    {
      title: "Kulekhani Dam Hydrologic Examination",
      type: "Field Study & Analysis",
      description: "Conducted seepage analysis of Kulekhani Gravity Dam with on-site visits to the hydropower station and turbine installations. Connecting theory with real infrastructure.",
    },
    {
      title: "Detail Design of Bhuteni Irrigation Project",
      type: "Bachelor's Final Year Project",
      description: "Designed a complete irrigation system from the ground up — barrage, under-sluice, canal network, cross-drainage structures, and even a detailed bridge design. Heavy work, but deeply rewarding.",
    },
    // To add a new project, copy the block below, paste it above this comment, and edit:
    // {
    //   title: "Your Project Name",
    //   type: "Project Type",
    //   description: "What you did and why it matters.",
    // },
  ],


  // ──────────────────────────────────────────────────
  //  RESEARCH INTERESTS — shows as highlighted pills
  //  Just add or remove "lines" in this list
  // ──────────────────────────────────────────────────
  researchInterests: [
    "Computational Hydraulics & River Modelling",
    "Sediment Transport & Reservoir Sustainability",
    "Hydropower System Design & Optimization",
    "Water Resources Engineering in Climate-Sensitive Regions",
    "Flood & Watershed Modelling",
  ],


  // ──────────────────────────────────────────────────
  //  TECHNICAL SKILLS
  //  category = group name, items = list of tools
  //  To add a skill: just add "Your Skill" in the items list
  //  To add a new category: copy a whole { } block
  // ──────────────────────────────────────────────────
  skills: [
    { category: "Hydrological Tools", items: ["HEC-HMS", "HEC-RAS", "HEC-ResSim", "SWAT", "EPA SWMM"] },
    { category: "CAD & Design",       items: ["AutoCAD", "Civil 3D"] },
    { category: "Programming",        items: ["Python", "C", "FORTRAN", "VBA"] },
    { category: "CFD & Modelling",    items: ["OpenFOAM", "RESCON 2"] },
    { category: "Office & Tools",     items: ["Excel", "Word", "PowerPoint"] },
  ],


  // ──────────────────────────────────────────────────
  //  TRAINING
  // ──────────────────────────────────────────────────
  training: [
    {
      name: "Hydraulic Design Software Training",
      duration: "2 Weeks",
      items: ["HEC-RAS", "HEC-ResSim", "HEC-HMS", "SWAT"],
    },
  ],


  // ──────────────────────────────────────────────────
  //  BEYOND ENGINEERING — your hobbies & personality
  //  icon options: "football", "cricket", "tabletennis",
  //               "gaming", "guitar", "manga", "hiking"
  //  (or use any word — it will show a ✨ if not recognized)
  // ──────────────────────────────────────────────────
  beyondEngineering: [
    {
      icon: "football",
      title: "Football",
      description: "My first love in sports. Won gold at +2 level and the 1st Year Cup at Pulchowk. These days it's weekly futsal — still competitive, still love it.",
    },
    {
      icon: "cricket",
      title: "Cricket",
      description: "Gold medalist. My friends carried the team, but I clutched when it mattered most in the semifinal.",
    },
    {
      icon: "tabletennis",
      title: "Table Tennis",
      description: "My casual go-to game. Don't challenge me unless you mean it.",
    },
    {
      icon: "gaming",
      title: "Gaming",
      description: "Valorant with the boys, casual ranked grinds. Even played in the college tournament — it's a good way to unwind and stay sharp.",
    },
    {
      icon: "guitar",
      title: "Guitar",
      description: "Self-taught strummer. Nothing professional — just vibes, chords, and good times.",
    },
    {
      icon: "manga",
      title: "Manga & Anime",
      description: "A loyal reader and watcher. Great stories teach perspective, persistence, and the power of a good plot twist.",
    },
    {
      icon: "hiking",
      title: "Hiking",
      description: "During 2nd semester, our group hiked every Saturday. Want to get back to it — Nepal has no shortage of trails.",
    },
  ],


  // ──────────────────────────────────────────────────
  //  WHERE I'M HEADED — your future goals text
  // ──────────────────────────────────────────────────
  futureGoals: `I want to keep going deeper into water — understanding rivers, designing better hydraulic infrastructure, and solving problems that matter for communities living alongside water systems. I'm looking for research and professional opportunities where I can combine strong engineering fundamentals with computational tools to push what we know about how water and sediment behave. If that's your world too, I'd love to connect.`,


  // ──────────────────────────────────────────────────
  //  FOOTER — the quote at the bottom of the page
  // ──────────────────────────────────────────────────
  footerQuote: "Water is the driving force of all nature. — Leonardo da Vinci",
};

 
