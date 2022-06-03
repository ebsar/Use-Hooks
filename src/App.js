import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
/* import {AiOutlineUser} from 'react-icons/ai' */
function App() {
  const [showText, setShowText] = useState(false);
  const onClicke = () => {
    setShowText((prev) => !prev);
    
  };
  return (
    <div className="App">
      <div className="container">
        <div className="test"onClick={onClicke}><small className="text" >Why park a domain name in Parkname ?</small>
        <button className={showText ? 'rotated':'rotate'} onClick={onClicke}>
        <FiChevronDown/>
        </button></div>
        {showText ? <div className="demo"> <Text/> </div>: null}
       </div  > </div>
  );
}
const Text = () => <div className="text1">Parkname is the leading industry standard for for domain name
parking and monetization services. We offer a wide variety of
services to helpyou achive success.</div>;


export default App;
