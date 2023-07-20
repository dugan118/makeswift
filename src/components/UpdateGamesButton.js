
function add25(){
    fetch("http://localhost:3000/api/sports/updateDB")
}

export default function UpdateGamesButton(){

    return(

        <button onClick={add25} className="rounded outline-2">
            Click Me
        </button>
    )
}