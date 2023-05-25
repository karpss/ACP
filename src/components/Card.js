import appleLogo from "../assets/apple13.png";
import chip from "../assets/chip.jpg";
import wifi from "../assets/wifi.jpg";
import paymentIcon from "../assets/paymentTimeicon.jpg";

function Card() {
  return (
    <div className="rightSide">
      <div className="ticket">
        <div className="ticketContent">
          <div className="content">
            <ul>
              <li>Order Number</li>
              <li>comapany</li>
              <li>Product</li>
              <li>VAT(20%)</li>
            </ul>
          </div>
          <div className="contenttwo">
            <ul>
              <li>
                <img
                  src={appleLogo}
                  className="applelogo"
                  alt="apple"
                  width="13px"
                  height="13px"
                />
                apple
              </li>
              <li>1266201</li>
              <li>MacBook Air</li>
              <li>$100.00</li>
            </ul>
          </div>
        </div>
        {/* <div className="ticketBorder"></div> */}
        <div className="ticketend">
          <p>
            You have to pay <br /> <strong>549</strong>
            <span>.99 USD</span>
          </p>
          <i className="fa-sharp fa-solid fa-scroll" />
        </div>
      </div>
      <div className="creditCard">
        <div className="cardicon">
          <div className="chip">
            <img src={chip} alt="chip" height="40px" width="40px" />
          </div>
          <div className="wifi">
            <img src={wifi} alt="chip" height="30px" width="35px" />
          </div>
        </div>
        <div className="cardtitle">
          <h5>Jonathan Michael</h5>
          <h5 className="displayLastFour">
            <sup>**** 3456</sup>
          </h5>
        </div>
        <div className="cardEnd">
          <div className="divid">
            <h6 className="displaydigit">
              <sup>09/22</sup>
            </h6>
            <p>Expiry Date</p>
          </div>
          <div className="mastercardlogo">
            <img src={paymentIcon} alt="cardicon" height="30px" width="45px" />
            <p>mastercard</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
