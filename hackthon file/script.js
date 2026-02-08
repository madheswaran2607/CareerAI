// ===== CAREER DATA & KNOWLEDGE BASE =====
const careerDatabase = {
    coding: {
        careers: ['Software Engineer', 'Full Stack Developer', 'Backend Developer', 'Frontend Developer', 'DevOps Engineer'],
        skills: ['Python', 'JavaScript', 'Java', 'C++', 'React', 'Node.js'],
        companies: ['Google', 'Microsoft', 'Amazon', 'Apple', 'Meta', 'Netflix']
    },
    design: {
        careers: ['UI/UX Designer', 'Graphic Designer', 'Product Designer', 'Motion Designer'],
        skills: ['Figma', 'Adobe XD', 'Sketch', 'Adobe Creative Suite', 'Prototyping'],
        companies: ['Apple', 'Adobe', 'Figma', 'Canva', 'Dribbble']
    },
    'data analysis': {
        careers: ['Data Analyst', 'Business Analyst', 'Data Scientist', 'Analytics Engineer'],
        skills: ['Python', 'SQL', 'Tableau', 'Power BI', 'Excel', 'Statistics'],
        companies: ['Google', 'Microsoft', 'Amazon', 'IBM', 'Deloitte']
    },
    'cybersecurity': {
        careers: ['Security Engineer', 'Penetration Tester', 'Security Analyst', 'Chief Information Security Officer'],
        skills: ['Network Security', 'Linux', 'Python', 'Ethical Hacking', 'Cryptography'],
        companies: ['Cisco', 'Palo Alto Networks', 'CrowdStrike', 'IBM', 'Microsoft']
    },
    marketing: {
        careers: ['Digital Marketer', 'Content Strategist', 'SEO Specialist', 'Social Media Manager'],
        skills: ['Google Analytics', 'SEO', 'Content Writing', 'Social Media', 'Email Marketing'],
        companies: ['Google', 'HubSpot', 'Mailchimp', 'Meta', 'Hootsuite']
    }
};

const domainLearning = {
    'Web Development': [
        'Learn HTML, CSS, JavaScript fundamentals',
        'Master React or Vue.js framework',
        'Backend development (Node.js or Django)',
        'Database design and SQL',
        'Deploy to cloud platforms',
        'Learn Git and version control',
        'API development and integration'
    ],
    'Data Science': [
        'Python programming basics',
        'Statistics and probability',
        'Data manipulation with Pandas',
        'Data visualization with Matplotlib/Seaborn',
        'Machine Learning algorithms',
        'Deep Learning with TensorFlow/PyTorch',
        'Big Data technologies (Spark, Hadoop)'
    ],
    'Cybersecurity': [
        'Networking fundamentals (TCP/IP)',
        'Linux system administration',
        'Cryptography basics',
        'Ethical hacking and penetration testing',
        'Network security and firewalls',
        'Incident response',
        'Security compliance and standards'
    ],
    'Cloud Computing': [
        'AWS fundamentals and certification',
        'Azure platform overview',
        'Google Cloud Platform basics',
        'Containerization (Docker)',
        'Kubernetes orchestration',
        'Infrastructure as Code (Terraform)',
        'Serverless architecture'
    ],
    'Mobile Development': [
        'Swift for iOS development',
        'Kotlin for Android development',
        'React Native cross-platform',
        'UI/UX principles for mobile',
        'API integration',
        'App store deployment',
        'Mobile performance optimization'
    ]
};

const prioritySkills2024 = [
    { skill: 'Artificial Intelligence & Machine Learning', demand: 'Critical', salary: '$150K+' },
    { skill: 'Cloud Computing (AWS/Azure/GCP)', demand: 'Critical', salary: '$140K+' },
    { skill: 'Data Science & Analytics', demand: 'High', salary: '$130K+' },
    { skill: 'Cybersecurity', demand: 'Critical', salary: '$145K+' },
    { skill: 'DevOps & CI/CD', demand: 'High', salary: '$135K+' },
    { skill: 'Full Stack Development', demand: 'High', salary: '$125K+' },
    { skill: 'Blockchain Development', demand: 'Emerging', salary: '$140K+' },
    { skill: 'Edge Computing', demand: 'Emerging', salary: '$135K+' }
];

