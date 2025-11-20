// ============================================
// ANIMATIONS MODULE
// ============================================

/**
 * Initialize typewriter effect for hero text
 */
export function initTypewriter() {
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

/**
 * Animate counter from 0 to target value
 * @param {HTMLElement} element - Element to animate
 * @param {number} target - Target number
 */
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

/**
 * Initialize metrics counter animation
 */
export function initMetricsCounter() {
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

/**
 * Initialize antigravity physics-based background animation
 */
export function initAntigravityBackground() {
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

/**
 * Initialize all hero animations
 */
export function initHeroAnimations() {
    try {
        initTypewriter();
        initMetricsCounter();
        initAntigravityBackground();
    } catch (error) {
        console.error('Error initializing hero animations:', error);
        // Continue execution even if hero animations fail
    }
}
