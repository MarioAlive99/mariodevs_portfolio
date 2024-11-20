import { experiences } from "../types"

const Experience = () => {
  return (
    <div className=" space-y-3">
        <h2 className=" text-xl font-bold">Experiencia Laboral</h2>
        {experiences.map((experience, index) => (
            <div key={index} className=" flex items-center gap-5">
                <img src={experience.logo} alt="logo" className=" w-14 border rounded-full" />
                <div className=" flex items-center justify-between flex-1">
                    <div className=" flex flex-col">
                        <h3 className=" font-semibold">{experience.compania}</h3>
                        <span className=" font-medium text-gray-500 text-sm">{experience.colaboracion}</span>
                        <p className=" font-semibold">{experience.ocupacion}</p>
                    </div>
                    <div className=" text-gray-400">{experience.fecha}</div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Experience