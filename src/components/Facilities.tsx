import { motion } from "framer-motion";
import { Microscope, Hospital, GraduationCap, Book } from "lucide-react";

const facilities = [
  {
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    title: "Advanced Laboratories",
    description: "State-of-the-art research and training facilities.",
    icon: Microscope
  },
  {
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop",
    title: "Teaching Hospital",
    description: "Modern teaching hospital for practical experience.",
    icon: Hospital
  },
  {
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop",
    title: "Smart Classrooms",
    description: "Technology-enabled learning environments.",
    icon: GraduationCap
  },
  {
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop",
    title: "Digital Library",
    description: "Extensive collection of medical resources.",
    icon: Book
  }
];

const Facilities = () => {
  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl font-bold text-medical-900 mb-4">
            World-Class Facilities
          </h2>
          <p className="text-medical-600 max-w-2xl mx-auto">
            Experience learning in our modern, well-equipped facilities designed for medical education excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end p-6">
                <div className="text-white">
                  <facility.icon className="h-8 w-8 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                  <p className="text-medical-100">{facility.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
