import React from 'react';
import './CreateCrewmate.css'
import { supabase } from '../client';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateCrewmate = () => {
    const [char, setChar] = useState({name: "", color: "", super_power: ""})

    const handleChange = (event) => {
        const {name, value} = event.target
        setChar((prev) => {
            return{
                ...prev, [name]: value,
            }
        })
    }

    const createChar = async (event) => {
        event.preventDefault()

        await supabase
        .from('crewmates')
        .insert({name: char.name, color: char.color, super_power: char.super_power})
        .select()

        window.location = "/"
    }

    return(
        <div className='CreateCrewmate'>
            <Link to="/"><h1>Among Us</h1></Link>
            <form>
                <label for="name">Name</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br/>

                <label for="super_power">Super Power</label><br />
                <input type="text" id="super_power" name="super_power" onChange={handleChange} /><br />
                <br/>

                <label for="color">Color</label><br />
                <input type="radio" id="red" name="color" value="red" onChange={handleChange} />
                <label for="red">Red</label><br />

                <input type="radio" id="yellow" name="color" value="yellow" onChange={handleChange} />
                <label for="yellow">Yellow</label><br />

                <input type="radio" id="green" name="color" value="green" onChange={handleChange} />
                <label for="green">Green</label><br />

                <input type="radio" id="black" name="color" value="black" onChange={handleChange} />
                <label for="black">Black</label><br />

                <input type="radio" id="white" name="color" value="white" onChange={handleChange} />
                <label for="white">White</label><br />
                <br/>
                <button onClick={createChar}>Submit</button> 
            </form>
        </div>
    )
}
export default CreateCrewmate;