import { Link } from "react-router-dom";
import gallery from '../img//gallery.png';
import chatbot from '../img/chatbot.png';
import textToSpeech from '../img/mic.png';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
function Home() {
    return (
        <>
            <Header />
            <div className="container">
                <div className="boxes grid-system">
                    <Link to="/ImageGenerator">
                        <div className="box">
                            <img className="img-link" src={gallery} alt='image' />
                            <p className="text-link">اكتب اي شيء ليصنع لك الذكاء الأصطناعي صورة</p>
                        </div>
                    </Link>
                    <Link to="/Chatgpt">
                        <div className="box">
                            <img className="img-link" src={chatbot} alt='chatbot' />
                            <p className="text-link">اسأل ChatGPT</p>
                        </div>
                    </Link>
                    <Link to="/Texttospeech">
                        <div className="box">
                            <img className="img-link" src={textToSpeech} alt='textToSpeech' />
                            <p className="text-link">تحويل النص إلى صوت</p>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Home;