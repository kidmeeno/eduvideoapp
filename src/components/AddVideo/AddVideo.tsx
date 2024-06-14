import React, { useState } from "react";
import "./AddVideo.css";

interface Video {
  title: string;
  description: string;
  user_id: string;
  video_url: string;
}

interface AddVideoProps {
  addVideo: (video: Video) => void;
}

const AddVideo: React.FC<AddVideoProps> = ({ addVideo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const handleAddVideo = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newVideo: Video = {
      title,
      description,
      user_id: "john_wick",
      video_url: url,
    };
    addVideo(newVideo);
    setTitle("");
    setDescription("");
    setUrl("");
  };

  return (
    <div className="add-video-container">
      <h2>Add New Video</h2>
      <form onSubmit={handleAddVideo}>
        <input
          type="text"
          placeholder="Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Video URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onSubmit={handleAddVideo}>Add Video</button>
      </form>
    </div>
  );
};

export default AddVideo;
