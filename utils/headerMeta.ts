export type headerMetaData = {
  title: string;
  image?: string;
  description: string;
  url?: string;
};

const defaultImage = '/images/fb_thumbnail.png';

export function initHeaderMeta(headerData: headerMetaData): any[] {
  return [
    { hid: 'title', name: 'title', content: headerData.title || '' },
    { hid: 'description', name: 'description', content: headerData.description || '' },
    { hid: 'image', name: 'image', content: headerData.image || defaultImage },
    { hid: 'author', name: 'author', content: 'Antoine Piché' },
    { hid: 'DC.publisher', name: 'DC.publisher', content: 'Antoine Piché' },
    { hid: 'DC.format', name: 'DC.format', content: 'website' },
    { hid: 'DC.title', name: 'DC.title', content: headerData.title || '' },
    { hid: 'DC.image', name: 'DC.image', content: headerData.image || defaultImage },
    { hid: 'DC.description', name: 'DC.description', content: headerData.description || '' },
    { hid: 'og:description', property: 'og:description', content: headerData.description || '' },
    { hid: 'og:image', property: 'og:image', content: headerData.image || defaultImage },
    { hid: 'og:title', property: 'og:title', content: headerData.title || '' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
  ];
}

export { defaultImage };
