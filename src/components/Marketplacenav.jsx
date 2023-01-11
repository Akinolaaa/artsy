import { Link } from "react-router-dom";
import './marketplace.styles.scss'
export default function Marketplacenav() {
    return (
        <div className="marketplace">
        <Link to='/' > <p>Home/</p></Link>
        <Link to='/product' activeStyle={{color: "grey"}}><p>Marketplace/Editorials</p></Link>
    
        </div>

        
    )
}