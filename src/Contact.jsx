import React, { useState } from 'react';

const Contact = () => {
    const [data, setdata] = useState({
        fullname: "",
        phone: "",
        email:"",
        msg:""
    });

    const InputEvent = (event)=>{
        const {name, value} = event.target;

        setdata((preval)=>{
          return{  ...preval,
                  [name]: value,    
        }
        })
    }

    const formSubmit = (e)=>{
        e.preventDefault();
        alert(`${data.fullname}`)
    }


    return (
        <>
            <div className="my-5">
                <div className="text-center">Contact Us</div>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 mx-auto col-10">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="text" class="form-control" name = "fullname" value={data.fullname} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Enter your Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                                <input type="number" class="form-control" name = "phone" value={data.phone} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Enter Your Number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email</label>
                                <input type="email" class="form-control" name = "email" value={data.email} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Enter your Email" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" name = "msg" value={data.msg} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                            <br/>
                            <br/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;