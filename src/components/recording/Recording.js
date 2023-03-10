import "./Recording.css";

const Recording = () => {
  var timeoutID;
  const pushPaperPlaneAnimation = () => {
    document.body.style.setProperty("--paper-plane-animation", "");
    document.body.style.setProperty(
      "--paper-plane-animation",
      "paper-plane-animation"
    );
    try {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        document.body.style.setProperty("--paper-plane-animation", "");
      }, 3200);
    } catch (error) {
      console.log("error : ", error);
    }
  };
  return (
    <div className="recordings">
      <div id="paper-plane-animation" className="paper-plane-animation">
        <i className="fa-regular fa-paper-plane"></i>
      </div>
      {/* top section  */}

      <div className="outputs">
        <div className="recording-list">
          <div className="list-item income">
            <div className="money-date">
              <p>500</p>
              <p>22/6/2023</p>
            </div>
            <div className="type">
              <p>Food and Drink and whatever</p>
            </div>
          </div>
          <div className="list-item expenses">
            <div className="money-date">
              <p>500</p>
              <p>22/6/2023</p>
            </div>
            <div className="type">
              <p>Food and Drink and whatever</p>
            </div>
          </div>
          <div className="list-item diary">
            <p>22/6/2023</p>
            <p>
              Today i went to get some food from supermaket but unfourtnatly i
              didn't found what i want
            </p>
          </div>
          <div className="list-item">3</div>
          <div className="list-item">4</div>
          <div className="list-item">5</div>
          <div className="list-item">6</div>
        </div>
        <div className="summary"></div>
      </div>

      {/* bottom section  */}

      <div className="inputs">
        <div className="row">
          <div className="icons">
            <i className="fa-solid fa-calendar-days"></i>
          </div>
          <input type="date" className="date" />
        </div>
        <div className="row">
          <div className="icons">
            <i className="fa-solid fa-sack-xmark"></i>
          </div>
          <input type="number" placeholder="Your Expenses" />
          <select className="expenses-type">
            <option value="Food">Food and Drink and whatever</option>
            <option value="Food">Food</option>
            <option value="Food">Food</option>
            <option value="Food">Food</option>
            <option value="Food">Food</option>
            <option value="Food">Food</option>
            <option value="Food">Food</option>
          </select>
          <button>
            <i
              className="fa-regular fa-paper-plane"
              onClick={pushPaperPlaneAnimation}
            ></i>
          </button>
        </div>
        <div className="row">
          <div className="icons">
            <i className="fa-solid fa-money-bill-trend-up"></i>
          </div>
          <input type="number" placeholder="Your Income" />
          <select className="income-type">
            <option value="Food">Food</option>
            <option value="Food">Food</option>
            <option value="Food">Food</option>
            <option value="Food">Food</option>
            <option value="Food">Food</option>
            <option value="Food">Food</option>
            <option value="Food">Food</option>
            <option value="Food">Food</option>
          </select>
          <button>
            <i
              className="fa-regular fa-paper-plane"
              onClick={pushPaperPlaneAnimation}
            ></i>
          </button>
        </div>
        <div className="row">
          <div className="icons">
            <i className="fa-solid fa-book"></i>
          </div>
          <textarea rows={1} placeholder="Write Your Diary"></textarea>
          <button>
            <i
              className="fa-regular fa-paper-plane"
              onClick={pushPaperPlaneAnimation}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recording;
