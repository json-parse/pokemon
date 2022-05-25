import { Link, useParams } from "react-router-dom";
import { getSinglePokemon } from "../../api";
import { useEffect } from "react";
import { baseUrl } from "../../constants";
import Header from "../common/Header";

const DetailsPage = () => {
  const params = useParams();
  const url = `${baseUrl}/${params.name}`;
  useEffect(() => {
    getSinglePokemon(url).then((apiData) => {
      console.log(apiData);
    });
  }, [url]);
  return (
    <>
      <Header />
      <div className="Container">
        <div>
          <Link to="/">
            <button>back</button>
          </Link>
        </div>
        <div>
          <h2>Details {params.name}</h2>
          <p>
            This app uses React, Redux, React Router, and many other helpful
            libraries.
          </p>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
