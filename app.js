const { createApp } = Vue;
const { createRouter, createWebHistory } = VueRouter;

// Home Component
const Home = {
    template: `
        <div>
            <a href="#main" class="skip-link">Skip to main content</a>
            <main id="main" role="main">
                <section id="about" class="about" aria-labelledby="about-heading">
                    <div class="container">
                        <div class="about-content">
                            <div class="about-text">
                                <h2 id="about-heading" class="section-title">About Me</h2>
                                <p>Hello! I'm Jimmie Jephson, an Accessibility Specialist and Senior Frontend Developer with a deep passion for creating inclusive, user-centered digital experiences. I specialize in building accessible web applications that meet the highest standards of usability and web accessibility guidelines, working extensively with major Swedish and international companies to deliver exceptional user experiences.</p>
                                <p>My expertise lies in agile user interface development with a strong focus on the design aspects of frontend work. I advocate for web accessibility and web standards, ensuring that every project I work on is inclusive and accessible to all users. My experience has been deeply involved with commerce-related web projects and experience solutions, where understanding end customer needs has been central to my development approach.</p>
                                <p>Development has been a huge part of my life, and I'm constantly evolving my skills and broadening my perspectives. I believe in creating digital experiences that not only meet business objectives but also provide exceptional usability for all users, regardless of their abilities. When I'm not coding, you can find me exploring new accessibility techniques, contributing to web standards discussions, or mentoring other developers in inclusive design practices.</p>
                                <p>Currently, I work as an Accessibility Specialist at Axess Lab, where I focus on ensuring digital products meet the highest standards of accessibility and usability. My role involves conducting accessibility audits, providing expert guidance on WCAG compliance, and collaborating with development teams to implement inclusive design practices across various projects.</p>
                                <div class="skills">
                                    <h3>Skills & Expertise</h3>
                                    <ul class="skills-list">
                                        <li>Frontend Development: React, Vue.js, TypeScript</li>
                                        <li>Accessibility: WCAG 2.1 AA/AAA, ARIA, Screen Readers</li>
                                        <li>Web Standards: HTML5, CSS3, Semantic Markup</li>
                                        <li>User Experience: Usability Testing, User Research</li>
                                        <li>E-commerce: Shopify, WooCommerce, Custom Solutions</li>
                                        <li>Design Systems: Component Libraries, Design Tokens</li>
                                        <li>Performance: Core Web Vitals, Optimization</li>
                                        <li>Agile Development: Scrum, User Stories, Iterative Design</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="about-image">
                                <img src="images/assets/jimmie.png" 
                                     alt="Jimmie Jephson - Professional headshot" 
                                     loading="lazy">
                            </div>
                        </div>
                    </div>
                </section>
                <section id="clients" class="clients" aria-labelledby="clients-heading">
                    <div class="container">
                        <h2 id="clients-heading" class="section-title visually-hidden">Client Portfolio</h2>
                        <div class="clients-grid" role="list" aria-label="Client company logos">
                            <div class="client-logo" role="listitem" v-for="client in clients" :key="client.name">
                                <img :src="client.image" :alt="client.name + ' logo'" loading="lazy">
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact" class="contact" aria-labelledby="contact-heading">
                    <div class="container">
                        <h2 id="contact-heading" class="section-title">Get In Touch</h2>
                        <p class="contact-text">Looking for an accessibility specialist and senior frontend developer for your next project? I'm available for consulting, full-time positions, and accessibility-focused development roles. Let's discuss how I can help create inclusive, user-centered digital experiences.</p>
                        <div class="contact-info" role="list" aria-label="Contact information">
                            <div class="contact-item" role="listitem">
                                <h3>Email</h3>
                                <a href="mailto:jimmie.jephson@gmail.com" aria-label="Send email to jimmie.jephson@gmail.com">jimmie.jephson@gmail.com</a>
                            </div>
                            <div class="contact-item" role="listitem">
                                <h3>LinkedIn</h3>
                                <a href="https://linkedin.com/in/jimmiejephson" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn profile (opens in new tab)">linkedin.com/in/jimmiejephson</a>
                            </div>
                            <div class="contact-item" role="listitem">
                                <h3>GitHub</h3>
                                <a href="https://github.com/jimmiejephson" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub profile (opens in new tab)">github.com/jimmiejephson</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    `,
    data() {
        return {
            clients: [
                { name: 'Specsavers', image: 'images/specsavers.png' },
                { name: 'Polestar', image: 'images/polestar.png' },
                { name: 'Ving', image: 'images/ving.png' },
                { name: 'Volvo', image: 'images/volvo.png' },
                { name: 'Zalando', image: 'images/zalando.png' },
                { name: 'SR', image: 'images/sr.png' },
                { name: 'NK', image: 'images/nk.png' },
                { name: 'Kicks', image: 'images/kicks.png' },
                { name: 'Apoteket', image: 'images/apoteket.png' },
                { name: 'SVFF', image: 'images/svff.png' },
                { name: 'Sandvik', image: 'images/sandvik.png' },
                { name: 'Swedol', image: 'images/swedol.png' },
                { name: 'Kustom', image: 'images/kustom.svg' },
                { name: 'Svea', image: 'images/svea.png' },
                { name: 'Keystone', image: 'images/keystone.png' },
                { name: 'Telia', image: 'images/telia.png' },
                { name: 'ICA', image: 'images/ica.png' },
                { name: 'Verisure', image: 'images/verisure.png' },
                { name: 'Skanska', image: 'images/skanska.png' },
                { name: 'Nextory', image: 'images/nextory.png' },
                { name: 'Ahlsell', image: 'images/ahlsell.png' },
                { name: 'Coop', image: 'images/coop.png' },
                { name: 'NCS', image: 'images/ncs.png' },
                { name: 'Nobia', image: 'images/nobia.png' }
            ]
        };
    }
};

