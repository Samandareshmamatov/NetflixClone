import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Movies from "./Movies";
import reqApiKey from "../request/request";
import Footer from "./Footer";

const Main = ({ user }) => {
  return (
    <div>
      <Navbar user={user} />
      <Hero />
      <Movies
        title={"Originals of Netflix"}
        requestMovie={reqApiKey.fetchNetflixOriginals}
      />
      <Movies title={"Tranding"} requestMovie={reqApiKey.fetchTrending} />
      <Movies title={"Action"} requestMovie={reqApiKey.fetchActionMovies} />
      <Movies title={"Top Rated"} requestMovie={reqApiKey.fetchTopRated} />
      <Movies title={"Comedy"} requestMovie={reqApiKey.fetchComedyMovies} />
      <Movies
        title={"Horror"}
        requestMovie={reqApiKey.fetchHorrorMovies}
      />
      <Movies title={"Romance"} requestMovie={reqApiKey.fetchRomanceMovies} />
      <Movies title={"Documentaries"} requestMovie={reqApiKey.fetchDocumentaries} />
      <Footer />
    </div>
  );
};

export default Main;
