import SkillElement from "./skill-element";

export default function Skills() {
    return (
        <div className="flex flex-col items-center mt-30">
            <p className="">Skills</p>

            <div className="flex flex-row">
                <SkillElement icon={'react.svg'} name={"React.js"} />
                <SkillElement icon={'tailwindcss.svg'} name={"Tailwind CSS"} />
            </div>
        </div>
    )
}