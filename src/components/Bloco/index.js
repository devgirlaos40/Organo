import Card from "../Card";
import Subtitulo from "../Subtitulo";
import "./Bloco.css";

const Bloco = ({ time }) => {
  let subtitulo = "";
  if (time === "programacao") {
    subtitulo = "Programação";
  } else if (time === "frontend") {
    subtitulo = "Front-End";
  } else if (time === "datascience") {
    subtitulo = "Data Science";
  } else if (time === "devops") {
    subtitulo = "DevOps";
  } else if (time === "uxdesing") {
    subtitulo = "UX-Design";
  } else if (time === "mobile") {
    subtitulo = "Mobile";
  } else if (time === "inovacao") {
    subtitulo = "Inovação e Gestão";
  } else {
    subtitulo = time;
  }

  return (
    <div className={`bloco_ bloco_${time}`}>
      <Subtitulo texto={subtitulo} />
      <div className={`rectangle_ rectangle_${time}`}></div>
      <div className={`bloco_cards_ bloco_cards_${time}`}>
        <ul className="card_container">
          <Card
            time={time}
            nome="Juliana Amoasei"
            img_src="Juliana.png"
            cargo="Desenvolvedora de software e instrutora"
          />
          <Card
            time={time}
            nome="Daniel Artine"
            img_src="Daniel.png"
            cargo="Engenheiro de Software na Stone Age"
          />
          <Card
            time={time}
            nome="Guilherme Lima"
            img_src="Guilherme.png"
            cargo="Desenvolvedor Python e JavaScript na Alura"
          />
          <Card
            time={time}
            nome="Paulo Silveira"
            img_src="Paulo.png"
            cargo="Hipster e CEO da Alura"
          />
        </ul>
      </div>
    </div>
  );
};

export default Bloco;
