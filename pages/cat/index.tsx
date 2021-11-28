import { Layout, Section } from "../../components/layout";
import { getImagePath } from "../../src/utils";
import { getImageNames } from "../../src/serverUtils";
import { Hero } from "../../components/cat/hero";
import { AllImages } from "../../components/cat/allimages";

import type { NextPage, GetStaticProps } from "next";

const CatApi: NextPage<Props> = ({ imagePaths }) => {
  return (
    <>
      <Layout title="Cat API">
        <Section>
          <Hero endpoint="honbra.com/api/cat/random" imagePaths={imagePaths} />
        </Section>
        <Section title="Images">
          <AllImages paths={imagePaths} />
        </Section>
      </Layout>
    </>
  );
};

export default CatApi;

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
