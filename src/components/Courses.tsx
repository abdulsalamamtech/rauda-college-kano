
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Doctor of Medicine",
    duration: "4 Years",
    description: "Comprehensive medical education program leading to an M.D. degree."
  },
  {
    title: "Bachelor of Nursing",
    duration: "3 Years",
    description: "Professional nursing program with hands-on clinical experience."
  },
  {
    title: "Health Sciences",
    duration: "4 Years",
    description: "Interdisciplinary program covering various healthcare disciplines."
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-medical-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl font-bold text-medical-900 mb-4">
            Featured Programs
          </h2>
          <p className="text-medical-600 max-w-2xl mx-auto">
            Transform your passion for healthcare into a rewarding career with our comprehensive programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-medical-800">
                    {course.title}
                  </CardTitle>
                  <p className="text-sm text-medical-600">{course.duration}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-medical-700 mb-6">{course.description}</p>
                  <Button
                    variant="outline"
                    className="w-full border-medical-600 text-medical-600 hover:bg-medical-50"
                  >
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
