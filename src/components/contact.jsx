import SkillElement from "./skill-element";

export default function Contact() {
    return (
        <div className="flex flex-col items-center">
            <p className="p-4 text-xl">Contact</p>

            <div className="flex gap-[20px] grid grid-cols-2 md:grid-cols-3">
                <SkillElement icon={"linkedin.png"} name={"LinkedIn"} link={"https://www.linkedin.com/in/mees-hoff-web-developer/"} />
                <SkillElement icon={"github.svg"} name={"GitHub"} link={"https://github.com/MeesH1111"} />
                <SkillElement icon={"gmail.svg"} name={"Mail"} link={"mailto:meeshoff2006@gmail.com"} />
            </div>
        </div>
    )
}