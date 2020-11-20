import React from "react";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const App = props => {
  const account = useSelector(state => state.account);
  return (
    <>
      <h1>{account.name}</h1>
      <form>
        <Button variant="primary">Primary</Button>
      </form>
      <h2>{account.balance}</h2>
    </>
  );
};

export default App;