import React from 'react';
import { VideoPayload } from '../../types';
import './VideoCard.css';
import { formatRelativeTime } from '../../utils';
import thumbNailImage from '../../assets/White and Brown Minimalist Lesson Video Youtube Thumbnail.png'

interface VideoCardProps {
  video: VideoPayload;
  onSelectVideo: (video: VideoPayload) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onSelectVideo }) => {
  
  return (
    <div className="video-card" onClick={() => onSelectVideo(video)}>
      {/* Used default image for because the backend server does not offer that in response API */}
      <img src={thumbNailImage} alt={video.title} className="thumbnail" />
      <div className="video-info">
        <h2>{video.title}</h2>
        <small className="comment-text">{video.num_comments} Comments.</small>
        <small>{formatRelativeTime(video.created_at)}</small>
      </div>
    </div>
  );
};

export default VideoCard;
