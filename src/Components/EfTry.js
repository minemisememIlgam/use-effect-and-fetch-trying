import { useState, useEffect } from "react";
function EfTry() {
  const [isForm, setIsForm] = useState(true);
  const [count, setCount] = useState(0);

  const [result, setResult] = useState("");

  useEffect(() => {
    fetch("https://64243b8e4740174043366e0e.mockapi.io/items")
      .then((response) => response.text())
      .then((data) => setResult(data));
  }, []);

  const [fromServer, setFromServer] = useState(true);

  useEffect(() => {
    setFromServer(!fromServer);
  }, [count]);
  const showOrHide = () => {
    setIsForm(!isForm);
  };
  const countChanger = () => {
    setCount(count + 2);
  };

  useEffect(() => {
    return () => {
      setCount(count + 500);
    };
  }, [isForm]);
  return (
    <div className="formBlock">
      {isForm ? (
        <form>
          <label>
            Name:
            <br />
            <input type="text" />
          </label>
          <br />
        </form>
      ) : null}

      {fromServer ? <h1> {result} </h1> : null}

      <button onClick={() => showOrHide()}>Show or Hide!</button>
      <h1>Counter: {count} </h1>
      <button onClick={countChanger}> + 2 </button>
    </div>
  );
}

export default EfTry;