const jobMarketTrends = {
    'most_hired': ['Software Engineer', 'Data Analyst', 'Cloud Architect', 'Security Engineer', 'DevOps Engineer'],
    'emerging_roles': ['AI/ML Engineer', 'Blockchain Developer', 'Quantum Developer', 'Edge Computing Specialist'],
    'salary_ranges': {
        'Entry Level': '$40K - $70K',
        'Mid Level': '$80K - $120K',
        'Senior Level': '$130K - $200K+',
        'Leadership': '$180K - $300K+'
    }
};

const resumeTips = [
    'Use clear, concise language and action verbs (Led, Built, Designed)',
    'Quantify achievements with metrics and results',
    'Keep to 1-2 pages for entry-level, 2-3 for experienced',
    'Include relevant keywords for ATS (Applicant Tracking System)',
    'Show projects and GitHub links if applicable',
    'Use proper formatting with consistent fonts and spacing',
    'Focus on impact, not just responsibilities'
];

// ===== STATE MANAGEMENT =====
let userProfile = {
    name: 'Guest',
    interests: [],
    skills: []
};

// ===== UTILITY FUNCTIONS =====
function displayLoading(elementId) {
    const element = document.getElementById(elementId);
    element.innerHTML = '<span style="color: #f59e0b; animation: pulse 1.5s infinite;">⏳ Analyzing...</span>';
}

function formatText(text) {
    return text.replace(/\n/g, '<br>').replace(/•/g, '<li style="margin-left: 1.5rem;">').replace(/(?:^|\n)(?!<li)/gm, '<p>') + '</p>';
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    updateActiveNav(sectionId);
}

function updateActiveNav(sectionId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
    if (activeLink) activeLink.classList.add('active');
}

function typeWriter(element, text, speed = 30) {
    let index = 0;
    element.innerHTML = '';
    
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    type();
}

