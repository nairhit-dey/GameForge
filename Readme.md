# 🎮 GameForge

> **A modern, full-featured e-commerce platform for premium gaming hardware**

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://game-forge-website.netlify.app/)
[![React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-purple)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan)](https://tailwindcss.com/)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Key Implementations](#-key-implementations)
- [Performance & Optimization](#-performance--optimization)
- [Future Enhancements](#-future-enhancements)
- [License](#-license)

---

## 🌟 Overview

**GameForge** is a production-ready e-commerce web application designed for gaming enthusiasts and professional gamers. Built with modern web technologies, it provides a seamless shopping experience with a focus on performance, accessibility, and user experience.

The platform showcases premium gaming hardware including controllers, VR headsets, keyboards, mice, monitors, and complete gaming setups, offering a comprehensive solution for the competitive gaming community.

**[🚀 View Live Demo](https://game-forge-website.netlify.app/)**

---

## ✨ Features

### 🛒 **E-commerce Functionality**
- **Dynamic Product Catalog**: Browse through 12+ premium gaming products
- **Advanced Shopping Cart**: Real-time cart management with quantity controls
- **Product Details**: Detailed product pages with specifications and related products
- **Secure Checkout**: Multi-step checkout process with form validation
- **Order Management**: Complete order placement flow with success confirmation

### 🎨 **User Experience**
- **Dark Mode Support**: Toggle between light and dark themes with persistent preference
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Polished hover effects and transitions throughout
- **Intuitive Navigation**: Clean routing with React Router DOM v7
- **Real-time Feedback**: Visual confirmations for cart actions and order placement

### 🏗️ **Technical Features**
- **Type-Safe**: Full TypeScript implementation for robust code
- **State Management**: Context API for global state (Theme & Cart)
- **Component Architecture**: Reusable, modular React components
- **Performance Optimized**: Vite for lightning-fast HMR and builds
- **SEO Friendly**: Semantic HTML and proper meta tags
- **Accessible**: ARIA labels and keyboard navigation support

---

## 🛠️ Technology Stack

### **Frontend Framework**
- **[React 18.3](https://react.dev/)** - Modern UI library with concurrent features
- **[TypeScript 5.5](https://www.typescriptlang.org/)** - Type-safe JavaScript superset
- **[Vite 5.4](https://vitejs.dev/)** - Next-generation frontend build tool

### **Styling & UI**
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[PostCSS](https://postcss.org/)** - CSS transformations and autoprefixing
- **[Lucide React](https://lucide.dev/)** - Modern icon library (344+ icons)

### **Routing & Navigation**
- **[React Router DOM 7.9](https://reactrouter.com/)** - Declarative routing for React

### **Backend Integration (Prepared)**
- **[Supabase JS 2.57](https://supabase.com/)** - PostgreSQL database and authentication SDK (ready for backend integration)

### **Development Tools**
- **[ESLint](https://eslint.org/)** - Code quality and consistency
- **[TypeScript ESLint](https://typescript-eslint.io/)** - TypeScript-specific linting rules
- **[Vite Plugin React](https://github.com/vitejs/vite-plugin-react)** - Fast Refresh and JSX support

### **Deployment**
- **[Netlify](https://www.netlify.com/)** - Continuous deployment and hosting

---

## 🏛️ Project Architecture

### **State Management**

The application uses React Context API for global state management:

#### **ThemeContext**
```typescript
- Manages light/dark mode preferences
- Persists theme selection to localStorage
- Dynamically applies CSS classes to root element
- Provides toggleTheme function to all components
```

#### **CartContext**
```typescript
- Centralized shopping cart state
- Cart operations: add, remove, update quantity, clear
- Computed values: total price, item count
- Type-safe product and cart item interfaces
```

### **Component Hierarchy**

```
App (Router + Providers)
├── ThemeProvider (Global theme state)
│   └── CartProvider (Global cart state)
│       ├── Navbar (Navigation + Theme toggle + Cart badge)
│       ├── Cart (Sidebar drawer with cart management)
│       └── Routes
│           ├── Home (Hero, featured products, features)
│           ├── Shop (Product grid with add to cart)
│           ├── ProductDetail (Detailed view + related products)
│           └── Checkout (Multi-step form + order summary)
```

---

## 🚀 Getting Started

### **Prerequisites**

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 or **yarn** >= 1.22.0

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/game-forge.git
   cd game-forge
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

### **Available Scripts**

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |
| `npm run typecheck` | Validate TypeScript types |

---

## 📁 Project Structure

```
game-forge/
├── public/                      # Static assets
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── Cart.tsx            # Shopping cart sidebar
│   │   └── Navbar.tsx          # Navigation header
│   ├── context/                 # React Context providers
│   │   ├── CartContext.tsx     # Shopping cart state management
│   │   └── ThemeContext.tsx    # Theme (light/dark) management
│   ├── data/                    # Static data and utilities
│   │   └── products.ts         # Product catalog and helper functions
│   ├── pages/                   # Route components
│   │   ├── Home.tsx            # Landing page with hero section
│   │   ├── Shop.tsx            # Product listing page
│   │   ├── ProductDetail.tsx   # Individual product page
│   │   └── Checkout.tsx        # Checkout and payment form
│   ├── App.tsx                  # Root component with routing
│   ├── main.tsx                 # Application entry point
│   ├── index.css                # Global styles and Tailwind imports
│   └── vite-env.d.ts           # Vite type declarations
├── eslint.config.js             # ESLint configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite build configuration
├── package.json                 # Project dependencies
└── README.md                    # Project documentation
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Authors
 
**Nairhit Dey** - *Original Concept & Design & Lead Developer*

---

## 🙏 Acknowledgments

- **Icons**: [Lucide React](https://lucide.dev/)
- **Images**: [Pexels](https://www.pexels.com/)
- **Fonts**: System fonts for optimal performance
- **Inspiration**: Modern gaming and tech e-commerce platforms

---

## 📧 Contact

For questions, feedback, or collaboration opportunities:

- **GitHub**: [@nairhit-dey](https://github.com/nairhit-dey)
- **Live Demo**: [game-forge-website.netlify.app](https://game-forge-website.netlify.app/)

---

<div align="center">
  
**Built with ❤️ for gamers, by gamers**

⭐ Star this repository if you found it helpful!

</div>