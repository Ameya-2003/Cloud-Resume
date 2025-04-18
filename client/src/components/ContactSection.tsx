import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const contactInfo = [
    { icon: '✉️', label: 'Email', value: 'contact@yourname.com' },
    { icon: '📱', label: 'Phone', value: '+1 (123) 456-7890' },
    { icon: '📍', label: 'Location', value: 'San Francisco, CA' },
    { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/yourname' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/yourusername' }
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    // For now, just show a success message
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 bg-chess-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-chess text-3xl md:text-5xl font-bold mb-4">
              Make Your <span className="text-chess-gold">Move</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Let's connect and discuss how my skills and experience can contribute to your organization's success.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-accent text-2xl mb-6 text-center">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-2xl mr-4">{contact.icon}</div>
                    <div>
                      <div className="text-gray-500">{contact.label}</div>
                      <div className="font-medium">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2 bg-chess-black text-white p-8 rounded-lg shadow-lg">
              <h3 className="font-accent text-2xl mb-6 text-center">Send a Message</h3>
              
              {isSubmitted ? (
                <div className="p-4 bg-chess-gold text-chess-black rounded-md text-center">
                  <p className="font-bold">Thank you for your message!</p>
                  <p>I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-chess-gold focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-chess-gold focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-1">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-chess-gold focus:outline-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-chess-gold text-chess-black px-6 py-3 rounded font-accent tracking-wider hover:bg-opacity-90 transition-all"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
