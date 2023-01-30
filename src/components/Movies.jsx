import React from "react";
import request from "../request/Axios";
import reqApiKey from "../request/request";
import YouTube from "react-youtube";
import Tooltip from "@mui/material/Tooltip";
// import Carousel from "nuka-carousel/lib/carousel";

const Movies = ({ title, requestMovie }) => {
  const [movies, setMovies] = React.useState([]);
  const [view, setView] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    request(requestMovie).then((res) => {
      setMovies(res.data.results);
      if (res.data.results) {
        setLoading(false);
      } else {
        setTimeout(() => {
          setLoading("no");
        }, 10000);
      }
    });
  }, [requestMovie]);

  const viewTrailer = (el) => {
    request("/movie/" + el?.id.toString() + reqApiKey.trailerQuery)
      .then((res) => setView(res.data.results[0].key))
      .catch((err) => console.log(err));
  };

  const handleClick = (el) => {
    if (view) {
      setView("");
    } else {
      viewTrailer(el);
    }
  };

  const viewSettings = {
    height: "550",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="categoryBox">
      <h2 className="categoryTitle">{title}</h2>
      <div className="movieCards">
        {loading ? (
          loading === "no" ? (
            <h2 className="noData">☹️ Error 404 ☹️</h2>
          ) : (
            <div className="load"></div>
          )
        ) : (
          movies?.map((el) => {
            return (
              <>
                  <Tooltip
                    title={el.original_title || el.original_name}
                    key={movies.id}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                      alt={el.original_title}
                      onClick={() => handleClick(el)}
                      className="cardImg"
                    />
                  </Tooltip>
              </>
            );
          })
        )}
      </div>
      {view ? (
        <>
          <YouTube className="ytPlayer" videoId={view} opts={viewSettings} />
          <div className="closeYouTube" onClick={() => setView(false)}></div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Movies;
