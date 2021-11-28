import { GetStaticProps } from "next";
import { CatsApiPage } from "../../modules/cats/pages/CatsPage";
import { getImageNames } from "../../serverUtils";
import { getImagePath } from "../../modules/cats/catUtils";

export default CatsApiPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const imageNames = await getImageNames();
  return {
    props: {
      imagePaths: imageNames.map(getImagePath),
    },
  };
};

export interface Props {
  imagePaths: string[];
}
