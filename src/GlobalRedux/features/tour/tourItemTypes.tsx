export interface TourItem {
  id: number;
  image: string;
  imageAlt: string;
  name: string;
  type: string;
  price: number;
  salePrice: number;
  location: string | string[];
  routeLocations: string[];
  duration: string;
  flags: {
    ultimate: boolean;
    affordable: boolean;
    elite: boolean;
  };
}