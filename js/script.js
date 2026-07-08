// ==========================================================================
// RFC — Data
// Prices/names are approximated from the RFC menu poster where legible.
// Edit this array to correct any item, price or description.
// ==========================================================================
const CATEGORIES = [
  'Deals','Burgers','Zinger Burgers','Wraps','Shawarma','Pizza',
  'Paratha Rolls','Chicken','Fish','Rice','Pasta','Fries',
  'Happy Meals','Family Meals','Combo Deals','Drinks','Special Deals'
];

const MENU = [
  // Deals
  { id:'d1', name:'Fries & Drink Deal', cat:'Deals', price:300, desc:'Crispy golden fries with a cold drink.', img:'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500&q=80', badge:'Deal' },
  { id:'d2', name:'Zinger Deal', cat:'Deals', price:430, desc:'Zinger burger paired with a chilled cold drink.', img:'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&q=80', badge:'Deal' },
  { id:'d3', name:'Deal 555', cat:'Deals', price:900, desc:'5 spicy zinger burgers with 2 cold drinks — built for sharing.', img:'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80', badge:'Popular' },
  { id:'d4', name:'Deal 666', cat:'Deals', price:800, desc:'6-piece wings bucket with 2 cold drinks.', img:'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&q=80' },

  // Burgers
  { id:'b1', name:'Classic Chicken Burger', cat:'Burgers', price:350, desc:'Grilled chicken patty, lettuce and house mayo.', img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80' },
  { id:'b2', name:'RFC Tower Burger', cat:'Burgers', price:550, desc:'Chicken fillet stacked with cheese and a crisp hashbrown.', img:'https://images.unsplash.com/photo-1550317138-10000687a72b?w=500&q=80', badge:'Best Seller' },
  { id:'b3', name:'Chatpata Burger', cat:'Burgers', price:400, desc:'Spicy chicken patty in a tangy chatpata sauce.', img:'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&q=80' },

  // Zinger Burgers
  { id:'z1', name:'Zinger Burger', cat:'Zinger Burgers', price:430, desc:'The original crispy zinger fillet, lettuce and mayo.', img:'https://images.unsplash.com/photo-1615297928064-24977384d0da?w=500&q=80', badge:'Best Seller' },
  { id:'z2', name:'Spicy Zinger Burger', cat:'Zinger Burgers', price:500, desc:'Extra hot zinger fillet for the heat-seekers.', img:'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&q=80', badge:'Spicy' },
  { id:'z3', name:'Jalapeño Zinger', cat:'Zinger Burgers', price:490, desc:'Zinger fillet loaded with jalapeños and melted cheese.', img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&q=80', badge:'Spicy' },
  { id:'z4', name:'Chipotle Zinger', cat:'Zinger Burgers', price:600, desc:'Smoky chipotle mayo over a crispy zinger fillet.', img:'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&q=80' },

  // Wraps
  { id:'w1', name:'Zinger Twister Wrap', cat:'Wraps', price:500, desc:'Crispy zinger strips rolled with fresh veggies and sauce.', img:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&q=80' },
  { id:'w2', name:'Chicken Fajita Wrap', cat:'Wraps', price:480, desc:'Grilled fajita chicken, peppers and onions in a soft wrap.', img:'https://images.unsplash.com/photo-1600850056064-a8b380df8395?w=500&q=80' },

  // Shawarma
  { id:'s1', name:'Chicken Shawarma', cat:'Shawarma', price:250, desc:'Classic shawarma with garlic sauce and pickles.', img:'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500&q=80' },
  { id:'s2', name:'Special Fajita Shawarma', cat:'Shawarma', price:450, desc:'Loaded fajita-style shawarma with extra cheese.', img:'https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?w=500&q=80', badge:'Popular' },
  { id:'s3', name:'Behari Roll', cat:'Shawarma', price:650, desc:'Spiced behari beef roll served with a cold drink.', img:'https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70?w=500&q=80' },

  // Pizza
  { id:'p1', name:'Chicken Tikka Pizza', cat:'Pizza', price:900, desc:'Regular pizza topped with spiced chicken tikka.', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80' },
  { id:'p2', name:'Fajita Supreme Pizza', cat:'Pizza', price:950, desc:'Regular pizza loaded with fajita chicken and peppers.', img:'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=500&q=80' },

  // Paratha Rolls
  { id:'r1', name:'Chicken Paratha Roll', cat:'Paratha Rolls', price:400, desc:'Crispy chicken wrapped in a flaky paratha.', img:'https://images.unsplash.com/photo-1628294896516-344152572ee8?w=500&q=80' },
  { id:'r2', name:'Fish Paratha Roll', cat:'Paratha Rolls', price:550, desc:'Golden fried fish rolled in a warm paratha.', img:'https://images.unsplash.com/photo-1615361200098-c1a9f8dc4c69?w=500&q=80' },
  { id:'r3', name:'Chicken Jumbo Roll', cat:'Paratha Rolls', price:500, desc:'Extra-large roll stuffed generously with chicken.', img:'https://images.unsplash.com/photo-1626200926749-267fc0abc8ee?w=500&q=80' },

  // Chicken
  { id:'c1', name:'Chicken Hot Shots (6pc)', cat:'Chicken', price:550, desc:'Bite-sized crispy chicken poppers, six pieces.', img:'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=80' },
  { id:'c2', name:'BBQ Wings (8pc)', cat:'Chicken', price:820, desc:'Smoky BBQ-glazed wings, eight pieces.', img:'https://images.unsplash.com/photo-1608039858788-b9955ab0eb4c?w=500&q=80', badge:'Popular' },
  { id:'c3', name:'Chicken Drumsticks (2pc)', cat:'Chicken', price:350, desc:'Classic crispy fried drumsticks, two pieces.', img:'https://images.unsplash.com/photo-1626082927389-6cd097cee6a6?w=500&q=80' },

  // Fish
  { id:'f1', name:'Fish Fillet', cat:'Fish', price:820, desc:'Golden fried fish fillet, crisp on the outside, tender inside.', img:'https://images.unsplash.com/photo-1580217593608-61931cefc821?w=500&q=80' },
  { id:'f2', name:'Fish & Chips', cat:'Fish', price:700, desc:'Crispy fish served with a side of golden fries.', img:'https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=500&q=80' },
  { id:'f3', name:'Fish Hot Shots', cat:'Fish', price:620, desc:'Bite-sized crispy fish poppers.', img:'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=500&q=80' },

  // Rice
  { id:'ri1', name:'Rice & Spice Deal', cat:'Rice', price:500, desc:'Spiced rice bowl served with a cold drink.', img:'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&q=80' },
  { id:'ri2', name:'Chicken Biryani Bowl', cat:'Rice', price:450, desc:'Fragrant biryani rice topped with spiced chicken.', img:'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500&q=80' },

  // Pasta
  { id:'pa1', name:'RFC Special Pasta', cat:'Pasta', price:750, desc:'House-special creamy pasta, served with a cold drink.', img:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=80', badge:'Chef Pick' },
  { id:'pa2', name:'Alfredo Chicken Pasta', cat:'Pasta', price:650, desc:'Creamy alfredo pasta tossed with grilled chicken.', img:'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&q=80' },

  // Fries
  { id:'fr1', name:'Regular Fries', cat:'Fries', price:200, desc:'Classic golden fries, lightly salted.', img:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=80' },
  { id:'fr2', name:'Loaded Max Fries', cat:'Fries', price:500, desc:'Fries loaded with cheese sauce, jalapeños and mayo.', img:'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&q=80', badge:'Popular' },
  { id:'fr3', name:'Peri Peri Fries', cat:'Fries', price:300, desc:'Golden fries tossed in a fiery peri peri seasoning.', img:'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=500&q=80', badge:'Spicy' },

  // Happy Meals
  { id:'hm1', name:'Happy Meal 1', cat:'Happy Meals', price:600, desc:'2 drumsticks, fries and a cold drink.', img:'https://images.unsplash.com/photo-1619881589965-6db8d38d9ff0?w=500&q=80' },
  { id:'hm2', name:'Happy Meal 2', cat:'Happy Meals', price:900, desc:'3 drumsticks, 2 large fries and a 1.5L drink.', img:'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500&q=80' },
  { id:'hm3', name:'Happy Meal 3', cat:'Happy Meals', price:1900, desc:'5 zinger burgers with a 1.5L cold drink — feeds the crew.', img:'https://images.unsplash.com/photo-1610614819513-58e34989e371?w=500&q=80', badge:'Wow' },

  // Family Meals
  { id:'fm1', name:'Family Deal 1', cat:'Family Meals', price:1500, desc:'5 zinger burgers with a 1.5L cold drink for the whole table.', img:'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=500&q=80', badge:'Family' },
  { id:'fm2', name:'Family Deal 2', cat:'Family Meals', price:1600, desc:'Zinger bucket, loaded fries and a 1.5L cold drink.', img:'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=500&q=80', badge:'Family' },

  // Combo Deals
  { id:'co1', name:'Combo 1', cat:'Combo Deals', price:600, desc:'Zinger burger, fries and a cold drink.', img:'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500&q=80' },
  { id:'co2', name:'Combo 2', cat:'Combo Deals', price:500, desc:'Chicken burger, fries and a cold drink.', img:'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80' },

  // Drinks
  { id:'dr1', name:'Soft Drink (Regular)', cat:'Drinks', price:100, desc:'Chilled regular can of your favourite soft drink.', img:'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80' },
  { id:'dr2', name:'Soft Drink (1.5L)', cat:'Drinks', price:250, desc:'Family-size 1.5L bottle, ice cold.', img:'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&q=80' },
  { id:'dr3', name:'Fresh Lemonade', cat:'Drinks', price:200, desc:'Freshly squeezed, lightly sweetened lemonade.', img:'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500&q=80' },

  // Special Deals
  { id:'sp1', name:'Mexican Pro', cat:'Special Deals', price:650, desc:'Signature Mexican Pro with a 345ml drink.', img:'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80' },
  { id:'sp2', name:'Mehngi Deal 1', cat:'Special Deals', price:550, desc:'2 shawarmas with a cold drink.', img:'https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?w=500&q=80' },
  { id:'sp3', name:'Mehngi Deal 2', cat:'Special Deals', price:700, desc:'2 paratha rolls with a cold drink.', img:'https://images.unsplash.com/photo-1628294896516-344152572ee8?w=500&q=80' },
];

const GALLERY_IMAGES = [
  { src:'assets/images/gallery-burger-sauce.png', alt:'Crispy chicken burger drizzled with signature RFC sauce' },
  { src:'assets/images/gallery-storefront.png', alt:'RFC storefront signage at dusk' },
  { src:'assets/images/gallery-interior.png', alt:'RFC dine-in seating area' },
  { src:'assets/images/gallery-dinein-entrance.png', alt:'RFC dine-in entrance at night' },
];

// ==========================================================================
// State
// ==========================================================================
const state = {
  category: 'All',
  search: '',
  cart: JSON.parse(localStorage.getItem('rfc_cart') || '{}'),
  favorites: JSON.parse(localStorage.getItem('rfc_favorites') || '[]'),
  qty: {}, // pending quantity per item before adding to cart
};

function saveCart(){ localStorage.setItem('rfc_cart', JSON.stringify(state.cart)); }
function saveFavorites(){ localStorage.setItem('rfc_favorites', JSON.stringify(state.favorites)); }

// ==========================================================================
// Init
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavbar();
  initHeroVideo();
  initReveal();
  initCategories();
  initMenu();
  initCart();
  initGallery();
  initTestimonials();
  initReservationForm();
  initNewsletter();
  initSmoothAnchors();
  initCategoryJumps();
});

/* ---------------- Loader ---------------- */
function initLoader(){
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 400);
  });
  // fallback in case 'load' already fired
  setTimeout(() => loader.classList.add('hidden'), 2500);
}

/* ---------------- Navbar ---------------- */
function initNavbar(){
  const navbar = document.getElementById('navbar');
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open);
    document.body.classList.toggle('no-scroll', open);
  });
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      document.body.classList.remove('no-scroll');
    });
  });

  // active link on scroll
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });
  sections.forEach(s => navObserver.observe(s));

  document.getElementById('loginBtn').addEventListener('click', () => {
    alert('Login is not wired up yet — connect this to your auth provider or booking system.');
  });
}

