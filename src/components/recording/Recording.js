import "./Recording.css";

const Recording = () => {
  return (
    <div className="recordings">
      <div className="paper-plane-animation">
        <i className="fa-regular fa-paper-plane"></i>
      </div>
      <div className="outputs"></div>
      <div className="inputs">
        <div className="row">
          <div className="icons">
            <i class="fa-solid fa-calendar-days"></i>
          </div>
          <input type="date" />
        </div>
        <div className="row">
          <div className="icons">
            <i class="fa-solid fa-sack-xmark"></i>
          </div>
          <input type="number" placeholder="Input Your Expenses" />
          <select className="expenses-type">
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
            <i className="fa-regular fa-paper-plane"></i>
          </button>
        </div>
        <div className="row">
          <div className="icons">
            <i class="fa-solid fa-money-bill-trend-up"></i>
          </div>
          <input type="number" placeholder="Input Your Income" />
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
            <i className="fa-regular fa-paper-plane"></i>
          </button>
        </div>
        <div className="row">
          <div className="icons">
            <i class="fa-solid fa-book"></i>
          </div>
          <input type="text" placeholder="Input Your Diary" />
          <button>
            <i className="fa-regular fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recording;
