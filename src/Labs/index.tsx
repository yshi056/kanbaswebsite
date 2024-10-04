import { Routes, Route } from "react-router";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import TOC from "./TOC";

export default function Labs() {
  return (
    <div id="wd-lab1">
      <h1>Labs</h1>
      <h2>Yang Shi Sec01</h2>
      <TOC />
      <Routes>
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
      </Routes>
    </div>
  );
}
