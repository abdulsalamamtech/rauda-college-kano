import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const faculty = [
  {
    name: "Mr. Muhammad Yakubu",
    role: "Director/Provost/CEO",
    image: "/images/admin-staff/staff-dir-provost-ceo.jpg",
    specialty: "Medicine"
  },
  {
    name: "Mrs. Jamila Umar Ahmad",
    role: "Assist. Director",
    image: "/images/admin-staff/staff-assistant-dir.jpg",
    specialty: "Health"
  },
  {
    name: "Mr. Zaharaddeen Yakubu",
    role: "H.O.D Public Health",
    image: "/images/admin-staff/rauda-staff-zahraddeen-yakubu.jpeg",
    specialty: "Public Health"
  },
  {
    name: "Mr. Muhammad Tajo",
    role: "H.O.D Community Health",
    image: "/images/admin-staff/rauda-staff-muhammad-tajo.jpeg",
    specialty: "Community Health"
  },
  {
    name: "Dr. Aminu Idris Manu (PHD)",
    role: "Deputy Provost / Academy Secretary",
    image: "/images/admin-staff/staff-acad-sec-deputy-provost-aminu-idris-manu.jpg",
    specialty: "Business"
  },
  // {
  //   name: "Dr. Isah Safiyan Umar",
  //   role: "Bursary/Admin Officer",
  //   image: "/images/admin-staff/rauda-staff-isah-safiyan-umar.jpeg",
  //   specialty: "Accounting"
  // },
    {
    name: "Mr. Jabir Muhammad Yakub",
    role: "Auditor",
    image: "/images/admin-staff/rauda-staff-auditor-jabir-muhammad-yakub.jpeg",
    specialty: "Accounting"
  },
  {
    name: "Mr. Kabiru Ismail",
    role: "Exam Officer",
    image: "/images/admin-staff/rauda-staff-kabir-ismail.jpeg",
    specialty: "Education"
  },
  {
    name: "Dr. Abubakar Y. Abubakar (PHD)",
    role: "Registrar",
    image: "/images/admin-staff/staff-registrar-abu-y-abu.jpg",
    specialty: "Business"
  },
  {
    name: "Mr. Nura Mukhtar",
    role: "Secretary",
    image: "/images/admin-staff/staff-game-master.jpg",
    specialty: "Pediatrics"
  }
];

const Faculty = () => {
  return (
    <section id="staff" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl font-bold text-medical-900 mb-4">
            Our Distinguished College Staff
          </h2>
          <p className="text-medical-600 max-w-2xl mx-auto">
            Learn from leading healthcare professionals and renowned researchers in their respective fields.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-medical-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-medical-600 font-medium mb-1">{member.role}</p>
                  <p className="text-medical-500 text-sm">{member.specialty}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
