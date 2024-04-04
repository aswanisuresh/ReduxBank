import React from "react";
import CreateCustomer from "./Features/Customer/CreateCustomer";
import Customer from "./Features/Customer/Customer";
import AccountOperations from "./Features/Account/AccountOperation";
import BalanceDisplay from "./Features/Account/BalanceDisplay";
import { useSelector } from "react-redux";

const App = () => {

  const fullName = useSelector((state) => state.customer.fullName);
  return (
    <div>
      <h1>Welcome to Aswani's Bank 🏦</h1>
      {fullName === ""? (
      <CreateCustomer />
      ) : (
        <>
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
      </>
      )}
    </div>
  );
};

export default App;