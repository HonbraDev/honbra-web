import CardValues from "./CardValues";

import { Box, Card, Grid, Typography } from "@mui/material";
import { fixMotd } from "../utils";
import { useMemo } from "react";

export interface ServerInfo {
  name: string;
  motd: string;
  proxy: boolean;
  suspended?: boolean;
  online: boolean;
  playerCount: number;
  maxPlayers: number;
  versionType: string;
  categories: string[];
  visibility?: boolean;
  plan: string;
  creditsPerDay?: number;
  platform?: string;
}

function fixPlan(plan: string) {
  if (plan.startsWith("YEARLY ")) plan = plan.replace("YEARLY ", "Y");
  if (plan.endsWith(" Unlimited")) plan = plan.replace(" Unlimited", "U");
  return plan;
}

const ServerCard = ({ data }: { data: ServerInfo }) => {
  const motd = useMemo(() => fixMotd(data.motd), [data.motd]);
  const categories = useMemo(
    () => data.categories.join(" • "),
    [data.categories],
  );
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        p: 2,
      }}
    >
      <Box>
        <Typography variant="h5">{data.name}</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            {data.proxy ? "Proxy" : "Server"}
            <span>•</span>
            <span>
              {data.suspended ? (
                "Suspended"
              ) : data.online ? (
                <>
                  {data.playerCount}
                  {data.maxPlayers && (
                    <>
                      {" "}
                      / {data.maxPlayers === Infinity
                        ? "∞"
                        : data.maxPlayers}{" "}
                      online
                    </>
                  )}
                </>
              ) : (
                "Offline"
              )}
            </span>
            <span>•</span>
            <span>{data.versionType}</span>
          </Box>
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CardValues title="MOTD">{motd}</CardValues>
        </Grid>
        <Grid item xs={12} sm="auto">
          <CardValues title="Categories">{categories}</CardValues>
        </Grid>
        {"visibility" in data && (
          <Grid item xs={12} sm="auto">
            <CardValues title="Visible">
              {data.visibility ? "Yes" : "No"}
            </CardValues>
          </Grid>
        )}
        <Grid item xs={12} sm="auto">
          <CardValues title="Plan">{fixPlan(data.plan)}</CardValues>
        </Grid>
        {"creditsPerDay" in data && (
          <Grid item xs={12} sm="auto">
            <CardValues title="Credits per day">
              {Math.floor(data.creditsPerDay! * 100) / 100}
            </CardValues>
          </Grid>
        )}
        {"suspended" in data && (
          <Grid item xs={12} sm="auto">
            <CardValues title="Suspended">
              {data.suspended ? "Yes" : "No"}
            </CardValues>
          </Grid>
        )}
        {"platform" in data && (
          <Grid item xs={12} sm="auto">
            <CardValues title="Platform">{data.platform}</CardValues>
          </Grid>
        )}
      </Grid>
    </Card>
  );
};

export default ServerCard;
