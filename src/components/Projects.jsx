import { projects } from "../types"

const Projects = () => {
  return (
    <div className=" space-y-5 pt-10" id="projects">
        <h1 className=" font-bold text-4xl sm:text-5xl md:text-6xl text-center">
            <span className=" bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Mis Proyectos
            </span>
        </h1>

        <h3 className=" font-semibold text-gray-500 text-xl text-center">
            He creado de todo, desde sitios web simples hasta aplicaciones web avanzadas. Estos son algunos
            de los proyectos de los que estoy más orgulloso.
        </h3>

        <div className=" flex flex-col items-center justify-center space-y-5">
            <div className=" sm:flex gap-5 space-y-5 sm:space-y-0">
                {projects.map((project, index) => (
                    <div key={index} className=" flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5
                     hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
                        <img src={project.imagen} alt="Imagen del proyecto" className=" w-[300px] rounded-md" />
                        <h3 className=" text-lg font-bold">{project.nombre}</h3>
                        <span className=" text-sm text-gray-500 font-semibold">{project.duracion}</span>
                        <p className=" text-xs text-gray-400 font-medium max-w-64">{project.descripcion}</p>

                        <div className=" flex gap-3 text-xs">
                            {project.tecnologia.map((tech, idx) => (
                                <div key={idx} className=" flex flex-col items-start justify-center gap-2">
                                    <div className=" py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75
                                    bg-gradient-to-r from-amber-500 to-blue-500">{tech}</div>
                                </div>
                            ))}
                        </div>
                     </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects