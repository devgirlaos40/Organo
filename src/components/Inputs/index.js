import "./Input.css";
const Input = (labelName) => {
  return (
    <div className="container_input">
      <label htmlFor="input" className="label_input">
        {labelName.labelName}
      </label>
      <input
        type="text"
        id="input"
        className="input"
        placeholder={`Digite seu ${labelName.labelName}...`}
      />
    </div>
  );
};

export default Input;
