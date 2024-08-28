export interface IPostForm {
  content?: string;
  image?: string;
}

export interface IPostModel {
  author: IAuthor;
  id: number;
  content: string;
  createdAt: Date;
  image?: string;
}

interface IAuthor {
  id: number;
  fullName: string;
  userName: string;
  profile_pic?: string;
}
