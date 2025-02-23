
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Courses from '@/components/Courses';
import Faculty from '@/components/Faculty';
import Facilities from '@/components/Facilities';
import News from '@/components/News';
import Admission from '@/components/Admission';
import Testimonials from '@/components/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Courses />
      <Faculty />
      <Facilities />
      <News />
      <Testimonials />
      <Admission />
    </div>
  );
};

export default Index;
