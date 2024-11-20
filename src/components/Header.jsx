import imagen from '../assets/logo_nuevo.png'

const Header = () => {
  return (
    <div id='home' className=" flex flex-col-reverse sm:flex-row items-start justify-between gap-3 md:gap-8">
        <div className=" flex flex-col gap-2">
            <h1 className=" font-bold text-4xl sm:text-5xl md:text-6xl text-nowrap tracking-tighter">Hola, Soy 
                <span className=" bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent"> MarioDevs</span>
            </h1>
            <p className=" max-w-[500px] text-lg md:text-xl">Desarrollador web full stack con un año de experiencia en React y Spring. Habil en crear aplicaciones dinamicas, eficientes y escalables. Enfoque en soluciones innovadoras, trabajo en equipo y mejora continua.</p>
        </div>
        <img src={imagen} alt="Logo Nuevo 2025" className="w-80" />
    </div>
    
  )
}

export default Header