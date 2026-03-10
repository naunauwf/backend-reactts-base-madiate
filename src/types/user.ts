export interface User {
  id: number;
  name: string;
  email: string;
  role?: string;
  description?: string;
  username?: string;
  imgUrl?: string;
  href?: string;
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: string;
      lng?: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
}
