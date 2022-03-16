import meta from "../meta";
import GradeCalculatorComponent from "../components/GradeCalculator";

import { Layout, Section } from "../../../components/Layout";

import type { NextPage } from "next";

const GradeCalculator: NextPage<Props> = () => {
  return (
    <>
      <Layout meta={meta}>
        <Section
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <GradeCalculatorComponent />
        </Section>
      </Layout>
    </>
  );
};

export default GradeCalculator;

export interface Props {}
