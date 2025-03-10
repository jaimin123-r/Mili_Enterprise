const About = () => {
    return (
      <div>
        {/* About Hero Section */}
        <div className="bg-gradient-to-r from-zinc-950 to-zinc-800 text-white py-16 md:py-24">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Fabrication World</h1>
            <p className="text-lg text-blue-100 max-w-3xl">
              Since 2010, we've been providing high-quality fabrication solutions to businesses across India. Our commitment to excellence and precision has made us a trusted partner for all fabrication needs.
            </p>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="bg-white section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="title-section">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Fabrication World was founded in 2010 by Jaimin Rathod with a vision to provide superior quality fabrication services that meet international standards while catering to the local market needs.
                </p>
                <p className="text-gray-700 mb-4">
                  What started as a small workshop has now grown into a full-fledged fabrication company with state-of-the-art machinery and a team of skilled professionals. Our journey has been marked by continuous learning, innovation, and a relentless pursuit of excellence.
                </p>
                <p className="text-gray-700">
                  Today, we serve clients from various industries including construction, automotive, aerospace, and more. Our ability to understand unique client requirements and deliver customized solutions has been the cornerstone of our success.
                </p>
              </div>
              <div>
                <img src="workshop.jpeg" alt="Our Workshop" className="rounded-lg shadow-lg w-full"/>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="bg-gray-50 section-padding">
          <div className="container-custom">
            <h2 className="title-section">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality</h3>
                <p className="text-gray-600">We never compromise on quality. Every project undergoes rigorous quality checks to ensure it meets our high standards.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">We continuously adopt new technologies and techniques to improve our fabrication processes and deliver better results.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
                <p className="text-gray-600">We believe in building long-term relationships with our clients by understanding their needs and exceeding their expectations.</p>
              </div>
            </div>
          </div>
        </div>
        
      
      </div>
    );
  };
  
  export default About;