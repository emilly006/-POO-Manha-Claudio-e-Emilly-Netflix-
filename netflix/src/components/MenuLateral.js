import './MenuLateral.css'
import { PiHouseFill } from "react-icons/pi";
import { GoCreditCard } from "react-icons/go";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { PiDevicesBold } from "react-icons/pi";
import { ImProfile } from "react-icons/im";

function MenuLateral() {
    return (
        <div className='lateral'>
            <div className="componet">
                <PiHouseFill color='#ffff' />
                <span>Visão geral</span>
            </div>
            <div className="componet">
                <GoCreditCard color='#ffff' />
                <span> Assinatura </span>
            </div>
            <div className="componet">
                <IoShieldCheckmarkOutline color='#ffff' />
                <span>Segurança
                </span>
            </div>
            <div className="componet">
                <PiDevicesBold color='#ffff' />
                <span> Aparelhos </span>
            </div>
            <div className="componet">
                <ImProfile color='#ffff' />
                <span> Perfis</span>
            </div>
        </div>

    )
}

export default MenuLateral