// Portfolio Page Component Template
const PortfolioPage = {
    props: ['title', 'content', 'blocks'],
    template: `
        <main id="main" role="main" class="portfolio-page">
            <div class="container">
                <div class="portfolio-content">
                    <div class="portfolio-text">
                        <h1 class="portfolio-title">{{ title }}</h1>
                        <div class="portfolio-description" v-html="content"></div>
                    </div>
                    <div class="portfolio-blocks">
                        <div 
                            v-for="(block, index) in blocks" 
                            :key="index"
                            class="portfolio-block"
                            :class="'portfolio-block-' + (index + 1)"
                        >
                            <h3 class="block-title">{{ block.title }}</h3>
                            <p class="block-content">{{ block.content }}</p>
                            <ul v-if="block.items" class="block-list">
                                <li v-for="(item, itemIndex) in block.items" :key="itemIndex">{{ item }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    `
};

// Front End Dev Portfolio Page
const FrontEndDevPage = {
    extends: PortfolioPage,
    data() {
        return {
            title: 'Front End Developer',
            content: `
                <p>As a Front End Developer, I specialize in creating beautiful, accessible, and performant web experiences. My work focuses on building user interfaces that are not only visually appealing but also inclusive and optimized for all users.</p>
                <p>I have extensive experience working with modern JavaScript frameworks and libraries, including React, Vue.js, and TypeScript. My approach combines technical excellence with a deep understanding of user needs, ensuring that every interface I build is both functional and delightful.</p>
                <p>Throughout my career, I've worked on a wide range of projects, from e-commerce platforms to complex web applications. I'm passionate about web standards, accessibility, and creating experiences that work seamlessly across all devices and browsers.</p>
            `,
            blocks: [
                {
                    title: 'Technologies',
                    content: 'Modern frontend technologies I work with',
                    items: [
                        'React & Vue.js',
                        'TypeScript & JavaScript',
                        'HTML5 & CSS3',
                        'Web Components',
                        'Progressive Web Apps'
                    ]
                },
                {
                    title: 'Key Skills',
                    content: 'Core competencies in frontend development',
                    items: [
                        'Responsive Design',
                        'Performance Optimization',
                        'Accessibility (WCAG)',
                        'Component Architecture',
                        'State Management'
                    ]
                },
                {
                    title: 'Experience',
                    content: 'Years of hands-on development experience',
                    items: [
                        '10+ years in frontend development',
                        'E-commerce platforms',
                        'Design systems',
                        'Cross-browser compatibility',
                        'Mobile-first approach'
                    ]
                }
            ]
        };
    }
};

