
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const galleryItems = [
  {
    id: 1,
    title: "Modern Medical Research",
    description: "State-of-the-art research facilities and equipment",
    image: "/images/sessions/group-photo-shot.jpg",
  },
  {
    id: 2,
    title: "Campus Environment",
    description: "Beautiful and serene campus surroundings",
    image: "images/sessions/student-recitation.jpg",
  },
  {
    id: 3,
    title: "Student Life",
    description: "Engaging and collaborative learning environment",
    image: "/images/sessions/student-group-shot-01.jpg",
  },
  {
    id: 4,
    title: "Student Life",
    description: "Engaging and collaborative learning environment",
    image: "/images/sessions/student-group-shot.jpg",
  },
  {
    id: 5,
    title: "Student Life",
    description: "Engaging and collaborative learning environment",
    image: "/images/sessions/student-graduation-gawn.jpg",
  },
  {
    id: 6,
    title: "Student Life",
    description: "Engaging and collaborative learning environment",
    image: "/images/sessions/officer-photo-shot.jpg",
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-medical-50/30">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-medical-900 text-center mb-8">
            Our Gallery
          </h1>
          <p className="text-medical-600 text-center mb-12 max-w-2xl mx-auto">
            Explore our campus, facilities, and student life through our collection of images.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: item.id * 0.2 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-white font-semibold text-xl mb-2">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
