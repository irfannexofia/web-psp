"use client";
import IconifyIcon from "@/components/wrappers/IconifyIcon";

interface Dictionary {
  clients: {
    title: string;
    subtitle: string;
    description: string;
    clientList: {
      wilmar: {
        name: string;
        sector: string;
        project: string;
        description: string;
      };
      petrokimia: {
        name: string;
        sector: string;
        project: string;
        description: string;
      };
      pjb: {
        name: string;
        sector: string;
        project: string;
        description: string;
      };
    };
    project: string;
    impact: {
      title: string;
      description: string;
      stats: {
        projects: {
          number: string;
          label: string;
          description: string;
        };
        clients: {
          number: string;
          label: string;
          description: string;
        };
        experience: {
          number: string;
          label: string;
          description: string;
        };
        support: {
          number: string;
          label: string;
          description: string;
        };
      };
    };
    testimonials: {
      title: string;
      description: string;
      wilmar: {
        quote: string;
        author: string;
      };
      petrokimia: {
        quote: string;
        author: string;
      };
      pjb: {
        quote: string;
        author: string;
      };
    };
    cta: {
      title: string;
      description: string;
      contact: string;
      viewServices: string;
    };
  };
}

interface ClientsProps {
  dictionary: Dictionary;
}

const Clients = ({ dictionary }: ClientsProps) => {
  const clients = [
    {
      name: dictionary.clients.clientList.wilmar.name,
      sector: dictionary.clients.clientList.wilmar.sector,
      project: dictionary.clients.clientList.wilmar.project,
      description: dictionary.clients.clientList.wilmar.description,
      icon: "lucide:wheat",
    },
    {
      name: dictionary.clients.clientList.petrokimia.name,
      sector: dictionary.clients.clientList.petrokimia.sector,
      project: dictionary.clients.clientList.petrokimia.project,
      description: dictionary.clients.clientList.petrokimia.description,
      icon: "lucide:factory",
    },
    {
      name: dictionary.clients.clientList.pjb.name,
      sector: dictionary.clients.clientList.pjb.sector,
      project: dictionary.clients.clientList.pjb.project,
      description: dictionary.clients.clientList.pjb.description,
      icon: "lucide:zap",
    },
  ];

  const stats = [
    {
      number: dictionary.clients.impact.stats.projects.number,
      label: dictionary.clients.impact.stats.projects.label,
      description: dictionary.clients.impact.stats.projects.description,
    },
    {
      number: dictionary.clients.impact.stats.clients.number,
      label: dictionary.clients.impact.stats.clients.label,
      description: dictionary.clients.impact.stats.clients.description,
    },
    {
      number: dictionary.clients.impact.stats.experience.number,
      label: dictionary.clients.impact.stats.experience.label,
      description: dictionary.clients.impact.stats.experience.description,
    },
    {
      number: dictionary.clients.impact.stats.support.number,
      label: dictionary.clients.impact.stats.support.label,
      description: dictionary.clients.impact.stats.support.description,
    },
  ];

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-4">
            <IconifyIcon icon="lucide:users" className="w-4 h-4 mr-2" />
            {dictionary.clients.title}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {dictionary.clients.subtitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {dictionary.clients.description}
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Client Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-psp-orange rounded-xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <IconifyIcon
                  icon={client.icon}
                  className="w-8 h-8 text-white"
                />
              </div>

              {/* Client Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {client.name}
                </h3>
                <p className="text-primary font-medium mb-3">{client.sector}</p>

                {/* Project Highlight */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center justify-center">
                    <IconifyIcon
                      icon="lucide:briefcase"
                      className="w-4 h-4 mr-2 text-primary"
                    />
                    {dictionary.clients.project}:
                  </h4>
                  <p className="text-sm text-gray-700 font-medium">
                    {client.project}
                  </p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {client.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="w-full h-full bg-primary rounded-full transform translate-x-12 -translate-y-12"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary to-psp-gold rounded-2xl p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              {dictionary.clients.impact.title}
            </h3>
            <p className="text-xl text-white/90">
              {dictionary.clients.impact.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl mb-4 group-hover:bg-white/20 transition-all duration-300">
                  <IconifyIcon
                    icon="lucide:trending-up"
                    className="w-8 h-8 text-white"
                  />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-white/70 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {dictionary.clients.testimonials.title}
            </h3>
            <p className="text-gray-600">
              {dictionary.clients.testimonials.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex text-psp-gold">
                  {[...Array(5)].map((_, i) => (
                    <IconifyIcon
                      key={i}
                      icon="lucide:star"
                      className="w-5 h-5 fill-current"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                &ldquo;{dictionary.clients.testimonials.wilmar.quote}&rdquo;
              </p>
              <div className="font-semibold text-gray-900">
                - {dictionary.clients.testimonials.wilmar.author}
              </div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex text-psp-gold">
                  {[...Array(5)].map((_, i) => (
                    <IconifyIcon
                      key={i}
                      icon="lucide:star"
                      className="w-5 h-5 fill-current"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                &ldquo;{dictionary.clients.testimonials.petrokimia.quote}&rdquo;
              </p>
              <div className="font-semibold text-gray-900">
                - {dictionary.clients.testimonials.petrokimia.author}
              </div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex text-psp-gold">
                  {[...Array(5)].map((_, i) => (
                    <IconifyIcon
                      key={i}
                      icon="lucide:star"
                      className="w-5 h-5 fill-current"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                &ldquo;{dictionary.clients.testimonials.pjb.quote}&rdquo;
              </p>
              <div className="font-semibold text-gray-900">
                - {dictionary.clients.testimonials.pjb.author}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {dictionary.clients.cta.title}
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              {dictionary.clients.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primaryDark transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <IconifyIcon
                  icon="lucide:message-circle"
                  className="w-5 h-5 mr-2"
                />
                {dictionary.clients.cta.contact}
              </a>
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                <IconifyIcon
                  icon="lucide:arrow-right"
                  className="w-5 h-5 mr-2"
                />
                {dictionary.clients.cta.viewServices}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
