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
      <div className="outputs"></div>
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
