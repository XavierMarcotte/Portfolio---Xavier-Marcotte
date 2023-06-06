import Main from "../main/index.js";
import Header from "../header/index.js";
import Presentation from "../presentation/index.js";

function App(){
    return(
        <>
            <Header />
            <main>
                <Main />    
                <Presentation />

            </main>
        </>
    )
}


export default App;