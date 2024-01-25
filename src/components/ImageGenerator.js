import OpenAI from "openai";
import { useState } from 'react';
import { Link } from "react-router-dom";
import Breadcrumb from "../layout/Breadcrumb";
import se from '../img/gallery.png';
const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true
});

function ImageGenerator() {
  const [prompt, setPropmt] = useState([]);
  const [value, setValue] = useState("");
  const generation = async () => {
    const imageParameters = {
      model: "dall-e-3",
      prompt: value,
      n: 1,
      // size: "256x256"
    }
    const response = await openai.images.generate(imageParameters);
    console.log(response.data[0].url);
    setPropmt(response.data[0].url);
    document.querySelector("#input").value = "";
  }
  return (
    <>
        {/* <Breadcrumb current={`اصنع صورة بالذكاء الأصطناعي`} /> */}
      <div className="container">
        <h3 className="text-center">اصنع الصور بالذكاء الأصطناعي</h3>
        <div className="box-image grid-center">
          <div className="image">
            {/* <img src={prompt === null ? se : prompt} alt="img" /> */}
            {prompt.map((imgs) =><img src={imgs.url} alt="img" />)}
          </div>
        </div>
        <div className="input-group mb-3">
          <button onClick={() => {
            generation()
          }} className="btn btn-dark" type="button" id="button-addon2">اصنع</button>
          <input type="text" id="input" className="form-control" placeholder="اكتب...." onChange={(e) => { setValue(e.target.value) }} aria-describedby="button-addon2" />
        </div>
      </div>
    </>
  );
}
export default ImageGenerator;