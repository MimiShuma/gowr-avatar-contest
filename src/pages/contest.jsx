import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

function Contest() {
    const { id } = useParams();

    const [contest, setContest] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        getContest();
    }, []);

    async function getContest() {
        const { data, error } = await supabase
            .from("contests")
            .select("*")
            .eq("slug", id)
            .single();

        if (error) {
            console.error(error);
            return;
        }

        setContest(data);
        getImages(data.id);
    }

    async function getImages(contestId) {
        const { data, error } = await supabase
            .from("images")
            .select("*")
            .eq("contest_id", contestId)
            .order("image_number");

        if (error) {
            console.error(error);
            return;
        }

        setImages(data);
    }

    if (!contest) {
        return <p>Loading...</p>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>{contest.title}</h1>

            <h2>Contest Entries</h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "20px",
                    marginTop: "20px",
                }}
            >
                {images.map((image) => {
                    const imageUrl =
                        "https://tcfxcunxtwtzyvrualbh.supabase.co/storage/v1/object/public/avatars/" +
                        image.image_url;

                    return (
                        <div
                            key={image.id}
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "10px",
                                padding: "10px",
                            }}
                        >
                            <img
                                src={imageUrl}
                                alt={image.image_name}
                                style={{
                                    width: "100%",
                                    height: "300px",
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                }}
                            />

                            <h3>
                                Avatar #{image.image_number}
                            </h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );


}

export default Contest;
