const Form = ({ inputs }) => {
  return (
    <>
      {inputs.map((input, index) => (
        <div className="input-div" key={index + 1}>
          <label>{input.label}</label>
          <input {...input} />
          {input.showErrors && (
            <div key={index} style={{ color: "red" }}>
              {input.showErrors}{" "}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Form;
