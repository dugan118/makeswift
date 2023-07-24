
function add25(){
    fetch(API_HOST+"/api/sports/updateDB")
}

export default function UpdateGamesButton(){

    return(

        <button onClick={add25} className=" w-20 h-8 rounded outline-2">
            Click Me
        </button>
    )
}