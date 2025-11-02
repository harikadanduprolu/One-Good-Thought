import { Link, useLocation } from "react-router-dom";
import { Sparkles, Compass, Info, ShoppingBag } from "lucide-react";
import { CartDrawer } from "./CartDrawer";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Sparkles className="h-6 w-6 text-primary transition-bounce group-hover:rotate-12" />
            <span className="font-quote text-xl font-bold text-foreground">
              One Good Thought
            </span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className={`flex items-center space-x-1 font-body text-sm font-medium transition-smooth ${
                isActive('/') 
                  ? 'text-primary' 
                  : 'text-foreground/70 hover:text-primary'
              }`}
            >
              <Sparkles className="h-4 w-4" />
              <span>Home</span>
            </Link>
            
            <Link
              to="/discover"
              className={`flex items-center space-x-1 font-body text-sm font-medium transition-smooth ${
                isActive('/discover') 
                  ? 'text-primary' 
                  : 'text-foreground/70 hover:text-primary'
              }`}
            >
              <Compass className="h-4 w-4" />
              <span>Discover</span>
            </Link>
            
            <Link
              to="/shop"
              className={`flex items-center space-x-1 font-body text-sm font-medium transition-smooth ${
                isActive('/shop') 
                  ? 'text-primary' 
                  : 'text-foreground/70 hover:text-primary'
              }`}
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Shop</span>
            </Link>
            
            <Link
              to="/about"
              className={`flex items-center space-x-1 font-body text-sm font-medium transition-smooth ${
                isActive('/about') 
                  ? 'text-primary' 
                  : 'text-foreground/70 hover:text-primary'
              }`}
            >
              <Info className="h-4 w-4" />
              <span>About</span>
            </Link>
            
            <CartDrawer />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
