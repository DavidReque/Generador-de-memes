import reactLogo from "./assets/react.svg";
import "./App.css";
import { useState } from "react";
import html2canvas from "html2canvas";

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");

  const onChangeLinea1 = (e) => {
    setLinea1(e.target.value);
  };

  const onChangeLinea2 = (e) => {
    setLinea2(e.target.value);
  };

  const imgSelect = (e) => {
    setImagen(e.target.value);
  };

  const onClickButton = (e) => {
    html2canvas(document.querySelector("#capture")).then((canvas) => {  
      var img = canvas.toDataURL('image/png');
      document.write('<img src="'+img+'"/>')

      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  };

  return (
    <div className="text-center">
      <select className="my-6 p-2 rounded-lg" onChange={imgSelect}>
        <option value="llamas" className="font-bold p-6">Casa en llamas</option>
        <option value="futurama" className="font-bold p-6">Futurama</option>
        <option value="history" className="font-bold p-6">History Chanel</option>
        <option value="Matrix" className="font-bold p-6">Matrix</option>
        <option value="raptor" className="font-bold p-6">Philosoraptor</option>
        <option value="smart" className="font-bold p-6">Smart guy</option>
      </select>{" "}
      <br />
      <input className="m-3 p-2 rounded-lg" type="text" placeholder="Linea 1" onChange={onChangeLinea1} />
      <br />
      <input className="m-1 p-2 rounded-lg" type="text" placeholder="Linea 2" onChange={onChangeLinea2} />
      <br />
      <button className="bg-cyan-500 p-2 my-4 rounded-lg hover:bg-cyan-900 hover:text-cyan-50" onClick={onClickButton}>Exportar</button>
      <div className="meme" id="capture">
        <span>{linea1}</span> <br />
        <span>{linea2}</span>
        <img className="w-16 md:w-32 lg:w-48" src={"public/img/" + imagen + ".jpg"} alt="" />
      </div>
    </div>
  );
}

export default App;
