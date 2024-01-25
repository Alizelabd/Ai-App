import { Link } from "react-router-dom";
function Header() {
    return (
        <header>
            <div className="container">

                <h1 className="head-title">تمتع بخدمات الذكاء الأصطناعي مجاناً</h1>
                {/* <nav>
                    <ul className="main-menu">
                        <li><Link to={"/"}>الصفحة الرئيسية</Link></li>
                    </ul>
                </nav> */}
            </div>
        </header>
    );
}
export default Header;