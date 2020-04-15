
exports.up = async function(knex) {
  await knex.schema.createTable("fruits", (table) => {
    // table.integer("id").notNull().unique().primary() is same as
    table.increments("id")
    table.text("name").notNull().unique()
    table.float("avgWeightOz").notNull()
    table.boolean("delicious").defaultTo(1)
  })

};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("fruits")

};
