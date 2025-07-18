// utils/pricing.js

// Hash sert a créer un id par exemple et va faire croire a un prix aléatoire mais ce sera toujours le meme prix pour chaque id 
// La meme entrée donnera toujours le meme resultat mais aleatoire en apparence 
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

  // Utilise l'ID pour generer un random 
  const seed = hashString(animeId.toString());
  const random = min + (seed % (max - min + 1));
  return parseFloat(random.toFixed(2));
}

// Prix final avec reduction 
export function getFinalPrice(animeId, isDiscounted = false) {
  const basePrice = generateBasePrice(animeId);
  if (isDiscounted) {
    return parseFloat((basePrice * 0.8).toFixed(2)); // -20%
  }
  return basePrice;
}

// Verifie si un anime est en réduction
export function isAnimeDiscounted(animeId) {
  try {
    const discountedAnime = JSON.parse(localStorage.getItem('discountedAnime'));
    return discountedAnime && discountedAnime.id == animeId;
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
}

// Retourne les info completes de prix pour un anime
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