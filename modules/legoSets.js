/********************************************************************************
*  WEB322 – Assignment 05
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecacollege.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Diana Zhou Kuang Student ID: 118446228 Date: 2024-04-03
*
*  Published URL: https://tame-erin-earthworm-tux.cyclic.app/
*
********************************************************************************/

require('dotenv').config();
const themeData = require("../data/themeData");
const setData = require("../data/setData");
const Sequelize = require('sequelize');

let sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
      ssl: { rejectUnauthorized: false },
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.log('Unable to connect to the database:', err);
    });

const Theme = sequelize.define('Theme', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
    },
}, {
    createdAt: false,
    updatedAt: false,
    //timestamps: false,
});

const Set = sequelize.define('Set', {
    set_num: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
    },
    phone: {
        type: Sequelize.STRING,
    },
    allergies: {
        type: Sequelize.STRING,
    },
    theme_id: {
        type: Sequelize.INTEGER,
    },
    ad_info: {
        type: Sequelize.STRING,
    },
    paid: {  // Add the 'paid' field
        type: Sequelize.BOOLEAN,
        defaultValue: false, // Default to 'false' (not paid)
    },
}, {
    createdAt: false,
    updatedAt: false,
    
});

Set.belongsTo(Theme, { foreignKey: 'theme_id' });


function initialize() {
    return new Promise(async (resolve, reject) => {
    try {
      await sequelize.sync();

  // check for default themes
      let themes = await Theme.findAll();
      if (themes.length === 0) {
        themeData.forEach(async function (theme) {
          console.log(theme);
          await Theme.create(theme);
        });
      }

      let sets = await Set.findAll();
      if (sets.length === 0) {

        setData.forEach(async function (set) {
            await Set.create(set);
        });
      }

      resolve();
    } catch (err) {
      reject(err.message);
    }
  });
} 

  
function getAllSets() {
    return new Promise(async (resolve, reject) => {
        let sets = await Set.findAll({ include: [Theme] });
        resolve(sets);
    });   
}

function getAllThemes() {
    return new Promise(async (resolve, reject) => {
        themes = await Theme.findAll();

        resolve(themes);
    });
}


function getSetByNum(setNum) {
    return new Promise(async (resolve, reject) => {
        try {
            const set = await Set.findOne({ 
                include: [Theme],
                where: { set_num: setNum } 
            });
            if (!set) {
                throw new Error(`Unable to find requested set`);
            }
            resolve(set);
        } catch (err) {
            reject(new Error('Unable to retrieve set'));
        }
    });
}

function getSetsByTheme(theme) {
    return new Promise(async (resolve, reject) => {
        try {
            const sets = await Set.findAll({ 
                include: [Theme], 
                where: {
                    '$Theme.name$': {
                        [Sequelize.Op.iLike]: `%${theme}%`
                    }
                } 
            });
            if (!sets || sets.length === 0) {
                throw new Error(`Unable to find requested sets`);
            }
            resolve(sets);
        } catch (err) {
            reject(new Error('Unable to retrieve sets'));
        }
    });
}

function addSet(setData) {
    return new Promise(async (resolve, reject) => {
        try {
            // Create a new set using the Set model
            await Set.create(setData);
            // Resolve the promise
            resolve();
        } catch (err) {
            // Reject the promise with the first error message
            reject(new Error(err.errors[0].message));
        }
    });
}

function editSet(set_num, setData) {
    return new Promise(async (resolve, reject) => {
        try {
            // Find the set by set_num and update its data with setData
            const [updatedRowsCount, updatedRows] = await Set.update(setData, {
                where: { set_num: set_num },
                returning: true, // Return the updated rows
            });

            if (updatedRowsCount === 0) {
                // If no rows were updated, reject the Promise with an error message
                throw new Error('No set found with the provided set number');
            }

            // Resolve the Promise
            resolve();
        } catch (err) {
            // Reject the Promise with the first error message
            reject(new Error(err.errors[0].message));
        }
    });
}

function deleteSet(set_num) {
    return new Promise(async (resolve, reject) => {
        try {
            const deletedRowCount = await Set.destroy({
                where: { set_num: set_num },
            });

            if (deletedRowCount === 0) {
                throw new Error('No set found with the provided set number');
            }

            resolve();
        } catch (err) {
            reject(new Error(err.errors[0].message));
        }
    });
}

module.exports = { initialize, getAllSets, getAllThemes, getSetByNum, getSetsByTheme, addSet, editSet, deleteSet };
