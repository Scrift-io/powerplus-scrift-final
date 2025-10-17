
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Map from '@/components/Map';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-progressive-dark-grey mb-6">
                Contact <span className="text-progressive-red">Us</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Get in touch with Progressive Traders - We're here to help with all your FMCG needs
              </p>
            </div>

            {/* Contact Details and Form Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="border-2 border-progressive-light-grey shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-progressive-dark-grey flex items-center gap-3">
                      <MapPin className="text-progressive-red" size={24} />
                      Our Offices
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-progressive-red mb-2">Karachi Head Office</h4>
                      <p className="text-gray-700 leading-relaxed">
                        LC-40, Landhi Industrial Area<br />
                        Near Opal Laboratory, Karachi, Pakistan<br />
                        Post Code 71500<br />
                        <span className="font-medium">Tel:</span> 021-35026618-20, 35026622, 021-35026602
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-progressive-red mb-2">Lahore Regional Office</h4>
                      <p className="text-gray-700 leading-relaxed">
                        60th Mall Road<br />
                        Shahrah-e-Quaid-e-Azam, Lahore Pakistan<br />
                        <span className="font-medium">Tel:</span> 042-36361067-9
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-progressive-red mb-2">Rawalpindi Regional Office</h4>
                      <p className="text-gray-700 leading-relaxed">
                        House No. 51, Street #5, Khan Avenue<br />
                        Behind Shell Filling Station, Chaklala Scheme III<br />
                        <span className="font-medium">Tel:</span> 051-5145024
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-progressive-light-grey shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-progressive-dark-grey flex items-center gap-3">
                      <Mail className="text-progressive-red" size={24} />
                      Email Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      info@powerplus.com.pk
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-progressive-light-grey shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-progressive-dark-grey flex items-center gap-3">
                      <Phone className="text-progressive-red" size={24} />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-gray-700 space-y-1">
                      <p><span className="font-medium">Monday – Friday:</span> 9:00am to 5:00pm</p>
                      <p><span className="font-medium">Saturday:</span> 9:00am to 2:00pm</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="border-2 border-progressive-light-grey shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-progressive-dark-grey">
                      Send us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-progressive-red focus:outline-none transition-colors text-sm"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-progressive-red focus:outline-none transition-colors text-sm"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-progressive-red focus:outline-none transition-colors text-sm"
                          placeholder="+92-XXX-XXXXXXX"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-progressive-red focus:outline-none transition-colors text-sm"
                          placeholder="How can we help?"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-progressive-red focus:outline-none transition-colors resize-none text-sm"
                          placeholder="Tell us about your requirements or questions..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-progressive-red hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        <Send size={16} />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map Section - Full Width Below */}
            <div className="w-full">
              <Map />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
