
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
      "High school certificate or equivalent",
      "The minimum of five credits in science subject",
      "Science prerequisites",
    ],
    careers: "Graduates pursue careers in various medical specialties, research, or academic medicine."
  },
  {
    id: "community",
    title: "Community health extension workers (CHEW)",
    duration: "3 Years",
    summary: "Comprehensive nursing program combining theoretical knowledge with extensive clinical practice in healthcare settings.",
    requirements: [
      "High school certificate or equivalent",
      "The minimum of five credits in science subject",
      "Science prerequisites",
    ],
    careers: "Community Health Extension Workers (CHEW) can work in primary healthcare centres, government hospitals, and NGO programs, serving as frontline health providers in rural and urban communities. They are often involved in maternal and child care, immunization, health education, and disease prevention."
  },
   {
    id: "junior-community",
    title: "Junior Community health extension workers (J-CHEW)",
    duration: "2 Years",
    summary: "Comprehensive nursing program combining theoretical knowledge with extensive clinical practice in healthcare settings.",
    requirements: [
      "High school certificate or equivalent",
      "The minimum of five credits in science subject",
      "Science prerequisites",
    ],
    careers: "Junior Community Health Extension Workers (J-CHEW) have career paths as health assistants in clinics and community health posts. They support healthcare delivery through health talks, home visits, and minor treatments, especially in underserved areas."
  },
  {
    id: "dental",
    title: "Dental Therapy",
    duration: "2 Years",
    summary: "Advanced degree program focusing on population health, epidemiology, and healthcare policy.",
    requirements: [
      "High school certificate or equivalent",
      "The minimum of five credits in science subject",
      "Science prerequisites",
      // "Bachelor's degree in related field",
      // "Minimum GPA of 3.0",
      // "GRE scores",
      // "Work experience preferred",
      // "Research interest statement"
    ],
    careers: "Dental health professionals have opportunities to work in dental clinics, general hospitals, and oral health outreach programs. They can serve as dental assistants, dental technicians, or oral health educators, providing both preventive and basic clinical dental care."
  },
  {
    id: "public",
    title: "Public health technology",
    duration: "2 Years",
    summary: "Interdisciplinary program covering various aspects of healthcare, preparing students for diverse health-related careers.",
    requirements: [
      "High school certificate or equivalent",
      "The minimum of five credits in science subject",
      "Science prerequisites",
    ],
    careers: "Public Health graduates can pursue careers in disease control agencies, health ministries, non-governmental organizations (NGOs), and international health bodies. They work as public health officers, environmental health officers, health educators, or policy advisors, focusing on disease prevention and health promotion."
  },
  {
    id: "medical",
    title: "Medical laboratory technology",
    duration: "3 Years",
    summary: "Interdisciplinary program covering various aspects of healthcare, preparing students for diverse health-related careers.",
    requirements: [
      "High school certificate or equivalent",
      "The minimum of five credits in science subject",
      "Science prerequisites",
    ],
    careers: "Medical Laboratory technicians are essential in hospitals, diagnostic centres, research laboratories, and blood banks. They perform tests on patient samples to aid in diagnosis and treatment, and may also work in public health laboratories or private diagnostic firms."
  },
  {
    id: "environmental",
    title: "Environmental health",
    duration: "3 Years",
    summary: "Interdisciplinary program covering various aspects of healthcare, preparing students for diverse health-related careers.",
    requirements: [
      "High school certificate or equivalent",
      "The minimum of five credits in science subject",
      "Science prerequisites",
    ],
    careers: "Graduates work in healthcare administration, research, education, and clinical support roles."
  },
  {
    id: "health",
    title: "Health information management",
    duration: "2 Years",
    summary: "Interdisciplinary program covering various aspects of healthcare, preparing students for diverse health-related careers.",
    requirements: [
      "High school certificate or equivalent",
      "The minimum of five credits in science subject",
      "Science prerequisites",
    ],
    careers: "Health Information Management (HIM) professionals work in hospitals, clinics, and government health agencies, managing patient records, hospital data, and digital health systems. They ensure accurate record-keeping, data privacy, and support informed decision-making in healthcare delivery."
  },
  {
    id: "epidemiology",
    title: "Epidemiology",
    duration: "2 Years",
    summary: "Epidemiology program covering various aspects of healthcare, preparing students for diverse health-related careers.",
    requirements: [
      "High school certificate or equivalent",
      "The minimum of five credits in science subject",
      "Science prerequisites",
    ],
    careers: "Epidemiology graduates can work with the Nigeria Centre for Disease Control (NCDC), Ministry of Health, WHO, and other international health organizations. They investigate disease outbreaks, analyze health data, and help design strategies for disease control and prevention."
  },
  {
    id: "retrainee",
    title: "Retrainee",
    duration: "2 Years",
    summary: "Retrainee program covering various aspects of healthcare, preparing students for diverse health-related careers.",
    requirements: [
      "High school certificate or equivalent",
      "The minimum of five credits in science subject",
      "Science prerequisites",
    ],
    careers: "Retrainees often return to their previous positions with improved qualifications, making them eligible for promotions or leadership roles. They may also become mentors, trainers, or supervisors in health programs, or take on expanded roles in NGOs and public health sectors."
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
