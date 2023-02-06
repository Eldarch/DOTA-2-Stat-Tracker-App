import './App.css';
import { useState, useEffect } from 'react'; //useState and useEffect are hooks
import HeroPicture from './heroPicture.jsx';

const API_URL = "https://api.opendota.com/api/players/296485118/matches";
const API_URLL = "https://api.opendota.com/api/players/296485118/recentMatches";


const App = () => {
  const ID = 0; //ID of the Hero shown
  const [matchInfo, setMatchInfo] = useState([]);
  fetch(API_URL)
    .then(response => response.json())
    .then(data => console.log(data[0].hero_id)); //this is the most recent match
    
  const matchData = async () => {
    let response = await fetch(API_URL);
    let commits = await response.json();
    console.log(commits);    
  }


  
  const heroImg = HeroPicture(ID)
  console.log(heroImg)

  return (
    <div>
      <header className="App-header">
        <HeroPicture id={4} />
      </header>
    </div>
  );
}

export default App;
//https://api.opendota.com/api/matches/{match_id}







// const App = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const searchMovies = async (title) => {
//     const response = await fetch(`${API_URL}&s=${title}`);
//     const data = await response.json();

//     setMovies(data.Search);
//   }
//   useEffect(() => {
//     searchMovies('')
//   }, []);

//   return (
//     <div className="app">
//       <h1>MovieLand</h1>

//       <div className="search">
//         <input
//           placeholder="Search for movies"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <img
//           src={SearchIcon}
//           alt="search"
//           onClick={() => searchMovies(searchTerm)}
//         />
//       </div>

//       {movies?.length > 0
//         ? (
//           <div className="container">
//             {movies.map((movie) => 
//               <MovieCard movie={movie}/>
//             )}
//           </div>
//         ) : (
//           <div className="empty">
//             <h2>No movies found</h2>
//           </div>
//         )}
//     </div>
//   );
// }

// export default App;