/* ---------------- Hero video fallback ---------------- */
function initHeroVideo(){
  const video = document.getElementById('heroVideo');
  const fallback = document.getElementById('heroFallback');
  fallback.style.display = 'none';
  video.addEventListener('error', () => {
    video.style.display = 'none';
    fallback.style.display = 'block';
  });
  // if there's no playable source, canplay never fires — check shortly after load
  setTimeout(() => {
    if (video.readyState === 0){
      video.style.display = 'none';
      fallback.style.display = 'block';
    }
  }, 1200);
}

/* ---------------- Scroll reveal ---------------- */
function initReveal(){
  const els = document.querySelectorAll('.reveal, .reveal-scale');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting){
        setTimeout(() => entry.target.classList.add('in-view'), i * 40);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  els.forEach(el => observer.observe(el));

  const heatEls = document.querySelectorAll('[data-heat]');
  const heatObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('lit');
        heatObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  heatEls.forEach(el => heatObserver.observe(el));
}

/* ---------------- Categories ---------------- */
function initCategories(){
  const wrap = document.getElementById('categoryScroll');
  const cats = ['All', ...CATEGORIES];
  wrap.innerHTML = cats.map(cat =>
    `<button class="cat-chip ${cat === 'All' ? 'active' : ''}" data-cat="${cat}">${cat}</button>`
  ).join('');

  wrap.querySelectorAll('.cat-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      wrap.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.category = chip.dataset.cat;
      renderMenu();
    });
  });
}

