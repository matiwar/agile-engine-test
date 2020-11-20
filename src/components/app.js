import React, { useState } from "react";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const App = props => {
  const account = useSelector(state => state.account);
  const [amount, setAmount] = useState(0);
  const { balance } = account;

  const handleChange = e => setAmount(e.target.value);

  return (
    <div className="container">
      <h1 className="account-name">{account.name}</h1>
      <p className="balance">($ {balance})</p>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Transaction amount</Form.Label>
          <Form.Control type="number" placeholder="0" onChange={handleChange}/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default App;