/* eslint-disable*/
import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <main className="contentMain">
     <div className="leftSide">
            <div className="head">
                <div className="logo">
                    <i className="fa-brands fa-red-river"></i>
                    <h2>AceCoin<span className="mutedColor">Pay</span></h2>
                </div>
                <div className="time">
                    <span className="timerBox" id="minute1">0</span>
                    <span className="timerBox" id="minute2">0</span>
                    <span className="timerDivider">:</span>
                    <span className="timerBox" id="second1">0</span>
                    <span className="timerBox" id="second2">0</span>
                </div>
            </div>

            <Form/>
    </div>
    </main>
  );
}

export default App;
