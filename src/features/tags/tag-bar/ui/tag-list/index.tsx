import {IRemoveTagDTO, ITag} from '@entities/tag/types.ts';
import {BookmarkTag} from '@shared/ui/tags';

export function TagBarList({
  tags,
  onRemove,
  bookmarkId,
}: {
  tags: ITag[];
  onRemove: (tag: IRemoveTagDTO) => void;
  bookmarkId?: string;
}) {
  if (!bookmarkId) return null;
  return (
    <>
      {tags?.map(tag => (
        <BookmarkTag
          onRemove={() => onRemove({tagId: tag.id, bookmarkId: bookmarkId})}
          key={tag.id}>
          {tag.name}
        </BookmarkTag>
      ))}
    </>
  );
}
