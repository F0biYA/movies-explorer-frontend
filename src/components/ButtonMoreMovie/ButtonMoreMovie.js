import React from "react";
import './ButtonMoreMovie.css';

function ButtonMoreMovie(props) {
  return (
    <div className="moreMovie">
      <button onClick={props.loadMore} className={!props.hide ? props.freeCell > 0 ? "moreMovie__button hover" : "moreMovie__button_hide" : "moreMovie__button_hide"}>Ещё</button>
    </div>
  )
}
export default ButtonMoreMovie;
