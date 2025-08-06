# Weather App

A beautiful, responsive weather web application built with React, TypeScript, and Tailwind CSS. Features a warm mustard yellow design with modern UI components and interactive weather forecasting.

[Demo](https://kostyngricuk.github.io/weather-app/)

## 🚀 Features

- **Responsive Design**: Adapts seamlessly to desktop, tablet, and mobile devices
- **Modern UI**: Clean, minimalist design with warm color palette
- **Interactive Components**:
  - Current weather display with location and conditions
  - 24-hour temperature forecast with interactive chart
  - 5-day weather forecast
  - Activities in your area with image cards
  - Detailed air conditions panel
  - Sidebar navigation with tooltips
- **Mobile Optimized**: Bottom navigation for mobile devices
- **TypeScript**: Fully typed for better development experience
- **Chart Integration**: Beautiful temperature charts using Chart.js

## 🛠 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom mustard theme
- **Charts**: Chart.js with React integration
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Linting**: ESLint with TypeScript support

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 🎨 Design Features

### Color Palette
- **Primary**: Mustard yellow (#fbbf24, #f59e0b)
- **Secondary**: Warm grays for text and backgrounds
- **Accent**: Subtle gradients and shadows

### Layout
- **Sidebar**: Vertical navigation with icons and tooltips
- **Top Section**: Location, current weather, and temperature
- **Main Content**: Activities and 24-hour forecast
- **Right Panel**: 5-day forecast and air conditions
- **Mobile**: Collapsible sidebar with bottom navigation

### Components
- **TopSection**: Current weather display with gradient background
- **Sidebar**: Navigation with active states and hover effects
- **ActivitiesSection**: Horizontal scrolling activity cards
- **HourlyForecastSection**: Interactive temperature chart
- **RightPanel**: Forecast and air condition details
- **WeatherIcon**: Dynamic weather icons based on conditions

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px` - Bottom navigation, stacked layout
- **Tablet**: `768px - 1024px` - Sidebar visible, adjusted spacing
- **Desktop**: `> 1024px` - Full layout with sidebar and panels

## 🔧 Customization

### Adding New Weather Conditions
Update the `WeatherIcon` component in `src/components/WeatherIcon.tsx` to add new weather condition icons.

### Modifying Colors
Edit the Tailwind configuration in `tailwind.config.js` to customize the mustard color palette and other theme colors.

### API Integration
Replace mock data in `src/data/mockData.ts` with real API calls to services like OpenWeatherMap.

## 🌟 Future Enhancements

- [ ] Dark mode toggle
- [ ] Weather animations
- [ ] Geolocation support
- [ ] Multiple city management
- [ ] Weather alerts and notifications
- [ ] PWA support
- [ ] Real weather API integration

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
