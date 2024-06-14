import React from "react";
import { useParams } from "react-router-dom";
import { Comments, Video } from "../../types";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import axios, { AxiosResponse } from "axios";
import { baseUrl } from "../../utils";

interface VideoDetailProps {} // Empty interface, no specific props needed

// Interface for your API response data (replace with your actual structure)
interface MyApiResponse {
  comments: Comments[];
  video: Video;
  data: string;
}

const VideoDetail: React.FC<VideoDetailProps> = () => {
  const { id } = useParams<{ id: string }>();
  const videoId = id ? parseInt(id) : undefined; // Parse only if id exists
  const [video, setVideo] = React.useState<Video | null>(null);
  const [comments, setComments] = React.useState<Comments[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>("");

  React.useEffect(() => {
    const apiUrls = [
      `${baseUrl}/videos/single?video_id=${id}`,
      `${baseUrl}/videos/comments?video_id=${id}`,
    ];
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Use Promise.all to wait for all requests to resolve
        const responses = await Promise.all(
          apiUrls.map(async (url) => {
            const response: AxiosResponse<MyApiResponse> = await axios.get(url);
            return response.data;
          })
        );

        setVideo(responses[0].video as Video);
        setComments(responses[1].comments as Comments[]);
      } catch (error) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, videoId]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="video-detail">
      <VideoPlayer video={video} videoComments={comments} video_id={id} />
    </div>
  );
};

export default VideoDetail;
