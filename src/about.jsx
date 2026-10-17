import Navbar from "./components/navbar";

export default function About() {
    return (
        <div>
            <Navbar />

            <div>
                {/* Foto van mij */}
                <img src="src\assets\aboutpicture.png" />

                {/* Contact */}
                <div>
                    <a href="https://www.linkedin.com/in/mees-hoff-web-developer" target="_blank">LinkedIn</a>
                    <a href="https://github.com/MeesH1111" target="_blank">GitHub</a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=meeshoff2006@gmail.com&su=&body=" target="_blank">E-mail</a>
                </div>

                {/* Wie ik ben en wat ik nu aan het doen ben */}
                <div>
                    <p class="abouttext">
                        Ik ben Mees en zit nu in het tweede jaar van de studie CMGT op
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

                <div>
                    <h3 class="iconstext">
                        Icons by<a href="https://icons8.com/" target="_blank">Icons8</a>
                    </h3>
                </div>
            </div>
        </div>
    )
}