import Image from "next/image";
import Photo from "@/assites/photo.png";
import Sdm from "@/assites/sdm.png";
import Vido from "@/assites/vido.png";
import Google from "@/assites/google.png";
import Oracle from "@/assites/oracle.png";
import Monday from "@/assites/monday.png";
import Moepheus from "@/assites/moepheus.png";
import Segment from "@/assites/segment.png";
import Samsung from "@/assites/Samsung.png";
import ServicesMenu from "@/component/servicesMenu";
import ServicesSection from "@/component/ServicesSection";
import Choose from "@/component/choose";
import About from "@/component/about";
import Vidow from "@/component/vidow";
import Logopage from "@/component/logopage";
import BlogPage from "@/component/blog";
import TestimonialCarousel from "@/component/terminal";
import FAQSection from "@/component/faq";
import Dawlad from "@/component/dawlad";
import Some from "@/component/some";
import Footer from "@/component/footer";
import Form from "@/component/form";
export default function Home() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start">
        {/* Left Content */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-6">
          <Image src={Google} alt="google" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            Your trusted partner for compliance business needs
          </h1>
          <p className="text-gray-700 text-base md:text-lg">
            An online business compliance platform that helps entrepreneurs and
            other individuals with various{" "}
            <span className="font-semibold">registrations</span>,{" "}
            <span className="font-semibold">tax filings</span>, and other{" "}
            <span className="font-semibold">legal matters</span>.
          </p>
          <Image
            src={Sdm}
            alt="Business Compliance Illustration"
            className="w-4/5 lg:w-full"
          />

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700">
              Talk An Expert
            </button>

            <button className="bg-gray-100 text-blue-600 px-6 py-3 rounded shadow hover:bg-gray-200 flex ">
              <Image src={Vido} alt="vido " className="p-1" /> See how it works
            </button>
          </div>
        </div>

        {/* Right Content (Illustration) */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src={Photo}
            alt="Business Compliance Illustration"
            className="w-4/5 lg:w-full"
          />
          <ServicesMenu></ServicesMenu>
        </div>
      </div>
      <div className="h-40 w-full bg-white ">
        <div className="p-2">
          <h2 className="text-black text-center font-bold ">Trsted By Over 100+ Startups and freelance business</h2>
        </div>
        <div className="flex items-center justify-around p-10">
          <Image src={Oracle} alt="Orocal" />

          <Image src={Moepheus} alt="Moepheus" />
          <Image src={Moepheus} alt="Moepheus" />
          <Image src={Samsung} alt="Samsung" />
          <Image src={Monday} alt="Monday" />
          <Image src={Segment} alt="Segment" />
        </div>
      </div>
      <ServicesSection></ServicesSection>
      <About></About>
      <Choose></Choose>
      <Vidow></Vidow>
      <Logopage></Logopage>
      <BlogPage></BlogPage>
      <TestimonialCarousel></TestimonialCarousel>
      <FAQSection></FAQSection>
      <Dawlad></Dawlad>
      
      <Some></Some>
      <Form></Form>
      <Footer></Footer>
    </section>
  );
}
