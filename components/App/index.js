import Main from "../main/index.js";
import Header from "../header/index.js";
import Presentation from "../presentation/index.js";
import Competences from "../competences/index.js";
import Pied from "../Footer/index.js";



function App(){
    return(
        <>
            <Header />
            <main>
                <Main />    
                <Presentation />
                <Competences />
            </main>
            <Pied />
            
        </>
    )
}


export default App;