import React,{useState} from 'react'

export default function About(props) {
//  const [myStyle, setMyStyle] = useState({
//     color : 'black',
//     backgroundColor : 'white'
//   })
//   const [btnText, setBtnText] = useState("Enable Dark mode");

//   let togglestyle =()=>{
//     if (myStyle.color === 'white'){
//         setMyStyle({
//            color : 'black',
//            backgroundColor : 'white'
//       })
//       setBtnText("Enable Dark mode");
//     }
//     else{
//         setMyStyle({
//            color : 'white',
//            backgroundColor : 'black'
//       })
//       setBtnText("Enable Light mode");
//     }
//   }
 let myStyle ={
   color : props.mode === "light"?"black":"white",
   backgroundColor :props.mode === "light"?"white":"navy"
 }

  return (
    <div className="container my-3" style={myStyle}>
        <h2>ABOUT US</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" >
      <button className="accordion-button" style={{backgroundColor :props.mode === "light"?"white":"lightgray"}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={{backgroundColor :props.mode === "light"?"white":"lightgray"}}>
          <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
     </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{backgroundColor :props.mode === "light"?"white":"lightgray"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor :props.mode === "light"?"white":"lightgray"}}>
        <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{backgroundColor :props.mode === "light"?"white":"lightgray"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor :props.mode === "light"?"white":"lightgray"}}>
        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
 {/* <div className="container">
   <button onClick={togglestyle} className="btn btn-warning my-2">{btnText}</button>
 </div> */}
 </div>
  )
}
