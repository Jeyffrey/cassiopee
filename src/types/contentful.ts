import type { Asset } from 'contentful';

export interface ContentfulAsset {
  fields: {
    file: {
      url: string;
      details?: {
        size: number;
        image?: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
    title?: string;
    description?: string;
  };
}

export type ContentfulAssetField = Asset<undefined, string>;
