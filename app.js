// Main App Logic

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => {
        console.log('Service Worker registered with scope:', reg.scope);
      })
      .catch((err) => {
        console.error('Service Worker registration failed:', err);
      });
  });
}

const app = document.getElementById('app');

// Ensure data is loaded
const appData = window.data || { nurseries: [], plants: [], gardeners: [], materials: [] };

// State
let currentState = {
  view: 'home',
  filterNeighborhood: 'Tous',
  searchQuery: '',
  plantTypeFilter: 'Tous',
  selectedPlantId: null
};

// Router
window.router = (view) => {
  currentState.view = view;
  render();
  updateActiveNav();
  window.scrollTo(0, 0);
};

function updateActiveNav() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.dataset.target === currentState.view) {
      item.classList.add('active');
    }
  });
}

// Render Functions
function render() {
  app.innerHTML = '';
  try {
    switch (currentState.view) {
      case 'home':
        renderHome();
        break;
      case 'nurseries':
        renderNurseries();
        break;
      case 'plants':
        renderPlants();
        break;
      case 'gardeners':
        renderGardeners();
        break;
      case 'materials':
        renderMaterials();
        break;
      case 'plant-detail':
        renderPlantDetail();
        break;
      case 'account':
        renderAccount();
        break;
      default:
        renderHome();
    }
  } catch (error) {
    console.error("Render Error:", error);
    app.innerHTML = '<div style="padding: 1rem; color: red;">Une erreur est survenue lors du chargement. Veuillez rafraîchir la page.</div>';
  }
}

// --- HOME PAGE ---
function renderHome() {
  const container = document.createElement('div');
  container.className = 'fade-in';

  // Header
  const header = document.createElement('header');
  header.innerHTML = `
    <div class="flex justify-between items-center">
      <div class="logo-title">
        <i class="fa-solid fa-leaf text-accent"></i>
        <span class="font-bold" style="color: var(--color-primary)">Bénin Vert</span>
      </div>
      <i class="fa-solid fa-bell text-accent" style="font-size: 1.2rem;"></i>
    </div>
    <div style="margin-top: 1rem;">
      <h1 style="font-size: 1.8rem; line-height: 1.2; margin-bottom: 0.5rem;">Découvrez la nature<br>à Abomey-Calavi</h1>
    </div>
  `;
  container.appendChild(header);

  // Search
  const searchContainer = document.createElement('div');
  searchContainer.style.marginBottom = '1.5rem';
  searchContainer.innerHTML = `
    <div style="position: relative;">
      <i class="fa-solid fa-search" style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: #999;"></i>
      <input type="text" class="input-search" style="padding-left: 2.8rem;" placeholder="Rechercher plantes, pépinières...">
    </div>
  `;
  container.appendChild(searchContainer);

  // Filters
  const filters = ['Tous', 'Zogbadjè', 'Arconville', 'Akassato', 'Togba'];
  const filterContainer = document.createElement('div');
  filterContainer.className = 'filters';
  filters.forEach(f => {
    const chip = document.createElement('button');
    chip.className = `chip ${currentState.filterNeighborhood === f ? 'active' : ''}`;
    chip.textContent = f;
    chip.onclick = () => {
      currentState.filterNeighborhood = f;
      render();
    };
    filterContainer.appendChild(chip);
  });
  container.appendChild(filterContainer);

  // Categories
  const categories = [
    { name: 'Pépinières', icon: 'fa-seedling', img: 'https://images.unsplash.com/photo-1530968464165-7a1861cbaf9f?auto=format&fit=crop&q=80&w=300', action: 'nurseries' },
    { name: 'Jardiniers', icon: 'fa-user-group', img: 'https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?auto=format&fit=crop&q=80&w=300', action: 'gardeners' },
    { name: 'Matériels', icon: 'fa-trowel', img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=300', action: 'materials' },
    { name: 'Encyclopédie', icon: 'fa-book', img: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&q=80&w=300', action: 'plants' },
  ];

  const catGrid = document.createElement('div');
  catGrid.className = 'categories-grid';
  categories.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.style.backgroundImage = `url('${cat.img}')`;
    card.onclick = () => window.router(cat.action);
    card.innerHTML = `
      <i class="fa-solid ${cat.icon} icon"></i>
      <span class="font-bold">${cat.name}</span>
    `;
    catGrid.appendChild(card);
  });
  container.appendChild(catGrid);

  // Nurseries Nearby
  const nearbyTitle = document.createElement('h3');
  nearbyTitle.textContent = 'Pépinières à proximité';
  nearbyTitle.style.marginBottom = '1rem';
  container.appendChild(nearbyTitle);

  const nearbyList = document.createElement('div');
  nearbyList.className = 'content-grid';
  const filteredNurseries = appData.nurseries.filter(n =>
    currentState.filterNeighborhood === 'Tous' || n.neighborhood === currentState.filterNeighborhood
  );

  filteredNurseries.forEach(n => {
    const card = createNurseryCard(n);
    nearbyList.appendChild(card);
  });

  if (filteredNurseries.length === 0) {
    nearbyList.innerHTML = '<p class="text-sm" style="color: #666; font-style: italic;">Aucune pépinière trouvée pour ce moment.</p>';
  }

  container.appendChild(nearbyList);
  app.appendChild(container);
}

