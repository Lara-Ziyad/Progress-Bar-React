import {  useState } from 'react';

import './App.css';

function App() {

  let [progress, setProgress] = useState(1)
  const [circles] = useState({
    number: [1, 2, 3, 4, 5],
   })
  let [width, setwidth] = useState('')
  let [disable, setdisable] = useState(
    {
      more: false,
      less: true
    } )


  const more = () => {
    setProgress(progress + 1)
    console.log(progress);
    // // console.log(progress)
    //  console.log(circles.number.length);
    if (progress >= circles.number.length) {
  
      // console.log(progress);
      // console.log(circles.number.length-1);
      return (setProgress(progress = circles.number.length-1 ))
      
    }
    update()

  }

  const less = (e) => {
    
    setProgress(progress=3 )
     console.log(progress);
    // console.log(circles.number.length);
    // if (progress <= circles.number.length) {
    //   let end = circles.number.length-1;
      // console.log(end);
      // // console.log(circles.number.length);
      // return  (setProgress(progress = circles.number.length))
      
  // }
    update()

  }

  const update = () => {

    //Bar Setting
    let num = ((progress   ) / (circles.number.length - 1)) * 100;;
    // console.log(progress )
    // console.log(circles.number.length - 1)
    // console.log(num)
    let a = num.toString();
    // console.log (a)
    setwidth(width=`${a}%`)
    // console.log(width) 
    // console.log(progress)
      console.log(circles.number.length - 1)
    //Botton Setting
    if (progress === circles.number.length-1 ) {
      setdisable({ more: true })
      // console.log(progress)
      // console.log(circles.number.length - 1)
    }
    else if (progress === 0) {
      less.disabled = true
    }
    else (setdisable(!true));
  }



  return (
    <div className="container">
      <div className="progressContainer" >
        {/* bar */}
    {  
        <div style={{ width: `${width}` }} className="progress" id="progressBar" ></div>}
        {circles.number.map((item, index) => {
         
          
          
          
          // circle
        if (index < progress)    
        {          
          return (   
          <div  className="circle active">{item}</div>)}
        else {
          return (
          <div className="circle">{item}</div>)}
      })
        
  }
       
</div>  
  
    <div>
 <button onClick={less} disabled={disable.less} className ="btn" id="less">Less</button>
 <button onClick={more} disabled={disable.more} className ="btn" id="more">More</button>
    </div>
     
    </div>
  );
}

export default App;
