import './product.styles.scss';


export default function Products(props) {
    return (
        <div className="productdiv">
            <img className="productimg"  src={props.img} alt=""/>
            <div className='productdetail'>
            <h4 className="productname">{props.name}</h4>
            <p className="productprice">{props.price}</p>
            </div>
        </div>
    )
}