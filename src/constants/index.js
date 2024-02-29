import { meta, shopify, starbucks, tesla, school,cu} from "../assets/images";

import {
    blog,
    ebook,
    face,
    basket,
    logo,
    fav,
    books,
    cSharp,
    cpp,
    sql,
    python,
    linux,
    java,
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: linux,
        name: "Linux",
        type: "OS",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: cSharp,
        name: "C#",
        type: "Backend",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Backend",
    },
];

export const experiences = [
    {
        title: "Bachelor of Engineering",
        company_name: "Chandigarh University",
        icon: cu,
        iconBg: "#fbc3bc",
        date: "Oct 2020 - Aug 2025 (Present) ",
        points: [
            "Proficient in C/C++, Java, HTML, CSS, JS, with intermediate JavaScript skills.",
            "Led teams for complex projects like Product Recommendation System (Python, scikit-learn).",
            "Applied OOP in Python for Library Management System; strong C++ skills in Student Management System.",
            "Designed interactive portfolio using MERN .",
            "Contributed to Sandharniya Vikas Hackathon; achieved Flipkart Grid 5.0 level 2 & Google certifications.",
            "Participiated in many Unstop events.",
            // Add more points as needed
          ],
          
          
          
    },
    {
        title: "Intermediate (UK Board)",
        company_name: "Govt IC Hindolakhal Tehri Garhwal",
        icon: school,
        iconBg: "#accbe1",
        date: "Apr 2018 - Apr 2019",
        points: [
            "Completed Intermediate (UK Board) at G.I.C Hindolakhal.",
            "Session: 2018-2019.",
            "Achieved an percentage of 92.8% in the intermediate examinations.",
            // Add more points as needed
          ],
          
    },
    {
        title: "Matriculation (UK Board)",
        company_name: "Govt IC Hindolakhal Tehri Garhwal",
        icon: school,
        iconBg: "#b7e4c7",
        date: "Apr 2016 - Apr 2017",
        points: [
            "Completed Matriculation (UK Board) at G.I.C Hindolakhal.",
            "Session: 2016-2017.",
            "Secured an percentage of 93.2% in the matriculation examinations.",
            // Add more points as needed
          ],
          
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact, 
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/racxam',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sumit-jhaldiyal-8952851b9',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'PRODUCT RECOMMENDATION SYSTEM',
        description: 'Machine Learning Designed to enhance your shopping experience, this machine learning-based Product Recommendation System analyzes user preferences and suggests products aligned with their tastes. Tailored for efficiency, it leverages similarity in user preferences to offer personalized recommendations',
        link: 'https://github.com/racxam/Product-Recommendation-System/tree/main/Flipkart',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Jinny - Python Voice Assistant',
        description: "Meet Jinny, my Python-based voice assistant! Triggered by 'Twinkle Twinkle,' Jinny responds to personalized commands, from opening apps to answering questions. Built on a MacBook with Python libraries, it brings a touch of automation to your voice interactions. Explore and enhance Jinny's capabilities!",
        link: 'https://github.com/racxam/Jinny-Personal-Voice-Assistant-Python-',
    },
    {
        iconUrl: fav,
        theme: 'btn-back-blue',
        name: 'PERSONAL PORTOFIO WEBSITE(This)',
        description: 'Designed and built this Personal Portfolio Website for showcasing the projects.',
        link: '/',
    },
    {
        iconUrl:books,
        theme: 'btn-back-pink',
        name: 'STUDENT MANAGEMENT SYSTEM IN C++',
        description: 'Built a Library management System in CPP(My first C++ Project)',
        link: 'https://github.com/racxam/LMS-using-CPP',
    },
    {
        iconUrl: logo,
        theme: 'btn-back-orange',
        name: 'SANDHARNIYA VIKAS WEBSITE(for Hackathon)',
        description: 'Developed a web application for a College Hackathon, facilitating enrollment and awareness about the Hackthon name "Sandharniya Vikas" ',
        link: 'https://sandharniya-vikas.netlify.app',
    },
    {
        iconUrl: basket,
        theme: 'btn-back-yellow',
        name: 'E-Basket(My first Web D Project)',
        description: 'This Website is purely based on HTML and CSS and it is my first project of Web Developement Journey! Special hearts to This one! It does not do anything but pure design',
        link: 'https://racxam.github.io/E-Basket/',
    },
    {
        iconUrl: blog,
        theme: 'btn-back-pink',
        name: 'Soft-Maisto(Blogging Website)',
        description: 'This Website is based on HTML, CSS and Bootstrap. It is only the front-end static Website',
        link: 'https://racxam.github.io/SoftMaisto/',
    },
    {
        iconUrl: ebook,
        theme: 'btn-back-blue',
        name: 'Racxam E-Phone Book',
        description: 'This Website is based on HTML, CSS and Bootstrap. It is only the front-end static Website',
        link: 'https://racxam.github.io/Racxam_eContactBook.github.io/?',
    },
    {
        iconUrl: face,
        theme: 'btn-back-yellow',
        name: 'Facial Emotion Recognition System with API',
        description: 'This is a Facial emotion recognition model which is Machine learning based and It also incooperates a API for futuristic purposes. ',
        link: 'https://github.com/racxam/Face-Recog',
    },
    {
        iconUrl: books,
        theme: 'btn-back-green',
        name: 'Python Based LMS(command-line-based)',
        description: 'This is a python based LMS which is command-line and my first python based project',
        link: 'https://github.com/racxam/Python-based-Library-management-system',
    }
    
];