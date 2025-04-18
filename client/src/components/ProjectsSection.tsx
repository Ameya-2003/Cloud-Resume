export default function ProjectsSection() {
  const projects = [
    {
      title: 'AWS Cloud Resume Challenge',
      description: 'Created a serverless resume website using AWS services, including S3, CloudFront, Lambda, and DynamoDB.',
      technologies: ['AWS S3', 'CloudFront', 'Route 53', 'Lambda', 'DynamoDB', 'API Gateway'],
      icon: '♚',
      link: '#'
    },
    {
      title: 'Serverless Data Processing Pipeline',
      description: 'Designed and implemented a scalable data processing solution using AWS Lambda and Step Functions.',
      technologies: ['AWS Lambda', 'Step Functions', 'S3', 'CloudWatch', 'SNS'],
      icon: '♛',
      link: '#'
    },
    {
      title: 'Infrastructure as Code Templates',
      description: 'Created reusable IaC templates for common cloud architecture patterns using Terraform and AWS SAM.',
      technologies: ['Terraform', 'AWS SAM', 'CloudFormation', 'GitHub Actions'],
      icon: '♝',
      link: '#'
    },
    {
      title: 'Container Orchestration Platform',
      description: 'Built a managed Kubernetes platform for microservices deployment with automated CI/CD.',
      technologies: ['EKS', 'Docker', 'Helm', 'Jenkins', 'Prometheus'],
      icon: '♜',
      link: '#'
    },
    {
      title: 'Multi-Region Disaster Recovery',
      description: 'Implemented a cross-region disaster recovery solution for critical business applications.',
      technologies: ['Route 53', 'CloudFront', 'S3 Cross-Region Replication', 'RDS', 'DynamoDB Global Tables'],
      icon: '♞',
      link: '#'
    },
    {
      title: 'Cost Optimization Initiative',
      description: 'Led a project to reduce cloud infrastructure costs while maintaining performance and reliability.',
      technologies: ['AWS Cost Explorer', 'Lambda', 'CloudWatch', 'AWS Organizations', 'Cost Allocation Tags'],
      icon: '♟',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100 relative">
      {/* Chess Board Pattern Background */}
      <div className="absolute inset-0 bg-opacity-5" aria-hidden="true">
        <div 
          className="h-full w-full" 
          style={{
            backgroundImage: 'linear-gradient(45deg, #333 25%, transparent 25%), linear-gradient(-45deg, #333 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #333 75%), linear-gradient(-45deg, transparent 75%, #333 75%)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-chess text-3xl md:text-5xl font-bold mb-4">
            Strategic <span className="text-chess-gold">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Each project represents a successful campaign, carefully executed with both strategic and tactical precision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="bg-chess-black text-white p-4 flex items-center">
                <div className="text-4xl text-chess-gold mr-3" aria-hidden="true">{project.icon}</div>
                <h3 className="font-accent text-xl truncate">{project.title}</h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4 h-24 overflow-hidden">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
                
                <a 
                  href={project.link} 
                  className="inline-block bg-chess-gold text-chess-black font-accent px-4 py-2 rounded hover:bg-opacity-80 transition-all"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
