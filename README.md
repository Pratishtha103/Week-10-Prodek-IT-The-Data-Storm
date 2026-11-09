# 🛒 Shop Zone – E-Commerce Web Application

A modern, responsive e-commerce web application featuring dynamic product catalog browsing, robust category filtering, and a state-driven shopping cart powered by Redux Toolkit and Tailwind CSS.

## 🌟 Key Features

Dynamic Catalog & Filtering: Developed a responsive product showcase with category filtering, search, and dynamic view toggles.

Centralized State Management: Architected global application state using Redux Toolkit and react-redux, implementing slices to manage cart operations, quantity adjustments, and real-time total calculations.

Persistent Cart Experience: Real-time updates for cart items, pricing, subtotal, and tax breakdowns with fast client-side synchronization.

Responsive & Accessible UI: Built modular, reusable components with Tailwind CSS, optimized for fluid layouts across mobile, tablet, and desktop viewports.

Fast Performance: Optimized assets and client-side rendering for minimal latency and quick page transitions.

## 🛠️ Tech Stack

Frontend Library / Framework: React.js 

State Management: Redux Toolkit (@reduxjs/toolkit), react-redux

Styling: Tailwind CSS, PostCSS

Icons & Assets: Lucide React

Deployment: Vercel

## 📁 Project Architecture

├── public/              # Static assets & images
├── src/
│   ├── app/ or pages/   # Routing and page views
│   ├── components/      # Reusable UI components (Navbar, CartModal, ProductCard, FilterBar)
│   ├── redux/ or store/ # Redux store configuration
│   │   ├── store.js     # Root store configuration
│   │   └── slices/      # Redux slices (cartSlice, productSlice)
│   ├── styles/          # Global styles & Tailwind configuration
│   └── utils/           # Helper functions & formatters
├── package.json
└── README.md


## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js (v18 or higher) and npm or yarn installed.

### Installation

Clone the repository:

git clone https://github.com/Pratishtha103/Week-10-Prodek-IT-The-Data-Storm.git
cd Week-10-Prodek-IT-The-Data-Storm


### Install dependencies:

npm install
# or
yarn install


### Start the development server:

npm run dev
# or
yarn dev


### Open in browser:
Navigate to http://localhost:3000 to view the application.

### 🔗 Links

Live Application: https://week-10-prodek-it-the-data-storm.vercel.app/

Source Code: GitHub Repository

### 👩‍💻 Author

Pratishtha

GitHub: @Pratishtha103

LinkedIn: linkedin.com/in/pratishtha-896bob2b2

![Website](Website.png)