// ===== USER PROFILE =====
function updateProfile() {
    const name = document.getElementById('studentName').value.trim();
    if (name) {
        userProfile.name = name;
        document.getElementById('aiStatus').textContent = `AI System Ready | User: ${userProfile.name}`;
        showNotification(`Welcome, ${name}! Your AI career guide is ready.`);
        scrollToSection('tools');
    } else {
        showNotification('Please enter your name to get started!', 'warning');
    }
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'warning' ? '#f59e0b' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== CAREER INTEREST MAPPER =====
function careerSuggest() {
    const interest = document.getElementById('interest').value.toLowerCase().trim();
    const resultElement = document.getElementById('careerContent');
    
    if (!interest) {
        resultElement.textContent = 'Please enter an interest to analyze';
        return;
    }

    displayLoading('careerContent');
    
    setTimeout(() => {
        let careers = careerDatabase[interest]?.careers || [];
        let skills = careerDatabase[interest]?.skills || [];
        let companies = careerDatabase[interest]?.companies || [];

        if (!careers.length) {
            for (let key in careerDatabase) {
                if (key.includes(interest) || interest.includes(key)) {
                    careers = careerDatabase[key].careers;
                    skills = careerDatabase[key].skills;
                    companies = careerDatabase[key].companies;
                    break;
                }
            }
        }

        if (careers.length) {
            let result = `<strong>🎯 Career Paths for "${interest}":</strong>\n`;
            result += careers.map((c, i) => `${i + 1}. ${c}`).join('\n\n');
            result += `\n\n<strong>💡 Key Skills:</strong>\n`;
            result += skills.map((s, i) => `${i + 1}. ${s}`).join('\n');
            result += `\n\n<strong>🏢 Leading Companies:</strong>\n`;
            result += companies.map((c, i) => `${i + 1}. ${c}`).join('\n');
            resultElement.innerHTML = result.replace(/\n/g, '<br>');
        } else {
            resultElement.textContent = `No specific matches found for "${interest}". Try: ${Object.keys(careerDatabase).join(', ')}`;
        }
    }, 1500);
}

// ===== LEARNING PLAN GENERATOR =====
function domainPlan() {
    const domain = document.getElementById('domain').value.trim();
    const resultElement = document.getElementById('domainContent');

    if (!domain) {
        resultElement.textContent = 'Please enter a domain name';
        return;
    }

    displayLoading('domainContent');

    setTimeout(() => {
        let foundDomain = null;
        for (let key in domainLearning) {
            if (key.toLowerCase().includes(domain.toLowerCase())) {
                foundDomain = key;
                break;
            }
        }

        if (foundDomain) {
            let result = `<strong>📚 Learning Roadmap for ${foundDomain}:</strong>\n\n`;
            domainLearning[foundDomain].forEach((item, index) => {
                result += `Week ${index + 1}: ${item}\n`;
            });
            result += `\n<strong>⏱️ Duration:</strong> ${domainLearning[foundDomain].length} weeks\n`;
            result += `<strong>📊 Difficulty:</strong> Intermediate to Advanced`;
            resultElement.innerHTML = result.replace(/\n/g, '<br>');
        } else {
            resultElement.textContent = `Domain "${domain}" not found. Available domains: ${Object.keys(domainLearning).join(', ')}`;
        }
    }, 1500);
}

// ===== RESUME ANALYZER =====
function resumeCheck() {
    const resume = document.getElementById('resume').value.trim();
    const resultElement = document.getElementById('resumeContent');

    if (!resume) {
        resultElement.textContent = 'Please paste your resume text to analyze';
        return;
    }

    displayLoading('resumeContent');

    setTimeout(() => {
        let result = `<strong>📋 Resume Analysis Report:</strong>\n\n`;
        
        result += `<strong>✅ Recommendations:</strong>\n`;
        resumeTips.forEach((tip, i) => {
            result += `${i + 1}. ${tip}\n`;
        });

        result += `\n<strong>📊 Resume Strength:</strong> `;
        const strength = Math.floor(Math.random() * 40) + 60;
        result += `${strength}% Good\n`;

        result += `\n<strong>🔧 Improvements:</strong>\n`;
        const improvements = [
            'Add more quantifiable metrics (increased by X%, reduced by Y%)',
            'Include links to portfolio or GitHub profile',
            'Highlight leadership and collaboration experiences',
            'Use industry-specific keywords for your field'
        ];
        improvements.forEach((imp, i) => {
            result += `${i + 1}. ${imp}\n`;
        });

        resultElement.innerHTML = result.replace(/\n/g, '<br>');
        showNotification('Resume analysis complete!');
    }, 2000);
}

// ===== FILE UPLOAD HANDLING & THEME TOGGLE =====
function setupUploaderAndToggle() {
    const fileInput = document.getElementById('resumeFile');
    const parseBtn = document.getElementById('parseFileBtn');
    const textarea = document.getElementById('resume');
    const dropZone = document.querySelector('.uploader');

    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                showNotification(`Loaded file: ${file.name}`);
            }
        });
    }

    if (parseBtn) {
        parseBtn.addEventListener('click', () => {
            const file = fileInput.files && fileInput.files[0];
            if (!file) {
                showNotification('Please choose a file first.', 'warning');
                return;
            }

            const reader = new FileReader();
            reader.onload = function(event) {
                // For PDFs/DOCs proper parsing requires server-side or libraries.
                // For now parse text/plain and docs saved as .txt will work; we inject fallback text.
                const text = event.target.result;
                textarea.value = text.slice(0, 30000); // limit size
                showNotification('File parsed into textbox. Click Analyze.');
            };

            if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
                reader.readAsText(file);
            } else {
                // For other formats, attempt to read as text (some browsers return binary garbage)
                reader.readAsText(file);
            }
        });
    }

    // drag & drop support
    if (dropZone) {
        dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.style.opacity = 0.9; });
        dropZone.addEventListener('dragleave', (e) => { e.preventDefault(); dropZone.style.opacity = 1; });
        dropZone.addEventListener('drop', (e) => {
            e.preventDefault(); dropZone.style.opacity = 1;
            const files = e.dataTransfer.files;
            if (files && files[0]) {
                fileInput.files = files;
                showNotification(`File ready: ${files[0].name}`);
            }
        });
    }

    // Theme toggle
    const themeCheckbox = document.getElementById('themeToggle');
    const saved = localStorage.getItem('careerai-theme');
    if (saved === 'light') {
        document.body.classList.add('light-mode');
        if (themeCheckbox) themeCheckbox.checked = true;
    }

    if (themeCheckbox) {
        themeCheckbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                document.body.classList.add('light-mode');
                localStorage.setItem('careerai-theme', 'light');
            } else {
                document.body.classList.remove('light-mode');
                localStorage.setItem('careerai-theme', 'dark');
            }
        });
    }
}

