"use client";
import MapEmbed from "@/components/MapEmbed";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import React, { useState } from "react";

interface Dictionary {
  contact: {
    title: string;
    subtitle: string;
    description: string;
    map: {
      title: string;
      description: string;
      companyName: string;
      companyTagline: string;
      address: string;
      area: string;
      hours: string;
    };
    address: {
      title: string;
      mainOffice: {
        title: string;
        address: string;
        hours: string;
      };
      workshop: {
        title: string;
        address: string;
      };
    };
    phone: {
      title: string;
      marketing: {
        label: string;
        number: string;
      };
      direct: {
        label: string;
        number: string;
      };
      purchasing: {
        label: string;
        number: string;
      };
      financial: {
        label: string;
        number: string;
      };
      fax: {
        label: string;
        number: string;
      };
    };
    email: {
      title: string;
      general: {
        label: string;
        address: string;
      };
      product: {
        label: string;
        address: string;
      };
      technical: {
        label: string;
        address: string;
      };
    };
    form: {
      title: string;
      successMessage: string;
      errorMessage: string;
      fields: {
        name: {
          label: string;
          placeholder: string;
        };
        email: {
          label: string;
          placeholder: string;
        };
        phone: {
          label: string;
          placeholder: string;
        };
        company: {
          label: string;
          placeholder: string;
        };
        service: {
          label: string;
          placeholder: string;
          options: {
            welding: string;
            valve: string;
            products: string;
            consultation: string;
          };
        };
        message: {
          label: string;
          placeholder: string;
        };
      };
      submit: {
        sending: string;
        send: string;
      };
      whatsapp: string;
      note: string;
    };
    cta: {
      title: string;
      description: string;
      learnMore: string;
      contactUs: string;
    };
  };
}

interface ContactProps {
  dictionary: Dictionary;
}

const Contact = ({ dictionary }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      title: dictionary.contact.address.mainOffice.title,
      address: dictionary.contact.address.mainOffice.address,
      hours: dictionary.contact.address.mainOffice.hours,
      icon: "lucide:map-pin",
    },
    {
      title: dictionary.contact.address.workshop.title,
      address: dictionary.contact.address.workshop.address,
      hours: "",
      icon: "lucide:factory",
    },
  ];

  const phoneNumbers = [
    {
      label: dictionary.contact.phone.marketing.label,
      number: dictionary.contact.phone.marketing.number,
    },
    {
      label: dictionary.contact.phone.direct.label,
      number: dictionary.contact.phone.direct.number,
    },
    {
      label: dictionary.contact.phone.purchasing.label,
      number: dictionary.contact.phone.purchasing.number,
    },
    {
      label: dictionary.contact.phone.financial.label,
      number: dictionary.contact.phone.financial.number,
    },
    {
      label: dictionary.contact.phone.fax.label,
      number: dictionary.contact.phone.fax.number,
    },
  ];

  const emailAddresses = [
    {
      address: dictionary.contact.email.general.address,
      label: dictionary.contact.email.general.label,
    },
    {
      address: dictionary.contact.email.product.address,
      label: dictionary.contact.email.product.label,
    },
    {
      address: dictionary.contact.email.technical.address,
      label: dictionary.contact.email.technical.label,
    },
  ];

  const services = [
    dictionary.contact.form.fields.service.options.welding,
    dictionary.contact.form.fields.service.options.valve,
    dictionary.contact.form.fields.service.options.products,
    dictionary.contact.form.fields.service.options.consultation,
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-4">
            <IconifyIcon
              icon="lucide:message-circle"
              className="w-4 h-4 mr-2"
            />
            {dictionary.contact.title}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {dictionary.contact.subtitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {dictionary.contact.description}
          </p>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {dictionary.contact.map.title}
            </h3>
            <p className="text-gray-600 text-center mb-6">
              {dictionary.contact.map.description}
            </p>
            <MapEmbed height="500px" mapData={dictionary.contact.map} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {dictionary.contact.address.title}
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <IconifyIcon
                          icon={info.icon}
                          className="w-6 h-6 text-white"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {info.title}
                        </h4>
                        <p className="text-gray-600 mb-1">{info.address}</p>
                        {info.hours && (
                          <p className="text-sm text-gray-500">{info.hours}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone Numbers */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {dictionary.contact.phone.title}
              </h3>
              <div className="space-y-3">
                {phoneNumbers.map((phone, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-50 rounded-lg p-4"
                  >
                    <IconifyIcon
                      icon="lucide:phone"
                      className="w-5 h-5 text-primary mr-3"
                    />
                    <div>
                      <span className="font-medium text-gray-900">
                        {phone.label}:
                      </span>
                      <a
                        href={`tel:${phone.number.replace(/[^\d+]/g, "")}`}
                        className="text-primary hover:text-primaryDark ml-2 transition-colors"
                      >
                        {phone.number}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {dictionary.contact.email.title}
              </h3>
              <div className="space-y-3">
                {emailAddresses.map((email, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-50 rounded-lg p-4"
                  >
                    <IconifyIcon
                      icon="lucide:mail"
                      className="w-5 h-5 text-primary mr-3"
                    />
                    <div>
                      <span className="font-medium text-gray-900">
                        {email.label}:
                      </span>
                      <a
                        href={`mailto:${email.address}`}
                        className="text-primary hover:text-primaryDark ml-2 transition-colors"
                      >
                        {email.address}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact-form" tabIndex={-1} className="scroll-mt-24">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {dictionary.contact.form.title}
              </h3>

              {submitStatus === "success" && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  {dictionary.contact.form.successMessage}
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  {dictionary.contact.form.errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {dictionary.contact.form.fields.name.label}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder={
                      dictionary.contact.form.fields.name.placeholder
                    }
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {dictionary.contact.form.fields.email.label}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder={
                      dictionary.contact.form.fields.email.placeholder
                    }
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {dictionary.contact.form.fields.phone.label}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder={
                      dictionary.contact.form.fields.phone.placeholder
                    }
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {dictionary.contact.form.fields.company.label}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder={
                      dictionary.contact.form.fields.company.placeholder
                    }
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {dictionary.contact.form.fields.service.label}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">
                      {dictionary.contact.form.fields.service.placeholder}
                    </option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {dictionary.contact.form.fields.message.label}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder={
                      dictionary.contact.form.fields.message.placeholder
                    }
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primaryDark transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <IconifyIcon
                          icon="lucide:loader-2"
                          className="w-5 h-5 mr-2 animate-spin"
                        />
                        {dictionary.contact.form.submit.sending}
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <IconifyIcon
                          icon="lucide:send"
                          className="w-5 h-5 mr-2"
                        />
                        {dictionary.contact.form.submit.send}
                      </span>
                    )}
                  </button>

                  <a
                    href="https://wa.me/622192112111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-8 py-4 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold rounded-lg transition-all duration-300 text-center flex items-center justify-center"
                  >
                    <IconifyIcon
                      icon="lucide:message-circle"
                      className="w-5 h-5 mr-2"
                    />
                    {dictionary.contact.form.whatsapp}
                  </a>
                </div>
              </form>

              <p className="text-sm text-gray-500 mt-4 text-center">
                {dictionary.contact.form.note}
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary to-psp-gold rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">
              {dictionary.contact.cta.title}
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              {dictionary.contact.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <IconifyIcon
                  icon="lucide:arrow-right"
                  className="w-5 h-5 mr-2"
                />
                {dictionary.contact.cta.learnMore}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-lg transition-all duration-300"
              >
                <IconifyIcon
                  icon="lucide:message-circle"
                  className="w-5 h-5 mr-2"
                />
                {dictionary.contact.cta.contactUs}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
