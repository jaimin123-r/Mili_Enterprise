import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, FileText, MessageSquare, Check, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, success: false, message: 'Sending your message...' });
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'There was an error sending your message. Please try again later.',
      });
    }
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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

  const getInputIcon = (fieldName) => {
    switch(fieldName) {
      case 'name': return <User size={18} />;
      case 'email': return <Mail size={18} />;
      case 'phone': return <Phone size={18} />;
      case 'subject': return <FileText size={18} />;
      case 'message': return <MessageSquare size={18} />;
      default: return null;
    }
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-zinc-950 to-zinc-800 text-white py-16"
      >
        <div className="container-custom px-4 mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-3"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-blue-100 max-w-2xl text-lg"
          >
            We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </motion.p>
        </div>
      </motion.div>

      <div className="container-custom px-4 mx-auto py-16">
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-10 -mt-16 relative z-10 max-w-4xl mx-auto">
          {formStatus.submitted && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 mb-8 rounded-lg flex items-start gap-3 ${
                formStatus.success 
                  ? 'bg-green-50 border-l-4 border-green-500 text-green-700' 
                  : 'bg-red-50 border-l-4 border-red-500 text-red-700'
              }`}
            >
              {formStatus.success 
                ? <Check size={24} className="text-green-500 flex-shrink-0 mt-0.5" /> 
                : <AlertCircle size={24} className="text-red-500 flex-shrink-0 mt-0.5" />
              }
              <div>
                <h3 className="font-bold mb-1">
                  {formStatus.success ? "Message Sent!" : "Sending Failed"}
                </h3>
                <p>{formStatus.message}</p>
              </div>
            </motion.div>
          )}
          
          <motion.form 
            initial="hidden"
            animate="visible"
            variants={formVariants}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              <motion.div variants={itemVariants}>
                <div className={`flex items-center gap-3 pb-2 border-b-2 ${
                  focusedField === 'name' ? 'border-blue-500' : 'border-gray-200'
                } transition-colors duration-300`}>
                  {getInputIcon('name')}
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full py-2 bg-transparent focus:outline-none text-gray-800"
                  />
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <div className={`flex items-center gap-3 pb-2 border-b-2 ${
                  focusedField === 'email' ? 'border-blue-500' : 'border-gray-200'
                } transition-colors duration-300`}>
                  {getInputIcon('email')}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full py-2 bg-transparent focus:outline-none text-gray-800"
                  />
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <div className={`flex items-center gap-3 pb-2 border-b-2 ${
                  focusedField === 'phone' ? 'border-blue-500' : 'border-gray-200'
                } transition-colors duration-300`}>
                  {getInputIcon('phone')}
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full py-2 bg-transparent focus:outline-none text-gray-800"
                  />
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <div className={`flex items-center gap-3 pb-2 border-b-2 ${
                  focusedField === 'subject' ? 'border-blue-500' : 'border-gray-200'
                } transition-colors duration-300`}>
                  {getInputIcon('subject')}
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject *"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full py-2 bg-transparent focus:outline-none text-gray-800"
                  />
                </div>
              </motion.div>
            </div>
            
            <motion.div variants={itemVariants}>
              <div className={`flex gap-3 pb-2 border-b-2 ${
                focusedField === 'message' ? 'border-blue-500' : 'border-gray-200'
              } transition-colors duration-300`}>
                <div className="pt-2">
                  {getInputIcon('message')}
                </div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows="4"
                  className="w-full py-2 bg-transparent focus:outline-none resize-none text-gray-800"
                ></textarea>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex justify-center md:justify-end"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="bg-gradient-to-r from-zinc-900 to-zinc-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                <span>Send Message</span>
                <Send size={18} />
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;