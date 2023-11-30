import { useState } from "react";
import { temper_chance } from "../functions/temper_chance";
import { temper_rng, rng } from "../functions/rng";
import { Link } from "react-router-dom";

const Tempering = () => {
  const [currentTemper, setCurrentTemper] = useState(10);
  const [attempts, setAttempts] = useState(0);
  const [attemptCurrent, setAttemptCurrent] = useState(0);
  const [success, setSuccess] = useState(false);

  function temper() {
    const tap = temper_rng();
    const bonus = rng();
    if (temper_chance[currentTemper - 10] * 2 >= tap) {
      setSuccess(true);
      setAttemptCurrent(0);
      if (bonus <= 20 && currentTemper < 29) {
        setCurrentTemper(currentTemper + 2);
      } else {
        setCurrentTemper(currentTemper + 1);
      }
    } else {
      setAttemptCurrent(attemptCurrent + 1);
      setSuccess(false);
    }
    setAttempts(attempts + 1);
  }
  return (
    <div
      className={`${
        success
          ? "border-green-500"
          : attempts > 0
          ? "border-red-500"
          : "border"
      } flex flex-col gap-5 items-center border-2 rounded-md p-10 min-h-8`}
    >
      <h1>Temper</h1>
      <div className="flex gap-5 items-center justify-between w-64">
        <p className="uppercase font-semibold">Starting temper:</p>
        <select
          name="starting_temper"
          value={currentTemper}
          onChange={(e) => setCurrentTemper(parseInt(e.target.value))}
          className="p-2"
        >
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
        </select>
      </div>

      <div className="relative w-fit">
        <img
          src="https://aacalc.ru/db/img/items_ico/icon_item_4544.png"
          alt="bd nodachi"
          className="w-20"
        />
        <img
          src="https://aacalc.ru/db/img/grades//icon_grade12.png"
          alt="eternal"
          className="absolute left-0 top-0 w-20"
        />
      </div>
      <div className="text-xl text-start flex flex-col gap-2">
        <p>+{currentTemper} Wrathful Black Dragon Wing-Reaper</p>
        <p>Current chance: {temper_chance[currentTemper - 10]}%</p>
        <p>Total attempts on current temper: {attemptCurrent}</p>
        <p>Total attempts: {attempts}</p>
      </div>
      <div className="flex gap-5">
        <button
          onClick={temper}
          className={`w-full uppercase ${
            currentTemper == 30 ? "bg-red-500 cursor-not-allowed" : ""
          }`}
          disabled={currentTemper == 30}
        >
          temper
        </button>
        <button
          onClick={() => {
            setSuccess(false);
            setAttempts(0);
            setAttemptCurrent(0);
            setCurrentTemper(10);
          }}
          className="w-full uppercase"
        >
          reset
        </button>
      </div>
      <Link to={"/"}>Homepage</Link>
    </div>
  );
};

export default Tempering;
