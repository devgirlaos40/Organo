import Card from "../Card";
import Subtitulo from "../Subtitulo";
import "./Bloco.css";

const Bloco = (props) => {
  let subtitulo = "";
  if (props.time === "programacao") {
    subtitulo = "Programação";
  } else if (props.time === "frontend") {
    subtitulo = "Front-End";
  } else if (props.time === "datascience") {
    subtitulo = "Data Science";
  } else if (props.time === "devops") {
    subtitulo = "DevOps";
  } else if (props.time === "uxdesing") {
    subtitulo = "UX-Design";
  } else if (props.time === "mobile") {
    subtitulo = "Mobile";
  } else if (props.time === "inovacao") {
    subtitulo = "Inovação e Gestão";
  } else {
    subtitulo = props.time;
  }

  return (
    <div className={`bloco_ bloco_${props.time}`}>
      <Subtitulo texto={subtitulo} />
      <div className={`rectangle_ rectangle_${props.time}`}></div>
      <div className={`bloco_cards_ bloco_cards_${props.time}`}>
        <ul className="card_container">
          <Card
            time={props.time}
            nome="Juliana Amoasei"
            img_src="Juliana.png"
            cargo="Desenvolvedora de software e instrutora"
          />
          <Card
            time={props.time}
            nome="Daniel Artine"
            img_src="Daniel.png"
            cargo="Engenheiro de Software na Stone Age"
          />
          <Card
            time={props.time}
            nome="Guilherme Lima"
            img_src="Guilherme.png"
            cargo="Desenvolvedor Python e JavaScript na Alura"
          />
          <Card
            time={props.time}
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
