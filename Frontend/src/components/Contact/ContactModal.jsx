import React, { useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';

const ContactModal = ({ isOpen, onClose }) => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSuccess(true);
      formRef.current.reset();
      // Optionally: setTimeout(() => onClose(), 3000); // Success ke baad band karne ke liye
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay: Ispe click karne se modal band ho jayega */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-gray-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-gray-700 animate-in fade-in zoom-in duration-300">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <FaTimes size={24} />
        </button>

        <div className="p-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-2">Get in Touch</h2>
            <p className="text-gray-400">Have a project? Let's talk!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Details */}
            <div className="space-y-6">
              <ContactDetail
                icon={<FaEnvelope />}
                title="Email"
                text="info@tsarit.com"
              />
              <ContactDetail
                icon={<FaPhone />}
                title="Phone"
                text="+91 7013375074" />
              <ContactDetail
                icon={<FaMapMarkerAlt />}
                title="Location"
                text="Hyderabad, India"
              />
            </div>

            {/* Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <InputField id="name" label="Name" type="text" name="name" required />
              <InputField id="email" label="Email" type="email" name="email" required />
              <div>
                <label className="block text-gray-300 mb-1 text-sm font-medium">Message</label>
                <textarea
                  id="message" name="message" required rows="3"
                  className="w-full bg-gray-800 text-gray-200 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center"
              >
                {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : 'Send Message'}
              </button>
              {success && <p className="text-green-400 text-center text-sm">Sent successfully!</p>}
              {error && <p className="text-red-400 text-center text-sm">Error! Try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-components
const ContactDetail = ({ icon, title, text }) => (
  <div className="flex items-center space-x-4">
    <div className="text-blue-500 text-xl">{icon}</div>
    <div>
      <h4 className="text-white text-sm font-semibold">{title}</h4>
      <p className="text-gray-400 text-xs">{text}</p>
    </div>
  </div>
);

const InputField = ({ id, label, ...props }) => (
  <div>
    <label htmlFor={id} className="block text-gray-300 mb-1 text-sm font-medium">{label}</label>
    <input
      id={id} {...props}
      className="w-full bg-gray-800 text-gray-200 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
    />
  </div>
);

export default ContactModal;