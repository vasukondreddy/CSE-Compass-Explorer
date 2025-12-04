
export interface CourseData {
  title: string;
  description: string;
  duration: string;
  level: string;
  rating: number;
  students: number;
  color: string;
  advancedSkills: string[];
  roadmap: {
    phase: string;
    duration: string;
    topics: string[];
  }[];
  resources: {
    type: string;
    items: { name: string; url: string; }[];
  }[];
  certifications: {
    name: string;
    provider: string;
    difficulty: string;
    duration: string;
  }[];
  careerPaths: {
    title: string;
    salary: string;
    description: string;
    skills: string[];
  }[];
}

export const coursesData: Record<string, CourseData> = {
  "artificial-intelligence": {
    title: "Artificial Intelligence",
    description: "Master AI concepts, machine learning algorithms, and build intelligent systems that can learn and make decisions.",
    duration: "18-24 months",
    level: "Advanced",
    rating: 4.8,
    students: 15420,
    color: "from-purple-500 to-pink-600",
    advancedSkills: ["Machine Learning", "Deep Learning", "Neural Networks", "Computer Vision", "NLP", "Reinforcement Learning", "TensorFlow", "PyTorch"],
    roadmap: [
      {
        phase: "Foundation",
        duration: "3-4 months",
        topics: [
          "Mathematics for AI (Linear Algebra, Calculus, Statistics)",
          "Python Programming for AI",
          "Data Structures and Algorithms",
          "Probability and Statistics",
          "Introduction to AI and Machine Learning",
          "Data Preprocessing and Feature Engineering",
          "Supervised Learning Algorithms",
          "Unsupervised Learning Algorithms"
        ]
      },
      {
        phase: "Machine Learning",
        duration: "4-5 months",
        topics: [
          "Linear and Logistic Regression",
          "Decision Trees and Random Forests",
          "Support Vector Machines",
          "K-Means and Hierarchical Clustering",
          "Naive Bayes and Ensemble Methods",
          "Cross-validation and Model Selection",
          "Regularization Techniques",
          "Dimensionality Reduction (PCA, t-SNE)"
        ]
      },
      {
        phase: "Deep Learning",
        duration: "5-6 months",
        topics: [
          "Neural Networks Fundamentals",
          "Backpropagation and Gradient Descent",
          "Convolutional Neural Networks (CNNs)",
          "Recurrent Neural Networks (RNNs)",
          "Long Short-Term Memory (LSTM)",
          "Generative Adversarial Networks (GANs)",
          "Transfer Learning and Fine-tuning",
          "TensorFlow and PyTorch Frameworks"
        ]
      },
      {
        phase: "Specialization",
        duration: "6-9 months",
        topics: [
          "Computer Vision and Image Processing",
          "Natural Language Processing",
          "Reinforcement Learning",
          "AI Ethics and Bias",
          "MLOps and Model Deployment",
          "Edge AI and Mobile Deployment",
          "AI Research and Paper Implementation",
          "Capstone AI Project"
        ]
      }
    ],
    resources: [
      {
        type: "Books",
        items: [
          { name: "Pattern Recognition and Machine Learning", url: "#" },
          { name: "Deep Learning by Ian Goodfellow", url: "#" }
        ]
      }
    ],
    certifications: [
      { name: "TensorFlow Developer Certificate", provider: "Google", difficulty: "Intermediate", duration: "3 months" },
      { name: "AWS Machine Learning Specialty", provider: "Amazon", difficulty: "Advanced", duration: "4 months" }
    ],
    careerPaths: [
      { title: "AI Engineer", salary: "$120,000 - $180,000", description: "Design and implement AI systems", skills: ["Python", "TensorFlow", "PyTorch"] },
      { title: "Machine Learning Engineer", salary: "$130,000 - $200,000", description: "Build and deploy ML models", skills: ["MLOps", "Docker", "Kubernetes"] }
    ]
  },
  "machine-learning": {
    title: "Machine Learning Engineering",
    description: "Learn to build, deploy, and maintain machine learning systems at scale with MLOps practices.",
    duration: "15-18 months",
    level: "Advanced",
    rating: 4.7,
    students: 12840,
    color: "from-blue-500 to-cyan-600",
    advancedSkills: ["MLOps", "Model Deployment", "Feature Engineering", "AutoML", "Model Monitoring", "A/B Testing", "Kubernetes", "Docker"],
    roadmap: [
      {
        phase: "ML Fundamentals",
        duration: "3-4 months",
        topics: [
          "Python for Machine Learning",
          "Statistics and Probability",
          "Data Analysis with Pandas",
          "Scikit-learn Fundamentals",
          "Supervised Learning Algorithms",
          "Unsupervised Learning Techniques",
          "Model Evaluation Metrics",
          "Cross-validation Strategies"
        ]
      },
      {
        phase: "Advanced ML",
        duration: "4-5 months",
        topics: [
          "Ensemble Methods",
          "Feature Selection and Engineering",
          "Hyperparameter Tuning",
          "Time Series Forecasting",
          "Anomaly Detection",
          "Recommendation Systems",
          "Deep Learning Integration",
          "AutoML Platforms"
        ]
      },
      {
        phase: "MLOps & Deployment",
        duration: "4-5 months",
        topics: [
          "Model Versioning with Git",
          "Docker for ML Applications",
          "Kubernetes for ML Workloads",
          "CI/CD for Machine Learning",
          "Model Monitoring and Logging",
          "A/B Testing for ML Models",
          "Feature Stores",
          "ML Pipeline Orchestration"
        ]
      },
      {
        phase: "Production ML",
        duration: "4-4 months",
        topics: [
          "Scalable ML Architecture",
          "Real-time Model Serving",
          "Batch Processing Systems",
          "Data Drift Detection",
          "Model Governance",
          "Performance Optimization",
          "Security in ML Systems",
          "End-to-end ML Project"
        ]
      }
    ],
    resources: [
      {
        type: "Platforms",
        items: [
          { name: "MLflow", url: "#" },
          { name: "Kubeflow", url: "#" }
        ]
      }
    ],
    certifications: [
      { name: "Google Cloud ML Engineer", provider: "Google", difficulty: "Professional", duration: "4 months" },
      { name: "Azure AI Engineer", provider: "Microsoft", difficulty: "Professional", duration: "3 months" }
    ],
    careerPaths: [
      { title: "ML Engineer", salary: "$130,000 - $200,000", description: "Build production ML systems", skills: ["Python", "Docker", "Kubernetes"] },
      { title: "MLOps Engineer", salary: "$140,000 - $210,000", description: "Manage ML infrastructure", skills: ["DevOps", "Cloud", "Monitoring"] }
    ]
  },
  "data-science": {
    title: "Data Science",
    description: "Extract insights from data using statistical methods, machine learning, and visualization techniques.",
    duration: "12-18 months",
    level: "Intermediate",
    rating: 4.6,
    students: 18650,
    color: "from-green-500 to-blue-600",
    advancedSkills: ["Statistical Analysis", "Data Visualization", "SQL", "Python/R", "Machine Learning", "Big Data", "Business Intelligence", "Tableau"],
    roadmap: [
      {
        phase: "Data Fundamentals",
        duration: "3-4 months",
        topics: [
          "Statistics and Probability",
          "Python for Data Science",
          "SQL and Database Management",
          "Data Collection and Cleaning",
          "Exploratory Data Analysis",
          "Data Visualization with Matplotlib",
          "Pandas for Data Manipulation",
          "NumPy for Numerical Computing"
        ]
      },
      {
        phase: "Advanced Analytics",
        duration: "4-5 months",
        topics: [
          "Hypothesis Testing",
          "Regression Analysis",
          "Time Series Analysis",
          "A/B Testing",
          "Statistical Modeling",
          "Seaborn and Plotly",
          "Interactive Dashboards",
          "Business Intelligence Tools"
        ]
      },
      {
        phase: "Machine Learning",
        duration: "3-4 months",
        topics: [
          "Supervised Learning",
          "Unsupervised Learning",
          "Feature Engineering",
          "Model Selection",
          "Ensemble Methods",
          "Model Evaluation",
          "Cross-validation",
          "Scikit-learn Mastery"
        ]
      },
      {
        phase: "Big Data & Deployment",
        duration: "2-5 months",
        topics: [
          "Big Data Technologies",
          "Apache Spark",
          "Hadoop Ecosystem",
          "Cloud Platforms (AWS/GCP/Azure)",
          "Data Pipelines",
          "Real-time Analytics",
          "Model Deployment",
          "Data Science Project Portfolio"
        ]
      }
    ],
    resources: [
      {
        type: "Tools",
        items: [
          { name: "Jupyter Notebook", url: "#" },
          { name: "Tableau", url: "#" }
        ]
      }
    ],
    certifications: [
      { name: "Google Data Analytics", provider: "Google", difficulty: "Beginner", duration: "6 months" },
      { name: "IBM Data Science", provider: "IBM", difficulty: "Intermediate", duration: "10 months" }
    ],
    careerPaths: [
      { title: "Data Scientist", salary: "$95,000 - $165,000", description: "Analyze data to drive business decisions", skills: ["Python", "SQL", "Statistics"] },
      { title: "Data Analyst", salary: "$65,000 - $95,000", description: "Create reports and insights", skills: ["Excel", "Tableau", "SQL"] }
    ]
  },
  "web-development": {
    title: "Full Stack Web Development",
    description: "Build modern web applications using the latest technologies and frameworks for both frontend and backend.",
    duration: "12-15 months",
    level: "Intermediate",
    rating: 4.5,
    students: 22150,
    color: "from-orange-500 to-red-600",
    advancedSkills: ["React", "Node.js", "JavaScript", "TypeScript", "MongoDB", "Express.js", "REST APIs", "GraphQL"],
    roadmap: [
      {
        phase: "Frontend Fundamentals",
        duration: "3-4 months",
        topics: [
          "HTML5 and Semantic Markup",
          "CSS3 and Responsive Design",
          "JavaScript ES6+ Features",
          "DOM Manipulation",
          "Asynchronous JavaScript",
          "Fetch API and AJAX",
          "CSS Frameworks (Bootstrap/Tailwind)",
          "Version Control with Git"
        ]
      },
      {
        phase: "Modern Frontend",
        duration: "4-5 months",
        topics: [
          "React.js Fundamentals",
          "Component Architecture",
          "State Management (Redux/Context)",
          "React Hooks",
          "React Router",
          "TypeScript with React",
          "Testing with Jest and RTL",
          "Build Tools (Webpack/Vite)"
        ]
      },
      {
        phase: "Backend Development",
        duration: "3-4 months",
        topics: [
          "Node.js and NPM",
          "Express.js Framework",
          "RESTful API Design",
          "Database Design (SQL/NoSQL)",
          "MongoDB and Mongoose",
          "Authentication and Authorization",
          "Server-side Validation",
          "Error Handling and Logging"
        ]
      },
      {
        phase: "Full Stack Integration",
        duration: "2-2 months",
        topics: [
          "Frontend-Backend Integration",
          "State Management at Scale",
          "GraphQL Implementation",
          "Real-time Features (WebSockets)",
          "Deployment and DevOps",
          "Performance Optimization",
          "Security Best Practices",
          "Full Stack Project Portfolio"
        ]
      }
    ],
    resources: [
      {
        type: "Frameworks",
        items: [
          { name: "React Documentation", url: "#" },
          { name: "Node.js Guides", url: "#" }
        ]
      }
    ],
    certifications: [
      { name: "Meta Front-End Developer", provider: "Meta", difficulty: "Intermediate", duration: "7 months" },
      { name: "AWS Certified Developer", provider: "Amazon", difficulty: "Professional", duration: "3 months" }
    ],
    careerPaths: [
      { title: "Full Stack Developer", salary: "$75,000 - $130,000", description: "Build complete web applications", skills: ["React", "Node.js", "MongoDB"] },
      { title: "Frontend Developer", salary: "$65,000 - $110,000", description: "Create user interfaces", skills: ["React", "JavaScript", "CSS"] }
    ]
  },
  "mobile-development": {
    title: "Mobile App Development",
    description: "Create native and cross-platform mobile applications for iOS and Android platforms.",
    duration: "10-14 months",
    level: "Intermediate",
    rating: 4.4,
    students: 16780,
    color: "from-indigo-500 to-purple-600",
    advancedSkills: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Mobile UI/UX", "App Store Optimization", "Push Notifications"],
    roadmap: [
      {
        phase: "Mobile Fundamentals",
        duration: "2-3 months",
        topics: [
          "Mobile Development Overview",
          "Native vs Cross-platform",
          "Mobile UI/UX Principles",
          "Platform Guidelines (iOS/Android)",
          "Mobile App Architecture",
          "Development Environment Setup",
          "Version Control for Mobile",
          "App Lifecycle Management"
        ]
      },
      {
        phase: "Cross-Platform Development",
        duration: "4-5 months",
        topics: [
          "React Native Fundamentals",
          "Navigation in Mobile Apps",
          "State Management (Redux/Context)",
          "Native Module Integration",
          "Platform-specific Code",
          "Flutter Framework",
          "Dart Programming Language",
          "Widget Architecture"
        ]
      },
      {
        phase: "Advanced Features",
        duration: "3-4 months",
        topics: [
          "Push Notifications",
          "Local Storage Solutions",
          "Camera and Media Integration",
          "GPS and Location Services",
          "Biometric Authentication",
          "Payment Integration",
          "Social Media Integration",
          "Offline Functionality"
        ]
      },
      {
        phase: "Deployment & Optimization",
        duration: "1-2 months",
        topics: [
          "App Store Guidelines",
          "iOS App Store Submission",
          "Google Play Store Submission",
          "App Performance Optimization",
          "Memory Management",
          "Battery Optimization",
          "App Analytics",
          "Continuous Integration/Deployment"
        ]
      }
    ],
    resources: [
      {
        type: "Platforms",
        items: [
          { name: "React Native", url: "#" },
          { name: "Flutter", url: "#" }
        ]
      }
    ],
    certifications: [
      { name: "Google Flutter Certified", provider: "Google", difficulty: "Intermediate", duration: "4 months" },
      { name: "React Native Certification", provider: "Meta", difficulty: "Intermediate", duration: "3 months" }
    ],
    careerPaths: [
      { title: "Mobile Developer", salary: "$70,000 - $125,000", description: "Build mobile applications", skills: ["React Native", "Flutter", "Mobile UI"] },
      { title: "iOS Developer", salary: "$80,000 - $140,000", description: "Develop iOS applications", skills: ["Swift", "iOS SDK", "Xcode"] }
    ]
  },
  "cloud-computing": {
    title: "Cloud Computing & DevOps",
    description: "Master cloud platforms, containerization, and DevOps practices for scalable application deployment.",
    duration: "14-18 months",
    level: "Advanced",
    rating: 4.7,
    students: 13450,
    color: "from-cyan-500 to-blue-600",
    advancedSkills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Microservices", "Monitoring", "Infrastructure as Code"],
    roadmap: [
      {
        phase: "Cloud Fundamentals",
        duration: "3-4 months",
        topics: [
          "Cloud Computing Concepts",
          "AWS Core Services",
          "Azure Fundamentals",
          "Google Cloud Platform",
          "Virtual Machines and Networking",
          "Storage Solutions",
          "Identity and Access Management",
          "Cloud Security Basics"
        ]
      },
      {
        phase: "Containerization",
        duration: "3-4 months",
        topics: [
          "Docker Fundamentals",
          "Container Images and Registries",
          "Docker Compose",
          "Kubernetes Architecture",
          "Pods, Services, and Deployments",
          "ConfigMaps and Secrets",
          "Ingress and Load Balancing",
          "Kubernetes Storage"
        ]
      },
      {
        phase: "Infrastructure as Code",
        duration: "4-5 months",
        topics: [
          "Terraform Fundamentals",
          "CloudFormation",
          "Ansible for Configuration",
          "Infrastructure Provisioning",
          "State Management",
          "Resource Dependencies",
          "Multi-environment Deployments",
          "Cost Optimization"
        ]
      },
      {
        phase: "DevOps & Monitoring",
        duration: "4-5 months",
        topics: [
          "CI/CD Pipeline Design",
          "Jenkins and GitHub Actions",
          "Automated Testing",
          "Deployment Strategies",
          "Monitoring and Logging",
          "Prometheus and Grafana",
          "Incident Response",
          "Site Reliability Engineering"
        ]
      }
    ],
    resources: [
      {
        type: "Certifications",
        items: [
          { name: "AWS Solutions Architect", url: "#" },
          { name: "Kubernetes Administrator", url: "#" }
        ]
      }
    ],
    certifications: [
      { name: "AWS Solutions Architect", provider: "Amazon", difficulty: "Professional", duration: "4 months" },
      { name: "Certified Kubernetes Administrator", provider: "CNCF", difficulty: "Advanced", duration: "3 months" }
    ],
    careerPaths: [
      { title: "Cloud Engineer", salary: "$90,000 - $150,000", description: "Manage cloud infrastructure", skills: ["AWS", "Docker", "Terraform"] },
      { title: "DevOps Engineer", salary: "$95,000 - $160,000", description: "Automate deployment processes", skills: ["CI/CD", "Kubernetes", "Monitoring"] }
    ]
  },
  "cybersecurity": {
    title: "Cybersecurity",
    description: "Protect digital assets and systems from cyber threats through security analysis and implementation.",
    duration: "15-20 months",
    level: "Advanced",
    rating: 4.8,
    students: 11250,
    color: "from-red-500 to-orange-600",
    advancedSkills: ["Penetration Testing", "Network Security", "Incident Response", "Malware Analysis", "Cryptography", "Risk Assessment", "Compliance", "Forensics"],
    roadmap: [
      {
        phase: "Security Fundamentals",
        duration: "4-5 months",
        topics: [
          "Information Security Principles",
          "Network Security Fundamentals",
          "Operating System Security",
          "Cryptography Basics",
          "Risk Assessment",
          "Security Policies and Procedures",
          "Compliance Frameworks",
          "Threat Modeling"
        ]
      },
      {
        phase: "Offensive Security",
        duration: "5-6 months",
        topics: [
          "Penetration Testing Methodology",
          "Vulnerability Assessment",
          "Web Application Security",
          "Network Penetration Testing",
          "Social Engineering",
          "Exploit Development",
          "Metasploit Framework",
          "Wireless Security"
        ]
      },
      {
        phase: "Defensive Security",
        duration: "3-4 months",
        topics: [
          "Incident Response Planning",
          "Security Monitoring",
          "SIEM Implementation",
          "Malware Analysis",
          "Digital Forensics",
          "Threat Intelligence",
          "Security Automation",
          "Endpoint Detection and Response"
        ]
      },
      {
        phase: "Advanced Security",
        duration: "3-5 months",
        topics: [
          "Advanced Persistent Threats",
          "Cloud Security",
          "IoT Security",
          "Mobile Security",
          "Blockchain Security",
          "AI/ML Security",
          "Security Architecture",
          "Cyber Threat Hunting"
        ]
      }
    ],
    resources: [
      {
        type: "Tools",
        items: [
          { name: "Kali Linux", url: "#" },
          { name: "Wireshark", url: "#" }
        ]
      }
    ],
    certifications: [
      { name: "CISSP", provider: "ISC2", difficulty: "Expert", duration: "12 months" },
      { name: "CEH", provider: "EC-Council", difficulty: "Intermediate", duration: "4 months" }
    ],
    careerPaths: [
      { title: "Security Analyst", salary: "$70,000 - $110,000", description: "Monitor and analyze security threats", skills: ["SIEM", "Incident Response", "Threat Analysis"] },
      { title: "Penetration Tester", salary: "$85,000 - $140,000", description: "Test systems for vulnerabilities", skills: ["Ethical Hacking", "Vulnerability Assessment", "Reporting"] }
    ]
  },
  "blockchain": {
    title: "Blockchain Development",
    description: "Build decentralized applications and smart contracts on various blockchain platforms.",
    duration: "12-16 months",
    level: "Advanced",
    rating: 4.3,
    students: 8750,
    color: "from-yellow-500 to-orange-600",
    advancedSkills: ["Solidity", "Ethereum", "Smart Contracts", "DeFi", "NFTs", "Web3.js", "Truffle", "Hardhat"],
    roadmap: [
      {
        phase: "Blockchain Fundamentals",
        duration: "3-4 months",
        topics: [
          "Blockchain Technology Overview",
          "Cryptocurrency Basics",
          "Distributed Ledger Technology",
          "Consensus Mechanisms",
          "Bitcoin and Cryptocurrency",
          "Hash Functions and Merkle Trees",
          "Digital Signatures",
          "Blockchain Use Cases"
        ]
      },
      {
        phase: "Ethereum Development",
        duration: "4-5 months",
        topics: [
          "Ethereum Architecture",
          "Solidity Programming",
          "Smart Contract Development",
          "Gas Optimization",
          "Testing Smart Contracts",
          "Truffle Framework",
          "Hardhat Development",
          "OpenZeppelin Libraries"
        ]
      },
      {
        phase: "DApp Development",
        duration: "3-4 months",
        topics: [
          "Web3.js and Ethers.js",
          "Frontend Integration",
          "MetaMask Integration",
          "IPFS for Storage",
          "DeFi Protocols",
          "NFT Development",
          "Token Standards (ERC-20, ERC-721)",
          "Decentralized Exchanges"
        ]
      },
      {
        phase: "Advanced Blockchain",
        duration: "2-3 months",
        topics: [
          "Layer 2 Solutions",
          "Cross-chain Development",
          "Governance Tokens",
          "Oracle Integration",
          "Security Best Practices",
          "Audit and Testing",
          "Deployment Strategies",
          "Blockchain Project Portfolio"
        ]
      }
    ],
    resources: [
      {
        type: "Platforms",
        items: [
          { name: "Ethereum", url: "#" },
          { name: "Polygon", url: "#" }
        ]
      }
    ],
    certifications: [
      { name: "Certified Blockchain Developer", provider: "Blockchain Council", difficulty: "Advanced", duration: "3 months" },
      { name: "Ethereum Developer", provider: "ConsenSys", difficulty: "Professional", duration: "4 months" }
    ],
    careerPaths: [
      { title: "Blockchain Developer", salary: "$90,000 - $160,000", description: "Build blockchain applications", skills: ["Solidity", "Web3", "Smart Contracts"] },
      { title: "DeFi Developer", salary: "$100,000 - $180,000", description: "Create DeFi protocols", skills: ["DeFi", "Yield Farming", "Liquidity Pools"] }
    ]
  },
  "computer-vision": {
    title: "Computer Vision",
    description: "Develop systems that can interpret and understand visual information from images and videos.",
    duration: "16-20 months",
    level: "Advanced",
    rating: 4.6,
    students: 9850,
    color: "from-teal-500 to-green-600",
    advancedSkills: ["OpenCV", "Deep Learning", "Image Processing", "Object Detection", "Face Recognition", "CNN", "YOLO", "TensorFlow"],
    roadmap: [
      {
        phase: "Image Processing Basics",
        duration: "4-5 months",
        topics: [
          "Digital Image Fundamentals",
          "Image Enhancement Techniques",
          "Filtering and Convolution",
          "Edge Detection",
          "Morphological Operations",
          "Color Space Transformations",
          "Histogram Processing",
          "OpenCV Library Basics"
        ]
      },
      {
        phase: "Feature Detection",
        duration: "4-5 months",
        topics: [
          "Feature Detection Algorithms",
          "Corner Detection (Harris, FAST)",
          "Blob Detection",
          "Scale-Invariant Features",
          "SIFT and SURF",
          "ORB Features",
          "Feature Matching",
          "Homography and Perspective"
        ]
      },
      {
        phase: "Machine Learning for CV",
        duration: "4-5 months",
        topics: [
          "Traditional ML for Vision",
          "Support Vector Machines",
          "Random Forests for Vision",
          "Principal Component Analysis",
          "Clustering for Segmentation",
          "Object Classification",
          "Template Matching",
          "Optical Character Recognition"
        ]
      },
      {
        phase: "Deep Learning Vision",
        duration: "4-5 months",
        topics: [
          "Convolutional Neural Networks",
          "CNN Architectures (LeNet, AlexNet, VGG)",
          "Object Detection (YOLO, R-CNN)",
          "Image Segmentation",
          "Face Recognition Systems",
          "Generative Models for Vision",
          "Transfer Learning",
          "Real-time Computer Vision"
        ]
      }
    ],
    resources: [
      {
        type: "Libraries",
        items: [
          { name: "OpenCV", url: "#" },
          { name: "TensorFlow Vision", url: "#" }
        ]
      }
    ],
    certifications: [
      { name: "Computer Vision Specialization", provider: "Coursera", difficulty: "Advanced", duration: "6 months" },
      { name: "Deep Learning for Computer Vision", provider: "Fast.ai", difficulty: "Advanced", duration: "4 months" }
    ],
    careerPaths: [
      { title: "Computer Vision Engineer", salary: "$95,000 - $170,000", description: "Develop vision systems", skills: ["OpenCV", "Deep Learning", "Python"] },
      { title: "AI Vision Researcher", salary: "$110,000 - $190,000", description: "Research new vision algorithms", skills: ["Research", "Publications", "Mathematics"] }
    ]
  },
  "natural-language-processing": {
    title: "Natural Language Processing",
    description: "Build systems that understand, interpret, and generate human language using AI and machine learning.",
    duration: "14-18 months",
    level: "Advanced",
    rating: 4.5,
    students: 7650,
    color: "from-pink-500 to-rose-600",
    advancedSkills: ["NLTK", "spaCy", "Transformers", "BERT", "GPT", "Text Mining", "Sentiment Analysis", "Chatbots"],
    roadmap: [
      {
        phase: "NLP Fundamentals",
        duration: "3-4 months",
        topics: [
          "Introduction to NLP",
          "Text Preprocessing",
          "Tokenization and Normalization",
          "Stop Words and Stemming",
          "Part-of-Speech Tagging",
          "Named Entity Recognition",
          "Regular Expressions",
          "NLTK and spaCy Libraries"
        ]
      },
      {
        phase: "Text Analysis",
        duration: "4-5 months",
        topics: [
          "Bag of Words Model",
          "TF-IDF Vectorization",
          "Word Embeddings (Word2Vec)",
          "GloVe Embeddings",
          "Sentiment Analysis",
          "Text Classification",
          "Topic Modeling (LDA)",
          "Document Similarity"
        ]
      },
      {
        phase: "Deep Learning for NLP",
        duration: "4-5 months",
        topics: [
          "Recurrent Neural Networks",
          "LSTM and GRU",
          "Sequence-to-Sequence Models",
          "Attention Mechanisms",
          "Transformer Architecture",
          "BERT and GPT Models",
          "Transfer Learning in NLP",
          "Fine-tuning Pre-trained Models"
        ]
      },
      {
        phase: "Advanced NLP Applications",
        duration: "3-4 months",
        topics: [
          "Question Answering Systems",
          "Chatbot Development",
          "Machine Translation",
          "Text Summarization",
          "Speech Recognition",
          "Language Generation",
          "Conversational AI",
          "NLP Project Portfolio"
        ]
      }
    ],
    resources: [
      {
        type: "Libraries",
        items: [
          { name: "Hugging Face Transformers", url: "#" },
          { name: "spaCy", url: "#" }
        ]
      }
    ],
    certifications: [
      { name: "NLP Specialization", provider: "DeepLearning.AI", difficulty: "Advanced", duration: "5 months" },
      { name: "Advanced NLP", provider: "Hugging Face", difficulty: "Professional", duration: "3 months" }
    ],
    careerPaths: [
      { title: "NLP Engineer", salary: "$100,000 - $175,000", description: "Build language processing systems", skills: ["Python", "Transformers", "Deep Learning"] },
      { title: "Conversational AI Developer", salary: "$95,000 - $165,000", description: "Create chatbots and voice assistants", skills: ["Chatbots", "Dialog Systems", "Voice AI"] }
    ]
  },
  "robotics": {
    title: "Robotics Engineering",
    description: "Design, build, and program robots for various applications including industrial automation and AI.",
    duration: "18-24 months",
    level: "Advanced",
    rating: 4.4,
    students: 6420,
    color: "from-purple-500 to-indigo-600",
    advancedSkills: ["ROS", "Robot Kinematics", "Control Systems", "Computer Vision", "Sensor Integration", "Path Planning", "SLAM", "Embedded Systems"],
    roadmap: [
      {
        phase: "Robotics Fundamentals",
        duration: "4-6 months",
        topics: [
          "Introduction to Robotics",
          "Robot Kinematics",
          "Forward and Inverse Kinematics",
          "Robot Dynamics",
          "Control Theory",
          "PID Controllers",
          "Sensors and Actuators",
          "Robot Operating System (ROS)"
        ]
      },
      {
        phase: "Robot Programming",
        duration: "5-6 months",
        topics: [
          "ROS Architecture",
          "ROS Nodes and Topics",
          "Robot Simulation (Gazebo)",
          "Python for Robotics",
          "C++ for Real-time Systems",
          "Embedded Programming",
          "Arduino and Raspberry Pi",
          "Motor Control and PWM"
        ]
      },
      {
        phase: "Perception and Navigation",
        duration: "5-6 months",
        topics: [
          "Computer Vision for Robots",
          "LIDAR and Camera Integration",
          "SLAM (Simultaneous Localization and Mapping)",
          "Path Planning Algorithms",
          "Obstacle Avoidance",
          "Localization Techniques",
          "Mapping and Navigation",
          "Multi-sensor Fusion"
        ]
      },
      {
        phase: "Advanced Robotics",
        duration: "4-6 months",
        topics: [
          "Machine Learning for Robotics",
          "Reinforcement Learning",
          "Human-Robot Interaction",
          "Swarm Robotics",
          "Autonomous Systems",
          "Industrial Automation",
          "Robot Safety and Ethics",
          "Robotics Project Development"
        ]
      }
    ],
    resources: [
      {
        type: "Platforms",
        items: [
          { name: "ROS (Robot Operating System)", url: "#" },
          { name: "Gazebo Simulator", url: "#" }
        ]
      }
    ],
    certifications: [
      { name: "ROS Developer", provider: "The Construct", difficulty: "Intermediate", duration: "4 months" },
      { name: "Robotics Specialization", provider: "Penn", difficulty: "Advanced", duration: "8 months" }
    ],
    careerPaths: [
      { title: "Robotics Engineer", salary: "$85,000 - $145,000", description: "Design and build robotic systems", skills: ["ROS", "Control Systems", "Programming"] },
      { title: "Automation Engineer", salary: "$75,000 - $125,000", description: "Automate industrial processes", skills: ["PLC", "Industrial Robots", "Process Control"] }
    ]
  },
  "quantum-computing": {
    title: "Quantum Computing",
    description: "Explore quantum algorithms, quantum programming, and the future of quantum information processing.",
    duration: "20-24 months",
    level: "Expert",
    rating: 4.2,
    students: 3850,
    color: "from-violet-500 to-purple-700",
    advancedSkills: ["Quantum Algorithms", "Qiskit", "Quantum Gates", "Quantum Entanglement", "Quantum Cryptography", "NISQ", "Quantum ML", "Quantum Simulation"],
    roadmap: [
      {
        phase: "Quantum Foundations",
        duration: "5-6 months",
        topics: [
          "Quantum Mechanics Basics",
          "Linear Algebra for Quantum",
          "Complex Numbers and Vectors",
          "Quantum States and Qubits",
          "Quantum Superposition",
          "Quantum Entanglement",
          "Quantum Measurement",
          "Quantum Information Theory"
        ]
      },
      {
        phase: "Quantum Programming",
        duration: "5-6 months",
        topics: [
          "Quantum Gates and Circuits",
          "Quantum Programming Languages",
          "Qiskit Framework",
          "Cirq and PennyLane",
          "Quantum Simulators",
          "Quantum Circuit Design",
          "Quantum Error Correction",
          "Quantum Hardware Platforms"
        ]
      },
      {
        phase: "Quantum Algorithms",
        duration: "5-6 months",
        topics: [
          "Shor's Algorithm",
          "Grover's Search Algorithm",
          "Quantum Fourier Transform",
          "Variational Quantum Eigensolver",
          "Quantum Approximate Optimization",
          "Quantum Machine Learning",
          "Quantum Simulation",
          "Quantum Cryptography"
        ]
      },
      {
        phase: "Advanced Quantum Computing",
        duration: "5-6 months",
        topics: [
          "NISQ Era Computing",
          "Quantum Advantage",
          "Quantum Error Mitigation",
          "Quantum Cloud Computing",
          "Quantum Hardware Design",
          "Quantum Applications",
          "Quantum Research Methods",
          "Quantum Computing Project"
        ]
      }
    ],
    resources: [
      {
        type: "Platforms",
        items: [
          { name: "IBM Quantum Experience", url: "#" },
          { name: "Qiskit Textbook", url: "#" }
        ]
      }
    ],
    certifications: [
      { name: "IBM Quantum Developer", provider: "IBM", difficulty: "Advanced", duration: "6 months" },
      { name: "Quantum Computing Fundamentals", provider: "Microsoft", difficulty: "Intermediate", duration: "4 months" }
    ],
    careerPaths: [
      { title: "Quantum Research Scientist", salary: "$120,000 - $200,000", description: "Research quantum algorithms", skills: ["Quantum Physics", "Mathematics", "Programming"] },
      { title: "Quantum Software Engineer", salary: "$110,000 - $180,000", description: "Develop quantum software", skills: ["Qiskit", "Quantum Programming", "Algorithms"] }
    ]
  },
  "game-development": {
    title: "Game Development",
    description: "Create engaging games using modern game engines, programming languages, and design principles.",
    duration: "12-18 months",
    level: "Intermediate",
    rating: 4.3,
    students: 14650,
    color: "from-red-500 to-pink-600",
    advancedSkills: ["Unity", "Unreal Engine", "C#", "C++", "Game Design", "3D Modeling", "Animation", "Multiplayer"],
    roadmap: [
      {
        phase: "Game Development Basics",
        duration: "3-4 months",
        topics: [
          "Game Development Overview",
          "Game Design Principles",
          "Game Engines Comparison",
          "Programming for Games",
          "Mathematics for Games",
          "Game Physics Basics",
          "Asset Management",
          "Version Control for Games"
        ]
      },
      {
        phase: "Unity Development",
        duration: "4-5 months",
        topics: [
          "Unity Interface and Workflow",
          "C# Programming for Unity",
          "GameObjects and Components",
          "Unity Physics System",
          "Animation and Timeline",
          "Unity UI System",
          "Audio Implementation",
          "2D and 3D Game Development"
        ]
      },
      {
        phase: "Advanced Game Systems",
        duration: "3-4 months",
        topics: [
          "Game State Management",
          "Save and Load Systems",
          "Inventory and Item Systems",
          "AI and Pathfinding",
          "Multiplayer Networking",
          "Performance Optimization",
          "Mobile Game Development",
          "Platform-specific Features"
        ]
      },
      {
        phase: "Game Polish & Release",
        duration: "2-5 months",
        topics: [
          "Game Testing and QA",
          "User Interface Design",
          "Game Balancing",
          "Monetization Strategies",
          "App Store Submission",
          "Marketing for Indies",
          "Post-launch Support",
          "Game Portfolio Development"
        ]
      }
    ],
    resources: [
      {
        type: "Engines",
        items: [
          { name: "Unity", url: "#" },
          { name: "Unreal Engine", url: "#" }
        ]
      }
    ],
    certifications: [
      { name: "Unity Certified Developer", provider: "Unity", difficulty: "Intermediate", duration: "3 months" },
      { name: "Unreal Engine Developer", provider: "Epic Games", difficulty: "Intermediate", duration: "4 months" }
    ],
    careerPaths: [
      { title: "Game Developer", salary: "$60,000 - $110,000", description: "Create games and interactive experiences", skills: ["Unity", "C#", "Game Design"] },
      { title: "Game Designer", salary: "$55,000 - $95,000", description: "Design game mechanics and experiences", skills: ["Game Design", "Prototyping", "User Experience"] }
    ]
  },
  "iot-development": {
    title: "Internet of Things (IoT)",
    description: "Build connected devices and IoT systems that communicate and share data across networks.",
    duration: "14-18 months",
    level: "Advanced",
    rating: 4.4,
    students: 8950,
    color: "from-emerald-500 to-teal-600",
    advancedSkills: ["Arduino", "Raspberry Pi", "Embedded C", "MQTT", "LoRaWAN", "Edge Computing", "IoT Security", "Cloud Integration"],
    roadmap: [
      {
        phase: "IoT Fundamentals",
        duration: "3-4 months",
        topics: [
          "Introduction to IoT",
          "IoT Architecture",
          "Embedded Systems Basics",
          "Microcontrollers vs Microprocessors",
          "Sensors and Actuators",
          "Communication Protocols",
          "Power Management",
          "IoT Use Cases and Applications"
        ]
      },
      {
        phase: "Hardware Programming",
        duration: "4-5 months",
        topics: [
          "Arduino Programming",
          "Raspberry Pi Development",
          "ESP32 and ESP8266",
          "Embedded C Programming",
          "GPIO and Peripheral Control",
          "Analog and Digital Interfaces",
          "Real-time Operating Systems",
          "Hardware Debugging"
        ]
      },
      {
        phase: "Connectivity & Communication",
        duration: "4-5 months",
        topics: [
          "WiFi and Bluetooth",
          "LoRaWAN and SigFox",
          "Cellular IoT (NB-IoT, LTE-M)",
          "MQTT Protocol",
          "CoAP and HTTP",
          "WebSocket Communication",
          "Edge Computing",
          "Gateway Development"
        ]
      },
      {
        phase: "IoT Systems & Security",
        duration: "3-4 months",
        topics: [
          "Cloud Integration (AWS IoT, Azure IoT)",
          "Data Analytics for IoT",
          "Device Management",
          "OTA Updates",
          "IoT Security Best Practices",
          "Encryption and Authentication",
          "Industrial IoT (IIoT)",
          "IoT Project Development"
        ]
      }
    ],
    resources: [
      {
        type: "Platforms",
        items: [
          { name: "Arduino IDE", url: "#" },
          { name: "AWS IoT Core", url: "#" }
        ]
      }
    ],
    certifications: [
      { name: "AWS IoT Specialty", provider: "Amazon", difficulty: "Professional", duration: "4 months" },
      { name: "IoT Developer", provider: "Microsoft", difficulty: "Intermediate", duration: "3 months" }
    ],
    careerPaths: [
      { title: "IoT Developer", salary: "$75,000 - $125,000", description: "Build IoT solutions", skills: ["Embedded Systems", "Cloud", "Networking"] },
      { title: "IoT Architect", salary: "$95,000 - $155,000", description: "Design IoT system architecture", skills: ["System Design", "Security", "Scalability"] }
    ]
  },
  "ar-vr-development": {
    title: "AR/VR Development",
    description: "Create immersive augmented and virtual reality experiences using cutting-edge technologies.",
    duration: "12-16 months",
    level: "Advanced",
    rating: 4.2,
    students: 7250,
    color: "from-fuchsia-500 to-violet-600",
    advancedSkills: ["Unity AR/VR", "Unreal Engine VR", "ARKit", "ARCore", "Oculus SDK", "3D Modeling", "Spatial Computing", "Hand Tracking"],
    roadmap: [
      {
        phase: "3D Fundamentals",
        duration: "3-4 months",
        topics: [
          "3D Mathematics and Geometry",
          "3D Coordinate Systems",
          "Vectors and Matrices",
          "3D Transformations",
          "3D Modeling Basics",
          "Texturing and Materials",
          "Lighting and Shading",
          "3D Animation Principles"
        ]
      },
      {
        phase: "VR Development",
        duration: "4-5 months",
        topics: [
          "VR Technology Overview",
          "Unity VR Development",
          "Oculus SDK Integration",
          "SteamVR Development",
          "VR Interaction Design",
          "Hand Tracking and Controllers",
          "Locomotion in VR",
          "VR User Experience Design"
        ]
      },
      {
        phase: "AR Development",
        duration: "3-4 months",
        topics: [
          "AR Technology Overview",
          "ARKit for iOS",
          "ARCore for Android",
          "Unity AR Foundation",
          "Marker-based AR",
          "Markerless AR Tracking",
          "Object Recognition",
          "AR User Interface Design"
        ]
      },
      {
        phase: "Advanced AR/VR",
        duration: "2-3 months",
        topics: [
          "Mixed Reality Development",
          "WebXR Development",
          "Spatial Computing",
          "Multi-user AR/VR",
          "Performance Optimization",
          "Platform Deployment",
          "AR/VR Analytics",
          "Immersive Project Portfolio"
        ]
      }
    ],
    resources: [
      {
        type: "SDKs",
        items: [
          { name: "Unity XR Toolkit", url: "#" },
          { name: "Oculus SDK", url: "#" }
        ]
      }
    ],
    certifications: [
      { name: "Unity XR Developer", provider: "Unity", difficulty: "Advanced", duration: "4 months" },
      { name: "Meta AR/VR Developer", provider: "Meta", difficulty: "Intermediate", duration: "3 months" }
    ],
    careerPaths: [
      { title: "AR/VR Developer", salary: "$80,000 - $140,000", description: "Create immersive experiences", skills: ["Unity", "3D Programming", "UX Design"] },
      { title: "XR Designer", salary: "$70,000 - $120,000", description: "Design immersive user experiences", skills: ["3D Design", "User Experience", "Prototyping"] }
    ]
  },
  "big-data-analytics": {
    title: "Big Data Analytics",
    description: "Process and analyze large datasets using distributed computing frameworks and advanced analytics.",
    duration: "14-18 months",
    level: "Advanced",
    rating: 4.5,
    students: 10850,
    color: "from-amber-500 to-orange-600",
    advancedSkills: ["Apache Spark", "Hadoop", "Kafka", "Scala", "Python", "SQL", "NoSQL", "Data Warehousing"],
    roadmap: [
      {
        phase: "Big Data Fundamentals",
        duration: "3-4 months",
        topics: [
          "Big Data Concepts",
          "Distributed Systems",
          "CAP Theorem",
          "Data Storage Solutions",
          "SQL vs NoSQL",
          "Data Formats (JSON, Parquet, Avro)",
          "Data Ingestion Patterns",
          "Batch vs Stream Processing"
        ]
      },
      {
        phase: "Hadoop Ecosystem",
        duration: "4-5 months",
        topics: [
          "Hadoop Architecture",
          "HDFS (Hadoop Distributed File System)",
          "MapReduce Programming",
          "Apache Hive",
          "Apache Pig",
          "HBase Database",
          "Apache Sqoop",
          "Hadoop Cluster Management"
        ]
      },
      {
        phase: "Apache Spark",
        duration: "4-5 months",
        topics: [
          "Spark Architecture",
          "Spark Core and RDDs",
          "Spark SQL",
          "Spark Streaming",
          "MLlib (Machine Learning)",
          "GraphX (Graph Processing)",
          "Spark Performance Tuning",
          "Scala Programming for Spark"
        ]
      },
      {
        phase: "Advanced Analytics",
        duration: "3-4 months",
        topics: [
          "Apache Kafka",
          "Real-time Analytics",
          "Data Lakes and Warehouses",
          "Apache Airflow",
          "Elasticsearch",
          "Cloud Big Data Services",
          "Data Pipeline Design",
          "Big Data Project Portfolio"
        ]
      }
    ],
    resources: [
      {
        type: "Platforms",
        items: [
          { name: "Apache Spark", url: "#" },
          { name: "Hadoop", url: "#" }
        ]
      }
    ],
    certifications: [
      { name: "Cloudera Data Engineer", provider: "Cloudera", difficulty: "Professional", duration: "4 months" },
      { name: "Spark Developer", provider: "Databricks", difficulty: "Intermediate", duration: "3 months" }
    ],
    careerPaths: [
      { title: "Big Data Engineer", salary: "$95,000 - $155,000", description: "Build data processing systems", skills: ["Spark", "Hadoop", "Python"] },
      { title: "Data Architect", salary: "$110,000 - $175,000", description: "Design data infrastructure", skills: ["System Design", "Data Modeling", "Architecture"] }
    ]
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    description: "Create intuitive and beautiful user interfaces and experiences for digital products.",
    duration: "8-12 months",
    level: "Beginner",
    rating: 4.4,
    students: 19750,
    color: "from-rose-500 to-pink-600",
    advancedSkills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research", "Wireframing", "Design Systems", "Usability Testing"],
    roadmap: [
      {
        phase: "Design Fundamentals",
        duration: "2-3 months",
        topics: [
          "Design Principles",
          "Color Theory",
          "Typography",
          "Layout and Composition",
          "Visual Hierarchy",
          "Design Psychology",
          "Accessibility in Design",
          "Design History and Trends"
        ]
      },
      {
        phase: "UI Design",
        duration: "3-4 months",
        topics: [
          "Interface Design Principles",
          "Wireframing Techniques",
          "Visual Design",
          "Icon Design",
          "Button and Form Design",
          "Navigation Design",
          "Responsive Design",
          "Design Tools (Figma, Adobe XD)"
        ]
      },
      {
        phase: "UX Design",
        duration: "2-3 months",
        topics: [
          "User Research Methods",
          "User Personas",
          "User Journey Mapping",
          "Information Architecture",
          "Interaction Design",
          "Prototyping",
          "Usability Testing",
          "A/B Testing"
        ]
      },
      {
        phase: "Advanced Design",
        duration: "1-2 months",
        topics: [
          "Design Systems",
          "Component Libraries",
          "Design Handoff",
          "Design Collaboration",
          "Motion Design",
          "Mobile App Design",
          "Web Design Best Practices",
          "Design Portfolio Development"
        ]
      }
    ],
    resources: [
      {
        type: "Tools",
        items: [
          { name: "Figma", url: "#" },
          { name: "Adobe Creative Suite", url: "#" }
        ]
      }
    ],
    certifications: [
      { name: "Google UX Design", provider: "Google", difficulty: "Beginner", duration: "6 months" },
      { name: "Adobe Certified Expert", provider: "Adobe", difficulty: "Intermediate", duration: "3 months" }
    ],
    careerPaths: [
      { title: "UI Designer", salary: "$55,000 - $95,000", description: "Design user interfaces", skills: ["Figma", "Visual Design", "Prototyping"] },
      { title: "UX Designer", salary: "$65,000 - $110,000", description: "Research and design user experiences", skills: ["User Research", "Wireframing", "Testing"] }
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description: "Master online marketing strategies, analytics, and tools to grow businesses in the digital age.",
    duration: "6-10 months",
    level: "Beginner",
    rating: 4.2,
    students: 25650,
    color: "from-sky-500 to-blue-600",
    advancedSkills: ["SEO", "SEM", "Social Media Marketing", "Content Marketing", "Email Marketing", "Analytics", "PPC", "Conversion Optimization"],
    roadmap: [
      {
        phase: "Marketing Fundamentals",
        duration: "2-3 months",
        topics: [
          "Digital Marketing Overview",
          "Marketing Strategy",
          "Customer Personas",
          "Customer Journey",
          "Brand Building",
          "Marketing Channels",
          "KPIs and Metrics",
          "Marketing Psychology"
        ]
      },
      {
        phase: "Search Marketing",
        duration: "2-3 months",
        topics: [
          "Search Engine Optimization (SEO)",
          "Keyword Research",
          "On-page SEO",
          "Off-page SEO",
          "Technical SEO",
          "Google Ads (PPC)",
          "Search Engine Marketing (SEM)",
          "Local SEO"
        ]
      },
      {
        phase: "Content & Social Media",
        duration: "1-2 months",
        topics: [
          "Content Marketing Strategy",
          "Content Creation",
          "Social Media Marketing",
          "Facebook and Instagram Ads",
          "LinkedIn Marketing",
          "Twitter Marketing",
          "YouTube Marketing",
          "Influencer Marketing"
        ]
      },
      {
        phase: "Analytics & Optimization",
        duration: "1-2 months",
        topics: [
          "Google Analytics",
          "Web Analytics",
          "Conversion Rate Optimization",
          "A/B Testing",
          "Email Marketing",
          "Marketing Automation",
          "Attribution Modeling",
          "Marketing Campaign Analysis"
        ]
      }
    ],
    resources: [
      {
        type: "Platforms",
        items: [
          { name: "Google Analytics", url: "#" },
          { name: "Google Ads", url: "#" }
        ]
      }
    ],
    certifications: [
      { name: "Google Ads Certification", provider: "Google", difficulty: "Intermediate", duration: "2 months" },
      { name: "Facebook Blueprint", provider: "Meta", difficulty: "Intermediate", duration: "2 months" }
    ],
    careerPaths: [
      { title: "Digital Marketing Specialist", salary: "$45,000 - $75,000", description: "Execute digital marketing campaigns", skills: ["SEO", "PPC", "Analytics"] },
      { title: "Marketing Manager", salary: "$60,000 - $100,000", description: "Lead marketing strategy", skills: ["Strategy", "Team Management", "ROI Analysis"] }
    ]
  },
  "business-analytics": {
    title: "Business Analytics",
    description: "Use data analysis and statistical methods to drive business decisions and strategy.",
    duration: "10-14 months",
    level: "Intermediate",
    rating: 4.3,
    students: 14250,
    color: "from-teal-500 to-cyan-600",
    advancedSkills: ["Excel", "SQL", "Tableau", "Power BI", "Python", "R", "Statistical Analysis", "Business Intelligence"],
    roadmap: [
      {
        phase: "Analytics Fundamentals",
        duration: "3-4 months",
        topics: [
          "Business Analytics Overview",
          "Data Types and Sources",
          "Descriptive Analytics",
          "Diagnostic Analytics",
          "Predictive Analytics",
          "Prescriptive Analytics",
          "KPIs and Metrics",
          "Excel for Analytics"
        ]
      },
      {
        phase: "Data Analysis Tools",
        duration: "3-4 months",
        topics: [
          "SQL for Business Analysis",
          "Advanced Excel Techniques",
          "Power BI Fundamentals",
          "Tableau Basics",
          "Data Visualization Principles",
          "Dashboard Design",
          "Statistical Analysis",
          "Regression Analysis"
        ]
      },
      {
        phase: "Advanced Analytics",
        duration: "2-3 months",
        topics: [
          "Python for Business Analytics",
          "R Programming",
          "Time Series Analysis",
          "Customer Segmentation",
          "Market Basket Analysis",
          "Cohort Analysis",
          "Forecasting Methods",
          "A/B Testing for Business"
        ]
      },
      {
        phase: "Business Intelligence",
        duration: "2-3 months",
        topics: [
          "Data Warehousing Concepts",
          "ETL Processes",
          "Business Intelligence Architecture",
          "Report Automation",
          "Self-service Analytics",
          "Data Governance",
          "Performance Management",
          "Analytics Project Portfolio"
        ]
      }
    ],
    resources: [
      {
        type: "Tools",
        items: [
          { name: "Power BI", url: "#" },
          { name: "Tableau", url: "#" }
        ]
      }
    ],
    certifications: [
      { name: "Microsoft Power BI", provider: "Microsoft", difficulty: "Intermediate", duration: "3 months" },
      { name: "Tableau Desktop Specialist", provider: "Tableau", difficulty: "Intermediate", duration: "2 months" }
    ],
    careerPaths: [
      { title: "Business Analyst", salary: "$60,000 - $95,000", description: "Analyze business data and processes", skills: ["SQL", "Excel", "Business Intelligence"] },
      { title: "Data Analyst", salary: "$55,000 - $85,000", description: "Extract insights from data", skills: ["Statistics", "Visualization", "Reporting"] }
    ]
  },
  "product-management": {
    title: "Product Management",
    description: "Learn to manage product lifecycle, strategy, and development in tech companies.",
    duration: "8-12 months",
    level: "Intermediate",
    rating: 4.1,
    students: 11450,
    color: "from-emerald-500 to-green-600",
    advancedSkills: ["Product Strategy", "User Research", "Agile", "Roadmapping", "Analytics", "A/B Testing", "Stakeholder Management", "Go-to-Market"],
    roadmap: [
      {
        phase: "Product Fundamentals",
        duration: "2-3 months",
        topics: [
          "Product Management Overview",
          "Product Lifecycle",
          "Product Strategy",
          "Market Research",
          "Competitive Analysis",
          "Product-Market Fit",
          "Value Proposition",
          "Product Metrics"
        ]
      },
      {
        phase: "User Research & Design",
        duration: "2-3 months",
        topics: [
          "User Research Methods",
          "Customer Interviews",
          "User Personas",
          "Jobs-to-be-Done Framework",
          "User Story Writing",
          "Wireframing and Prototyping",
          "Design Thinking",
          "Usability Testing"
        ]
      },
      {
        phase: "Product Development",
        duration: "2-3 months",
        topics: [
          "Agile and Scrum",
          "Product Roadmapping",
          "Feature Prioritization",
          "Sprint Planning",
          "Cross-functional Collaboration",
          "Technical Requirements",
          "Quality Assurance",
          "Release Management"
        ]
      },
      {
        phase: "Product Growth",
        duration: "2-3 months",
        topics: [
          "Product Analytics",
          "A/B Testing",
          "Growth Hacking",
          "Go-to-Market Strategy",
          "Product Marketing",
          "Customer Success",
          "Stakeholder Management",
          "Product Portfolio Management"
        ]
      }
    ],
    resources: [
      {
        type: "Frameworks",
        items: [
          { name: "Product Management Tools", url: "#" },
          { name: "Analytics Platforms", url: "#" }
        ]
      }
    ],
    certifications: [
      { name: "Certified Scrum Product Owner", provider: "Scrum Alliance", difficulty: "Intermediate", duration: "1 month" },
      { name: "Product Management Certificate", provider: "UC Berkeley", difficulty: "Advanced", duration: "4 months" }
    ],
    careerPaths: [
      { title: "Product Manager", salary: "$90,000 - $150,000", description: "Manage product strategy and development", skills: ["Strategy", "Analytics", "Leadership"] },
      { title: "Senior Product Manager", salary: "$120,000 - $200,000", description: "Lead complex product initiatives", skills: ["Advanced Strategy", "Team Leadership", "Business Impact"] }
    ]
  },
  "devops-engineering": {
    title: "DevOps Engineering",
    description: "Bridge development and operations through automation, CI/CD, and infrastructure management.",
    duration: "12-16 months",
    level: "Advanced",
    rating: 4.6,
    students: 12350,
    color: "from-violet-500 to-purple-600",
    advancedSkills: ["CI/CD", "Docker", "Kubernetes", "Terraform", "Jenkins", "Monitoring", "Linux", "Scripting"],
    roadmap: [
      {
        phase: "DevOps Fundamentals",
        duration: "3-4 months",
        topics: [
          "DevOps Culture and Practices",
          "Linux Administration",
          "Shell Scripting (Bash)",
          "Version Control (Git)",
          "Networking Basics",
          "System Administration",
          "Security Fundamentals",
          "Agile and Lean Practices"
        ]
      },
      {
        phase: "CI/CD & Automation",
        duration: "3-4 months",
        topics: [
          "Continuous Integration",
          "Continuous Deployment",
          "Jenkins Pipeline",
          "GitHub Actions",
          "GitLab CI/CD",
          "Build Automation",
          "Testing Automation",
          "Deployment Strategies"
        ]
      },
      {
        phase: "Containerization",
        duration: "3-4 months",
        topics: [
          "Docker Fundamentals",
          "Container Orchestration",
          "Kubernetes Architecture",
          "Kubernetes Deployments",
          "Service Mesh",
          "Container Security",
          "Docker Registry",
          "Microservices Architecture"
        ]
      },
      {
        phase: "Infrastructure & Monitoring",
        duration: "3-4 months",
        topics: [
          "Infrastructure as Code",
          "Terraform",
          "Ansible",
          "Cloud Platforms",
          "Monitoring and Logging",
          "Prometheus and Grafana",
          "Incident Management",
          "Site Reliability Engineering"
        ]
      }
    ],
    resources: [
      {
        type: "Tools",
        items: [
          { name: "Jenkins", url: "#" },
          { name: "Docker", url: "#" }
        ]
      }
    ],
    certifications: [
      { name: "AWS DevOps Engineer", provider: "Amazon", difficulty: "Professional", duration: "4 months" },
      { name: "Kubernetes Administrator", provider: "CNCF", difficulty: "Advanced", duration: "3 months" }
    ],
    careerPaths: [
      { title: "DevOps Engineer", salary: "$95,000 - $160,000", description: "Automate development and deployment", skills: ["CI/CD", "Docker", "Kubernetes"] },
      { title: "Site Reliability Engineer", salary: "$110,000 - $180,000", description: "Ensure system reliability and performance", skills: ["SRE", "Monitoring", "Incident Response"] }
    ]
  },
  "software-architecture": {
    title: "Software Architecture",
    description: "Design scalable, maintainable software systems and lead technical architecture decisions.",
    duration: "16-20 months",
    level: "Expert",
    rating: 4.7,
    students: 6850,
    color: "from-indigo-500 to-blue-700",
    advancedSkills: ["System Design", "Microservices", "Design Patterns", "Scalability", "Performance", "Security Architecture", "Domain-Driven Design", "API Design"],
    roadmap: [
      {
        phase: "Architecture Fundamentals",
        duration: "4-5 months",
        topics: [
          "Software Architecture Principles",
          "Architectural Patterns",
          "Design Patterns",
          "SOLID Principles",
          "Clean Architecture",
          "Domain-Driven Design",
          "Event-Driven Architecture",
          "API Design Principles"
        ]
      },
      {
        phase: "System Design",
        duration: "4-5 months",
        topics: [
          "Scalability Patterns",
          "Load Balancing",
          "Database Design",
          "Caching Strategies",
          "Message Queues",
          "Microservices Architecture",
          "Service Discovery",
          "Circuit Breaker Pattern"
        ]
      },
      {
        phase: "Advanced Architecture",
        duration: "4-5 months",
        topics: [
          "Distributed Systems",
          "CAP Theorem",
          "Eventual Consistency",
          "Saga Pattern",
          "CQRS and Event Sourcing",
          "Security Architecture",
          "Performance Optimization",
          "Monitoring and Observability"
        ]
      },
      {
        phase: "Architecture Leadership",
        duration: "4-5 months",
        topics: [
          "Architecture Decision Records",
          "Technical Leadership",
          "Architecture Reviews",
          "Technology Strategy",
          "Risk Assessment",
          "Legacy System Modernization",
          "Team Architecture",
          "Architecture Portfolio"
        ]
      }
    ],
    resources: [
      {
        type: "Books",
        items: [
          { name: "Clean Architecture", url: "#" },
          { name: "Building Microservices", url: "#" }
        ]
      }
    ],
    certifications: [
      { name: "AWS Solutions Architect Professional", provider: "Amazon", difficulty: "Expert", duration: "6 months" },
      { name: "TOGAF Certification", provider: "The Open Group", difficulty: "Advanced", duration: "4 months" }
    ],
    careerPaths: [
      { title: "Software Architect", salary: "$130,000 - $220,000", description: "Design software architecture", skills: ["System Design", "Technical Leadership", "Architecture Patterns"] },
      { title: "Principal Engineer", salary: "$150,000 - $250,000", description: "Lead technical strategy", skills: ["Technical Strategy", "Mentoring", "Innovation"] }
    ]
  }
};
