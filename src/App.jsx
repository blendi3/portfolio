import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";
import LogoAnimation from "./components/LogoAnimation";

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 4000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen bg-black">
  //       {/* Logo Animation Container */}
  //       <div className="relative flex justify-center items-center w-[120px] h-[120px]">
  //         {/* Square Animation */}
  //         <div className="absolute top-0 left-0 w-[120px] h-[120px]">
  //           {/* Top Line */}
  //           <div className="absolute bg-white h-[2px] top-0 left-0 animate-square-top"></div>
  //           {/* Right Line */}
  //           <div className="absolute bg-white w-[2px] top-0 right-0 animate-square-right"></div>
  //           {/* Bottom Line */}
  //           <div className="absolute bg-white h-[2px] bottom-0 right-0 animate-square-bottom"></div>
  //           {/* Left Line */}
  //           <div className="absolute bg-white w-[2px] bottom-0 left-0 animate-square-left"></div>
  //         </div>

  //         <span className="text-white text-6xl font-bold absolute left-[1.4rem] top-[1.8rem] opacity-0 animate-b-fade">
  //           B
  //         </span>

  //         <span className="text-white text-6xl font-bold absolute left-[4.8rem] top-[1.8rem] opacity-0 animate-i-fade">
  //           I
  //         </span>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <LogoAnimation>
      <main className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </LogoAnimation>
  );
};

export default App;
