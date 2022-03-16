import GradeCalculator from "../components/GradeCalculator";

import { Layout, Section } from "../../../components/Layout";

import type { NextPage } from "next";

const Grades: NextPage<Props> = () => {
  return (
    <>
      <Layout title="Grades">
        <Section
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <GradeCalculator />
        </Section>
      </Layout>
    </>
  );
};

export default Grades;

export interface Props {}
