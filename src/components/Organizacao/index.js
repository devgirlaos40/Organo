import Bloco from "../Bloco";
import "./Organizacao.css";

const Organizacao = () => {
  return (
    <div className="organizacao">
      <p className="titulo">Minha Organização:</p>
      <div className="rectangle"></div>
      <Bloco time="programacao" />
      <Bloco time="frontend" />
      <Bloco time="datascience" />
      <Bloco time="devops" />
      <Bloco time="uxdesing" />
      <Bloco time="mobile" />
      <Bloco time="inovacao" />
    </div>
  );
};

export default Organizacao;
