"use client";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import Image from "next/image";

interface Dictionary {
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
}

interface ProductsProps {
  dictionary: Dictionary;
}

const Products = ({ dictionary }: ProductsProps) => {
  const products = [
    { id: 1, name: "Starlet", type: "Welding electrodes & wires", description: "Stable arc, neat bead, easy slag removal. Suitable for general fabrication & routine repairs.", features: ["Stable arc", "Neat bead", "Easy slag removal", "Suitable for general fabrication", "Routine repairs"], image: "https://phillippesuryapratama.com/product-starlet.webp" },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-4">
            <IconifyIcon icon="lucide:package" className="w-4 h-4 mr-2" />
            {dictionary.products.title}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {dictionary.products.subtitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {dictionary.products.description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  index === 0
                    ? "from-psp-pink/10 to-psp-orange/10"
                    : index === 1
                      ? "from-psp-orange/10 to-psp-gold/10"
                      : "from-psp-gold/10 to-psp-pink/10"
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="relative p-8">
                {/* Product Image */}
                <div className="mb-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={200}
                    unoptimized
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                {/* Product Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {product.type}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <IconifyIcon
                      icon="lucide:star"
                      className="w-4 h-4 mr-2 text-primary"
                    />
                    {dictionary.products.features}:
                  </h4>
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <IconifyIcon
                        icon="lucide:check"
                        className="w-4 h-4 text-primary mr-2 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <a
                    href={product.id === 1 ? "#contact-form" : "#contact"}
                    className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white ${
                      index === 0
                        ? "bg-gradient-to-r from-primary to-psp-orange"
                        : index === 1
                          ? "bg-gradient-to-r from-psp-orange to-psp-gold"
                          : "bg-gradient-to-r from-psp-gold to-primary"
                    } hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    <IconifyIcon
                      icon="lucide:message-circle"
                      className="w-4 h-4 mr-2"
                    />
                    {dictionary.products.inquireNow}
                  </a>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <div
                  className={`w-full h-full ${
                    index === 0
                      ? "bg-primary"
                      : index === 1
                        ? "bg-psp-orange"
                        : "bg-psp-gold"
                  } rounded-full transform translate-x-16 -translate-y-16`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* How to Purchase */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6">
              <IconifyIcon
                icon="lucide:shopping-cart"
                className="w-8 h-8 text-white"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {dictionary.products.howToPurchase.title}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              {dictionary.products.howToPurchase.description}
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
                {dictionary.products.howToPurchase.getRecommendation}
              </a>
              <a
                href="tel:+62-21-22556661"
                className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                <IconifyIcon icon="lucide:phone" className="w-5 h-5 mr-2" />
                {dictionary.products.howToPurchase.callDirectly}
              </a>
            </div>
          </div>
        </div>

        {/* Product Gallery Preview */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            {dictionary.products.gallery.title}
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {dictionary.products.gallery.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <div key={index} className="relative group cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={150}
                  unoptimized
                  className="w-full h-32 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                    <IconifyIcon
                      icon="lucide:eye"
                      className="w-6 h-6 mx-auto mb-2"
                    />
                    <span className="text-sm font-medium">{product.name}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional placeholder for more products */}
            <div className="relative group cursor-pointer bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-32 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <IconifyIcon
                  icon="lucide:plus"
                  className="w-8 h-8 mx-auto mb-2"
                />
                <span className="text-sm">
                  {dictionary.products.gallery.moreProducts}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
