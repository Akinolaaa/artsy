import './product-card.styles.scss';


// Marketplace product card
export default function ProductCard({key, img, name, price }) {

    return (

        <div className="productdiv" key={key} >
            {/* onClick={props.click} */}
            <div className="productimg">
                <img  src={img} alt=""/>
            </div>
            <div className='productdetail'>
                <h4 className="productname">{name}</h4>
                <p className="productprice">{price}</p>
            </div>
        </div>
        
    )
}