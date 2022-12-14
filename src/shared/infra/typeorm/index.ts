import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  let NODE_ENV;

  if (process.env.NODE_ENV) {
    NODE_ENV = process.env.NODE_ENV.trim();
  }

  return createConnection(
    Object.assign(defaultOptions, {
      database: NODE_ENV === "test" ? "rentx_test" : defaultOptions.database,
    })
  );
};
