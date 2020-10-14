import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AgencyContext } from '../../../App';
import logo from '../../../images/logos/logo.png'
import Sidebar from '../Sidebar/Sidebar';

const ServicesAdd = () => {
    const {loggedInUser, setLoggedInUser} = useContext(AgencyContext);
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
   
   
    const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
    }


const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
}


    const inputStyle = { 
        height:"120px",
        width:"180px",
        wordBreak: "breakWord"
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        const name = document.getElementById("name").value;
        const description = document.getElementById("description").value;
        // const image = document.getElementById("image").value;
        const info = {description, name};
        
        fetch('http://localhost:5000/addServices', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(info)
        })
    .then(res =>res.json())
    .then(data => {
        console.log(data);
        alert("Service Created");
    })

}
    return (
        <div>

            <div className="container mt-2">
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-lg-8 col-sm-12">
                    <h1>Add Service</h1>
                    <form onSubmit={submitHandler} className="bg-light p-5 rounded">
                       <div className='row bg-white'>
                        <div className="col rounded">
                            <div className="col-6">
                              <h4>Service Title</h4>
                              <input onBlur={handleBlur} type="text" id ="name" placeholder="Title" name="name"/>
                            </div>
                            <div className="col-6">
                            <h3>Description</h3>
                            <input onBlur={handleBlur} style={inputStyle} type="text" id ="description" placeholder="Description" name="description"/>
                            </div>
                        </div>

                        <div className="col">
                           
                            <div className="col-4">
                            <h3>Image</h3>
                            <input onChange={handleFileChange} type="file"/>
                            </div>
    
                        </div>
                          <div className="m-3 col-md-12">
                              <button className="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>




                    </div>

                </div>
            </div>

        </div>
    );
};

export default ServicesAdd;