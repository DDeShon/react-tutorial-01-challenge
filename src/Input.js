const Input = ({ colorValue, setColorValue }) => {
  return (
    <form className="inputForm" onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name:</label>
      <input
        autoFocus
        type="text"
        placeholder="Add color name"
        required
        value={colorValue}
        onChange={(e) => setColorValue(e.target.value)}
      />
    </form>
  );
};

export default Input;
