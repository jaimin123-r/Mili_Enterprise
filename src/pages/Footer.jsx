import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="container-custom py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Mili Enterprise</h3>
              <p className="text-gray-400 mb-6">
                Providing high-quality fabrication services with precision engineering.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>Bavla, Ahmedabad, Gujarat 382220, India</span>
                </p>
                <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#6b7280" className="w-6 h-6 mr-2 text-gray-500" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 13333.33 13333.33" id="whatsapp">
  <path d="M6668.43 10621.66c-809.34,0 -1559.74,-243.52 -2191.57,-654.83l-1526.58 483.73 493.6 -1470.81c-477.12,-644.87 -760.15,-1454.33 -760.15,-2319.68 0,-128.34 9.84,-250.07 26.31,-378.39 194.16,-2003.85 1898.59,-3570.02 3958.39,-3570.02 2092.6,0 3813.46,1608.96 3974.57,3642.41 6.61,105.26 6.61,210.54 6.61,305.99 0,2181.5 -1786.43,3961.59 -3981.18,3961.59z"></path>
  <path fill="#000" d="M8050.36 7196.37c-115.4,-29.61 -187.6,-55.93 -269.89,65.83 -118.55,187.54 -368.58,598.83 -611.98,477.1 -121.7,-55.93 -493.43,-177.7 -937.67,-572.54 -345.56,-309.3 -582.34,-681.09 -645.08,-792.96 -101.84,-190.85 220.39,-391.56 338.94,-631.75 39.41,-78.98 23.02,-144.78 -9.78,-200.72 -23.02,-55.93 -256.65,-628.44 -355.33,-855.48 -95.53,-233.63 -194.22,-194.12 -256.65,-194.12 -645.09,0 -947.76,457.36 -947.76,1098.94 0,128.32 26.48,266.55 65.89,388.28 115.08,411.3 371.73,743.61 411.46,799.55 55.81,78.94 799.58,1276.65 1980.66,1737.35 1187.7,460.58 1187.7,305.96 1398.31,289.47 207.46,-16.37 684.5,-273.11 783.19,-549.49 95.53,-266.48 95.53,-500.15 62.43,-549.46 -39.41,-69.08 -1006.72,-506.7 -1006.72,-510.01z"></path>
</svg>

                <a href="tel:+91 9537619792">+91 9537994341</a>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:iamdhruvdave@gmail.com">iamdhruvdave@gmail.com</a>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Mon - Sun: 9:00 AM - 6:00 PM</span>
              </p>
            </div>
          </div>
   
            <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl overflow-hidden p-6 md:flex md:items-center">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <div className="h-28 w-28 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                        DD
                    </div>
                </div>
                <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Dhruv Dave</h2>
                    <p className="text-sm text-gray-600 mb-2">Owner of <span className="font-semibold text-purple-600">MILI ENTERPRISE</span></p>
                    {/* <p className="text-gray-700 text-sm mb-4">
                        A leading fabrication company specializing in high-quality, custom fabrication solutions. With a commitment to precision engineering and superior craftsmanship, MILI ENTERPRISE delivers exceptional results for a wide range of industrial needs.
                    </p> */}
                    <div className="text-sm text-gray-800 space-y-2">
                        <div className="flex items-center gap-2">
                            <Phone className="text-purple-600" />
                            <span>+91 9537994341</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="text-purple-600" />
                            <span>iamdhruvdave@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
     
      
      {/* Copyright */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 py-4">
        <div className="container-custom text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Fabrication World. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;