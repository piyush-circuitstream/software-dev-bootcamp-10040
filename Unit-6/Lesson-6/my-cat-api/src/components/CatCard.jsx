function CatCard({ imageId, imageUrl }) {
    return (
        <div className="cat-card">
            <img src={imageUrl} alt="Random Cat" id={imageId} style={{ width: '100%', borderRadius: '10px' }} />
        </div>
    );
}

export default CatCard;