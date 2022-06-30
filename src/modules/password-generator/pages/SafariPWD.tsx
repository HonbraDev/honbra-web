import copy from "copy-to-clipboard";
import meta from "../meta";

import { Button, ButtonGroup, Card, TextField } from "@mui/material";
import { useState } from "react";
import { Layout, Section } from "../../../components/Layout";
import { generatePassword } from "../utils";

import type { NextPage } from "next";

const PasswordGenerator: NextPage<Props> = () => {
  const [password, setPassword] = useState(generatePassword());

  const copyPassword = () => copy(password);
  const regenerate = () => setPassword(generatePassword());

  return (
    <>
      <Layout meta={meta}>
        <Section>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              p: 2,
              width: "max-content",
              mx: "auto",
            }}
          >
            <TextField inputProps={{ readOnly: true }} value={password} />
            <ButtonGroup sx={{ ml: "auto" }}>
              <Button onClick={regenerate}>Regenerate</Button>
              <Button variant="outlined" onClick={copyPassword}>
                Copy
              </Button>
            </ButtonGroup>
          </Card>
        </Section>
      </Layout>
    </>
  );
};

export default PasswordGenerator;

export interface Props {}
