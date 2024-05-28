import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 items-center px-[6.5%]">
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl text-black">Log In</span>
          <span className="text-gray-400 text-sm">We are happy to see you back!</span>
        </div>

        <button className="rounded-full outline-2 outline outline-gray-300 px-10 py-2">
          <div className="flex flex-row gap-2 items-center justify-center">
            <Image src="/images/google.svg" alt="google" width={20} height={20} />
            <span className="text-gray-400">Google</span>
          </div>
        </button>

		<div className="relative flex flex-row items-center w-full lg:w-2/6">
			<div className="flex-grow border-b border-gray-400"></div>
			<span className="flex-shrink mx-2 text-gray-400">OR</span>
			<div className="flex-grow border-t border-gray-400"></div>
		</div>

        <div className="w-2/6">
          <input
            className="w-full h-11 rounded-lg border-2 border-solid border-gray-200 px-4 text-left text-black placeholder-gray-400"
            placeholder="Username"
          />
        </div>

        <div className="w-2/6">
          <input
            className="w-full h-11 rounded-lg border-2 border-solid border-gray-200 px-4 text-left text-black placeholder-gray-400"
            placeholder="Password"
            type="password"
          />
        </div>
		<div className="flex flex-col items-center gap-1 w-2/6">
			<div className="w-full">
			<Link href={"/login"}>
				<button className="w-full h-12 bg-black rounded-full border-2 border-solid border-gray-200 text-white text-center">
				Sign in
				</button>
			</Link>
			</div>
			<span className="text-black text-sm">By continuing, you agree to the Terms of use and Privacy Policy.</span>	  
		</div>
			  <div className="flex flex-row items-center justify-between w-2/6">
				  <span className="text-black text-sm">Forgot your password?</span>
				  <span className="text-black text-sm">Create a new account</span>
				</div>
      </div>
    </div>
  );
};

export default Login;