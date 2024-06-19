export type AnnouncmentRepresentitive = {
  id: number;
  title: string;
  updated_at: string;
  is_representative_announcement: boolean;
};

export type Announcment = {
  title: string;
  content: string;
  updated_at: string;
  is_representative_announcement: boolean;
  author: {
    name: string;
    id: number;
    profile_picture: string;
  };
};

export type AnnouncementEditRequest = {
  title: string;
  content: string;
  is_representative_announcement: boolean;
};
