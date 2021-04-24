import { useState } from "react";
import Pagination from "./Paginations"

const MovieTable = (props)=>{
    let [curPage,changeCurPage] = useState(1);
    let getAllList = ()=>{
        let indexStart = ((curPage-1) * 10);
        let indexEnd = (curPage * 10);
        let realMovieList = props.movieList.slice(indexStart,indexEnd);
        return realMovieList.map((x,i)=>{
            return (
                <tr onMouseOver={()=>{}} key={i}>
                    <td>{x.Title}</td>
                    <td>{x.Year}</td>
                    <td>{x.BoxOffice}</td>
                    <td>{x.imdbRating}</td>
                </tr>
            )
        })
    }
    return (
        <div>
            <table className="striped centered responsive-table">
            <thead>
                <tr>
                    <th style={{cursor:'pointer'}} onClick={()=>{props.sortOption.changeSortOption("Title")}}>Title</th>
                    <th style={{cursor:'pointer'}} onClick={()=>{props.sortOption.changeSortOption("Year")}}>Year</th>
                    <th style={{cursor:'pointer'}} onClick={()=>{props.sortOption.changeSortOption("BoxOffice")}}>BoxOffice</th>
                    <th style={{cursor:'pointer'}} onClick={()=>{props.sortOption.changeSortOption("imdbRating")}}>Imdb Rating</th>
                </tr>
            </thead>
                <tbody>
                    {getAllList()}
                </tbody>
            </table>
            <Pagination pageinfo={{curPage,changeCurPage}} movieList={props.movieList}></Pagination>            
      </div>
    )
}
export default MovieTable;