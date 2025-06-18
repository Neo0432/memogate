export type ITag = {
  id: string;
  name: string;
};

export type IBookmarkTagLink = {
  tagId: string;
  bookmarkId: string;
};

export interface IAddTagDTO {
  name: string;
  bookmarkId: string;
}

export interface IAddTagResponseDto {
  tagInBookmark: IBookmarkTagLink;
  tag: ITag;
}

export interface IRemoveTagDTO {
  tagId: string;
  bookmarkId: string;
}
