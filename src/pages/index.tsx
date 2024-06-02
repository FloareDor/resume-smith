import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Home from "@/components/Content/Home";
import Start from "@/components/Content/Start";

const home = () => {
  return (
    <div className="bg-white w-full h-full min-h-screen">
      <Navbar />
      <Home />
      <Start />
      <Footer />
    </div>
  )
};

export default home;