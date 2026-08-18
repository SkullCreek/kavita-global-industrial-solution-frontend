export type Product = {
  title: string;
  category?: string;
  subCategory?: string;
  description?: string;
  id: number;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
  specifications?: { label: string; value: string }[];
};
