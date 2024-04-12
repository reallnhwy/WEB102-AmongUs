import React from 'react';
import './EditCrewmate.css'
import { supabase } from '../client';
import { useState } from 'react';
import { Link,useParams } from 'react-router-dom';

const EditCrewmate = () => {
    const {id} = useParams()
    const [char, setChar] = useState({id: null, name: "", color: "", super_power: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setChar( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updateCrewmate = async (event) => {
        event.preventDefault();
            await supabase
                .from('crewmates')
                .update({ name: char.name, color: char.color, super_power: char.super_power })
                .eq('id', id);
    
            console.log('Crewmate updated successfully!');
    
            window.location = "/";
    }

    const deleteCrewmate = async (event) => {
        event.preventDefault()

        await supabase
        .from('crewmates')
        .delete()
        .eq('id',id)

        window.location = "/"

    }
    


    return(
        <div className='EditCrewmate'>
            <Link to="/"><h1>Among Us</h1></Link>
            <h3> Edit your crewmates!</h3>
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
                <button onClick={updateCrewmate}>Submit</button> 
                <button onClick={deleteCrewmate}>Delete Crewmate!</button>
            </form>
        </div>
    )
}

export default EditCrewmate