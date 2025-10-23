import { FaFacebookF ,FaLinkedinIn} from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import './Footer.css';
const Footer = () =>{
  return (<>
  <div className="footer_container">
    <div className="logo">
        Arshin
    </div>
    <div className="footer">
      <h1>© 2025 Arshin Ansari All Rights Reserved. </h1>
    </div>
    <div className="icon">
      <h3><FaFacebookF /></h3>
      <h3><FaLinkedinIn /></h3>
      <h3><IoLogoTwitter /></h3>
    </div>
  </div>
  </>)
}

export default Footer ;