exports.seed = function(knex, Promise) {
  return knex('steps').insert([
    {recipe_name: 'Air', step_number: 1, step_instructions: 'Breathe and enjoy!'},
    {recipe_name: 'Cereal', step_number: 1, step_instructions: 'Place Cheerios in bowl'},
    {recipe_name: 'Cereal', step_number: 2, step_instructions: 'Add milk and enjoy!'},
    {recipe_name: 'Butter Sandwich', step_number: 1, step_instructions: 'Grab 2 slices of Bread'},
    {recipe_name: 'Butter Sandwich', step_number: 2, step_instructions: 'Place two sticks of butter on each slice'},
    {recipe_name: 'Butter Sandwich', step_number: 3, step_instructions: 'Slap the pieces of bread together and enjoy!'},
  ]);
}