import { useEffect } from 'react';
import Hero from './Hero';
import Services from './ServicesPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Mail, Phone } from 'lucide-react';


const Home = () => {
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      
      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold  mb-12 title-section" data-aos="fade-up">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">Quality Assurance</h3>
              <p className="text-gray-600 text-center">We maintain strict quality standards throughout the fabrication process.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">Timely Delivery</h3>
              <p className="text-gray-600 text-center">We understand the importance of deadlines and ensure on-time delivery.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">Advanced Technology</h3>
              <p className="text-gray-600 text-center">We use state-of-the-art equipment and latest manufacturing techniques.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-amber-100 text-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">Expert Team</h3>
              <p className="text-gray-600 text-center">Our team consists of skilled engineers and technicians with years of experience.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services Preview */}
      <Services />
      
      {/* Company Stats */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform transition-transform duration-500 hover:scale-105" data-aos="zoom-in" data-aos-delay="100">
              <div className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-white">15+</div>
              <p className="text-indigo-100 text-lg">Years of Experience</p>
            </div>
            <div className="transform transition-transform duration-500 hover:scale-105" data-aos="zoom-in" data-aos-delay="200">
              <div className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-white">500+</div>
              <p className="text-indigo-100 text-lg">Projects Completed</p>
            </div>
         
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-blue-100">Team Members</p>
            </div>
          </div>
        </div>
      </div>
      
    
  
    </div>
  );
};

export default Home;
