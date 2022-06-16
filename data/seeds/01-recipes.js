exports.seed = function(knex, Promise) {
  return knex('recipes').insert([   
    { recipe_name: 'Butter Sandwhich', created_at: '2021-01-01 08:23:19.120'  },
    { recipe_name: 'Air', created_at: '2021-01-02 04:00:09.100' },
    { recipe_name: 'Cereal', created_at: '2021-01-02 12:12:12.100' },
  ]);
};