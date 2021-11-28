import { NextApiRequest, NextApiResponse } from "next";
import { manifestation } from "@duxcore/manifestation"
import { getImageNames } from "../../../serverUtils";
import { arrayRandom, getImagePath } from "../../../modules/cats/catUtils";
import { read } from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const imageNames = await getImageNames();

    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(manifestation.newApiResponse({
      status: 200,
      message: "Successfully Fetched Image!",
      data: [
        imageNames.map(name => ({
          name: name.split(".")[0],
          type: "image/webp",
          url: `//${req.headers.host}${getImagePath(name)}`
        }))
      ]
    }))
  } catch (err) {
    res.status(500).send(err);
  }
}