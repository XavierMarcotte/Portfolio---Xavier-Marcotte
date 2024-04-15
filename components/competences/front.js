import Article from "./article";
import htmlLogo from "./meslogos/html.png";
import cssLogo from "./meslogos/css.png";
import jsLogo from "./meslogos/js.png";
import sassLogo from "./meslogos/sass.png";
import reactLogo from "./meslogos/react.png";
import markdownLogo from "./meslogos/mark.png";
import tsLogo from "./meslogos/ts.png";
import next from "./meslogos/nextjs.png";
import tailwind from "./meslogos/tailwind.png";
import ui from "./meslogos/ui.png";

function Front() {
  return (
    <>
      <Article logo={<img src={htmlLogo} alt="HTML" />} nom="HTML" />
      <Article logo={<img src={cssLogo} alt="CSS" />} nom="CSS" />
      <Article logo={<img src={jsLogo} alt="Javascript" />} nom="Javascript" />
      <Article logo={<img src={sassLogo} alt="SASS" />} nom="SASS" />
      <Article logo={<img src={reactLogo} alt="React.js" />} nom="React.js" />
      <Article
        logo={<img src={markdownLogo} alt="Markdown" />}
        nom="Markdown"
      />
      <Article logo={<img src={tsLogo} alt="Typescript" />} nom="Typescript" />
      <Article logo={<img src={next} alt="Next.js" />} nom="Next.js" />
      <Article logo={<img src={tailwind} alt="Tailwind" />} nom="Tailwind" />
      <Article logo={<img src={ui} alt="ui" />} nom="ui" />
    </>
  );
}

export default Front;
