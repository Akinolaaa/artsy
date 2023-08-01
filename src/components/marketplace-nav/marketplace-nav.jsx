import { Link } from "react-router-dom";
import './marketplace.styles.scss'

export default function MarketplaceNav() {
    return (
        <div className="marketplace">
            <Link to='/' > <p>Home/</p></Link>
            <Link to='/product' activestyle={{color: "grey"}}><p>Marketplace/Editorials</p></Link>
        </div>
    )
}