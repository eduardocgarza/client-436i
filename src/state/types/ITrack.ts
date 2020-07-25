import IArtist from "./IArtist"

export default interface ITrack {
  _id: string;
  spotifyId: string;
  accounts: string[];
  // Data
  name: string;
  popularity: number;
  url: string;
  image: {
    height: number;
    width: number;
    url: string;
  };
  audioPreviewURL: string;
  artists: IArtist[];
}