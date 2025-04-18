export default function SkillsSection() {
  const skillCategories = [
    {
      category: 'AWS Services',
      icon: '♜',
      skills: ['Lambda', 'S3', 'CloudFront', 'DynamoDB', 'API Gateway', 'Route 53', 'IAM']
    },
    {
      category: 'Infrastructure',
      icon: '♞',
      skills: ['Terraform', 'CloudFormation', 'AWS SAM', 'Docker', 'Kubernetes', 'CI/CD Pipelines']
    },
    {
      category: 'Programming',
      icon: '♝',
      skills: ['Python', 'JavaScript', 'Bash', 'HTML/CSS', 'SQL', 'YAML/JSON']
    },
    {
      category: 'Tools & Methodologies',
      icon: '♟',
      skills: ['Git', 'GitHub Actions', 'Agile', 'Monitoring', 'Security Best Practices', 'Cost Optimization']
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      level: 'Professional',
      date: 'April 2022',
      icon: '♚'
    },
    {
      title: 'AWS Certified DevOps Engineer',
      level: 'Professional',
      date: 'January 2021',
      icon: '♛'
    },
    {
      title: 'HashiCorp Certified Terraform Associate',
      level: '',
      date: 'October 2021',
      icon: '♜'
    },
    {
      title: 'AWS Certified Developer',
      level: 'Associate',
      date: 'March 2020',
      icon: '♞'
    }
  ];

  return (
    <section id="skills" className="py-16 bg-chess-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-chess text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-chess-gold">Arsenal</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Like chess pieces, each skill has its unique strengths and purpose in my professional toolkit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1"
            >
              <div className="bg-chess-black text-white p-4">
                <div className="flex items-center">
                  <div className="text-4xl text-chess-gold mr-3" aria-hidden="true">{category.icon}</div>
                  <h3 className="font-accent text-xl">{category.category}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-chess-gold rounded-full mr-2"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Certifications Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="font-chess text-2xl md:text-3xl font-bold text-center mb-8">
            Certifications & <span className="text-chess-gold">Achievements</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-start p-4 bg-gradient-to-r from-chess-black to-gray-700 text-white rounded-lg">
                <div className="text-4xl text-chess-gold mr-4 mt-1" aria-hidden="true">{cert.icon}</div>
                <div>
                  <h4 className="font-accent text-xl">{cert.title}</h4>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-300">{cert.level}</span>
                    <span className="bg-chess-gold text-chess-black px-2 py-1 text-sm rounded">{cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
