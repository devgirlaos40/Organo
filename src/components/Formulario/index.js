import Dropdown from "../Dropdown";
import Input from "../Inputs";
import Subtitulo from "../Subtitulo";
import "./Formulario.css";

export const Formulario = () => {
  return (
    <form className="container_formulario" action="submit">
      <Subtitulo texto="Preencha os dados para criar o card do colaborador." />
      <div className="container_inputs">
        <Input labelName="Nome" placeholder="Digite aqui o seu nome..." />
        <Input labelName="Cargo" placeholder="Digite aqui o seu cargo..." />
        <Input
          labelName="Imagem"
          placeholder="Informe o endereço da imagem..."
        />
        <Dropdown labelName="Time" />
      </div>
      <button className="btn_formulario">Criar card</button>
    </form>
  );
};
