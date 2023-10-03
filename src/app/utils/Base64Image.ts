"server-only";

import { getPlaiceholder } from "plaiceholder";

export const getBase64Image = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Couldn't load image");
  }
  const buffer = await res.arrayBuffer();
  const { base64 } = await getPlaiceholder(Buffer.from(buffer));
  return base64;
};
