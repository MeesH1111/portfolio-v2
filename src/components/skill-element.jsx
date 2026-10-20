import { Link } from "react-router";

export default function SkillElement({ icon, name, link }) {
    return (
        <Link to={link} target="_blank" className="group flex flex-row items-center text-center bg-white/50 p-2 gap-[8px] border-1 border-black rounded-md hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_5px_5px_0_rgba(0,0,0,0.5)] duration-200 ease-[cubic-bezier(0.78,0,0.22,1)]">
            <img src={`src/assets/skill-icons/${icon}`} width="24" className={`brightness-0 group-hover:animate-tada group-hover:filter-none duration-300`} />
            <p className="m-0 font-lato">{name}</p>
        </Link>
    )
}