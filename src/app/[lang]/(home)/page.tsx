import { getDictionary } from "../dictionaries";
import About from "./components/About";
import Certificates from "./components/Certificates";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Services from "./components/Services";
import Topnavbar from "./components/Topnavbar";

interface PageProps {
  params: Promise<{ lang: string }>;
}

const page = async ({ params }: PageProps) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as "en" | "id");

  return (
    <>
      <div>
        <Topnavbar dictionary={dictionary} />
        <Hero dictionary={dictionary} />
        <About dictionary={dictionary} />
        <Certificates dictionary={dictionary} />
        <Services dictionary={dictionary} />
        <Products dictionary={dictionary} />
        <Clients dictionary={dictionary} />
        <Contact dictionary={dictionary} />
        <Footer dictionary={dictionary} />
      </div>
    </>
  );
};

export default page;
