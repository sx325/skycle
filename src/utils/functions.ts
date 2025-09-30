import sharp from "sharp";

export const compressToUnder1MB = async (
  data: Uint8Array<ArrayBuffer>
): Promise<Uint8Array<ArrayBuffer>> => {
  const maxSize = 1024 * 1024;
  let quality = 90;

  let compressed = await sharp(data).jpeg({ quality }).toBuffer();

  while (compressed.length > maxSize && quality > 10) {
    quality -= 5;
    compressed = await sharp(data).jpeg({ quality }).toBuffer();
  }

  return new Uint8Array(compressed.buffer as ArrayBuffer);
};