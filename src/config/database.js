module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gibarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