// ===== COMPANY GUIDE =====
function companySuggest() {
    const field = document.getElementById('field').value.toLowerCase().trim();
    const resultElement = document.getElementById('companyContent');

    if (!field) {
        resultElement.textContent = 'Please enter a field of interest';
        return;
    }

    displayLoading('companyContent');

    setTimeout(() => {
        let companies = [];
        let foundField = false;

        for (let key in careerDatabase) {
            if (key.includes(field) || field.includes(key)) {
                companies = careerDatabase[key].companies;
                foundField = true;
                break;
            }
        }

        if (!foundField && field.length > 0) {
            companies = ['Google', 'Microsoft', 'Amazon', 'Apple', 'Meta', 'IBM', 'Intel', 'Salesforce', 'Oracle', 'Accenture'];
        }

        let result = `<strong>🏢 Top Companies in ${field.toUpperCase()}:</strong>\n\n`;
        companies.forEach((company, index) => {
            result += `${index + 1}. <strong>${company}</strong>\n`;
        });

        result += `\n<strong>💼 Why these companies?</strong>\n`;
        result += `• Leading innovation in the field\n`;
        result += `• Excellent career growth opportunities\n`;
        result += `• Competitive salaries and benefits\n`;
        result += `• Remote work options available`;

        resultElement.innerHTML = result.replace(/\n/g, '<br>');
        showNotification('Company analysis ready!');
    }, 1500);
}

// ===== SKILL ASSESSMENT =====
function benchmark() {
    const level = document.getElementById('skills').value;
    const resultElement = document.getElementById('levelContent');

    if (!level) {
        resultElement.textContent = 'Please select your skill level';
        return;
    }

    displayLoading('levelContent');

    setTimeout(() => {
        const recommendations = {
            beginner: {
                title: 'Beginner Level',
                roadmap: [
                    'Focus on fundamentals and core concepts',
                    'Complete beginner online courses (Udemy, Coursera)',
                    'Practice with simple projects',
                    'Join learning communities and forums',
                    'Timeline: 3-6 months to reach intermediate level'
                ],
                resources: ['Codecademy', 'Khan Academy', 'freeCodeCamp', 'YouTube tutorials']
            },
            intermediate: {
                title: 'Intermediate Level',
                roadmap: [
                    'Work on real-world projects',
                    'Contribute to open source',
                    'Deepen knowledge in specialized areas',
                    'Prepare for professional certifications',
                    'Timeline: 6-12 months to reach advanced level'
                ],
                resources: ['Advanced courses', 'Tech blogs', 'GitHub projects', 'Hackathons']
            },
            advanced: {
                title: 'Advanced Level',
                roadmap: [
                    'Lead projects and mentor others',
                    'Explore emerging technologies',
                    'Contribute to industry innovations',
                    'Pursue specialized certifications',
                    'Timeline: Work towards expertise and thought leadership'
                ],
                resources: ['Research papers', 'Industry conferences', 'Expert networks']
            },
            expert: {
                title: 'Expert Level',
                roadmap: [
                    'Stay at the cutting edge of technology',
                    'Publish research and innovations',
                    'Mentor and guide junior developers',
                    'Lead architectural decisions',
                    'Timeline: Continuous learning and innovation'
                ],
                resources: ['Academic journals', 'Innovation labs', 'Speaking opportunities']
            }
        };

        const data = recommendations[level];
        let result = `<strong>📊 ${data.title} Assessment</strong>\n\n`;
        result += `<strong>🎯 Your Learning Roadmap:</strong>\n`;
        data.roadmap.forEach((item, i) => {
            result += `${i + 1}. ${item}\n`;
        });
        result += `\n<strong>📚 Recommended Resources:</strong>\n`;
        data.resources.forEach((item, i) => {
            result += `${i + 1}. ${item}\n`;
        });

        resultElement.innerHTML = result.replace(/\n/g, '<br>');
        showNotification('Skill assessment complete!');
    }, 1500);
}

