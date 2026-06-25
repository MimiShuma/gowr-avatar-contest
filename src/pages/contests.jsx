import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

function Contests() {
    const [contests, setContests] = useState([]);

    useEffect(() => {
        loadContests();
    }, []);

    async function loadContests() {
        const { data, error } = await supabase
            .from("contests")
            .select("*");

        if (error) {
            console.error(error);
            return;
        }

        setContests(data);
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>All Contests</h1>

            {contests.map((contest) => (
                <div key={contest.id}>
                    <h3>{contest.title}</h3>

                    <a href={`/contest/${contest.slug}`}>
                        Open Contest
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Contests;