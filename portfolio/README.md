# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Optimized for all devices using Tailwind CSS
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Modern React**: Using the latest React 19 with hooks and modern patterns
- **Clean Architecture**: Well-organized component structure

## 🛠️ Technologies Used

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite (with Rolldown)
- **Styling**: Tailwind CSS 3.4.17
- **Language**: JavaScript (ES6+)
- **Linting**: ESLint
- **Package Manager**: npm

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, etc.
│   ├── components/        # Reusable React components
│   │   ├── Home.jsx       # Home/Landing section
│   │   ├── Navbar.jsx     # Navigation component
│   │   ├── Education.jsx  # Education section
│   │   ├── Projec.jsx     # Projects section
│   │   └── footer.jsx     # Footer component
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── eslint.config.js       # ESLint configuration
```

## 🏃‍♂️ How to Run the Project

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository** (if applicable) or navigate to the project folder:
   ```bash
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Development

3. **Start the development server**:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

### Building for Production

4. **Build the project**:
   ```bash
   npm run build
   ```

   This will create a `dist` folder with optimized production files.

5. **Preview the production build**:
   ```bash
   npm run preview
   ```

### Linting

6. **Run ESLint** to check for code quality:
   ```bash
   npm run lint
   ```

## 🎨 Customization

### Adding Content

The portfolio is structured with the following main sections:

- **Home**: Landing page with introduction
- **Education**: Academic background and qualifications
- **Projects**: Showcase of your work and projects
- **Footer**: Contact information and social links

Edit the respective component files in `src/components/` to add your personal information, projects, and styling.

### Styling

- Uses Tailwind CSS for utility-first styling
- Custom styles can be added in `src/index.css`
- Tailwind configuration can be modified in `tailwind.config.js`

## 📱 Components Overview

- **Navbar**: Navigation menu with smooth scrolling
- **Home**: Hero section with personal introduction
- **Education**: Timeline or list of educational background
- **Projects**: Grid or list of project showcases
- **Footer**: Contact details and social media links

## 🔧 Development Notes

- The project uses Vite's fast refresh for instant updates during development
- ESLint is configured for React and modern JavaScript
- PostCSS is set up for Tailwind CSS processing
- The build process is optimized for production deployment

## 🚀 Deployment

After building the project with `npm run build`, the `dist` folder contains all the files needed for deployment. You can deploy to any static hosting service like:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 📝 License

This project is private and for personal use.

---

**Built with ❤️ using React & Vite**