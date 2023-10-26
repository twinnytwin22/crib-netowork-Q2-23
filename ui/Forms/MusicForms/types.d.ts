export interface SocialMediaLinkTypes {
  applemusic_url: string | null;
  spotify_url: string | null;
  instagram_url: string | null;
  x_url: string | null;
  soundcloud_url: string | null;
  website_url?: string | null;
}

export interface ArtistTypes {
  artist_id: string | number;
  discography: string | any;
  image_url: string;
  contact_email?: string;
  subject?: string;
  message?: string;
  artist_name?: string;
  genres?: string[];
  biography?: string;
  social_media_links: SocialMediaLinkTypes | null;
  contact_phone?: string;
  // Include contact_phone in the state
}

export interface UploadSongTypes {
  song_id?: string | number;
  title: string;
  artist_id: number | string;
  album?: string;
  release_year: number;
  genre: string;
  lyrics?: string;
  music_file_url: string;
  cover_art_url: string | null;
  keywords?: string[];
  artist_name: string;
  duration: string | null;
  //
}

export interface UploadMusicFormProps {
  initialArtistState: ArtistTypes;
  initialState: UploadSongTypes;
  formData: UploadSongTypes;
  artistData: ArtistTypes;
  initialSocialLinkState: SocialMediaLinkTypes;
  socialLinkState: SocialMediaLinkTypes;
  musicFile: string;
  status: string;
  audioSrc: string;
  imagePreview: string;
  imagePreviewOpen: boolean;
  genreValue: string;
  genreArray: string[] | any;
  setSocialLinkState: (state: SocialMediaLinkTypes) => void
  setArtistData: (artistData: ArtistTypes) => void;
  setFormData: (formData: UploadSongTypes) => void;
  setAudioSrc: (audioSrc: any) => void;
  setImagePreview: (imagePreview: any) => void;
  setImagePreviewOpen: (imagePreview: boolean) => void;
  setStatus: (status: any) => void;
  setMusicFile: (musicFile: any) => void;
  updateGenres: (newGenres: string[]) => void;
  updateSongKeywords: (newKeywords: string[]) => void;
  formatTime: (time: number) => string;
}
