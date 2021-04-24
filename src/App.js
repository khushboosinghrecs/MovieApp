import { useState } from "react";
import movieList from "./Assets/data.json";
import MovieTable from "./Components/MovieTable";
import Search from "./Components/Search";
const App = (props) => {
  let searchOption = {
    filterValue: "",
    searchValue: "",
  };
  let [filtering, changeFiltering] = useState(searchOption);
  let [sortOption, changeSortOption] = useState("");
  let filterMovieList = () => {
    if (filtering.filterValue && filtering.searchValue) {
      return movieList.filter((x) => {
        let str = x[filtering.filterValue];
        if (!str) {
          return false;
        }
        return str.startsWith(filtering.searchValue);
      });
    }
    return movieList;
  };
  let movieList2 = filterMovieList();
  console.log(movieList2);
  if (sortOption) {
    movieList2.sort((a, b) => {
      if (sortOption === "Title") {
        return a.Title.localeCompare(b.Title);
      }
      if (sortOption === "Year") {
        return a.Year - b.Year;
      }
      if (sortOption === "imdbRating") {
        return b.imdbRating - a.imdbRating;
      }

      if (sortOption === "BoxOffice") {
        if (
          a.BoxOffice !== undefined &&
          b.BoxOffice !== undefined &&
          a.BoxOffice !== "N/A" &&
          b.BoxOffice !== "N/A"
        ) {
          console.log(a + "  " + " " + b.BoxOffice);
          let first = a.BoxOffice.slice(1);
          let second = b.BoxOffice.slice(1);
          //first.slice
          console.log(first + " " + second);
          return b.BoxOffice.slice(1) - a.BoxOffice.slice(1);
        } else if (a.BoxOffice !== "N/A") {
          return a.BoxOffice;
        } else if (b.BoxOffice !== "N/A") {
          return b.BoxOffice;
        } else if (a.BoxOffice === undefined || b.BoxOffice === undefined)
          return 0;
        else if (a.BoxOffice === "N/A" || b.BoxOffice === "N/A") return 0;

        // console.log(a.BoxOffice + " " + b.BoxOffice);
      }
    });
  }
  return (
    <div className="container">
      <h3>MovieList</h3>
      <Search filterObj={{ filtering, changeFiltering }}></Search>
      <MovieTable
        sortOption={{ sortOption, changeSortOption }}
        movieList={movieList2}
      ></MovieTable>
    </div>
  );
};
export default App;
