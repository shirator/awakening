import { useState } from "react";
import { rng } from "../functions/rng";

export default function Awakening() {
  const chance = 10;
  const [attempt, setAttempt] = useState(0);
  const [success, setSuccess] = useState(false);

  function regrade() {
    const tap = rng();
    const current_chance = chance + (attempt + 1) * 5;
    if (current_chance > tap) {
      setSuccess(true);
    }
    setAttempt(attempt + 1);
  }

  return (
    <div className="flex flex-col gap-5 items-center border-2 rounded-md p-10 min-h-8">
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
      <div className="flex flex-col gap-2 items-start text-xl w-72">
        <p>Success rate: {chance}%</p>
        <p>Bonus success rate: {attempt * 5}%</p>
        <p>Attempts: {attempt}</p>
        <p className={`text-${success ? "green" : "red"}-500`}>
          {attempt > 0
            ? success
              ? "gratz you got t2!"
              : "get better luck"
            : ""}
        </p>
      </div>
      <button
        className={`w-full uppercase ${
          success ? "bg-red-500 cursor-not-allowed" : ""
        }`}
        onClick={regrade}
        disabled={success}
      >
        Awake
      </button>
      <button
        onClick={() => {
          setSuccess(false);
          setAttempt(0);
        }}
        className="w-full uppercase"
      >
        restart
      </button>
    </div>
  );
}
