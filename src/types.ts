export interface NftProps {
  id: number;
  price: number;
  image: {
    url: string;
    previewUrl: string;
    thumbnailUrl: string;
  };
  collection: {
    name: string;
  };
  onWallet: boolean;
}