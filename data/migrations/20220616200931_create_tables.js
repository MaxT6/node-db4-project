
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments('recipe_id');
      tbl.varchar('recipe_name', 128).notNullable();
      tbl.varchar('create_at', 128)
    })
    .createTable('steps', tbl => {
      tbl.increments('step_id');
      tbl.interger('step_number').unsigned().notNullable();
      tbl.varchar('step_instructions', 256).notNullable();
      tbl.interger('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        // .onUpdate('CASCADE')
        // .onDelete('CASCADE')
    })
    .createTable("ingredients", tbl => {
      tbl.increments('ingredient_id');
      tbl.varchar('ingredient_name', 128).notNullable().unique()
      tbl.interger('quantity').notNullable().unsigned()
    })
};


exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