/* ---------------- Menu ---------------- */
function initMenu(){
  document.getElementById('menuSearch').addEventListener('input', (e) => {
    state.search = e.target.value.trim().toLowerCase();
    renderMenu();
  });
  renderMenu();
}

function renderMenu(){
  const grid = document.getElementById('menuGrid');
  const empty = document.getElementById('menuEmpty');

  const filtered = MENU.filter(item => {
    const matchesCat = state.category === 'All' || item.cat === state.category;
    const matchesSearch = !state.search ||
      item.name.toLowerCase().includes(state.search) ||
      item.desc.toLowerCase().includes(state.search) ||
      item.cat.toLowerCase().includes(state.search);
    return matchesCat && matchesSearch;
  });

  empty.classList.toggle('show', filtered.length === 0);
  grid.innerHTML = filtered.map(item => cardHTML(item)).join('');

  // re-observe reveal for new cards (simple fade-in, not gated)
  grid.querySelectorAll('.menu-card').forEach((card, i) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(14px)';
    requestAnimationFrame(() => {
      card.style.transition = 'opacity .5s ease, transform .5s ease';
      setTimeout(() => {
        card.style.opacity = 1;
        card.style.transform = 'none';
      }, i * 35);
    });
  });

  bindCardEvents();
}

function cardHTML(item){
  const isFav = state.favorites.includes(item.id);
  const qty = state.qty[item.id] || 1;
  return `
  <div class="menu-card" data-id="${item.id}">
    <div class="menu-card-media">
      <img src="${item.img}" alt="${item.name}" loading="lazy">
      ${item.badge ? `<span class="menu-card-badge">${item.badge}</span>` : ''}
      <button class="fav-btn ${isFav ? 'active' : ''}" data-fav="${item.id}" aria-label="Toggle favourite">
        ${isFav ? '♥' : '♡'}
      </button>
    </div>
    <div class="menu-card-body">
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <div class="menu-card-foot">
        <span class="price-tag">Rs. ${item.price}</span>
        <div class="qty-selector">
          <button class="qty-btn" data-qty-minus="${item.id}">−</button>
          <span class="qty-val" data-qty-val="${item.id}">${qty}</span>
          <button class="qty-btn" data-qty-plus="${item.id}">+</button>
        </div>
      </div>
      <button class="add-cart-btn" data-add="${item.id}">Add To Cart</button>
    </div>
  </div>`;
}