// ===== PRIORITY SKILLS =====
function prioritySkills() {
    const resultElement = document.getElementById('priorityContent');
    displayLoading('priorityContent');

    setTimeout(() => {
        let result = `<strong>🎖️ Top In-Demand Skills 2024</strong>\n\n`;
        prioritySkills2024.forEach((item, index) => {
            result += `${index + 1}. <strong>${item.skill}</strong>\n`;
            result += `   Demand: ${item.demand} | Avg Salary: ${item.salary}\n\n`;
        });
        resultElement.innerHTML = result.replace(/\n/g, '<br>');
        showNotification('Priority skills loaded!');
    }, 1000);
}

// ===== STUDY PLAN =====
function studyPlan() {
    const resultElement = document.getElementById('planContent');
    displayLoading('planContent');

    setTimeout(() => {
        const weeks = ['Week 1-2', 'Week 3-4', 'Week 5-6', 'Week 7-8', 'Week 9-10', 'Week 11-12'];
        const activities = [
            'Foundation & Theory',
            'Core Concepts',
            'Practical Applications',
            'Advanced Topics',
            'Projects & Integration',
            'Review & Certification'
        ];

        let result = `<strong>📅 Your 12-Week Study Plan</strong>\n\n`;
        weeks.forEach((week, i) => {
            result += `<strong>${week}:</strong> ${activities[i]}\n`;
        });
        result += `\n<strong>📈 Expected Progress:</strong>\n`;
        result += `Week 1-4: Foundation (30%)\n`;
        result += `Week 5-8: Development (60%)\n`;
        result += `Week 9-12: Mastery (90%+)\n`;

        resultElement.innerHTML = result.replace(/\n/g, '<br>');
        showNotification('Study plan generated!');
    }, 1200);
}

// ===== PROJECT IDEAS =====
function projectIdeas() {
    const resultElement = document.getElementById('projectContent');
    displayLoading('projectContent');

    setTimeout(() => {
        const projects = [
            'Build a personal portfolio website',
            'Create a todo list app with database',
            'Develop a weather application with API integration',
            'Build a social media clone (scaled down)',
            'Create a machine learning model project',
            'Develop a mobile app for productivity',
            'Build an e-commerce platform',
            'Create an AI chatbot'
        ];

        let result = `<strong>💡 Portfolio-Building Project Ideas</strong>\n\n`;
        projects.forEach((project, i) => {
            result += `${i + 1}. ${project}\n`;
        });
        result += `\n<strong>🎯 Project Selection Tips:</strong>\n`;
        result += `• Choose projects aligned with your goals\n`;
        result += `• Make projects public on GitHub\n`;
        result += `• Include documentation and READMEs\n`;
        result += `• Showcase 2-3 strong projects on LinkedIn`;

        resultElement.innerHTML = result.replace(/\n/g, '<br>');
        showNotification('Project ideas ready!');
    }, 1000);
}

// ===== JOB TRENDS =====
function jobTrendAI() {
    const resultElement = document.getElementById('trendContent');
    displayLoading('trendContent');

    setTimeout(() => {
        let result = `<strong>📈 Job Market Trends 2024</strong>\n\n`;
        result += `<strong>🔥 Most Hired Roles:</strong>\n`;
        jobMarketTrends.most_hired.forEach((role, i) => {
            result += `${i + 1}. ${role}\n`;
        });
        result += `\n<strong>⚡ Emerging Opportunities:</strong>\n`;
        jobMarketTrends.emerging_roles.forEach((role, i) => {
            result += `${i + 1}. ${role}\n`;
        });
        result += `\n<strong>💰 Salary Ranges:</strong>\n`;
        for (let level in jobMarketTrends.salary_ranges) {
            result += `• ${level}: ${jobMarketTrends.salary_ranges[level]}\n`;
        }
        result += `\n<strong>📊 Market Insight:</strong>\n`;
        result += `Remote work is now standard\n`;
        result += `AI/ML skills command premium salaries\n`;
        result += `Cloud expertise highly valued`;

        resultElement.innerHTML = result.replace(/\n/g, '<br>');
        showNotification('Market trends analyzed!');
    }, 1500);
}

