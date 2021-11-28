import { Layout, Section } from "../../../components/layout";
import { Hero } from "../../../components/cat/hero";
import { AllImages } from "../../../components/cat/allimages";

import type { NextPage, GetStaticProps } from "next";

export const CatsApiPage: NextPage<Props> = ({ imagePaths }) => {
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

export interface Props {
  imagePaths: string[];
}