function bindCardEvents(){
  document.querySelectorAll('[data-fav]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.fav;
      if (state.favorites.includes(id)){
        state.favorites = state.favorites.filter(f => f !== id);
        btn.classList.remove('active');
        btn.textContent = '♡';
      } else {
        state.favorites.push(id);
        btn.classList.add('active');
        btn.textContent = '♥';
      }
      saveFavorites();
    });
  });

  document.querySelectorAll('[data-qty-plus]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.qtyPlus;
      state.qty[id] = (state.qty[id] || 1) + 1;
      document.querySelector(`[data-qty-val="${id}"]`).textContent = state.qty[id];
    });
  });
  document.querySelectorAll('[data-qty-minus]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.qtyMinus;
      state.qty[id] = Math.max(1, (state.qty[id] || 1) - 1);
      document.querySelector(`[data-qty-val="${id}"]`).textContent = state.qty[id];
    });
  });

  document.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.add;
      const item = MENU.find(m => m.id === id);
      const qty = state.qty[id] || 1;
      state.cart[id] = (state.cart[id] || 0) + qty;
      saveCart();
      renderCart();
      state.qty[id] = 1;
      document.querySelector(`[data-qty-val="${id}"]`).textContent = 1;

      btn.classList.add('added');
      btn.textContent = 'Added ✓';
      setTimeout(() => { btn.classList.remove('added'); btn.textContent = 'Add To Cart'; }, 1200);
    });
  });
}

