// src/App.tsx
import './App.css';
import { ThemeProvider, useTheme } from '@/contexts/theme-provider';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MusicPlayer from './components/MusicPlayer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import ScrollToTop from './components/helper/ScrollToTop';
import { PlayerProvider } from './contexts/PlayerContext';
import { lazy, Suspense, useEffect, useState } from 'react';
import { CartProvider } from './contexts/cart-context';
import { Toaster } from 'react-hot-toast';
import { LicenseProvider } from './contexts/LicenseContext';
import { BeatsProvider } from './contexts/BeatsContext';
import { BeatPackProvider } from './contexts/BeatPackContext';
import { OrdersProvider } from './contexts/OrdersContext';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Lazy load all page components for code splitting
const Home = lazy(() => import('../pages/Home'));
const Beats = lazy(() => import('../pages/Beats'));
const CartCheckOut = lazy(() => import('../pages/CartCheckOut'));
const Billing = lazy(() => import('../pages/Billing'));
const TermsOfUse = lazy(() => import('../pages/TermsOfUse'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const RefundPolicy = lazy(() => import('../pages/RefundPolicy'));
const DownloadPage = lazy(() => import('../pages/DownloadPage'));
const SingleBeatPage = lazy(() => import('../pages/SingleBeat'));
const NotFound = lazy(() => import('../pages/NotFound'));
const LicensePage = lazy(() => import('../pages/LicensePage'));
const NewsLetterSignUp = lazy(() => import('./components/NewsLetterSignUp'));
const BlogPage = lazy(() => import('../pages/BlogPage'));
const BlogPostWrapper = lazy(() => import('../pages/BlogPost'));
const Login = lazy(() => import('../pages/Login'));
const Pack = lazy(() => import('../pages/Packs'));
const Contact = lazy(() => import('./components/Contact'));
const SinglePack = lazy(() => import('../pages/SinglePack'));
const Maintenance = lazy(() => import('../pages/Maintenance'));
const FaqsPage = lazy(() => import('../pages/FaqsPage'));

// Admin pages - only loaded when authenticated users navigate to dashboard
const AdminBeats = lazy(() => import('../pages/dashboard/AdminBeats'));
const AdminBeatPacks = lazy(() => import('../pages/dashboard/AdminBeatPacks'));
const AdminSingleBeat = lazy(() => import('../pages/dashboard/AdminSingleBeat'));
const AdminUploadBeats = lazy(() => import('../pages/dashboard/AdminUploadBeat'));
const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'));

// Lazy load the heavy Galaxy WebGL background
const Galaxy = lazy(() => import('./components/ui/ReactBits/Galaxy'));

// Loading fallback component
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-red-500/20 animate-ping" />
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

// Create a wrapper component that uses useLocation
function AppContent() {
  const headerText = 'text-2xl';

  // Use the useLocation hook to get the current URL path
  const location = useLocation();
  const [isUnderMaintenance] = useState(false);
  // Check if the current path is the dashboard
  const isDashboard = location.pathname.startsWith('/dashboard');
  const isAdminLogin = location.pathname.startsWith('/admin');
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(theme === 'dark');
  }, [theme]);

  return (
    <div className="troo-page-shell dark:bg-black bg-background relative m-auto w-full min-h-screen">
      <div className="fixed h-full w-full top-0 left-0 z-0 opacity-40">
        {isDarkMode && (
          <Suspense fallback={null}>
            <Galaxy
              mouseRepulsion={true}
              mouseInteraction={false}
              density={1.35}
              glowIntensity={0.05}
              saturation={0.7}
              hueShift={330}
              rotationSpeed={0}
              starSpeed={0.1}
              speed={1}
            />
          </Suspense>
        )}
      </div>
      <ScrollToTop />
      {!isDashboard && !isAdminLogin && !isUnderMaintenance && <Navbar />}
      <div className="overflow-x-hidden">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <>
              {!isUnderMaintenance ? (
                <>
                  {/* Home */}
                  <Route path="/" element={<Home size={headerText} />} />
                  {/* Not Found */}
                  <Route path="*" element={<NotFound />} />
                  {/* Beats */}
                  <Route path="/beats" element={<Beats />} />
                  {/* Packs*/}
                  <Route path="/packs" element={<Pack />} />
                  <Route path="/licenses" element={<LicensePage />} />
                  <Route path="/billing" element={<Billing />} />
                  <Route path="/terms-of-service" element={<TermsOfUse />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/refund-policy" element={<RefundPolicy />} />
                  <Route
                    path="/contact"
                    element={<Contact fullscreen={true} />}
                  />
                  {/* BLOG */}
                  <Route
                    path="/blogs"
                    element={
                      <BlogPage tagline="Latest Updates" heading="Blog Posts" />
                    }
                  />
                  <Route path="/blog/:id" element={<BlogPostWrapper />} />
                  <Route
                    path="/checkout"
                    element={<CartCheckOut size={headerText} />}
                  />
                  <Route path="/download" element={<DownloadPage />} />
                  <Route path="/beat" element={<SingleBeatPage />} />
                  <Route path="/pack" element={<SinglePack />} />
                  <Route path="/newsletter" element={<NewsLetterSignUp />} />
                  <Route path="/faqs" element={<FaqsPage />} />
                  {/* Login */}
                  <Route path="/admin" element={<Login />} />
                </>
              ) : (
                <Route path="*" element={<Maintenance />} />
              )}
              {/* ADMIN DASHBOARD */}
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/admin/beats" element={<AdminBeats />} />
                <Route path="/admin/packs" element={<AdminBeatPacks />} />
                <Route path="/admin/beat" element={<AdminSingleBeat />} />
                <Route path="/admin/upload-beat" element={<AdminUploadBeats />} />
              </Route>
            </>
          </Routes>
        </Suspense>
      </div>
      {!isDashboard && !isAdminLogin && !isUnderMaintenance && <Footer />}
      {!isDashboard && !isAdminLogin && !isUnderMaintenance && <MusicPlayer />}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <CartProvider>
        <OrdersProvider>
          <BeatsProvider>
            <BeatPackProvider>
              <PlayerProvider>
                <LicenseProvider>
                  <AuthProvider>
                    <Router>
                      <AppContent />
                    </Router>
                  </AuthProvider>
                </LicenseProvider>
              </PlayerProvider>
            </BeatPackProvider>
          </BeatsProvider>
        </OrdersProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
