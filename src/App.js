import React from 'react';
import './App.css';

// //functional component
// //DATE 6,7,8,FEB

// function App() {
//   let firstVariable = 5;
//   console.log("firstVariable:" +firstVariable)
//   firstVariable = 6;
//   console.log("firstVariable:" +firstVariable)

//   const secondVariable = "abc";
//   console.log("SecondVariable:" +secondVariable)

//   var thirdVariable = true;
//   console.log("thirdVariable:" +thirdVariable)
//   thirdVariable = false;
//   console.log("thirdVariable:" +thirdVariable)

//   const functionArgument = () =>
//   {
//     console.log("This is my functionArgument !");
//     return true
//   }

// const myFunction1 = (variable) =>
// {
//   console.log(variable)
//   console.log("This is my function 11!")

//   if(variable())
//   {
//     console.log("the condition is true");
//   }
//   else{
//     console.log("the condition is false");
//   }
// }

// //myFunction()
// myFunction1(functionArgument)

// class Student 
// {
//   id 
//   name 
//   rollNumber
//   address
//   emailID

//   constructor(tempID,tempName,tempRoll,tempAddress,tempEmail)
//   {
//     this.id = tempID
//     this.name = tempName
//     this.rollNumber = tempRoll
//     this.address = tempAddress
//     this.emailID = tempEmail 
//   }


//   print()
//   {
//     console.log("id",this.id)
//     console.log("name",this.name)
//     console.log("rollNumber",this.rollNumber)
//     console.log("address",this.address)
//     console.log("emailID",this.emailID)
//   }
// }

//  const student1 = new Student(123,"Neeraj",111,"dev shree colony","neeraj@gmail.com")
//  student1.print()
// //  student1.id = 123
// //  student1.name = "Neeraj"
// //  student1.rollNumber = 111
// //  student1.address = "dev shree colony"
// //  student1.emailID = "neeraj@gmail.com"

// class Monitor extends Student
// {
//   batch 

//   constructor(batchTemp,id,tempName,tempRoll,tempAddress,tempEmail)
//   {
//     super(id,tempName,tempRoll,tempAddress,tempEmail)
//     this.batch = batchTemp
//   }

//   print()
//   {
//     super.print()
//     console.log("Batch:"+this.batch)
//   }
// }

// let ravi = new Monitor("2-3pm",222,"Ravi Prakash",1234,"dj fjd","ravi@gmail.com")
// console.log("ravi:",ravi)
// ravi.print()




// // class component
// // DATE 9 FEB
// class App extends React.Component {

//    buttonClickHandle()
//   {
//     console.log("Clicked the button!");
//     console.log(this.buttonClickHandle)
//   }
//   render() 
//   {
//     return (<div>
//       <p>
//         <ol>
//           <li>LIST 1</li>
//           <li>List 2 </li>
//           <li>LIst 3</li>
//         </ol>

//         <button onClick={() => this.buttonClickHandle()}> Click me!</button>
//       </p>
//     </div>
//     )

//   }
// }



// // 10FEB
// //props in functional component
// const App = (props)=>
// {
//   console.log("props: ",props)
//   console.log("props color: ",props.color)
//   console.log("props size: ",props.size)
//   console.log("clickEvent:",props.clickEvent)
//   return <div style={{backgroundColor:props.     color}}>This is App component<button onClick={props.clickEvent} >Click me! </button></div>
// }




// 13,14 ,16 FEB
// props in class component
class App extends React.Component
{
  state = {
    counter: 0,
    component: <ChildComponent/>
  }

  constructor(props)
  {
    super(props)
    console.log("Constructor of App Component")
  }
  
  static getDerivedStateFromProps()
  {
    console.log("getDerivedStateFromProps")
  }

  incrementCounter = () =>
  {
    this.setState({counter:this.state.counter + 1})
  }
  componentDidMount(){
    console.log("componentDidMount")
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate")
    return true;
  }

  getSnapshotBeforeUpdate(preProps,prevState){
    console.log("getSnapshotBeforeUpdate")
    return true
  }
  componentDidUpdate(){
    console.log("componentDidUpdate")
  }
  unmountChild=()=>{
    this.setState({
      counter: this.state.counter,
      component: "The child component is gone/unmounted"
    })
  }

  render()
  {
    console.log("render method ")

    return <div 
    style={{backgroundColor: this.props.color}}>
    Hello
    <button onClick={this.props.clickEvent}>Click me! </button>
    -----------<br/>
    Counter: {this.state.counter}
    <button onClick={this.incrementCounter}>Increment counter</button>
    <br/>
    Mounting Child component
    <br/>
    ---------------------------- 
    <br/>
    {/* <ChildComponent/>  */}
    {this.state.component} <br/>
    -------------------- 
    <br/>
    <button onClick={this.unmountChild}>Unmount child component</button>
    </div>   
  }
}

class ChildComponent extends React.Component
{
  componentWillUnmount()
  {
    console.log("Unmounting child component")
  }
  render()
  {
    return <div>This is my Child Component</div>
  }
}

export default App;

