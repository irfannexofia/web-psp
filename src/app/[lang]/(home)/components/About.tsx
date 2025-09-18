"use client";
import IconifyIcon from "@/components/wrappers/IconifyIcon";

interface Dictionary {
  about: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    vision: {
      title: string;
      description: string;
    };
    mission: {
      title: string;
      items: string;
    };
    values: {
      title: string;
      expertise: {
        title: string;
        description: string;
      };
      quality: {
        title: string;
        description: string;
      };
      reliability: {
        title: string;
        description: string;
      };
    };
    stats: {
      projects: string;
      satisfaction: string;
      support: string;
      experience: string;
    };
    impact: {
      title: string;
      description: string;
    };
    philosophy: {
      title: string;
      description: string;
    };
    exploreServices: string;
    startJourney: string;
    locations: {
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
  };
}

interface AboutProps {
  dictionary: Dictionary;
}

const About = ({ dictionary }: AboutProps) => {
  const stats = [
    {
      number: "13+",
      label: dictionary.about.stats.experience,
      icon: "lucide:award",
    },
    {
      number: "100+",
      label: dictionary.about.stats.projects,
      icon: "lucide:check-circle",
    },
    {
      number: "24/7",
      label: dictionary.about.stats.support,
      icon: "lucide:clock",
    },
    {
      number: "100%",
      label: dictionary.about.stats.satisfaction,
      icon: "lucide:heart",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-4">
            <IconifyIcon icon="lucide:building-2" className="w-4 h-4 mr-2" />
            {dictionary.about.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {dictionary.about.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {dictionary.about.subtitle}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white border-2 border-primary/20 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mr-4">
                <IconifyIcon
                  icon="lucide:target"
                  className="w-8 h-8 text-white"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {dictionary.about.mission.title}
              </h3>
            </div>
            <div className="text-gray-700 leading-relaxed">
              {dictionary.about.mission.items.split("\n").map((item, index) => (
                <div key={index} className="flex items-start mb-3">
                  <IconifyIcon
                    icon="lucide:check"
                    className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border-2 border-psp-gold/20 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-psp-gold rounded-xl flex items-center justify-center mr-4">
                <IconifyIcon icon="lucide:eye" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {dictionary.about.vision.title}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {dictionary.about.vision.description}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-20">
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              {dictionary.about.description}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-primary to-psp-gold rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              {dictionary.about.impact.title}
            </h3>
            <p className="text-xl text-white/90">
              {dictionary.about.impact.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl mb-4 group-hover:bg-white/20 transition-all duration-300">
                  <IconifyIcon
                    icon={stat.icon}
                    className="w-8 h-8 text-white"
                  />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Locations */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-psp-pink/20 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <IconifyIcon
                  icon="lucide:map-pin"
                  className="w-6 h-6 text-primary mr-3"
                />
                <h4 className="text-xl font-semibold text-gray-900">
                  {dictionary.about.locations.mainOffice.title}
                </h4>
              </div>
              <p className="text-gray-600">
                {dictionary.about.locations.mainOffice.address}
                <br />
                <span className="text-sm text-gray-500">
                  {dictionary.about.locations.mainOffice.hours}
                </span>
              </p>
            </div>

            <div className="bg-white border-2 border-psp-orange/20 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <IconifyIcon
                  icon="lucide:factory"
                  className="w-6 h-6 text-psp-orange mr-3"
                />
                <h4 className="text-xl font-semibold text-gray-900">
                  {dictionary.about.locations.workshop.title}
                </h4>
              </div>
              <p className="text-gray-600">
                {dictionary.about.locations.workshop.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
