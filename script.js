// ============================================
// PORTFOLIO WEBSITE - MAIN JAVASCRIPT
// ============================================
(function () {
    'use strict';

    // ============================================
    // LOAD PROJECTS FROM EXTERNAL FILE
    // ============================================
    async function loadProjects(limit = 6, featuredOnly = false) {
        const projectsContainer = document.getElementById('projectsContainer');

        try {
            // Try to load from projects.json
            const response = await fetch('data/projects.json');

            if (!response.ok) {
                throw new Error('Failed to load projects');
            }

            let projects = await response.json();

            // Clear loading message
            projectsContainer.innerHTML = '';

            // Filter for featured projects if requested
            if (featuredOnly) {
                projects = projects.filter(p => p.featured);
            }

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
    async function loadCertifications(limit = null) {
        const certificationsContainer = document.getElementById('certificationsContainer');

        if (!certificationsContainer) return;

        try {
            // Try to load from certifications.json
            const response = await fetch('data/certifications.json');

            if (!response.ok) {
                throw new Error('Failed to load certifications');
            }

            const certifications = await response.json();

            // Clear loading message
            certificationsContainer.innerHTML = '';

            // Limit certifications if specified
            const displayCertifications = limit ? certifications.slice(0, limit) : certifications;

            // Create certification cards
            displayCertifications.forEach(certification => {
                const card = createCertificationCard(certification);
                certificationsContainer.appendChild(card);
            });

        } catch (error) {
            console.error('Error loading certifications:', error);
            certificationsContainer.innerHTML = '<p class="loading">Failed to load certifications.</p>';
        }
    }

    // ============================================
    // LOAD ALL CERTIFICATIONS (for certifications.html page)
    // ============================================
    async function loadAllCertifications() {
        const allCertificationsContainer = document.getElementById('allCertificationsContainer');

        if (!allCertificationsContainer) {
            console.error('❌ allCertificationsContainer not found');
            return;
        }

        console.log('📁 Loading all certifications...');

        try {
            // Try to load from certifications.json
            const response = await fetch('data/certifications.json');

            if (!response.ok) {
                throw new Error('Failed to load certifications');
            }

            const certifications = await response.json();
            console.log(`✅ Loaded ${certifications.length} certifications successfully`);

            // Clear loading message
            allCertificationsContainer.innerHTML = '';

            // Create all certification cards
            certifications.forEach(certification => {
                const card = createCertificationCard(certification);
                allCertificationsContainer.appendChild(card);
            });

            console.log('✅ All certification cards rendered');

        } catch (error) {
            console.error('❌ Error loading certifications:', error);
            allCertificationsContainer.innerHTML = '<p class="loading">Failed to load certifications.</p>';
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
            card.addEventListener('click', function () {
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
            card.addEventListener('click', function () {
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
    // LOAD MY STORY (SPLIT SCREEN LAYOUT)
    // ============================================
    async function loadMyStory() {
        const storyContainer = document.getElementById('storyContainer');

        try {
            const response = await fetch('data/mystory.json');
            if (!response.ok) throw new Error('Failed to load story');
            const storyData = await response.json();

            storyContainer.innerHTML = '';
            storyContainer.className = 'story-container story-split-layout';

            // Create Layout Structure
            const navContainer = document.createElement('div');
            navContainer.className = 'story-nav';

            const contentContainer = document.createElement('div');
            contentContainer.className = 'story-content-area';

            // Create Items
            storyData.forEach((story, index) => {
                // 1. Create Nav Item
                const navItem = document.createElement('div');
                navItem.className = `story-nav-item ${index === 0 ? 'active' : ''}`;
                navItem.innerHTML = `
                    <span class="story-nav-icon">${escapeHtml(story.icon)}</span>
                    <span class="story-nav-title">${escapeHtml(story.title)}</span>
                `;

                // 2. Create Content Item
                const contentItem = document.createElement('div');
                contentItem.className = `story-content-item ${index === 0 ? 'active' : ''}`;
                contentItem.innerHTML = `
                    <div class="story-content-header-mobile">
                        <span class="story-mobile-icon">${escapeHtml(story.icon)}</span>
                        <h3>${escapeHtml(story.title)}</h3>
                    </div>
                    <p>${escapeHtml(story.description)}</p>
                `;

                // 3. Add Click Event
                navItem.addEventListener('click', () => {
                    // Update Nav
                    document.querySelectorAll('.story-nav-item').forEach(item => item.classList.remove('active'));
                    navItem.classList.add('active');

                    // Update Content
                    document.querySelectorAll('.story-content-item').forEach(item => item.classList.remove('active'));
                    contentItem.classList.add('active');
                });

                navContainer.appendChild(navItem);
                contentContainer.appendChild(contentItem);
            });

            storyContainer.appendChild(navContainer);
            storyContainer.appendChild(contentContainer);

        } catch (error) {
            console.error('Error loading story:', error);
            storyContainer.innerHTML = '<p class="loading">Failed to load story.</p>';
        }
    }

    // ============================================
    // CREATE ASK ME CARD (FLIP CARD)
    // ============================================
    function createAskMeCard(topic) {
        const card = document.createElement('div');
        card.className = 'ask-me-card';

        card.innerHTML = `
            <div class="card-flip-inner">
                <div class="card-flip-front">
                    <div class="ask-me-icon">${escapeHtml(topic.icon)}</div>
                    <h3>${escapeHtml(topic.title)}</h3>
                    <span class="flip-hint">Hover to reveal</span>
                </div>
                <div class="card-flip-back">
                    <p>${escapeHtml(topic.description)}</p>
                </div>
            </div>
        `;

        // Add click handler for mobile (tap to flip)
        card.addEventListener('click', function () {
            this.classList.toggle('flipped');
        });

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
        themeToggle.addEventListener('click', function () {
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
        hamburger.addEventListener('click', function (e) {
            e.stopPropagation();
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking nav link
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
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
        dropdownToggle.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });

        // Close dropdown when clicking dropdown items
        dropdownItems.forEach(item => {
            item.addEventListener('click', function () {
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
        document.addEventListener('click', function (e) {
            if (dropdown.classList.contains('active') &&
                !dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });

        // Close dropdown on Escape key
        document.addEventListener('keydown', function (e) {
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

        contactBtn.addEventListener('click', function () {
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
            link.addEventListener('click', function (e) {
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
        window.addEventListener('popstate', function () {
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

    // Antigravity Background Animation (Physics-based)
    function initAntigravityBackground() {
        const canvas = document.getElementById('particleCanvas');
        const heroBackground = document.querySelector('.hero-background');

        if (!canvas || !heroBackground) {
            console.warn('Canvas or Hero background not found');
            return;
        }

        console.log('Initializing Antigravity Physics Background');
        const ctx = canvas.getContext('2d');

        // Physics Constants
        const FRICTION = 0.96;
        const MOUSE_REPULSION_RADIUS = 250;
        const MOUSE_REPULSION_FORCE = 1.5;
        const FLOAT_SPEED = 0.2;
        const RETURN_SPEED = 0.02;

        let elements = [];
        let mouse = { x: -1000, y: -1000 };
        let animationFrameId;

        // Data Science Symbols & Metrics
        const symbols = ['Σ', 'π', 'σ', 'μ', 'θ', 'λ', 'α', 'β', '∞', '∫', '∇', '∂', '∆', 'Ω', 'ε', 'η', 'γ', 'δ'];
        const metrics = [
            'R²', 'p<0.05', 'F1', 'AUC', 'RMSE', 'MAE', '95%', '0.01',
            'y=mx+b', 'P(A|B)', 'σ²', 'χ²', 'log(x)', 'e^x', 'ReLU', 'σ(z)', 'MSE',
            '∇J(θ)', 'softmax', 'H(p,q)', 'KL(P||Q)', 'Attention(Q,K,V)',
            'x_{t+1}', 'L₁', 'L₂', 'tanh', 'sigmoid', 'Adam'
        ];

        class PhysicsElement {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.originX = x;
                this.originY = y;
                this.vx = (Math.random() - 0.5) * 2;
                this.vy = (Math.random() - 0.5) * 2;
                this.size = 0;
                this.color = '';
                this.opacity = 0;
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.02;
            }

            update() {
                // Physics: Mouse Repulsion
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < MOUSE_REPULSION_RADIUS) {
                    const angle = Math.atan2(dy, dx);
                    const force = (MOUSE_REPULSION_RADIUS - distance) / MOUSE_REPULSION_RADIUS;
                    const repulsion = force * MOUSE_REPULSION_FORCE;

                    this.vx -= Math.cos(angle) * repulsion;
                    this.vy -= Math.sin(angle) * repulsion;
                }

                // Physics: Return to origin (Gravity/Antigravity anchor)
                const homeDx = this.originX - this.x;
                const homeDy = this.originY - this.y;
                this.vx += homeDx * RETURN_SPEED * 0.05;
                this.vy += homeDy * RETURN_SPEED * 0.05;

                // Physics: Float/Drift
                this.vx += (Math.random() - 0.5) * 0.1;
                this.vy += (Math.random() - 0.5) * 0.1;

                // Apply Velocity & Friction
                this.x += this.vx;
                this.y += this.vy;
                this.vx *= FRICTION;
                this.vy *= FRICTION;

                // Rotation
                this.rotation += this.rotationSpeed;
            }

            draw() {
                // Override in subclasses
            }
        }

        class DataSymbol extends PhysicsElement {
            constructor(x, y, symbol) {
                super(x, y);
                this.symbol = symbol;
                this.size = Math.random() * 14 + 10;
                this.opacity = Math.random() * 0.3 + 0.1;
                // Theme colors (blue/purple)
                this.isAccent = Math.random() > 0.7;
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);

                ctx.font = `${this.size}px 'Inter', sans-serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                if (this.isAccent) {
                    ctx.fillStyle = `rgba(147, 51, 234, ${this.opacity})`; // Purple
                } else {
                    ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`; // Blue
                }

                ctx.fillText(this.symbol, 0, 0);
                ctx.restore();
            }
        }

        class DataMetric extends PhysicsElement {
            constructor(x, y, text) {
                super(x, y);
                this.text = text;
                this.size = Math.random() * 10 + 10;
                this.opacity = Math.random() * 0.4 + 0.2;
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                // Less rotation for text to keep it readable
                ctx.rotate(this.rotation * 0.5);

                ctx.font = `bold ${this.size}px 'Inter', monospace`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                // Green/Teal for metrics
                ctx.fillStyle = `rgba(16, 185, 129, ${this.opacity})`;

                ctx.fillText(this.text, 0, 0);
                ctx.restore();
            }
        }

        class ParticleDot extends PhysicsElement {
            constructor(x, y) {
                super(x, y);
                this.size = Math.random() * 2 + 1;
                this.opacity = Math.random() * 0.3 + 0.1;
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = 'rgba(59, 130, 246, 1)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        class SimpleChart extends PhysicsElement {
            constructor(x, y) {
                super(x, y);
                this.width = Math.random() * 20 + 15;
                this.height = Math.random() * 15 + 10;
                this.opacity = Math.random() * 0.3 + 0.1;
                this.type = Math.random() > 0.5 ? 'bar' : 'line';
                this.bars = [Math.random(), Math.random(), Math.random()];
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation * 0.5);
                ctx.globalAlpha = this.opacity;

                if (this.type === 'bar') {
                    const barWidth = this.width / 3;
                    ctx.fillStyle = 'rgba(59, 130, 246, 1)'; // Blue
                    this.bars.forEach((h, i) => {
                        const barHeight = h * this.height;
                        ctx.fillRect(i * barWidth - this.width / 2, this.height / 2 - barHeight, barWidth - 2, barHeight);
                    });
                } else {
                    ctx.strokeStyle = 'rgba(147, 51, 234, 1)'; // Purple
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(-this.width / 2, this.height / 2 - this.bars[0] * this.height);
                    ctx.lineTo(0, this.height / 2 - this.bars[1] * this.height);
                    ctx.lineTo(this.width / 2, this.height / 2 - this.bars[2] * this.height);
                    ctx.stroke();
                }

                ctx.restore();
            }
        }

        class NeuralNetwork extends PhysicsElement {
            constructor(x, y) {
                super(x, y);
                this.width = 30;
                this.height = 30;
                this.opacity = Math.random() * 0.3 + 0.15;
                this.layers = [2, 3, 2]; // Input, Hidden, Output
                this.nodeRadius = 2;
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation * 0.2); // Slower rotation
                ctx.globalAlpha = this.opacity;

                const layerGap = this.width / (this.layers.length - 1);

                // Draw connections first
                ctx.strokeStyle = 'rgba(147, 51, 234, 0.6)'; // Purple lines
                ctx.lineWidth = 0.5;

                for (let i = 0; i < this.layers.length - 1; i++) {
                    const currentLayerSize = this.layers[i];
                    const nextLayerSize = this.layers[i + 1];
                    const currentX = i * layerGap - this.width / 2;
                    const nextX = (i + 1) * layerGap - this.width / 2;

                    for (let j = 0; j < currentLayerSize; j++) {
                        const currentY = (j - (currentLayerSize - 1) / 2) * 8;

                        for (let k = 0; k < nextLayerSize; k++) {
                            const nextY = (k - (nextLayerSize - 1) / 2) * 8;
                            ctx.beginPath();
                            ctx.moveTo(currentX, currentY);
                            ctx.lineTo(nextX, nextY);
                            ctx.stroke();
                        }
                    }
                }

                // Draw nodes
                ctx.fillStyle = 'rgba(59, 130, 246, 1)'; // Blue nodes
                for (let i = 0; i < this.layers.length; i++) {
                    const layerSize = this.layers[i];
                    const x = i * layerGap - this.width / 2;

                    for (let j = 0; j < layerSize; j++) {
                        const y = (j - (layerSize - 1) / 2) * 8;
                        ctx.beginPath();
                        ctx.arc(x, y, this.nodeRadius, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }

                ctx.restore();
            }
        }

        function initElements() {
            elements = [];
            const width = canvas.width;
            const height = canvas.height;

            // Create Grid of Elements
            const cols = Math.floor(width / 80);
            const rows = Math.floor(height / 80);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * 80 + Math.random() * 40;
                    const y = j * 80 + Math.random() * 40;

                    const rand = Math.random();
                    if (rand < 0.15) {
                        elements.push(new DataSymbol(x, y, symbols[Math.floor(Math.random() * symbols.length)]));
                    } else if (rand < 0.25) {
                        elements.push(new DataMetric(x, y, metrics[Math.floor(Math.random() * metrics.length)]));
                    } else if (rand < 0.30) {
                        elements.push(new SimpleChart(x, y));
                    } else if (rand < 0.35) {
                        elements.push(new NeuralNetwork(x, y));
                    } else if (rand < 0.6) {
                        elements.push(new ParticleDot(x, y));
                    }
                }
            }
        }

        function resizeCanvas() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            initElements();
        }

        // Interaction - Listen on window to capture movement over content
        function handleMouseMove(e) {
            const rect = canvas.getBoundingClientRect();
            const scrollX = window.scrollX || window.pageXOffset;
            const scrollY = window.scrollY || window.pageYOffset;

            // Calculate mouse position relative to canvas
            // We need to account for scroll if the canvas position is affected by it
            // Since canvas is fixed/absolute in hero, getBoundingClientRect is best

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Only interact if mouse is near the hero section
            // Allow some buffer for smooth entry/exit
            if (y > -100 && y < rect.height + 100 && x > -100 && x < rect.width + 100) {
                mouse.x = x;
                mouse.y = y;

                // Update CSS variables for radial gradient
                // Clamp values to keep gradient within bounds if needed, but letting it bleed is fine
                heroBackground.style.setProperty('--x', `${x}px`);
                heroBackground.style.setProperty('--y', `${y}px`);
            } else {
                // If far away, reset to center or just stop updating to save performance
                mouse.x = -1000;
                mouse.y = -1000;
            }
        }

        function handleTouchMove(e) {
            // Don't prevent default here to allow scrolling on mobile
            const touch = e.touches[0];
            const rect = canvas.getBoundingClientRect();
            const x = touch.clientX - rect.left;
            const y = touch.clientY - rect.top;

            if (y > -100 && y < rect.height + 100 && x > -100 && x < rect.width + 100) {
                mouse.x = x;
                mouse.y = y;

                heroBackground.style.setProperty('--x', `${x}px`);
                heroBackground.style.setProperty('--y', `${y}px`);
            }
        }

        // Attach listeners to window to capture events everywhere
        // This ensures interaction works even when hovering over text, buttons, images, etc.
        window.addEventListener('mousemove', handleMouseMove);

        // For touch, we can stick to the container or window, but window is safer for consistency
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('touchstart', handleTouchMove, { passive: true });

        // Cleanup function to remove window listeners
        // This is important if the component unmounts (though in this static site it likely won't)
        const cleanup = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchstart', handleTouchMove);
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            elements.forEach(el => {
                el.update();
                el.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        }

        animate();

        return cleanup;
    }

    // Initialize all hero animations
    function initHeroAnimations() {
        try {
            initTypewriter();
            initMetricsCounter();
            initAntigravityBackground();
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
        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Listen to scroll events with throttling
        let ticking = false;
        window.addEventListener('scroll', function () {
            if (!ticking) {
                window.requestAnimationFrame(function () {
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

        downloadBtn.addEventListener('click', function (e) {
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
            loadProjects(6, true); // Limit to 6 featured projects on the home page
        }

        // Load certifications from external file
        // Load certifications from external file
        if (document.getElementById('allCertificationsContainer')) {
            console.log('📄 Detected certifications.html page');
            loadAllCertifications();
        } else {
            loadCertifications(3); // Limit to 3 certifications on the home page
        }

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