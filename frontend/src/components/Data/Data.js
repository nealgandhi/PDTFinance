import { React, useState, useEffect } from "react";
import "./Data.css";
import * as V from "victory";
import { VictoryChart, VictoryLine, VictoryTheme, VictoryBar } from "victory";
import data from "./data.json";

function Data() {
  return (
    <div>
      <h3>Fall 2022 Spending</h3>
      <div className="container max-mx-auto max-sm">
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc" },
            }}
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 7 },
            ]}
          />
        </VictoryChart>
      </div>
    </div>
  );
  // data.map(function (information) {

  // });
}

export default Data;
