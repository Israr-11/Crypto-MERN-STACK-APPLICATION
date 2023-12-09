import React from "react";
import { Route, Routes } from "react-router-dom";
import GetAll from "./crypto/GetAll";
import GroupPost from "./crypto/GroupPost";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GetAll />} />
        <Route path="/liked" element={<GroupPost />} />
      </Routes>
    </div>
  );
}

export default App;
