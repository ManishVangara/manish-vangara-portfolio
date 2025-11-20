// ============================================
// MAIN MODULE - Application Initialization
// ============================================

import {
    loadProjects, loadAllProjects, loadCertifications, loadAllCertifications,
    loadSkills, loadExperience, loadEducation, loadHobbies,
    loadMyStory, loadAskMe, loadLessons
} from './data-loader.js?v=2';
import {
    initThemeToggle, initHamburgerMenu, initDropdown, initContactButton,
    initNavigation, initBackToTop, initDownloadResume
} from './ui-interactions.js?v=2';
import { initHeroAnimations } from './animations.js?v=2';
import { updateFooterYear } from './utils.js?v=2';

/**
 * Initialize all functionality
 */
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
    if (document.getElementById('experienceContainer')) {
        loadExperience();
    }

    // Load education from external file
    if (document.getElementById('educationContainer')) {
        loadEducation();
    }

    // Load skills from external file
    if (document.getElementById('skillsContainer')) {
        loadSkills();
    }

    // Load hobbies from external file
    if (document.getElementById('hobbiesContainer')) {
        loadHobbies();
    }

    // Load my story from external file
    if (document.getElementById('storyContainer')) {
        loadMyStory();
    }

    // Load ask me about from external file
    if (document.getElementById('askMeContainer')) {
        loadAskMe();
    }

    // Load lessons learned from external file
    if (document.getElementById('lessonsContainer')) {
        loadLessons();
    }

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
