
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The quality of education and practical training here is exceptional. The faculty's dedication to student success is remarkable.",
    author: "Dr. Emily Admam",
    role: "Former Student, Now Chief Resident"
  },
  {
    quote: "State-of-the-art facilities and a supportive learning environment helped me achieve my dream of becoming a medical professional.",
    author: "Dr. Aisha Ibrahim",
    role: "Alumni, Cardiology Specialist"
  },
  {
    quote: "The hands-on experience and research opportunities provided here are unmatched. It prepared me well for my medical career.",
    author: "Dr. Sarah Imran",
    role: "Research Fellow"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonial" className="py-20 bg-gradient-to-b from-white to-medical-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl font-bold text-medical-900 mb-4">
            Student Success Stories
          </h2>
          <p className="text-medical-600 max-w-2xl mx-auto">
            Hear from our alumni about their experiences and achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full hover:shadow-lg transition-shadow duration-300">
                <Quote className="h-8 w-8 text-medical-500 mb-4" />
                <p className="text-medical-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-medical-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-medical-600">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