// ===== AI FEEDBACK =====
function feedbackAI() {
    const resultElement = document.getElementById('feedbackContent');
    displayLoading('feedbackContent');

    setTimeout(() => {
        const feedbackMessages = [
            'Your interest in multiple domains shows versatility. Focus on one core skill.',
            'Great start! Consider building more practical projects to strengthen your portfolio.',
            'Your skill assessment suggests you\'re ready for senior-level opportunities.',
            'Try contributing to open-source projects to gain real-world experience.',
            'Consider pursuing industry certifications to validate your expertise.',
            'Your learning pace is excellent. Maintain consistent practice.',
            'Focus on networking - connect with professionals in your target field.',
            'Your diverse skill set is valuable. Market yourself effectively.'
        ];

        const randomFeedback = feedbackMessages[Math.floor(Math.random() * feedbackMessages.length)];
        
        let result = `<strong>🤖 AI-Powered Personalized Feedback</strong>\n\n`;
        result += `<strong>💬 Feedback for ${userProfile.name}:</strong>\n`;
        result += `${randomFeedback}\n\n`;
        result += `<strong>🎯 Next Steps:</strong>\n`;
        result += `1. Assess your current skill level\n`;
        result += `2. Identify gaps in your knowledge\n`;
        result += `3. Create a focused learning plan\n`;
        result += `4. Build portfolio projects\n`;
        result += `5. Start applying for positions\n`;
        result += `\n<strong>📊 Your Progress:</strong>\n`;
        result += `Completion: ${Math.floor(Math.random() * 30) + 40}%`;

        resultElement.innerHTML = result.replace(/\n/g, '<br>');
        showNotification('Personalized feedback generated!');
    }, 1800);
}

// ===== ADVANCED FEATURES =====

// Quiz System
const careerQuiz = [
    {
        question: 'What do you enjoy most?',
        options: ['Problem solving', 'Creative work', 'Working with data', 'Helping people'],
        scores: { 'coding': 1, 'design': 1, 'data analysis': 1, 'cybersecurity': 0 }
    },
    {
        question: 'Preferred work environment?',
        options: ['Fast-paced startup', 'Large corporation', 'Remote freelance', 'Academic'],
        scores: { 'startup': 1, 'corporate': 1, 'remote': 1, 'academic': 0 }
    }
];

function startCareerQuiz() {
    const resultElement = document.getElementById('quizContent');
    if (!resultElement) return;
    
    displayLoading('quizContent');
    
    setTimeout(() => {
        let quizHTML = '<strong>🎯 Career Compatibility Quiz</strong><br><br>';
        quizHTML += 'Answer these questions to find your ideal career path:<br><br>';
        
        careerQuiz.forEach((q, i) => {
            quizHTML += `<strong>Q${i + 1}: ${q.question}</strong><br>`;
            q.options.forEach((opt, j) => {
                quizHTML += `<input type="radio" name="q${i}" value="${j}"> ${opt}<br>`;
            });
            quizHTML += '<br>';
        });
        
        quizHTML += '<button onclick="submitQuiz()" style="background: linear-gradient(135deg, #6366f1, #ec4899); color: white; padding: 0.75rem 2rem; border: none; border-radius: 0.5rem; cursor: pointer; font-weight: 600;">Get My Results</button>';
        
        resultElement.innerHTML = quizHTML;
        showNotification('Quiz loaded! Answer the questions...');
    }, 1000);
}

function submitQuiz() {
    showNotification('Quiz results: You match 85% with Software Engineering roles! 🎉');
}

// Interview Prep
function interviewPrep() {
    const resultElement = document.getElementById('interviewContent');
    if (!resultElement) return;
    
    displayLoading('interviewContent');
    
    setTimeout(() => {
        const questions = [
            'Tell me about yourself.',
            'What are your strengths and weaknesses?',
            'Why do you want to work at our company?',
            'Describe a challenging project and how you handled it.',
            'Where do you see yourself in 5 years?',
            'What is your expected salary?',
            'How do you handle pressure and tight deadlines?',
            'Tell me about your team collaboration experience.'
        ];
        
        let result = '<strong>🎤 Interview Preparation Guide</strong><br><br>';
        result += '<strong>Common Questions & Tips:</strong><br><br>';
        
        questions.forEach((q, i) => {
            result += `<strong>${i + 1}. "${q}"</strong><br>`;
        });
        
        result += '<br><strong>💡 Interview Tips:</strong><br>';
        result += '• Use STAR method (Situation, Task, Action, Result)<br>';
        result += '• Research the company thoroughly<br>';
        result += '• Practice with mock interviews<br>';
        result += '• Prepare 5 questions to ask them<br>';
        result += '• Dress professionally<br>';
        result += '• Arrive 15 minutes early';
        
        resultElement.innerHTML = result;
        showNotification('Interview tips loaded!');
    }, 1200);
}

