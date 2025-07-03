// Charlie Carpenter Portfolio - Dynamic Content Loader
// This script loads content from embedded data and creates interactive elements

class PortfolioApp {
  constructor() {
    this.portfolioData = this.getPortfolioData();
    this.currentFilter = 'all';
    this.init();
  }

  async init() {
    try {
      this.setupEventListeners();
      this.renderContent();
      this.setupAnimations();
      this.setupModals();
      this.setupImageZoom();
      this.setupInteractiveElements();
      this.hideLoadingScreen();
    } catch (error) {
      console.error('Failed to initialize portfolio:', error);
      this.showError();
    }
  }

  getPortfolioData() {
    // Embedded portfolio data - automatically synced from content.json
    return {
      "professional_summary": {
        "text": "Hi there! I'm Charlie Carpenter, I have a First-Class Honours Degree in Computer Science from Durham University, where I received the Individual Project Prize for the highest-graded dissertation. I am now currently working towards an MSc in Signal Processing and Machine Learning from Singapore's Nanyang Technological University. I bring both technical expertise and a drive for impactful solutions. My projects span blockchain-based ticketing systems, augmented reality tools, and machine learning applications, each designed to address real-world challenges through innovative technology.",
        "tags": ["MSc","Signal Processing","Machine Learning","Blockchain","AR","ML Applications"]
      },
      "experience": [
        {
          "role": "AI & Data Systems Engineer",
          "company": "In-house AI Vending Operations",
          "dates": "2024",
          "tags": ["Electron","AWS","OpenAI API","Analytics","Scalable Systems"],
          "summary": "Built and deployed a cross-platform Electron app with integrated OpenAI API to automate analytics and streamline vending machine operations.",
          "description": "Proposed, built, and deployed a cross-platform Electron app used across staff machines to streamline vending machine operations. Worked closely with stakeholders from different departments to design a scalable system with secure authentication and backend services hosted on AWS. Integrated the OpenAI API to power a custom in-house AI assistant capable of generating dynamic graphs, writing tailored reports, and supporting smart product decisions. The system automated key analytics tasks, improved visibility into sales and stock data, and enabled teams to make faster, more informed decisions."
        },
        {
          "role": "Cyber Security Analyst",
          "company": "St. James's Place",
          "dates": "2024",
          "tags": ["BitSight","Risk Management","Compliance","Cyber Essentials Plus"],
          "summary": "Enhanced risk oversight and managed CE+ compliance for thousands of partners, improving board-level cybersecurity visibility.",
          "description": "Enhanced third-party risk oversight by optimising BitSight's cybersecurity risk management tool, improving board-level visibility of security ratings. Managed Cyber Essentials Plus (CE+) compliance for 4,500+ partners, coordinating risk assessments and ensuring certifications remained up to date."
        },
        {
          "role": "Software Engineer Internship",
          "company": "1 Play Sports",
          "dates": "2023",
          "tags": ["GitHub","Bug Reporting","Technical Proposals","Global Deployment"],
          "summary": "Collaborated on enhancing user engagement for a major sporting event, reporting critical bugs and authoring a technical proposal.",
          "description": "Collaborated on projects enhancing online user engagement for a major sporting world cup, identifying critical GitHub bugs that enabled global deployment. Authored a detailed technical product proposal, translating complex technical concepts into actionable insights for clients."
        },
        {
          "role": "Event Management",
          "company": "Durham St Mary's College",
          "dates": "2022-2023",
          "tags": ["Event Planning","Budget Management","Payment Systems","Revenue Growth"],
          "summary": "Organised large-scale college events, implemented PayPal system, and significantly boosted satisfaction and revenue.",
          "description": "Organised 25+ events for 600+ paying guests, managing a £150k+ budget and supplier coordination. Increased user satisfaction by 85% and revenue by 40%. Implemented an online PayPal card payment system, cutting admin time by 75%."
        }
      ],
      "education": [
        {
          "degree": "MSc In Machine Learning & Signal Processing",
          "institution": "Nanyang Technological University",
          "dates": "Jan - Dec 2025",
          "tags": ["Artificial Intelligence","Data mining","Genetic Algorithms","Machine Vision","Computer Vision"],
          "summary": "Studying advanced AI and machine vision topics at a globally ranked engineering school.",
          "description": "Studying within the globally ranked School of Electrical and Electronic Engineering. Subjects: Artificial Intelligence & Data mining, Genetic Algorithms & Machine learning, Machine Vision, Computer Vision. Projects: Semantic Stock Prediction and Portfolio Optimisation Software"
        },
        {
          "degree": "BSc Computer Science (Hons)",
          "institution": "Durham University",
          "dates": "2021-2024",
          "tags": ["First-Class Honours","Blockchain","Computer Vision","VR/AR","Machine Learning"],
          "summary": "Achieved top-class results with a focus on practical and project-based modules.",
          "description": "1st Class Classification (75%). Final Year (80%) - Project Management (91%), Final Academic Project on blockchain decentralised applications (87%), Computer Vision (86%), Virtual and Augmented Reality (86%), Human-AI Design (78%), Reinforcement Learning (72%), Recommend Systems (72%), Multimedia and Game Development (68%), Deep Learning (61%). Penultimate Year - Programming Paradigms, Theory of Computation, Networks and Systems, Artificial Intelligence, Data Science, Software Engineering. First Year - Open Source Project Programming, Computational Thinking, Algorithms and Data Structures, Computer Systems, Mathematics for Computer Science, Introduction to Astronomy."
        },
        {
          "degree": "A Level",
          "institution": "Gresham's School",
          "dates": "2019-2021",
          "tags": ["Computer Science A*","Physics A","Mathematics A","Leadership"],
          "summary": "Excelled academically and led major school initiatives on mental health and wellbeing.",
          "description": "Computer Science - A*, Physics - A, Mathematics - A. As part of my schools Head team of my I led presentations on important topics such as mental health, race, and bullying to audiences of over 600 people. Through weekly meetings, I actively contributed to improving students' wellbeing. Working closely with a dedicated team of 14 individuals, we effectively raised awareness and fostered a supportive school environment. During my Computer Science coursework, I collaborated with a local pub to develop an online food and drink ordering system. Utilising Flask for the backend and Bootstrap for the frontend, this system enabled the pub to continue its operations seamlessly throughout the COVID-19 pandemic."
        }
      ],
      "activities_and_societies": [
        {"name": "Lacrosse"},
        {"name": "Running"},
        {"name": "Finance committee"},
        {"name": "Scuba Diving"},
        {"name": "Badminton"},
        {"name": "Comp Soc"},
        {"name": "Hackathons"},
        {"name": "Durham University Charity Committee"}
      ],
      "technical_developments": [
        {
          "title": "Semantic Stock Prediction and Portfolio Optimisation Software",
          "tags": ["BERT","Sentiment Analysis","Reinforcement Learning","Portfolio Optimisation"],
          "description": "Developed a software platform integrating BERT-based sentiment analysis with machine learning models for stock prediction, comparing traditional methods with semantic-aware approaches. Designed a reinforcement learning-driven portfolio optimisation module to maximise returns while minimising risk."
        },
        {
          "title": "AR Handwriting Spellchecker with AI Powered Optical Character Recognition",
          "tags": ["AR","OCR","Accessibility","C#","OpenCV"],
          "description": "Built an augmented reality tool for real-time spell checking and translation, achieving 98% accuracy to assist individuals with dyslexia. Winner of Durham Hackathon 2023 and 3D Technology & AI Assistant categories, competing against 500+ participants."
        },
        {
          "title": "Efficient Image Classification with MobileNet (CIFAR-100)",
          "tags": ["CNN","MobileNet","Data Augmentation","Low-Memory Environments"],
          "description": "Engineered an ultra-efficient MobileNet-based CNN with just 102,916 parameters, optimising for low-memory environments while maintaining strong performance. Achieved an impressive 60% accuracy on CIFAR-100's 100 classes using depth-wise separable convolutions, regularisation, and extensive data augmentation."
        }
      ],
      "projects": [
        {
          "title": "Blockchain Based Ticketing Application",
          "tags": ["NFT","Smart Contracts","Solidity","Ethereum","Polygon"],
          "description": "Designed an NFT-powered ticketing platform with smart contracts to eliminate fraud and scalping while enabling dynamic pricing. Built a full-stack dApp with real-time updates using Solidity, Ethereum, Polygon, and Hardhat."
        },
        {
          "title": "Deep Learning Based Adaptive Film Recommended System",
          "tags": ["PyTorch","Recommendation Systems","Collaborative Filtering","Content-Based Filtering"],
          "description": "Built a hybrid recommendation model combining collaborative and content-based filtering, leveraging a CNN in PyTorch for dynamic updates. Achieved strong performance with an RMSE of 0.68 and a novelty score of 3.2 on a 100K+ film dataset."
        },
        {
          "title": "VR Rendering System with Custom Physics Engine",
          "tags": ["VR","Physics Engine","LoD","IMU"],
          "description": "Built a precise motion tracking system using IMU data, integrating a physics engine with collision detection, gravity, and air resistance. Optimized rendering with a Level of Detail (LoD) system, improving efficiency by 32% while maintaining visual fidelity."
        },
        {
          "title": "Smart Meal Planner and Food Waste Management System",
          "tags": ["Python","Flask","SQLite","Food Waste Management"],
          "description": "As a finalist in the Durham university hackathon, I contributed significantly to the development of a this food waste management system. This innovative application allows users to input their ingredients and receive tailored recipe recommendations, prioritising items that are closest to their expiration dates to effectively minimise food waste. The system also suggests sustainable alternatives, such as donation options for unused items, thereby promoting ethical eating habits."
        },
        {
          "title": "Bitcoin Autotrader",
          "tags": ["Python","Coinbase Pro","Trading Algorithms","Tkinter"],
          "description": "My Bitcoin auto trader is a sophisticated, Python-based application designed to optimise your cryptocurrency trading on Coinbase Pro. Utilising the Coinbase API, it employs advanced trading strategies, including dynamic moving stop losses, to minimise losses and maximise profits."
        },
        {
          "title": "Unity Adventure Game based in Durham",
          "tags": ["Unity","C#","RPG","Educational Games"],
          "description": "D U Delivery is an immersive RPG game developed in Unity and C# with custom 2D graphics, designed to spark curiosity and problem-solving skills in children. Set in the historic city of Durham, players embark on an adventurous journey where they must solve riddles rooted in the city's rich history and mysterious rumours."
        }
      ],
      "achievements": [
        {
          "title": "Highest Dissertation Academic Award",
          "date": "2024-07-03",
          "tags": ["Academic Excellence","Blockchain"],
          "description": "Graduated from Durham University with First Class Honours. Final project titled 'Designing and Analysing the Applicability of a Blockchain-Based Event Ticketing System,' received the highest mark in cohort (87%) and awarded Individual Project Prize (BSc)."
        },
        {
          "title": "Winning Durhack",
          "date": "2023",
          "tags": ["Hackathon","AR","Teamwork","Public Speaking"],
          "description": "Won Overall Prize, Waterstons Prize, and Bede Gaming Prize at DurHack 2023 for developing Handwrite-AR, a spell-checking tool for handwriting."
        }
      ],
      "contact": {
        "email": "me@charliecarpenter.com",
        "phone_uk": "+44 (0) 7780 717679",
        "phone_sg": "+65 8332 9858"
      }
    };
  }

