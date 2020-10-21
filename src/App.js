import React from 'react';
import './App.css';
import Row from "./Row";

import requests from "./requests";

function App() {
  return (
    <div className="App">
      {/*Nav Bar*/}

      {/*Banner*/}
      <Banner />
        {//   <Row title={"NETFLIX ORIGINALS"} fetchUrl={requests.fetchNetflixOriginals}/>
           }
    <Row className={""}
        title={"NETFLIX ORIGINALS"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
    />
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>


    </div>
  );
}

export default App;
