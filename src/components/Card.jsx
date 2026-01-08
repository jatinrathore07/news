import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Card = () => {
  const [apiData, setApiData] = useState([]);
  const query = useSelector((state) => state.search.value);

  const api = `https://newsapi.org/v2/everything?q=${query}&apiKey=${
    import.meta.env.VITE_API_KEY
  }`;

  useEffect(() => {
    async function fetchingData() {
      try {
        const response = await axios.get(api);
        setApiData(response.data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchingData();
  }, [api]);

  return (
    <>
      <div className="flex flex-wrap gap-3 mt-20">
        <div className="flex absolute flex-wrap gap-3 justify-center aliign-middle">
          {apiData.map((elem, index) => {
            return (
              <div
                key={index}
                className="relative overflow-auto  h-100 w-100 bg-red-200 my-2"
              >
                <img src={elem.urlToImage} alt="image" />
                <a href={elem.url}>
                  <h1 className="text-3xl text-center text-blue-900 font-bold">
                    {elem.title}
                  </h1>
                </a>
                <p className="text-center font-bold text-gray-700">
                  {elem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
