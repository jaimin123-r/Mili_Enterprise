import Hero from './Hero';
import Services from './ServicesPage';
import ReviewSlider from '../components/ReviewSlider';
import BlogPreview from '../components/BlogPreview';

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Why Choose Us Section */}
      <div className="bg-white section-padding">
        <div className="container-custom">
          <h2 className="title-section">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">We maintain strict quality standards throughout the fabrication process.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Timely Delivery</h3>
              <p className="text-gray-600">We understand the importance of deadlines and ensure on-time delivery.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Advanced Technology</h3>
              <p className="text-gray-600">We use state-of-the-art equipment and latest manufacturing techniques.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Our team consists of skilled engineers and technicians with years of experience.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services Preview */}
      <Services />
      
      {/* Company Stats */}
      <div className="bg-zinc-800 text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-blue-100">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-blue-100">Projects Completed</p>
            </div>
{/*             <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-blue-100">Happy Clients</p>
            </div> */}
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-blue-100">Team Members</p>
            </div>
          </div>
        </div>
      </div>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-sm hover:scale-105 transition-transform duration-300">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">Dhruv Dave</h2>
          <p className="text-gray-600 mb-2 text-center"><strong>Phone:</strong> +91 9537619792</p>
          <p className="text-gray-600 mb-4 text-center"><strong>Email:</strong> iamdhruvdave@gmail.com</p>
          <p className="text-gray-700 text-sm text-center">
            Owner of MILI ENTERPRISE, a leading fabrication company specializing in high-quality, custom fabrication solutions. With a commitment to precision engineering and superior craftsmanship, MILI ENTERPRISE delivers exceptional results for a wide range of industrial needs.
          </p>
        </div>
      </div>
    </div>
      {/* Client Reviews */}
{/*       <ReviewSlider />
       */}
      {/* Blog Preview */}
      {/* <BlogPreview /> */}
  
    </div>
  );
};

export default Home;
