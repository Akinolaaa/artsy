import './product.styles.scss';



export default function Products(props) {

    

    return (
        <div className="productdiv">
            <div   className="productimg">
            <img  src={props.img} alt=""/>
            </div>
            <div className='productdetail'>
            <h4 className="productname">{props.name}</h4>
            <p className="productprice">{props.price}</p>
            </div>
        </div>
    )
}