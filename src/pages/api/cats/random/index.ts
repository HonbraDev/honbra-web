import { arrayRandom, getFsImagePath } from "../../../../modules/cats/catUtils";

import type { NextApiRequest, NextApiResponse } from "next";
import { getImageNames } from "../../../../serverUtils";
import fs from "fs";

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
