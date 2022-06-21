import React from "react";
import './ButtonMoreMovie.css';

function ButtonMoreMovie({hide}) {

  return (
    <div className="moreMovie">
      <button className={!hide ? "moreMovie__button hover" : "moreMovie__button_hide"}>Ещё</button>
    </div>
  )
}
export default ButtonMoreMovie;
