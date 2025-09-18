"use client";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import { useState } from "react";

interface Dictionary {
  certificates: {
    title: string;
    subtitle: string;
    description: string;
    iso9001: {
      title: string;
      description: string;
    };
    iso45001: {
      title: string;
      description: string;
    };
    sbu: {
      title: string;
      description: string;
    };
    ss: {
      title: string;
      description: string;
    };
    viewCertificate: string;
    downloadCertificate: string;
    whyImportant: {
      title: string;
      description: string;
      quality: {
        title: string;
        description: string;
      };
      safety: {
        title: string;
        description: string;
      };
      competence: {
        title: string;
        description: string;
      };
    };
    modal: {
      viewPdf: string;
      downloadPdf: string;
      back: string;
      description: string;
    };
  };
}

interface CertificatesProps {
  dictionary: Dictionary;
}

const Certificates = ({ dictionary }: CertificatesProps) => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );

  const certificates = [
    {
      id: "iso9001",
      title: "ISO 9001:2015",
      subtitle: "Quality Management System",
      description: dictionary.certificates.iso9001.description,
      icon: "lucide:award",
      color: "from-blue-500 to-blue-600",
      file: "ISO 9001 PT PHILLIPPE SURYA PRATAMA.pdf",
      fileUrl: "/certificates/ISO 9001 PT PHILLIPPE SURYA PRATAMA.pdf",
    },
    {
      id: "iso45001",
      title: "ISO 45001:2018",
      subtitle: "Occupational Health & Safety",
      description: dictionary.certificates.iso45001.description,
      icon: "lucide:shield-check",
      color: "from-green-500 to-green-600",
      file: "ISO 45001 PT PHILLIPPE SURYA PRATAMA.pdf",
      fileUrl: "/certificates/ISO 45001 PT PHILLIPPE SURYA PRATAMA.pdf",
    },
    {
      id: "sbu",
      title: "SBUJK Certificate",
      subtitle: "Construction Business Entity Certificate",
      description: dictionary.certificates.sbu.description,
      icon: "lucide:building",
      color: "from-purple-500 to-purple-600",
      file: "IN001 - PHILLIPPE SURYA PRATAMA, PT SBUJK.pdf",
      fileUrl: "/certificates/IN001 - PHILLIPPE SURYA PRATAMA, PT SBUJK.pdf",
    },
    {
      id: "ss43291",
      title: "SS Certificate",
      subtitle: "Safety and Security Certification",
      description: dictionary.certificates.ss.description,
      icon: "lucide:wrench",
      color: "from-orange-500 to-orange-600",
      file: "SS 43291 - PHILLIPPE SURYA PRATAMA, PT.pdf",
      fileUrl: "/certificates/SS 43291 - PHILLIPPE SURYA PRATAMA, PT.pdf",
    },
  ];

  const openCertificate = (certificateId: string) => {
    setSelectedCertificate(certificateId);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-4">
            <IconifyIcon icon="lucide:award" className="w-4 h-4 mr-2" />
            {dictionary.certificates.title}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {dictionary.certificates.subtitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {dictionary.certificates.description}
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-start mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconifyIcon
                      icon={cert.icon}
                      className="w-8 h-8 text-white"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider">
                      {cert.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Action Button */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => openCertificate(cert.id)}
                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primaryDark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <IconifyIcon icon="lucide:eye" className="w-4 h-4 mr-2" />
                    {dictionary.certificates.viewCertificate}
                  </button>

                  <div className="flex items-center text-sm text-gray-500">
                    <IconifyIcon
                      icon="lucide:file-text"
                      className="w-4 h-4 mr-1"
                    />
                    PDF
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div
                  className={`w-full h-full bg-gradient-to-br ${cert.color} rounded-full transform translate-x-16 -translate-y-16`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-primary to-psp-gold rounded-2xl p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              {dictionary.certificates.whyImportant.title}
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {dictionary.certificates.whyImportant.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl mb-4">
                <IconifyIcon
                  icon="lucide:check-circle"
                  className="w-8 h-8 text-white"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">
                {dictionary.certificates.whyImportant.quality.title}
              </h4>
              <p className="text-white/90 text-sm">
                {dictionary.certificates.whyImportant.quality.description}
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl mb-4">
                <IconifyIcon
                  icon="lucide:shield-check"
                  className="w-8 h-8 text-white"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">
                {dictionary.certificates.whyImportant.safety.title}
              </h4>
              <p className="text-white/90 text-sm">
                {dictionary.certificates.whyImportant.safety.description}
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl mb-4">
                <IconifyIcon
                  icon="lucide:award"
                  className="w-8 h-8 text-white"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">
                {dictionary.certificates.whyImportant.competence.title}
              </h4>
              <p className="text-white/90 text-sm">
                {dictionary.certificates.whyImportant.competence.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900">
                {certificates.find((c) => c.id === selectedCertificate)?.title}
              </h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <IconifyIcon
                  icon="lucide:x"
                  className="w-6 h-6 text-gray-500"
                />
              </button>
            </div>

            <div className="p-6">
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <IconifyIcon
                  icon="lucide:file-text"
                  className="w-16 h-16 text-gray-400 mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {certificates.find((c) => c.id === selectedCertificate)?.file}
                </h4>
                <p className="text-gray-600 mb-6">
                  {dictionary.certificates.modal.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={
                      certificates.find((c) => c.id === selectedCertificate)
                        ?.fileUrl
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primaryDark transition-all duration-300"
                  >
                    <IconifyIcon
                      icon="lucide:external-link"
                      className="w-4 h-4 mr-2"
                    />
                    {dictionary.certificates.modal.viewPdf}
                  </a>
                  <a
                    href={
                      certificates.find((c) => c.id === selectedCertificate)
                        ?.fileUrl
                    }
                    download
                    className="inline-flex items-center px-6 py-3 bg-psp-gold text-white font-semibold rounded-lg hover:bg-psp-gold/80 transition-all duration-300"
                  >
                    <IconifyIcon
                      icon="lucide:download"
                      className="w-4 h-4 mr-2"
                    />
                    {dictionary.certificates.modal.downloadPdf}
                  </a>
                  <button
                    onClick={closeModal}
                    className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-all duration-300"
                  >
                    <IconifyIcon
                      icon="lucide:arrow-left"
                      className="w-4 h-4 mr-2"
                    />
                    {dictionary.certificates.modal.back}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
