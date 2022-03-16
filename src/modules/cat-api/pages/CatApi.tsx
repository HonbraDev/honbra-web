import meta from "../meta";

import { Layout, Section } from "../../../components/Layout";
import { Hero } from "../components/Hero";
import { AllImages } from "../components/AllImages";
import { Testimonials } from "../components/Testimonials";

import type { NextPage } from "next";

const CatApi: NextPage<Props> = ({ imagePaths }) => {
  return (
    <>
      <Layout meta={meta}>
        <Section>
          <Hero endpoint="honbra.com/api/cat/random" imagePaths={imagePaths} />
        </Section>
        <Section title="Images">
          <AllImages imagePaths={imagePaths} />
        </Section>
        <Section title="Testimonials">
          <Testimonials />
        </Section>
      </Layout>
    </>
  );
};

export default CatApi;

export interface Props {
  imagePaths: string[];
}
