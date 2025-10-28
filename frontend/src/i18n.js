import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 语言资源
const resources = {
  en: {
    translation: {
      // 导航栏
      nav: {
        home: "Home",
        about: "About",
        contact: "Contact",
      },

      // 首页
      home: {
        welcome: "Welcome to my portfolio",
        greeting: "Hi, I'm",
        subtitle: "Junior Software Developer",
        description:
          "Computer Science graduate focused on building user-friendly applications using React, Flutter, and JavaScript. Passionate about learning new technologies and creating valuable products.",
        contactMe: "Contact Me",
        learnMore: "Learn More",

        // 技能区域
        skills: {
          frontend: "Frontend Development",
          frontendDesc: "React, Flutter, JavaScript",
          uiux: "UI/UX Design",
          uiuxDesc: "Responsive Design, User Experience",
          tools: "Tools & Platforms",
          toolsDesc: "Git, Docker, Firebase",
          learning: "Fast Learner",
          learningDesc: "Adapt to new technologies and frameworks",
        },

        // 项目区域
        projects: {
          title: "Featured Projects",
          subtitle: "Showcasing my best work and technical capabilities",
        },
      },

      // About 页面
      about: {
        title: "About Me",
        intro:
          "Computer Science graduate with frontend development experience. Focused on building applications using React, Flutter, JavaScript, and Java with solid software engineering fundamentals. Built applications integrating APIs, authentication, and UI/UX design. Proficient in English and Chinese, with teamwork and problem-solving abilities, eager to contribute as a junior software developer.",

        skills: "Skills",
        programmingLanguages: "Programming Languages",
        frontendDev: "Frontend Development",
        toolsPlatforms: "Tools & Platforms",
        methodologies: "Methodologies & Soft Skills",

        education: "Education Background",
        degree: "Bachelor of Science in Computer Science",
        graduated: "Graduated",
        gpa: "GPA",

        languages: "Languages",
        english: "English",
        chinese: "Chinese",
        proficient: "Proficient",
        conversational: "Conversational",
        contact: "Get In Touch With Me",

        beyondCode: "Beyond Code - My Other Side",
        beyondCodeDesc:
          "Beyond coding, I love life and enjoy every hobby that helps me grow",

        // 兴趣爱好
        hobbies: {
          poker: {
            title: "Poker",
            desc: "Risk Assessment | Probability | Strategy",
            quote:
              "Decision-making and risk management learned at the poker table help me make wiser choices in technology selection and architecture design",
          },
          music: {
            title: "Music Creation",
            desc: "Composition | Arrangement | Music Production",
            quote:
              "Showed musical talent from an early age, with unique understanding of melody and rhythm. Music creation exercises my creativity and aesthetic ability",
          },
          fishing: {
            title: "Fishing",
            desc: "Enjoy Tranquility | Cultivate Patience | Nature",
            quote:
              "Fishing taught me patience and focus, which is also the secret to debugging code",
          },
          badminton: {
            title: "Badminton",
            desc: "Quick Response | Teamwork | Stay Active",
            quote:
              "Badminton taught me quick response and teamwork, just like agile development",
          },
          lol: {
            title: "League of Legends",
            desc: "Gold Rank | Strategic Thinking | Teamwork",
            quote:
              "Strategic planning and team communication in games help me better understand product design and user experience",
          },
          gundam: {
            title: "Gundam Models",
            desc: "Assembly | Painting | Collection",
            quote:
              "Building Gundam models taught me the ultimate pursuit of detail and systematic thinking, just like building perfect code architecture",
          },
        },

        contact: "Contact Information",
        wantToCollaborate: "Want to Collaborate?",
        collaborateDesc:
          "If you have a project to discuss, or just want to say hi, feel free to reach out!",
        sendMessage: "Send Message",
      },

      // Contact 页面
      contact: {
        title: "Get In Touch",
        subtitle: "I'm always open to new opportunities and collaborations",
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again.",

        info: "Contact Information",
        phone: "Phone",
        emailLabel: "Email",
        linkedin: "LinkedIn",
        location: "Location",
      },

      // 页脚
      footer: {
        quickLinks: "Quick Links",
        home: "Home",
        about: "About",
        contact: "Contact",
        contactTitle: "Contact", // ← 新增
        allRights: "All rights reserved",
        position:"Junior Software Developer"
      },
    },
  },

  zh: {
    translation: {
      // 导航栏
      nav: {
        home: "首页",
        about: "关于我",
        contact: "联系我",
      },

      // 首页
      home: {
        welcome: "欢迎来到我的作品集",
        greeting: "你好，我是",
        subtitle: "初级软件开发者",
        description:
          "计算机科学毕业生，专注于使用 React、Flutter 和 JavaScript 构建用户友好的应用程序。热爱学习新技术，致力于创造有价值的产品。",
        contactMe: "联系我",
        learnMore: "了解更多",

        // 技能区域
        skills: {
          frontend: "前端开发",
          frontendDesc: "React, Flutter, JavaScript",
          uiux: "UI/UX 设计",
          uiuxDesc: "响应式设计, 用户体验",
          tools: "工具 & 平台",
          toolsDesc: "Git, Docker, Firebase",
          learning: "快速学习",
          learningDesc: "适应新技术和框架",
        },

        // 项目区域
        projects: {
          title: "精选项目",
          subtitle: "展示我的最佳作品和技术能力",
        },
      },

      // About 页面
      about: {
        title: "关于我",
        intro:
          "计算机科学毕业生，拥有前端开发实践经验。专注于使用 React、Flutter、JavaScript 和 Java 构建应用程序，具有扎实的软件工程基础。构建过集成 API、身份验证和 UI/UX 设计的应用程序。精通英语和中文，具备团队合作和解决问题的能力，渴望作为初级软件开发者做出贡献。",

        skills: "技能",
        programmingLanguages: "编程语言",
        frontendDev: "前端开发",
        toolsPlatforms: "工具 & 平台",
        methodologies: "方法论 & 软技能",

        education: "教育背景",
        degree: "计算机科学学士学位",
        graduated: "毕业时间",
        gpa: "GPA",

        languages: "语言能力",
        english: "英语",
        chinese: "中文",
        proficient: "精通",
        conversational: "会话",

        beyondCode: "Beyond Code - 我的另一面",
        beyondCodeDesc: "编程之外，我热爱生活，享受每一个让我成长的兴趣爱好",

        // 兴趣爱好
        hobbies: {
          poker: {
            title: "德州扑克",
            desc: "风险评估 | 概率计算 | 策略思维",
            quote:
              "在牌桌上学会的决策力和风险管理，帮助我在技术选择和架构设计中做出更明智的判断",
          },
          music: {
            title: "音乐创作",
            desc: "作曲 | 编曲 | 音乐制作",
            quote:
              "从小展现音乐天赋，对旋律和节奏有独特的理解。音乐创作锻炼了我的创造力和审美能力",
          },
          fishing: {
            title: "钓鱼",
            desc: "享受宁静 | 培养耐心 | 亲近自然",
            quote: "在钓鱼中学会耐心和专注，这也是 debug 代码的秘诀",
          },
          badminton: {
            title: "羽毛球",
            desc: "快速反应 | 团队配合 | 保持活力",
            quote: "羽毛球教会我快速反应和团队协作，就像敏捷开发一样",
          },
          lol: {
            title: "英雄联盟",
            desc: "黄金段位 | 策略思维 | 团队协作",
            quote:
              "游戏中的策略规划和团队沟通能力，帮助我更好地理解产品设计和用户体验",
          },
          gundam: {
            title: "高达模型",
            desc: "组装 | 涂装 | 收藏",
            quote:
              "拼装高达模型教会我对细节的极致追求和系统化思维，就像构建完美的代码架构",
          },
        },

        contact: "联系方式",
        wantToCollaborate: "想要合作？",
        collaborateDesc:
          "如果你有项目想要讨论，或者只是想打个招呼，欢迎联系我！",
        sendMessage: "发送消息",
      },

      // Contact 页面
      contact: {
        title: "联系我",
        subtitle: "我随时欢迎新的机会和合作",
        name: "您的姓名",
        email: "您的邮箱",
        message: "您的留言",
        send: "发送消息",
        sending: "发送中...",
        success: "消息发送成功！",
        error: "发送失败，请重试。",

        info: "联系方式",
        phone: "电话",
        emailLabel: "邮箱",
        linkedin: "领英",
        location: "位置",
      },

      // 页脚
      footer: {
        quickLinks: "快速链接",
        home: "首页",
        about: "关于我",
        contact: "联系我",
        contactTitle: "联系方式", // ← 新增
        allRights: "版权所有",
        position:"初级软件开发者",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // 默认语言改成英语
  fallbackLng: "zh",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
