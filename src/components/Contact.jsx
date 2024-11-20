const Contact = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-3 space-y-6" id="contact">
        <h1 className=" font-bold text-4xl sm:text-5xl md:text-6xl text-center">
            <span className=" bg-gradient-to-r from-pink-500 to-black bg-clip-text text-transparent">¡Ponte en contacto!</span>
        </h1>

        <p className=" text-gray-500 font-serif text-lg text-center">
            ¿Quieres charlar? Enviame un correo electronico a través de este botón y te respondere siempre que pueda.
        </p>

        <button className=" bg-gradient-to-r from-purple-500 to-blue-800 rounded-lg px-5 py-3 text-white
         font-bold text-lg hover:-translate-y-3 transition-all duration-300 border-2 hover:bg-white
         hover: border-black hover: text-black">
            <a href="mailto:marycosplay25@outlook.com">¡Contactame, plis! 😢</a> 
        </button>
        <button className=" bg-gradient-to-r from-blue-500 to-black rounded-lg px-5 py-3 text-white
         font-bold text-lg hover:-translate-y-3 transition-all duration-300 border-2 hover:bg-white
         hover: border-black hover: text-black">
            <a href="https://github.com/MarioAlive99">¡Visita mi GitHub! 💻</a> 
        </button>
        <button className=" bg-gradient-to-r from-green-900 to-black rounded-lg px-5 py-3 text-white
         font-bold text-lg hover:-translate-y-3 transition-all duration-300 border-2 hover:bg-white
         hover: border-black hover: text-black">
            <a href="https://www.linkedin.com/in/mario-alejandro-0b5a75329">¡O darle un vistazo a LinkedIn! 📉</a> 
        </button>
    </div>
  )
}

export default Contact