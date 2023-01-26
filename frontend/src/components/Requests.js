import React from "react";
import requests from "./requests.json";

function Requests() {
  const data = requests;
  return (
    <div>
      <div className="grid place-content-center text-bold text-2xl subpixel-antialiased p-4">
        <h1>Active Requests</h1>
      </div>
      <div className="grid grid-cols-4 place-content-center justify-items-center py-8">
        {data.map(function (info) {
          return (
            <div className="p-8">
              <div className="shadow-2xl p-8">
                <p className="text-black text-xl text-bold subpixel-antialiased">
                  {info["bond number"]} {info.name}
                </p>
                <p>Needs: ${info.moneyRequested}</p>
                <p>For: {info.committee} </p>
                <p>Because: {info.reason}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Requests;
