export interface MinehutServer {
  categories: string[];
  inheritedCategories: string[];
  purchased_icons: string[];
  backup_slots: number;
  suspended: boolean;
  server_version_type: string;
  proxy: boolean;
  connectedServers: string[];
  _id: string;
  motd: string;
  visibility: boolean;
  server_plan: string;
  storage_node: string;
  owner: string;
  name: string;
  name_lower: string;
  creation: number;
  platform: string;
  credits_per_day: number;
  __v: number;
  port: number;
  last_online: number;
  default_banner_image: string;
  default_banner_tint: string;
  active_icon: string | undefined;
  icon: string | undefined;
  online: boolean;
  maxPlayers: number | undefined;
  playerCount: number;
  rawPlan: string;
  activeServerPlan: string;
}

export interface MinehutServerInList {
  staticInfo: {
    _id: string;
    serverPlan: string;
    serviceStartDate: number;
    platform: string;
    planMaxPlayers: number;
    rawPlan: string;
    connectedServers: string[];
  };
  maxPlayers?: number | null | undefined;
  name: string;
  motd: string;
  icon?: string | null;
  playerData: { playerCount: number; timeNoPlayers: number };
  connectable?: boolean;
  visibility: boolean;
  categories: string[];
  server_version: { type: string; version: string };
  default_banner_image: string;
  default_banner_tint: string;
}

export function fixMotd(str: string) {
  return str.replace(/&[a-zA-Z0-9]/g, "");
}
