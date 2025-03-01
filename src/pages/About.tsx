
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div id="about" className="min-h-screen bg-medical-50/30">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-medical-900 text-center mb-8">
            About Medical College
          </h1>

          <div className="space-y-8">

            {/* History Section */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-medical-800 mb-4">Our History</h2>
                {/* <p className="text-medical-600">
                  Founded in 1950, Medical College has been at the forefront of medical
                  education for over 70 years. Our institution has grown from a small
                  medical school to a comprehensive healthcare education center,
                  consistently ranked among the top medical schools in the country.
                </p> */}
                 <p className="text-medical-600 pb-2">
                  Rauda College of Health Science and Technology was established with the purpose of
                  supporting the government's efforts in improving the lives of youth and enhancing the quality
                  of healthcare professionals. The institution started its academic activities in November 2021,
                  marking the beginning of its journey to provide high-quality education and training in health
                  sciences and technology.
                 </p>
                 <p className="text-medical-600 pb-2">
                  The college is registered and approved by the government, ensuring its adherence to national
                  standards and regulations. In addition, it holds accreditation with relevant regulatory bodies,
                  which underscores its commitment to maintaining the highest standards in education, training,
                  and healthcare practices. Through this accreditation, the college ensures that its programs
                  meet the necessary criteria for producing competent, skilled health workers ready to contribute
                  positively to the healthcare sector.
                 </p>
                 <p className="text-medical-600 pb-2">
                  With a strong foundation in health science and technology, the college aims to equip students
                  with the necessary knowledge and skills to become effective and compassionate healthcare
                  professionals.
                 </p>
              </CardContent>
            </Card>


            {/* Vision Section */}
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl font-semibold text-medical-800 mb-4">Our Vision</h2>
                    <p className="text-medical-600">
                      To be a leading institution in medical education, fostering innovation,
                      research excellence, and compassionate healthcare professionals who will
                      shape the future of medicine.
                    </p>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                      alt="Medical students collaborating"
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mission Section */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-medical-800 mb-4">Our Mission</h2>
                <p className="text-medical-600 mb-4">
                  We are dedicated to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-medical-600">
                  <li>Providing exceptional medical education</li>
                  <li>Advancing medical research and innovation</li>
                  <li>Promoting healthcare excellence and patient care</li>
                  <li>Fostering a diverse and inclusive learning environment</li>
                  <li>Contributing to community health and well-being</li>
                </ul>
              </CardContent>
            </Card>

            {/* Values Section */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-medical-800 mb-4">Our Values</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-medical-700 mb-2">Excellence</h3>
                    <p className="text-medical-600">
                      Pursuing the highest standards in education, research, and patient care.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-medical-700 mb-2">Innovation</h3>
                    <p className="text-medical-600">
                      Embracing new ideas and approaches in medical science and education.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-medical-700 mb-2">Integrity</h3>
                    <p className="text-medical-600">
                      Maintaining the highest ethical standards in all our endeavors.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-medical-700 mb-2">Compassion</h3>
                    <p className="text-medical-600">
                      Treating every individual with care, respect, and empathy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
