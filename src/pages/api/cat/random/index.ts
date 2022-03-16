import fs from "fs";

import { arrayRandom, getFsImagePath } from "../../../../modules/cat-api/utils";
import { getImageNames } from "../../../../serverUtils";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const imageNames = await getImageNames();
    const imageName = arrayRandom(imageNames);
    const imagePath = getFsImagePath(imageName);

    const imageBuffer = fs.readFileSync(imagePath);

    res.setHeader("Content-Type", "image/webp");
    res.send(imageBuffer);
  } catch (err) {
    res.status(500).send(err);
  }
}
