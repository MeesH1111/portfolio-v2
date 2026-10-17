import Contact from "./components/contact";
import Introtext from "./components/introtext";
import Navbar from "./components/navbar";
import Skills from "./components/skills";

export default function Homepage() {
    return (
        <div className="">
            <Navbar />
            <div className="flex flex-col justify-center items-center">
                <Introtext />
                <Contact />

                {/* SimpleIcons voor icons */}
                <Skills />
            </div>
        </div>
    )
}