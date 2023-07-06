import { useState } from 'react';
import css from './css.css';

const App = () => {
  let [screenV,setScreenV] = useState("");
  let [error,setError] = useState("");

  function main(e) {
    let value = e.target.getAttribute("data")
         switch (value) {
          case 'AC':
            setScreenV("");
            break;
    
            case 'DEL':
            setScreenV(String(screenV).slice(0,-1));
            break;
    
            case '=':
              if (screenV !== "") {
                try {
                  setScreenV(eval(screenV))
                } catch{
                  setError("Not Valid!");
                  setTimeout(() => {
                    setError("")
                  }, 2000);
                }
              }
            break;
    
            case '.':
              if (!String(screenV).includes('.')) {
                setScreenV(screenV+".")
              }
            break;
         
          default:
            setScreenV(screenV+value)
            break;
         }
        }

  return (
  <>
        <section id="caculator">
         <div id="screen">{screenV}
         <div className='error'>{error}</div>
         </div>
         <div id="buttons">
         <button onClick={main} type="button" className="btn yellow" data="*">*</button>
         <button onClick={main} type="button" className="btn yellow" data="/">/</button>
         <button onClick={main} type="button" className="btn yellow" data="+">+</button>
         <button onClick={main} type="button" className="btn yellow" data="-">-</button>
         
         <button onClick={main} type="button" className="btn grey" data="9">9</button>
         <button onClick={main} type="button" className="btn grey" data="8">8</button>
         <button onClick={main} type="button" className="btn grey" data="7">7</button>
         <button onClick={main} type="button" className="btn grey" data="6">6</button>
         <button onClick={main} type="button" className="btn grey" data="5">5</button>
         <button onClick={main} type="button" className="btn grey" data="4">4</button>
         <button onClick={main} type="button" className="btn grey" data="3">3</button>
         <button onClick={main} type="button" className="btn grey" data="2">2</button>
         <button onClick={main} type="button" className="btn grey" data="1">1</button>
         <button onClick={main} type="button" className="btn grey" data="0">0</button>
         <button onClick={main} type="button" className="btn grey" data=".">.</button>
         <button onClick={main} type="button" className="btn grey" data="DEL">DEL</button>

         <button onClick={main} type="button" className="btn green big" data="=">=</button>
         <button onClick={main} type="button" className="btn red big" data="AC">AC</button>
        </div>
</section>
</>
  )
}

export default App