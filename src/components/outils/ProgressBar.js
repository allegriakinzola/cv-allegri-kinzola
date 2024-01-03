
const ProgressBar =  (props) => {
 const {title, className, languages} = props
 
        return(
           <div className={className}>
            <h3>{title}</h3>

            <div>
                {
                    languages.map(language => {
                        const xpYears = 2;
                        const progressbar = language.exp / xpYears * 100 + '%';
                        return(
                            <div key={language.id} className="languageListe">
                                <li>{language.value} </li>
                                <div className="progressbar" style={{width:progressbar}}></div>
                            </div>
                        )
                    })                
                    
                }
            </div>
           </div> 
        )
    }

    export default ProgressBar