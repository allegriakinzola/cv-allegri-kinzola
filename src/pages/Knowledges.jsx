import Navigation from "../components/Navigation";
import Experience from "../components/outils/Experience";
import Hobbies from "../components/outils/Hobbies";
import Languages from "../components/outils/Languages";
import OtherSkills from "../components/outils/OtherSkills";

export default function Knowledges (){
    return(
        <div className="knowledges">
            <Navigation/>
            <div className="KnowledgesContent">
                <Languages/>
                <Experience/>
                <OtherSkills/>
                <Hobbies/>
            </div>
        </div>
    )
}