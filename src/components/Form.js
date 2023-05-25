/* eslint-disable*/
import React from 'react';
import paymentIcon from '../assets/paymentTimeicon.jpg';
import correctIcon from '../assets/correctIcon.jpg';
import uncorrectIcon from '../assets/uncorrectIcon.jpg';
import dotImage from '../assets/dots.PNG'
const Form = () => {
  return (
    <form>
     <div className="cardTitle edits">
                    <div className="description">
                        <h4>Card Number</h4>
                        <p>Enter the 15 digit card number on the card</p>
                    </div>
                    <div className="btn-desc">
                        <span onclick="editDetails()"><i className="fa-solid fa-pen"></i>Edit</span>
                    </div>
                </div>

                <div className="inputArea inputImage">
                    <img className="paymentIcon" src={paymentIcon} alt="payment-icon"/>
                    <input type="text" id="inputNumber" maxlength="19" />
                    <img className="correctIcon" src={correctIcon} alt="correctIcon" height="30px" width="30px"/>
                    <img className="uncorrectIcon" src={uncorrectIcon} alt="correctIcon" height="30px"
                        width="40px"/>
                </div>

                <div className="cardTitle">
                    <div className="description">
                        <h4>CVV Number</h4>
                        <p>Enter the 3 or 4 digit number on the card</p>e
                    </div>
                    <div className="dotImage">
                        <input type="password" className="form-control" placeholder="327" maxlength="3" />
                        <img src={dotImage} className="dotedPasswordImg" alt="passwordDot" width="35px" height="30px"/>
                    </div>
                </div>
                <div className="cardTitle">
                    <div className="description">
                        <h4>Expiry Date</h4>
                        <p>Enter the expiration date on the card</p>
                    </div>
                    <div className="expDate" id="inputNumberexp">
                        <input type="number" className="month" placeholder="09" min="1" max="31" />
                        <span className="dateSeparate">/</span>
                        <input type="number" className="year" placeholder="22" min="1" max="100"/>
                    </div>

                </div>
                <div className="cardTitle">
                    <div className="description">
                        <h4>Password</h4>
                        <p>Enter your Dynamic password</p>
                    </div>
                    <div className="passwords">
                        <input type="password" placeholder="********" maxlength="8" required/>
                        <img src={dotImage} className="dotedPasswordImag" alt="passwordDot" width="35px"
                            height="30px"/>
                    </div>
                </div>
                <button type="submit">Pay
                    Now</button>



    </form>
  )
}

export default Form