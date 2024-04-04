const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
  };
  export function accountReducer(state = initialStateAccount, action) {
    switch (action.type) {
      case "account/deposit":
        return { ...state, balance: state.balance + action.payload };
  
      case "account/withdraw":
        return {
          ...state,
          balance: state.balance - action.payload,
        };
  
      case "account/requestLoan":
        if (state.loan > 0) return state;
        //later
        return {
          ...state,
          loan: action.payload.amount,
          loanPurpose: action.payload.purpose,
          balance: state.balance + action.payload.amount,
        };
  
      case "account/payloan":
        return {
          ...state,
          loan: 0,
          loanPurpose: "",
          balance: state.balance - state.loan,
        };
  
      default:
        return state;
    }
  }
  // account action creators
 export function deposit(amount , currency) {
    console.log(amount, currency);
    if(currency === 'INR') return {type : "account/deposite" ,payload: amount};
    return async function (dispatch, getState){
  //API call
   const res = await fetch(
    `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=INR`
   );
   const data = await res.json();
   console.log(data);
   const converted = data.rates.INR;
   dispatch({type:"account/deposit", payload: converted});
    };
  }
  
  export function withDraw(amount) {
    return { type: "account/withdraw", payload: amount };
  }
  
  export function requestLoan(amount, purpose) {
    return {
      type: "account/requestLoan",
      payload: { amount: amount, purpose: purpose },
    };
  }
  
  export function payLoan() {
    return {
      type: "account/payloan",
    };
  }
  