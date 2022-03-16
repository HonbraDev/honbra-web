import { meta as bloatMeta } from "../pages/bloat";
import { meta as catApiMeta } from "../pages/cat-api";
import { meta as gradeCalculatorMeta } from "../pages/grade-calculator";
import { meta as passwordGeneratorMeta } from "../pages/password-generator";

import type PageMeta from "../types/PageMeta";

const projects: PageMeta[] = [
  catApiMeta,
  bloatMeta,
  passwordGeneratorMeta,
  gradeCalculatorMeta,
];

export default projects;
