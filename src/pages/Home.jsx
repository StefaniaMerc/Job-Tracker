import Header from "../components/Header"

export default function Home(props){
    return(
        <div>
            <Header name = {props.name}/>
        </div>
    )
}