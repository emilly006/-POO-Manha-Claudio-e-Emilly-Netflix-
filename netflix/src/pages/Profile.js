
import './Profile.css'
import SelecaoPerfil from '../components/SelecaoPerfil'
import chase from '../img/chase.webp'
import roxo from '../img/roxo.jpg'
import azul from '../img/azul.jpg'
import rocky from '../img/rocky.png'
import skye from '../img/skye.jpg'

function Profile(){ 
    const usuario1 = { nome: "claudio", foto: rocky }
    const usuario2 = { nome: 'Emilly', foto: roxo }
    const usuario3 = { nome: 'adriely', foto: chase }
    const usuario4 = { nome: 'karol', foto: skye }
    const usuario5 = { nome: 'alexander', foto: azul }
    
    const usuarios = [usuario1, usuario2, usuario3, usuario4, usuario5]

    return(
        <SelecaoPerfil listaDeUsuarios={usuarios}/>
    )
}
    export default Profile;

