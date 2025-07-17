# Anime Store - Next.js E-commerce Application

A modern e-commerce application built with Next.js for anime episodes and merchandise, featuring user authentication, shopping cart, and credit system.

## 🚀 Features

### Core Features
- **Responsive Design**: Mobile-first approach with hamburger menu for mobile devices
- **Product Catalog**: Browse anime episodes and complete season packages
- **Product Details**: Detailed view for each anime episode with episodes listing
- **Shopping Cart**: Add, remove, and manage items with automatic discount calculation
- **User Authentication**: Register/Login with form validation and session management
- **Credit System**: Add credits to account and pay using credits
- **User Account**: Personal account management with purchase history
- **User Collection**: View and manage your anime collection
- **Payment System**: Secure payment processing with credit integration

### Navigation & Pages
- **Home Page**: Featured anime and recommendations
- **All Products**: Complete catalog of available anime episodes
- **Product Details**: Individual anime information with episode listings
- **Shopping Cart**: Full cart management with checkout
- **User Account**: Profile management and settings
- **My Collection**: Personal anime collection viewer
- **Payment**: Secure checkout and payment processing

### Special Features
- **Bulk Discount**: Get the cheapest item free when purchasing 5+ items
- **Seasonal Discounts**: 20% off on selected anime series
- **All Episodes Package**: Purchase complete anime seasons at discounted rates
- **Episode Management**: Individual episode viewing and purchasing

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript/TypeScript
- **State Management**: Redux Toolkit
- **Styling**: CSS Modules
- **Authentication**: Custom auth system with session management
- **Storage**: Local Storage for persistence
- **Routing**: Next.js App Router
- **Configuration**: TypeScript, ESLint

## 📦 Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/anime-store.git
cd anime-store
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🗂️ Project Structure

```
├── app/
│   ├── all/
│   │   ├── page.jsx      # All products page
│   │   └── page.module.css
│   ├── api/              # API routes
│   ├── details/
│   │   └── [id]/
│   │       ├── episodes/
│   │       │   ├── episodes.module.css
│   │       │   └── page.jsx
│   │       ├── details.module.css
│   │       └── page.jsx  # Product details page
│   ├── hooks/
│   │   └── useAuth.js    # Custom authentication hook
│   ├── macollection/
│   │   ├── page.jsx      # User collection page
│   │   └── page.module.css
│   ├── moncompte/
│   │   ├── page.jsx      # User account page
│   │   └── page.module.css
│   ├── paiements/
│   │   ├── page.jsx      # Payment page
│   │   └── page.module.css
│   ├── panier/
│   │   ├── page.jsx      # Shopping cart page
│   │   └── page.module.css
│   ├── provider/
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.jsx      # Home page
│   │   ├── page.module.css
│   │   ├── ReduxProvider.jsx
│   │   └── SessionProvider.jsx
│   └── globals.css
├── components/
│   ├── auth/             # Authentication components
│   ├── carousel/         # Carousel component
│   ├── footer/
│   │   ├── Footer.jsx
│   │   └── footer.module.css
│   ├── last/             # Latest items component
│   ├── naruto/           # Naruto-specific components
│   └── nav/
│       └── LoadUserFromLocalStorage.jsx
├── store/
│   ├── slices/
│   │   ├── authSlice.js  # Authentication state
│   │   ├── cartSlice.js  # Shopping cart state
│   │   └── index.js      # Store configuration
│   └── store.js
├── utils/
│   └── pricing.js        # Pricing utilities
├── .env.local            # Environment variables

```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
# Add other environment variables as needed
```

## 🎯 Usage

### Authentication
- Users can register with email/password 
- Login modal opens automatically when authentication is required
- User session persists across browser sessions

### Shopping Cart
- Add individual episodes or complete anime seasons
- Automatic discount calculation (20% off on selected items)
- Free item promotion when cart contains 5+ items
- Real-time price updates

### Credit System
- Add credits to your account
- Pay for purchases using credits
- Credit balance displayed in user profile
- Transaction history tracking

### Product Management
- Browse all available anime episodes
- Filter and search functionality
- Detailed product information
- Bulk purchase options

## 🔐 Authentication Flow

The application uses Redux Toolkit for authentication state management:

### User Registration
```javascript
// Register new user
dispatch(registerStart());
// Handle success/failure
dispatch(registerSuccess(userData));
dispatch(registerFailure(errorMessage));
```

### User Login
```javascript
// Login user
dispatch(loginStart());
dispatch(loginSuccess(userData));
dispatch(loginFailure(errorMessage));
```

### Page Routes

The application uses Next.js App Router with the following main routes:

- `/` - Home page with featured anime
- `/all` - All available anime episodes
- `/details/[id]` - Individual anime details page
- `/details/[id]/episodes` - Episode listings for specific anime
- `/panier` - Shopping cart page
- `/moncompte` - User account management
- `/macollection` - User's anime collection
- `/paiements` - Payment and checkout page

## 🛒 Cart Management

The cart system supports:
- Adding/removing items
- Quantity management
- Discount calculations
- Bulk purchase deals
- Free item promotions

### Key Cart Actions
```javascript
// Add item to cart
dispatch(addToCart(item));

// Add all episodes
dispatch(addAllEpisodes({
  animeId,
  animeTitle,
  animeImage,
  episodeCount,
  price,
  originalPrice,
  hasDiscount,
  discountPercentage
}));

// Complete purchase
dispatch(completePurchase({ userId }));
```

## 💳 Credit System

### Add Credits
```javascript
dispatch(addCredit(amount));
```

### Deduct Credits
```javascript
dispatch(deductCredit(amount));
```

## 🎨 Responsive Design

- **Desktop**: Full navigation menu with all features
- **Tablet**: Adapted layout for medium screens
- **Mobile**: Hamburger menu, optimized touch interactions

## 📱 Mobile Features

- Touch-friendly interface
- Collapsible navigation menu
- Optimized cart experience
- Responsive product grid

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Other Platforms
```bash
npm run build
npm run start
```


Made  by [Van Roost Arthur]