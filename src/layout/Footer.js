import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="container">

                <p>Develop by <Link target="_blank" to={`https://alizelabd.github.io/portfolio`}>AleizBahr</Link> &copy;{new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}
export default Footer;