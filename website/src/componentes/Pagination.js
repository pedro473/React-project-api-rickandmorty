import React from "react";

function Pagination({onPrevious, onNext, prev, next}) {



    const handleprevious = () =>{
        onPrevious()
    }

    const handlenext = () =>{
        onNext()
    }

    return(

        <div>
            <nav>
                <ul className='pagination justify-content-center mt-3 ' >

                    {
                        prev?(
                        <li className='page-item' >
                        <button className="page-link" onClick={handleprevious} >Previous</button>
                    </li> ) : null
                    }

                 
                    {
                        next? ( 
                        <li className='page-item'>
                        <button className="page-link" onClick={handlenext} >Next</button>
                        </li>  ) :null
                    }
                    
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;