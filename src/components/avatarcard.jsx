function AvatarCard({ image }) {
    const imageUrl =
        "https://tcfxcunxtwtzyvrualbh.supabase.co/storage/v1/object/public/avatars/" +
        image.image_url;


    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
                backgroundColor: "#fff",
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

            <h3
                style={{
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
                Avatar #{image.image_number}
            </h3>
        </div>
    );


}

export default AvatarCard;