// --- NURSERIES PAGE ---
function renderNurseries() {
  const container = document.createElement('div');
  container.className = 'fade-in';

  container.innerHTML = `
    <h2 style="margin-bottom: 1rem; margin-top: 1rem;">Annuaire des Pépinières</h2>
  `;

  appData.nurseries.forEach(n => {
    container.appendChild(createNurseryCard(n));
  });

  app.appendChild(container);
}

// --- PLANTS PAGE (Fixed Grid) ---
function renderPlants() {
  const container = document.createElement('div');
  container.className = 'fade-in';

  // Header
  container.innerHTML = `
    <h2 style="margin-bottom: 1rem; margin-top: 1rem;">Encyclopédie</h2>
    <div style="position: relative; margin-bottom: 1rem;">
       <i class="fa-solid fa-search" style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: #999;"></i>
       <input type="text" class="input-search" id="plant-search" style="padding-left: 2.8rem;" placeholder="Rechercher une plante..." value="${currentState.searchQuery}">
    </div>
  `;

  // Filters
  const types = ['Tous', 'Ornemental', 'Fruitier', 'Médicinal', 'Aromatique'];
  const filterContainer = document.createElement('div');
  filterContainer.className = 'filters';
  types.forEach(t => {
    const chip = document.createElement('button');
    chip.className = `chip ${currentState.plantTypeFilter === t ? 'active' : ''}`;
    chip.textContent = t;
    chip.onclick = () => {
      currentState.plantTypeFilter = t;
      render();
    };
    filterContainer.appendChild(chip);
  });
  container.appendChild(filterContainer);

  // List Container (Grid)
  const list = document.createElement('div');
  list.className = 'plants-grid';

  const filteredPlants = appData.plants.filter(p => {
    return currentState.plantTypeFilter === 'Tous' || p.type === currentState.plantTypeFilter;
  });

  // Safe Rendering Loop
  filteredPlants.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card'; // Ensure this class exists in CSS
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.overflow = 'hidden'; // Important for border-radius
    card.style.margin = '0';

    // Safely get properties
    const imgSrc = p.image || 'https://via.placeholder.com/150';
    const name = p.commonName || 'Plante Inconnue';
    const sciName = p.scientificName || '';
    const light = (p.conditions && p.conditions.light) ? p.conditions.light.split('/')[0] : 'Inconnu';

    card.innerHTML = `
      <div style="width: 100%;">
        <img src="${imgSrc}" class="card-img" alt="${name}" loading="lazy">
      </div>
      <div style="padding: 0.8rem;">
        <h4 style="margin-bottom: 0.2rem; font-size: 0.95rem;">${name}</h4>
        <p class="text-xs text-accent" style="font-style: italic; margin-bottom: 0.5rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${sciName}</p>
        <span style="font-size: 0.75rem; color: #666; background: #f4f4f4; padding: 2px 6px; border-radius: 4px;">
          <i class="fa-solid fa-sun text-accent"></i> ${light}
        </span>
      </div>
    `;
    card.style.cursor = 'pointer';
    card.onclick = () => {
      currentState.selectedPlantId = p.id;
      window.router('plant-detail');
    };
    list.appendChild(card);
  });

  if (filteredPlants.length === 0) {
    list.style.display = 'block'; // Remove grid for error message
    list.innerHTML = '<p style="text-align: center; color: #888; margin-top: 2rem;">Aucune plante trouvée.</p>';
  }

  container.appendChild(list);
  app.appendChild(container);

  // Re-attach listener
  setTimeout(() => {
    const searchInput = document.getElementById('plant-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const cards = list.querySelectorAll('.card'); // Get all cards in list

        // Note: simple visual filter might break grid flow if not handled carefully, but okay for MVP
        Array.from(cards).forEach((c, idx) => { // Use Array.from for safety
          // We need to match index to filteredPlants
          if (filteredPlants[idx]) {
            const plantName = filteredPlants[idx].commonName.toLowerCase();
            if (plantName.includes(term)) {
              c.style.display = 'flex';
            } else {
              c.style.display = 'none';
            }
          }
        });
      });
      searchInput.focus(); // Keep focus
    }
  }, 0);
}

