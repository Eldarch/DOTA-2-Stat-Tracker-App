import heroIcons from './heroIcons.json';
import './heroPicture.css';

const HeroPicture = ({id}) => {

  //console.log(heroIcons[id]);
  return(
    // heroIcons[id]
    <div>
      <img
        src={heroIcons[id]}
        alt="most recently played hero"
        //onClick={() => searchMovies(searchTerm)}
      />
    </div>
  );
}
  
export default HeroPicture;


// const MovieCard = ({ movie }) => {
//     return (
//         <div className="movie">
//             <div>
//                 <p>{movie.Year}</p>
//             </div>

//             <div>
//               <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
//             </div>

//             <div>
//               <span>{movie.Type}</span>
//               <h3>{movie.Title}</h3>
//             </div>
//         </div>
//     );
// }