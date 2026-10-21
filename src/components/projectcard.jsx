import { Link } from "react-router";

import githubIcon from "../assets/skill-icons/github.svg";

export default function ProjectCard({ technologies = [], name, description, github }) {
    return (
        <Link to={github} target="_blank" className="group h-full overflow-hidden bg-white flex flex-col rounded-[0.8em] shadow-[0_4px_8px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_4px_8px_rgba(0,0,0,0.5)] duration-200 ease-[cubic-bezier(0.78,0,0.22,1)]">
            {/* <img src={thumbnailUrl} alt={`${name} project preview`} className="w-full" /> */}

            <div className="my-4 mx-4 flex flex-1 flex-col gap-4">

                <div className="flex flex-col gap-4 h-full">
                    <h2 className="text-3xl font-medium">{name}</h2>

                    <p className="flex-1">{description}</p>

                    <div className="flex flex-row flex-wrap gap-2">
                        {technologies.map((technology) => (
                            <span key={technology} className="text-sm bg-[#d81159] text-white rounded-md py-[0.3em] px-[0.6em]">
                                {technology}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-end">
                        <img src={githubIcon} alt="" width="24" className="group-hover:animate-tada group-hover:scale-110 duration-200" />
                    </div>
                </div>
            </div>
        </Link>
    )
}