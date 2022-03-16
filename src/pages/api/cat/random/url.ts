import { NextApiRequest, NextApiResponse } from "next";
import { manifestation } from "@duxcore/manifestation";
import { getImageNames } from "../../../../utils/serverUtils";
import { arrayRandom, getImagePath } from "../../../../modules/cat-api/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const imageNames = await getImageNames();
    const imageName = arrayRandom(imageNames);
    const imagePath = getImagePath(imageName);

    res.setHeader("Content-Type", "application/json");
    res.status(200).send(
      manifestation.newApiResponse({
        status: 200,
        message: "Successfully Fetched Image!",
        data: {
          url: `https://${req.headers.host}${imagePath}`,
        },
      }),
    );
  } catch (err) {
    res.status(500).send(err);
  }
}
