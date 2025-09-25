// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Load games from JSON file
    loadGames();
    
    // Initialize countdown timer
    initCountdown();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Countdown timer functionality
function initCountdown() {
    const releaseDate = new Date('2025-09-25T00:00:00Z').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = releaseDate - now;
        
        if (distance < 0) {
            // Game has been released
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    // Update countdown immediately
    updateCountdown();
    
    // Update countdown every second
    setInterval(updateCountdown, 1000);
}

// Load games from JSON file
async function loadGames() {
    try {
        const response = await fetch('/data/games.json');
        const games = await response.json();
        displayGames(games);
    } catch (error) {
        console.error('Error loading games:', error);
        // Fallback to sample games if JSON file doesn't exist
        displaySampleGames();
    }
}

// Display games on the page
function displayGames(games) {
    const container = document.getElementById('games-container');
    if (!container) return;

    container.innerHTML = '';

    games.forEach(game => {
        const gameCard = createGameCard(game);
        container.appendChild(gameCard);
    });
}

// Create a game card element
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300';
    
    // Create additional info badges
    const badges = [];
    if (game.price) badges.push(`<span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">${game.price}</span>`);
    if (game.gameplayLength) badges.push(`<span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">${game.gameplayLength}</span>`);
    if (game.releaseDate) badges.push(`<span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">${new Date(game.releaseDate).getFullYear()}</span>`);
    
    const badgesHtml = badges.length > 0 ? `<div class="flex flex-wrap gap-1 mb-3">${badges.join('')}</div>` : '';
    
    card.innerHTML = `
        <div class="aspect-video bg-gray-200">
            <iframe 
                src="${game.iframeUrl}" 
                class="w-full h-full border-0"
                allowfullscreen
                loading="lazy">
            </iframe>
        </div>
        <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">${game.title}</h3>
            <p class="text-gray-600 mb-4 line-clamp-3">${game.description}</p>
            ${badgesHtml}
            <div class="flex justify-between items-center">
                <div class="flex items-center space-x-2">
                    <span class="text-sm text-gray-500">${game.category}</span>
                    ${game.rating ? `<span class="text-sm text-yellow-600">★ ${game.rating}</span>` : ''}
                </div>
                <a href="${game.iframeUrl}" target="_blank" class="bg-apple-blue text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors inline-block text-center">
                    Play Now
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// Open game modal with full details
function openGameModal(gameId) {
    // Redirect to dedicated game page
    window.location.href = `/games/${gameId}.html`;
}

// Display sample games if JSON file doesn't exist
function displaySampleGames() {
    const sampleGames = [
        {
            id: 'sample-1',
            title: 'Space Adventure',
            description: 'Embark on an epic journey through the cosmos in this thrilling space exploration game.',
            category: 'Adventure',
            iframeUrl: 'https://example.com/game1'
        },
        {
            id: 'sample-2',
            title: 'Puzzle Master',
            description: 'Challenge your mind with intricate puzzles and brain-teasing challenges.',
            category: 'Puzzle',
            iframeUrl: 'https://example.com/game2'
        },
        {
            id: 'sample-3',
            title: 'Racing Champion',
            description: 'Experience high-speed racing action with stunning graphics and realistic physics.',
            category: 'Racing',
            iframeUrl: 'https://example.com/game3'
        }
    ];
    
    displayGames(sampleGames);
}

// Search functionality
function searchGames(query) {
    const games = document.querySelectorAll('#games-container > div');
    const searchTerm = query.toLowerCase();
    
    games.forEach(game => {
        const title = game.querySelector('h3').textContent.toLowerCase();
        const description = game.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            game.style.display = 'block';
        } else {
            game.style.display = 'none';
        }
    });
}

// Add search functionality to the page
function addSearchFunctionality() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search games...';
    searchInput.className = 'w-full max-w-md mx-auto block px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-apple-blue focus:border-transparent';
    
    searchInput.addEventListener('input', function(e) {
        searchGames(e.target.value);
    });
    
    const gamesSection = document.getElementById('games');
    const gamesContainer = document.getElementById('games-container');
    
    if (gamesSection && gamesContainer) {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'mb-8';
        searchContainer.appendChild(searchInput);
        
        gamesSection.insertBefore(searchContainer, gamesContainer);
    }
}

// Initialize search functionality
document.addEventListener('DOMContentLoaded', function() {
    addSearchFunctionality();
});
