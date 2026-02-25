# PropSoch Landing Page Redesign

A modern, performance-optimized redesign of the PropSoch landing page built with React.js and CSS.

## 🚀 Live Demo
[Deployed Site Link]

## 📊 Lighthouse Scores Comparison

### Before (Original Site)
| Performance | Accessibility | Best Practices | SEO |
|-------------|---------------|----------------|-----|
| 68 | 71 | 50 | 100 |

### After (Redesigned)
| Device | Performance | Accessibility | Best Practices | SEO |
|--------|-------------|---------------|----------------|-----|
| Desktop | 89 (+21) | 90 (+19) | 77 (+27) | 92 |

---

## ✨ What I Improved and Why

### 1. **YouTube Facade Pattern** (Performance Boost)
The original site loads the entire YouTube player (~1MB of JavaScript) the moment you open the page - even if you never click play. That's like downloading a movie you might never watch!

I replaced this with a simple thumbnail image. The actual video only loads when you click the play button. This alone shaved off significant load time and made the page feel snappier, especially on mobile.

---

### 2. **Smarter Video Loading in Journey Section**
Instead of loading all 6 stage videos at once (about 6MB of data), I made each video load only when you click on that specific stage. Why download something you might never see?

This uses the Intersection Observer API - a fancy way of saying "only load stuff when it's actually on screen." Videos also pause automatically when you scroll away, saving battery and bandwidth.

---

### 3. **Better Accessibility for Everyone** (Accessibility +19 points)
I added proper semantic HTML (`<nav>`, `<main>`, `<section>`) and ARIA labels so screen readers can actually understand the page. Visible focus states help keyboard users navigate without getting lost.

Real talk: about 15% of people have some form of disability. Making the site accessible isn't just good practice - it's the right thing to do.

---

### 4. **Swipe & Drag Support for Testimonials**
Made the testimonials section intuitive to navigate - you can swipe on mobile or click-and-drag on desktop. Auto-advances every 5 seconds, but pauses when you interact. Feels natural and modern.

---

## 🎨 Section-by-Section Improvements

### Hero Section
- **Cleaner typography** - Replaced cluttered list items with clear, bold headings that communicate value instantly
- **Auto-detect location** - One tap to detect your city using IP geolocation. No more scrolling through a long list
- **City dropdown** - Swapped the original tab-based city selector with a clean dropdown menu. Takes less space, works better on mobile

### Journey Section  
- **On-demand video loading** - Videos load only when you click a stage, not all at once. Saves ~6MB on initial load
- **Polished visuals** - Better spacing, improved text hierarchy, and a progress bar that shows where you are in the journey
- **Smart pause/play** - Videos auto-play when selected and pause when you move away

### Testimonials Section
- **Scrollable carousel** - Horizontal scroll with drag support on desktop and swipe on mobile
- **Modernized design** - Larger cards, better typography, and subtle animations
- **Auto-advance** - Rotates every 5 seconds but respects user interaction

---

## 🛠 Tech Stack

- **React.js** (Vite) - Fast development and optimized builds
- **Plain CSS** - No framework overhead, full control

## 📁 Project Structure

```
propsoch-redesign/
├── public/
│   └── stage1-6.mp4     # Journey section videos
├── src/
│   ├── components/
│   │   ├── Navbar/       
│   │   ├── Hero/        
│   │   ├── Journey/      
│   │   ├── Testimonials/ 
│   │   └── Footer/      
│   ├── App.jsx
│   ├── App.css
│   └── index.css
├── index.html
├── ANALYSIS.md           # Part 1: Original site analysis
└── README.md             # This file
```

## 🏃 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📝 Key Features

- ✅ Responsive design 
- ✅ lazy loading 
- ✅ Auto-detect user location
- ✅ City dropdown selector
- ✅ Testimonials with swipe/drag scroll
- ✅ Journey videos load on-demand


---

## 👤 Author
[Ragadeep Pippalla]

