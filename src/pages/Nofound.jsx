import { Link } from 'react-router-dom'

export default function Notfound (){
    return(
        <div className="notFound" >
            <div className="notFoundContent">
                <h3>Désolé cette page n'existe pas !</h3>
                <Link exact to='/'>
                <i className="fas fa-home"></i>
                <span>Accueil</span>
                </Link>
            </div>
        </div>
    )
}