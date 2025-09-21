# React SaaS Dashboard

A modern, responsive dashboard built with React 19, TypeScript, and Axiom UI components. Features comprehensive data visualization, theme management, and professional UI/UX design.

## ✨ Features

### **Core Functionality**

- **Interactive Dashboard** - Metrics cards, charts, and data tables
- **Order Management** - Searchable table with pagination and filtering
- **Data Visualization** - Line charts, bar charts, pie charts, and interactive maps
- **Theme System** - Light/dark mode with smooth transitions
- **Responsive Design** - Mobile-first approach with adaptive layouts

### **Technical Highlights**

- **Modern React 19** - Latest React features and concurrent rendering
- **TypeScript** - Full type safety and excellent developer experience
- **Axiom UI** - Professional component library with consistent design
- **Vanilla Extract** - Type-safe CSS-in-JS with zero runtime overhead
- **Centralized Data** - Single source of truth with type-safe data service
- **State Management** - Zustand for lightweight, efficient state handling

## 🛠️ Tech Stack

| Category       | Technology            | Purpose                               |
| -------------- | --------------------- | ------------------------------------- |
| **Frontend**   | React 19 + TypeScript | Core framework with type safety       |
| **UI Library** | @optiaxiom/react      | Professional component system         |
| **Styling**    | Vanilla Extract       | Type-safe CSS-in-JS                   |
| **Charts**     | Recharts              | Data visualization                    |
| **Maps**       | React Leaflet         | Interactive geographical data         |
| **Tables**     | TanStack Table        | Advanced data table functionality     |
| **State**      | Zustand + Context API | Lightweight state management          |
| **Routing**    | React Router DOM      | Client-side navigation                |
| **Build Tool** | Vite                  | Fast development and optimized builds |

## 🚀 Quick Start

### **Prerequisites**

- Node.js 18+
- pnpm (recommended) or npm

### **Installation**

```bash
# Clone repository
git clone https://github.com/yourusername/react-saas-dashboard.git
cd react-saas-dashboard

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open browser
# http://localhost:5173
```

### **Build Commands**

```bash
# Development
pnpm dev

# Production build
pnpm build

# Preview production build
pnpm preview

# Lint code
pnpm lint
```

## 📁 Project Architecture

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Header, Sidebar)
│   ├── MetricCard/     # Dashboard metric display
│   └── NotFound/       # 404 error page
├── contexts/           # React Context providers
│   └── ThemeContext.tsx # Theme management system
├── data/               # Centralized data layer
│   ├── mockData.json   # All application data
│   └── dataService.ts  # Type-safe data access
├── pages/              # Route components
│   ├── Dashboard/      # Main dashboard with charts
│   └── OrderList/      # Order management interface
├── stores/             # Zustand state stores
├── styles/             # Global Vanilla Extract styles
└── types/              # TypeScript type definitions
```

## 🎨 Key Components

### **Dashboard Features**

- **Metrics Grid** - Key performance indicators with trend indicators
- **Revenue Chart** - Multi-line chart comparing current vs previous periods
- **Sales Distribution** - Interactive pie chart with custom tooltips
- **Geographic Revenue** - Interactive world map with location markers
- **Top Products Table** - Sortable data table with product performance

### **Order Management**

- **Advanced Search** - Real-time filtering across all order fields
- **Pagination** - Configurable page sizes (5, 10, 20, 50 items)
- **Data Table** - Sortable columns with user avatars and status badges
- **Responsive Design** - Optimized for desktop and mobile viewing

### **Theme System**

- **Context-Based** - Centralized theme management with React Context
- **CSS Variables** - Dynamic color switching without component re-renders
- **Smooth Transitions** - Animated theme changes for better UX
- **System Preference** - Automatic detection of user's preferred theme

## 📊 Data Architecture

### **Centralized Data Management**

All mock data is organized in a single JSON file and accessed through a type-safe service layer:

```typescript
// Usage in components
import { getMetrics, getOrders } from "./data/dataService";

const Dashboard = () => {
  const metrics = getMetrics();
  const orders = getOrders();
  // ...
};
```

### **Benefits**

- **Single Source of Truth** - All data in `mockData.json`
- **Type Safety** - TypeScript interfaces for all data structures
- **Easy Maintenance** - Update data in one place, reflects everywhere
- **Scalable** - Easy to replace with API calls later

## 🔧 Development

### **Code Quality**

- **ESLint** - Comprehensive linting rules
- **TypeScript** - Strict type checking enabled
- **Prettier** - Consistent code formatting
- **Vanilla Extract** - Type-safe styling

### **Performance Optimizations**

- **Code Splitting** - Route-based lazy loading
- **Tree Shaking** - Unused code elimination
- **CSS Optimization** - Zero-runtime CSS-in-JS
- **Bundle Analysis** - Optimized dependency management

## 📱 Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Axiom UI** - Excellent component library
- **Recharts** - Powerful charting solution
- **React Team** - Amazing framework and ecosystem
- **Vite Team** - Lightning-fast build tool
