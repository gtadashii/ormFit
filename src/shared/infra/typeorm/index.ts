import { Connection, createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
  host: string;
}

export default async (): Promise<Connection> => {
  const defaultOptions = (await getConnectionOptions()) as IOptions;

  defaultOptions.host = "database_ormfit";

  return createConnection(Object.assign(defaultOptions));
};
