import React,{useState,useEffect} from "react";
import axios from 'axios'


const TaskList=()=>{
    const [employs,setEmp]=useState([]);
    const [editing,setEditing]=useState(false);
    const [currentEmp, setCurrentemp]= useState({id:null,name:'',address:'',position:'',salary:'',experience:'',phno:'',email:'',empid:''});

    useEffect(()=>{
        axios.get('https://aiswarya2325.pythonanywhere.com/employemanagement/employees/')
        .then(response => setEmp(response.data))
        .catch(error => console.log(error));
    },[]);
    const deleteEmp=(empid)=>{
                axios.delete(`https://aiswarya2325.pythonanywhere.com/employemanagement/employees/${empid}`)
                .then(response=>{
                    setemps(emps.filter(emp=>emp.empid!=empid));
                })
                .catch(error=>console.log(error));
        
            };
            const editEmp=(emp)=>{
                setEditing(true);
                setCurrentemp(emp);
            };
            const updateEmp=(empid,updatedEmp)=>{
                setEditing(false);
                axios.put(`https://aiswarya2325.pythonanywhere.com/employemanagement/employees/${empid}/`,updatedEmp)
                .then(response=>{
                    setemps(emps.map(emp=>(emp.empid===empid ? responce.data:emp)));
        
                })
                .catch(error=>console.log(error)
                );
            };
    
    return(
        <div className="container mt-3">
            <h2>Employee Table</h2>
            <table className="table table-bordered table-hover">
                {employs.map(emp => (
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.address}</td>
                        <td>{emp.position}</td>
                        <td>{emp.salary}</td>
                        <td>{emp.experience}</td>
                        <td>{emp.email}</td>
                        <td>{emp.empid}</td>
                        <td><button className="btn btn-warning px-3" onClick={() =>editEmp(emp)}>Edit</button></td>
                        <td><button className="btn btn-danger" onClick={() =>deleteEmp(emp.empid)}>Delete</button></td>
                    </tr>
                ))}
            </table>
            {editing ?(
                <EditTaskForm
                 currentTask={currentEmp}
                 updateTask={updateEmp}
                />
            ):null}
        </div>
    );
};


export default TaskList
    














// import React,{useState,useEffect} from "react";
// import axios from "axios";

// const EmpList=()=>{
//     const[employs,setEmp]=useState([]);
//     const[editing,setEditing]=useState(false);
//     const[currentemp,setCurrentemp]=useState({id:null,Name:'',Address:'',Position:'',Salary:'',Experience:'',Phno:'',Email:'',Emailid:''});
//     useEffect(()=>{
//         axios.get('https://aiswarya2325.pythonanywhere.com/employemanagement/employees/')
//         .then(response=>setEmp(response.data))
//         .catch(error=>console.log(error));

//     },[]);
//     const deleteemp=(id)=>{
//         axios.delete(`https://dummyjson.com/api/users/${id}`)
//         .then(response=>{
//             setemps(emps.filter(emp=>emp.id!=id));
//         })
//         .catch(error=>console.log(error));

//     };
//     const editemp=(emp)=>{
//         setEditing(true);
//         setCurrentemp(emp);
//     };
//     const updateemp=(id,updatedemp)=>{
//         setEditing(false);
//         axios.put(`https://dummyjson.com/api/users/${id}/`,updatedemp)
//         .then(response=>{
//             setemps(emps.map(emp=>(emp.id===id ? responce.data:emp)));

//         })
//         .catch(error=>console.log(error)
//         );
//     };
//     return(
//         <div className="container mt-3">
//             <h2>Employee List</h2>
//             <table className="table table-bordered table-hover">
//                 {employs.map(emp=>(
//                     <tr key={emp.id}>
//                         <td>{emp.id}</td>
//                         <td>{emp.Name}</td>
//                         <td>{emp.Address}</td>
//                         <td>{emp.Position}</td>
//                         <td>{emp.Salary}</td>
//                         <td>{emp.Experience}</td>
//                         <td>{emp.Phno}</td>
//                         <td>{emp.Email}</td>
//                         <td>{emp.Emailid}</td>
//                         <td><button className="btn btn-warning px-3" onClick={()=>editEmp(emp)}>Edit</button></td>
//                         <td><button className="btn btn-danger " onClick={()=>deleteEmp(emp.id)}>Delete</button></td>


//                     </tr>
//                 ))}
//             </table>
//             {editing ?(
//                 <EditempForm
//                 currentemp={currentemp}
//                 updateemp={updateemp}
//                 />
//             ):null}
//         </div>
//     );
// };
// const EditempForm=({currentemp,updateemp})=>{
//     const[emp,setemp]=useState(currentemp);

//     const handleInputChange=(e)=>{
//         const{name,value}=e.target;
//         setemp({...emp,[name]:value});

//     };
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         updateemp(emp.id,emp);

//     };
//     return(
//         <form onSubmit={handleSubmit}>
//             <h2>Edit Employee</h2>
//             <div>
//                 <label>Name</label>
//                 <input
//                     type="text"
//                     name="Name"
//                     value={emp.Name}
//                     onChange={handleInputChange}
//                 />
//             </div>
//             <div>
//                 <lable>Address</lable>
//                 <textarea 
//                     name="Address" 
//                     value={emp.Address}
//                     onChange={handleInputChange}
//                 />

//             </div>
//             <div>
//                 <label>Position</label>
//                 <input
//                     type="text"
//                     name="Position"
//                     value={emp.Position}
//                     onChange={handleInputChange}
//                 />
//             </div>
//             <div>
//                 <label>Salary</label>
//                 <input
//                     type="number"
//                     name="Salary"
//                     value={emp.Salary}
//                     onChange={handleInputChange}
//                 />
//             </div>
//             <div>
//                 <label>Experience</label>
//                 <input
//                     type="text"
//                     name="Experience"
//                     value={emp.Experience}
//                     onChange={handleInputChange}
//                 />
//             </div>
//             <button type="submit">Update Employee</button>
//         </form>
//     );
// };
// export default EmpList

