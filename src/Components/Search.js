const Search = (props)=>{


    let filterOnChange = (e)=>{
        props.filterObj.changeFiltering(oldstate=>{
            return {
                ...oldstate,
                filterValue : e.target.value,
                searchValue : ""
            }
        });
    }
    let searchOnChange = (e)=>{
        props.filterObj.changeFiltering(oldstate=>{
            return {
                ...oldstate,
                searchValue : e.target.value
            }
        });
    }
    
    return (
        <div style={{color:"#26A69A", border:"1px solid #26A69A", padding:"20px"}}>
            <h5>SearchBox</h5>
            <select value={props.filterObj.filtering.filterValue} onChange={filterOnChange} className="browser-default">
                <option value="">Choose your option</option>
                <option value="Title">Title</option>
                <option value="Year">Year</option>
                <option value="BoxOffice">BoxOffice</option>
                <option value="imdbRating">Imdb Rating</option>
            </select>
            <input value={props.filterObj.filtering.searchValue} onChange={searchOnChange} type="text" placeholder="Search here"></input>
        </div>
        )
}
export default Search;