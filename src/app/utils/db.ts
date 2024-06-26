// project-root/utils/db.ts
import * as sequelize_1 from "sequelize";

const sequelize = new sequelize_1.Sequelize(
  'gif_maker',
  'gif_maker',
  'Z@VFcy1rhyQlD7R8',
  {
    host: 'database.devcodeth.com',
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    define: {
      timestamps: false,
    },
    logging: (msg: any) => console.log(msg)
  },
);

sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully!"))
  .catch((err: any) =>
    console.error(`Unable to connect to the database: ${err}`),
  );

export default sequelize;
