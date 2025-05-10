import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'Services', 
    href: '/#services',
    children: [
      { label: 'AI Development', href: '/#ai-development' },
      { label: 'Workflow Mapping', href: '/#workflow-mapping' },
      { label: 'Automation Solutions', href: '/#automation' },
    ]
  },
  { label: 'Case Studies', href: '/#case-studies' },
  { label: 'About Us', href: '/#about' },
  { label: 'Events', href: '/#events' },
  { label: 'Resources', href: '/#resources' },
  { label: 'App Marketplace', href: '/apps' },
  { label: 'Contact', href: '/#contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  // Scroll to the section when clicking on a hash link
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    // Extract the section id from href (remove the '/#' prefix)
    const sectionId = href.replace('/#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper function to render the correct link (Link or anchor)
  const renderNavLink = (item: NavItem, className: string) => {
    if (item.href.includes('#') && item.href !== '/#') {
      return (
        <a 
          href={item.href} 
          className={className}
          onClick={(e) => handleScrollToSection(e, item.href)}
        >
          {item.label}
        </a>
      );
    }
    
    return (
      <Link to={item.href} className={className}>
        {item.label}
      </Link>
    );
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/Aivancely.png" 
                alt="Aivancely" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <div 
                  className="flex items-center cursor-pointer"
                  onClick={() => item.children && toggleDropdown(item.label)}
                >
                  {renderNavLink(
                    item, 
                    `text-sm font-medium ${scrolled ? 'text-gray-800 hover:text-primary-600' : 'text-gray-800 hover:text-primary-600'} transition-colors duration-200`
                  )}
                  {item.children && (
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  )}
                </div>
                
                {item.children && (
                  <div className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 transition-all duration-200 ${activeDropdown === item.label ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    {item.children.map((child) => (
                      <div key={child.label}>
                        {renderNavLink(
                          child,
                          "block px-4 py-2 text-sm text-gray-800 hover:bg-primary-50 hover:text-primary-600"
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="/#contact"
              onClick={(e) => handleScrollToSection(e, '/#contact')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-800' : 'text-gray-800'}`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <div key={item.label}>
                  <div 
                    className="flex items-center justify-between"
                    onClick={() => item.children && toggleDropdown(item.label)}
                  >
                    {renderNavLink(
                      item,
                      "text-gray-800 hover:text-primary-600 transition-colors duration-200 text-base font-medium"
                    )}
                    {item.children && (
                      <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    )}
                  </div>
                  
                  {item.children && activeDropdown === item.label && (
                    <div className="mt-2 ml-4 space-y-2">
                      {item.children.map((child) => (
                        <div key={child.label}>
                          {renderNavLink(
                            child,
                            "block text-gray-600 hover:text-primary-600 text-sm"
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <a
                  href="/#contact"
                  onClick={(e) => handleScrollToSection(e, '/#contact')}
                  className="block w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-center text-base font-medium transition-colors duration-300"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;