/* ---------------- Cart ---------------- */
const DELIVERY_FEE = 100;

function initCart(){
  const cartBtn = document.getElementById('cartBtn');
  const overlay = document.getElementById('cartOverlay');
  const drawer = document.getElementById('cartDrawer');
  const closeBtn = document.getElementById('cartClose');

  const open = () => { overlay.classList.add('open'); drawer.classList.add('open'); document.body.classList.add('no-scroll'); };
  const close = () => { overlay.classList.remove('open'); drawer.classList.remove('open'); document.body.classList.remove('no-scroll'); };

  cartBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);

  document.getElementById('checkoutBtn').addEventListener('click', () => {
    const note = document.getElementById('checkoutNote');
    note.textContent = 'Order placed! We\u2019ll confirm shortly over WhatsApp or call.';
    state.cart = {};
    saveCart();
    setTimeout(() => { renderCart(); note.textContent = ''; close(); }, 1600);
  });

  renderCart();
}

function renderCart(){
  const itemsWrap = document.getElementById('cartItems');
  const summary = document.getElementById('cartSummary');
  const countEl = document.getElementById('cartCount');
  const ids = Object.keys(state.cart).filter(id => state.cart[id] > 0);

  const totalCount = ids.reduce((sum, id) => sum + state.cart[id], 0);
  countEl.textContent = totalCount;

  if (ids.length === 0){
    itemsWrap.innerHTML = `<p class="cart-empty">Your cart is empty. Add something delicious from the menu.</p>`;
    summary.style.display = 'none';
    return;
  }

  summary.style.display = 'block';
  let subtotal = 0;

  itemsWrap.innerHTML = ids.map(id => {
    const item = MENU.find(m => m.id === id);
    const qty = state.cart[id];
    subtotal += item.price * qty;
    return `
    <div class="cart-item" data-cart-id="${id}">
      <img src="${item.img}" alt="${item.name}">
      <div>
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">Rs. ${item.price} × ${qty}</p>
      </div>
      <div class="cart-item-controls">
        <div class="qty-selector">
          <button class="qty-btn" data-cart-minus="${id}">−</button>
          <span class="qty-val">${qty}</span>
          <button class="qty-btn" data-cart-plus="${id}">+</button>
        </div>
        <button class="cart-item-remove" data-cart-remove="${id}">Remove</button>
      </div>
    </div>`;
  }).join('');

  document.getElementById('cartSubtotal').textContent = `Rs. ${subtotal}`;
  document.getElementById('cartDelivery').textContent = `Rs. ${DELIVERY_FEE}`;
  document.getElementById('cartTotal').textContent = `Rs. ${subtotal + DELIVERY_FEE}`;

  itemsWrap.querySelectorAll('[data-cart-plus]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.cartPlus;
      state.cart[id]++;
      saveCart(); renderCart();
    });
  });
  itemsWrap.querySelectorAll('[data-cart-minus]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.cartMinus;
      state.cart[id] = Math.max(1, state.cart[id] - 1);
      saveCart(); renderCart();
    });
  });
  itemsWrap.querySelectorAll('[data-cart-remove]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.cartRemove;
      delete state.cart[id];
      saveCart(); renderCart();
    });
  });
}

