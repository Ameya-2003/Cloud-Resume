export default function AboutSection() {
  const stats = [
    { label: 'Years Experience', value: '5+', icon: '♜' },
    { label: 'Projects Completed', value: '30+', icon: '♝' },
    { label: 'Certifications', value: '4', icon: '♞' },
    { label: 'AWS Services Mastered', value: '15+', icon: '♟' }
  ];

  return (
    <section id="about" className="py-16 bg-chess-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              {/* Decorative Chess Piece */}
              <div className="absolute -top-12 -left-8 text-7xl text-chess-gold opacity-30" aria-hidden="true">♚</div>
              
              <h2 className="font-chess text-3xl md:text-5xl font-bold mb-6 relative">
                About <span className="text-chess-gold">Me</span>
              </h2>
              
              <div className="font-body text-lg space-y-4 relative">
                <p>Welcome to my chess-themed portfolio! I'm a passionate Cloud Engineer with expertise in AWS services, infrastructure as code, and serverless architecture.</p>
                
                <p>Just like in chess, I approach problems with strategic thinking, always planning several moves ahead. My experience spans across a variety of projects, from small-scale startups to enterprise-level implementations.</p>
                
                <p>When I'm not architecting cloud solutions, you'll find me playing chess, hiking in the mountains, or contributing to open-source projects.</p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-chess-black text-white p-6 rounded-md">
                  <h3 className="font-accent text-xl mb-2">My Strategy</h3>
                  <p>Like a chess grandmaster, I analyze all possibilities before making a move, ensuring optimal solutions.</p>
                </div>
                
                <div className="bg-chess-black text-white p-6 rounded-md">
                  <h3 className="font-accent text-xl mb-2">My Vision</h3>
                  <p>I see beyond immediate challenges to create architectures that scale and adapt to future requirements.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-5/12 md:ml-auto">
            {/* Chess-themed Experience Stats */}
            <div className="bg-chess-black text-white p-8 rounded-lg shadow-xl">
              <h3 className="font-accent text-2xl mb-6 text-center">Professional Journey</h3>
              
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-4xl text-chess-gold mr-4" aria-hidden="true">{stat.icon}</div>
                    <div>
                      <div className="font-bold text-xl">{stat.value}</div>
                      <div className="text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
