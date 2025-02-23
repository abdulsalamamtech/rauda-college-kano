
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Admission = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-medical-600 to-medical-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12"
          >
            <GraduationCap className="w-16 h-16 mx-auto mb-6 text-medical-100" />
            <h2 className="font-playfair text-4xl font-bold mb-4">
              Begin Your Medical Journey
            </h2>
            <p className="text-lg text-medical-100 mb-8 max-w-2xl mx-auto">
              Take the first step towards your medical career. Applications are now open for the upcoming academic year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-medical-800 hover:bg-medical-50"
              >
                Apply Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-medical-800 hover:bg-white"
              >
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Admission;
