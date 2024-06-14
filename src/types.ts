export interface Video {
  title: string;
  description: string;
  user_id: string;
  video_url: string;
}
export interface VideoPayload {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  created_at: string;
  num_comments: string;
  user_id: string;
  video_url: string;
}
export interface Comments {
  video_id: string;
  content: string;
  user_id: string;
}