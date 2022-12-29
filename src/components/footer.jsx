import './footer.styles.scss';
import iemail from '../assets/iemail-icon.svg';
import ilocation from '../assets/ilocation-icon.svg'

export default function Footer(){
    return (
        <div className='footer'>
        <h2>NEWSLETTER</h2>
        <p>SUBSCRIBE TO OUR DAILY UPDATES AND NEWSLETTERS</p>
        <input placeholder="ENTER YOUR EMAIL HERE"/>
        <button className='subscribe'>SUBSCRIBE</button>

        <div className='details'>
            <h4>REACH US</h4>
            <span>
                <img alt="" src={iemail}/>
                <button>artsystudios@gmail.com</button>
            </span>
            <span>
                <img alt="" src={ilocation}/>
                <button>Lagos, Nigeria.</button>
            </span>
        </div>
        </div>
    )
}