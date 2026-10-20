import Navbar from "./components/navbar";

export default function About() {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center">
                <div className="max-w-[1000px] flex flex-col items-center mb-10">
                    <h1 className="mb-20 text-[1.5em] hover:text-[#000]/0 hover:text-shadow-[5px_2.5px_0_#d8115a8e,-5px_-2.5px_0_#11D88F] duration-300">About</h1>

                    {/* Foto van mij */}
                    <div className="flex flex-row gap-20">
                        <div>
                            <img src="src\assets\personalpicture.png" width="200px" className="rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_4px_8px_rgba(0,0,0,0.5)] duration-200 ease-[cubic-bezier(0.78,0,0.22,1)]" />
                        </div>

                        {/* Wie ik ben en wat ik nu aan het doen ben */}
                        <div className="flex flex-col gap-4 max-w-[500px]">
                            <p class="abouttext">
                                Ik ben Mees en zit nu in het vierde jaar van de studie CMGT op
                                Hogeschool Rotterdam. Hier doe ik dingen die te maken hebben met het
                                programmeren en ontwerpen van websites. In allerlei verschillende
                                soorten talen zoals HTML & CSS, Javascript, PHP en tools zoals Figma
                                om wireframes te ontwerpen.
                            </p>

                            {/* Wat vind ik het leukst en wat is mijn passie in wat ik nu aan het doen ben */}
                            <p class="abouttext">
                                Ik vind het erg leuk om websites te ontwerpen met een unieke
                                uitstraling en subtiele
                                interactieve
                                toevoegingen. Om ze daarna efficiënt te programmeren met een extra
                                focus op toegankelijkheid.
                            </p>

                            {/* Personal accomplishments */}
                            <p class="abouttext">
                                Gedurende deze studie heb ik vaak in teams gewerkt om gezamenlijk
                                één product te maken. Dit is niet altijd een website maar vaak wel.
                                Zo heb ik met een team een website gemaakt voor opdrachtgevers iO
                                Digital & Open Hiring waar werkzoekende gemakkelijk een baan kunnen
                                vinden.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}