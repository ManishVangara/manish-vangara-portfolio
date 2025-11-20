// ============================================
// UI INTERACTIONS MODULE
// ============================================

/**
 * Initialize theme toggle functionality
 */
export function initThemeToggle() {
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

/**
 * Initialize hamburger menu toggle
 */
export function initHamburgerMenu() {
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

/**
 * Initialize dropdown navigation
 */
export function initDropdown() {
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

/**
 * Initialize contact button
 */
export function initContactButton() {
    const contactBtn = document.getElementById('contactBtn');

    if (!contactBtn) return;

    contactBtn.addEventListener('click', function () {
        window.location.href = 'mailto:your.email@gmail.com';
    });
}

/**
 * Initialize smooth scroll and active navigation
 */
export function initNavigation() {
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

/**
 * Initialize back to top button
 */
export function initBackToTop() {
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

/**
 * Initialize download resume animation
 */
export function initDownloadResume() {
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
