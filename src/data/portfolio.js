const base = import.meta.env.BASE_URL;

export const portfolioData = {
  hero: {
    greeting: "Hello, I'm",
    name: "Alifan Renaldi",
    title: "Software Developer & UI/UX Designer",
    description:
      "I build responsive website, optimalization software, and UI/UX components .",
    imgUrl: `${base}assets/fotoalditerjun.jpg`,
    resumeUrl: `${base}CV-Alifan-Renaldi-BInggris.pdf`,
    kontakUrl: "https://linkedin.com/in/alifan-renaldi-4b8498180",
  },
  about: {
    bio: "I am a passionate Computer Science graduate specialized in the intersection of UI/UX Design, Front-End Development, and System Data Analysis. I thrive on exploring cutting-edge technology and translating complex challenges into user-centric, high-performance solutions. I am ready to deploy my skills for your next big project. I am an Agile Programmer committed to leveraging technology to create meaningful impact. My blend of design sensibility, development expertise, and data analysis skills allows me to own the solution end-to-end—from concept to deployment. I am seeking opportunities to collaborate and contribute to your most challenging innovations. Let's discuss how I can elevate your team!",
    image: `${base}assets/fotoalditerjun.jpg`,
  },
  skills: [
    {
      name: "HTML",
      level: 95,
      category: "Frontend",
      description:
        "Standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      name: "CSS",
      level: 90,
      category: "Frontend",
      description:
        "Style sheet language used for describing the presentation of a document written in HTML.",
    },
    {
      name: "JavaScript",
      level: 85,
      category: "Frontend",
      description:
        "Programming language that converts static HTML pages to interactive web pages.",
    },
    {
      name: "PHP",
      level: 85,
      category: "Backend",
      description:
        "General-purpose scripting language geared towards web development.",
    },
    {
      name: "Laravel",
      level: 85,
      category: "Backend",
      description: "Web application framework with expressive, elegant syntax.",
    },
    {
      name: "SQL",
      level: 80,
      category: "Backend",
      description:
        "Domain-specific language used in programming and managing data held in a RDBMS.",
    },
    {
      name: "Figma",
      level: 95,
      category: "Design",
      description:
        "Vector graphics editor and prototyping tool which is primarily web-based.",
    },
  ],
  experience: [
    {
      role: "Backend Developer",
      company: "PT. Bukit Asam Tbk",
      period: "Dec 2022 - Feb 2023",
      description: "Developed the SIMAMA mobile asset management system by designing operational workflows and UI/UX in collaboration with production management while coordinating with the IT team for API implementation.",
    },
    {
      role: "Fullstack Developer",
      company: "UPT TIK Universitas Lampung",
      period: "Feb 2023 - Jul 2023",
      description: "Developed and implemented a comprehensive, full-stack accreditation system for the University of Lampung using the Laravel framework and Microsoft SQL Server, integrating user-centric UI/UX design with standardized performance indicators to automate faculty-wide rating assessments.",
    },
    {
      role: "Frontend Developer",
      company: "Andanan Batik Lampung",
      period: "Jul 2023 - Aug 2023",
      description: "Delivered a comprehensive WordPress solution for Andanan Batik Lampung by integrating UI/UX designs, ensuring high-quality performance through rigorous testing, and empowering the client team via effective technical communication and user training.",
    },
    {
      role: "Assistant Lecture Web Programing",
      company: "Universitas Lampung",
      period: "Jul 2023 - Aug 2023",
      description: "Delivered a comprehensive WordPress solution for Andanan Batik Lampung by integrating UI/UX designs, ensuring high-quality performance through rigorous testing, and empowering the client team via effective technical communication and user training.",
    },
  ],
  projects: [
    {
      title: "Dimsum MBOK",
      images: [`${base}assets/Dimsum-1.png`, `${base}assets/Dimsum-2.png`],
      description:
        "An e-commerce platform specifically designed to empower culinary MSMEs, particularly in the dim sum industry. This project delivers an optimal shopping experience through end-to-end transaction features, structured product catalog management, and a highly dynamic and interactive User Interface (UI).",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
    {
      title: "SMMA (System Managemen Aset) ",
      images: [`${base}assets/API-SMMA.png`, `${base}assets/postmanapi.png`],
      description:
        "Architected a scalable Laravel RESTful API to facilitate smooth data flow to the frontend, ensuring accurate, real-time tracking and dynamic rendering of user-managed assets.",
      tags: ["PHP", "Laravel", "Postman"],
    },
    {
      title: "Akreditasi One Data",
      images: [`${base}assets/magang-1.png`, `${base}assets/magang-2.png`, `${base}assets/magang-3.png`],
      description:
        "A SaaS application that leverages generative AI to help creators automate content writing and image generation with a drag-and-drop interface.",
      tags: ["Laravel", "PHP", "Postman", "Boostrap"],
    },
  ],
  certifications: [
    {
      title: "Junior Web Developer",
      image: `${base}assets/Sertifikat-BNSP.jpg`,
      issuer: "Komdigi",
    },
    {
      title: "Fullstack Developer",
      image: `${base}assets/Sertifikat-MSIB.jpg`,
      issuer: "MSIB",
    },
  ],
  courses: [
    {
      title: "AWS Cloud dan Gen AI",
      image: `${base}assets/AWS-Cloud-AI.jpg`,
      issuer: "AWS",
    },
    {
      title: "UI/UX Design Fundamentals",
      image: `${base}assets/UI-UX-KMMI.jpg`,
      issuer: "Google",
    },
  ],
};
