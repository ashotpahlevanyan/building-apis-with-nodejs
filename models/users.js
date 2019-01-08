import bcrypt from "bcrypt";

module.exports = (sequelize, DataType) => {
  const Users = sequelize.define("Users", {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataType.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
	  salt: {
			type: DataType.STRING,
				validate: {
				notEmpty: true
			}
		}
  }, {
    classMethods: {

    }
  });
	Users.associate = (models) => {
		Users.hasMany(models.Tasks);
	};
	Users.isPassword = (encodedPassword, password, salt) => {
		const testPassword = bcrypt.hashSync(password, salt);
		return testPassword === encodedPassword;
	};
	Users.addHook('beforeCreate', (user, options) => {
		const salt = bcrypt.genSaltSync();
		user.password = bcrypt.hashSync(user.password, salt);
		user.salt = salt;
	});

  return Users;
};
