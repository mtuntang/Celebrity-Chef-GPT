import React, { useState } from "react";

function FormQuery({ onSubmit }) {
  const [ingredients, setIngredients] = useState("");
  const [tools, setTools] = useState("");
  const [time, setTime] = useState(30); // Default time value
  const [cuisine, setCuisine] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    onSubmit({ ingredients, tools, time, cuisine }); // the function that passes the hook variables to the API
  };

  return (
    <div className="m-4">
      <h1 className="text-green-800 underline text-xl font-bold">
        Welcome to ChefGPT, your best cooking assistant!
      </h1>
      <h4 className="text-gray-600">
        Very nice to meet you! Fill in the form below to have the robot chef
        provide recipe for you.
      </h4>
      <br></br>

      <form onSubmit={formHandler} className="flex flex-col space-y-4">
        {/* Ingredient label*/}
        <div>
          <label
            htmlFor="ingredients"
            className="text-blue-900 -mb-3 font-bold"
          >
            Ingredients (required):
          </label>
          <input
            type="text"
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        {/* Tools label */}
        <div>
          <label htmlFor="tools" className="text-blue-900 -mb-3 font-bold">
            Tools (required):
          </label>
          <input
            type="text"
            id="tools"
            value={tools}
            onChange={(e) => setTools(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        {/* Time label */}
        <div>
          <label htmlFor="time" className="text-blue-900 -mb-3 font-bold">
            Time in minutes (required):
          </label>
          <input
            type="range"
            id="time"
            min="20"
            max="180"
            value={time}
            onChange={(e) => setTime(parseInt(e.target.value))}
            className="w-full h-2 mb-6 bg-blue-200 rounded-lg appearance-none cursor-pointer dark:bg-blue-700"
            required
          />
          <p>
            You wish to meal prep for <span className="font-bold">{time}</span>{" "}
            minutes.
          </p>
        </div>
        {/* Cuisine label */}
        <div>
          <label htmlFor="cuisine" className="text-blue-900 -mb-3 font-bold">
            Cuisine (select one) (required):
          </label>
          <div className="flex space-x-4 my-1.5">
            <button
              type="button"
              onClick={() => setCuisine("Asian")}
              className={`bg-red-500 text-white font-bold px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200 ${
                cuisine === "Asian" ? "bg-red-700" : ""
              }`}
            >
              Asian
            </button>
            <button
              type="button"
              onClick={() => setCuisine("Western")}
              className={`bg-red-500 text-white font-bold px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200 ${
                cuisine === "Western" ? "bg-red-700" : ""
              }`}
            >
              Western
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
        >
          Generate Recipe!
        </button>
      </form>
    </div>
  );
}

export default FormQuery;
