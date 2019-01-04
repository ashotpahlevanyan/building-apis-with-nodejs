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
    }
  }, {
    classMethods: {
      associate: (models) => {
        Users.hasMany(models.Tasks);
      },
	    isPassword: (encodedPassword, password) => {
	    	return bcrypt.compareSync(encodedPassword, password);
	    }
    }
  });

	Users.hook('beforeCreate', (user, options) => {
		const salt = bcrypt.genSaltSync();
		console.log("salt", salt);
		user.password = bcrypt.hashSync(user.password, salt);
	});

  return Users;
};