// --- ACCOUNT/PLACEHOLDER ---
function renderAccount() {
  app.innerHTML = `
    <div class="fade-in" style="text-align: center; margin-top: 4rem;">
      <i class="fa-solid fa-user-circle" style="font-size: 4rem; color: var(--color-detail); margin-bottom: 1rem;"></i>
      <h2>Mon Profil</h2>
      <p style="color: #666;">Connectez-vous pour sauvegarder vos plantes favorites.</p>
      <button class="btn btn-primary" style="margin-top: 1rem;">Se connecter</button>
    </div>
  `;
}

// Helper: Create Nursery Card
function createNurseryCard(n) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${n.image}" class="card-img" alt="${n.name}" loading="lazy">
    <div class="card-body">
      <div class="flex justify-between items-start">
        <div>
          <h3 style="font-size: 1.1rem;">${n.name}</h3>
          <p class="text-sm" style="color: #666;"><i class="fa-solid fa-user"></i> ${n.manager}</p>
        </div>
        ${n.isLabelVert ? '<div class="label-vert"><i class="fa-solid fa-certificate"></i> Label Vert</div>' : ''}
      </div>
      <p class="text-sm" style="margin-top: 0.5rem;"><i class="fa-solid fa-location-dot text-accent"></i> ${n.neighborhood}</p>
      <p class="text-sm" style="margin-top: 0.2rem; color: var(--color-detail); font-weight: 500;">${n.specialty}</p>
      <div style="margin-top: 1rem;">
        <button class="btn btn-primary" style="width: 100%; border-radius: 0.8rem; padding: 0.5rem;">
          <i class="fa-solid fa-phone"></i> &nbsp; Contacter
        </button>
      </div>
    </div>
  `;
  return card;
}

// --- GARDENERS PAGE ---
function renderGardeners() {
  const container = document.createElement('div');
  container.className = 'fade-in';

  container.innerHTML = `
    <h2 style="margin-bottom: 1rem; margin-top: 1rem;">Jardiniers Professionnels</h2>
  `;

  const list = document.createElement('div');
  list.className = 'content-grid';

  appData.gardeners.forEach(g => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${g.image}" class="card-img" alt="${g.name}" loading="lazy">
      <div class="card-body">
        <h3 style="font-size: 1.1rem;">${g.name}</h3>
        <p class="text-sm" style="color: var(--color-detail); font-weight: 500; margin-top: 0.3rem;">${g.specialty}</p>
        <p class="text-sm" style="margin-top: 0.5rem;"><i class="fa-solid fa-location-dot text-accent"></i> ${g.neighborhood}</p>
        <p class="text-sm" style="margin-top: 0.2rem;"><i class="fa-solid fa-clock text-accent"></i> ${g.experience} d'expérience</p>
        <div style="margin-top: 1rem;">
          <button class="btn btn-primary" style="width: 100%; border-radius: 0.8rem; padding: 0.5rem;">
            <i class="fa-solid fa-phone"></i> &nbsp; ${g.phone}
          </button>
        </div>
      </div>
    `;
    list.appendChild(card);
  });

  container.appendChild(list);
  app.appendChild(container);
}

