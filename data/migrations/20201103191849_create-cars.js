exports.up = function (knex, Promise) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments(); // primary key called id
    tbl.string("vin", 17).unique().notNullable(); // VIN number is unique and 17 digits long
    tbl.text("make").notNullable();
    tbl.text("model").notNullable();
    tbl.decimal("mileage").notNullable();
    tbl.text("transmissionType");
    tbl.text("titleStatus");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("cars");
};
