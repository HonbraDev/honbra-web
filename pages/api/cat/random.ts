import { arrayRandom, getImagePath } from "../../../src/utils";

import type { NextApiRequest, NextApiResponse } from "next";
import { getImageNames } from "../../../src/serverUtils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const imageNames = await getImageNames();
    const imageName = arrayRandom(imageNames);
    const imagePath = getImagePath(imageName);

    res.redirect(302, imagePath);
  } catch (err) {
    res.status(500).send(err);
  }
}
