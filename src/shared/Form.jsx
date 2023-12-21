const Form = ({ inputs, field, onChange, formErrors }) => {
  return (
    <>
      {inputs.map((input, index) => (
        <div className="input-div" key={index + 1}>
          <label>{input.label}</label>
          <input
            {...input}
            value={field[input.name]}
            onChange={onChange}
          />
          {!formErrors[input.name]?.isValid
            ? formErrors[input.name]?.message
            : ""}
          {/* error=
          {!error[value.name]?.isValid && error[value.name]?.message
            ? true
            : false}
          helperText=
          {!error[value.name]?.isValid ? error[value.name]?.message : ""} */}
        </div>
      ))}
    </>
  );
};

export default Form;
