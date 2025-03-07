export type IBookmark = {
  createdAt: string;
  id: string;
  userId: string;
  url: string;
  title: string;
  description: string;
};

export interface IBookmarkCreateDTO {
  userId: string;
  url: string;
  title: string;
  description: string;
}

export interface IBookmarkUpdateDTO {
  id: string;
  title: string;
  description: string;
  url: string;
}
