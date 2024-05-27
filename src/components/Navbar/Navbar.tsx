const Navbar = () => {
	return (
		<div className="flex flex-row items-center justify-between gap-20 sm:px-24 sm:py-6">
			<span className="text-black">ResumeSmith</span>
			<div className="flex flex-row items-center gap-8">
				<span className="text-black text-sm">Features</span>
				<span className="text-black text-sm">Templates</span>
				<span className="text-black text-sm">Testimonials</span>
			</div>

			<div className="flex flex-row items-center gap-8">
				<span className="text-black text-sm">Login</span>
				<span className="text-black text-sm">Sign up</span>
				<span className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded outline outline-2 outline-black">
					Format Resume
				</span>
				
			</div>

		</div>
	)
};

export default Navbar;