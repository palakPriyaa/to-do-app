
import './App.css';
import Header from "./components/Header";
import House from './components/House';
 



// importing from components



//agar mujhe kuch aur add krna hai toh mai directly prin ni krskti 
//always first letter should be capital of function

//html em jo class hai wo isme className hai aur id same use krskte h
// function Palak(){
//   return <div>palak</div>;
// }

// function App() {
//   return (
    
//         <div>hello <Palak /> world 

//         <button>click me</button> 


//          </div>
//   );
// }


//agar mujhe ek hi component se alag alag name print karwana h lets assume we use props



// function Palak(props){
//   return <div>{props.name}</div>;
// }

//destruvturing of props

// function Palak({name , classesname , income}){
//   return(
//     <div className = {classesname}>
//       {name}: {income}
//     </div>
//   );
// }




 //sirf ek hi div banaskte ho usme agar different command to ek to ek main div banao usme alag alag div banakr commend kro

// function App() {
//   return (
    

//     <div>hello  <Header />
//            {/* <Palak name={"plk"} classesname = "div1" income = {30}/> 
//             <Palak name={"plkm"}  classesname = "div2" income = {32}/> 
//              <Palak name={"ploik"} classesname = "div1" income = {33}/>
//               world 

//         <button>click me</button>  */}


//          </div>

//           /* hr jaise self closing tags to aise niche ki tarah nikhnahota h  */

//          /* <hr />    */
  
    
         
//         //  javascript curly brackets me niklna h ek toh aur function ke bahar ya andr likhskte ho par return ke andr ni


//   );
// }


// export default App;






function App() {
  return (
    

    <div> <Header />
   
          <House />

        

         </div>

  
  );
}


export default App;
     

