import { educationstudies } from "../types"

const Education = () => {
  return (
    <div className=" space-y-3" id="education">
        <h2 className=" text-xl font-bold">Educación</h2>
        {educationstudies.map((education, index) => (
            <div key={index} className=" flex items-center gap-5">
                <img src={education.logo} alt="logo" className=" w-14 border rounded-full" />
                <div className=" flex items-center justify-between flex-1">
                    <div className=" flex flex-col">
                        <h3 className=" font-semibold">{education.nombre}</h3>
                        <span className=" font-medium text-gray-500 text-sm">{education.carrera}</span>
                        <p className=" font-semibold">{education.especializacion}</p>
                    </div>
                    <div className=" text-gray-400">{education.fecha_inicio} - {education.fecha_fin}</div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Education