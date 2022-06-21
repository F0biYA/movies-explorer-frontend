import React from "react";
import './AccountButton.css';
import icon from '../../images/account-icon.svg';
import { Link } from "react-router-dom";

function AccountButton() {

  return (
    <Link to='/profile' className="accountButton hover">Аккаунт<img src={icon} className="accountButton__ico" alt="button"></img></Link>
  )
}
export default AccountButton;
