import Navbar from "./components/navbar";
import ProjectCard from "./components/projectcard";

export default function Projects() {
    return (
        <div>
            <Navbar />

            <div className="flex justify-center items-center">
                <div className="max-w-[1000px] flex flex-col items-center gap-2 mb-10">
                    <h1 className="mb-20 text-[1.5em]">Projects</h1>

                    <div className="flex grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                        <ProjectCard thumbnail={"laravel.png"} technologies={["Laravel", "Tailwind CSS"]} name={'Laravel website'} description={"Website gemaakt met Laravel met een User en Admin rol, waar CRUD functionaliteit is toegepast. Met OWASP Top 10 beveiliging."} github={"https://github.com/MeesH1111/prg-05-Laravel-project"} />
                        <ProjectCard thumbnail={"fullstack.png"} technologies={["React", "Vite", "Tailwind CSS", "MongoDB"]} name={'Full stack website'} description={"Frontend website gemaakt in React, met een backend RESTful Webservice."} github={"https://github.com/MeesH1111/prg06-praktijkopdracht-2"} />
                        <ProjectCard thumbnail={"earthifacts.png"} technologies={["Javscript", "Vite"]} name={'Earthifacts'} description={"Adventure game gemaakt in Excalibur.js, een 2D TypeScript game engine, met een team van 4 personen."} github={"https://github.com/Justin4625/Earthifacts-CLE4"} />
                        <ProjectCard thumbnail={"earthifacts.png"} technologies={["React", "Vite", "Tailwind CSS"]} name={'Portfolio'} description={"Portfolio website oorspronkelijk gemaakt voor een keuzevak, maar nu regelmatig bijgehouden met nieuwe projecten en informatie over mijzelf."} github={"https://github.com/MeesH1111/portfolio-v2"} />
                        <ProjectCard thumbnail={"streetskatespots.png"} technologies={["React Native", "Tailwind CSS", "Expo"]} name={'Street Skate Spots'} description={"React Native app met styling door middel van Tailwind CSS, waarbij ook gebruik gemaakt is van React Native Maps."} github={"https://github.com/MeesH1111/prg07-praktijkopdracht"} />
                    </div>
                </div>
            </div>
        </div>
    )
}