// Scrum Master Portfolio Page
const ScrumMasterPage = {
    extends: PortfolioPage,
    data() {
        return {
            title: 'Scrum Master',
            content: `
                <p>As a Scrum Master, I facilitate agile development processes and help teams deliver high-quality software efficiently. I believe in the power of collaboration, continuous improvement, and creating an environment where teams can thrive.</p>
                <p>My approach focuses on removing impediments, facilitating effective ceremonies, and ensuring that teams understand and follow agile principles. I work closely with product owners, developers, and stakeholders to ensure smooth project delivery.</p>
                <p>I have experience leading multiple teams across various projects, from small startups to large enterprise applications. My goal is always to help teams become more self-organizing, productive, and happy in their work.</p>
            `,
            blocks: [
                {
                    title: 'Agile Practices',
                    content: 'Core agile methodologies I facilitate',
                    items: [
                        'Sprint Planning',
                        'Daily Standups',
                        'Sprint Reviews',
                        'Retrospectives',
                        'Backlog Refinement'
                    ]
                },
                {
                    title: 'Team Facilitation',
                    content: 'Skills in team leadership and coaching',
                    items: [
                        'Conflict Resolution',
                        'Stakeholder Management',
                        'Process Improvement',
                        'Team Coaching',
                        'Metrics & Reporting'
                    ]
                },
                {
                    title: 'Certifications',
                    content: 'Professional certifications and training',
                    items: [
                        'Certified Scrum Master (CSM)',
                        'Agile Leadership',
                        'Kanban Practitioner',
                        'SAFe Certified',
                        'Continuous Learning'
                    ]
                }
            ]
        };
    }
};

// Game Industry Portfolio Page
const GameIndustryPage = {
    extends: PortfolioPage,
    data() {
        return {
            title: 'Game Industry',
            content: `
                <p>My passion for game development combines technical expertise with creative problem-solving. I've worked on various game projects, from indie titles to larger productions, focusing on creating engaging user experiences.</p>
                <p>In the game industry, I've contributed to both web-based games and game-related web platforms. My experience includes working with game engines, implementing game mechanics, and creating tools that support game development workflows.</p>
                <p>I'm particularly interested in how web technologies can enhance gaming experiences, whether through browser-based games, game launchers, or community platforms that connect players.</p>
            `,
            blocks: [
                {
                    title: 'Game Development',
                    content: 'Areas of expertise in game development',
                    items: [
                        'Web-based Games',
                        'Game UI/UX Design',
                        'Game Mechanics',
                        'Player Engagement',
                        'Performance Optimization'
                    ]
                },
                {
                    title: 'Technologies',
                    content: 'Technologies used in game projects',
                    items: [
                        'HTML5 Canvas',
                        'WebGL',
                        'Game Engines',
                        'Real-time Systems',
                        'Multiplayer Integration'
                    ]
                },
                {
                    title: 'Projects',
                    content: 'Types of game projects I've worked on',
                    items: [
                        'Indie Game Development',
                        'Game Platforms',
                        'Community Tools',
                        'Game Analytics',
                        'Player Portals'
                    ]
                }
            ]
        };
    }
};

// Manager Portfolio Page
const ManagerPage = {
    extends: PortfolioPage,
    data() {
        return {
            title: 'Manager',
            content: `
                <p>As a Manager, I lead development teams and drive technical strategy while ensuring projects are delivered on time and to the highest quality standards. My leadership style emphasizes empowerment, clear communication, and continuous improvement.</p>
                <p>I've managed teams ranging from small groups of 3-5 developers to larger cross-functional teams of 15+ members. My focus is on creating an environment where team members can grow, learn, and contribute their best work.</p>
                <p>Beyond people management, I'm involved in technical decision-making, architecture planning, and ensuring that our development practices align with business goals while maintaining high technical standards.</p>
            `,
            blocks: [
                {
                    title: 'Leadership',
                    content: 'Core leadership competencies',
                    items: [
                        'Team Building',
                        'Performance Management',
                        'Career Development',
                        'Strategic Planning',
                        'Change Management'
                    ]
                },
                {
                    title: 'Project Management',
                    content: 'Project delivery and coordination',
                    items: [
                        'Agile & Scrum',
                        'Resource Planning',
                        'Risk Management',
                        'Stakeholder Communication',
                        'Quality Assurance'
                    ]
                },
                {
                    title: 'Technical Management',
                    content: 'Technical leadership and strategy',
                    items: [
                        'Architecture Decisions',
                        'Code Reviews',
                        'Technical Standards',
                        'Tool Selection',
                        'Best Practices'
                    ]
                }
            ]
        };
    }
};

