// import React from 'react'

// let input;
// const changeHandler =(e) => {
//     input = e.target.value;
//     console.log(input);
//  };

// //  const buttonstyle = {
// //     padding : 20,
// //     border : "none",
// //     backgroundColor : "#f1f1f1",
// //  }

// const House = () => {
//   return (
//     <div>
//         {/* ye jisme hum type krte h waisa banaya h */}

//         <input 
//         type = "number" 
//          placeholder='enter'

//          onChange = {changeHandler}
//          />     
//          <button>-</button>
//          <button>+</button>  
//     </div>
//   );
// };

// export default House;






//to do list 


import React, { useEffect, useState } from 'react';
import Task from './Task';


const House = () => {
  const initial = localStorage.getItem('tasks')
    ? JSON.parse(localStorage.getItem('tasks'))
    : [];

  const [tasks, setTasks] = useState(initial);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    setTasks([
      ...tasks,
      {
        title: title,
        description: description,
      },
    ]);

    setTitle('');
    setDescription('');
  };

  const deleteTask = (index) => {
    const filteredArr = tasks.filter((val, i) => {
      return i !== index;
    });
    setTasks(filteredArr);
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
        {/* <img src = ".../public/yess.jpg"></img>   */}
      <h1>DAILY GOALS</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">ADD</button>
      </form>

      {tasks.map((item, index) => (
        <Task
          key={index}
          title={item.title}
          description={item.description}
          deleteTask={deleteTask}
          index={index}
        />
      ))}
    </div>
  );
};

export default House;
