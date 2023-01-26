import { useState } from "react";
import React from "react";

function Form() {
  const WEBHOOK_KEY = process.env.REACT_APP_DISCORD_WEBHOOK_KEY;
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
        `https://discord.com/api/webhooks/1067891163916402748/${WEBHOOK_KEY}`,
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
    <div className="grid h-screen place-content-center">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <h1 className="grid place-content-center text-bold text-xl subpixel-antialiased">
              Request Form
            </h1>
          </div>
          <div>
            <h3>Name</h3>
            <input
              type="text"
              name="name"
              value={requestInfo.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3>Bond Number</h3>
            <input
              type="number"
              name="bondNumber"
              value={requestInfo.bondNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3>How much money do you need?</h3>
            <input
              type="number"
              name="moneyRequested"
              value={requestInfo.moneyRequested}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3>What committee is this related to?</h3>
            <select
              type="text"
              name="committee"
              value={requestInfo.committee}
              onChange={handleChange}
            >
              <option>Awards</option>
              <option>Brotherhood</option>
              <option>Chaplain</option>
              <option>Exec</option>
              <option>Fundraising</option>
              <option>Historian</option>
              <option>Housing</option>
              <option>Media</option>
              <option>Pallas</option>
              <option>Phikeia</option>
              <option>Philanthropy</option>
              <option>Pres</option>
              <option>Quartermaster</option>
              <option>Recruitment</option>
              <option>Relations</option>
              <option>Risk Management</option>
              <option>Scholarship</option>
              <option>Service</option>
              <option>Social</option>
              <option>Unallocated</option>
              <option>Vice Pres</option>
              <option>Warden</option>
            </select>
          </div>
          <div>
            <h3>Why?</h3>
            <textarea
              type="textarea"
              rows="10"
              cols="30"
              name="reason"
              value={requestInfo.reason}
              onChange={handleChange}
            />
          </div>
          <div>
            {/* add padding here to make the button not look dumb */}
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
