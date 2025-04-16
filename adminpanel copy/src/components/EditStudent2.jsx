import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
 
export default function EditStudent2() {
    const navigate = useNavigate();
 
    const [inputs, setInputs] = useState([]);
 
    const {id} = useParams();
 
    useEffect(() => {
        getUser();
    }, []);
 
    function getUser() {
        axios.get(`http://localhost:80/react/api/index.php`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }
 
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
 
        axios.put(`http://localhost:80/react/api/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
         
    }
    return (
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
            <h1>Edit user</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label>Name</label>
                  <input type="text" value={inputs.name} className="form-control" name="name" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label>School Id</label>
                  <input type="text" value={inputs.school_id} className="form-control" name="school_id" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label>Roll No</label>
                  <input type="text" value={inputs.roll_no} className="form-control" name="roll_no" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label>Father's Name</label>
                  <input type="text" value={inputs.father_name} className="form-control" name="father_name" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label>Mother's Name</label>
                  <input type="text" value={inputs.mother_name} className="form-control" name="mother_name" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input type="text" value={inputs.email} className="form-control" name="email" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label>Phone 1</label>
                  <input type="text" value={inputs.mobile} className="form-control" name="mobile" onChange={handleChange} />
                </div>    
                <div className="mb-3">
                  <label>Phone 2</label>
                  <input type="text" value={inputs.phone} className="form-control" name="phone" onChange={handleChange} />
                </div>    
                <button type="submit" name="update" className="btn btn-primary">Save</button>
            </form>
            </div>
            <div className="col-2"></div>
        </div>
    )
}