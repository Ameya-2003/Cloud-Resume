import { useState } from "react";
import ChessBoard from "@/components/ChessBoard";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

  return (
    <header className="relative overflow-hidden bg-chess-black text-white">
      {/* Chess Board Pattern Background */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        {Array(8).fill(0).map((_, rowIndex) => (
          <div className="flex" key={`row-${rowIndex}`}>
            {Array(8).fill(0).map((_, colIndex) => (
              <div 
                key={`cell-${rowIndex}-${colIndex}`}
                className="w-16 h-16 md:w-24 md:h-24" 
                style={{backgroundColor: (rowIndex + colIndex) % 2 === 0 ? '#F0F0F0' : '#333333'}}
              />
            ))}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <nav className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            {/* Chess Knight Logo */}
            <div className="mr-4 text-4xl" aria-hidden="true">♞</div>
            <span className="font-accent text-xl tracking-wider">MY PORTFOLIO</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map(item => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="font-accent tracking-wider hover:text-chess-gold transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <button 
            className="md:hidden text-2xl" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </nav>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-chess-black p-4 rounded-md mb-8 animate-board-fade">
            <div className="flex flex-col space-y-4">
              {navItems.map(item => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="font-accent tracking-wider hover:text-chess-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-board-fade">
            <h1 className="font-chess text-4xl md:text-6xl font-bold mb-4">
              <span className="text-chess-gold">Strategic</span> Thinking, <br />
              <span className="text-chess-gold">Calculated</span> Execution
            </h1>
            <p className="text-xl mb-8 max-w-lg">
              AWS Cloud Engineer with a passion for infrastructure as code and serverless architecture.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="bg-chess-gold text-chess-black px-6 py-3 rounded-md font-accent tracking-wider hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                CONTACT ME
              </a>
              <a 
                href="#projects" 
                className="border-2 border-white px-6 py-3 rounded-md font-accent tracking-wider hover:border-chess-gold hover:text-chess-gold transition-all transform hover:-translate-y-1"
              >
                VIEW PROJECTS
              </a>
            </div>
          </div>
          
          <div className="md:w-5/12 relative">
            <ChessBoard />
          </div>
        </div>
      </div>
      
      {/* Chess Board Border Bottom */}
      <div className="h-4 bg-gradient-to-r from-chess-white via-chess-gold to-chess-black"></div>
    </header>
  );
}
