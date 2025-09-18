"use client";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import Image from "next/image";

interface Dictionary {
  services: {
    title: string;
    subtitle: string;
    description: string;
    welding: {
      title: string;
      subtitle: string;
      description: string;
      methods: string;
      materials: string;
      applications: string;
      industries: string;
      methodsList: string[];
      materialsList: string[];
      applicationsList: string[];
      industriesList: string[];
    };
    valve: {
      title: string;
      subtitle: string;
      description: string;
      process: string;
      types: string;
      standards: string;
      industries: string;
      processList: string[];
      typesList: string[];
      standardsList: string[];
      industriesList: string[];
    };
    cta: {
      title: string;
      description: string;
      contact: string;
      viewProducts: string;
    };
  };
}

interface ServicesProps {
  dictionary: Dictionary;
}

const Services = ({ dictionary }: ServicesProps) => {
  const weldingMethods = dictionary.services.welding.methodsList;
  const weldingMaterials = dictionary.services.welding.materialsList;
  const weldingApplications = dictionary.services.welding.applicationsList;
  const weldingIndustries = dictionary.services.welding.industriesList;
  const valveTypes = dictionary.services.valve.typesList;
  const valveStandards = dictionary.services.valve.standardsList;
  const valveIndustries = dictionary.services.valve.industriesList;
  const serviceProcess = dictionary.services.valve.processList;

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-4">
            <IconifyIcon icon="lucide:cog" className="w-4 h-4 mr-2" />
            {dictionary.services.title}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {dictionary.services.subtitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {dictionary.services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Welding Service */}
          <div className="bg-gray-900 border-2 border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 group">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-primary rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                <IconifyIcon
                  icon="lucide:wrench"
                  className="w-10 h-10 text-white"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {dictionary.services.welding.title}
                </h3>
                <p className="text-sm text-primary">
                  {dictionary.services.welding.subtitle}
                </p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {dictionary.services.welding.description}
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-2 flex items-center">
                  <IconifyIcon
                    icon="lucide:cog"
                    className="w-4 h-4 mr-2 text-primary"
                  />
                  {dictionary.services.welding.methods}:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {weldingMethods.map((method, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2 flex items-center">
                  <IconifyIcon
                    icon="lucide:layers"
                    className="w-4 h-4 mr-2 text-primary"
                  />
                  {dictionary.services.welding.materials}:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {weldingMaterials.map((material, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2 flex items-center">
                  <IconifyIcon
                    icon="lucide:target"
                    className="w-4 h-4 mr-2 text-primary"
                  />
                  {dictionary.services.welding.applications}:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {weldingApplications.map((app, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-psp-gold/20 text-psp-gold rounded-full text-sm"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2 flex items-center">
                  <IconifyIcon
                    icon="lucide:building"
                    className="w-4 h-4 mr-2 text-primary"
                  />
                  {dictionary.services.welding.industries}:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {weldingIndustries.map((industry, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Image
                src="/welding-service.webp"
                alt="Welding Service"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Valve Repair Service */}
          <div className="bg-gray-900 border-2 border-psp-gold/20 rounded-2xl p-8 hover:border-psp-gold/40 transition-all duration-500 group">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-psp-gold rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                <IconifyIcon
                  icon="lucide:settings-2"
                  className="w-10 h-10 text-white"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {dictionary.services.valve.title}
                </h3>
                <p className="text-sm text-psp-gold">
                  {dictionary.services.valve.subtitle}
                </p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {dictionary.services.valve.description}
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-2 flex items-center">
                  <IconifyIcon
                    icon="lucide:list"
                    className="w-4 h-4 mr-2 text-psp-gold"
                  />
                  {dictionary.services.valve.process}:
                </h4>
                <div className="space-y-2">
                  {serviceProcess.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <IconifyIcon
                        icon="lucide:check"
                        className="w-4 h-4 text-psp-gold mr-2 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2 flex items-center">
                  <IconifyIcon
                    icon="lucide:layers"
                    className="w-4 h-4 mr-2 text-psp-gold"
                  />
                  {dictionary.services.valve.types}:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {valveTypes.map((type, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-psp-gold/20 text-psp-gold rounded-full text-sm"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2 flex items-center">
                  <IconifyIcon
                    icon="lucide:award"
                    className="w-4 h-4 mr-2 text-psp-gold"
                  />
                  {dictionary.services.valve.standards}:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {valveStandards.map((standard, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >
                      {standard}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2 flex items-center">
                  <IconifyIcon
                    icon="lucide:building"
                    className="w-4 h-4 mr-2 text-psp-gold"
                  />
                  {dictionary.services.valve.industries}:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {valveIndustries.map((industry, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Image
                src="/valve-repair-service.webp"
                alt="Valve Repair Service"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-psp-gold rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {dictionary.services.cta.title}
            </h3>
            <p className="text-lg mb-6 opacity-90">
              {dictionary.services.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <IconifyIcon
                  icon="lucide:message-circle"
                  className="w-5 h-5 mr-2"
                />
                {dictionary.services.cta.contact}
              </a>
              <a
                href="#products"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-lg transition-all duration-300"
              >
                <IconifyIcon icon="lucide:package" className="w-5 h-5 mr-2" />
                {dictionary.services.cta.viewProducts}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
