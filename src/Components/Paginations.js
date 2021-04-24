import { useState } from "react";

const Pagination = (props)=>{
    let totalPage = Math.ceil(props.movieList.length / 10);
    let changePage = (i)=>{
        props.pageinfo.changeCurPage(i);
    }
    let getPage = ()=>{
        let list = [];
        for(let i=1;i<=totalPage;i++){
            if(i === props.pageinfo.curPage){
                list.push(<li key={i} onClick={()=>changePage(i)} className="active waves-effect"><a>{i}</a></li>);
            }else{
                list.push(<li key={i} onClick={()=>changePage(i)} className="waves-effect"><a>{i}</a></li>);
            }
        }
        return list;
    }
    

    return (
        <ul className="pagination">
            {getPage()}
        </ul>
    )
}
export default Pagination;