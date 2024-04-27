import sequelize from "./db";
import { Sequelize, DataTypes } from 'sequelize';

const User = sequelize.define("user_", {
    UserID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,

    },
    Username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{freezeTableName: true,timestamps: false});

const info_image = sequelize.define("info_image", {
    img_ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    imgName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    timestamp: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    path_Img: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    UserID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status_img: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    TagNames : {
        type: DataTypes.STRING,
        allowNull: false,

    }
    
}, {freezeTableName: true,timestamps: false});

const models = { User, info_image };

export default models;