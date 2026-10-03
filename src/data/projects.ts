import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'still-discount',
    title: 'Still Discount',
    description: 'A platform sharing verified 100%-off Udemy coupon codes that helps students enroll in courses for free.',
    longDescription: 'Still Discount is a full-stack platform that helps students find verified 100%-off Udemy coupon codes and enroll in courses for free. Built with Next.js and Node.js, it uses Redis for fast delivery, ClickHouse for analytics, and n8n to automate social media publishing. The platform has helped more than 185,000 learners discover free courses.',
    image: '/images/stilldiscount-free-courses-hero.png',
    liveLink: 'https://stilldiscount.com/',
    tags: ['Next.js', 'Node.js', 'Redis', 'ClickHouse', 'n8n'],
    date: '2021 — Present',
  },
  {
    id: 'abnormal-event-detection',
    title: 'Abnormal Event Detection on Pathway',
    description: 'A YOLOv8-powered video surveillance system for detecting abnormal events on pathways in real time.',
    longDescription: 'A video surveillance system designed to improve pathway and road safety by detecting abnormal events such as accidents, fighting, kidnapping and chain snatching. It uses a fine-tuned YOLOv8 model with OpenCV for real-time and pre-recorded video analysis, Flask for authentication and the monitoring dashboard, and Cloudinary to store recorded event clips.',
    image: '/images/abnormal-event-detection-pathway.png',
    githubLink: 'https://github.com/vishwanathkarka/Abnormal-Event-Detection-On-Pathway',
    tags: ['YOLOv8', 'Python', 'Flask', 'OpenCV', 'Cloudinary'],
    date: 'Computer vision project',
  },
  {
    id: 'minspend',
    title: 'MinSpend',
    description: 'An Android app that automatically tracks and categorizes expenses from bank SMS alerts.',
    longDescription: 'MinSpend is an Android expense-tracking app that reads transaction alerts from bank SMS messages, identifies the expense category, and stores each transaction without manual entry. It provides spending insights, category breakdowns, budget setup, monthly summaries, and reminders for bills or payments. The app is currently in internal testing and will be available soon.',
    image: '/images/minspend-expenses-autopilot.png',
    tags: ['Android', 'SMS Automation', 'Expense Insights', 'Budgets', 'Reminders'],
    date: 'Coming soon · Internal testing',
  },
  {
    id: 'educonnect',
    title: 'Educonnect',
    description: 'A comprehensive school management platform for attendance, payments, exams, homework and results.',
    longDescription: 'Educonnect is a full-stack educational platform built with Next.js, Node.js and MongoDB. It includes authentication, attendance tracking, payment management with Stripe, permissions, timetables, examination planning, homework, results and department management.',
    image: '/educonnect-vishwanath.png',
    liveLink: 'https://educonnect.vishwanathkarka.com/',
    githubLink: 'https://github.com/vishwanathkarka/school-management-system-frontend',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    date: '2023',
  },
  {
    id: 'devto-clone',
    title: 'Dev.to Clone',
    description: 'A responsive React recreation of the DEV community experience with infinite loading.',
    longDescription: 'A frontend application built with React.js that recreates the core experience of the DEV community. The project focuses on responsive layouts, dynamic API content and seamless infinite loading across devices.',
    image: '/devto-vishwanath.png',
    liveLink: 'https://devcloneapp.netlify.app/',
    githubLink: 'https://github.com/vishwanathkarka/dev-to',
    tags: ['React.js', 'JavaScript', 'REST API', 'CSS'],
    date: '2022',
  },
  {
    id: 'password-generator',
    title: 'Password Generator',
    description: 'A focused JavaScript utility for creating configurable secure passwords.',
    longDescription: 'A lightweight password generator built with JavaScript. Users can configure the password format and quickly generate a strong password through a clear, responsive interface.',
    image: '/password-generator-vishwanath.png',
    liveLink: 'https://vishwajs-05.netlify.app/',
    githubLink: 'https://github.com/vishwanathkarka/JS-05-PasswordGenerator/',
    tags: ['JavaScript', 'HTML', 'CSS'],
    date: '2022',
  },
]

export const getProjectById = (id: string): Project | undefined => projects.find((project) => project.id === id)
export const getAllProjects = (): Project[] => projects
