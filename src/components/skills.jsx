import SkillElement from "./skill-element";

export default function Skills() {
    return (
        <div className="flex flex-col items-center">
            <p className="p-4 text-xl">Skills</p>

            <div className="flex gap-[20px] grid grid-cols-2 sm:grid-cols-3">
                <SkillElement icon={'html5.svg'} name={"HTML/CSS"} link={"https://developer.mozilla.org/en-US/docs/Web/HTML"} />
                <SkillElement icon={'javascript.svg'} name={"JavaScript"} link={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"} />
                <SkillElement icon={'tailwindcss.svg'} name={"Tailwind CSS"} link={"https://tailwindcss.com/"} />
                <SkillElement icon={'react.svg'} name={"React.js"} link={"https://react.dev/"} />
                <SkillElement icon={'laravel.svg'} name={"Laravel"} link={"https://laravel.com/"} />
                <SkillElement icon={'twig.png'} name={"Twig"} link={"https://twig.symfony.com/"} />
                <SkillElement icon={'wordpress.svg'} name={"WordPress"} link={"https://wordpress.org/"} />
                <SkillElement icon={'figma.svg'} name={"Figma"} link={"https://www.figma.com"} />
            </div>
        </div>
    )
}

