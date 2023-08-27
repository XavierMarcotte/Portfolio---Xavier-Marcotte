import Article from "./article";
import parcel from './meslogos/parcel.png';
import npm from './meslogos/npm.png';
import vscode from './meslogos/vs.png';
import git from './meslogos/git.png';


function Outils(){
    return(
        <>
            <Article logo={<img src={parcel} alt="parcel" />} nom="Parcel" />
            <Article logo={<img src={npm} alt="npm" />} nom="NPM" />
            <Article logo={<img src={vscode} alt="Vscode" />} nom="Vs Code" />
            <Article logo={<img src={git} alt="Git" />} nom="GIT" />
        </>
    )
} 


export default Outils;