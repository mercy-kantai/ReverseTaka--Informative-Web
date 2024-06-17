import './index.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";



function Contact(){
    return(
        <div className='footer'>
            <h3>Contact Us On</h3>
            <div className='contactInfo'>
            <div>
            <span className='icon'><BsFillTelephoneFill size= '2.5rem' color='#FFFFFF' /></span>
                <p>+254 793 244 456</p>
                <p>+254 786 965 766</p>
                <p>+254 742 052 402</p>
                <p>+254 704 264 110</p>
                <p>+254 712 345 678</p>
            </div>
            <div>
                <span className='icon'><FaMapMarkerAlt size= '2.5rem' color='#FFFFFF'/></span>
                <p>Unit no. 75 ReverseTaka Industry Nairobi</p>
            </div>
            <div >
                <span className='icon'><MdEmail size= '2.5rem' color='#FFFFFF'/></span>
                <p>akwangdeu@gmail.com</p>
                <p>natalywambui@gmail.com</p>
                <p>kantaimercy@gmail.com</p>
                <p>ivywanjiku@gmail.com</p>
                <p>maureenmwendwa@gmail.com</p>
            </div>
            </div>
        </div>
    );
}
export default Contact;