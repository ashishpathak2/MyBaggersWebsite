import React from "react";

function TrendingBar({Url,name}) {
  return (
    <div>
       
      <a href="/">
        <div className="tb-card">
            <img src={Url} alt="" />
            <p>{name}</p>
            </div>
      </a>

    </div>
  );
}

export default TrendingBar;
