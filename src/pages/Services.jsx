import React from 'react';

const services = [
  {
    id: 1,
    title: 'Water Treatment',
    description:
      'We provide advanced water treatment solutions to ensure your fish thrive in optimal water quality.',
    price: '₦10,000',
    image: require('../assets/download (3).jpg'),
  },
  {
    id: 2,
    title: 'Disease Management',
    description:
      'Our disease management service helps you prevent and treat common catfish diseases, ensuring a healthy fish population.',
    price: '₦15,000',
    image: require('../assets/disease.jpg'),
  },
  {
    id: 3,
    title: 'Feed Production',
    description:
      'We offer premium catfish feed production to boost growth rates and improve feed efficiency.',
    price: '₦20,000',
    image: require('../assets/download (5).jpg'),
  },
  {
    id: 4,
    title: 'Farm Management',
    description:
      'Our farm management services help you streamline operations and optimize productivity for better profits.',
    price: '₦100,000',
    image: require('../assets/download (3).jpg'),
  },
  {
    id: 5,
    title: 'Farm Construction',
    description:
      'We assist in designing and constructing efficient fish farms, including ponds and tank systems.',
    price: '₦150,000',
    image: require('../assets/constructfarm.jpg'),
  },
  {
    id: 5,
    title: 'Trainings',
    description:
      '1 month practical training with us on catfish hatching, stocking and bsf farming',
    price: '₦50,000',
    image: require('../assets/constructfarm.jpg'),
  },
  {
    id: 5,
    title: 'Online Trainings',
    description:
      'online practical training with us on catfish hatching, stocking and bsf farming',
    price: '₦10,000',
    image: require('../assets/constructfarm.jpg'),
  },
];

const Services = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Services</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-xl font-semibold text-green-600">{service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
