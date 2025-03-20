import React from "react";

const LikeButton = ({ label, color }) => {
  const [likes, setLikes] = React.useState(0);

  return (
    <button 
      onClick={() => setLikes(likes + 1)}
      style={{ backgroundColor: color, color: "white", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer", fontSize: "16px" }}
    >
      {label} ❤️ {likes} Likes
    </button>
  );
};

export default LikeButton;