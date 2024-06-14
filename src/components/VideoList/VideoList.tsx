import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./VideoList.css";
import { Video, VideoPayload } from "../../types";
import VideoCard from "../VideoCard/VideoCard";
import AddVideo from "../AddVideo/AddVideo";
import { baseUrl } from "../../utils";
import axios from "axios";

const VideoList: React.FC = () => {
  const [videos, setVideos] = useState<VideoPayload[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = () => {
    const queryParams = new URLSearchParams();
    queryParams.append("user_id", "john_wick");
    setLoading(true);
    axios
      .get(`${baseUrl}/videos?user_id=john_wick`)
      .then((data) => {
        setVideos(data.data.videos as unknown as VideoPayload[]);
      })
      .finally(() => setLoading(false));
  };

  const handleSelectVideo = (video: VideoPayload) => {
    navigate(`/video/${video.id}`);
  };

  const handleAddVideo = (newVideo: Video) => {
    setLoading(true);
    axios
      .post(`${baseUrl}/videos`, newVideo)
      .then(() => {
        fetchVideos();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <>
        {loading && <p className="loader-text">Loading...</p>}
        {!loading && (
          <div className="video-list">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onSelectVideo={handleSelectVideo}
              />
            ))}
          </div>
        )}
        <AddVideo addVideo={handleAddVideo} />
      </>
    </div>
  );
};

export default VideoList;
