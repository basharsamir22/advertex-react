import React from 'react'
import Title from '../Utility/Title'
const Form = () => {
    return (
        <div className="container drop">
        <Title title="Drop Us a Line" subTitle="Fill out the contact form and we will get back to you shortly."/>
        <div>
            <form action="" class="form-cont">
                <div>
                    <input type="text" placeholder="First Name" class="textareaa"  name="" id="" ></input>
                    <input type="text" placeholder="Last Name" class="textareaa" name="" id="" ></input>
                </div>
                <div>
                    <input type="email" placeholder="Email" class="textareaa" name="" id="" ></input>
                    <select name="" id="">
                        <option >Select a department</option>
                    </select>
                </div>
                <div>
                    <input className="message" placeholder="Message" name="" id="" cols="30" rows="10"></input>
                </div>
                <button>Send Message</button>
            </form>
        </div>
    </div>
    )
}

export default Form
