import Navigation from "../components/Navigation";

export default function Home (){
    return(
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className="content">
                    <h1>Allegria Kinzola</h1>
                    <h2>Développeur web fullstack et UX designeur</h2>
                    <div className="pdf">
                        <a href="./medias/CV_2023-01-07_Allegria_Kinzola (2).pdf"  target="_blank" download>Télécharger le CV</a>
                    </div>
                </div>
            </div>
        </div>
    )
}