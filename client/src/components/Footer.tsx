export default function Footer() {
  const socialLinks = [
    { icon: '🔗', label: 'LinkedIn' },
    { icon: '🐙', label: 'GitHub' },
    { icon: '✉️', label: 'Email' },
    { icon: '📄', label: 'Resume' }
  ];
  
  const footerLinks = ['Privacy Policy', 'Terms of Use'];

  return (
    <footer className="bg-chess-black text-white py-8 relative">
      {/* Chess Board Border Top */}
      <div className="h-4 bg-gradient-to-r from-chess-white via-chess-gold to-chess-black"></div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="text-4xl text-chess-gold mr-3" aria-hidden="true">♞</div>
              <span className="font-accent text-xl">MY PORTFOLIO</span>
            </div>
            <p className="mt-2 text-gray-400 max-w-md">
              A strategic approach to cloud engineering and AWS architecture.
            </p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href="#" 
                className="text-gray-400 hover:text-chess-gold transition-colors" 
                aria-label={link.label}
              >
                <span className="text-2xl">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Your Name | AWS Cloud Resume Challenge
          </div>
          
          <div className="flex space-x-4">
            {footerLinks.map((link, index) => (
              <a 
                key={index}
                href="#" 
                className="text-gray-400 hover:text-chess-gold transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
