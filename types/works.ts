import type { MicroCMSImage } from "microcms-js-sdk";

export type Works = {
  title: string;
  thumbnail: MicroCMSImage;
  overview: string;
  release: string;
  term?: string;
  url: string;
  position?: string;
  responsibility?: string;
  skill?: string;
  tool?: string;
  point?: string;
};