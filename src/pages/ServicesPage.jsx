import React, { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Circle, Box, Pipette, CheckSquare, BarChart2, AlignCenter, Type, Layers } from 'lucide-react';
import { X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Trading_Items = ({ showAll = false, limit = 3 }) => {
  const services = [
    {
      id: 1,
      title: "Angle",
      description: "High-quality structural angles for construction",
      icon: <motion.div whileHover={{ rotate: 45 }}><Type size={32} /></motion.div>,
      color: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "Colour Coated Sheet",
      description: "Premium colored sheets for roofing and cladding",
      icon: <motion.div whileHover={{ scale: 1.1 }}><Pipette size={32} /></motion.div>,
      color: "bg-gradient-to-br from-purple-500 to-purple-700"
    },
    {
      id: 3,
      title: "Pipes",
      description: "Durable pipes for industrial applications",
      icon: <motion.div whileHover={{ rotateY: 180 }}><Circle size={32} /></motion.div>,
      color: "bg-gradient-to-br from-green-500 to-green-700"
    },
    {
      id: 4,
      title: "Chaked Sheet",
      description: "Versatile checked sheets for various uses",
      icon: <motion.div whileHover={{ scale: 1.1 }}><CheckSquare size={32} /></motion.div>,
      color: "bg-gradient-to-br from-yellow-500 to-yellow-700"
    },
    {
      id: 5,
      title: "Rough Bar",
      description: "Strong rough bars for construction projects",
      icon: <motion.div whileHover={{ x: [0, 5, -5, 0] }}><BarChart2 size={32} /></motion.div>,
      color: "bg-gradient-to-br from-red-500 to-red-700"
    },
    {
      id: 6,
      title: "Bright Bar",
      description: "Polished bright bars for precision applications",
      icon: <motion.div whileHover={{ rotate: 90 }}><AlignCenter size={32} /></motion.div>,
      color: "bg-gradient-to-br from-indigo-500 to-indigo-700"
    },
    {
      id: 7,
      title: "I Beam",
      description: "Structural I beams for heavy-duty support",
      icon: <motion.div whileHover={{ scale: 1.1 }}><Box size={32} /></motion.div>,
      color: "bg-gradient-to-br from-cyan-500 to-cyan-700"
    },
    {
      id: 8,
      title: "Channel",
      description: "Versatile channel sections for frameworks",
      icon: <motion.div whileHover={{ y: [0, -5, 0] }}><Layers size={32} /></motion.div>,
      color: "bg-gradient-to-br from-pink-500 to-pink-700"
    }
  ];

  const displayServices = showAll ? services : services.slice(0, limit);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="container-custom px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className=" mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 title-section">
            Our Trading Items
            <motion.span
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </h2>
          <p className="text-gray-600 max-w-2xl text-lg">
            Explore our comprehensive range of high-quality steel products to meet your construction and industrial needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {displayServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { type: "spring", stiffness: 400 }
              }}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all"
            >
              {/* <div className={`${service.color} p-6 flex justify-center items-center`}>
                <div className="text-white">{service.icon}</div>
              </div> */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center mt-16"
          >
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full inline-flex items-center shadow-lg transition-all"
              >
                View All Trading Items
                <ArrowRight size={20} className="ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};


const ServicesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true
    });
  }, []);
 

  return (
    <div className="overflow-hidden">
      
      {/* Services Hero Section */}
      <div className="bg-gradient-to-b from-[#20174a] via-[#2c2067] to-[#6233cc] text-white py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            data-aos="fade-right"
          >
            All Types of <span className="text-yellow-500">Fabrication Work</span> We Provide
          </h1>
          <p 
            className="text-lg md:text-xl text-indigo-100 max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We offer a comprehensive range of fabrication services to meet diverse industry needs. Our advanced equipment and skilled team ensure high-quality results for every project.
          </p>
        </div>
      </div>

      {/* Detailed Services */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-12 title-section"
            data-aos="fade-up"
          >
            Our Fabrication Work
          </h2>
          <PhotoGrid />
        </div>
      </div>

      {/* Trading Items Overview */}
      <Trading_Items showAll={true} />
      
      {/* Call to Action */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            data-aos="fade-up"
          >
            Need a Custom Solution?
          </h2>
          <p 
            className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Contact us today to discuss your specific requirements. Our team will work with you to develop the perfect fabrication solution for your project.
          </p>
          <motion.a 
            href="/contact" 
            className="inline-block bg-white text-black font-semibold py-3 px-8 rounded-md transition duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Request a Quote
          </motion.a>
        </div>
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    heading: "GATES",
    description: "Gates give the first impression to your guests, visitors, and anyone passing through your houses, offices.",
    images: [
      "gates1.jpg",
      "gates2.jpg",
      "gates3.jpg",
      "gates4.jpg"
    ]
  },
  {
    id: 2,
    heading: "STAIRCASE RAILING",
    description: "Installing balconies is extremely crucial to ensure the all-around safety of your property.",
    images: [
      "Railing1.jpg",
      "Railing2.png",
      "Railing3.jpg",
      "Railing4.jpg"
    ]
  },
  {
    id: 3,
    heading: "BOUNDARY WALLS",
    description: "Boundary walls may sound unappealing and something that dulls your space's overall look, but that's not the case with us. ",
    images: [
      "boundary_1.jpg",
      "boundary_2.jpg",
      "boundary_3.jpg",
      "boundary_4.png"
    ]
  },
  {
    id: 4,
    heading: "ROOFING SHADES",
    description: "A good roof means a good house. Roofing is a very crucial part of any living space project...",
    images: [
      "Shades5.jpeg",
      "Shades6.jpeg",
      "Shades7.jpeg",
      "Shades4.png"
    ]
  },
  {
    id: 5,
    heading: "ROLLING SHUTTER",
    description: "Window and door enhancements can work wonders to your space, Shutters can give your house a luxurious look. ",
    images: [
      "shutter1.jpg",
      "shutter2.jpg",
      "shutter3.jpg",
      "shutter4.png"
    ]
  },
  {
    id: 6,
    heading: "IRON GRILLS",
    description: "Having window grills is an age-old practice that has been followed across the globe.",
    images: [
      "irongrill5.jpeg",
      "irongrill6.jpeg",
      "irongrill7.jpeg",
      "irongrill8.jpeg"
    ]
  },
];

const ImageCard = ({ card }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <motion.div 
        className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
      
        <div className="grid grid-cols-2 gap-2 p-3">
          {card.images.map((image, index) => (
            <div 
              key={index} 
              className="relative aspect-square overflow-hidden rounded-md cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <motion.div 
                className="w-full h-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={image} 
                  alt={`${card.heading} image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            </div>
          ))}
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold mb-2 text-indigo-800">{card.heading}</h3>
          <p className="text-gray-600">{card.description}</p>
          <motion.button
            className="mt-4 text-emerald-600 font-medium flex items-center gap-1 group"
            whileHover={{ x: 5 }}
          >
            View Details
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-2"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </motion.button>
        </div>
      </motion.div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative max-w-4xl max-h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-3 right-3 bg-white text-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <img 
              src={selectedImage} 
              alt="Preview" 
              className="max-w-full max-h-screen object-contain rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

const PhotoGrid = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: card.id * 0.1 }}
            data-aos="fade-up"
            data-aos-delay={card.id * 100}
          >
            <ImageCard card={card} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;