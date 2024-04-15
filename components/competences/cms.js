import Article from "./article";
import joomla from "./meslogos/joomla.png";
import wordpress from "./meslogos/wordpress.png";
function Back() {
  return (
    <>
      <Article logo={<img src={joomla} alt="Joomla" />} nom="Joomla" />
      <Article logo={<img src={wordpress} alt="wordpress" />} nom="wordpress" />
    </>
  );
}

export default Back;
