import { Photo } from './Photo';

  export interface RootObject {
    id: number;
    username: string;
    photoUrl: string;
    age: number;
    knownAs: string;
    created: Date;
    lastActive: Date;
    gender: string;
    introduction: string;
    lookingFor: string;
    intrests?: any;
    city: string;
    country: string;
    photos: Photo[];
  }
