import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    "id": "still-discount",
    "title": "Still Discount",
    "category": "Full Stack · Learning",
    "impact": "270K active users · Dec 2021–Mar 2026",
    "role": "Full-stack development & automation",
    "status": "Live product",
    "description": "A course-discovery platform connecting learners with free Udemy coupons, backed by a dedicated API and automated publishing scheduler.",
    "longDescription": "Still Discount combines a Next.js frontend, a TypeScript/Express API and a separate scheduled-job service. The product covers course search, filtering, discovery and distribution, while background jobs import offers and prepare content for publishing. The supplied GA4 acquisition report shows 270K active users over December 2021 through March 2026.",
    "image": "/images/stilldiscount-free-courses-hero.png",
    "liveLink": "https://stilldiscount.com/",
    "tags": [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MySQL",
      "Redis",
      "node-cron"
    ],
    "date": "2021 — Present",
    "caseStudy": {
      "problem": "Course coupons expire quickly. Keeping a discoverable catalogue and distributing fresh offers requires more than a manually updated listing.",
      "contribution": [
        "Built a Next.js discovery experience with course filtering, search, account flows and paginated content.",
        "Implemented a TypeScript/Express API with validated requests, authentication, operation-specific rate limits and MySQL-backed course data.",
        "Separated scheduled course imports, poster generation, webhooks and Telegram publishing into a dedicated node-cron service.",
        "Added shared infrastructure for Redis caching and ClickHouse, alongside job execution logs and health-check routines."
      ],
      "outcome": "GA4 reports 270K active users and 268K new users for 1 December 2021–31 March 2026. The previously supplied résumé separately reports 185,000+ learners enrolled for free; the analytics screenshot measures traffic, not enrollments."
    },
    "metrics": [
      {
        "value": "270K",
        "label": "Active users"
      },
      {
        "value": "268K",
        "label": "New users"
      },
      {
        "value": "146K",
        "label": "New users from organic social"
      }
    ],
    "metricsNote": "Google Analytics 4 · 1 Dec 2021–31 Mar 2026 · Rounded values shown in the supplied acquisition report.",
    "architecture": [
      {
        "title": "Discover",
        "detail": "Next.js renders course lists, filters and detail pages."
      },
      {
        "title": "Serve",
        "detail": "The Express API validates requests and retrieves course data from MySQL."
      },
      {
        "title": "Refresh",
        "detail": "Scheduled import jobs bring new offers into the catalogue."
      },
      {
        "title": "Distribute",
        "detail": "Poster, webhook and Telegram jobs prepare and share content."
      }
    ],
    "decisions": [
      {
        "title": "Keep publishing separate from browsing",
        "detail": "The scheduler has its own process and job lifecycle. Imports and content distribution can run on schedules independently of frontend requests."
      },
      {
        "title": "Make failures inspectable",
        "detail": "The scheduler records job start, completion, duration and errors, with health-check and cleanup jobs. This gives operators a way to investigate missed runs."
      },
      {
        "title": "Validate at the API boundary",
        "detail": "Course routes combine input validation with operation-specific rate limits, including search and filtering. Authenticated actions are handled separately from public discovery."
      }
    ],
    "gallery": [
      {
        "src": "/images/projects/still-discount-analytics.png",
        "alt": "Still Discount GA4 acquisition overview showing 270K active users for December 2021 through March 2026",
        "caption": "Original GA4 acquisition overview. The reporting period is 1 Dec 2021–31 Mar 2026; these are period totals, not monthly active users.",
        "width": 1839,
        "height": 921
      }
    ],
    "resources": [
      {
        "label": "View analytics screenshot",
        "href": "/images/projects/still-discount-analytics.png"
      }
    ]
  },
  {
    "id": "abnormal-event-detection",
    "title": "Abnormal Event Detection on Pathway",
    "category": "AI/ML · Video analysis",
    "impact": "Four event classes · Detection to clip review",
    "role": "Computer vision & web integration",
    "status": "Academic prototype",
    "description": "A YOLOv8 and Flask prototype that detects four event classes in video, records event clips and makes them available for review.",
    "longDescription": "Developed from January to May 2024, this system connects YOLOv8 inference, OpenCV video processing, Flask pages and Cloudinary storage. The code handles accident, fighting, kidnapping and chain-snatching classes. The repository includes example detections, a presentation and the final project report.",
    "image": "/images/abnormal-event-detection-pathway.png",
    "githubLink": "https://github.com/vishwanathkarka/Abnormal-Event-Detection-On-Pathway",
    "tags": [
      "YOLOv8",
      "Python",
      "Flask",
      "OpenCV",
      "Cloudinary"
    ],
    "date": "Jan — May 2024",
    "caseStudy": {
      "problem": "Continuous video monitoring asks a human operator to notice relevant events and find the right footage afterward. The project explores connecting detection directly to recording and review.",
      "contribution": [
        "Integrated YOLOv8 inference with OpenCV frame processing and class-labelled bounding boxes.",
        "Used a confidence gate above 0.5 in the detection code to trigger an audio signal and start event recording.",
        "Wrote detected video segments to files and uploaded them to Cloudinary for later access.",
        "Built Flask pages for sign-in, video input, streaming and dashboard review."
      ],
      "outcome": "An academic prototype connecting four-class event detection to recording and a web interface. Repository images illustrate detections; they are not an independently measured accuracy or real-world deployment result."
    },
    "architecture": [
      {
        "title": "Read video",
        "detail": "OpenCV reads frames from a video source."
      },
      {
        "title": "Detect",
        "detail": "YOLOv8 predicts classes and bounding boxes; a confidence gate controls recording."
      },
      {
        "title": "Record",
        "detail": "The pipeline captures event frames and writes a video clip."
      },
      {
        "title": "Review",
        "detail": "Cloudinary stores uploaded clips for access through the Flask interface."
      }
    ],
    "decisions": [
      {
        "title": "Connect inference to an operator workflow",
        "detail": "Detection is only one part of the project. The pipeline also signals an event, records footage and provides pages for reviewing clips."
      },
      {
        "title": "Separate a trigger threshold from model quality",
        "detail": "The 0.5 confidence gate is a recording rule in the source, not a claim of 50% accuracy. A proper evaluation would need a held-out dataset and reported precision/recall."
      }
    ],
    "gallery": [
      {
        "src": "/images/projects/yolo-detection-examples.jpg",
        "alt": "Repository montage of labelled example detections for accidents, fighting, kidnapping and chain snatching",
        "caption": "Example detections from the project repository. Labels and boxes show model outputs on sample imagery, not a benchmark.",
        "width": 1759,
        "height": 1407
      }
    ],
    "resources": [
      {
        "label": "Project presentation · PDF",
        "href": "https://github.com/vishwanathkarka/Abnormal-Event-Detection-On-Pathway/blob/main/Abnoramal%20Event%20Detection%20on%20Pathway%20using%20Yolov8.pdf"
      },
      {
        "label": "Final project report · DOCX",
        "href": "https://github.com/vishwanathkarka/Abnormal-Event-Detection-On-Pathway/blob/main/Final%20documentation.docx"
      },
      {
        "label": "Detection pipeline · Python",
        "href": "https://github.com/vishwanathkarka/Abnormal-Event-Detection-On-Pathway/blob/main/YOLO_Video.py"
      }
    ]
  },
  {
    "id": "minspend",
    "title": "MinSpend",
    "category": "Android · Personal finance",
    "impact": "Reference-aware transaction deduplication",
    "role": "Native Android development",
    "status": "Internal testing",
    "description": "A native Android expense tracker that turns bank SMS alerts into categorized transactions, budgets and spending reports.",
    "longDescription": "MinSpend is built with Kotlin and Jetpack Compose, using Room for local data, Hilt for dependency injection and WorkManager for background tasks. Its SMS pipeline scopes parsing rules by bank sender, extracts transaction details and checks for duplicates before saving. The app also includes category budgets, bill reminders, reports, backup tools and a home-screen widget.",
    "image": "/images/minspend-expenses-autopilot.png",
    "tags": [
      "Kotlin",
      "Jetpack Compose",
      "Room",
      "WorkManager",
      "Hilt"
    ],
    "date": "In development · Internal testing",
    "caseStudy": {
      "problem": "Manual transaction entry is easy to abandon, but automatic import introduces its own problems: inconsistent SMS formats, repeated alerts and separate payments with identical amounts.",
      "contribution": [
        "Built a native Compose interface for expenses, category budgets, spending history and reports.",
        "Implemented bank-scoped SMS rules with ordered matching and a fallback for shared message patterns.",
        "Added reference-aware deduplication across existing records and transactions arriving in the same batch.",
        "Kept unmatched merchants in an explicit uncategorized state, so users can distinguish unresolved imports from intentionally categorized spending.",
        "Added background import and reminder workers, CSV/PDF report generation, backup code and an expense widget."
      ],
      "outcome": "A working codebase in internal testing. The repository contains unit tests for parsing, reference-aware deduplication, budget math and other business logic; no public adoption or accuracy figure is claimed."
    },
    "architecture": [
      {
        "title": "Receive",
        "detail": "SMS receivers and workers bring transaction alerts into the import flow."
      },
      {
        "title": "Interpret",
        "detail": "Sender-specific rules extract payment details and categorize known merchants."
      },
      {
        "title": "Reconcile",
        "detail": "Reference-aware checks remove repeated alerts while preserving distinct payments."
      },
      {
        "title": "Use",
        "detail": "Room-backed records feed Compose screens, budgets, reports and reminders."
      }
    ],
    "decisions": [
      {
        "title": "Same amount does not mean same payment",
        "detail": "Two ₹1 payments seconds apart must remain distinct when their bank references differ. Matching references identify duplicates; amount and time are only a fallback when references are missing."
      },
      {
        "title": "Check duplicates within a batch, too",
        "detail": "Checking only the saved database misses repeated alerts in the same scan. The import helper also compares each candidate with records already accepted in that batch."
      },
      {
        "title": "Give specific bank rules priority",
        "detail": "The parser tries issuer-specific rules before shared patterns. Matching is ordered and bounded so a broad rule does not override a more specific interpretation."
      }
    ]
  },
  {
    "id": "engageon-tellow-ai",
    "title": "EngageON & Tellow AI",
    "category": "SaaS · AI creation",
    "impact": "Reusable AI components · 50% faster model onboarding",
    "role": "Full-stack product development",
    "status": "Professional product work",
    "description": "Two SaaS platforms with event-driven backends, AI image and video generation, character training, and integrated product dashboards.",
    "longDescription": "Across EngageON and Tellow AI, the work spanned product interfaces, backend systems, AI model integration, admin tools and payments. The architecture combined Next.js and Node.js with Redis, MySQL, ClickHouse and Kafka.",
    "tags": [
      "Next.js",
      "Node.js",
      "Redis",
      "MySQL",
      "ClickHouse",
      "Kafka",
      "Cloudflare R2",
      "Razorpay"
    ],
    "date": "May — Dec 2024",
    "caseStudy": {
      "problem": "AI products need to connect changing model capabilities to usable customer workflows, while keeping asynchronous product events, dashboards and payments reliable.",
      "contribution": [
        "Built two SaaS platforms, EngageON and Tellow AI, using Next.js, Node.js and Redis, MySQL and ClickHouse.",
        "Designed scalable backend systems and Kafka-based event-driven workflows to reduce API response times.",
        "Integrated image and video generation and character-training pipelines with flexible model integration.",
        "Built reusable backend and frontend components that reduced AI model onboarding time by 50%.",
        "Developed dashboards, admin systems and user panels, and integrated Razorpay payments."
      ],
      "outcome": "Reusable components reduced AI model onboarding time by 50%. The source details provided no before-and-after API latency figures, so this page describes the improvement without an invented number."
    },
    "architecture": [
      {
        "title": "Build product surfaces",
        "detail": "Next.js interfaces provide end-to-end dashboards, admin tools and user panels."
      },
      {
        "title": "Orchestrate workflows",
        "detail": "Node.js services coordinate product operations and Kafka event-driven workflows."
      },
      {
        "title": "Integrate AI models",
        "detail": "Reusable backend and frontend components connect image/video generation and character-training pipelines."
      },
      {
        "title": "Store product data",
        "detail": "Redis, MySQL and ClickHouse support the multi-database architecture."
      }
    ],
    "decisions": [
      {
        "title": "Keep model integration reusable",
        "detail": "Shared frontend and backend components let new AI models join product workflows without rebuilding each integration, cutting onboarding time by 50%."
      },
      {
        "title": "Use events for asynchronous work",
        "detail": "Kafka-based workflows decouple product events from request handling and were used to reduce API response times."
      },
      {
        "title": "Connect admin, user and payment flows",
        "detail": "Dashboards, administrative tools, user panels and Razorpay integration were built as parts of the same product experience."
      }
    ]
  },
  {
    "id": "eveez-recovery-tracker",
    "title": "EV Recovery Tracker",
    "category": "Full Stack · Mobility operations",
    "impact": "Live status · Battery insights · GPS tracking",
    "role": "Full-stack product development",
    "status": "Professional product work",
    "description": "An EV recovery application combining live vehicle monitoring, validation, battery insights, GPS telemetry and recovery operations.",
    "longDescription": "Built during a full-stack internship at Eveez, Recovery Tracker brought vehicle status and recovery progress into an operational dashboard. The work covered customer-facing and administrative interfaces, backend APIs, chassis validation, image uploads and third-party vehicle integrations.",
    "tags": [
      "Next.js",
      "Node.js",
      "SQL",
      "MongoDB",
      "AWS S3",
      "Tailwind CSS"
    ],
    "date": "Jan — Apr 2024",
    "caseStudy": {
      "problem": "Recovery teams need to validate a vehicle, understand its current status and battery condition, and follow its location and recovery progress.",
      "contribution": [
        "Developed Recovery Tracker with live status updates, battery insights and real-time vehicle monitoring.",
        "Implemented chassis-number validation and vehicle image uploads using AWS S3 storage.",
        "Built Next.js and Node.js admin dashboards for vehicle health, alerts and recovery progress.",
        "Integrated third-party APIs for live vehicle telemetry and GPS tracking.",
        "Worked across interface development, backend APIs, authentication and deployment support."
      ],
      "outcome": "A full-stack operations workflow for validating and monitoring EV vehicles through recovery. No fleet size, telemetry uptime or recovery-time result was supplied."
    },
    "architecture": [
      {
        "title": "Validate vehicle",
        "detail": "Chassis-number checks establish the vehicle record; image uploads add supporting evidence."
      },
      {
        "title": "Collect telemetry",
        "detail": "Third-party APIs supply live vehicle status, battery insights and GPS location."
      },
      {
        "title": "Track recovery",
        "detail": "Next.js and Node.js dashboards bring vehicle health, alerts and recovery progress together."
      },
      {
        "title": "Store evidence",
        "detail": "AWS S3 stores uploaded vehicle images for the operational workflow."
      }
    ],
    "decisions": [
      {
        "title": "Combine identity and visual evidence",
        "detail": "Chassis-number verification and image uploads support a vehicle-validation flow before teams act on a recovery case."
      },
      {
        "title": "Give operators a live view",
        "detail": "Telemetry and GPS integrations surface vehicle state and location alongside recovery progress in the admin dashboard."
      },
      {
        "title": "Work across the full stack",
        "detail": "The work connected the Next.js interface to backend APIs, authentication and deployment support."
      }
    ]
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
]

export const getProjectById = (id: string): Project | undefined => projects.find((project) => project.id === id)
export const getAllProjects = (): Project[] => projects
