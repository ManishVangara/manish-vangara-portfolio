// ============================================
// COMPONENTS MODULE
// ============================================

import { escapeHtml } from './utils.js';

/**
 * Create a project card element
 * @param {Object} project - Project data
 * @returns {HTMLElement} Project card element
 */
export function createProjectCard(project) {
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

/**
 * Create a certification card element
 * @param {Object} certification - Certification data
 * @returns {HTMLElement} Certification card element
 */
export function createCertificationCard(certification) {
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

/**
 * Create a skill category card with pills
 * @param {Object} category - Skill category data
 * @param {number} categoryIndex - Index of the category
 * @returns {HTMLElement} Skill category card element
 */
export function createSkillCategoryCard(category, categoryIndex) {
    const categoryCard = document.createElement('div');
    categoryCard.className = 'skill-category';

    // Create category title
    const title = document.createElement('div');
    title.className = 'skill-category-title';
    title.textContent = category.category;

    // Create pills container
    const pillsContainer = document.createElement('div');
    pillsContainer.className = 'skill-pills';

    // Create individual skill pills
    category.skills.forEach(skill => {
        const pill = document.createElement('div');
        pill.className = 'skill-pill';
        pill.textContent = skill;

        pillsContainer.appendChild(pill);
    });

    // Assemble the category card
    categoryCard.appendChild(title);
    categoryCard.appendChild(pillsContainer);

    return categoryCard;
}

/**
 * Create an experience timeline item
 * @param {Object} experience - Experience data
 * @returns {HTMLElement} Experience item element
 */
export function createExperienceItem(experience) {
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

/**
 * Create an education timeline item
 * @param {Object} education - Education data
 * @returns {HTMLElement} Education item element
 */
export function createEducationItem(education) {
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

/**
 * Create a hobby card element
 * @param {Object} hobby - Hobby data
 * @returns {HTMLElement} Hobby card element
 */
export function createHobbyCard(hobby) {
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

/**
 * Create an Ask Me flip card
 * @param {Object} topic - Ask Me topic data
 * @returns {HTMLElement} Ask Me card element
 */
export function createAskMeCard(topic) {
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

/**
 * Create a lesson card element
 * @param {Object} lesson - Lesson data
 * @returns {HTMLElement} Lesson card element
 */
export function createLessonCard(lesson) {
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

/**
 * Create My Story split-screen layout
 * @param {Array} storyData - Array of story items
 * @param {HTMLElement} storyContainer - Container element
 */
export function createMyStoryLayout(storyData, storyContainer) {
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
}
