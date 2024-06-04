import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Home from "@/components/Content/Home";
import Start from "@/components/Content/Start";
import Testimonials from "@/components/Content/Testimonials/Testimonials";
import Create from "@/components/Content/Create";

const home = () => {
  return (
    <div className="bg-white w-full h-full min-h-screen">
      <Navbar />
      <Home />
      <Start />
      <Testimonials />
      <Create />
      <Footer />
    </div>
  )
};

export default home;