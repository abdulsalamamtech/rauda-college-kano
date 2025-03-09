
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const programs = [
  {
    id: "preliminary",
    title: "Preliminary courses/ Remedial studies",
    duration: "1 Years",
    summary: "Our flagship medical program preparing future physicians through comprehensive medical education, clinical rotations, and research opportunities.",
    requirements: [
      "Bachelor's degree from an accredited institution",
      "Minimum GPA of 3.5",
      "MCAT scores",
      "Letters of recommendation",
      "Clinical experience or shadowing"
    ],
    careers: "Graduates pursue careers in various medical specialties, research, or academic medicine."
  },
  {
    id: "community",
    title: "Community health extension workers",
    duration: "2 Years",
    summary: "Comprehensive nursing program combining theoretical knowledge with extensive clinical practice in healthcare settings.",
    requirements: [
      "High school diploma or equivalent",
      "Minimum GPA of 3.0",
      "Science and math prerequisites",
      "Healthcare experience preferred",
      "Personal statement"
    ],
    careers: "Graduates work in hospitals, clinics, schools, and other healthcare facilities."
  },
  {
    id: "dental",
    title: "Dental therapeutics",
    duration: "2 Years",
    summary: "Advanced degree program focusing on population health, epidemiology, and healthcare policy.",
    requirements: [
      "Bachelor's degree in related field",
      "Minimum GPA of 3.0",
      "GRE scores",
      "Work experience preferred",
      "Research interest statement"
    ],
    careers: "Careers in public health organizations, research institutions, and government agencies."
  },
  {
    id: "public",
    title: "Public health technology",
    duration: "2 Years",
    summary: "Interdisciplinary program covering various aspects of healthcare, preparing students for diverse health-related careers.",
    requirements: [
      "High school diploma or equivalent",
      "Minimum GPA of 2.8",
      "Science prerequisites",
      "Personal statement",
      "Interview"
    ],
    careers: "Graduates work in healthcare administration, research, education, and clinical support roles."
  },
  {
    id: "medical",
    title: "Medical laboratory technology",
    duration: "3 Years",
    summary: "Interdisciplinary program covering various aspects of healthcare, preparing students for diverse health-related careers.",
    requirements: [
      "High school diploma or equivalent",
      "Minimum GPA of 2.8",
      "Science prerequisites",
      "Personal statement",
      "Interview"
    ],
    careers: "Graduates work in healthcare administration, research, education, and clinical support roles."
  },
  {
    id: "environmental",
    title: "Environmental health",
    duration: "3 Years",
    summary: "Interdisciplinary program covering various aspects of healthcare, preparing students for diverse health-related careers.",
    requirements: [
      "High school diploma or equivalent",
      "Minimum GPA of 2.8",
      "Science prerequisites",
      "Personal statement",
      "Interview"
    ],
    careers: "Graduates work in healthcare administration, research, education, and clinical support roles."
  },
  {
    id: "health",
    title: "Health information management",
    duration: "2 Years",
    summary: "Interdisciplinary program covering various aspects of healthcare, preparing students for diverse health-related careers.",
    requirements: [
      "High school diploma or equivalent",
      "Minimum GPA of 2.8",
      "Science prerequisites",
      "Personal statement",
      "Interview"
    ],
    careers: "Graduates work in healthcare administration, research, education, and clinical support roles."
  }
];

const Programs = () => {
  return (
    <div className="min-h-screen bg-medical-50/30">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="mb-6">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-medical-900 mb-4">
              Academic Programs
            </h1>
            <p className="text-medical-600 text-lg">
              Discover our comprehensive range of medical and healthcare programs designed to prepare you for a successful career in healthcare.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div  id={`${program.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 pt-8 pb-6">
                  <CardHeader>
                    <CardTitle className="text-2xl text-medical-800">
                      {program.title}
                    </CardTitle>
                    <p className="text-medical-600">Duration: {program.duration}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h3 className="font-semibold text-medical-800 mb-2">Program Summary</h3>
                        <p className="text-medical-600">{program.summary}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-medical-800 mb-2">Requirements</h3>
                        <ul className="list-disc list-inside text-medical-600 space-y-1">
                          {program.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-medical-800 mb-2">Career Opportunities</h3>
                        <p className="text-medical-600">{program.careers}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
