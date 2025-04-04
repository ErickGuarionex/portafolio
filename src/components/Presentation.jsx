export default function Presentation(){
    return(
        <div className="flex flex-col justify-center w-[70%] mx-auto mt-28">
            <div className="flex items-center gap-5">

                <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
                    <img src="/erick-img.png" alt="user-img"/>
                </div>

                <a href="#" target="_blank" rel="noopener" class="flex items-center transition md:justify-center md:hover:scale-105"> <div class="flex items-center "> <span class="relative inline-flex overflow-hidden rounded-full p-[1px]"> <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,white_0%,white_50%,purple_100%)]"></span> <div class="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-white-400 bg-indigo-100 rounded-full cursor-pointer dark:bg-white dark:text-indigo/80 backdrop-blur-3xl whitespace-nowrap font-bold"> Disponible para trabajar </div> </span> </div> </a>
            </div>

            <div className="my-6">
                <h2 className="text-white text-3xl font-bold">Hey, I am Erick Guarionex</h2>

                <h3 className="max-w-[85%] mt-4 text-gray-300">+3 months of experience Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis <span className="text-yellow-100">molestias assumenda odio quo aperiam quisquam</span> quos commodi harum non soluta!</h3>
            </div>

            <div className="mt-10 flex gap-4">

                <button className="bg-white rounded-md p-2 w-[150px] font-bold">Contact Me</button>

                <button className="flex items-center justify-center gap-1 bg-white rounded-md p-2 w-[150px] font-bold"><img className="w-[17px] h-[17px]" src="linkedin.png" alt=""/>Linkedin</button>
            </div>
        </div>
    )
}