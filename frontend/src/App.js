import './App.css';
import PopularDesigningCourse from './components/courses/PopularDesigningCourse';
import FAQ from './components/faq/FAQ';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import HowItWorks from './components/howitworks/HowItWorks';
import PopularCourses from './components/courses/PopularCourses';
import Pricing from './components/pricing/Pricing';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className=''>

      <div className='w-full' style={{ backgroundImage: "url('/images/hero_header_bg.png')", backgroundRepeat: "no-repeat" }}>
        <Header />
        <Hero />
      </div>

      <PopularCourses />
      <PopularDesigningCourse />

      <HowItWorks />
      <Pricing />
      <FAQ />

      <div className='my-20'>
        <div className='w-full text-center'>
          <h2 className='text-3xl font-semibold text-color2'>Ready to learn design with
            <br />Nia Matos</h2>
        </div>
        <div className='flex items-center justify-center mt-10'>
          <button className="px-4 py-2 rounded-md text-color4 text-md font-semibold bg-[#FCF2E8]">
            Start Learning Today
          </button>
        </div>
      </div>

      <Footer />

    </div>
  );
}

export default App;
