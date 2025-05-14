import Input from "../Inputs";
import Subtitulo from "../Subtitulo";
import "./Formulario.css";

export const Formulario = () => {
  return (
    <div className="container_formulario">
      <Subtitulo texto="Preencha os dados para criar o card do colaborador." />
      <div className="container_inputs">
        <Input labelName="Nome" />
        <Input labelName="Cargo" />
        <Input labelName="Imagem" />
        <Input labelName="Time" />
      </div>
      <button className="btn_formulario">Criar card</button>
    </div>
  );
};
