export default function ExperienceSection() {
  const jobs = [
    {
      title: 'Senior Cloud Engineer',
      company: 'TechStrategists Inc.',
      period: '2021 - Present',
      description: 'Lead cloud architecture and implementation for enterprise clients, specializing in AWS serverless solutions and infrastructure as code.',
      achievements: [
        'Designed and implemented a multi-region disaster recovery solution',
        'Reduced infrastructure costs by 35% through service optimization',
        'Automated CI/CD pipelines for 20+ microservices'
      ],
      icon: '♚'
    },
    {
      title: 'DevOps Engineer',
      company: 'CloudMoves Solutions',
      period: '2019 - 2021',
      description: 'Managed cloud infrastructure and CI/CD pipelines for SaaS applications with a focus on AWS services.',
      achievements: [
        'Implemented infrastructure as code using Terraform and AWS CloudFormation',
        'Reduced deployment time from days to hours with automated pipelines',
        'Improved system reliability with comprehensive monitoring solutions'
      ],
      icon: '♛'
    },
    {
      title: 'Systems Administrator',
      company: 'DataKnight Technologies',
      period: '2017 - 2019',
      description: 'Maintained and improved on-premise and cloud infrastructure for a growing technology company.',
      achievements: [
        'Led cloud migration initiative for legacy applications',
        'Implemented automated backup and disaster recovery protocols',
        'Reduced system downtime by 40% through proactive monitoring'
      ],
      icon: '♝'
    }
  ];

  return (
    <section id="experience" className="py-16 bg-chess-dark-gray text-white relative overflow-hidden">
      {/* Chess Pattern Background */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        {Array(10).fill(0).map((_, i) => (
          <div className="flex" key={`exp-row-${i}`}>
            {Array(10).fill(0).map((_, j) => (
              <div 
                key={`exp-cell-${i}-${j}`}
                className="w-20 h-20" 
                style={{backgroundColor: (i + j) % 2 === 0 ? '#F0F0F0' : '#333333'}}
              />
            ))}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-chess text-3xl md:text-5xl font-bold mb-4">
            Professional <span className="text-chess-gold">Experience</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">My career path, like a chess game, has been carefully planned with strategic moves to maximize my expertise and impact.</p>
        </div>
        
        <div className="flex flex-col space-y-12 max-w-4xl mx-auto">
          {jobs.map((job, index) => (
            <div key={index} className="flex flex-col md:flex-row">
              {/* Chess Piece Icon */}
              <div className="md:w-1/12 text-center mb-4 md:mb-0">
                <div className="inline-block text-5xl text-chess-gold" aria-hidden="true">{job.icon}</div>
                {index !== jobs.length - 1 && (
                  <div className="hidden md:block h-full w-0.5 bg-gray-600 mx-auto mt-4"></div>
                )}
              </div>
              
              {/* Job Content */}
              <div className="md:w-11/12">
                <div className="bg-chess-black bg-opacity-50 p-6 rounded-lg hover:shadow-2xl hover:bg-opacity-70 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="font-chess text-2xl font-bold">{job.title}</h3>
                      <div className="text-chess-gold font-accent">{job.company}</div>
                    </div>
                    <div className="bg-chess-gold text-chess-black px-4 py-1 rounded font-accent mt-2 md:mt-0 inline-block md:block">
                      {job.period}
                    </div>
                  </div>
                  
                  <p className="mb-4">{job.description}</p>
                  
                  <h4 className="font-bold mb-2">Key Achievements:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
