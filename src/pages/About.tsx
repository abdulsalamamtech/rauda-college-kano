
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
                    "Our vision is to be a recognized center of excellence in healthcare education, research, and practice. We strive to be a leading institution that produces competent and compassionate healthcare professionals who uphold the highest standards of patient care, ethics, and innovation. Rauda College of Health Sciences Kano envisions a future where our graduates lead positive transformations in addressing pressing challenges and advancing the overall health and wellness of the global community."
                    </p>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src="/images/rauda-college-logo.jpg"
                      alt="Medical students collaborating"
                      className="w-full h-[320px] object-cover"
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
                "Our mission at Rauda College of Health Sciences Kano is to provide accessible and comprehensive education that equips students with the knowledge, skills, and values needed to make meaningful contributions to the health and well-being of their communities. Through rigorous academic programs, practical training, and ethical guidance, we empower future healthcare professionals to excel in their careers and positively impact the lives of individuals and society as a whole."
                </p>
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
