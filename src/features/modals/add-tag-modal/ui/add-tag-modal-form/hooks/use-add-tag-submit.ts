import {IAddTagForm} from '@features/modals/add-tag-modal/ui/add-tag-modal-form/model/types';
import {ITag} from '@entities/tag/types.ts';
import {useAddTagForBookmarkMutation} from '@entities/tag/model/api';
import {useEffect} from 'react';

export const useAddTagSubmit = (allTags: ITag[], bookmarkId: string) => {
  const [addTagForBookmark, {error}] = useAddTagForBookmarkMutation();

  useEffect(() => {
    console.log(error);
  }, [error]);
  return (data: IAddTagForm) => {
    if (data.tagName)
      addTagForBookmark({name: data.tagName, bookmarkId: bookmarkId});
    else if (data.tagDropdown) {
      console.log(data.tagDropdown);
      const tagName = allTags.find(tag => tag.id === data.tagDropdown);
      if (!tagName) {
        throw new Error(
          `[Error] Cant find existing tag with this id: ${data.tagDropdown}`,
        );
      }
      console.log({name: tagName.name, bookmarkId: bookmarkId});
      addTagForBookmark({name: tagName.name, bookmarkId: bookmarkId});
    }
  };
};
