exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    {ingredient_name: 'Cheerios', quantity: 2},
    {ingredient_name: 'milk', quantity: 1},
    {ingredient_name: 'bread', quantity: 2},
    {ingredient_name: 'butter', quantity: 4},
    {ingredient_name: 'oxygen', quantity: 100000},
  ]);
}