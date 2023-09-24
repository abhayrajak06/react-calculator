import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState("");
  const clickHandle = (e) => {
    setResult(result.concat(e.target.value));
  };
  const clearScreen = () => {
    setResult("");
  };
  const handleBack = () => {
    setResult(result.substring(0, result.length - 1));
  };
  const calculate = () => {
    setResult(eval(result).toString());
  };
  return (
    <div className="bg-gray-800 text-white w-screen h-screen flex justify-center items-center">
      <div className="main h-auto w-64 bg-gray-900 rounded-2xl shadow-xl border-4 border-gray-100">
        <div className="screen p-2">
          <input
            type="text"
            value={result}
            className="text-black w-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] placeholder-black px-1 rounded-lg bg-gray-100 text-2xl pt-10 outline-none text-right"
            placeholder="0"
          />
        </div>

        <div className="brand bg-gray-200 bg-opacity-90 mb-2">
          <h1 className="text-center text-gray-900 font-bold text-xs">
            AbhiTech
          </h1>
        </div>

        <div className="keyword">
          <div className="flex justify-between m-2">
            <input
              type="button"
              onClick={clearScreen}
              value={"C"}
              className="cursor-pointer bg-red-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
            />
            <input
              type="button"
              onClick={handleBack}
              value={"<"}
              className="cursor-pointer bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
            />
            <input
              type="button"
              onClick={clickHandle}
              value={"%"}
              className="cursor-pointer bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
            />
            <input
              type="button"
              onClick={clickHandle}
              value={"/"}
              className="cursor-pointer bg-pink-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
            />
          </div>

          <div className="flex justify-between m-2">
            <input
              type="button"
              onClick={clickHandle}
              value={"7"}
              className="cursor-pointer bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
            />
            <input
              type="button"
              onClick={clickHandle}
              value={"8"}
              className="cursor-pointer bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
            />
            <input
              type="button"
              onClick={clickHandle}
              value={"9"}
              className="cursor-pointer bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
            />
            <input
              type="button"
              onClick={clickHandle}
              value={"*"}
              className="cursor-pointer bg-green-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
            />
          </div>

          <div className="flex justify-between m-2">
            <input
              type="button"
              onClick={clickHandle}
              value={"4"}
              className="cursor-pointer bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
            />
            <input
              type="button"
              onClick={clickHandle}
              value={"5"}
              className="cursor-pointer bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
            />
            <input
              type="button"
              value={"6"}
              className="cursor-pointer bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
            />
            <input
              type="button"
              onClick={clickHandle}
              value={"-"}
              className="cursor-pointer bg-indigo-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
            />
          </div>

          <div className="flex justify-between m-2">
            <input
              type="button"
              onClick={clickHandle}
              value={"1"}
              className="cursor-pointer bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
            />
            <input
              type="button"
              onClick={clickHandle}
              value={"2"}
              className="cursor-pointer bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
            />
            <input
              type="button"
              onClick={clickHandle}
              value={"3"}
              className="cursor-pointer bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
            />
            <input
              type="button"
              onClick={clickHandle}
              value={"+"}
              className="cursor-pointer bg-purple-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
            />
          </div>

          <div className="flex justify-between m-2">
            <input
              type="button"
              onClick={clickHandle}
              value={"0"}
              className="cursor-pointer bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
            />
            <input
              type="button"
              onClick={clickHandle}
              value={"00"}
              className="cursor-pointer bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
            />
            <input
              type="button"
              onClick={clickHandle}
              value={"."}
              className="cursor-pointer bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
            />
            <input
              type="button"
              onClick={calculate}
              value={"="}
              className="cursor-pointer bg-orange-300 shadow-md w-12 h-12 rounded-lg text-center text-black font-medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