// Salary Negotiation
function salaryNegotiation() {
    const resultElement = document.getElementById('salaryContent');
    if (!resultElement) return;
    
    displayLoading('salaryContent');
    
    setTimeout(() => {
        let result = '<strong>💰 Salary Negotiation Guide</strong><br><br>';
        
        result += '<strong>Research Phase:</strong><br>';
        result += '• Check Glassdoor, LinkedIn, PayScale<br>';
        result += '• Research your role in your location<br>';
        result += '• Know the market rate (+/- 10%)<br><br>';
        
        result += '<strong>Negotiation Tips:</strong><br>';
        result += '• Don\'t state first number<br>';
        result += '• Back up with data and achievements<br>';
        result += '• Consider total compensation (benefits, equity)<br>';
        result += '• Practice your pitch<br>';
        result += '• Stay professional and confident<br><br>';
        
        result += '<strong>Average Salaries by Level:</strong><br>';
        result += '• Entry Level: $45K - $70K<br>';
        result += '• Mid Level: $80K - $130K<br>';
        result += '• Senior Level: $140K - $220K<br>';
        result += '• Leadership: $180K - $400K+';
        
        resultElement.innerHTML = result;
        showNotification('Salary guide ready!');
    }, 1500);
}

// LinkedIn Profile Optimization
function linkedinOptimize() {
    const resultElement = document.getElementById('linkedinContent');
    if (!resultElement) return;
    
    displayLoading('linkedinContent');
    
    setTimeout(() => {
        let result = '<strong>💼 LinkedIn Profile Optimization</strong><br><br>';
        
        result += '<strong>Profile Checklist:</strong><br>';
        result += '✓ Professional profile photo<br>';
        result += '✓ Clear, keyword-rich headline<br>';
        result += '✓ Compelling summary (3-5 paragraphs)<br>';
        result += '✓ Complete work experience<br>';
        result += '✓ Skills section (top 5 prioritized)<br>';
        result += '✓ Endorsements and recommendations<br>';
        result += '✓ Education and certifications<br><br>';
        
        result += '<strong>Quick Tips:</strong><br>';
        result += '• Update your headline daily to get more visibility<br>';
        result += '• Add media to your posts (images, videos)<br>';
        result += '• Engage with content in your industry<br>';
        result += '• Post weekly about your learnings<br>';
        result += '• Ask for recommendations from colleagues<br>';
        result += '• Join relevant LinkedIn groups';
        
        resultElement.innerHTML = result;
        showNotification('LinkedIn tips loaded!');
    }, 1200);
}

// Networking Strategy
function networkingStrategy() {
    const resultElement = document.getElementById('networkContent');
    if (!resultElement) return;
    
    displayLoading('networkContent');
    
    setTimeout(() => {
        let result = '<strong>🤝 Professional Networking Strategy</strong><br><br>';
        
        result += '<strong>Networking Channels:</strong><br>';
        result += '1. LinkedIn - Connect with professionals<br>';
        result += '2. Industry Conferences - Meet peers face-to-face<br>';
        result += '3. GitHub - Showcase your code<br>';
        result += '4. Twitter/X - Share insights and follow leaders<br>';
        result += '5. Meetup Groups - Local tech communities<br>';
        result += '6. Discord Communities - Tech discussions<br><br>';
        
        result += '<strong>Action Plan:</strong><br>';
        result += '• Build genuine relationships (not transactional)<br>';
        result += '• Help others first, ask for help later<br>';
        result += '• Attend 1-2 events per month<br>';
        result += '• Follow up within 48 hours<br>';
        result += '• Provide value in every interaction<br>';
        result += '• Build a personal brand';
        
        resultElement.innerHTML = result;
        showNotification('Networking strategy ready!');
    }, 1300);
}

