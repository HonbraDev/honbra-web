import { GetStaticProps } from "next";
import { CatsApiPage } from "../../modules/cats/pages/CatsPage";
import { getImageNames } from "../../serverUtils";
import { getImagePath } from "../../modules/cats/catUtils";

import type { Props } from "../../modules/cats/pages/CatsPage";

export default CatsApiPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const imageNames = await getImageNames();
  return {
    props: {
      imagePaths: imageNames.map(getImagePath),
    },
  };
};
