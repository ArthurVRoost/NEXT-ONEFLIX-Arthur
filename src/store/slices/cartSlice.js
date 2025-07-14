import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
    itemsCount: 0,
    isOpen: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(cartItem => cartItem.id === item.id);
      
      if (!existingItem) {
        state.items.push({
          ...item,
          quantity: 1,
          isFree: false,
        });
      }
      
      state.itemsCount = state.items.reduce((total, item) => total + item.quantity, 0);

      if (state.items.length >= 5) {
        const cheapestItem = state.items.reduce((min, item) => 
          item.price < min.price ? item : min
        );
        state.items = state.items.map(item => ({
          ...item,
          isFree: item.id === cheapestItem.id
        }));
      }
      

      state.total = state.items.reduce((total, item) => 
        total + (item.isFree ? 0 : item.price * item.quantity), 0
      );
    },
    addAllEpisodes: (state, action) => {
  const { animeId, animeTitle, animeImage, episodeCount } = action.payload;
  
  // Générer un prix aléatoire entre 10 et 15
  const randomPrice = Math.floor(Math.random() * 6) + 10; // 10 à 15
  
  // Créer un item spécial pour "tous les épisodes"
  const allEpisodesItem = {
    id: `all-episodes-${animeId}`,
    title: `${animeTitle} - All Episodes (${episodeCount} episodes)`,
    price: randomPrice,
    image: animeImage,
    quantity: 1,
    isFree: false,
    isAllEpisodes: true, // Flag pour identifier cet item
    animeId: animeId,
    episodeCount: episodeCount
  };
  
  // Vérifier si cet anime n'est pas déjà dans le panier
  const existingItem = state.items.find(item => item.id === allEpisodesItem.id);
  
  if (!existingItem) {
    state.items.push(allEpisodesItem);
  }
  
  state.itemsCount = state.items.reduce((total, item) => total + item.quantity, 0);


  if (state.items.length >= 5) {
    const cheapestItem = state.items.reduce((min, item) => 
      item.price < min.price ? item : min
    );
    state.items = state.items.map(item => ({
      ...item,
      isFree: item.id === cheapestItem.id
    }));
  }
  
  state.total = state.items.reduce((total, item) => 
    total + (item.isFree ? 0 : item.price * item.quantity), 0
  );
},
    
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
      state.itemsCount = state.items.reduce((total, item) => total + item.quantity, 0);
      
     
      state.items = state.items.map(item => ({ ...item, isFree: false }));
      
      if (state.items.length >= 5) {
        const cheapestItem = state.items.reduce((min, item) => 
          item.price < min.price ? item : min
        );
        state.items = state.items.map(item => ({
          ...item,
          isFree: item.id === cheapestItem.id
        }));
      }
      
      state.total = state.items.reduce((total, item) => 
        total + (item.isFree ? 0 : item.price * item.quantity), 0
      );
    },
    
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(item => item.id === itemId);
      
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter(item => item.id !== itemId);
      }
      
      state.itemsCount = state.items.reduce((total, item) => total + item.quantity, 0);
      
      
      state.items = state.items.map(item => ({ ...item, isFree: false }));
      
      if (state.items.length >= 5) {
        const cheapestItem = state.items.reduce((min, item) => 
          item.price < min.price ? item : min
        );
        state.items = state.items.map(item => ({
          ...item,
          isFree: item.id === cheapestItem.id
        }));
      }
      
      state.total = state.items.reduce((total, item) => 
        total + (item.isFree ? 0 : item.price * item.quantity), 0
      );
    },
    
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.itemsCount = 0;
    },
    
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  decreaseQuantity, 
  clearCart, 
  toggleCart,
  addAllEpisodes 
} = cartSlice.actions;

export default cartSlice.reducer;