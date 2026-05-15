import { FaCcVisa } from 'react-icons/fa';
import { FaCcMastercard } from 'react-icons/fa';
import { FaCcPaypal } from 'react-icons/fa';
import { FaCcStripe } from 'react-icons/fa';
import { NavLink } from 'react-router';
import { TrooBrandLockup } from './TrooBrand';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mb-32 z-40 py-10 relative">
      <footer className="m-4 relative border-t border-red-200/15">
        <div className="max-w-6xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <NavLink
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <TrooBrandLockup className="text-3xl" />
            </NavLink>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium max-sm:justify-center sm:mb-0">
              <li>
                <NavLink to="/refund-policy" className="!text-foreground hover:!underline !transition-all !duration-300 me-4 md:me-6">
                  Refund Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy-policy" className="!text-foreground hover:!underline !transition-all !duration-300 me-4 md:me-6">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms-of-service" className="!text-foreground hover:!underline !transition-all !duration-300 me-4 md:me-6">
                  Terms of Use
                </NavLink>
              </li>
              <li>
                <NavLink to="/licenses" className="!text-foreground hover:!underline !transition-all !duration-300 me-4 md:me-6">
                  Licensing
                </NavLink>
              </li>
              <li>
                <NavLink to="/faqs" className="!text-foreground hover:!underline !transition-all !duration-300 me-4 md:me-6">
                  FAQS
                </NavLink>
              </li>
              <li>
                <NavLink to="/newsletter" className="!text-foreground hover:!underline !transition-all !duration-300 me-4 md:me-6">
                  Newsletter
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="min-[300px]:flex min-[300px]:justify-center min-[300px]:items-center sm:flex sm:items-center sm:justify-end">
            <ul className="flex flex-wrap items-center mb-6 min-sm:my-3 text-sm font-medium space-x-6 sm:mb-0">
              <li>
                <FaCcVisa size={30} />
              </li>
              <li>
                <FaCcMastercard size={30} />
              </li>
              <li>
                <FaCcPaypal size={30} />
              </li>
              <li>
                <FaCcStripe size={30} />
              </li>
            </ul>
          </div>
          <hr className="my-6 border-red-200/15 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            &copy; {currentYear}{' '}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="!text-foreground hover:underline !p-0 !m-0 !bg-transparent hover:!bg-transparent !transition-all !duration-300"
            >
              Troo!&trade;
            </button>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
