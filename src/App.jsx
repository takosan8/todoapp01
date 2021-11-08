import { useState } from "react";
import "./styles.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("tab1");
  const onClickActive1 = () => {
    setActiveTab("tab1");
  };
  const onClickActive2 = () => {
    setActiveTab("tab2");
  };
  return (
    <>
      <div>
        <div className="header">
          <h1>2021/11/08</h1>
        </div>
        <div className="container">
          <h2>Functions</h2>
          <p>天気 時間 時間別ソート</p>
          <div className="button-area">
            <button
              className={activeTab === "tab1" ? "active-btn" : "inactive-btn"}
              onClick={onClickActive1}
            >
              Incomplete
            </button>
            <button
              className={activeTab === "tab2" ? "active-btn" : "inactive-btn"}
              onClick={onClickActive2}
            >
              Done
            </button>
          </div>
          {/* tab01 */}
          <div className={activeTab === "tab1" ? "tab tab-done active" : "tab"}>
            <ul className="list-incomplete">
              <div className="list-row">
                <li>
                  <input type="checkbox" />
                  TASK A
                </li>
                <li>
                  <input type="checkbox" />
                  TASK B
                </li>
              </div>
            </ul>
          </div>
          {/* tab02 */}
          <div
            className={activeTab === "tab2" ? "tab tab-incomplete active" : "tab"}
          >
            <ul>
              <div className="list-row">
                <li>
                  <input type="checkbox" checked />
                  TASK C
                </li>
                <li>
                  <input type="checkbox" checked />
                  TASK D
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
