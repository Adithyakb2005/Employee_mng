import React,{useState} from "react";
import axios from "axios";

const AddEmp=()=>{
    const [Name,setName]=useState('');
    const [Address,setAddress]=useState('');
    const [Position,setPosition]=useState('');


    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('https://dummyjson.com/api/users/',{Name,Address})
            .then(response=>{
                console.log(response.data);
                setName('');
                setAddress('');
                
            })
            .catch(error=>console.error(error));
    }
    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2 className="text-info"><u>Add Employee</u></h2>
                <div>
                    <label className="text-dark">Name</label>
                    <input
                        className="form-control"
                        type="text"
                        value={Name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div className="mt-2">
                    <label>Address</label>
                    <textarea
                        className="form-control"
                        value={Address}
                        onChange={(e)=>setAddress(e.target.value)}
                    />
                </div>
                <div className="mt-3">
                    <label>Position</label>
                    <textarea
                        className="form-control"
                        value={Position}
                        onChange={(e)=>setPosition(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-success mt-4">Add</button>
            </form>

        </div>
    );
}
export default AddEmp;