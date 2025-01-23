// 1ª seção: importações ----------------------------------------
import '../components/CardPerfil.css'
import {Link} from 'react-router-dom'

//a entrada de um componente deve estar dentro de chaves.
//de quiser mais de uma entrada separa por virgula.

function CardPerfil({usuario}){
    return (
    
        <Link to={'/home'} className='card-perfil' >
            <img className='foto' src={usuario.foto}/>
            <span className='nome'>{usuario.nome}</span>
    
        </Link>
    );
}

// 3ª seção: exportação ----------------------------------------
export default CardPerfil;