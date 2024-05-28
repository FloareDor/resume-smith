import Navbar from "@/components/Navbar/Navbar"
import Login from "@/components/Login/Login"
import Footer from "@/components/Footer/Footer"
const login = () => {
	return (
		<div className="bg-white w-full h-full min-h-screen flex flex-col gap-12">
			<Navbar />
			<Login />
		</div>
	)
};

export default login;