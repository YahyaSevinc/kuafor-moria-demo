"use client";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import BlogPreview from "../components/BlogPreview";

export default function Home() {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero 
        imageSrc="/1.png" 
        imageAlt="Kuaförlük teknoloji görseli"
      />

      {/* About Us Section */}
      <AboutUs 
        imageSrc="/2.png" 
        imageAlt="Kuaför salonu görseli"
      />

      {/* Services Section */}
      <Services 
        imageSrc="/1.png" 
        imageAlt="Saç bakım hizmetleri"
      />

      {/* Testimonials Section */}
      <Testimonials />
      <BlogPreview />
    </div>
  );
}
