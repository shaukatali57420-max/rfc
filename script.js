// ==========================================================================
// RFC — Data
// Prices/names are approximated from the RFC menu poster where legible.
// Edit this array to correct any item, price or description.
// ==========================================================================
const CATEGORIES = [
  'Deals','Burgers','Fries','Wraps & Rolls','Shawarma','Pizza',
  'Chicken & Wings','Fish','Rice','Family Meals','Happy Meals',
  'Combo Deals','Add-Ons'
];

const MENU = [
  // ---- Burgers ----
  { id:'b1', name:'Chicken Burger', cat:'Burgers', price:350, desc:'Grilled chicken patty, lettuce and house mayo.', img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80' },
  { id:'b2', name:'Tikka Burger', cat:'Burgers', price:370, desc:'Spiced chicken tikka patty in a soft bun.', img:'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&q=80' },
  { id:'b3', name:'Champ Burger', cat:'Burgers', price:550, desc:'RFC\'s signature loaded champ burger.', img:'https://images.unsplash.com/photo-1550317138-10000687a72b?w=500&q=80', badge:'Best Seller' },
  { id:'b4', name:'Double Decker Burger', cat:'Burgers', price:670, desc:'Two crispy chicken patties stacked with cheese.', img:'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&q=80' },
  { id:'b5', name:'Tower Burger', cat:'Burgers', price:600, desc:'Chicken fillet stacked with cheese and a crisp hashbrown.', img:'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500&q=80' },
  { id:'b6', name:'Zinger Burger', cat:'Burgers', price:430, desc:'The original crispy zinger fillet, lettuce and mayo.', img:'https://images.unsplash.com/photo-1615297928064-24977384d0da?w=500&q=80', badge:'Best Seller' },
  { id:'b7', name:'Jalapeño Zinger', cat:'Burgers', price:490, desc:'Zinger fillet loaded with jalapeños and melted cheese.', img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&q=80', badge:'Spicy' },
  { id:'b8', name:'Spicy Zinger', cat:'Burgers', price:460, desc:'Extra hot zinger fillet, finished with our signature sauce drizzle.', img:'assets/images/gallery/burger-sauce-closeup.jpg', badge:'Spicy' },
  { id:'b9', name:'Fish Burger', cat:'Burgers', price:700, desc:'Golden fried fish fillet in a soft bun.', img:'https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=500&q=80' },

  // ---- Fries ----
  { id:'fr1', name:'Regular Fries', cat:'Fries', price:300, desc:'Classic golden fries, lightly salted.', img:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=80' },
  { id:'fr2', name:'Large Fries', cat:'Fries', price:400, desc:'A bigger portion of our classic golden fries.', img:'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500&q=80' },
  { id:'fr3', name:'Family Fries', cat:'Fries', price:600, desc:'Sharing-size fries for the whole table.', img:'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=500&q=80' },
  { id:'fr4', name:'Loaded Fries', cat:'Fries', price:700, desc:'Fries loaded with cheese sauce, jalapeños and mayo.', img:'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&q=80', badge:'Popular' },
  { id:'fr5', name:'Curly Fries', cat:'Fries', price:750, desc:'Seasoned curly-cut fries, crispy through and through.', img:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=80' },
  { id:'fr6', name:'Cheesy Fries', cat:'Fries', price:800, desc:'Fries smothered in melted cheese sauce.', img:'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&q=80' },

  // ---- Wraps & Rolls ----
  { id:'w1', name:'Chipotle Wrap', cat:'Wraps & Rolls', price:550, desc:'Smoky chipotle chicken rolled with fresh veggies.', img:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&q=80' },
  { id:'w2', name:'Behari Roll', cat:'Wraps & Rolls', price:650, desc:'Spiced behari-style chicken roll, comes with a cold drink.', img:'https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70?w=500&q=80' },
  { id:'w3', name:'Paratha Roll', cat:'Wraps & Rolls', price:400, desc:'Crispy chicken wrapped in a flaky paratha.', img:'https://images.unsplash.com/photo-1628294896516-344152572ee8?w=500&q=80' },
  { id:'w4', name:'Zinger Paratha Roll', cat:'Wraps & Rolls', price:500, desc:'Zinger fillet rolled in a warm paratha.', img:'https://images.unsplash.com/photo-1626200926749-267fc0abc8ee?w=500&q=80' },
  { id:'w5', name:'Jumbo Paratha Roll', cat:'Wraps & Rolls', price:500, desc:'Extra-large roll, generously stuffed with chicken.', img:'https://images.unsplash.com/photo-1615361200098-c1a9f8dc4c69?w=500&q=80' },
  { id:'w6', name:'Fish Roll', cat:'Wraps & Rolls', price:550, desc:'Golden fried fish rolled in a warm paratha.', img:'https://images.unsplash.com/photo-1615361200098-c1a9f8dc4c69?w=500&q=80' },

  // ---- Shawarma ----
  { id:'s1', name:'Chicken Shawarma', cat:'Shawarma', price:300, desc:'Classic shawarma with garlic sauce and pickles.', img:'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500&q=80' },
  { id:'s2', name:'Zinger Shawarma', cat:'Shawarma', price:450, desc:'Shawarma loaded with crispy zinger strips.', img:'https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?w=500&q=80' },
  { id:'s3', name:'Fajita Shawarma', cat:'Shawarma', price:450, desc:'Fajita-spiced chicken shawarma with extra sauce.', img:'https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?w=500&q=80', badge:'Popular' },

  // ---- Chicken & Wings ----
  { id:'c1', name:'Drum Piece', cat:'Chicken & Wings', price:220, desc:'Single crispy fried chicken drumstick.', img:'https://images.unsplash.com/photo-1626082927389-6cd097cee6a6?w=500&q=80' },
  { id:'c2', name:'Thai Piece', cat:'Chicken & Wings', price:350, desc:'Thai-style spiced fried chicken piece.', img:'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=80' },
  { id:'c3', name:'Boneless Thai', cat:'Chicken & Wings', price:380, desc:'Boneless Thai-spiced chicken bites.', img:'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=80' },
  { id:'c4', name:'Hot Wings', cat:'Chicken & Wings', price:590, desc:'Crispy fried wings tossed in a hot glaze.', img:'https://images.unsplash.com/photo-1608039858788-b9955ab0eb4c?w=500&q=80' },
  { id:'c5', name:'Hotshot', cat:'Chicken & Wings', price:550, desc:'Bite-sized crispy chicken poppers.', img:'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=80' },
  { id:'c6', name:'Nuggets', cat:'Chicken & Wings', price:650, desc:'Classic golden chicken nuggets.', img:'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=80' },
  { id:'c7', name:'BBQ Wings', cat:'Chicken & Wings', price:670, desc:'Smoky BBQ-glazed chicken wings.', img:'https://images.unsplash.com/photo-1608039858788-b9955ab0eb4c?w=500&q=80', badge:'Popular' },
  { id:'c8', name:'Injected Grilled Broast (Half)', cat:'Chicken & Wings', price:900, desc:'Half chicken, marinade-injected and grilled — no fry oil.', img:'https://images.unsplash.com/photo-1598515213692-5f252f107992?w=500&q=80', badge:'No Oil' },
  { id:'c9', name:'Injected Grilled Broast (Full)', cat:'Chicken & Wings', price:1800, desc:'Full chicken, marinade-injected and grilled — no fry oil.', img:'https://images.unsplash.com/photo-1598515213692-5f252f107992?w=500&q=80', badge:'No Oil' },

  // ---- Fish ----
  { id:'fi1', name:'Fish Piece', cat:'Fish', price:490, desc:'Single piece of golden fried fish.', img:'https://images.unsplash.com/photo-1580217593608-61931cefc821?w=500&q=80' },
  { id:'fi2', name:'Fish Hotshot', cat:'Fish', price:820, desc:'Bite-sized crispy fish poppers.', img:'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=500&q=80' },
  { id:'fi3', name:'Fish Finger', cat:'Fish', price:850, desc:'Crispy breaded fish fingers.', img:'https://images.unsplash.com/photo-1580217593608-61931cefc821?w=500&q=80' },
  { id:'fi4', name:'Fish N\' Chips', cat:'Fish', price:800, desc:'Crispy fish served with a side of golden fries.', img:'https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=500&q=80' },

  // ---- Rice ----
  { id:'ri1', name:'Rice & Spice', cat:'Rice', price:500, desc:'Spiced rice bowl, comes with a cold drink.', img:'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&q=80' },
  { id:'ri2', name:'Fishi Rice', cat:'Rice', price:550, desc:'Signature fish-topped rice bowl.', img:'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500&q=80' },

  // ---- Pizza (named specialties — Regular price shown, Large in parentheses) ----
  { id:'pz1', name:'Xtreme In Pizza', cat:'Pizza', price:1300, desc:'Loaded specialty pizza. Regular Rs.1300 / Large Rs.1800.', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80' },
  { id:'pz2', name:'Crown Crust Pizza', cat:'Pizza', price:1300, desc:'Stuffed-crust specialty pizza. Regular Rs.1300 / Large Rs.1800.', img:'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=500&q=80' },
  { id:'pz3', name:'Super Mughlai Pizza', cat:'Pizza', price:1550, desc:'Rich, spiced Mughlai-style specialty pizza.', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80' },
  { id:'pz4', name:'Special Crispy Pizza', cat:'Pizza', price:1550, desc:'Extra-crispy base specialty pizza.', img:'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=500&q=80' },
  // ---- Pizza (premium flavours — priced at Regular tier; Small Rs.600 / Large Rs.1550 also available) ----
  { id:'pz5', name:'Behari Pizza', cat:'Pizza', price:1200, desc:'Small Rs.600 · Regular Rs.1200 · Large Rs.1550.', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80' },
  { id:'pz6', name:'Bone Fire Pizza', cat:'Pizza', price:1200, desc:'Small Rs.600 · Regular Rs.1200 · Large Rs.1550.', img:'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=500&q=80' },
  { id:'pz7', name:'Shahi Pizza', cat:'Pizza', price:1200, desc:'Small Rs.600 · Regular Rs.1200 · Large Rs.1550.', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80' },
  { id:'pz8', name:'Creamy Pizza', cat:'Pizza', price:1200, desc:'Small Rs.600 · Regular Rs.1200 · Large Rs.1550.', img:'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=500&q=80' },
  { id:'pz9', name:'Special Pizza', cat:'Pizza', price:1200, desc:'Small Rs.600 · Regular Rs.1200 · Large Rs.1550.', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80' },
  { id:'pz10', name:'Peri Peri Pizza', cat:'Pizza', price:1200, desc:'Small Rs.600 · Regular Rs.1200 · Large Rs.1550.', img:'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=500&q=80', badge:'Spicy' },
  { id:'pz11', name:'Supreme Pizza', cat:'Pizza', price:1200, desc:'Small Rs.600 · Regular Rs.1200 · Large Rs.1550.', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80' },
  { id:'pz12', name:'Super Supreme Pizza', cat:'Pizza', price:1200, desc:'Small Rs.600 · Regular Rs.1200 · Large Rs.1550.', img:'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=500&q=80', badge:'Popular' },
  { id:'pz13', name:'Lemon Shahi Pizza', cat:'Pizza', price:1200, desc:'Small Rs.600 · Regular Rs.1200 · Large Rs.1550.', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80' },
  { id:'pz14', name:'Cheese Lover Pizza', cat:'Pizza', price:1200, desc:'Small Rs.600 · Regular Rs.1200 · Large Rs.1550.', img:'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=500&q=80' },
  { id:'pz15', name:'Pepperoni Pizza', cat:'Pizza', price:1200, desc:'Small Rs.600 · Regular Rs.1200 · Large Rs.1550.', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80' },
  { id:'pz16', name:'Tikka Pizza', cat:'Pizza', price:1200, desc:'Small Rs.600 · Regular Rs.1200 · Large Rs.1550.', img:'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=500&q=80' },
  { id:'pz17', name:'Fajita Pizza', cat:'Pizza', price:1200, desc:'Small Rs.600 · Regular Rs.1200 · Large Rs.1550.', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80' },
  { id:'pz18', name:'Fajita Sicilian Pizza', cat:'Pizza', price:1200, desc:'Small Rs.600 · Regular Rs.1200 · Large Rs.1550.', img:'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=500&q=80' },
  { id:'pz19', name:'Vege Lover Pizza', cat:'Pizza', price:1200, desc:'Small Rs.600 · Regular Rs.1200 · Large Rs.1550.', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80' },
  { id:'pz20', name:'Tandoori Pizza', cat:'Pizza', price:1200, desc:'Small Rs.600 · Regular Rs.1200 · Large Rs.1550.', img:'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=500&q=80' },
  { id:'pz21', name:'Malai Boti Pizza', cat:'Pizza', price:1200, desc:'Small Rs.600 · Regular Rs.1200 · Large Rs.1550.', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80' },
  { id:'pz22', name:'Cocktail Pizza', cat:'Pizza', price:1200, desc:'Small Rs.600 · Regular Rs.1200 · Large Rs.1550.', img:'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=500&q=80' },
  // ---- Pizza deals ----
  { id:'pzd1', name:'3 Small Pizzas + Liter Drink', cat:'Pizza', price:1600, desc:'Three small pizzas (any flavour) with a 1L drink.', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80', badge:'Deal' },
  { id:'pzd2', name:'2 Regular Pizzas + Liter Drink', cat:'Pizza', price:2100, desc:'Two regular pizzas (any flavour) with a 1L drink.', img:'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=500&q=80', badge:'Deal' },
  { id:'pzd3', name:'2 Large Pizzas + Liter Drink', cat:'Pizza', price:2900, desc:'Two large pizzas (any flavour) with a 1L drink.', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80', badge:'Deal' },
  { id:'pzd4', name:'Midnight Small Pizza + Buddy', cat:'Pizza', price:600, desc:'11pm till close: small pizza with a Buddy drink.', img:'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=500&q=80', badge:'Midnight' },
  { id:'pzd5', name:'Midnight Regular Pizza + Buddy', cat:'Pizza', price:1200, desc:'11pm till close: regular pizza with a Buddy drink.', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80', badge:'Midnight' },
  { id:'pzd6', name:'Midnight Large Pizza + Buddy', cat:'Pizza', price:1550, desc:'11pm till close: large pizza with a Buddy drink.', img:'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=500&q=80', badge:'Midnight' },

  // ---- Family Meals ----
  { id:'fm1', name:'Family Meal 1', cat:'Family Meals', price:2000, desc:'5 Zinger burgers with a 1 litre drink.', img:'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=500&q=80', badge:'Family' },
  { id:'fm2', name:'Family Meal 2', cat:'Family Meals', price:1600, desc:'5 chicken burgers with a 1 litre drink.', img:'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=500&q=80', badge:'Family' },
  { id:'fm3', name:'Family Meal 3', cat:'Family Meals', price:1000, desc:'5 drumsticks with a 1 litre drink.', img:'https://images.unsplash.com/photo-1626082927389-6cd097cee6a6?w=500&q=80', badge:'Family' },

  // ---- Happy Meals ----
  { id:'hm1', name:'Happy Meal 1', cat:'Happy Meals', price:650, desc:'2 drumsticks, 1 Thai piece and a Buddy drink.', img:'https://images.unsplash.com/photo-1619881589965-6db8d38d9ff0?w=500&q=80' },
  { id:'hm2', name:'Happy Meal 2', cat:'Happy Meals', price:1600, desc:'3 Zinger burgers, large fries and a 1L drink.', img:'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500&q=80' },
  { id:'hm3', name:'Happy Meal 3', cat:'Happy Meals', price:1200, desc:'2 Zinger burgers, 2 Thai pieces and 2 Buddy drinks.', img:'https://images.unsplash.com/photo-1610614819513-58e34989e371?w=500&q=80', badge:'Popular' },

  // ---- Combo Deals ----
  { id:'co1', name:'Combo 1', cat:'Combo Deals', price:650, desc:'Zinger burger, fries and a Buddy drink.', img:'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500&q=80' },
  { id:'co2', name:'Combo 2', cat:'Combo Deals', price:550, desc:'Chicken burger, fries and a Buddy drink.', img:'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80' },
  { id:'co3', name:'Deal 555', cat:'Combo Deals', price:950, desc:'2 Zinger burgers, fries and 2 Buddy drinks.', img:'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80', badge:'Popular' },
  { id:'co4', name:'Deal 666', cat:'Combo Deals', price:850, desc:'2 Tikka burgers, fries and 2 Buddy drinks.', img:'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&q=80' },
  { id:'co5', name:'Mehngi Deal 1', cat:'Combo Deals', price:550, desc:'2 shawarmas with 1 Buddy drink.', img:'https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?w=500&q=80' },
  { id:'co6', name:'Mehngi Deal 2', cat:'Combo Deals', price:700, desc:'2 paratha rolls with 1 Buddy drink.', img:'https://images.unsplash.com/photo-1628294896516-344152572ee8?w=500&q=80' },
  { id:'co7', name:'Mexican Pro', cat:'Combo Deals', price:650, desc:'Signature Mexican Pro sandwich with a 345ml drink.', img:'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80' },
  { id:'co8', name:'RFC Special Pasta', cat:'Combo Deals', price:750, desc:'House-special pasta with a cold drink. Price not fully legible on menu photo — please confirm.', img:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=80', badge:'Confirm Price' },

  // ---- Add-Ons ----
  { id:'ad1', name:'Buddy (350ml Drink)', cat:'Add-Ons', price:90, desc:'Priced Rs.90 on the burger menu but Rs.60 on the pizza menu — please confirm the correct price.', img:'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80', badge:'Confirm Price' },
  { id:'ad2', name:'Liter Drink', cat:'Add-Ons', price:100, desc:'1 litre bottle, ice cold.', img:'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&q=80' },
  { id:'ad3', name:'1.5 Liter Drink', cat:'Add-Ons', price:210, desc:'Family-size 1.5L bottle, ice cold.', img:'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&q=80' },
  { id:'ad4', name:'Dip Sauce', cat:'Add-Ons', price:100, desc:'Extra portion of your favourite dip.', img:'https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?w=500&q=80' },
  { id:'ad5', name:'Dinner Roll', cat:'Add-Ons', price:100, desc:'Warm dinner roll on the side.', img:'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=500&q=80' },
  { id:'ad6', name:'Cheese Slice', cat:'Add-Ons', price:100, desc:'Extra cheese slice add-on.', img:'https://images.unsplash.com/photo-1631206753348-db44968fd440?w=500&q=80' },
];

const GALLERY_IMAGES = [
  'assets/images/restaurant/exterior-storefront.jpg',
  'assets/images/restaurant/dine-in-entrance.jpg',
  'assets/images/restaurant/dine-in-interior.jpg',
  'assets/images/gallery/burger-sauce-closeup.jpg',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&q=80',
  'https://images.unsplash.com/photo-1550317138-10000687a72b?w=700&q=80',
  'https://images.unsplash.com/photo-1608039858788-b9955ab0eb4c?w=700&q=80',
  'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=700&q=80',
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

  // Any link with data-cat (nav or footer) jumps to the menu section AND
  // pre-selects that category chip, instead of relying on a dead #deals anchor.
  document.querySelectorAll('a[data-cat]').forEach(link => {
    link.addEventListener('click', () => {
      const chip = document.querySelector(`.cat-chip[data-cat="${link.dataset.cat}"]`);
      if (chip) chip.click();
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
  grid.innerHTML = GALLERY_IMAGES.map((src, i) =>
    `<div class="gallery-item reveal" data-src="${src}"><img src="${src}" alt="RFC gallery photo ${i+1}" loading="lazy"></div>`
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
