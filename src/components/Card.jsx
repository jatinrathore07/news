import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Card = () => {
  const [apiData, setApiData] = useState([]);
  const query = useSelector((state) => state.search.value);

  useEffect(() => {
    if (!query) return;

    async function fetchingData() {
      try {
        const response = await axios.get(`/api/news?q=${query}`);
        setApiData(response.data.articles || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchingData();
  }, [query]);

  return (
    <div className="flex flex-wrap gap-3 mt-20 justify-center">
      {apiData.map((elem, index) => (
        <div
          key={index}
          className="relative overflow-auto w-80 bg-red-200 my-2 p-2"
        >
          {elem.urlToImage && <img src={elem.urlToImage} alt="news" />}
          <a href={elem.url} target="_blank" rel="noreferrer">
            <h1 className="text-xl text-center text-blue-900 font-bold">
              {elem.title}
            </h1>
          </a>
          <p className="text-center font-bold text-gray-700">
            {elem.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;
