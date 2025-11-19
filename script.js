// ============================================
// PORTFOLIO WEBSITE - MAIN JAVASCRIPT
// ============================================
(function() {
    'use strict';
    
    // ============================================
    // LOAD PROJECTS FROM EXTERNAL FILE
    // ============================================
    async function loadProjects(limit = 6) {
        const projectsContainer = document.getElementById('projectsContainer');

        try {
            // Try to load from projects.json
            const response = await fetch('data/projects.json');

            if (!response.ok) {
                throw new Error('Failed to load projects');
            }

            const projects = await response.json();

            // Clear loading message
            projectsContainer.innerHTML = '';

            // Limit projects if specified
            const displayProjects = limit ? projects.slice(0, limit) : projects;

            // Create project cards
            displayProjects.forEach(project => {
                const card = createProjectCard(project);
                projectsContainer.appendChild(card);
            });

        } catch (error) {
            console.error('Error loading projects:', error);
            projectsContainer.innerHTML = '<p class="loading">Failed to load projects.</p>';
        }
    }

    // ============================================
    // LOAD ALL PROJECTS (for projects.html page)
    // ============================================
    async function loadAllProjects() {
        const allProjectsContainer = document.getElementById('allProjectsContainer');

        if (!allProjectsContainer) {
            console.error('❌ allProjectsContainer not found');
            return;
        }

        console.log('📁 Loading all projects...');

        try {
            // Try to load from projects.json
            const response = await fetch('data/projects.json');

            if (!response.ok) {
                throw new Error('Failed to load projects');
            }

            const projects = await response.json();
            console.log(`✅ Loaded ${projects.length} projects successfully`);

            // Clear loading message
            allProjectsContainer.innerHTML = '';

            // Create all project cards
            projects.forEach(project => {
                const card = createProjectCard(project);
                allProjectsContainer.appendChild(card);
            });

            console.log('✅ All project cards rendered');

        } catch (error) {
            console.error('❌ Error loading projects:', error);
            allProjectsContainer.innerHTML = '<p class="loading">Failed to load projects.</p>';
        }
    }
    
    // ============================================
    // LOAD CERTIFICATIONS FROM EXTERNAL FILE
    // ============================================
    async function loadCertifications() {
        const certificationsContainer = document.getElementById('certificationsContainer');
        
        try {
            // Try to load from certifications.json
            const response = await fetch('data/certifications.json');
            
            if (!response.ok) {
                throw new Error('Failed to load certifications');
            }
            
            const certifications = await response.json();
            
            // Clear loading message
            certificationsContainer.innerHTML = '';
            
            // Create certification cards
            certifications.forEach(certification => {
                const card = createCertificationCard(certification);
                certificationsContainer.appendChild(card);
            });
            
        } catch (error) {
            console.error('Error loading certifications:', error);
            certificationsContainer.innerHTML = '<p class="loading">Failed to load certifications.</p>';
        }
    }
    
    // ============================================
    // LOAD SKILLS FROM EXTERNAL FILE
    // ============================================
    async function loadSkills() {
        const skillsContainer = document.getElementById('skillsContainer');
        
        try {
            // Try to load from skills.json
            const response = await fetch('data/skills.json');
            
            if (!response.ok) {
                throw new Error('Failed to load skills');
            }
            
            const skillCategories = await response.json();
            
            // Clear loading message
            skillsContainer.innerHTML = '';
            
            // Create skill category cards
            skillCategories.forEach((category, index) => {
                const categoryCard = createSkillCategoryCard(category, index);
                skillsContainer.appendChild(categoryCard);
            });
            
        } catch (error) {
            console.error('Error loading skills:', error);
            skillsContainer.innerHTML = '<p class="loading">Failed to load skills.</p>';
        }
    }
    
    // ============================================
    // LOAD EXPERIENCE FROM EXTERNAL FILE
    // ============================================
    async function loadExperience() {
        const experienceContainer = document.getElementById('experienceContainer');
        
        try {
            // Try to load from experience.json
            const response = await fetch('data/experience.json');
            
            if (!response.ok) {
                throw new Error('Failed to load experience');
            }
            
            const experiences = await response.json();
            
            // Clear loading message
            experienceContainer.innerHTML = '';
            
            // Create experience timeline items
            experiences.forEach(experience => {
                const item = createExperienceItem(experience);
                experienceContainer.appendChild(item);
            });
            
        } catch (error) {
            console.error('Error loading experience:', error);
            experienceContainer.innerHTML = '<p class="loading">Failed to load experience.</p>';
        }
    }
    
    // ============================================
    // LOAD EDUCATION FROM EXTERNAL FILE
    // ============================================
    async function loadEducation() {
        const educationContainer = document.getElementById('educationContainer');
        
        try {
            // Try to load from education.json
            const response = await fetch('data/education.json');
            
            if (!response.ok) {
                throw new Error('Failed to load education');
            }
            
            const education = await response.json();
            
            // Clear loading message
            educationContainer.innerHTML = '';
            
            // Create education timeline items
            education.forEach(edu => {
                const item = createEducationItem(edu);
                educationContainer.appendChild(item);
            });
            
        } catch (error) {
            console.error('Error loading education:', error);
            educationContainer.innerHTML = '<p class="loading">Failed to load education.</p>';
        }
    }
    
    // ============================================
    // LOAD HOBBIES FROM EXTERNAL FILE
    // ============================================
    async function loadHobbies() {
        const hobbiesContainer = document.getElementById('hobbiesContainer');
        
        try {
            // Try to load from hobbies.json
            const response = await fetch('data/hobbies.json');
            
            if (!response.ok) {
                throw new Error('Failed to load hobbies');
            }
            
            const hobbies = await response.json();
            
            // Clear loading message
            hobbiesContainer.innerHTML = '';
            
            // Create hobby cards
            hobbies.forEach(hobby => {
                const card = createHobbyCard(hobby);
                hobbiesContainer.appendChild(card);
            });
            
        } catch (error) {
            console.error('Error loading hobbies:', error);
            hobbiesContainer.innerHTML = '<p class="loading">Failed to load hobbies.</p>';
        }
    }
    
    // ============================================
    // LOAD MY STORY FROM EXTERNAL FILE
    // ============================================
    async function loadMyStory() {
        const storyContainer = document.getElementById('storyContainer');

        try {
            // Try to load from mystory.json
            const response = await fetch('data/mystory.json');

            if (!response.ok) {
                throw new Error('Failed to load story');
            }

            const stories = await response.json();

            // Clear loading message
            storyContainer.innerHTML = '';

            // Create story cards
            stories.forEach((story, index) => {
                const card = createStoryCard(story);
                // Open first card by default
                if (index === 0) {
                    card.classList.add('active');
                }
                storyContainer.appendChild(card);
            });

        } catch (error) {
            console.error('Error loading story:', error);
            storyContainer.innerHTML = '<p class="loading">Failed to load story.</p>';
        }
    }
    
    // ============================================
    // LOAD ASK ME ABOUT FROM EXTERNAL FILE
    // ============================================
    async function loadAskMe() {
        const askMeContainer = document.getElementById('askMeContainer');
        
        try {
            // Try to load from askme.json
            const response = await fetch('data/askme.json');
            
            if (!response.ok) {
                throw new Error('Failed to load ask me topics');
            }
            
            const topics = await response.json();
            
            // Clear loading message
            askMeContainer.innerHTML = '';
            
            // Create ask me cards
            topics.forEach(topic => {
                const card = createAskMeCard(topic);
                askMeContainer.appendChild(card);
            });
            
        } catch (error) {
            console.error('Error loading ask me topics:', error);
            askMeContainer.innerHTML = '<p class="loading">Failed to load topics.</p>';
        }
    }
    
    // ============================================
    // LOAD LESSONS FROM EXTERNAL FILE
    // ============================================
    async function loadLessons() {
        const lessonsContainer = document.getElementById('lessonsContainer');
        
        try {
            // Try to load from lessons.json
            const response = await fetch('data/lessons.json');
            
            if (!response.ok) {
                throw new Error('Failed to load lessons');
            }
            
            const lessons = await response.json();
            
            // Clear loading message
            lessonsContainer.innerHTML = '';
            
            // Create lesson cards
            lessons.forEach(lesson => {
                const card = createLessonCard(lesson);
                lessonsContainer.appendChild(card);
            });
            
        } catch (error) {
            console.error('Error loading lessons:', error);
            lessonsContainer.innerHTML = '<p class="loading">Failed to load lessons.</p>';
        }
    }
    
    // ============================================
    // CREATE PROJECT CARD
    // ============================================
    function createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'card';
        
        // If project has a link, make it clickable
        if (project.link) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function() {
                window.open(project.link, '_blank');
            });
            
            // Add visual indicator for clickable cards
            card.classList.add('clickable');
        }
        
        // Create image container
        let imageHTML = '';
        if (project.image) {
            imageHTML = `
                <div class="card-image-container">
                    <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}" class="card-image" loading="lazy">
                </div>
            `;
        } else {
            // Fallback placeholder if no image provided
            imageHTML = `
                <div class="card-image-container">
                    <div class="card-image-placeholder">📊</div>
                </div>
            `;
        }
        
        card.innerHTML = `
            ${imageHTML}
            <div class="card-content">
                <h3>${escapeHtml(project.title)}</h3>
                <p class="tech-stack">${escapeHtml(project.techStack)}</p>
                <p>${escapeHtml(project.description)}</p>
            </div>
            ${project.link ? '<span class="project-link-icon">🔗</span>' : ''}
        `;
        
        return card;
    }
    
    // ============================================
    // CREATE CERTIFICATION CARD
    // ============================================
    function createCertificationCard(certification) {
        const card = document.createElement('div');
        card.className = 'card';
        
        // If certification has a link, make it clickable
        if (certification.link) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function() {
                window.open(certification.link, '_blank');
            });
            
            // Add visual indicator for clickable cards
            card.classList.add('clickable');
        }
        
        card.innerHTML = `
            <div class="card-content">
                <h3>${escapeHtml(certification.title)}</h3>
                <p class="tech-stack">${escapeHtml(certification.organization)}</p>
                <p>${escapeHtml(certification.description)}</p>
            </div>
            ${certification.link ? '<span class="project-link-icon">🔗</span>' : ''}
        `;
        
        return card;
    }
    
    // ============================================
    // CREATE SKILL CATEGORY CARD (PILL STYLE)
    // ============================================
    function createSkillCategoryCard(category, categoryIndex) {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'skill-category';

        // Create category title
        const title = document.createElement('div');
        title.className = 'skill-category-title';
        title.textContent = escapeHtml(category.category);

        // Create pills container
        const pillsContainer = document.createElement('div');
        pillsContainer.className = 'skill-pills';

        // Create individual skill pills
        category.skills.forEach(skill => {
            const pill = document.createElement('div');
            pill.className = 'skill-pill';
            pill.textContent = escapeHtml(skill);

            pillsContainer.appendChild(pill);
        });

        // Assemble the category card
        categoryCard.appendChild(title);
        categoryCard.appendChild(pillsContainer);

        return categoryCard;
    }
    
    // ============================================
    // CREATE EXPERIENCE ITEM
    // ============================================
    function createExperienceItem(experience) {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        item.innerHTML = `
            <h3>${escapeHtml(experience.title)}</h3>
            <p class="company">${escapeHtml(experience.company)}</p>
            <p class="date">${escapeHtml(experience.date)} | ${escapeHtml(experience.location)}</p>
            <p>${escapeHtml(experience.description)}</p>
        `;
        
        return item;
    }
    
    // ============================================
    // CREATE EDUCATION ITEM
    // ============================================
    function createEducationItem(education) {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        item.innerHTML = `
            <h3>${escapeHtml(education.degree)}</h3>
            <p class="company">${escapeHtml(education.institution)}</p>
            <p class="date">${escapeHtml(education.date)} | ${escapeHtml(education.location)}</p>
            <p>${escapeHtml(education.description)}</p>
        `;
        
        return item;
    }
    
    // ============================================
    // CREATE HOBBY CARD
    // ============================================
    function createHobbyCard(hobby) {
        const card = document.createElement('div');
        card.className = 'hobby-card';

        // Create image HTML if image exists
        let imageHTML = '';
        if (hobby.image) {
            imageHTML = `
                <div class="hobby-image-container">
                    <img src="${escapeHtml(hobby.image)}" alt="${escapeHtml(hobby.title)}" class="hobby-image" loading="lazy">
                    <div class="hobby-icon-overlay">${escapeHtml(hobby.icon)}</div>
                </div>
            `;
        } else {
            imageHTML = `<div class="hobby-icon">${escapeHtml(hobby.icon)}</div>`;
        }

        card.innerHTML = `
            ${imageHTML}
            <div class="hobby-content">
                <h3>${escapeHtml(hobby.title)}</h3>
                <p>${escapeHtml(hobby.description)}</p>
            </div>
        `;

        return card;
    }
    
    // ============================================
    // CREATE STORY CARD (ACCORDION STYLE)
    // ============================================
    function createStoryCard(story) {
        const card = document.createElement('div');
        card.className = 'story-card';

        card.innerHTML = `
            <div class="story-card-header">
                <div class="story-icon">${escapeHtml(story.icon)}</div>
                <div class="story-card-title-wrapper">
                    <h3>${escapeHtml(story.title)}</h3>
                </div>
                <div class="story-expand-icon">+</div>
            </div>
            <div class="story-card-content">
                <p>${escapeHtml(story.description)}</p>
            </div>
        `;

        // Add click event to toggle accordion
        const header = card.querySelector('.story-card-header');
        header.addEventListener('click', function() {
            // Close other cards
            const allCards = document.querySelectorAll('.story-card');
            allCards.forEach(otherCard => {
                if (otherCard !== card && otherCard.classList.contains('active')) {
                    otherCard.classList.remove('active');
                }
            });

            // Toggle current card
            card.classList.toggle('active');
        });

        return card;
    }
    
    // ============================================
    // CREATE ASK ME CARD
    // ============================================
    function createAskMeCard(topic) {
        const card = document.createElement('div');
        card.className = 'ask-me-card';
        
        card.innerHTML = `
            <div class="ask-me-icon">${escapeHtml(topic.icon)}</div>
            <h3>${escapeHtml(topic.title)}</h3>
            <p>${escapeHtml(topic.description)}</p>
        `;
        
        return card;
    }
    
    // ============================================
    // CREATE LESSON CARD
    // ============================================
    function createLessonCard(lesson) {
        const card = document.createElement('div');
        card.className = 'lesson-card';
        
        // Build tags HTML
        let tagsHTML = '';
        lesson.tags.forEach(tag => {
            const tagClass = tag.type === 'failure' ? 'lesson-tag failure' : 
                           tag.type === 'mistake' ? 'lesson-tag mistake' : 
                           'lesson-tag';
            tagsHTML += `<span class="${tagClass}">${escapeHtml(tag.name)}</span>`;
        });
        
        card.innerHTML = `
            <div class="lesson-number">${escapeHtml(lesson.number)}</div>
            <h3>${escapeHtml(lesson.title)}</h3>
            <div class="lesson-meta">
                ${tagsHTML}
            </div>
            <p class="lesson-story">${escapeHtml(lesson.story)}</p>
            <div class="lesson-learned">
                <strong>💡 The Lesson:</strong> ${escapeHtml(lesson.lesson)}
            </div>
        `;
        
        return card;
    }
    // ============================================
    // ESCAPE HTML (SECURITY)
    // ============================================
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // ============================================
    // THEME TOGGLE
    // ============================================
    function initThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        
        if (!themeToggle) return;
        
        // Load saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
        }
        
        // Toggle theme on click
        themeToggle.addEventListener('click', function() {
            const html = document.documentElement;
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', newTheme);
            this.textContent = newTheme === 'dark' ? '☀️' : '🌙';
            
            // Save preference to localStorage
            localStorage.setItem('theme', newTheme);
        });
    }
    
    // ============================================
    // HAMBURGER MENU TOGGLE
    // ============================================
    function initHamburgerMenu() {
        const hamburger = document.getElementById('navHamburger');
        const navMenu = document.getElementById('navMenu');
        const navLinks = document.querySelectorAll('.nav-btn');
        
        if (!hamburger || !navMenu) return;
        
        // Toggle menu
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking nav link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navMenu.classList.contains('active') && 
                !navMenu.contains(e.target) && 
                !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // ============================================
    // DROPDOWN NAVIGATION
    // ============================================
    function initDropdown() {
        const dropdown = document.querySelector('.nav-dropdown');
        const dropdownToggle = document.querySelector('.dropdown-toggle');
        const dropdownItems = document.querySelectorAll('.dropdown-item');

        if (!dropdown || !dropdownToggle) return;

        // Toggle dropdown on click (for touch devices)
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });

        // Close dropdown when clicking dropdown items
        dropdownItems.forEach(item => {
            item.addEventListener('click', function() {
                dropdown.classList.remove('active');

                // Close mobile menu if open
                const navMenu = document.getElementById('navMenu');
                const hamburger = document.getElementById('navHamburger');
                if (navMenu && hamburger) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (dropdown.classList.contains('active') &&
                !dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });

        // Close dropdown on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && dropdown.classList.contains('active')) {
                dropdown.classList.remove('active');
            }
        });
    }

    // ============================================
    // CONTACT BUTTON
    // ============================================
    function initContactButton() {
        const contactBtn = document.getElementById('contactBtn');
        
        if (!contactBtn) return;
        
        contactBtn.addEventListener('click', function() {
            window.location.href = 'mailto:your.email@gmail.com';
        });
    }
    
    // ============================================
    // SMOOTH SCROLL & ACTIVE NAV
    // ============================================
    function initNavigation() {
        const navLinks = document.querySelectorAll('.nav-btn');
        const footerLinks = document.querySelectorAll('.footer-links a');
        const dropdownItems = document.querySelectorAll('.dropdown-item');
        const allNavLinks = [...navLinks, ...footerLinks, ...dropdownItems];
        const sections = document.querySelectorAll('.section');

        let ticking = false;

        // Update active nav on scroll with throttling
        function updateActiveNav() {
            let currentSection = 'home';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.pageYOffset >= sectionTop - 200) {
                    currentSection = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + currentSection) {
                    link.classList.add('active');
                }
            });

            ticking = false;
        }

        function requestTick() {
            if (!ticking) {
                window.requestAnimationFrame(updateActiveNav);
                ticking = true;
            }
        }

        // Listen to scroll events
        window.addEventListener('scroll', requestTick);

        // Smooth scroll for all navigation links (nav bar + footer)
        allNavLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');

                // Only handle hash links (internal navigation)
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetSection = document.getElementById(targetId);

                    if (targetSection) {
                        const offsetTop = targetSection.offsetTop - 100;

                        // Smooth scroll to section
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });

                        // Update URL hash without jumping
                        history.pushState(null, null, href);

                        // Update active state immediately
                        navLinks.forEach(navLink => {
                            navLink.classList.remove('active');
                            if (navLink.getAttribute('href') === href) {
                                navLink.classList.add('active');
                            }
                        });

                        // Close mobile menu if open
                        const navMenu = document.getElementById('navMenu');
                        const hamburger = document.getElementById('navHamburger');
                        if (navMenu && hamburger) {
                            navMenu.classList.remove('active');
                            hamburger.classList.remove('active');
                            document.body.style.overflow = '';
                        }
                    }
                }
            });
        });

        // Handle initial page load with hash
        function handleInitialHash() {
            const hash = window.location.hash;
            if (hash) {
                const targetSection = document.querySelector(hash);
                if (targetSection) {
                    // Small delay to ensure page is loaded
                    setTimeout(() => {
                        const offsetTop = targetSection.offsetTop - 100;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }, 100);
                }
            }
        }

        // Handle browser back/forward buttons
        window.addEventListener('popstate', function() {
            const hash = window.location.hash;
            if (hash) {
                const targetSection = document.querySelector(hash);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 100;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });

        // Set initial active state
        handleInitialHash();
        updateActiveNav();
    }
    
    // ============================================
    // IMMERSIVE HERO ANIMATIONS
    // ============================================
    
    // Typewriter Effect
    function initTypewriter() {
        const phrases = [
            'turn data into decisions',
            'teach machines to learn',
            'find patterns in chaos',
            'make complexity simple',
            'build AI that matters'
        ];
        
        const typewriterElement = document.getElementById('typewriter');
        if (!typewriterElement) return;
        
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && charIndex === currentPhrase.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeSpeed = 500; // Pause before next phrase
            }
            
            setTimeout(type, typeSpeed);
        }
        
        type();
    }
    
    // Count Up Animation for Metrics
    function initMetricsCounter() {
        const metrics = document.querySelectorAll('.metric-value');

        const observerOptions = {
            threshold: 0.5
        };

        // Helper function to check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const target = parseInt(element.getAttribute('data-target'));
                    animateCounter(element, target);
                    observer.unobserve(element);
                }
            });
        }, observerOptions);

        metrics.forEach(metric => {
            // Check if metric is already visible on page load
            if (isInViewport(metric)) {
                const target = parseInt(metric.getAttribute('data-target'));
                animateCounter(metric, target);
            } else {
                // Otherwise observe it
                observer.observe(metric);
            }
        });
    }
    
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, stepTime);
    }
    
    // Antigravity Background Animation (Google-style)
    function initParticleBackground() {
        try {
            const canvas = document.getElementById('particleCanvas');
            if (!canvas) {
                console.warn('Particle canvas not found');
                return;
            }
            
            console.log('Initializing data science antigravity background effect');
            const ctx = canvas.getContext('2d');
            let particles = [];
            let blobs = [];
            let dataPoints = [];
            let networkNodes = [];
            let floatingNumbers = [];
            let mouse = { x: 0, y: 0 };
            let animationFrameId;
            
            // Data Science Symbols
            const dataSymbols = ['Σ', 'π', 'σ', 'μ', 'θ', 'λ', 'α', 'β', '∞', '≈', '≠', '≤', '≥'];
            const dataMetrics = ['92%', '0.95', 'R²', 'p<0.01', 'F1', 'AUC', 'MAE', 'RMSE'];
            
            // Particle class - floats upward (antigravity) - now data points
            class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 200; // Start below canvas
                this.size = Math.random() * 4 + 1;
                this.speedX = (Math.random() - 0.5) * 0.3; // Horizontal drift
                this.speedY = -(Math.random() * 0.5 + 0.3); // Upward float (negative = up)
                this.opacity = Math.random() * 0.4 + 0.3;
                this.wobble = Math.random() * Math.PI * 2; // For organic movement
                this.wobbleSpeed = Math.random() * 0.02 + 0.01;
            }
            
            update() {
                // Organic wobble motion
                this.wobble += this.wobbleSpeed;
                const wobbleOffset = Math.sin(this.wobble) * 2;
                
                this.x += this.speedX + wobbleOffset;
                this.y += this.speedY;
                
                // Mouse interaction - particles are repelled slightly
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 150 && distance > 0) {
                    const force = (150 - distance) / 150 * 0.5;
                    this.x -= (dx / distance) * force;
                    this.y -= (dy / distance) * force;
                }
                
                // Wrap around edges horizontally
                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                
                // Reset when particles float off top
                if (this.y < -50) {
                    this.y = canvas.height + 50;
                    this.x = Math.random() * canvas.width;
                }
            }
            
            draw() {
                ctx.save();
                ctx.globalAlpha = this.opacity;
                
                // Draw subtle connection line (data point trail)
                const lineLength = 15 + Math.sin(this.wobble) * 5;
                const gradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + lineLength);
                gradient.addColorStop(0, `rgba(59, 130, 246, ${this.opacity * 0.4})`);
                gradient.addColorStop(1, `rgba(59, 130, 246, 0)`);
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x, this.y + lineLength);
                ctx.stroke();
                
                // Draw point with gradient fill
                const pointGradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
                pointGradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
                pointGradient.addColorStop(0.5, 'rgba(59, 130, 246, 1)');
                pointGradient.addColorStop(1, 'rgba(59, 130, 246, 0.6)');
                ctx.fillStyle = pointGradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                
                // Outer glow ring
                ctx.shadowBlur = 8;
                ctx.shadowColor = 'rgba(59, 130, 246, 0.6)';
                ctx.strokeStyle = `rgba(59, 130, 246, ${this.opacity * 0.3})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size + 2, 0, Math.PI * 2);
                ctx.stroke();
                ctx.restore();
            }
            }
            
            // Blob class - larger floating shapes (data clusters)
            class Blob {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 300;
                this.size = Math.random() * 80 + 40;
                this.speedX = (Math.random() - 0.5) * 0.2;
                this.speedY = -(Math.random() * 0.3 + 0.2);
                this.opacity = Math.random() * 0.12 + 0.05;
                this.wobble = Math.random() * Math.PI * 2;
                this.wobbleSpeed = Math.random() * 0.01 + 0.005;
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.01;
                this.colorHue = Math.random() * 60 + 200; // Blue to purple range
            }
            
            update() {
                this.wobble += this.wobbleSpeed;
                this.rotation += this.rotationSpeed;
                
                const wobbleOffset = Math.sin(this.wobble) * 3;
                this.x += this.speedX + wobbleOffset;
                this.y += this.speedY;
                
                // Mouse interaction
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 200 && distance > 0) {
                    const force = (200 - distance) / 200 * 0.3;
                    this.x -= (dx / distance) * force;
                    this.y -= (dy / distance) * force;
                }
                
                // Wrap around edges
                if (this.x > canvas.width + this.size) this.x = -this.size;
                if (this.x < -this.size) this.x = canvas.width + this.size;
                
                if (this.y < -this.size) {
                    this.y = canvas.height + this.size;
                    this.x = Math.random() * canvas.width;
                }
            }
            
            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);
                
                // Create organic blob shape with more points for smoother look
                ctx.beginPath();
                const points = 12;
                for (let i = 0; i < points; i++) {
                    const angle = (i / points) * Math.PI * 2;
                    const radius = this.size + Math.sin(this.wobble * 2 + i) * 12 + Math.cos(this.wobble * 1.5 + i) * 8;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    if (i === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.closePath();
                
                // Multi-color gradient fill (data cluster effect)
                const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 1.5);
                const hue1 = this.colorHue;
                const hue2 = (this.colorHue + 30) % 360;
                gradient.addColorStop(0, `hsla(${hue1}, 70%, 60%, ${this.opacity * 2})`);
                gradient.addColorStop(0.4, `hsla(${hue2}, 65%, 55%, ${this.opacity * 1.5})`);
                gradient.addColorStop(0.7, `hsla(${hue1}, 60%, 50%, ${this.opacity * 0.8})`);
                gradient.addColorStop(1, `hsla(${hue1}, 50%, 45%, 0)`);
                ctx.fillStyle = gradient;
                ctx.fill();
                
                // Outer glow
                ctx.shadowBlur = 20;
                ctx.shadowColor = `hsla(${hue1}, 70%, 60%, ${this.opacity * 0.3})`;
                ctx.fill();
                
                ctx.restore();
            }
            }
            
            // Network Node class - represents neural network nodes
            class NetworkNode {
                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = canvas.height + Math.random() * 400;
                    this.size = Math.random() * 8 + 4;
                    this.speedX = (Math.random() - 0.5) * 0.15;
                    this.speedY = -(Math.random() * 0.4 + 0.2);
                    this.opacity = Math.random() * 0.3 + 0.2;
                    this.pulse = Math.random() * Math.PI * 2;
                    this.pulseSpeed = Math.random() * 0.03 + 0.02;
                }
                
                update() {
                    this.pulse += this.pulseSpeed;
                    this.x += this.speedX;
                    this.y += this.speedY;
                    
                    // Mouse interaction
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 120 && distance > 0) {
                        const force = (120 - distance) / 120 * 0.4;
                        this.x -= (dx / distance) * force;
                        this.y -= (dy / distance) * force;
                    }
                    
                    if (this.x > canvas.width) this.x = 0;
                    if (this.x < 0) this.x = canvas.width;
                    if (this.y < -50) {
                        this.y = canvas.height + 50;
                        this.x = Math.random() * canvas.width;
                    }
                }
                
                draw() {
                    ctx.save();
                    const pulseSize = this.size + Math.sin(this.pulse) * 2;
                    const pulseOpacity = this.opacity + Math.sin(this.pulse) * 0.1;
                    ctx.globalAlpha = pulseOpacity;
                    
                    // Outer glow ring (animated)
                    const outerRing = pulseSize + 5 + Math.sin(this.pulse * 1.5) * 2;
                    const ringGradient = ctx.createRadialGradient(this.x, this.y, pulseSize, this.x, this.y, outerRing);
                    ringGradient.addColorStop(0, `rgba(147, 51, 234, ${pulseOpacity * 0.3})`);
                    ringGradient.addColorStop(1, 'rgba(147, 51, 234, 0)');
                    ctx.fillStyle = ringGradient;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, outerRing, 0, Math.PI * 2);
                    ctx.fill();
                    
                    // Draw node with gradient fill
                    const nodeGradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, pulseSize);
                    nodeGradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
                    nodeGradient.addColorStop(0.4, 'rgba(147, 51, 234, 1)');
                    nodeGradient.addColorStop(1, 'rgba(147, 51, 234, 0.7)');
                    ctx.fillStyle = nodeGradient;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, pulseSize, 0, Math.PI * 2);
                    ctx.fill();
                    
                    // Inner highlight
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
                    ctx.beginPath();
                    ctx.arc(this.x - pulseSize * 0.3, this.y - pulseSize * 0.3, pulseSize * 0.3, 0, Math.PI * 2);
                    ctx.fill();
                    
                    ctx.restore();
                }
            }
            
            // Floating Number class - statistical metrics
            class FloatingNumber {
                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = canvas.height + Math.random() * 300;
                    this.text = dataMetrics[Math.floor(Math.random() * dataMetrics.length)];
                    this.speedX = (Math.random() - 0.5) * 0.2;
                    this.speedY = -(Math.random() * 0.3 + 0.15);
                    this.opacity = Math.random() * 0.4 + 0.3;
                    this.rotation = (Math.random() - 0.5) * 0.1;
                    this.rotationSpeed = (Math.random() - 0.5) * 0.01;
                    this.size = Math.random() * 6 + 10;
                }
                
                update() {
                    this.rotation += this.rotationSpeed;
                    this.x += this.speedX;
                    this.y += this.speedY;
                    
                    if (this.x > canvas.width + 50) this.x = -50;
                    if (this.x < -50) this.x = canvas.width + 50;
                    if (this.y < -50) {
                        this.y = canvas.height + 50;
                        this.x = Math.random() * canvas.width;
                        this.text = dataMetrics[Math.floor(Math.random() * dataMetrics.length)];
                    }
                }
                
                draw() {
                    ctx.save();
                    ctx.translate(this.x, this.y);
                    ctx.rotate(this.rotation);
                    
                    // Text shadow/glow
                    ctx.shadowBlur = 8;
                    ctx.shadowColor = 'rgba(16, 185, 129, 0.5)';
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 0;
                    
                    // Background circle for better visibility
                    ctx.globalAlpha = this.opacity * 0.2;
                    ctx.fillStyle = 'rgba(16, 185, 129, 1)';
                    ctx.beginPath();
                    ctx.arc(0, 0, this.size * 0.8, 0, Math.PI * 2);
                    ctx.fill();
                    
                    // Text with gradient
                    ctx.globalAlpha = this.opacity;
                    const textGradient = ctx.createLinearGradient(-this.size/2, 0, this.size/2, 0);
                    textGradient.addColorStop(0, 'rgba(16, 185, 129, 1)');
                    textGradient.addColorStop(0.5, 'rgba(5, 150, 105, 1)');
                    textGradient.addColorStop(1, 'rgba(16, 185, 129, 1)');
                    ctx.fillStyle = textGradient;
                    ctx.font = `bold ${this.size}px 'Inter', monospace`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(this.text, 0, 0);
                    ctx.restore();
                }
            }
            
            // Chart Bar class - mini bar chart elements
            class ChartBar {
                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = canvas.height + Math.random() * 200;
                    this.width = Math.random() * 15 + 8;
                    this.height = Math.random() * 40 + 20;
                    this.speedX = (Math.random() - 0.5) * 0.2;
                    this.speedY = -(Math.random() * 0.4 + 0.2);
                    this.opacity = Math.random() * 0.25 + 0.15;
                    this.colorIndex = Math.floor(Math.random() * 3);
                }
                
                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;
                    
                    if (this.x > canvas.width + 50) this.x = -50;
                    if (this.x < -50) this.x = canvas.width + 50;
                    if (this.y < -this.height) {
                        this.y = canvas.height + this.height;
                        this.x = Math.random() * canvas.width;
                        this.height = Math.random() * 40 + 20;
                    }
                }
                
                draw() {
                    ctx.save();
                    const barX = this.x - this.width/2;
                    const barY = this.y - this.height;
                    
                    // Shadow
                    ctx.shadowBlur = 6;
                    ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
                    ctx.shadowOffsetY = 2;
                    
                    // Bar gradient
                    const colors = [
                        ['rgba(59, 130, 246, 1)', 'rgba(37, 99, 235, 1)'],   // Blue gradient
                        ['rgba(147, 51, 234, 1)', 'rgba(126, 34, 206, 1)'],   // Purple gradient
                        ['rgba(16, 185, 129, 1)', 'rgba(5, 150, 105, 1)']     // Green gradient
                    ];
                    const gradient = ctx.createLinearGradient(barX, barY, barX, barY + this.height);
                    gradient.addColorStop(0, colors[this.colorIndex][0]);
                    gradient.addColorStop(1, colors[this.colorIndex][1]);
                    
                    ctx.globalAlpha = this.opacity;
                    ctx.fillStyle = gradient;
                    ctx.fillRect(barX, barY, this.width, this.height);
                    
                    // Top highlight
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
                    ctx.fillRect(barX, barY, this.width, this.height * 0.2);
                    
                    // Border
                    ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity * 0.2})`;
                    ctx.lineWidth = 1;
                    ctx.strokeRect(barX, barY, this.width, this.height);
                    
                    ctx.restore();
                }
            }
            
            // Create particles
            function createParticles() {
                const particleCount = Math.min(120, Math.floor(canvas.width / 10));
                particles = [];
                for (let i = 0; i < particleCount; i++) {
                    particles.push(new Particle());
                }
            }
            
            // Create blobs
            function createBlobs() {
                const blobCount = Math.min(6, Math.floor(canvas.width / 250));
                blobs = [];
                for (let i = 0; i < blobCount; i++) {
                    blobs.push(new Blob());
                }
            }
            
            // Create network nodes
            function createNetworkNodes() {
                const nodeCount = Math.min(25, Math.floor(canvas.width / 50));
                networkNodes = [];
                for (let i = 0; i < nodeCount; i++) {
                    networkNodes.push(new NetworkNode());
                }
            }
            
            // Create floating numbers
            function createFloatingNumbers() {
                const numberCount = Math.min(15, Math.floor(canvas.width / 100));
                floatingNumbers = [];
                for (let i = 0; i < numberCount; i++) {
                    floatingNumbers.push(new FloatingNumber());
                }
            }
            
            // Create chart bars
            function createChartBars() {
                const barCount = Math.min(20, Math.floor(canvas.width / 80));
                dataPoints = [];
                for (let i = 0; i < barCount; i++) {
                    dataPoints.push(new ChartBar());
                }
            }
            
            // Set canvas size
            function resizeCanvas() {
                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
                // Recreate all elements on resize
                createParticles();
                createBlobs();
                createNetworkNodes();
                createFloatingNumbers();
                createChartBars();
            }
            
            // Track mouse position for interactive effect
            canvas.addEventListener('mousemove', (e) => {
                const rect = canvas.getBoundingClientRect();
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            });
            
            // Initialize canvas and particles
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);
            
            // Connect particles with lines (only nearby ones)
            function connectParticles() {
                // Connect data points with gradient lines
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        
                        if (distance < 100) {
                            const opacity = (1 - distance / 100) * 0.15;
                            const gradient = ctx.createLinearGradient(
                                particles[i].x, particles[i].y,
                                particles[j].x, particles[j].y
                            );
                            gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity})`);
                            gradient.addColorStop(0.5, `rgba(147, 51, 234, ${opacity * 0.8})`);
                            gradient.addColorStop(1, `rgba(59, 130, 246, ${opacity})`);
                            
                            ctx.strokeStyle = gradient;
                            ctx.lineWidth = 0.8;
                            ctx.setLineDash([2, 3]);
                            ctx.beginPath();
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                            ctx.setLineDash([]);
                        }
                    }
                }
                
                // Connect network nodes (neural network style) with animated lines
                for (let i = 0; i < networkNodes.length; i++) {
                    for (let j = i + 1; j < networkNodes.length; j++) {
                        const dx = networkNodes[i].x - networkNodes[j].x;
                        const dy = networkNodes[i].y - networkNodes[j].y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        
                        if (distance < 150) {
                            const opacity = (1 - distance / 150) * 0.25;
                            const time = Date.now() * 0.001;
                            const pulse = (Math.sin(time + distance * 0.01) + 1) * 0.5;
                            
                            // Gradient connection
                            const gradient = ctx.createLinearGradient(
                                networkNodes[i].x, networkNodes[i].y,
                                networkNodes[j].x, networkNodes[j].y
                            );
                            gradient.addColorStop(0, `rgba(147, 51, 234, ${opacity * (0.5 + pulse * 0.5)})`);
                            gradient.addColorStop(0.5, `rgba(59, 130, 246, ${opacity * (0.7 + pulse * 0.3)})`);
                            gradient.addColorStop(1, `rgba(147, 51, 234, ${opacity * (0.5 + pulse * 0.5)})`);
                            
                            ctx.strokeStyle = gradient;
                            ctx.lineWidth = 1.2;
                            ctx.shadowBlur = 3;
                            ctx.shadowColor = `rgba(147, 51, 234, ${opacity * 0.5})`;
                            ctx.beginPath();
                            ctx.moveTo(networkNodes[i].x, networkNodes[i].y);
                            ctx.lineTo(networkNodes[j].x, networkNodes[j].y);
                            ctx.stroke();
                            ctx.shadowBlur = 0;
                        }
                    }
                }
            }
            
            // Animation loop
            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Draw blobs first (background layer)
                blobs.forEach(blob => {
                    blob.update();
                    blob.draw();
                });
                
                // Draw chart bars (data visualization layer)
                dataPoints.forEach(bar => {
                    bar.update();
                    bar.draw();
                });
                
                // Draw network nodes
                networkNodes.forEach(node => {
                    node.update();
                    node.draw();
                });
                
                // Draw particles (data points)
                particles.forEach(particle => {
                    particle.update();
                    particle.draw();
                });
                
                // Draw floating numbers (metrics)
                floatingNumbers.forEach(number => {
                    number.update();
                    number.draw();
                });
                
                // Connect elements (network connections)
                connectParticles();
                
                animationFrameId = requestAnimationFrame(animate);
            }
            
            animate();
            
            // Cleanup
            return () => {
                cancelAnimationFrame(animationFrameId);
                window.removeEventListener('resize', resizeCanvas);
            };
        } catch (error) {
            console.error('Error initializing particle background:', error);
            // Don't break the rest of the site if particle background fails
        }
    }
    
    // Initialize all hero animations
    function initHeroAnimations() {
        try {
            initTypewriter();
            initMetricsCounter();
            initParticleBackground();
        } catch (error) {
            console.error('Error initializing hero animations:', error);
            // Continue execution even if hero animations fail
        }
    }
    
    // ============================================
    // UPDATE FOOTER YEAR
    // ============================================
    function updateFooterYear() {
        const yearElement = document.getElementById('currentYear');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }

    // ============================================
    // BACK TO TOP BUTTON
    // ============================================
    function initBackToTop() {
        const backToTopBtn = document.getElementById('backToTop');

        if (!backToTopBtn) return;

        // Show/hide button based on scroll position
        function toggleBackToTop() {
            if (window.pageYOffset > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }

        // Scroll to top when clicked
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Listen to scroll events with throttling
        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    toggleBackToTop();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Initial check
        toggleBackToTop();
    }

    // ============================================
    // DOWNLOAD RESUME ANIMATION
    // ============================================
    function initDownloadResume() {
        const downloadBtn = document.getElementById('downloadResumeBtn');

        if (!downloadBtn) return;

        downloadBtn.addEventListener('click', function(e) {
            // Add downloading animation
            this.classList.add('downloading');

            // After animation completes, show checkmark
            setTimeout(() => {
                this.classList.remove('downloading');
                this.classList.add('downloaded');

                // Remove checkmark after 2 seconds
                setTimeout(() => {
                    this.classList.remove('downloaded');
                }, 2000);
            }, 1500);
        });
    }

    // ============================================
    // INITIALIZE ALL FUNCTIONALITY
    // ============================================
    function init() {
        console.log('🚀 Initializing portfolio...');

        // Load projects from external file
        // Check if we're on the projects.html page
        if (document.getElementById('allProjectsContainer')) {
            console.log('📄 Detected projects.html page');
            loadAllProjects();
        } else {
            console.log('🏠 Detected index.html page');
            loadProjects(6); // Limit to 6 projects on the home page
        }

        // Load certifications from external file
        loadCertifications();

        // Load experience from external file
        loadExperience();

        // Load education from external file
        loadEducation();

        // Load skills from external file
        loadSkills();

        // Load hobbies from external file
        loadHobbies();

        // Load my story from external file
        loadMyStory();

        // Load ask me about from external file
        loadAskMe();

        // Load lessons learned from external file
        loadLessons();

        // Initialize theme toggle
        initThemeToggle();

        // Initialize hamburger menu
        initHamburgerMenu();

        // Initialize contact button
        initContactButton();

        // Initialize dropdown navigation
        initDropdown();

        // Initialize navigation
        initNavigation();

        // Initialize hero animations
        initHeroAnimations();

        // Update footer year
        updateFooterYear();

        // Initialize back to top button
        initBackToTop();

        // Initialize download resume animation
        initDownloadResume();
    }

    // ============================================
    // START APPLICATION
    // ============================================
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();