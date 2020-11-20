
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const ADD_TRANSACTION_SUCCESS = 'ADD_TRANSACTION_SUCCESS';

function addTransactionSuccess(json) {
  return {
    type: ADD_TRANSACTION_SUCCESS,
    payload: json
  }
}

export function addTransaction(body) {
  const request = {
    method: 'POST',
    body: JSON.stringify(body),
    headers:{
      'Content-Type': 'application/json'
    }
  };

  return dispatch => {
    dispatch({
      type: ADD_TRANSACTION,
    });

    return fetch(`/api/transactions`, request)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(`Request rejected with status ${response.status}`);
        }
      })
      .then(json => dispatch(addTransactionSuccess(json)));
  }
}