// Projects Listing Page
const ProjectsPage = {
    template: `
        <main id="main" role="main" class="projects-page">
            <div class="container">
                <h1 class="section-title">Current Projects</h1>
                <p class="projects-intro">Here are the projects and initiatives I'm currently working on. These represent ongoing work, active collaborations, and projects in various stages of development.</p>
                <div class="projects-list">
                    <article 
                        v-for="project in projects" 
                        :key="project.id"
                        class="project-item"
                        :class="'project-item-' + project.status"
                    >
                        <div class="project-header">
                            <h2 class="project-title">{{ project.title }}</h2>
                            <span class="project-status" :class="'status-' + project.status">{{ project.status }}</span>
                        </div>
                        <p class="project-description">{{ project.description }}</p>
                        <div class="project-details">
                            <div class="project-meta">
                                <span class="project-type">{{ project.type }}</span>
                                <span class="project-date">Started: {{ project.startDate }}</span>
                            </div>
                            <div v-if="project.technologies" class="project-technologies">
                                <span 
                                    v-for="tech in project.technologies" 
                                    :key="tech"
                                    class="tech-tag"
                                >{{ tech }}</span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </main>
    `,
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: 'Accessibility Audit Platform',
                    description: 'Developing a comprehensive platform for conducting accessibility audits and generating WCAG compliance reports. This tool helps teams identify and fix accessibility issues early in the development process.',
                    type: 'Web Application',
                    status: 'active',
                    startDate: 'January 2024',
                    technologies: ['Vue.js', 'TypeScript', 'Node.js', 'WCAG']
                },
                {
                    id: 2,
                    title: 'Design System Documentation',
                    description: 'Creating a living design system documentation site that serves as a single source of truth for design tokens, components, and usage guidelines across multiple projects.',
                    type: 'Documentation',
                    status: 'active',
                    startDate: 'March 2024',
                    technologies: ['React', 'Storybook', 'Design Tokens']
                },
                {
                    id: 3,
                    title: 'E-commerce Performance Optimization',
                    description: 'Working on optimizing a large-scale e-commerce platform to improve Core Web Vitals and overall user experience. Focus on reducing load times and improving interactivity metrics.',
                    type: 'Performance',
                    status: 'active',
                    startDate: 'February 2024',
                    technologies: ['Performance', 'Optimization', 'Monitoring']
                },
                {
                    id: 4,
                    title: 'Mobile App Accessibility',
                    description: 'Leading an initiative to improve accessibility in a mobile application, ensuring it meets WCAG guidelines and provides an excellent experience for users with disabilities.',
                    type: 'Mobile',
                    status: 'planning',
                    startDate: 'April 2024',
                    technologies: ['Mobile', 'Accessibility', 'iOS', 'Android']
                },
                {
                    id: 5,
                    title: 'Developer Training Program',
                    description: 'Creating and delivering training programs on web accessibility and inclusive design practices for development teams. Includes workshops, documentation, and hands-on exercises.',
                    type: 'Education',
                    status: 'active',
                    startDate: 'January 2024',
                    technologies: ['Training', 'Documentation', 'Workshops']
                }
            ]
        };
    }
};

// App Component with Navigation
const App = {
    template: `
        <div>
            <a href="#main" class="skip-link">Skip to main content</a>
            <header class="header">
                <nav class="nav" role="navigation" aria-label="Primary site navigation">
                    <div class="nav-container">
                        <router-link to="/" class="logo" aria-label="Jimmie Jephson - Home">🚀 Jimmie</router-link>
                        <ul class="nav-menu" role="menubar">
                            <li role="none">
                                <router-link to="/" class="nav-link" role="menuitem">Home</router-link>
                            </li>
                            <li role="none">
                                <router-link to="/portfolio/frontend" class="nav-link" role="menuitem">Front End Dev</router-link>
                            </li>
                            <li role="none">
                                <router-link to="/portfolio/scrum" class="nav-link" role="menuitem">Scrum Master</router-link>
                            </li>
                            <li role="none">
                                <router-link to="/portfolio/game-industry" class="nav-link" role="menuitem">Game Industry</router-link>
                            </li>
                            <li role="none">
                                <router-link to="/portfolio/manager" class="nav-link" role="menuitem">Manager</router-link>
                            </li>
                            <li role="none">
                                <router-link to="/projects" class="nav-link" role="menuitem">Projects</router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <router-view></router-view>
            <footer class="footer">
                <div class="container">
                    <p>&copy; 2024 deployonfriday.dev. All rights reserved.</p>
                </div>
            </footer>
        </div>
    `
};

// Router Configuration
const routes = [
    { path: '/', component: Home },
    { path: '/portfolio/frontend', component: FrontEndDevPage },
    { path: '/portfolio/scrum', component: ScrumMasterPage },
    { path: '/portfolio/game-industry', component: GameIndustryPage },
    { path: '/portfolio/manager', component: ManagerPage },
    { path: '/projects', component: ProjectsPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// Create and mount the app
const app = createApp(App);
app.use(router);
app.mount('#app');
