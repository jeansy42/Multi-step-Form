function CardHome({
  name,
  placeholder,
  type,
  hidden,
  updateState,
  value,
  alarm,
}) {
  return (
    <div className="form-container">
      <div className="label">
        <label htmlFor={name}>{name}</label>
        <label className="hidden" htmlFor={name}>
          {hidden}
        </label>
      </div>
      <input
        className={alarm}
        name={name}
        value={value}
        onInput={updateState}
        id={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default CardHome;
