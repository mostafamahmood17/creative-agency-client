import React, { useContext, useState } from 'react';
import { AgencyContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const ServicesAdd = () => {
    const { loggedInUser, setLoggedInUser } = useContext(AgencyContext);
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
   


    const handleBlur = (e) => {
        const newInfo = { ...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }


    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }


    const inputStyle = {
        height: "120px",
        width: "180px",
        wordBreak: "breakWord"
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('description', info.description)
  
      
        fetch('http://localhost:5000/addServices', {
          method: 'POST',
          body: formData
          
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          alert("File submited");
          
        })
        .catch(error => {
          console.error(error)
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
                                    <div className="col-6 from-group">
                                        <label htmlFor="name">Service Title</label>
                                        <input onBlur={handleBlur} type="text" id="name" placeholder="Title" name="name" />
                                    </div>
                   
                                    
                                    <div className="col-6 from-group">
                                        <label htmlFor="description">Description</label>
                                        <input onBlur={handleBlur} style={inputStyle} type="text" id="description" placeholder="description" name="description" />
                                    </div>
                                </div>
                                <div className="col">

                                    <div className="col-4 from-group">
                                        
                                            <label htmlFor="file">Upload Image</label>
                                            
                                        
                                        <input onChange={handleFileChange} type="file" id="file" placeholder="picture"/>
                                        
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


// const name = document.getElementById("name").value;
// const description = document.getElementById("description").value;
// // const image = document.getElementById("image").value;
// const info = { description, name };

// fetch('http://localhost:5000/addServices', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(info)
// })
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         alert("Service Created");
//     })