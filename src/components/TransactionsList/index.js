import React from "react";
import { useSelector } from "react-redux";
import './TransactionsList.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Component = () => {
  const account = useSelector(state => state.account);
  const { transactions } = account;

  return (
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
  );
};

export default Component;