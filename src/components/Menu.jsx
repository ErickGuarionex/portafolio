export default function Menu(){
    return(
        <div className="pt-3 text-white font-bold">
            <nav className="flex justify-center items-center gap-3 font-sans text-sm mt">
                <a href="#">Experiencia</a>
                <a href="#">Proyectos</a>
                <a href="#">Sobre Mi</a>
                <a href="#">Contacto</a>
                <img className="ml-2 w-[20px]" src="/night-mode.png" alt="DarkMode" />
            </nav>
        </div>
    )
}