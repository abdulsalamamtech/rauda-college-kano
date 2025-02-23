
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

// This would typically come from an API, but for now we'll use static data
const newsData = [
  {
    id: "1",
    title: "Breakthrough Research in Medical Technology",
    date: "March 15, 2024",
    category: "Research",
    description: "Our faculty leads groundbreaking research in medical imaging technology.",
    fullContent: `Our research team has achieved a significant breakthrough in medical imaging technology. 
    The new technology allows for more precise diagnosis and treatment planning, potentially revolutionizing 
    how we approach various medical conditions. This advancement represents years of dedicated research and 
    collaboration between our faculty members and international partners.

    The implications of this breakthrough are far-reaching, potentially improving patient outcomes across 
    multiple medical specialties. Clinical trials are scheduled to begin next quarter, with promising 
    preliminary results already documented.`
  },
  {
    id: "2",
    title: "New State-of-the-Art Simulation Lab",
    date: "March 10, 2024",
    category: "Facilities",
    description: "Advanced simulation laboratory opens for medical training.",
    fullContent: `We are proud to announce the opening of our new state-of-the-art simulation laboratory. 
    This facility represents a significant investment in our students' education, providing them with 
    hands-on experience in a controlled, safe environment. The lab features the latest in medical simulation 
    technology, including high-fidelity mannequins and virtual reality training stations.

    This advancement in our facilities will ensure our students receive the most comprehensive and 
    up-to-date medical training available, preparing them for real-world clinical scenarios.`
  },
  {
    id: "3",
    title: "International Medical Conference 2024",
    date: "March 5, 2024",
    category: "Events",
    description: "Join us for the annual international medical conference.",
    fullContent: `We are excited to host the International Medical Conference 2024, bringing together 
    leading medical professionals, researchers, and educators from around the world. This year's conference 
    will focus on emerging trends in healthcare, featuring keynote speakers from prestigious institutions 
    and interactive workshops.

    The conference will cover various topics including advances in medical technology, patient care 
    innovations, and the future of medical education. Early registration is now open with special rates 
    for students and faculty members.`
  }
];

const NewsDetail = () => {
  const { id } = useParams();
  const news = newsData.find(item => item.id === id);

  if (!news) {
    return (
      <div className="min-h-screen bg-medical-50/30 pt-8">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="outline" className="mb-6">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-medical-900">News article not found</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-medical-50/30">
      <div className="container mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="outline" className="mb-6">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-2 text-medical-600 text-sm mb-4">
              <Calendar className="h-4 w-4" />
              {news.date}
            </div>

            <h1 className="text-3xl font-bold text-medical-900 mb-4">
              {news.title}
            </h1>

            <span className="inline-block bg-medical-100 text-medical-700 px-3 py-1 rounded-full text-sm mb-6">
              {news.category}
            </span>

            <div className="prose prose-medical max-w-none">
              {news.fullContent.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-medical-600 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default NewsDetail;
