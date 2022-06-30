import meta from "../modules/minehut-servers/meta";
import MinehutServers from "../modules/minehut-servers/pages/MinehutServers";
import axios from "axios";

import type { GetStaticProps } from "next";
import type { Props } from "../modules/minehut-servers/pages/MinehutServers";

export default MinehutServers;
export { meta };

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await axios.get(
    "https://api.minehut.com/servers?q=&limit=100&offset=0",
  );
  return {
    props: {
      servers: data.data.servers,
    },
    revalidate: 5,
  };
};
