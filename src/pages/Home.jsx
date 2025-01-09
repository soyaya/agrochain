import React from "react";
import HeroSection from "./Home/HeroSection";
import SectionTitle from "./Home/SectionTitle";
import Card from "./Home/Card";
import { services, consultations, trainings, testimonials, cooperatives } from "./Home/data";

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section className="py-12">
        <SectionTitle title="Services" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-6">
          {services.map((service, index) => (
            <Card key={index} image={service.image} title={service.title} description={service.description} />
          ))}
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-12 bg-white">
        <SectionTitle title="Consultation" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-6">
          {consultations.map((consultation, index) => (
            <Card key={index} image={consultation.image} title={consultation.title} description={consultation.description} />
          ))}
        </div>
      </section>

      {/* Training Section */}
      <section className="py-12">
        <SectionTitle title="Training" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-6">
          {trainings.map((training, index) => (
            <Card key={index} icon={training.icon} title={training.title} description={training.description} link={training.link}/>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 bg-white">
        <SectionTitle title="Testimonials" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} image={testimonial.image} title={testimonial.name} description={testimonial.feedback} />
          ))}
        </div>
      </section>

      {/* Our Cooperative Section */}
      <section className="py-12">
        <SectionTitle title="Our Cooperative" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-6">
          {cooperatives.map((coop, index) => (
            <Card key={index} image={coop.image} title={coop.title} description={coop.description} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
