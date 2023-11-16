import { useState } from "react";
import "./App.css";
import Navbars from "./components/navbar";

function App() {
    const [input , setInput] = useState("")
    const [result, setResult] = useState("")

    function updateInput(){
      const inputValue = document.getElementById("input").value
      setInput(inputValue)
    }
    

    function toUppercase(){
      
      const updated = input.toUpperCase();
      setResult(updated)
    }
    function toLowercase(){
      
      const updated = input.toLowerCase();
      setResult(updated)
    }

    function wordCount(){
      if(input == ""){
        setResult(0)
      }
      else{
      const updated = input.trim().split(/\s+/);
      console.log(updated)
      setResult(updated.length)
    }
    }

    function characterCount(){
      
      const updated = input.trim().split("");
      console.log(updated)
      setResult(updated.length)
    }
    
    function copy(){

      var textToCopy = document.getElementById('result').value;
      var tempTextarea = document.createElement('textarea');
      tempTextarea.value = textToCopy;

      // Append the textarea to the document (make it part of the DOM)
      document.body.appendChild(tempTextarea);

      // Select the text in the textarea
      tempTextarea.select();
      tempTextarea.setSelectionRange(0, 99999); // For mobile devices

      // Execute the copy command
      document.execCommand('copy');

      // Remove the temporary textarea from the document
      document.body.removeChild(tempTextarea);
      alert('Text copied to clipboard: ' + textToCopy);

    }

  return (
    <>
      <Navbars />
      <div className="max-w-screen-xl flex flex-col md:flex-row gap-x-4 items-center justify-between mx-auto p-4">
        <div className="basis-1/2">
        <label
          htmlFor="large-input"
          className="block mb-2 text-xl font-bold text-gray-900 dark:text-white uppercase"
        >
          Enter Your Text Here
        </label>
        <textarea
          type="text"
          id="input"
          onChange={updateInput}
          value={input}
          rows="20"
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </div>
        <div className="basis-1/2">
        <label
          htmlFor="large-input"
          className="block mb-2 text-xl font-bold text-gray-900 dark:text-white uppercase"
        >
         Result
        </label>
        <textarea
          type="text"
          id="result"
          value={result}
          rows="20"
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          disabled
        />
        </div>
      </div>
      <div className="max-w-screen-xl flex flex-col md:flex-row gap-x-4 items-center justify-between mx-auto p-4">
        
<button onClick={toUppercase} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
to Uppercase
</span>
</button>
<button onClick={toLowercase} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
to LowerCase
</span>
</button>
<button onClick={copy} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Copy
</span>
</button>
<button onClick={wordCount} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
wordCount
</span>
</button>
<button onClick={characterCount} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
character Count
</span>
</button>
<button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Teal to Lime
</span>
</button>
<button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Red to Yellow
</span>
</button>

      </div>
    </>
  );
}

export default App;
