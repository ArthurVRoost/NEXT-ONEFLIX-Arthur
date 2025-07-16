// utils/pricing.js

// Fonction de hash déterministe pour générer un "random" constant par anime
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

// Prix de base constant pour chaque anime à partir de son ID
export function generateBasePrice(animeId) {
  const min = 10;
  const max = 15;
  // Utilise l'ID pour générer un "random" déterministe
  const seed = hashString(animeId.toString());
  const random = min + (seed % (max - min + 1));
  return parseFloat(random.toFixed(2));
}

// Prix final avec réduction éventuelle
export function getFinalPrice(animeId, isDiscounted = false) {
  const basePrice = generateBasePrice(animeId);
  if (isDiscounted) {
    return parseFloat((basePrice * 0.8).toFixed(2)); // -20%
  }
  return basePrice;
}

// Vérifie si un anime est en réduction
export function isAnimeDiscounted(animeId) {
  try {
    const discountedAnime = JSON.parse(localStorage.getItem('discountedAnime'));
    return discountedAnime && discountedAnime.id == animeId;
  } catch (error) {
    console.error('Erreur lors de la vérification de la réduction:', error);
    return false;
  }
}

// Retourne les informations complètes de prix pour un anime
export function getAnimePrice(animeId) {
  const basePrice = generateBasePrice(animeId);
  const isDiscounted = isAnimeDiscounted(animeId);
  const finalPrice = getFinalPrice(animeId, isDiscounted);
  
  return {
    basePrice,
    finalPrice,
    isDiscounted,
    discountPercentage: isDiscounted ? 20 : 0,
    discountAmount: isDiscounted ? basePrice - finalPrice : 0
  };
}