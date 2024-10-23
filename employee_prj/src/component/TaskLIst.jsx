import React,{useState,useEffect} from "react";
import axios from "axios";

const TaskList=()=>{
    const[tasks,setTasks]=useState([]);
    const[editing,setEditing]=useState(false);
    const[currentTask,setCurrentTask]=useState({id:null,Name:'',Address:'',Position:'',Salary:'',Experience:'',Phno:'',Email:'',Emailid:''});
    useEffect(()=>{
        axios.get('https://dummyjson.com/api/users/')
        .then(response=>setTasks(response.data))
        .catch(error=>console.log(error));

    },[]);
    // const deleteTask=(id)=>{
    //     axios.delete(`https://dummyjson.com/api/users/${id}`)
    //     .then(response=>{
    //         setTasks(tasks.filter(task=>task.id!=id));
    //     })
    //     .catch(error=>console.log(error));

    // };
    // const editTask=(task)=>{
    //     setEditing(true);
    //     setCurrentTask(task);
    // };
    // const updateTask=(id,updatedTask)=>{
    //     setEditing(false);
    //     axios.put(`https://dummyjson.com/api/users/${id}/`,updatedTask)
    //     .then(response=>{
    //         setTasks(tasks.map(task=>(task.id===id ? responce.data:task)));

    //     })
    //     .catch(error=>console.log(error)
    //     );
    // };
    return(
        <div className="container mt-3">
            <h2>Employee List</h2>
            <table className="table table-bordered table-hover">
                {tasks.map(task=>(
                    <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.Name}</td>
                        <td>{task.Address}</td>
                        <td>{task.Position}</td>
                        <td>{task.Salary}</td>
                        <td>{task.Experience}</td>
                        <td>{task.Phno}</td>
                        <td>{task.Email}</td>
                        <td>{task.Emailid}</td>
                        <td><button className="btn btn-warning px-3" onClick={()=>editTask(task)}>Edit</button></td>
                        <td><button className="btn btn-danger " onClick={()=>deleteTask(task.id)}>Delete</button></td>


                    </tr>
                ))}
            </table>
            {/* {editing ?(
                <EditTaskForm
                currentTask={currentTask}
                updateTask={updateTask}
                />
            ):null} */}
        </div>
    );
};
// const EditTaskForm=({currentTask,updateTask})=>{
//     const[task,setTask]=useState(currentTask);

//     const handleInputChange=(e)=>{
//         const{name,value}=e.target;
//         setTask({...task,[name]:value});

//     };
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         updateTask(task.id,task);

//     };
    // return(
    //     <form onSubmit={handleSubmit}>
    //         <h2>Edit Employee</h2>
    //         <div>
    //             <label>Name</label>
    //             <input
    //                 type="text"
    //                 name="Name"
    //                 value={task.Name}
    //                 onChange={handleInputChange}
    //             />
    //         </div>
    //         <div>
    //             <lable>Address</lable>
    //             <textarea 
    //                 name="Address" 
    //                 value={task.Address}
    //                 onChange={handleInputChange}
    //             />

    //         </div>
    //         <div>
    //             <label>Position</label>
    //             <input
    //                 type="text"
    //                 name="Position"
    //                 value={task.Position}
    //                 onChange={handleInputChange}
    //             />
    //         </div>
    //         <div>
    //             <label>Salary</label>
    //             <input
    //                 type="number"
    //                 name="Salary"
    //                 value={task.Salary}
    //                 onChange={handleInputChange}
    //             />
    //         </div>
    //         <div>
    //             <label>Experience</label>
    //             <input
    //                 type="text"
    //                 name="Experience"
    //                 value={task.Experience}
    //                 onChange={handleInputChange}
    //             />
    //         </div>
    //         <button type="submit">Update Employee</button>
    //     </form>
    // );
// };
export default TaskList