/* ---------------- Gallery + Lightbox ---------------- */
function initGallery(){
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = GALLERY_IMAGES.map(({ src, alt }) =>
    `<div class="gallery-item reveal" data-src="${src}"><img src="${src}" alt="${alt}" loading="lazy"></div>`
  ).join('');

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');

  grid.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      lightboxImg.src = item.dataset.src;
      lightbox.classList.add('open');
      document.body.classList.add('no-scroll');
    });
    // re-run reveal observer for dynamically added items
    item.classList.add('in-view');
  });

  const close = () => { lightbox.classList.remove('open'); document.body.classList.remove('no-scroll'); };
  document.getElementById('lightboxClose').addEventListener('click', close);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

/* ---------------- Testimonials ---------------- */
function initTestimonials(){
  const slides = document.querySelectorAll('.testimonial-slide');
  const dotsWrap = document.getElementById('testimonialDots');
  let current = 0, timer;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Show testimonial ${i+1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap.querySelectorAll('button');

  function goTo(i){
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = i;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    resetTimer();
  }
  function next(){ goTo((current + 1) % slides.length); }
  function resetTimer(){ clearInterval(timer); timer = setInterval(next, 6000); }
  resetTimer();
}

/* ---------------- Reservation form ---------------- */
function initReservationForm(){
  const form = document.getElementById('reservationForm');
  const note = document.getElementById('resFormNote');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const checks = [
      { id:'resName', field:'name', test: v => v.trim().length > 1 },
      { id:'resPhone', field:'phone', test: v => /^[0-9+\-\s]{7,15}$/.test(v.trim()) },
      { id:'resDate', field:'date', test: v => v.trim().length > 0 },
      { id:'resTime', field:'time', test: v => v.trim().length > 0 },
      { id:'resGuests', field:'guests', test: v => v.trim().length > 0 },
    ];

    checks.forEach(({ id, field, test }) => {
      const input = document.getElementById(id);
      const group = form.querySelector(`[data-field="${field}"]`);
      const ok = test(input.value);
      group.classList.toggle('error', !ok);
      if (!ok) valid = false;
    });

    if (!valid){
      note.style.color = 'var(--red)';
      note.textContent = 'Please fix the highlighted fields.';
      return;
    }

    note.style.color = 'var(--gold-light)';
    note.textContent = 'Table requested! We\u2019ll confirm shortly by phone or WhatsApp.';
    form.reset();
    setTimeout(() => { note.textContent = ''; }, 4000);
  });
}

/* ---------------- Newsletter ---------------- */
function initNewsletter(){
  const form = document.getElementById('newsletterForm');
  const note = document.getElementById('newsletterNote');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    note.style.color = 'var(--gold-light)';
    note.textContent = 'Subscribed — welcome to the RFC list!';
    form.reset();
    setTimeout(() => { note.textContent = ''; }, 3500);
  });
}

/* ---------------- Smooth anchors with navbar offset ---------------- */
function initSmoothAnchors(){
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      const id = this.getAttribute('href');
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - 78;
      window.scrollTo({ top, behavior:'smooth' });
    });
  });
}

/* ---------------- "Deals" links jump into the menu pre-filtered ---------------- */
function initCategoryJumps(){
  document.querySelectorAll('[data-cat-jump]').forEach(link => {
    link.addEventListener('click', () => {
      const cat = link.dataset.catJump;
      const chip = document.querySelector(`.cat-chip[data-cat="${cat}"]`);
      if (chip) chip.click();
    });
  });
}
