import { useState, useEffect } from "react";
import React from "react";

function Form() {
  const [requestInfo, setRequestInfo] = useState({
    name: "",
    bondNumber: "",
    moneyRequested: "",
    committee: "",
    reason: "",
  });

  const handleChange = (event) => {
    setRequestInfo({ ...requestInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(requestInfo);
    setRequestInfo({
      name: "",
      bondNumber: "",
      moneyRequested: "",
      committee: "",
      reason: "",
    });
    if (requestInfo.name !== "") {
      const content = {
        content: "PDT Money Request",
        embeds: [
          {
            title:
              requestInfo.bondNumber +
              " " +
              requestInfo.name +
              " money request",
            description:
              "Needs " +
              requestInfo.moneyRequested +
              " because: " +
              requestInfo.reason,
            footer: {
              text: "For " + requestInfo.committee,
            },
          },
        ],
      };
      fetch(
        "https://discord.com/api/webhooks/1067161772290748496/pe6qG41MBlft6UJKViyzkE7dpRDtU4QhhXasaEz6XlAY8A_rLBk0rNm6zCpHONaueu4e",
        {
          method: "POST",
          body: JSON.stringify(content),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Request Form</h1>
          </div>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your name here"
              value={requestInfo.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="bondNumber"
              placeholder="Your bond number"
              value={requestInfo.bondNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="moneyRequested"
              placeholder="How much money do you need"
              value={requestInfo.moneyRequested}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="committee"
              placeholder="What Committee"
              value={requestInfo.committee}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="reason"
              placeholder="Reason"
              value={requestInfo.reason}
              onChange={handleChange}
            />
          </div>
          <div>
            <button>Submit Request</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
