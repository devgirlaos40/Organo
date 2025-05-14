import "./Input.css";
const Input = (props) => {
  return (
    <div className="container_input">
      <label htmlFor="input" className="label_input">
        {props.labelName}
      </label>
      <input
        type="text"
        id="input"
        className="input"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
