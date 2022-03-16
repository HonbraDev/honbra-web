import { Layout, Section } from "../../../components/Layout";
import { Hero } from "../components/Hero";
import { AllImages } from "../components/AllImages";
import { Testimonials } from "../components/Testimonials";

import type { NextPage } from "next";

export const CatsApiPage: NextPage<Props> = ({ imagePaths }) => {
  return (
    <>
      <Layout title="Cat API">
        <Section>
          <Hero endpoint="honbra.com/api/cats/random" imagePaths={imagePaths} />
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

export interface Props {
  imagePaths: string[];
}
