import Article from "./article";
import nodeLogo from "./meslogos/node.png";
import expLogo from "./meslogos/exp.png";
import psqlLogo from "./meslogos/psql.png";
import sequelize from "./meslogos/sequelize.png";
import php from "./meslogos/php.png";
import mysql from "./meslogos/mysql.png";
import prisma from "./meslogos/prisma.png";

function Back() {
  return (
    <>
      <Article logo={<img src={nodeLogo} alt="Node.js" />} nom="Node.js" />
      <Article logo={<img src={expLogo} alt="Express.js" />} nom="Express.js" />
      <Article
        logo={<img src={psqlLogo} alt="PostgreSQL" />}
        nom="PostgreSQL"
      />
      <Article logo={<img src={sequelize} alt="Sequelize" />} nom="Sequelize" />
      <Article logo={<img src={mysql} alt="Mysql" />} nom="Mysql" />
      <Article logo={<img src={php} alt="Php" />} nom="Php" />
      <Article logo={<img src={prisma} alt="Prisma" />} nom="Prisma" />
    </>
  );
}

export default Back;
