import axios from 'axios';
import {parseDocument} from 'htmlparser2';
import {ElementType, DomUtils} from 'htmlparser2-without-node-native';

export async function getWebsitePreview(url: string) {
  try {
    const {data: html} = await axios.get(url);

    const dom = parseDocument(html);
    console.log(dom);

    const metaTags = DomUtils.find(
      (el: any) => el.type === ElementType.Tag && el.name === 'meta',
      dom.children,
      true,
      100,
    );

    const getMetaContent = (name: string) => {
      const tag = metaTags.find(
        (el: any) => el.attribs?.property === name || el.attribs?.name === name,
      );
      return tag?.attribs?.content || null;
    };

    const title = getMetaContent('og:title') || getMetaContent('title') || '';
    const description =
      getMetaContent('og:description') || getMetaContent('description') || '';
    const image = getMetaContent('og:image') || '';
    // const favicon = `${new URL(url).origin}/favicon.ico`;

    return {title, description, image};
  } catch (error) {
    console.error('[ERROR] Failed to fetch website preview:', error);
    return null;
  }
}
