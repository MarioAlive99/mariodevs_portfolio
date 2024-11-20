const Skills = () => {
  return (
    <div className=" flex flex-col gap-5">
        <h2 className=" font-bold text-xl">Habilidades</h2>
        <div className=" flex gap-3 flex-wrap">
            <div className=" flex flex-col items-start justify-center gap-2">
                <div className=" py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75
                 bg-gradient-to-r from-red-500 to-orange-500">HTML</div>
            </div>
            <div className=" flex flex-col items-start justify-center gap-2">
                <div className=" py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75
                 bg-gradient-to-r from-blue-500 to-purple-500">CSS</div>
            </div>
            <div className=" flex flex-col items-start justify-center gap-2">
                <div className=" py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75
                 bg-gradient-to-r from-yellow-500 to-orange-500">JavaScript</div>
            </div>
        </div>
        <div className=" flex gap-3 flex-wrap">
            <div className=" flex flex-col items-start justify-center gap-2">
                <div className=" py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75
                 bg-gradient-to-r from-blue-500 to-black">React</div>
            </div>
            <div className=" flex flex-col items-start justify-center gap-2">
                <div className=" py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75
                 bg-gradient-to-r from-purple-500 to-black">TypeScript</div>
            </div>
            <div className=" flex flex-col items-start justify-center gap-2">
                <div className=" py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75
                 bg-gradient-to-r from-blue-500 to-red-500">Java</div>
            </div>
        </div>
        <div className=" flex gap-3 flex-wrap">
            <div className=" flex flex-col items-start justify-center gap-2">
                <div className=" py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75
                 bg-gradient-to-r from-green-500 to-blue-500">MySQL</div>
            </div>
            <div className=" flex flex-col items-start justify-center gap-2">
                <div className=" py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75
                 bg-gradient-to-r from-green-500 to-yellow-500">Spring Boot</div>
            </div>
        </div>
    </div>
  )
}

export default Skills