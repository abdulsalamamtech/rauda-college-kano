import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const faculty = [
  {
    name: "Dr. Sarah Wilson",
    role: "Dean of Medicine",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
    specialty: "Cardiology"
  },
  {
    name: "Dr. James Chen",
    role: "Head of Research",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2078&auto=format&fit=crop",
    specialty: "Neuroscience"
  },
  {
    name: "Dr. Emily Roberts",
    role: "Clinical Director",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2078&auto=format&fit=crop",
    specialty: "Surgery"
  },
  {
    name: "Dr. Michael Kumar",
    role: "Professor",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
    specialty: "Pediatrics"
  }
];

const Faculty = () => {
  return (
    <section id="staff" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl font-bold text-medical-900 mb-4">
            Our Distinguished Faculty Staff
          </h2>
          <p className="text-medical-600 max-w-2xl mx-auto">
            Learn from leading healthcare professionals and renowned researchers in their respective fields.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-medical-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-medical-600 font-medium mb-1">{member.role}</p>
                  <p className="text-medical-500 text-sm">{member.specialty}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
