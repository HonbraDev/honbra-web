import meta from "../meta";
import ServerCard from "../components/ServerCard";

import { Masonry } from "@mui/lab";
import { Grid } from "@mui/material";
import { useMemo } from "react";
import { Layout, Section } from "../../../components/Layout";

import type { NextPage } from "next";
import type { ServerInfo } from "../components/ServerCard";
import type { MinehutServerInList } from "../utils";

const MinehutServers: NextPage<Props> = ({ servers }) => {
  const parsedServers: ServerInfo[] = useMemo(
    () =>
      servers.map((server) => ({
        name: server.name,
        motd: server.motd,
        proxy: ["WATERFALL", "VELOCIY"].includes(server.server_version.type),
        online: true,
        playerCount: server.playerData.playerCount,
        maxPlayers: server.maxPlayers || Infinity,
        versionType: server.server_version.type,
        categories: server.categories,
        plan: server.staticInfo.serverPlan,
      })),
    [servers],
  );

  return (
    <Layout meta={meta} wider>
      <Section>
        <Masonry columns={3} spacing={2}>
          {parsedServers.map((server) => (
            <Grid item xs={12} sm={6} md={4} key={server.name}>
              <ServerCard data={server} />
            </Grid>
          ))}
        </Masonry>
      </Section>
    </Layout>
  );
};

export default MinehutServers;

export interface Props {
  servers: MinehutServerInList[];
}
