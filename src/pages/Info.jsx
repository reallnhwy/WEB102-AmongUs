import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom";

const Info = () => {
    const { id } = useParams();
    const [info, setInfo] = useState({id: null, name: "", color: "", super_power: ""});

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                const { data, error } = await supabase
                    .from("crewmates")
                    .select("*")
                    .eq("id", id)
                    .single();

                if (error) {
                    throw error;
                }

                if (data) {
                    setInfo(data);
                }
            } catch (error) {
                console.error("Error fetching info:", error.message);
            }
        };

        fetchInfo();
    }, [id]);

    return (
        <div className="Info">
            <Link to="/"><h1>Among Us</h1></Link>
            {info ? (
                <>
                    <h3>Name: {info.name}</h3>
                    <h3>Color: {info.color}</h3>
                    <h3>Super Power: {info.super_power}</h3>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Info;
