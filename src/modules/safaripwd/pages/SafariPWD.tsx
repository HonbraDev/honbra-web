import copy from "copy-to-clipboard";

import { Layout, Section } from "../../../components/layout";
import { Card, Button, TextField, ButtonGroup } from "@mui/material";
import { useState } from "react";

import type { NextPage } from "next";
import { generatePassword } from "../generatePassword";

const SafariPWD: NextPage<Props> = () => {
  const [password, setPassword] = useState(generatePassword());

  const copyPassword = () => copy(password);
  const regenerate = () => setPassword(generatePassword());

  return (
    <>
      <Layout title="SafariPWD">
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

export default SafariPWD;

export interface Props {}
