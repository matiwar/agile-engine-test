import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './AddTransaction.css';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

import { addTransaction } from '../../redux/actions'

const Component = () => {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState("");
  const [type, setType] = useState('CREDIT');

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
  );
};

export default Component;