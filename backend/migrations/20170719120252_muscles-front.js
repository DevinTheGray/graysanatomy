
exports.up = (knex, Promise) => {
  return knex.schema.createTable('muscles-front', (table) => {
    table.increments('id')
    table.text('name')


  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('muscles-front');
};
