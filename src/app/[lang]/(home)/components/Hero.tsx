"use client";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import Image from "next/image";

interface Dictionary {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    description: string;
    services: string;
    products: string;
    exploreServices: string;
    getStarted: string;
  };
  about: {
    stats: {
      projects: string;
      satisfaction: string;
      support: string;
      experience: string;
    };
  };
}

interface HeroProps {
  dictionary: Dictionary;
}

const Hero = ({ dictionary }: HeroProps) => {
  return (
    <section
      className="relative pt-32 pb-32 overflow-x-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      id="home"
    >
      {/* Industrial Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fd8706%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Industrial Grid Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%25,rgba(253,135,6,0.1)_25%25,rgba(253,135,6,0.1)_26%25,transparent_27%25,transparent_74%25,rgba(253,135,6,0.1)_75%25,rgba(253,135,6,0.1)_76%25,transparent_77%25),linear-gradient(transparent_24%25,rgba(253,135,6,0.1)_25%25,rgba(253,135,6,0.1)_26%25,transparent_27%25,transparent_74%25,rgba(253,135,6,0.1)_75%25,rgba(253,135,6,0.1)_76%25,transparent_77%25)] bg-[length:50px_50px]"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-6 py-3 rounded-lg bg-primary/20 border border-primary/30 text-primary text-sm font-bold mb-6 backdrop-blur-sm">
              <IconifyIcon
                icon="lucide:shield-check"
                className="w-5 h-5 mr-2"
              />
              {dictionary.hero.badge}
            </div>

            {/* Certificate Badges */}
            <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white text-xs font-medium">
                <IconifyIcon icon="lucide:award" className="w-4 h-4 mr-2" />
                ISO 9001:2015
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white text-xs font-medium">
                <IconifyIcon
                  icon="lucide:shield-check"
                  className="w-4 h-4 mr-2"
                />
                ISO 45001:2018
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white text-xs font-medium">
                <IconifyIcon icon="lucide:building" className="w-4 h-4 mr-2" />
                SBU JK Certified
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl text-white tracking-tight font-bold mb-6 leading-tight">
              {dictionary.hero.title}
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {dictionary.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#services"
                className="px-8 py-4 bg-white text-psp-orange font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <IconifyIcon
                  icon="lucide:arrow-right"
                  className="w-5 h-5 mr-2 inline"
                />
                {dictionary.hero.cta1}
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-psp-orange font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                <IconifyIcon
                  icon="lucide:message-circle"
                  className="w-5 h-5 mr-2 inline"
                />
                {dictionary.hero.cta2}
              </a>
            </div>
          </div>

          {/* Visual Content - Industrial Style */}
          <div className="relative">
            {/* Main Service Showcase */}
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
              {/* Welding Service Card */}
              <div className="relative mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <IconifyIcon
                      icon="lucide:wrench"
                      className="w-6 h-6 text-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {dictionary.hero.services}
                    </h3>
                    <p className="text-primary text-sm">
                      Expert Industrial Welding
                    </p>
                  </div>
                </div>
                <div className="relative h-40 rounded-lg overflow-hidden border border-gray-600">
                  <Image
                    src="/welding-service.webp"
                    alt="Industrial Welding Service"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>

              {/* Valve Repair Service Card */}
              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-psp-gold rounded-lg flex items-center justify-center mr-4">
                    <IconifyIcon
                      icon="lucide:settings-2"
                      className="w-6 h-6 text-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Valve Repair
                    </h3>
                    <p className="text-psp-gold text-sm">
                      Comprehensive Repair Service
                    </p>
                  </div>
                </div>
                <div className="relative h-40 rounded-lg overflow-hidden border border-gray-600">
                  <Image
                    src="/valve-repair-service.webp"
                    alt="Valve Repair Service"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Industrial Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">13+</div>
                <div className="text-xs text-gray-300 uppercase tracking-wider">
                  {dictionary.about.stats.experience}
                </div>
              </div>
              <div className="bg-psp-gold/10 border border-psp-gold/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-psp-gold mb-1">
                  100+
                </div>
                <div className="text-xs text-gray-300 uppercase tracking-wider">
                  {dictionary.about.stats.projects}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
