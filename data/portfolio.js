export const portfolioConfig = {
  email: "athulchandra861@gmail.com",
  github: "https://github.com/athulchandraa",
  linkedIn: "https://www.linkedin.com/in/athul-chandra/",
  resume: "https://drive.google.com/file/d/1LUKDIVjxk7ssK_NgFkzj2dbexSGviVSf/view?usp=drive_link",
  internshipDuration: "6 Months",
  internshipResponsibilities: "",
  projects: {
    civicAi: { live: "https://civic-ai-six-zeta.vercel.app/", github: "https://github.com/athulchandraa/Civic-AI" },
    rideGo: { live: "https://ride-go-psi.vercel.app/", github: "https://github.com/athulchandraa/RideGo" },
    smartVisit: { live: "https://smart-visit-theta.vercel.app/", github: "https://github.com/athulchandraa/SmartVisit" },
  },
};

export const skills = {
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "Material UI",
    "Bootstrap",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "REST APIs",
    "JWT Authentication",
  ],
  Tools: ["Git", "GitHub", "Postman", "VS Code", "Axios", "Vite","IntelIJ"],
};

export const projects = [
  {
    id: "civicAi",
    number: "01",
    name: "Civic AI",
    category: "GOVERNANCE PLATFORM",
    description:
      "A public governance transparency platform for citizen services, officer information, grievance management, and RTI application management.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS","Nodemailer"],
    visual: "civics",
  },
  {
    id: "rideGo",
    number: "02",
    name: "RideGo",
    category: "MOBILITY · BOOKING",
    description:
      "A ride booking and driver management application with separate dashboards, ride tracking, wallet management, and booking history.",
    technologies: ["React.js", "Tailwind CSS", "Axios", "OpenStreetMap"],
    visual: "ride",
  },
  {
    id: "smartVisit",
    number: "03",
    name: "Smart Visit Management",
    category: "VISITOR MANAGEMENT",
    description:
      "A visitor management system featuring registration, QR code generation, and dedicated admin, security, and visitor dashboards.",
    technologies: ["React.js", "Tailwind CSS", "REST API"],
    visual: "visit",
  },
];
