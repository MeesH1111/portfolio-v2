import { useState } from "react"

export default function Introtext() {
    const [animationFinished, setAnimationFinished] = useState(false);

    return (
        <div className="flex items-center flex-col font-josefin">
            <h2 className="text-[1.2em] font-medium">This is the portfolio of</h2>

            {/* <h1 className="text-[8em] font-medium hover:text-[#000]/0 hover:text-shadow-[30px_15px_0_#d8115a8e,-30px_-15px_0_#11D88F] duration-300">MEES HOFF</h1>
            <h1 className="text-[8em] font-medium hover:text-[#000]/60 hover:text-shadow-[30px_15px_0_#d8115a8e,-30px_-15px_0_#11D88F] duration-300">MEES HOFF</h1>
            <h1 className="text-[8em] font-medium hover:text-[#115AD8]/60 hover:text-shadow-[30px_15px_0_#d8115a8e,-30px_-15px_0_#11D88F] duration-300">MEES HOFF</h1>
            <h1 className="text-[8em] font-medium hover:text-shadow-[30px_15px_0_#d8115a8e,60px_30px_0_#FBCBDD] duration-300">MEES HOFF</h1> */}

            <h1 id="name" onAnimationEnd={(event) => {
                if (event.animationName === "fx-stamp") {
                    setAnimationFinished(true);
                }
            }}
                className={`text-[8em]/[1] text-center justify-center font-medium px-[0.5em] py-[0.25em] animate-stamp [animation-delay:1000ms] [animation-fill-mode:backwards] ${animationFinished ? "hover:text-[#000]/0 hover:text-shadow-[30px_15px_0_#d8115a8e,-30px_-15px_0_#11D88F] duration-300" : ""}`}>MEES HOFF</h1>

            <h2 className="text-[1.2em] font-medium -mt-[24px]">Student and web developer from Rotterdam</h2>
        </div>
    )
}