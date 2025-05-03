import axios from 'axios';
import {parseDocument} from 'htmlparser2';
import {DomUtils, ElementType} from 'htmlparser2-without-node-native';
import {useEffect, useState} from 'react';

export const useGetWebsitePreviewUrl = (url?: string) => {
  const [data, setData] = useState<{
    title: string;
    description: string;
    image: string;
  } | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setIsFetching(true);
      try {
        const {data: html} = await axios.get(url);
        const dom = parseDocument(html);

        const metaTags = DomUtils.find(
          (el: any) => el.type === ElementType.Tag && el.name === 'meta',
          dom.children,
          true,
          100,
        );

        const getMetaContent = (name: string) => {
          const tag = metaTags.find(
            (el: any) =>
              el.attribs?.property === name || el.attribs?.name === name,
          );
          return tag?.attribs?.content || '';
        };

        const title = getMetaContent('og:title') || getMetaContent('title');
        const description =
          getMetaContent('og:description') || getMetaContent('description');
        const image = getMetaContent('og:image');

        setData({title, description, image});
      } catch (error) {
        console.error('[ERROR] Failed to fetch website preview:', error);
        setData(null);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, [url]);

  return {data, isFetching};
};
