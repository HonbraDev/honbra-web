import { Layout, Section } from "../../../components/layout";

import type { NextPage, GetStaticProps } from "next";
import { Hero } from "../components/hero";
import { AllImages } from "../components/allimages";

export const CatsApiPage: NextPage<Props> = ({ imagePaths }) => {
  return (
    <>
      <Layout title="Cat API">
        <Section>
          <Hero endpoint="honbra.com/api/cat/random" imagePaths={imagePaths} />
        </Section>
        <Section title="Images">
          <AllImages />
        </Section>
      </Layout>
    </>
  );
};

export interface Props {
  imagePaths: string[];
}
