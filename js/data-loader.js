// ============================================
// DATA LOADER MODULE
// ============================================

import {
    createProjectCard, createCertificationCard, createSkillCategoryCard,
    createExperienceItem, createEducationItem, createHobbyCard,
    createAskMeCard, createLessonCard, createMyStoryLayout
} from './components.js';

/**
 * Load projects from JSON file
 * @param {number} limit - Maximum number of projects to load
 * @param {boolean} featuredOnly - Only load featured projects
 */
export async function loadProjects(limit = 6, featuredOnly = false) {
    const projectsContainer = document.getElementById('projectsContainer');

    if (!projectsContainer) return;

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
        if (projectsContainer) projectsContainer.innerHTML = '<p class="loading">Failed to load projects.</p>';
    }
}

/**
 * Load all projects for projects.html page
 */
export async function loadAllProjects() {
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

/**
 * Load certifications from JSON file
 * @param {number} limit - Maximum number of certifications to load
 */
export async function loadCertifications(limit = null) {
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

/**
 * Load all certifications for certifications.html page
 */
export async function loadAllCertifications() {
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

/**
 * Load skills from JSON file
 */
export async function loadSkills() {
    const skillsContainer = document.getElementById('skillsContainer');

    if (!skillsContainer) return;

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
        if (skillsContainer) skillsContainer.innerHTML = '<p class="loading">Failed to load skills.</p>';
    }
}

/**
 * Load experience from JSON file
 */
export async function loadExperience() {
    const experienceContainer = document.getElementById('experienceContainer');

    if (!experienceContainer) return;

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
        if (experienceContainer) experienceContainer.innerHTML = '<p class="loading">Failed to load experience.</p>';
    }
}

/**
 * Load education from JSON file
 */
export async function loadEducation() {
    const educationContainer = document.getElementById('educationContainer');

    if (!educationContainer) return;

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
        if (educationContainer) educationContainer.innerHTML = '<p class="loading">Failed to load education.</p>';
    }
}

/**
 * Load hobbies from JSON file
 */
export async function loadHobbies() {
    const hobbiesContainer = document.getElementById('hobbiesContainer');

    if (!hobbiesContainer) return;

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
        if (hobbiesContainer) hobbiesContainer.innerHTML = '<p class="loading">Failed to load hobbies.</p>';
    }
}

/**
 * Load My Story from JSON file
 */
export async function loadMyStory() {
    const storyContainer = document.getElementById('storyContainer');

    if (!storyContainer) return;

    try {
        const response = await fetch('data/mystory.json');
        if (!response.ok) throw new Error('Failed to load story');
        const storyData = await response.json();

        createMyStoryLayout(storyData, storyContainer);

    } catch (error) {
        console.error('Error loading story:', error);
        if (storyContainer) storyContainer.innerHTML = '<p class="loading">Failed to load story.</p>';
    }
}

/**
 * Load Ask Me topics from JSON file
 */
export async function loadAskMe() {
    const askMeContainer = document.getElementById('askMeContainer');

    if (!askMeContainer) return;

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
        if (askMeContainer) askMeContainer.innerHTML = '<p class="loading">Failed to load topics.</p>';
    }
}

/**
 * Load lessons from JSON file
 */
export async function loadLessons() {
    const lessonsContainer = document.getElementById('lessonsContainer');

    if (!lessonsContainer) return;

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
        if (lessonsContainer) lessonsContainer.innerHTML = '<p class="loading">Failed to load lessons.</p>';
    }
}