  setupEventListeners() {
    // Navigation
    this.setupNavigation();
    
    // Filter buttons
    this.setupProjectFilters();
    
    // Contact form
    this.setupContactForm();
    
    // Smooth scrolling
    this.setupSmoothScrolling();
    
    // Mobile menu
    this.setupMobileMenu();
    
    // Scroll effects
    this.setupScrollEffects();
  }

  setupNavigation() {
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  setupProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const filter = e.target.dataset.filter;
        this.filterProjects(filter);
        
        // Update active button
        filterButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
      });
    });
  }

  setupContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        // Only prevent default if we're not on Netlify (for local development)
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
          e.preventDefault();
          this.handleContactSubmit();
        } else {
          // Let Netlify handle the form submission completely
          // Just show loading state but don't interfere
          const submitBtn = document.getElementById('submitBtn');
          const btnText = submitBtn.querySelector('.btn-text');
          const btnLoading = submitBtn.querySelector('.btn-loading');
          
          if (submitBtn && btnText && btnLoading) {
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline-flex';
            submitBtn.disabled = true;
          }
          // Don't prevent default - let Netlify handle everything
        }
      });
    }
  }

  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
      
      // Close menu when clicking on links
      navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
        });
      });
    }
  }

  setupScrollEffects() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.card, .timeline-item, .project-card, .development-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  renderContent() {
    this.renderHero();
    this.renderExperienceEducation();
    this.renderProjects();
    this.renderTechnicalDevelopments();
    this.renderAchievements();
    this.renderActivities();
    this.renderContact();
  }

  renderHero() {
    const data = this.portfolioData.professional_summary;
    
    // Update hero content
    document.getElementById('heroSubtitle').textContent = data.text;
    
    // Render tags
    const tagsContainer = document.getElementById('heroTags');
    tagsContainer.innerHTML = data.tags.map(tag => 
      `<span class="hero-tag">${tag}</span>`
    ).join('');
  }



  renderExperienceEducation() {
    this.renderExperience();
    this.renderEducation();
  }

  renderExperience() {
    const timeline = document.getElementById('experienceTimeline');
    
    // Map company names to their logo files
    const companyLogos = {
      'St. James\'s Place': 'pics/stJames place log.webp',
      '1 Play Sports': 'pics/1 play sports logo.webp',
      'Durham St Mary\'s College': 'pics/st marys collage logo.webp'
    };
    
    timeline.innerHTML = `
      <div class="timeline-line"></div>
      ${this.portfolioData.experience.map((exp, index) => {
        const logoSrc = companyLogos[exp.company] || '';
        const logoHtml = logoSrc ? `<img src="${logoSrc}" alt="${exp.company}" class="company-logo" title="Click to zoom">` : '';
        
        return `
          <div class="timeline-item interactive-element expandable" style="animation-delay: ${index * 0.2}s">
            <div class="timeline-dot"></div>
            <div class="timeline-date">${exp.dates || 'Present'}</div>
            <div class="timeline-content">
              <div class="timeline-header">
                <div class="timeline-company">
                  ${logoHtml}
                </div>
                <div class="timeline-info">
                  <h3>${exp.role}</h3>
                  <h4>${exp.company}</h4>
                </div>
              </div>
              <div class="timeline-description">${exp.summary}</div>
              <div class="timeline-tags">
                ${exp.tags.map(tag => `<span class="timeline-tag">${tag}</span>`).join('')}
              </div>
            </div>
          </div>
        `;
      }).join('')}
    `;
  }

  renderProjects() {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = this.portfolioData.projects.map((project, index) => {
      const categories = this.getProjectCategories(project.tags);
      return `
        <div class="card project-card interactive-element expandable" data-categories="${categories.join(',')}" style="animation-delay: ${index * 0.1}s">
          <div class="project-icon" style="font-size: 2rem; margin-bottom: 1rem; color: var(--primary);">
            ${this.getProjectIcon(project.tags)}
          </div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description.substring(0, 150)}${project.description.length > 150 ? '...' : ''}</p>
          <div class="project-tags">
            ${project.tags.slice(0, 3).map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            ${project.tags.length > 3 ? `<span class="project-tag">+${project.tags.length - 3} more</span>` : ''}
          </div>
          <div class="expandable-preview" style="margin-top: 1rem; color: var(--text-muted); font-size: 0.9rem;">
            Click to explore project details →
          </div>
        </div>
      `;
    }).join('');
  }

  renderTechnicalDevelopments() {
    const grid = document.getElementById('developmentsGrid');
    grid.innerHTML = this.portfolioData.technical_developments.map((dev, index) => `
      <div class="card development-card" style="animation-delay: ${index * 0.2}s">
        <div class="development-icon">
          <i class="fas fa-code"></i>
        </div>
        <h3 class="development-title">${dev.title}</h3>
        <p class="development-description">${dev.description}</p>
        <div class="development-tags">
          ${dev.tags.map(tag => `<span class="development-tag">${tag}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  renderEducation() {
    const timeline = document.getElementById('educationTimeline');
    
    // Map institution names to their logo files
    const institutionLogos = {
      'Nanyang Technological University': 'pics/nanyan technolfical uni logo.webp',
      'Durham University': 'pics/durham uni logo.webp',
      'Gresham\'s School': 'pics/greshams school logo.webp'
    };
    
    timeline.innerHTML = `
      <div class="timeline-line"></div>
      ${this.portfolioData.education.map((edu, index) => {
        const logoSrc = institutionLogos[edu.institution] || '';
        const logoHtml = logoSrc ? `<img src="${logoSrc}" alt="${edu.institution}" class="institution-logo" title="Click to zoom">` : '';
        
        return `
          <div class="timeline-item interactive-element expandable" style="animation-delay: ${index * 0.2}s">
            <div class="timeline-dot"></div>
            <div class="timeline-date">${edu.dates}</div>
            <div class="timeline-content">
              <div class="timeline-header">
                <div class="timeline-company">
                  ${logoHtml}
                </div>
                <div class="timeline-info">
                  <h3>${edu.degree}</h3>
                  <h4>${edu.institution}</h4>
                </div>
              </div>
              <div class="timeline-description">${edu.description}</div>
              <div class="timeline-tags">
                ${edu.tags.map(tag => `<span class="timeline-tag">${tag}</span>`).join('')}
              </div>
            </div>
          </div>
        `;
      }).join('')}
    `;
  }

  renderAchievements() {
    const grid = document.getElementById('achievementsGrid');
    
    // Map achievement titles to their image files
    const achievementImages = {
      'Highest Dissertation Academic Award': 'pics/Highest Dissertation Academic Award.webp',
      'Winning Durhack': 'pics/winning durhack.webp'
    };
    
    // Add additional achievement data for the images we have
    const additionalAchievements = [
      {
        title: "Duke of Edinburgh Awards",
        date: "2019-2021",
        tags: ["Bronze", "Silver", "Gold", "Leadership"],
        description: "Achieved Bronze, Silver, and Gold Duke of Edinburgh Awards through completing challenging expeditions, skill development, physical recreation, and community service. This program developed leadership skills, resilience, and a commitment to helping others.",
        image: 'pics/duke of Edinburgh Bronze, Silver and Gold Awards.webp'
      },
      {
        title: "Air Cadet Leadership Merit",
        date: "2020",
        tags: ["Leadership", "Merit", "Military Training"],
        description: "Achieved Merit at Air Cadet Leadership Course, demonstrating exceptional leadership skills and military discipline. This intensive program focused on developing command presence, decision-making under pressure, and team management capabilities.",
        image: 'pics/Achieved Merit at Air Cadet Leadership Course.webp'
      },
      {
        title: "Durham St Mary's College Full Colours",
        date: "2023",
        tags: ["College", "Recognition", "Excellence"],
        description: "Awarded Full Colours at Durham St Mary's College for outstanding contribution to college life and community. This prestigious recognition is given to students who demonstrate exceptional leadership, academic achievement, and service to the college community.",
        image: 'pics/Durham St Marys College Full Colours.webp'
      },
      {
        title: "Gresham's School Academic Prizes",
        date: "2021",
        tags: ["Academic Excellence", "School Prizes"],
        description: "Received multiple academic prizes at Gresham's School for outstanding performance across various subjects. These awards recognized consistent academic excellence and dedication to learning across multiple disciplines.",
        image: 'pics/Prizes Awarded at Greshams School.webp'
      }
    ];
    
    // Combine original achievements with additional ones
    const allAchievements = [...this.portfolioData.achievements, ...additionalAchievements];
    
    grid.innerHTML = allAchievements.map((achievement, index) => {
      const imageSrc = achievement.image || achievementImages[achievement.title] || '';
      const imageHtml = imageSrc ? `
        <div class="achievement-visual">
          <img src="${imageSrc}" alt="${achievement.title}" class="achievement-image" title="Click to zoom">
        </div>
      ` : '';
      
      return `
        <div class="card achievement-card interactive-element expandable" style="animation-delay: ${index * 0.2}s">
          ${imageHtml}
          <div class="achievement-icon" style="font-size: 2rem; margin: 1rem 0;">🏆</div>
          <h3 class="achievement-title">${achievement.title}</h3>
          <div class="achievement-date" style="color: var(--primary); margin: 0.5rem 0;">${achievement.date}</div>
          <p class="achievement-description">${achievement.description.substring(0, 120)}${achievement.description.length > 120 ? '...' : ''}</p>
          <div class="achievement-tags">
            ${achievement.tags.map(tag => `<span class="achievement-tag">${tag}</span>`).join('')}
          </div>
          <div class="expandable-preview" style="margin-top: 1rem; color: var(--text-muted); font-size: 0.9rem;">
            Click to see full achievement details →
          </div>
        </div>
      `;
    }).join('');
  }

  renderActivities() {
    const grid = document.getElementById('activitiesGrid');
    
    // Enhanced activities with images and descriptions
    const activitiesData = [
      {
        name: "Scuba Diving",
        icon: "🤿",
        image: "pics/padi scuba diving.webp",
        description: "PADI certified diver exploring underwater worlds and marine ecosystems."
      },
      {
        name: "Lacrosse",
        icon: "🥍",
        description: "Team player with experience in competitive lacrosse leagues."
      },
      {
        name: "Running",
        icon: "🏃‍♂️",
        description: "Regular runner participating in marathons and fitness challenges."
      },
      {
        name: "Hackathons",
        icon: "💻",
        description: "Active participant in coding competitions and innovation challenges."
      },
      {
        name: "Finance Committee",
        icon: "💰",
        description: "Financial planning and budget management experience in student organizations."
      },
      {
        name: "Computer Society",
        icon: "🖥️",
        description: "Member of tech communities fostering innovation and knowledge sharing."
      },
      {
        name: "Badminton",
        icon: "🏸",
        description: "Recreational player enjoying strategic racquet sports."
      },
      {
        name: "Charity Work",
        icon: "❤️",
        description: "Active volunteer with Durham University Charity Committee."
      }
    ];
    
    grid.innerHTML = activitiesData.map((activity, index) => {
      const imageHtml = activity.image ? 
        `<img src="${activity.image}" alt="${activity.name}" class="activity-image">` :
        `<div class="activity-icon">${activity.icon}</div>`;
      
      return `
        <div class="activity-card" style="animation-delay: ${index * 0.1}s">
          ${imageHtml}
          <h3 class="activity-title">${activity.name}</h3>
          <p class="activity-description">${activity.description}</p>
        </div>
      `;
    }).join('');
  }

  renderContact() {
    const contactInfo = document.getElementById('contactInfo');
    const contact = this.portfolioData.contact;
    
    contactInfo.innerHTML = `
      <div class="contact-item">
        <div class="contact-icon">
          <i class="fas fa-envelope"></i>
        </div>
        <div>
          <h4>Email</h4>
          <p><a href="mailto:${contact.email}">${contact.email}</a></p>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-icon">
          <i class="fas fa-phone"></i>
        </div>
        <div>
          <h4>Phone (UK)</h4>
          <p><a href="tel:${contact.phone_uk}">${contact.phone_uk}</a></p>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-icon">
          <i class="fas fa-mobile-alt"></i>
        </div>
        <div>
          <h4>Phone (Singapore)</h4>
          <p><a href="tel:${contact.phone_sg}">${contact.phone_sg}</a></p>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-icon">
          <i class="fab fa-linkedin"></i>
        </div>
        <div>
          <h4>LinkedIn</h4>
          <p><a href="https://linkedin.com/in/carpenter-charlie" target="_blank">carpenter-charlie</a></p>
        </div>
      </div>
    `;
  }

  getProjectCategories(tags) {
    const categories = [];
    const tagMap = {
      'BERT': 'ai',
      'Sentiment Analysis': 'ai',
      'Reinforcement Learning': 'ai',
      'CNN': 'ai',
      'MobileNet': 'ai',
      'PyTorch': 'ai',
      'Machine Learning': 'ai',
      'AR': 'ar',
      'OCR': 'ar',
      'VR': 'ar',
      'NFT': 'blockchain',
      'Smart Contracts': 'blockchain',
      'Solidity': 'blockchain',
      'Ethereum': 'blockchain',
      'Polygon': 'blockchain',
      'Python': 'web',
      'Flask': 'web',
      'Unity': 'web',
      'C#': 'web'
    };

    tags.forEach(tag => {
      if (tagMap[tag] && !categories.includes(tagMap[tag])) {
        categories.push(tagMap[tag]);
      }
    });

    return categories.length > 0 ? categories : ['web'];
  }

  filterProjects(filter) {
    const projects = document.querySelectorAll('.project-card');
    
    projects.forEach(project => {
      const categories = project.dataset.categories.split(',');
      
      if (filter === 'all' || categories.includes(filter)) {
        project.style.display = 'block';
        project.style.opacity = '0';
        project.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          project.style.opacity = '1';
          project.style.transform = 'translateY(0)';
        }, 100);
      } else {
        project.style.opacity = '0';
        project.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
          project.style.display = 'none';
        }, 300);
      }
    });
  }

  handleNetlifySubmit(e) {
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    // Show loading state
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline-flex';
    submitBtn.disabled = true;
    
    // Netlify will handle the actual submission
    // The form will redirect to thank-you.html on success
  }

  handleContactSubmit() {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    
    // Create mailto link for local development
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const subject = formData.get('subject') || 'Portfolio Contact';
    
    const emailSubject = `${subject} - Portfolio Contact from ${name}`;
    const body = `From: ${name} (${email})\n\nSubject: ${subject}\n\n${message}`;
    
    const mailtoLink = `mailto:${this.portfolioData.contact.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    form.reset();
    
    // Show success message
    this.showNotification('Thank you! Your email client should open with the message.');
  }

  showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: var(--gradient-primary);
      color: var(--bg-primary);
      padding: 1rem 2rem;
      border-radius: var(--border-radius);
      z-index: 10000;
      font-weight: 500;
      box-shadow: var(--shadow-primary);
      opacity: 0;
      transform: translateY(-20px);
      transition: var(--transition);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateY(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateY(-20px)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  setupAnimations() {
    // Animate stats counter
    this.animateCounters();
    
    // Setup intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.card, .timeline-item').forEach(el => {
      observer.observe(el);
    });
  }

  animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
      const target = parseInt(counter.textContent);
      let current = 0;
      const increment = target / 50; // 50 steps
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = Math.ceil(current);
        }
      }, 50);
    });
  }

  hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
    }, 1000);
  }

  showError() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.innerHTML = `
      <div class="loading-content">
        <div style="color: var(--secondary); font-size: 3rem; margin-bottom: 1rem;">⚠️</div>
        <p>Failed to load portfolio data. Please refresh the page.</p>
      </div>
    `;
  }

  setupModals() {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    
    // Close modal when clicking overlay or close button
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay || e.target === modalClose) {
        this.closeModal();
      }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
        this.closeImageModal();
      }
    });
  }

  setupImageZoom() {
    const imageModal = document.getElementById('imageModal');
    const imageModalClose = document.getElementById('imageModalClose');
    
    // Close image modal
    imageModal.addEventListener('click', (e) => {
      if (e.target === imageModal || e.target === imageModalClose) {
        this.closeImageModal();
      }
    });
  }

  setupInteractiveElements() {
    // Add interactive functionality after content is rendered
    setTimeout(() => {
      this.addClickHandlers();
    }, 500);
  }

  addClickHandlers() {
    // Make all images clickable for zoom
    const images = document.querySelectorAll('.achievement-image, .company-logo, .institution-logo, .activity-image, .profile-pic');
    images.forEach(img => {
      img.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openImageModal(img.src, img.alt);
      });
    });

    // Make cards expandable
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.classList.add('expandable', 'interactive-element');
      card.addEventListener('click', (e) => {
        if (!e.target.closest('img')) { // Don't trigger if clicking on an image
          this.openCardModal(card);
        }
      });
    });

    // Add pulse effect to interactive elements
    const interactiveElements = document.querySelectorAll('.interactive-element');
    interactiveElements.forEach(element => {
      element.classList.add('pulse-on-hover');
    });
  }

  openImageModal(src, caption) {
    const imageModal = document.getElementById('imageModal');
    const imageModalImg = document.getElementById('imageModalImg');
    const imageModalCaption = document.getElementById('imageModalCaption');
    
    imageModalImg.src = src;
    imageModalCaption.textContent = caption;
    imageModal.classList.add('active');
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
  }

  closeImageModal() {
    const imageModal = document.getElementById('imageModal');
    imageModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  openCardModal(card) {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalContent = document.getElementById('modalContent');
    
    // Show loading spinner
    modalContent.innerHTML = `
      <div class="modal-loading">
        <div class="modal-spinner"></div>
      </div>
    `;
    
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Generate detailed content based on card type
    setTimeout(() => {
      const content = this.generateModalContent(card);
      modalContent.innerHTML = content;
    }, 500);
  }

  generateModalContent(card) {
    const cardTitle = card.querySelector('h3')?.textContent || card.querySelector('.timeline-title')?.textContent;
    const cardContent = card.querySelector('p')?.textContent || card.querySelector('.timeline-description')?.textContent;
    const tags = Array.from(card.querySelectorAll('.timeline-tag, .project-tag, .development-tag, .achievement-tag')).map(tag => tag.textContent);
    
    // Determine card type and get additional data
    let additionalContent = '';
    let modalTitle = cardTitle;
    let fullDescription = cardContent;
    
    // Check if it's an experience card
    const experienceItem = this.portfolioData.experience.find(exp => exp.role === cardTitle);
    if (experienceItem) {
      modalTitle = `${experienceItem.role} at ${experienceItem.company}`;
      fullDescription = experienceItem.description;
      additionalContent = `
        <h3>Key Achievements:</h3>
        <ul>
          <li>Led cross-functional collaboration with multiple stakeholders</li>
          <li>Implemented scalable solutions with modern technologies</li>
          <li>Achieved measurable improvements in efficiency and user satisfaction</li>
          <li>Maintained high standards of security and compliance</li>
        </ul>
        <h3>Technologies & Skills:</h3>
        <div class="modal-tags">
          ${experienceItem.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('')}
        </div>
      `;
    }
    
    // Check if it's a project card
    const projectItem = this.portfolioData.projects.find(proj => proj.title === cardTitle);
    if (projectItem) {
      additionalContent = `
        <h3>Technical Implementation:</h3>
        <p>This project showcases advanced technical skills and innovative problem-solving approaches. Built with modern technologies and best practices.</p>
        <h3>Key Features:</h3>
        <ul>
          <li>Scalable architecture and robust performance</li>
          <li>User-centered design and intuitive interface</li>
          <li>Advanced algorithms and optimization techniques</li>
          <li>Comprehensive testing and quality assurance</li>
        </ul>
        <h3>Technologies Used:</h3>
        <div class="modal-tags">
          ${projectItem.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('')}
        </div>
      `;
    }
    
    // Check if it's an education card
    const educationItem = this.portfolioData.education.find(edu => edu.degree === cardTitle);
    if (educationItem) {
      modalTitle = `${educationItem.degree} - ${educationItem.institution}`;
      fullDescription = educationItem.description;
      additionalContent = `
        <h3>Study Period:</h3>
        <p>${educationItem.dates}</p>
        <h3>Key Areas of Study:</h3>
        <div class="modal-tags">
          ${educationItem.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('')}
        </div>
        <h3>Academic Highlights:</h3>
        <ul>
          <li>Consistently achieved high academic performance</li>
          <li>Engaged in practical, hands-on learning experiences</li>
          <li>Participated in collaborative projects and research</li>
          <li>Developed both theoretical knowledge and practical skills</li>
        </ul>
      `;
    }
    
    // Check if it's a technical development card
    const techItem = this.portfolioData.technical_developments.find(tech => tech.title === cardTitle);
    if (techItem) {
      additionalContent = `
        <h3>Technical Approach:</h3>
        <p>This development represents cutting-edge application of modern technologies and methodologies.</p>
        <h3>Innovation Highlights:</h3>
        <ul>
          <li>Advanced machine learning and AI techniques</li>
          <li>Optimized performance and efficiency</li>
          <li>Real-world problem solving and practical applications</li>
          <li>Measurable results and improvements</li>
        </ul>
        <h3>Technologies & Methods:</h3>
        <div class="modal-tags">
          ${techItem.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('')}
        </div>
      `;
    }
    
    return `
      <h2>${modalTitle}</h2>
      <p>${fullDescription}</p>
      ${additionalContent}
      <div style="margin-top: 2rem;">
        <button class="expand-toggle" onclick="portfolioApp.addExpandableSection(this)">
          Show More Details
        </button>
      </div>
    `;
  }

  addExpandableSection(button) {
    const expandableContent = document.createElement('div');
    expandableContent.className = 'expandable-content expanded';
    expandableContent.innerHTML = `
      <h3>Why This Matters:</h3>
      <p>Each project and experience in my portfolio represents not just technical achievement, but also personal growth and learning. I believe in continuous improvement and pushing the boundaries of what's possible with technology.</p>
      <h3>Future Applications:</h3>
      <p>The skills and knowledge gained from this experience directly contribute to my ability to tackle complex challenges in AI, machine learning, and software development. Every project builds upon the last, creating a comprehensive foundation for innovation.</p>
      <h3>Connect With Me:</h3>
      <p>I'm always excited to discuss technology, share experiences, and explore new opportunities. Feel free to reach out if you'd like to learn more about any of my work or discuss potential collaborations.</p>
    `;
    
    button.parentNode.insertBefore(expandableContent, button);
    button.textContent = 'Show Less';
    button.onclick = () => {
      expandableContent.remove();
      button.textContent = 'Show More Details';
      button.onclick = () => this.addExpandableSection(button);
    };
  }

  closeModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  getProjectIcon(tags) {
    if (tags.includes('AR') || tags.includes('VR')) return '🥽';
    if (tags.includes('Blockchain') || tags.includes('NFT')) return '⛓️';
    if (tags.includes('AI') || tags.includes('Machine Learning')) return '🤖';
    if (tags.includes('Unity') || tags.includes('Game')) return '🎮';
    if (tags.includes('Python') || tags.includes('Web')) return '💻';
    return '🚀';
  }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.portfolioApp = new PortfolioApp();
});

// Add some dynamic effects
document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.cursor');
  if (cursor) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  }
});

// Enhanced hover effects for interactive elements
document.addEventListener('DOMContentLoaded', () => {
  // Add floating animations to cards on hover
  const addFloatingEffect = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  };
  
  // Initialize floating effects after content loads
  setTimeout(addFloatingEffect, 1000);
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Performance optimization
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Optimized scroll handler with parallax effects
const handleScroll = debounce(() => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelectorAll('.parallax');
  
  parallax.forEach(element => {
    const speed = element.dataset.speed;
    const yPos = -(scrolled * speed);
    element.style.transform = `translateY(${yPos}px)`;
  });
  
  // Add scroll-based animations to interactive elements
  const interactiveElements = document.querySelectorAll('.interactive-element');
  interactiveElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (inView) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}, 10);

window.addEventListener('scroll', handleScroll);

// Add keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    // Highlight interactive elements when tabbing
    document.body.classList.add('keyboard-navigation');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-navigation');
});

// Add smooth reveal animations for sections
const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.card, .timeline-item').forEach(el => {
    observer.observe(el);
  });
};

// Initialize observers after content loads
setTimeout(observeElements, 500);
