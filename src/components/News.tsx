
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const news = [
  {
    id: "1",
    title: "Breakthrough Research in Medical Technology",
    date: "March 15, 2024",
    category: "Research",
    description: "Our faculty leads groundbreaking research in medical imaging technology."
  },
  {
    id: "2",
    title: "New State-of-the-Art Simulation Lab",
    date: "March 10, 2024",
    category: "Facilities",
    description: "Advanced simulation laboratory opens for medical training."
  },
  {
    id: "3",
    title: "International Medical Conference 2024",
    date: "March 5, 2024",
    category: "Events",
    description: "Join us for the annual international medical conference."
  }
];

const News = () => {
  return (
    <section className="py-20 bg-medical-50/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl font-bold text-medical-900 mb-4">
            Latest News & Events
          </h2>
          <p className="text-medical-600 max-w-2xl mx-auto">
            Stay updated with the latest developments, research, and events at our institution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 text-medical-600 text-sm mb-2">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </div>
                  <CardTitle className="text-xl text-medical-800">
                    {item.title}
                  </CardTitle>
                  <span className="inline-block bg-medical-100 text-medical-700 px-2 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                </CardHeader>
                <CardContent>
                  <p className="text-medical-600 mb-6">{item.description}</p>
                  <Link to={`/news/${item.id}`}>
                    <Button
                      variant="outline"
                      className="text-medical-600 hover:bg-medical-50"
                    >
                      Read More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
