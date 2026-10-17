export default function SkillElement({ icon, name }) {
    return (
        <div className="flex flex-row justify-center items-center">
            <img src={`src/assets/skill-icons/${icon}`} width="24" />
            <p>{name}</p>
        </div>
    )
}