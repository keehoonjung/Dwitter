import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { sequelize } from "../db/database.js";
import SQ from "sequelize";

const DataTypes = SQ.DataTypes;

export const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  { timestamps: false }
);

export async function findByUsername(username) {
  return User.findOne({
    where: {
      username,
    },
  });
}

export async function findById(id) {
  return User.findByPk(id);
}

export async function create(userData) {
  return User.create(userData).then((result) => {
    return result.dataValues.id;
  });
}
