import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Header = ({ setListImages, setIsLoading }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch(
        "image-generator-backend-production.up.railway.app",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: inputValue,
          }),
        }
      );
      const jsonData = await response.json();
      setListImages(jsonData.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-yellow-200 to-blue-800">
      {/* Container */}
      <div className="container mx-auto mx-w-5xl px-2 py-6">
        {/* Logo */}
        <p className="block font-bold text-5xl font-Arvo">
          Imagine<span className="text-yellow-200">Art</span>
        </p>
        {/*Tagline */}
        <div className="mt-14">
          <p className="text-xl">
            Unleash the Power of Ai to create stunning Images
          </p>
          <p className="font-light opacity-80 hidden md:inline-block">
            {" "}
            Created with AI-powered image generation
          </p>
          {/*Form */}
          <form
            className="relative my-8 bg-green-400 max-w-md"
            onSubmit={handleSubmit}
          >
            <input
              value={inputValue}
              onChange={handleInputChange}
              type="text"
              placeholder="Unleash to power of ai to Create!"
              className="indent-2 py-4 pr-[4.5rem] rounded-sm bg-gray-50 w-full md:max-w-md focus:ring-blue-900 outline-none focus:ring-1"
            />
            <button
              type="submit"
              className="absolute bottom-2.5 right-2.5 bg-green-400 text-white px-2 py-2 rounded-sm text-sm"
            >
              <ArrowLongRightIcon className="h-6" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
