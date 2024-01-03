import { Component } from "react";
import ProgressBar from './ProgressBar'

class Languages extends Component {
    state = {
        languages : [
            { id:1, value:'HTML', exp:1.8 },
            { id:2, value:'Css', exp:2 },
            { id:3, value:'Javascript', exp:1.9 },
            { id:1, value:'Python', exp:1.7 }
        ],
        frameworks : [
            { id:1, value:'React', exp:1.2 },
            { id:2, value:'Telwin', exp:0.9 },
            { id:3, value:'node js', exp:1.9 },
            { id:1, value:'sass', exp:1.7 }
        ]

    }
        
    render(){
        const {languages, frameworks} = this.state
        return(
            <div className="languagesFramworks">
                <ProgressBar
                 languages={languages} 
                 className='langagesDisplay'
                 title='languages'
                 />
                <ProgressBar 
                languages={frameworks}
                className='frameworksDisplay'
                title='frameworks et bibliothèques'
                />
            </div>
        )
    }

}

export default Languages