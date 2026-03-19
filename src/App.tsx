import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import PageTransition from './components/PageTransition';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import { ThemeProvider } from './context/ThemeContext';
import CookieConsent from './components/CookieConsent';
import ConnectivityListener from './components/ConnectivityListener';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Objectives = lazy(() => import('./pages/Objectives'));
const Team = lazy(() => import('./pages/Team'));
const Board = lazy(() => import('./pages/Board'));
const Programs = lazy(() => import('./pages/Projects'));
const MediaCenter = lazy(() => import('./pages/MediaCenter'));
const Resources = lazy(() => import('./pages/Resources'));
const ResourceCategoryDetail = lazy(() => import('./pages/ResourceCategoryDetail'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPostDetail = lazy(() => import('./pages/BlogPostDetail'));
const Donate = lazy(() => import('./pages/Donate'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Contact = lazy(() => import('./pages/Contact'));
const StaffLogin = lazy(() => import('./pages/StaffLogin'));
const ThematicAreas = lazy(() => import('./pages/ThematicAreas'));
const TeamMemberDetail = lazy(() => import('./pages/TeamMemberDetail'));
const Governance = lazy(() => import('./pages/Governance'));

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <ErrorBoundary>
      <AnimatePresence mode="wait">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/objectives" element={<PageTransition><Objectives /></PageTransition>} />
            <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
            <Route path="/team/:slug" element={<PageTransition><TeamMemberDetail /></PageTransition>} />
            <Route path="/board" element={<PageTransition><Board /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Programs /></PageTransition>} />
            <Route path="/resources" element={<PageTransition><Resources /></PageTransition>} />
            <Route path="/resources/:categorySlug" element={<PageTransition><ResourceCategoryDetail /></PageTransition>} />
            <Route path="/media-center" element={<PageTransition><MediaCenter /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
            <Route path="/blog/:id" element={<PageTransition><BlogPostDetail /></PageTransition>} />
            <Route path="/donate" element={<PageTransition><Donate /></PageTransition>} />
            <Route path="/checkout" element={<PageTransition><Checkout /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/thematic-areas" element={<PageTransition><ThematicAreas /></PageTransition>} />
            <Route path="/governance" element={<PageTransition><Governance /></PageTransition>} />
            <Route path="/staff-signin" element={<PageTransition><StaffLogin /></PageTransition>} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </ErrorBoundary>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
          <CookieConsent />
          <ConnectivityListener />
        </div>
      </Router>
    </ThemeProvider>
  );
}
