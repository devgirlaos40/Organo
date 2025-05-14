import "./Card.css";

const Card = ({ time, nome, img_src, cargo }) => {
  let src = img_src;
  return (
    <li className="card_item">
      <div className="card">
        <div className={`card_header_ card_header_${time}`}></div>
        <div className="card_img">
          <img src={`/imagens/perfis/${src}`} alt="Foto Perfil" />
        </div>
        <div className="card_info">
          <p className="card_title">{nome}</p>
          <p className="card_desc">{cargo}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;
