import AvatarCard from "./avatarcard";

function ContestGrid({ images }) {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                gap: "20px",
                marginTop: "20px",
            }}
        >
            {images.map((image) => (<AvatarCard
                key={image.id}
                image={image}
            />
            ))} </div>
    );
}

export default ContestGrid;
