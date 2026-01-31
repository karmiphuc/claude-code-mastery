// DOM Elements
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const markdownViewer = document.getElementById('markdown-viewer');
const currentSectionTitle = document.getElementById('current-section');
const navItems = document.querySelectorAll('.nav-item');
const markCompleteBtn = document.getElementById('mark-complete-btn');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

// State
let currentFile = '../README.md';
const moduleOrder = [
    '../README.md',
    '../progress-tracker.md',
    '../00-terminal-orientation.md',
    '../01-foundations.md',
    '../02-core-skills.md',
    '../03-mastery.md',
    '../04-bonus-workflows.md'
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    loadContent(currentFile);
    updateProgressUI();
});

// Event Listeners
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const file = e.currentTarget.dataset.file;
        loadContent(file);
        // On mobile, close sidebar after selection
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('open');
        }
    });
});

markCompleteBtn.addEventListener('click', () => {
    toggleCompletion(currentFile);
});

nextBtn.addEventListener('click', () => navigate('next'));
prevBtn.addEventListener('click', () => navigate('prev'));

// Functions
async function loadContent(path) {
    currentFile = path;
    updateActiveNav(path);
    updateButtonsState();
    
    // Show loading
    markdownViewer.innerHTML = `
        <div class="loading-state">
            <div class="spinner"></div>
            <p>Loading content...</p>
        </div>
    `;

    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error('Failed to load file');
        
        const markdown = await response.text();
        const html = marked.parse(markdown);
        
        markdownViewer.innerHTML = html;
        
        // Highlight code blocks
        Prism.highlightAll();
        
        // Update header title based on H1
        const h1 = markdownViewer.querySelector('h1');
        if (h1) {
            currentSectionTitle.textContent = h1.textContent;
            // Hide the H1 in content since it's in header now? 
            // Optional, but keeping it is fine for context.
        }

        // Scroll to top
        markdownViewer.scrollTop = 0;

        // Update completion button state
        updateCompletionButtonUI();

    } catch (error) {
        markdownViewer.innerHTML = `
            <div class="error-state" style="text-align:center; padding: 40px; color: var(--accent-color);">
                <h3>Error Loading Content</h3>
                <p>Ensure you are running this via a local server (e.g., python -m http.server) or on GitHub Pages.</p>
                <p>Browser security blocks fetching local files directly via file:// protocol.</p>
                <br>
                <code style="background:var(--bg-tertiary); padding:8px;">${error.message}</code>
            </div>
        `;
    }
}

function updateActiveNav(path) {
    navItems.forEach(item => {
        if (item.dataset.file === path) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function toggleCompletion(path) {
    const completed = JSON.parse(localStorage.getItem('claude_code_progress') || '[]');
    const index = completed.indexOf(path);
    
    if (index === -1) {
        completed.push(path);
    } else {
        completed.splice(index, 1);
    }
    
    localStorage.setItem('claude_code_progress', JSON.stringify(completed));
    updateProgressUI();
    updateCompletionButtonUI();
}

function updateProgressUI() {
    const completed = JSON.parse(localStorage.getItem('claude_code_progress') || '[]');
    // Filter to only count known modules
    const validCompleted = completed.filter(p => moduleOrder.includes(p));
    const percentage = Math.round((validCompleted.length / moduleOrder.length) * 100);
    
    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `${percentage}%`;
}

function updateCompletionButtonUI() {
    const completed = JSON.parse(localStorage.getItem('claude_code_progress') || '[]');
    const isComplete = completed.includes(currentFile);
    
    if (isComplete) {
        markCompleteBtn.innerHTML = '<i data-lucide="check"></i> Completed';
        markCompleteBtn.classList.add('completed');
    } else {
        markCompleteBtn.innerHTML = '<i data-lucide="check-circle"></i> Mark as Complete';
        markCompleteBtn.classList.remove('completed');
    }
    lucide.createIcons();
}

function navigate(direction) {
    const currentIndex = moduleOrder.indexOf(currentFile);
    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    
    if (newIndex >= 0 && newIndex < moduleOrder.length) {
        loadContent(moduleOrder[newIndex]);
    }
}

function updateButtonsState() {
    const currentIndex = moduleOrder.indexOf(currentFile);
    
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === moduleOrder.length - 1;
}
