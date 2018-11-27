exports.up = function(knex, Promise) {
  return knex.schema.createTable("Students", student => {
    student.increments("id"),
      student.string("name"),
      student.string("fav_animal"),
      student.string("previous_occupation"),
      student.float("hometown_lat", 8, 8),
      student.float("hometown_long", 8, 8),
      student.string("useless_superpower");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("table_name");
};