// --- MATERIALS PAGE ---
function renderMaterials() {
  const container = document.createElement('div');
  container.className = 'fade-in';

  container.innerHTML = `
    <h2 style="margin-bottom: 1rem; margin-top: 1rem;">Matériels de Jardinage</h2>
  `;

  const list = document.createElement('div');
  list.className = 'content-grid';

  appData.materials.forEach(m => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${m.image}" class="card-img" alt="${m.name}" loading="lazy">
      <div class="card-body">
        <div class="flex justify-between items-start">
          <div>
            <h3 style="font-size: 1.1rem;">${m.name}</h3>
            <p class="text-sm" style="color: #666;">${m.category}</p>
          </div>
          <div style="text-align: right;">
            <p class="font-bold" style="color: var(--color-primary); font-size: 1.1rem;">${m.price}</p>
            <p class="text-xs" style="color: #999;">${m.unit}</p>
          </div>
        </div>
        <p class="text-sm" style="margin-top: 0.8rem; color: var(--color-detail);"><i class="fa-solid fa-store"></i> ${m.supplier}</p>
        <div style="margin-top: 1rem;">
          <button class="btn btn-primary" style="width: 100%; border-radius: 0.8rem; padding: 0.5rem;">
            <i class="fa-solid fa-shopping-cart"></i> &nbsp; Commander
          </button>
        </div>
      </div>
    `;
    list.appendChild(card);
  });

  container.appendChild(list);
  app.appendChild(container);
}

// --- PLANT DETAIL PAGE ---
function renderPlantDetail() {
  const plant = appData.plants.find(p => p.id === currentState.selectedPlantId);

  if (!plant) {
    window.router('plants');
    return;
  }

  const container = document.createElement('div');
  container.className = 'fade-in';

  // Back button
  const backBtn = document.createElement('button');
  backBtn.className = 'btn';
  backBtn.style.cssText = 'margin: 1rem 0; background: #f4f4f4; color: var(--color-text);';
  backBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i> &nbsp; Retour';
  backBtn.onclick = () => window.router('plants');
  container.appendChild(backBtn);

  // Hero section
  const hero = document.createElement('div');
  hero.style.cssText = 'position: relative; height: 300px; border-radius: var(--radius-2xl); overflow: hidden; margin-bottom: 1.5rem;';
  hero.innerHTML = `
    <img src="${plant.image}" style="width: 100%; height: 100%; object-fit: cover;" alt="${plant.commonName}">
    <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); padding: 1.5rem; color: white;">
      <h1 style="color: white; margin-bottom: 0.3rem;">${plant.commonName}</h1>
      <p style="font-style: italic; opacity: 0.9;">${plant.scientificName}</p>
    </div>
  `;
  container.appendChild(hero);

  // Info badges
  const badges = document.createElement('div');
  badges.className = 'flex gap-2';
  badges.style.cssText = 'margin-bottom: 1.5rem; flex-wrap: wrap;';
  badges.innerHTML = `
    <span style="background: #E8F5E9; color: var(--color-primary); padding: 0.4rem 0.8rem; border-radius: var(--radius-xl); font-size: 0.85rem; font-weight: 600;">
      ${plant.type}
    </span>
    <span style="background: #FFF3E0; color: #F57C00; padding: 0.4rem 0.8rem; border-radius: var(--radius-xl); font-size: 0.85rem; font-weight: 600;">
      <i class="fa-solid fa-signal"></i> ${plant.difficulty}
    </span>
  `;
  container.appendChild(badges);

  // Description
  const desc = document.createElement('p');
  desc.style.cssText = 'color: #666; line-height: 1.6; margin-bottom: 1.5rem;';
  desc.textContent = plant.description;
  container.appendChild(desc);

  // Conditions rapides
  const quickInfo = document.createElement('div');
  quickInfo.className = 'card';
  quickInfo.style.marginBottom = '1.5rem';
  quickInfo.innerHTML = `
    <div class="card-body">
      <h3 style="margin-bottom: 1rem; font-size: 1.1rem;">Conditions de Culture</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;">
        <div>
          <p class="text-xs" style="color: #999; margin-bottom: 0.3rem;">☀️ Lumière</p>
          <p class="font-bold">${plant.conditions.light}</p>
        </div>
        <div>
          <p class="text-xs" style="color: #999; margin-bottom: 0.3rem;">💧 Arrosage</p>
          <p class="font-bold">${plant.conditions.water}</p>
        </div>
        <div>
          <p class="text-xs" style="color: #999; margin-bottom: 0.3rem;">🌱 Sol</p>
          <p class="font-bold">${plant.conditions.soil}</p>
        </div>
      </div>
    </div>
  `;
  container.appendChild(quickInfo);

  // Guide d'entretien détaillé
  const careSection = document.createElement('div');
  careSection.innerHTML = '<h2 style="margin-bottom: 1rem;">Guide d\'Entretien</h2>';

  const careItems = [
    { icon: 'fa-droplet', title: 'Arrosage', content: plant.care.watering },
    { icon: 'fa-seedling', title: 'Fertilisation', content: plant.care.fertilizing },
    { icon: 'fa-scissors', title: 'Taille', content: plant.care.pruning },
    { icon: 'fa-temperature-half', title: 'Température', content: plant.care.temperature },
    { icon: 'fa-box', title: 'Rempotage', content: plant.care.repotting }
  ];

  careItems.forEach(item => {
    const careCard = document.createElement('div');
    careCard.className = 'card';
    careCard.style.marginBottom = '1rem';
    careCard.innerHTML = `
      <div class="card-body">
        <h4 style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <i class="fa-solid ${item.icon} text-accent"></i>
          ${item.title}
        </h4>
        <p class="text-sm" style="color: #666; line-height: 1.5;">${item.content}</p>
      </div>
    `;
    careSection.appendChild(careCard);
  });
  container.appendChild(careSection);

  // Bienfaits
  const benefitsSection = document.createElement('div');
  benefitsSection.style.marginTop = '1.5rem';
  benefitsSection.innerHTML = '<h2 style="margin-bottom: 1rem;">Bienfaits</h2>';

  const benefitsList = document.createElement('div');
  benefitsList.className = 'card';
  benefitsList.innerHTML = `
    <div class="card-body">
      <ul style="list-style: none; padding: 0;">
        ${plant.benefits.map(b => `
          <li style="padding: 0.5rem 0; border-bottom: 1px solid #f0f0f0; display: flex; align-items: start; gap: 0.5rem;">
            <i class="fa-solid fa-check-circle text-accent" style="margin-top: 0.2rem;"></i>
            <span>${b}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
  benefitsSection.appendChild(benefitsList);
  container.appendChild(benefitsSection);

  // Parasites et maladies
  const pestsSection = document.createElement('div');
  pestsSection.style.marginTop = '1.5rem';
  pestsSection.innerHTML = '<h2 style="margin-bottom: 1rem;">Parasites & Maladies</h2>';

  const pestsList = document.createElement('div');
  pestsList.className = 'card';
  pestsList.innerHTML = `
    <div class="card-body">
      <ul style="list-style: none; padding: 0;">
        ${plant.pests.map(p => `
          <li style="padding: 0.5rem 0; border-bottom: 1px solid #f0f0f0; display: flex; align-items: start; gap: 0.5rem;">
            <i class="fa-solid fa-triangle-exclamation" style="color: #F57C00; margin-top: 0.2rem;"></i>
            <span>${p}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
  pestsSection.appendChild(pestsList);
  container.appendChild(pestsSection);

  app.appendChild(container);
}

// Initial Render
render();
