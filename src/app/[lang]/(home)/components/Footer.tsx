import IconifyIcon from "@/components/wrappers/IconifyIcon";
import Image from "next/image";

interface Dictionary {
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

interface FooterProps {
  dictionary: Dictionary;
}

const Footer = ({ dictionary }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900">
      {/* Industrial Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fd8706%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative pt-20 pb-10">
        <div className="container relative">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <a href="#home" className="flex items-center space-x-3">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image
                      src="/assets/images/logo-navbar.svg"
                      alt="PT. PHILLIPPE SURYA PRATAMA Logo"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                      {dictionary.footer.company.name}
                    </div>
                    <div className="text-sm text-white/80">
                      {dictionary.footer.company.tagline}
                    </div>
                  </div>
                </a>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed">
                {dictionary.footer.company.description}
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <IconifyIcon
                    icon="lucide:map-pin"
                    className="w-5 h-5 text-white mr-3"
                  />
                  <span className="text-white/90 text-sm">
                    {dictionary.footer.company.address}
                  </span>
                </div>
                <div className="flex items-center">
                  <IconifyIcon
                    icon="lucide:phone"
                    className="w-5 h-5 text-white mr-3"
                  />
                  <span className="text-white/90 text-sm">
                    {dictionary.footer.company.phone}
                  </span>
                </div>
                <div className="flex items-center">
                  <IconifyIcon
                    icon="lucide:mail"
                    className="w-5 h-5 text-white mr-3"
                  />
                  <span className="text-white/90 text-sm">
                    {dictionary.footer.company.email}
                  </span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6">
                {dictionary.footer.services.title}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#services"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {dictionary.footer.services.welding}
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {dictionary.footer.services.valve}
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {dictionary.footer.services.products}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {dictionary.footer.services.consultation}
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6">
                {dictionary.footer.quickLinks.title}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#about"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {dictionary.footer.quickLinks.about}
                  </a>
                </li>
                <li>
                  <a
                    href="#clients"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {dictionary.footer.quickLinks.clients}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {dictionary.footer.quickLinks.contact}
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {dictionary.footer.quickLinks.products}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                {dictionary.footer.cta.title}
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                {dictionary.footer.cta.description}
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
                  {dictionary.footer.cta.contactUs}
                </a>
                <a
                  href="tel:+62-21-22556661"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-lg transition-all duration-300"
                >
                  <IconifyIcon icon="lucide:phone" className="w-5 h-5 mr-2" />
                  {dictionary.footer.cta.callNow}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/20">
        <div className="container">
          <div className="py-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm mb-4 md:mb-0">
              © {currentYear} {dictionary.footer.copyright.text}
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-white/80 text-sm">
                {dictionary.footer.copyright.experience}
              </span>
              <span className="text-white/60">•</span>
              <span className="text-white/80 text-sm">
                {dictionary.footer.copyright.specialty}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
