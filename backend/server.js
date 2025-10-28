const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;
const projects = [
  {
    id: 1,
    title: "Rostro",
    brief: {
      en: "Facial Recognition Attendance System - Built with Flutter and Firebase",
      zh: "人脸识别考勤系统 - 使用 Flutter 和 Firebase 构建"
    },
    image: "RostroLogo.png",
    technologies: ["Flutter", "Firebase", "Face Recognition"],
    highlights: [
      "Built facial recognition login interface and connected it with backend API for authentication",
      "Created supporting screens, including patient information display and updates, designed for Android devices",
      "Implemented features like forms, date/time pickers, alerts (RFlutter), and animations (e.g., AnimatedContainer, AnimatedBuilder)",
      "Integrated the Google Maps Flutter plugin with features like position display, navigation support, and search/autocomplete functionality",
      "Conducted user testing and debugging using Android Studio Emulator, ensuring stable performance across different Android versions",
      "Enhanced user experience with responsive layouts for various Android screen sizes",
      "Coordinated with backend developers for debugging, testing error messages and responsive layouts",
    ],
    github: "https://github.com/Face-Recognition-App-SD/frontend-Mobile",
  },
  {
    id: 2,
    title: "HandyMan",
    brief: {
      en: "Home Service Booking Platform",
      zh: "家庭服务预约平台"
    },
    image: "HandyMan.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    highlights: [
      "Developed front-end UI components in ReactJS for a handyman service mobile application",
      "Integrated Google Maps API for service location search",
      "Implemented login and email verification UI with form validation and user feedback",
      "Created responsive design using CSS for mobile browsers",
      "Collaborated with backend team for data integration",
    ],
    github: "https://github.com/NaimShaqqou/HandyMan-COP4331",
  },
  {
    id: 3,
    title: "Contact Management System",
    brief: {
      en: "Enterprise Contact Management System",
      zh: "企业联系人管理系统"
    },
    image: "ContactManager.png",
    technologies: ["JavaScript", "Firebase", "Material UI"],
    highlights: [
      "Created responsive web pages using HTML5 and CSS",
      "Implemented form validation for contact information",
      "Collaborated with backend team for data integration",
    ],
    github: "https://github.com/MatthewMcK17/COP4331-SmallProject",
  },
];

app.get("/", (req, res) => {
  res.json({
    message: "Portfolio API",
    status: "Running",
    endpoints: {
      projects: "/api/projects",
      singleProject: "/api/projects/:id",
    },
  });
});

app.get("/api/projects", (req, res) => {
  const lang = req.query.lang || 'en';
  
  const projectsWithLang = projects.map(p => ({
    ...p,
    brief: p.brief[lang] || p.brief.en
  }));
  
  res.json({
    success: true,
    count: projectsWithLang.length,
    projects: projectsWithLang,
  });
});

app.get("/api/projects/:id", (req, res) => {
  const projectId = parseInt(req.params.id);
  const lang = req.query.lang || 'en';
  const project = projects.find((p) => p.id === projectId);

  if (project) {
    res.json({
      success: true,
      project: {
        ...project,
        brief: project.brief[lang] || project.brief.en
      }
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Project not found",
    });
  }
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📊 Serving ${projects.length} projects`);
});
