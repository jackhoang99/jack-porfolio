import { useState } from 'react';
import { Mail } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function ContactForm({ darkMode }: { darkMode: boolean }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            message: formData.message
          }
        ]);

      if (error) throw error;

      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full max-w-4xl px-4">
      <div className="text-center mb-12">
        <h2 className={`font-display text-5xl font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Let's Connect</h2>
        <p className={`text-xl mb-8 ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>
          Have a question or want to work together? Send me a message!
        </p>
      </div>
      
      <div className={`rounded-2xl shadow-xl p-8 ${darkMode ? 'bg-teal-800' : 'bg-white'}`}>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>First name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-2 text-base rounded-lg border transition-colors ${
                  darkMode 
                    ? 'bg-teal-900 border-teal-600 text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20' 
                    : 'bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                }`}
              />
            </div>
            <div>
              <label htmlFor="lastName" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Last name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-4 py-2 text-base rounded-lg border transition-colors ${
                  darkMode 
                    ? 'bg-teal-900 border-teal-600 text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20' 
                    : 'bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                }`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 text-base rounded-lg border transition-colors ${
                  darkMode 
                    ? 'bg-teal-900 border-teal-600 text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20' 
                    : 'bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                }`}
              />
            </div>
            <div>
              <label htmlFor="phone" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 text-base rounded-lg border transition-colors ${
                  darkMode 
                    ? 'bg-teal-900 border-teal-600 text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20' 
                    : 'bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                }`}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Message *</label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`w-full px-4 py-2 text-base rounded-lg border transition-colors ${
                darkMode 
                  ? 'bg-teal-900 border-teal-600 text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20' 
                  : 'bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
              }`}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className={`w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-lg transition-all duration-300 text-base ${
              status === 'submitting' 
                ? 'opacity-75 cursor-not-allowed' 
                : 'hover:from-blue-700 hover:to-green-600 hover:shadow-lg hover:shadow-blue-100/50 transform hover:-translate-y-0.5'
            }`}
          >
            <Mail className="mr-2 h-5 w-5" />
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-green-400 text-center font-medium">Thank you for your message! I'll get back to you soon.</p>
          )}
          
          {status === 'error' && (
            <p className="text-red-400 text-center font-medium">Something went wrong. Please try again later.</p>
          )}
        </form>
      </div>
    </div>
  );
}