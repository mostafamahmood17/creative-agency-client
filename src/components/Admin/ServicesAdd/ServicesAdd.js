import React, { useContext, useState } from 'react';
import { AgencyContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';


const ServicesAdd = () => {
    // services add component
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const {loggedInUser, setLoggedInUser} = useContext(AgencyContext);

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
        height: "120px",
        width: "180px",
        wordBreak: "breakWord"
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const doc = document.getElementById("status").value;
        const pic = document.getElementById("pic").value
        console.log(pic)


        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('description', info.description)
        formData.append('upd', doc)
        formData.append('pict', pic)



        fetch('https://fast-sea-24208.herokuapp.com/addServices', {
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
                        <div className="d-flex justify-content-between">
                            <div>
                                <h3>Dashboard</h3>
                            </div>
                            <div>
                                {loggedInUser && <h3>{loggedInUser.name}</h3>}
                            </div>
                        </div>
                        <form onSubmit={submitHandler} className="bg-light p-5 rounded">
                            <div className='row bg-white'>
                                <div className="col rounded">
                                    <div className="col-6 from-group">
                                        <label htmlFor="name" className="font-weight-bold">Service Title</label>
                                        <input onBlur={handleBlur} type="text" id="name" placeholder="Title" name="name" required />
                                    </div>


                                    <div className="col-6 from-group">
                                        <label htmlFor="description" className="font-weight-bold">Description</label>
                                        <input name="file" onBlur={handleBlur} style={inputStyle} type="text" id="description" placeholder="description" name="description" required />

                                    </div>
                                    <input className="d-none" type="text" id="status" defaultValue="pending" name="upd" required />

                                    <input className="d-none" type="text" id="pic" defaultValue="https://imgur.com/8Y2reg0.png" name="pict" required />

                                </div>
                                <div className="col">

                                    <div className="col-4 from-group">

                                        <label htmlFor="file" className="font-weight-bold">Upload Image</label>

                                        {/* <button width="150px" className="btn btn-outline-success d-flex justify-content-around">
                                            <input onChange={handleFileChange} className="d-none text-nowrap" id="file" type="file" />
                                            <FontAwesomeIcon className="mt-1" icon={faCloudUploadAlt} />
                                            <span className="pl-1">Upload</span>
                                        </button> */}
                                        <input className="btn btn-outline-success" onChange={handleFileChange} type="file" id="file" required />


                                    </div>

                                </div>
                                <div className="m-3 col-md-12">
                                    <button className="btn btn-success" type="submit">Submit</button>
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


