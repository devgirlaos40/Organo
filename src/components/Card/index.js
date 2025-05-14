import "./Card.css";

const Card = (props) => {
  let src = props.img_src;
  return (
    <li className="card_item">
      <div className="card">
        <div className={`card_header_ card_header_${props.time}`}></div>
        <div className="card_img">
          <img src={`/imagens/perfis/${src}`} alt="Foto Perfil" />
        </div>
        <div className="card_info">
          <p className="card_title">{props.nome}</p>
          <p className="card_desc">{props.cargo}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;