// Certification Path
function certificationPath() {
    const resultElement = document.getElementById('certContent');
    if (!resultElement) return;
    
    displayLoading('certContent');
    
    setTimeout(() => {
        const certifications = {
            'Cloud': ['AWS Solutions Architect', 'Azure Administrator', 'Google Cloud Associate'],
            'DevOps': ['Kubernetes CKA', 'HashiCorp Certified Terraform', 'Linux LFCS'],
            'Security': ['CompTIA Security+', 'CEH (Certified Ethical Hacker)', 'CISSP'],
            'Data': ['Google Data Analytics', 'AWS Big Data', 'Microsoft Data Scientist'],
            'Web Dev': ['AWS Developer', 'MongoDB Developer', 'React Native']
        };
        
        let result = '<strong>🏆 Certification Roadmap</strong><br><br>';
        
        for (let category in certifications) {
            result += `<strong>${category}:</strong><br>`;
            certifications[category].forEach((cert, i) => {
                result += `${i + 1}. ${cert}<br>`;
            });
            result += '<br>';
        }
        
        result += '<strong>Certification Benefits:</strong><br>';
        result += '• Increases earning potential by 10-30%<br>';
        result += '• Validates your skills<br>';
        result += '• Opens career opportunities<br>';
        result += '• Improves job application success rate';
        
        resultElement.innerHTML = result;
        showNotification('Certification paths loaded!');
    }, 1000);
}

// Career Transition Guide
function careerTransition() {
    const resultElement = document.getElementById('transitionContent');
    if (!resultElement) return;
    
    displayLoading('transitionContent');
    
    setTimeout(() => {
        let result = '<strong>🔄 Career Transition Guide</strong><br><br>';
        
        result += '<strong>Steps to Change Careers:</strong><br>';
        result += '1. Assess your current skills<br>';
        result += '2. Research target career<br>';
        result += '3. Identify skill gaps<br>';
        result += '4. Create learning plan (3-6 months)<br>';
        result += '5. Build portfolio projects<br>';
        result += '6. Network in new industry<br>';
        result += '7. Apply for entry/mid-level roles<br>';
        result += '8. Consider contract/freelance work<br><br>';
        
        result += '<strong>Popular Transitions:</strong><br>';
        result += '• Finance → Data Science<br>';
        result += '• Design → Product Management<br>';
        result += '• Support → Engineering<br>';
        result += '• Any Role → Project Management<br>';
        result += '• Technical → Leadership';
        
        resultElement.innerHTML = result;
        showNotification('Transition guide ready!');
    }, 1400);
}

// Freelance Guide
function freelanceGuide() {
    const resultElement = document.getElementById('freelanceContent');
    if (!resultElement) return;
    
    displayLoading('freelanceContent');
    
    setTimeout(() => {
        let result = '<strong>🚀 Freelancing & Remote Work Guide</strong><br><br>';
        
        result += '<strong>Top Platforms:</strong><br>';
        result += '• Upwork - Diverse projects<br>';
        result += '• Fiverr - Service-based gigs<br>';
        result += '• Toptal - High-end clients<br>';
        result += '• Freelancer.com - Competitive bidding<br>';
        result += '• PeoplePerHour - UK-based<br><br>';
        
        result += '<strong>Getting Started:</strong><br>';
        result += '1. Create compelling profile<br>';
        result += '2. Start with lower rates to build reviews<br>';
        result += '3. Deliver exceptional quality<br>';
        result += '4. Ask for testimonials<br>';
        result += '5. Gradually increase rates<br>';
        result += '6. Build long-term client relationships<br><br>';
        
        result += '<strong>Rate Guidelines:</strong><br>';
        result += '• Beginner: $15-30/hour<br>';
        result += '• Intermediate: $30-75/hour<br>';
        result += '• Expert: $75-150+/hour';
        
        resultElement.innerHTML = result;
        showNotification('Freelance guide loaded!');
    }, 1200);
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ CareerAI Application Loaded Successfully');
    
    // Add slide animations for notifications
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    // Initialize uploader and theme toggle once DOM is ready
    try { setupUploaderAndToggle(); } catch (e) { console.warn('setupUploaderAndToggle not available yet', e); }
});

// Handle Enter key in inputs
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        if (event.target.id === 'studentName') {
            updateProfile();
        }
    }
});
