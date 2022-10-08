import React from "react";
import "./styles.css";
import { useState } from "react";

const workoutDB = {
  push: [
    {
      name: "Bench press",
      importance: "9/10",
      description:
        "This workout targets chest primarily and shoulder,triceps secondarily"
    },
    {
      name: "Shoulder press",
      importance: "5/10",
      description: "This workout targets front and mid delts primarily "
    },
    {
      name: "Tricep dips",
      importance: "7/10",
      description:
        "This workout targets tricep primarily and also tough for fat beginners"
    }
  ],
  pull: [
    {
      name: "Barbell row",
      importance: "9/10",
      description:
        "This workout targets back primarily and bicep,forearms secondarily"
    },
    {
      name: "Bicep curls",
      importance: "7/10",
      description: "This workout targets biceps primarily"
    },
    {
      name: "Reverse fly",
      importance: "6/10",
      description: "This workout targets rear delts primarily"
    }
  ],
  leg: [
    {
      name: "Squats",
      importance: "9/10",
      description:
        "This workout targets glutes primarily and quadriceps secondarily"
    },
    {
      name: "Romanian deadlift",
      importance: "8/10",
      description: "This workout targets hamstrings primarily"
    },
    {
      name: "Calve raises",
      importance: "7/10",
      description: "This workout targets calves primarily"
    }
  ]
};

export default function App() {
  const [selectedVariant, setVariant] = useState("leg");
  function variantClickHandler(variant) {
    var updatedVariant = variant;
    setVariant(variant);
  }

  return (
    <div className="App">
      <h1>
        {" "}
        <span>🏋️</span> Workout Recommendation{" "}
      </h1>
      <p style={{ fontSize: "smaller" }}>
        {""}
        Checkout my workouts,Select a variant to get started{""}
      </p>
      <div>
        {Object.keys(workoutDB).map((variant) => (
          <button
            onClick={() => variantClickHandler(variant)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {variant}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {workoutDB[selectedVariant].map((workout) => (
            <li
              key={workout.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {""}
              <div style={{ fontSize: "larger" }}> {workout.name} </div>
              <br />
              <div style={{ fontSize: "smaller" }}>{workout.importance}</div>
              <br />
              <div style={{ fontSize: "smaller" }}> {workout.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
