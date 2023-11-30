import { useState } from "react";
import sail from "../img/sail.png";
import ayanad from "../img/ayanad.png";
import { rng } from "../functions/rng";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Regrading = () => {
  const grades = [
    "Grand",
    "Rare",
    "Arcane",
    "Heroic",
    "Unique",
    "Celestial",
    "Divine",
    "Epic",
    "Legendary",
    "Mythic",
    "Eternal",
  ];

  const [option, setOption] = useState("Ship components");
  const [grade, setGrade] = useState(grades[0]);
  const [multiplier, setMultiplier] = useState("1.0");
  const [disabled, setDisabled] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const itemMultipliers = {
    "1.0": 1.0,
    "1.5": 1.5,
    "2.0": 2.0,
    "2.5": 2.5,
  };

  const calculateChance = () => {
    const baseChances = {
      Grand: 50,
      Rare: 50,
      Arcane: 50,
      Heroic: 50,
      Unique: 50,
      Celestial: 50,
      Divine: 50,
      Epic: 50,
      Legendary: 10,
      Mythic: 5,
    };

    const baseChance = baseChances[grade] || 0;
    const selectedMultiplier = itemMultipliers[multiplier] || 1.0;
    const calculatedChance = baseChance * selectedMultiplier;

    return calculatedChance > 100 ? 100 : calculatedChance;
  };

  const chance = calculateChance();

  const handleRegrade = () => {
    const tap = rng();
    const fail = rng();
    const currentIndex = grades.indexOf(grade);
    setAttempts(attempts + 1);
    if (tap <= chance) {
      setGrade(grades[currentIndex + 1]);
    } else {
      if (currentIndex >= 8 && fail >= 20) {
        toast("Failure, item broke");
        setDisabled(true);
      } else {
        toast("Failure");
      }
    }
  };

  return (
    <div>
      <ToastContainer theme="dark" autoClose={1000} />
      <div className="flex gap-5 items-center mb-4">
        <p>Select what are you regrading</p>
        <select
          name="item"
          className="p-2"
          onChange={(e) => {
            setOption(e.target.value);
          }}
        >
          <option value="Ship components">Ship components</option>
          <option value="Ayanads">Ayanads</option>
        </select>
        <p>Select grade</p>
        <select
          name="grade"
          className="p-2"
          onChange={(e) => {
            setGrade(e.target.value);
          }}
        >
          <option value="Grand">Grand</option>
          <option value="Rare">Rare</option>
          <option value="Arcane">Arcane</option>
          <option value="Heroic">Heroic</option>
          <option value="Unique">Unique</option>
          <option value="Celestial">Celestial</option>
          <option value="Divine">Divine</option>
          <option value="Epic">Epic</option>
          <option value="Legendary">Legendary</option>
          <option value="Mythic">Mythic</option>
        </select>
        <p>Select multiplier</p>
        <select
          name="multiplier"
          className="p-2"
          onChange={(e) => {
            setMultiplier(e.target.value);
          }}
        >
          <option value="1.0">1.0x</option>
          <option value="1.5">1.5x</option>
          <option value="2.0">2.0x</option>
          <option value="2.5">2.5x</option>
        </select>
      </div>
      <div className="border p-5 flex items-center justify-between">
        <div className="relative">
          {option === "Ship components" ? (
            <img src={sail} alt="ship part" />
          ) : (
            <img src={ayanad} alt="ayanad" />
          )}
          <img
            src={`/src/assets/img/${grade}.png`}
            alt={grade}
            className="absolute left-0 top-0"
          />
        </div>
        <p>
          {option.toLowerCase() === "ship components"
            ? "Caernord Zephyr Triangular Rig"
            : "Ayanad Ocean Staff"}
        </p>
        <p>Current grade: {grade}</p>
        <p>Multiplier: {multiplier}x</p>
        <p>Chance: {chance}%</p>
      </div>

      <div className="flex justify-between items-center mt-5">
        <div className="flex gap-5">
          <button
            disabled={disabled}
            className={`uppercase ${
              disabled ? "bg-red-500 cursor-not-allowed" : ""
            }`}
            onClick={handleRegrade}
          >
            {disabled ? "item broke" : "regrade"}
          </button>
          <button
            className="uppercase"
            onClick={() => {
              setGrade(grades[0]);
              setDisabled(false);
              setAttempts(0);
            }}
          >
            restart
          </button>
        </div>
        <p>Attempts: {attempts}</p>
      </div>
    </div>
  );
};

export default Regrading;
