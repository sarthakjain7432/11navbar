import logo from "./logo.svg"
import { links,social } from "./data";
import { useEffect, useState } from "react";

function App() {
  const [showLinks, setShowLinks] = useState(true);
  const toggle = ()=>{
    setShowLinks(!showLinks);
  }
  
  return (
    <>
      <div className="main">
      <div>
        <img src={logo} alt="" style={{width:"220px",marginLeft:"5px"}}/>
        <span className="toggle" onClick={toggle} style={{"float":"right", "marginRight":"10px"}}>|||</span>
      </div>
        <div style={{marginTop:"10px"}}>
          <div className={showLinks ? "links show" : "links"}>
          { links.map((item)=>  
              <a style={{"marginRight":"20px","textDecoration":"none"}} href={item.url}>{item.text}</a> 
            )
          }      
          </div>
        </div>
        <div className="socials">
          {
            social.map((item)=>
              <a style={{marginRight:"10px","color":"blue"}} href={item.url}>{item.icon}</a>           
            )
          }
        </div>          
      </div>
    </>
  );
}

export default App;
