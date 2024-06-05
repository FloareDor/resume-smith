import Image from "next/image";

const Upload = () => {
    return (
        <div className="flex justify-center py-8 px-[7%]">
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 flex flex-col gap-4 items-start justify-start py-8 px-6 shadow-xl rounded-3xl">
                <div className="flex flex-col">
                    <span className="text-black font-semibold">
                        Upload you Resume
                    </span>
                    <span className="text-gray-400 text-sm">Add your document here</span>
                </div>
                <div className="rounded-md outline-dashed outline-blue-700 hover:outline-blue-500 py-6 w-full">
                    <div className="flex flex-col gap-2 items-center">
                        <Image src='/images/upload.svg' alt='upload' width={35} height={35} />
                        <span className="text-black text-sm">Drag your file(s) or browse</span>
                        <span className="text-gray-300 text-sm">Max 10 MB files are allowed</span>
                    </div>
                </div>
                <span className="text-gray-400">Only support jpg, png, pdf and docx files</span>
                <div className="w-full">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row gap-2">
                                <Image src='/images/file.svg' alt='file' width={30} height={50} className="" />
                                <div className="flex flex-col gap-1">
                                    <span className="text-black text-sm">my-resume.pdf</span>
                                    <span className="text-gray-200 text-sm">2.8mb</span>
                                </div>
                            </div>
                            <Image src='/images/cross-gray.svg' alt='cross' width={25} height={25}/>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-between">
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-100">
                                <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-700 w-[60%]"></div>
                            </div>
                            <span className="text-sm text-gray-300">60%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload;