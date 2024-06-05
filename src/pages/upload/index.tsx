import Upload from "@/components/Upload/Upload";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const upload = () => {
	return (
		<div className="min-h-screen bg-white w-screen flex flex-col">
			<Navbar/>
			<Upload />
			<Footer/>
		</div>
	)
}

export default upload;