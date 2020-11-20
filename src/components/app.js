import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './App.css';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { addTransaction } from '../redux/actions'

const App = props => {
  const dispatch = useDispatch();

  const account = useSelector(state => state.account);
  const [amount, setAmount] = useState("");
  const [type, setType] = useState('CREDIT');
  const { balance, transactions } = account;

  const handleAmountChange = e => setAmount(e.target.value);
  const handleTypeChange = e => setType(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTransaction({
      amount: parseInt(amount),
      type
    }));
    setAmount("");
  };

  return (
    <div className="account">
      <h1 className="account-name">{account.name}</h1>
      <p className="balance">( ${balance} )</p>

      <div className="container">
        <form autoComplete="off" className="add-transaction">
          <FormControl component="fieldset" className="radios">
            <FormLabel component="legend">Type</FormLabel>
            <RadioGroup aria-label="type" name="type" value={type} onChange={handleTypeChange}>
              <FormControlLabel value="CREDIT" control={<Radio />} label="Credit" />
              <FormControlLabel value="DEBIT" control={<Radio />} label="Debit" />
            </RadioGroup>
          </FormControl>
          
          <TextField id="standard-basic" label="Transaction amount" type="number" placeholder="0" onChange={handleAmountChange} value={amount} />

          <Button variant="contained" color="primary" className="submit" disabled={amount === 0} onClick={handleSubmit}>
            Submit
          </Button>
        </form>

        <div className="transactions">
          { !transactions.length && <p>No transactions</p>}
          { transactions.length &&
            <div className="transactions-list">
              { transactions.map(transaction => (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    className="transaction"
                  >
                    <span className={`type ${transaction.type}`}>{transaction.type}</span>
                    <span className="amount">${transaction.amount}</span>
                  </AccordionSummary>
                  <AccordionDetails className="details">
                    <span className="type">Type: {transaction.type}</span>
                    <span className="amount">Amount: ${transaction.amount}</span>
                    <span className="date">Date: {transaction.effectiveDate}</span>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default App;