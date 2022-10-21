import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (host = "database"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  const NODE_ENV = process.env.NODE_ENV.trim();

  return createConnection(
    Object.assign(defaultOptions, {
      host: NODE_ENV === "test" ? "localhost" : host,
      database: NODE_ENV === "test" ? "rentx_test" : defaultOptions.database,
    })
  );
};
