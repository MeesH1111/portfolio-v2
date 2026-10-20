import Contact from "./components/contact";
import Introtext from "./components/introtext";
import Navbar from "./components/navbar";
import Skills from "./components/skills";

export default function Homepage() {
    return (
        <div className="">
            <Navbar />
            <div className="w-full flex items-center justify-center">
                <div className="flex flex-col gap-10 mb-10">
                    <Introtext />
                    <Skills />
                    <Contact />
                </div>
            </div>
        </div>
    )
}