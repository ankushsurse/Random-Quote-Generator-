import { useContext } from "react"
import GlobalContext from "./Context/GlobalContext"
import { getQuote } from "./Context/GlobalActions"
function Quotes() {

    const { quote, dispatch } = useContext(GlobalContext)
    const { content, author, dateAdded, tags } = quote
    
    const handleClick = (async () => {
        const data = await getQuote()
        dispatch({
            type: "GET_QUOTE",
            payload: data
        })
    })


    return (
        <>
            <div className="card container mt-3 w-50">
                <h5 className="card-header">Today's Quote</h5>
                <div className="card-body">
                    <h5 className="card-title">{content}</h5>
                    <span className='d-flex justify-content-between'>
                        <p className="card-text">{author}</p>
                        <p className="float-end card-text">{dateAdded}</p>
                    </span>
                    <p className='card-text'>{tags}</p>
                    <a href='#' onClick={() => handleClick()} className="btn btn-danger w-100"   >Get More</a>
                </div>
            </div>
        </>
    )
}

export default Quotes
