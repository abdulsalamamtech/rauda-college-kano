
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Stethoscope, Brain, Microscope, Hospital, Users, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: "Clinical Excellence",
    description: "State-of-the-art clinical training facilities and experienced faculty."
  },
  {
    icon: Brain,
    title: "Research Innovation",
    description: "Cutting-edge research opportunities and advanced laboratories."
  },
  {
    icon: Microscope,
    title: "Advanced Labs",
    description: "Modern laboratory facilities for hands-on learning experience."
  },
  {
    icon: Hospital,
    title: "Hospital Placements",
    description: "Partnerships with leading hospitals for practical training."
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from experienced healthcare professionals and researchers."
  },
  {
    icon: GraduationCap,
    title: "Career Support",
    description: "Comprehensive career guidance and placement assistance."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-medical-900 mb-4">
            Our Services
          </h2>
          <p className="text-medical-600 max-w-2xl mx-auto">
            Comprehensive healthcare education and training services designed to shape the future of medical professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-none bg-medical-50/50">
                <div className="mb-4">
                  <service.icon className="h-10 w-10 text-medical-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-medical-900">
                  {service.title}
                </h3>
                <p className="text-medical-600">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
