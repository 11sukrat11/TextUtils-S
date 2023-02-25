import React, {useState}from 'react'

export default function About(props) {
    const [myStyle, setMyStyle] = useState( {
        color: 'black',
        backgroundColor: 'white'
        
    })
    const [btntext, setBtnText] = useState("Enable Dark Mode")
     const toggleStyle = ()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            }) 
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            
            }) 
            setBtnText("Enable Dark Mode");
        }
    }
  return (
    <div className="container" style={myStyle}>
        <h2 className='my-3'>About us</h2>
        <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                         #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body"  style={myStyle}>
                        <strong>Text-Utils is a web tool to assist developers</strong> and other people in daily tasks by providing tools for manipulating text data.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        #2
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body"  style={myStyle}>
                        <strong>T extUtils is simply a set of utility functions to do operations on String objects.</strong>A free character counter tool made using React.js and BootStrap
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                         #3
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body"  style={myStyle}>
                        <strong>TextUtils is a utility class in Website that provides various methods to perform operations on strings,</strong> such as checking if a string is convert to UpperCase, Convert to LoweCase, trimming whitespace, and more.
                    </div>
                    </div>
                </div>
            </div>
              <div className="container my-2 ">
               <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
              </div>
               </div>
  )
}
<>
<i class="fa fa-pinterest-squar


" aria-hidden="true"></i>
</>
