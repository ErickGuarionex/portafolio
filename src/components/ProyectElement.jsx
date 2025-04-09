export default function ProyectElement({proyect, index}){

    const aplicarClase = index === 0 ? '' : 'mt-10';
    
    return(
        <div className={`flex gap-x-4 pb-4 ${aplicarClase}`}>
            <div className={`w-[50%] h-[250px] bg-white rounded-lg bg-[url(${proyect.img})] bg-contain bg-center bg-no-repeat`}></div>

            <div className="w-[50%] flex flex-col justify-between">
                <h1 className="text-3xl font-bold">{proyect.name}</h1>

                <p className="mt-4">{proyect.description}</p>

                <div className="flex gap-x-2">
                    <button className="btn bg-white text-black font-bold border-2 px-8 py-1 mt-3 rounded-md w-[35%]">Preview</button>
                    <button className="btn bg-white text-black font-bold border-2 px-8 py-1 mt-3 rounded-md w-[35%] transition-all hover:bg-gray-800 hover:text-white">Code</button>
                </div>
            </div>
        </div>
    )
}