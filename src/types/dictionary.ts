export interface Dictionary {
  navigation: {
    home: string;
    about: string;
    services: string;
    products: string;
    certificates: string;
    clients: string;
    contact: string;
  };
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
  };
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
  products: {
    title: string;
    subtitle: string;
    description: string;
    starlet: {
      name: string;
      type: string;
      description: string;
      features: string[];
    };
    geka: {
      name: string;
      type: string;
      description: string;
      features: string[];
    };
    weldingAlloys: {
      name: string;
      type: string;
      description: string;
      features: string[];
    };
    features: string;
    inquireNow: string;
    howToPurchase: {
      title: string;
      description: string;
      getRecommendation: string;
      callDirectly: string;
    };
    gallery: {
      title: string;
      description: string;
      moreProducts: string;
    };
  };
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
  footer: {
    company: {
      name: string;
      tagline: string;
      description: string;
      address: string;
      phone: string;
      email: string;
    };
    services: {
      title: string;
      welding: string;
      valve: string;
      products: string;
      consultation: string;
    };
    quickLinks: {
      title: string;
      about: string;
      clients: string;
      contact: string;
      products: string;
    };
    cta: {
      title: string;
      description: string;
      contactUs: string;
      callNow: string;
    };
    copyright: {
      text: string;
      experience: string;
      specialty: string;
    };
  };
}
