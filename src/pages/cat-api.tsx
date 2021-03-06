import meta from "../modules/cat-api/meta";
import CatApi from "../modules/cat-api/pages/CatApi";

import { GetStaticProps } from "next";
import { getImagePath } from "../modules/cat-api/utils";
import { getImageNames } from "../utils/serverUtils";

import type { Props } from "../modules/cat-api/pages/CatApi";

export default CatApi;
export { meta };

export const getStaticProps: GetStaticProps<Props> = async () => {
  const imageNames = await getImageNames();
  return {
    props: {
      imagePaths: imageNames.map(getImagePath),
    },
  };
};

