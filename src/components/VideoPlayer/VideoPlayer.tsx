import React, { useCallback, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";
import { Comments, Video } from "../../types";
import axios from "axios";
import { baseUrl } from "../../utils";

interface VideoPlayerProps {
  video: Video | null;
  videoComments: Comments[];
  video_id: string | undefined;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  video,
  videoComments,
  video_id,
}) => {
  const [comments, setComments] = useState<Comments[]>([]);
  const [commentText, setCommentText] = useState("");
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchComments = useCallback(() => {
    const queryParams = new URLSearchParams();
    queryParams.append("user_id", "john_wick");
    setLoading(true);
    axios
      .get(`${baseUrl}/videos/comments?video_id=${video_id}`)
      .then((data) => {
        setComments(data.data.comments as unknown as Comments[]);
      })
      .finally(() => setLoading(false));
  },[video_id]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const handleAddComment = () => {
    const newComment = {
      user_id: "john_wick",
      content: commentText,
      video_id,
    };
    setLoading(true);
    axios
      .post(`${baseUrl}/videos/comments`, newComment)
      .then(() => {
        fetchComments();
      })
      .finally(() => {
        setCommentText("");
        setLoading(false);
      });
  };

  return (
    <div className="video-player-container">
      <ReactPlayer
        url={video?.video_url}
        controls
        playing={playing}
        volume={volume}
        playbackRate={playbackRate}
        width="100%"
        height="60vh"
      />
      <div className="controls">
        <button onClick={() => setPlaying(!playing)}>
          {playing ? "Pause" : "Play"}
        </button>
        <label>
          Volume:
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
          />
        </label>
        <label>
          Speed:
          <select
            value={playbackRate}
            onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
          >
            <option value="0.5">0.5x</option>
            <option value="1">1x</option>
            <option value="1.5">1.5x</option>
            <option value="2">2x</option>
          </select>
        </label>
      </div>
      <div className="video-description">
        <h2>{video?.title}</h2>
        <p>{video?.description}</p>
      </div>
      <div className="comment-section">
        <h3>{} Comments</h3>
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button disabled={loading} onClick={handleAddComment}>
          Add Comment
        </button>
        {comments.map((comment) => (
          <div className="comment" key={comment.video_id}>
            {comment.content}
            {loading && <p>Updating comment list...</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
