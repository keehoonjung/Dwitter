import { sequelize } from "../db/database.js";
import SQ from "sequelize";
import { User } from "../data/auth.js";

const DataTypes = SQ.DataTypes;
const Sequelize = SQ.Sequelize;

const Tweet = sequelize.define("tweet", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});
Tweet.belongsTo(User);

const INCLUDE_USER = {
  attributes: [
    "id",
    "text",
    "createdAt",
    "userId",
    [Sequelize.col("User.name"), "name"],
    [Sequelize.col("User.username"), "username"],
    [Sequelize.col("User.url"), "url"],
  ],
  include: {
    model: User,
    attributes: [],
  },
};

const ORDER_DESC = {
  order: [["createdAt", "DESC"]],
};

export async function getAll() {
  return Tweet.findAll({ ...INCLUDE_USER, ...ORDER_DESC });
}

export async function getAllByUsername(username) {
  return Tweet.findAll({
    ...INCLUDE_USER,
    ...ORDER_DESC,
    include: {
      ...INCLUDE_USER.include,
      where: { username },
    },
  });
}

export async function getById(id) {
  return Tweet.findOne({
    where: { id },
    ...INCLUDE_USER,
  });
}

export async function create(text, userId) {
  return Tweet.create({ text, userId }) //
    .then((data) => getById(data.dataValues.id));
}

export async function update(id, text) {
  return Tweet.findByPk(id, INCLUDE_USER) //
    .then((tweet) => {
      tweet.text = text;
      return tweet.save();
    });
}

export async function remove(id) {
  return Tweet.findByPk(id) //
    .then((tweet) => {
      tweet.destroy();
    });
}
