import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client';
import { Link } from 'react-router-dom';

const Gallery = () => { 
    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {
        const fetchCrewmates = async () => {
            const { data, error } = await supabase
                .from('crewmates')
                .select()
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching crewmates:', error.message);
            } else {
                console.log(data)
                setCrewmates(data);
            }
        };

        fetchCrewmates();
    }, []); 

    return (
        <div className='Gallery'>
            <Link to="/"><h1>Among Us</h1></Link>
            {crewmates && crewmates.length > 0 ? (
                crewmates.map((crewmate, index) => (
                    <Link to={"/info/" + crewmate.id}>
                    <Card
                        key={index}
                        id={crewmate.id}
                        name={crewmate.name}
                        color={crewmate.color}
                        super_power={crewmate.super_power}
                    />
                    </Link>
                ))
            ) : (
                <h2>No Crewmates Yet</h2>
            )}
        </div>
    );
};

export default Gallery;
