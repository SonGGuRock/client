export type AnnouncmentRepresentitive = {
  id: number;
  content: string;
};

export type Announcment = {
  title: string;
  content: string;
  // updated_at: string;
  is_representative_announcement: boolean;
  author: {
    name: string;
    id: number;
    profile_picture: string;
  };
};

export type AnnouncementEditRequest = Omit<Announcment, 'author'>;
