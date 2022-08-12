const ATMForm = ({ onSubmit }) => {
  const [amount, setAmount] = React.useState(0);
  const [mode, setMode] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(amount, mode);
    setAmount(0);
  };
  return (
    <div>
      <label htmlFor="select">What would you like to do? </label>
      <select
        name="select"
        value={mode}
        onChange={(e) => setMode(e.target.value)}
      >
        <option disabled value="">
          --Select--
        </option>
        <option value="Deposit">Deposit</option>
        <option value="Withdraw">Withdraw</option>
      </select>
      <br />
      <br />
      {mode && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="input">Amount: </label>
          <input
            type="number"
            min={0}
            name="input"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <button type="submit">{mode}</button>
        </form>
      )}
    </div>
  );
};

const ATMAccount = () => {
  const [balance, setBalance] = React.useState(0);
  const handleSubmit = (amount, mode) => {
    setBalance((balance) => {
      if (mode === "Deposit") return balance + amount;
      else if (amount > balance) {
        alert("Insufficient Funds");
        return balance;
      }
      return balance - amount;
    });
  };

  return (
    <div className="app">
      <h1>Welcome</h1>
      <h2>Your balance is: ${balance}</h2>
      <ATMForm onSubmit={handleSubmit} />
    </div>
  );
};

//=================================================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ATMAccount></ATMAccount>);
