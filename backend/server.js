const express = require("express");
const cors = require("cors");

const app = express();

// CORS 配置
app.use(cors({
  origin: [
    'https://portfolio-kh61.vercel.app',
    'https://portfolio-kh61-bv8h3rgre-kevins-projects-c83d13f2.vercel.app',
    'http://localhost:3000' // 本地开发
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// 环境变量端口（Render 需要）
const PORT = process.env.PORT || 10000;

// 项目数据
const projects = [
  {
    id: 1,
    title: "Rostro",
    brief: {
      en: "Facial Recognition Attendance System - Built with Flutter and Firebase",
      zh: "人脸识别考勤系统 - 使用 Flutter 和 Firebase 构建"
    },
    description: {
      en: "A comprehensive facial recognition system for attendance tracking, built with modern mobile technologies.",
      zh: "一个用于考勤追踪的综合人脸识别系统，使用现代移动技术构建。"
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
    demo: null,
    status: "completed",
    year: 2024
  },
  {
    id: 2,
    title: "HandyMan",
    brief: {
      en: "Home Service Booking Platform",
      zh: "家庭服务预约平台"
    },
    description: {
      en: "A mobile application connecting homeowners with professional handyman services.",
      zh: "一个连接房主和专业家政服务的移动应用。"
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
    demo: null,
    status: "completed",
    year: 2023
  },
  {
    id: 3,
    title: "Contact Management System",
    brief: {
      en: "Enterprise Contact Management System",
      zh: "企业联系人管理系统"
    },
    description: {
      en: "A web-based system for managing enterprise contacts and relationships.",
      zh: "一个用于管理企业联系人和关系的网络系统。"
    },
    image: "ContactManager.png",
    technologies: ["JavaScript", "Firebase", "Material UI"],
    highlights: [
      "Created responsive web pages using HTML5 and CSS",
      "Implemented form validation for contact information",
      "Collaborated with backend team for data integration",
    ],
    github: "https://github.com/MatthewMcK17/COP4331-SmallProject",
    demo: null,
    status: "completed",
    year: 2023
  },
];

// 根路由 - API 信息
app.get("/", (req, res) => {
  res.json({
    name: "Portfolio API",
    version: "1.0.0",
    status: "Running",
    timestamp: new Date().toISOString(),
    endpoints: {
      root: {
        method: "GET",
        path: "/",
        description: "API information"
      },
      projects: {
        method: "GET",
        path: "/api/projects",
        description: "Get all projects",
        params: "?lang=en|zh"
      },
      singleProject: {
        method: "GET",
        path: "/api/projects/:id",
        description: "Get project by ID",
        params: "?lang=en|zh"
      },
      health: {
        method: "GET",
        path: "/health",
        description: "Health check endpoint"
      }
    }
  });
});

// 健康检查端点（用于 UptimeRobot）
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// 获取所有项目
app.get("/api/projects", (req, res) => {
  try {
    const lang = req.query.lang || 'en';
    const status = req.query.status; // 可选：按状态筛选
    
    let filteredProjects = projects;
    
    // 按状态筛选
    if (status) {
      filteredProjects = projects.filter(p => p.status === status);
    }
    
    // 转换为指定语言
    const projectsWithLang = filteredProjects.map(p => ({
      ...p,
      brief: p.brief[lang] || p.brief.en,
      description: p.description?.[lang] || p.description?.en || p.brief[lang] || p.brief.en
    }));
    
    res.json({
      success: true,
      count: projectsWithLang.length,
      language: lang,
      projects: projectsWithLang,
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
});

// 获取单个项目
app.get("/api/projects/:id", (req, res) => {
  try {
    const projectId = parseInt(req.params.id);
    const lang = req.query.lang || 'en';
    
    if (isNaN(projectId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid project ID"
      });
    }
    
    const project = projects.find((p) => p.id === projectId);

    if (project) {
      res.json({
        success: true,
        project: {
          ...project,
          brief: project.brief[lang] || project.brief.en,
          description: project.description?.[lang] || project.description?.en || project.brief[lang] || project.brief.en
        }
      });
    } else {
      res.status(404).json({
        success: false,
        message: `Project with ID ${projectId} not found`,
      });
    }
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
});

// 搜索项目
app.get("/api/projects/search", (req, res) => {
  try {
    const query = req.query.q?.toLowerCase();
    const lang = req.query.lang || 'en';
    
    if (!query) {
      return res.status(400).json({
        success: false,
        message: "Search query is required"
      });
    }
    
    const results = projects.filter(p => 
      p.title.toLowerCase().includes(query) ||
      p.brief.en.toLowerCase().includes(query) ||
      p.brief.zh.includes(query) ||
      p.technologies.some(t => t.toLowerCase().includes(query))
    );
    
    const resultsWithLang = results.map(p => ({
      ...p,
      brief: p.brief[lang] || p.brief.en,
      description: p.description?.[lang] || p.description?.en || p.brief[lang] || p.brief.en
    }));
    
    res.json({
      success: true,
      count: resultsWithLang.length,
      query: query,
      language: lang,
      results: resultsWithLang
    });
  } catch (error) {
    console.error('Error searching projects:', error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
});

// 按技术栈筛选
app.get("/api/projects/technology/:tech", (req, res) => {
  try {
    const tech = req.params.tech;
    const lang = req.query.lang || 'en';
    
    const results = projects.filter(p => 
      p.technologies.some(t => t.toLowerCase() === tech.toLowerCase())
    );
    
    const resultsWithLang = results.map(p => ({
      ...p,
      brief: p.brief[lang] || p.brief.en,
      description: p.description?.[lang] || p.description?.en || p.brief[lang] || p.brief.en
    }));
    
    res.json({
      success: true,
      count: resultsWithLang.length,
      technology: tech,
      language: lang,
      projects: resultsWithLang
    });
  } catch (error) {
    console.error('Error filtering by technology:', error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
});

// 获取所有技术栈
app.get("/api/technologies", (req, res) => {
  try {
    const allTechs = [...new Set(projects.flatMap(p => p.technologies))];
    
    res.json({
      success: true,
      count: allTechs.length,
      technologies: allTechs.sort()
    });
  } catch (error) {
    console.error('Error fetching technologies:', error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
});

// 404 处理
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found",
    path: req.path,
    availableEndpoints: [
      "/",
      "/health",
      "/api/projects",
      "/api/projects/:id",
      "/api/projects/search?q=query",
      "/api/projects/technology/:tech",
      "/api/technologies"
    ]
  });
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// 启动服务器
app.listen(PORT, '0.0.0.0', () => {
  console.log('=================================');
  console.log('🚀 Portfolio Backend API');
  console.log('=================================');
  console.log(`📡 Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📊 Serving ${projects.length} projects`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
  console.log('=================================');
});

// 优雅关闭
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  process.exit(0);
});