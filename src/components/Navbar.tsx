'use client';

import { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import { NavLink, useNavigate } from 'react-router';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'; // Shadcn Avatar component
// import GoogleTranslate from './GoogleTranslate';
import { ThemeToggle } from './ThemeToggle';
import CartModal from './cart-modal';
import { useCart } from '@/contexts/cart-context';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useTheme } from '@/contexts/theme-provider'; // Adjust the import path to your ThemeProvider
import { TrooBrandLockup, TrooSigil } from './TrooBrand';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'; // Shadcn Dropdown for user menu

const Navbar = () => {
  const { totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const navigate = useNavigate();
  // Use the auth context here
  const { isAuthenticated, logout } = useAuth();

  return (
    <>
      <nav className="!sticky !top-0 z-[500] border-b border-red-200/15 backdrop-blur-xl bg-background/85 dark:bg-[#090102]/82">
        <div className="max-w-xl mx-auto">
          <Marquee
            gradient={true}
            pauseOnHover={true}
            gradientWidth={50}
            speed={35}
            // gradientColor="#0a0a0a"
            gradientColor={theme === 'light' ? '#fff0df' : '#090102'}
            className="!bg-transparent h-8 font-semibold tracking-wide"
          >
            <button className="min-w-3xl !min-h-8 !flex items-center justify-center !bg-transparent hover:!bg-transparent !p-0 hover:!p-0 !m-0 hover:!m-0">
              25% OFF Code: TROO25{' '}
              <picture className="pointer-events-none">
                <source
                  srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.webp"
                  type="image/webp"
                />
                <img
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif"
                  alt="🔥"
                  width="24"
                  height="24"
                  className="ml-2"
                />
              </picture>
            </button>
            <button className="min-w-2xl !min-h-8 !flex items-center justify-center !bg-transparent hover:!bg-transparent !p-0 hover:!p-0 !m-0 hover:!m-0">
              Red-room drops, hard drums, melodic type beats. Buy 1 Get 1 Free On All Leases.{' '}
              <picture className="pointer-events-none">
                <source
                  srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.webp"
                  type="image/webp"
                />
                <img
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif"
                  alt="🔥"
                  width="24"
                  height="24"
                  className="ml-2"
                />
              </picture>
            </button>
          </Marquee>
        </div>

        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <TrooBrandLockup className="text-4xl" />
          </NavLink>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-5 list-none mr-[6.5rem]">
            <NavLink
              className={({ isActive }) =>
                `!bg-transparent hover:!border-transparent ${
                  isActive
                    ? '!text-red-400 border-b-2 border-red-500/70 drop-shadow-[0_0_8px_rgba(229,9,24,0.85)]'
                    : 'text-foreground'
                }`
              }
              to="/"
            >
              <li className="text-foreground hover:text-red-300 transition-colors">
                Home
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `!bg-transparent hover:!border-transparent ${
                  isActive
                    ? '!text-red-400 border-b-2 border-red-500/70 drop-shadow-[0_0_8px_rgba(229,9,24,0.85)]'
                    : 'text-foreground'
                }`
              }
              to="/beats"
            >
              <li className="text-foreground hover:text-red-300 transition-colors">
                Beats
              </li>
            </NavLink>
            {/* <NavLink
              className={({ isActive }) =>
                `!bg-transparent hover:!border-transparent ${
                  isActive
                    ? '!text-red-400 border-b-2 border-red-500/70 drop-shadow-[0_0_8px_rgba(229,9,24,0.85)]'
                    : 'text-foreground'
                }`
              }
              to="/packs"
            >
              <li className="text-foreground hover:text-red-300 transition-colors">
                Sound Kits
              </li>
            </NavLink> */}
            {/* <NavLink
              to="/about"
              className="!bg-transparent hover:!border-transparent"
            >
              <li className="text-foreground hover:text-red-300 transition-colors">
                About
              </li>
            </NavLink> */}
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `!bg-transparent hover:!border-transparent ${
                  isActive
                    ? '!text-red-400 border-b-2 border-red-500/70 drop-shadow-[0_0_8px_rgba(229,9,24,0.85)]'
                    : 'text-foreground'
                }`
              }
            >
              <li className="text-foreground hover:text-red-300 transition-colors">
                Blog
              </li>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `!bg-transparent hover:!border-transparent ${
                  isActive
                    ? '!text-red-400 border-b-2 border-red-500/70 drop-shadow-[0_0_8px_rgba(229,9,24,0.85)]'
                    : 'text-foreground'
                }`
              }
            >
              <li className="text-foreground hover:text-red-300 transition-colors">
                Contact
              </li>
            </NavLink>
            {/* <GoogleTranslate /> */}
          </div>

          {/* Right side - Search, User, Cart, Hamburger */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>
            {isAuthenticated && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="h-8 w-8 cursor-pointer">
                    <AvatarImage src="/channels4_profile.jpg" alt="Troo avatar" />
                    <AvatarFallback>
                      <TrooSigil className="!w-8 !min-w-8" />
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={() => navigate('/dashboard')}
                    className="cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  >
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    onClick={logout}
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-foreground hover:text-red-300 transition-colors cursor-pointer !bg-transparent focus:!outline-transparent focus:!border-transparent hover:!border-transparent focus-visible:!outline-transparent focus-visible:!border-transparent"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Hamburger Menu - Visible on mobile */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden text-foreground hover:text-red-300 transition-colors !bg-transparent focus:!outline-none focus:!border-none hover:!border-none focus-visible:!outline-transparent focus-visible:!border-transparent !outline-none !border-none"
                >
                  {isMobileMenuOpen ? (
                    <X className="hidden w-6 h-6 !outline-transparent focus:!outline-transparent" />
                  ) : (
                    <Menu className="w-6 h-6 !outline-transparent" />
                  )}
                </button>
              </SheetTrigger>
              <SheetContent className="bg-background/95 dark:bg-[#090102]/95 border-l border-red-200/15 z-[600]">
                <div className="flex flex-col items-center h-full justify-center space-y-4 pt-4 list-none">
                  <NavLink
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="!bg-transparent hover:!border-transparent"
                  >
                    <li className="text-foreground hover:text-red-300 transition-colors text-lg">
                      Home
                    </li>
                  </NavLink>
                  <NavLink
                    to="/beats"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="!bg-transparent hover:!border-transparent"
                  >
                    <li className="text-foreground hover:text-red-300 transition-colors text-lg">
                      Beats
                    </li>
                  </NavLink>
                  <NavLink
                    to="/blogs"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="!bg-transparent hover:!border-transparent"
                  >
                    <li className="text-foreground hover:text-red-300 transition-colors text-lg">
                      Blog
                    </li>
                  </NavLink>
                  <NavLink
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="!bg-transparent hover:!border-transparent"
                  >
                    <li className="text-foreground hover:text-red-300 transition-colors text-lg">
                      Contact
                    </li>
                  </NavLink>
                  {isAuthenticated && (
                    <NavLink
                      to="/dashboard"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="!bg-transparent hover:!border-transparent"
                    >
                      <li className="text-foreground hover:text-red-300 transition-colors text-lg">
                        Dashboard
                      </li>
                    </NavLink>
                  )}
                  {isAuthenticated && (
                    <NavLink
                      to="/"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        logout();
                      }}
                      className="!bg-transparent hover:!border-transparent"
                    >
                      <li className="text-foreground hover:text-red-300 transition-colors text-lg">
                        Logout
                      </li>
                    </NavLink>
                  )}
                  <ThemeToggle />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Menu */}

        {/* Mobile Search - Always visible on smaller screens */}
        {/* <div className="mt-4 lg:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Beat"
              className="bg-gray-800 text-white px-4 py-2 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 w-full"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div> */}
      </nav>
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
