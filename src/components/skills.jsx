import SkillElement from "./skill-element";

export default function Skills() {
    return (
        <div className="flex flex-col items-center">
            <p className="p-4 text-xl">Skills</p>

            <div className="flex gap-[20px] grid grid-cols-2 sm:grid-cols-3">
                <SkillElement icon={'html5.svg'} alt={""} name={"HTML/CSS"} link={"https://developer.mozilla.org/en-US/docs/Web/HTML"} />
                <SkillElement icon={'javascript.svg'} alt={""} name={"JavaScript"} link={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"} />
                <SkillElement icon={'tailwindcss.svg'} alt={""} name={"Tailwind CSS"} link={"https://tailwindcss.com/"} />
                <SkillElement icon={'react.svg'} alt={""} name={"React.js"} link={"https://react.dev/"} />
                <SkillElement icon={'laravel.svg'} alt={""} name={"Laravel"} link={"https://laravel.com/"} />
                <SkillElement icon={'twig.png'} alt={""} name={"Twig"} link={"https://twig.symfony.com/"} />
                <SkillElement icon={'wordpress.svg'} alt={""} name={"WordPress"} link={"https://wordpress.org/"} />
                <SkillElement icon={'figma.svg'} alt={""} name={"Figma"} link={"https://www.figma.com"} />
            </div>
        </div>
    )
}

