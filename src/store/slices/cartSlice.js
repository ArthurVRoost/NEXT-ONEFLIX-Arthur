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
        // Vérifier si l'anime est en réduction
        let originalPrice = item.price;
        let finalPrice = item.price;
        let hasDiscount = false;

        try {
          const discountedAnime = JSON.parse(localStorage.getItem('discountedAnime'));
          if (discountedAnime && item.animeId && item.animeId == discountedAnime.id) {
            finalPrice = item.price * 0.8;
            hasDiscount = true;
          }
        } catch (error) {
          console.error('Erreur lors de la récupération de la réduction:', error);
        }
        
        state.items.push({
          ...item,
          quantity: 1,
          isFree: false,
          price: finalPrice,
          originalPrice: originalPrice,
          hasDiscount: hasDiscount,
          discountPercentage: hasDiscount ? 20 : 0
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

      const itemId = `all-episodes-${animeId}`;

      const existingItem = state.items.find(item => item.id === itemId);

      if (existingItem) {
        console.warn("Le pack d'épisodes complet est déjà dans le panier.");
        return;
      }

      const randomPrice = Math.floor(Math.random() * 6) + 10;
      let finalPrice = randomPrice;
      let hasDiscount = false;
      let originalPrice = randomPrice;
      
      // Vérifier si l'anime est en réduction
      try {
        const discountedAnime = JSON.parse(localStorage.getItem('discountedAnime'));
        if (discountedAnime && animeId == discountedAnime.id) {
          finalPrice = randomPrice * 0.8; // 20% de réduction
          hasDiscount = true;
        }
      } catch (error) {
        console.error('Erreur lors de la récupération de la réduction:', error);
      }

      const allEpisodesItem = {
        id: itemId,
        title: `${animeTitle} - All Episodes (${episodeCount} episodes)`,
        price: finalPrice,
        originalPrice: originalPrice,
        hasDiscount: hasDiscount,
        discountPercentage: hasDiscount ? 20 : 0,
        image: animeImage,
        quantity: 1,
        isFree: false,
        isAllEpisodes: true,
        animeId: animeId,
        episodeCount: episodeCount
      };

      state.items.push(allEpisodesItem);

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

    completePurchase: (state, action) => {
      const { userId } = action.payload;
      
      if (state.items.length === 0) {
        return state;
      }

      const purchase = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        items: state.items.map(item => ({
          id: item.id,
          name: item.title || item.name,
          category: item.isAllEpisodes ? 'Anime - All Episodes' : 'Anime Episode',
          price: item.isFree ? 0 : item.price,
          originalPrice: item.originalPrice || item.price,
          hasDiscount: item.hasDiscount || false,
          discountPercentage: item.discountPercentage || 0,
          quantity: item.quantity,
          image: item.image,
          animeId: item.animeId || null,
          episodeCount: item.episodeCount || null,
          isAllEpisodes: item.isAllEpisodes || false
        })),
        total: state.total
      };

      const existingHistory = JSON.parse(localStorage.getItem(`purchaseHistory_${userId}`)) || [];
      const updatedHistory = [purchase, ...existingHistory];
      localStorage.setItem(`purchaseHistory_${userId}`, JSON.stringify(updatedHistory));

      state.items = [];
      state.total = 0;
      state.itemsCount = 0;
      state.isOpen = false;
    },
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  decreaseQuantity, 
  clearCart, 
  toggleCart,
  addAllEpisodes,
  completePurchase
} = cartSlice.actions;

export default cartSlice.reducer;