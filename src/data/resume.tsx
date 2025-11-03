import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sourav Lahoti",
  initials: "SL",
  url: "https://souravlahoti.com",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/bangalore",
  description:
    "Technical Lead bringing 12+ years of full-stack expertise to architect scalable, high-impact solutions.",
  summary:
    "Technical Lead, bringing 12+ years of full-stack expertise to architect scalable, high-impact solutions. Collaborate with stakeholders to drive strategic project delivery and client value using advanced technologies. Passionate team player focused on innovation and excellence.",
  avatarUrl: "/me.png",
  skills: [
    "JavaScript",
    "TypeScript", 
    "Python",
    "ReactJS",
    "Tailwind",
    "GraphQL",
    "Redux",
    "Express",
    "NodeJS",
    "NestJS",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Redis",
    "Kafka",
    "RabbitMQ",
    "AWS",
    "Azure",
    "Docker",
    "Terraform",
    "Nginx",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sourav26721062@gmail.com",
    tel: "+91-8722682249",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/souravlahoti",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/souravlahoti/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/souravlahoti",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:sourav26721062@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Undocked Technologies India Pvt Ltd",
      href: "https://cargomatic.com/",
      badges: [],
      location: "Bangalore, India",
      title: "Engineering Manager - Cargomatic Inc.",
      logoUrl: "/undocked.png",
      start: "",
      end: "",
      description:
        "Driving cross-functional teams to align product, engineering, and operational goals for enhanced execution and impact. Led roadmap planning and capacity forecasting for mission-critical projects with 100K+ users across logistics operations.",
    },
    {
      company: "Undocked Technologies India Pvt Ltd",
      href: "https://cargomatic.com/",
      badges: [],
      location: "Bangalore, India",
      title: "Technical Lead - Cargomatic Inc.",
      logoUrl: "/undocked.png",
      start: "",
      end: "",
      description:
        "Revamped a bottlenecked monolithic system into a scalable microservices architecture, increasing throughput by 40% while leading a team to early milestone delivery. Improved legacy system performance by 35% with caching and load-balancing, enabling efficient scaling for 100,000+ users. Architected a 99% uptime distributed solution, driving innovation and mentoring engineers to optimize a high-traffic platform under tight deadlines.",
    },
    {
      company: "Novo.co",
      href: "https://www.novo.co/",
      badges: [],
      location: "Bangalore, India",
      title: "Technical Lead - Payments, Cards & FinCrime",
      logoUrl: "/novo.png",
      start: "",
      end: "",
      description:
        "Core contributor to re-architect the fin-tech product to scale ~200K active customers. Ownership of fixing the current tech debt for smoother operation for banking ops and customer success team while paving path for Arch 2.0. Responsible for product architect and technical implementation within deposits, cards and payments. Built Express ACH (send funds quickly) that added revenue of ~$100K monthly through fees.",
    },
    {
      company: "Sabkamandi",
      href: "#",
      badges: [],
      location: "Goa, India",
      title: "Co-founder - CTO - Full Stack",
      logoUrl: "/sabkamandi.png",
      start: "",
      end: "",
      description:
        "Product development from concept, architecture, prototype, beta testing & production deployment. Envisioning and designing technical aspects of the company's strategy to ensure alignment with business and strategic goals. Developed & scaled performance oriented product to 5000+ MAU. Implemented route optimisation algorithm to increase delivery efficiency by 30%. Increased sales by 13% by notifying users using predictive analytics from their purchase history. Secured ~$90K seed funding from angel investors & completed end-to-end deal for equity transfer.",
    },
    {
      company: "P360",
      href: "https://www.p360.com/",
      badges: [],
      location: "Bangalore, India",
      title: "Senior Application Developer - Full Stack",
      logoUrl: "/p360.png",
      start: "",
      end: "",
      description:
        "Architect & built REST APIs with NodeJS & created reusable codes & libraries to facilitate future use. Improved code quality & development discipline, resulting in fewer bugs and clean, maintainable, reusable code. Led a team of 5 & achieved delivery of all project deliverable in an effective and quality bound manner. Lead of core services engineering team responsible for architecture and development in building scalable, high-availability network of services. Led initiative to enhance operational excellence: enabled full end-to-end testing of internal tool and included a system check. Decreased CPU usage of internal service from 90% to 10%.",
    },
    {
      company: "Babajob (acquired by Quikr.com)",
      href: "https://babajob.com/",
      badges: [],
      location: "Bangalore, India",
      title: "Software Developer Engineer II - Full Stack",
      logoUrl: "/babajob.png",
      start: "",
      end: "",
      description:
        "Spearheaded and initiated migration of web app with a reach of 20k+ MAU to micro-services & SPA improving application speed by 18% while diminishing server cost. Automated communication system to completely eliminate Level 1 customer support to improve resolved tickets by 15%. Conceptualized & engineered the code logic, developed the database structure & ensured regular maintenance of third party API integration.",
    },
    {
      company: "Intel",
      href: "https://intel.com/",
      badges: [],
      location: "Bangalore, India",
      title: "Developer Advocate",
      logoUrl: "/intel.png",
      start: "",
      end: "",
      description:
        "Envisioning technical aspects of the company's product strategy for ensuring alignment with business goals. Delivering compelling product demos, sample solutions and discussion to drive adoption of Intel Software. Creating code repository, tutorials & product demos about emerging technologies and industry developments. Working with worldwide counterparts to share best practises and help built a best in the industry evangelism organization.",
    },
    {
      company: "Growfit",
      href: "#",
      badges: [],
      location: "Bangalore, India",
      title: "System Engineer",
      logoUrl: "/growfit.png",
      start: "",
      end: "",
      description:
        "Worked on the implementation and roll-out of the e-commerce platform. Complete ownership of Order & Delivery Management System.",
    },
    {
      company: "Tata Consultancy Services",
      href: "https://tcs.com/",
      badges: [],
      location: "Bangalore, India",
      title: "Assistant System Engineer",
      logoUrl: "/tcs.png",
      start: "",
      end: "",
      description:
        "Worked as .NET developer using XAML and SOAP to build internal tools for Credit Suisse.",
    },
  ],
  education: [
    {
      school: "West Bengal University of Technology",
      href: "https://wbut.ac.in",
      degree: "Bachelor of Technology in Information Technology",
      logoUrl: "/wbut.png",
      start: "2009",
      end: "2013",
    },
  ],
  projects: [
    {
      title: "DotenvHub",
      href: "https://dotenvhub.com/",
      dates: "2025 - Present",
      active: true,
      description:
        "A modern environment variable management platform for developers and teams. Securely store, manage, and sync environment variables across different environments with team collaboration features.",
      technologies: [
        "TypeScript",
        "React",
        "Node.js",
        "PostgreSQL",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://dotenvhub.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Quick Textify",
      href: "https://quicktextify.com/",
      dates: "2025 - Present",
      active: true,
      description: "Create viral thumbnails and social posts in seconds with Quick Textify. AI-powered tool to add text between images - no design skills needed!",
      technologies: [
        "TypeScript",
        "React",
        "Node.js",
        "MongoDB",
        "TailwindCSS",
        "AI",
      ],
      links: [
        {
          type: "Website",
          href: "https://quicktextify.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "FutureTayari",
      href: "https://www.futuretayari.com/",
      dates: "2023 - 2024",
      active: true,
      description:
        "An innovative educational platform designed to help students prepare for their future careers. Provides comprehensive resources, career guidance, and skill development tools to bridge the gap between education and industry requirements.",
      technologies: [
        "Nest.js",
        "TypeScript",
        "React",
        "Node.js",
        "PostgreSQL",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.futuretayari.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Testimonial Slider Pro",
      href: "https://github.com/souravlahoti/testimonial-slider-pro",
      dates: "2025",
      active: true,
      description:
        "A professional, customizable testimonial slider component for modern web applications. Features smooth animations, responsive design, and easy integration with various frameworks. Perfect for showcasing customer reviews and social proof.",
      technologies: [
        "React",
        "TypeScript",
        "CSS3",
        "JavaScript",
        "NPM",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/souravlahoti/testimonial-slider-pro",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Awayddings",
      href: "https://www.awayddings.com/",
      dates: "2021",
      active: true,
      description:
        "A comprehensive wedding planning platform that helps couples plan their dream destination weddings. Features venue discovery, vendor management, budget tracking, and seamless coordination for weddings away from home.",
      technologies: [
        "TypeScript",
        "React",
        "PHP",
        "MySQL",
        "TailwindCSS",
        "Payment Integration",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.awayddings.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  
  awards: [
    {
      title: "Intel Software Innovator",
      date: "2016 - Present",
      description: "Recognized as Intel Software Innovator for contributions to developer community and emerging technology advocacy.",
      url: "https://www.intel.com/content/www/us/en/developer/community/innovators.html"
    },
    {
      title: "TCS Star Performer",
      date: "2014",
      description: "Awarded TCS Star Performer with rating 5/5 for exceptional performance and contributions.",
      url: undefined
    }
  ],
} as const;
