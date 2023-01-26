import React from "react";

function Home() {
  return (
    <div>
      <p>Welcome to Finance Website for the TX Upsilon Chapter of ΦΔΘ</p>
      <p>
        If you are the super cool admin guy please log in (if you are the
        budger)
      </p>
      <ul>
        <p>
          <a href="/request">Requests Form</a>
        </p>
        <p>
          <a href="/requests">Active Requests</a>
        </p>
        <p>
          <a href="/overview">Spending Overview</a>
        </p>
      </ul>
    </div>
  );
}

export default Home;
