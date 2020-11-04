exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "99999999999999999",
          make: "Honda",
          model: "Accord",
          mileage: 15000,
          transmissionType: "automatic",
          titleStatus: "clean",
        },
        {
          vin: "99999999999999998",
          make: "Mazda",
          model: "626",
          mileage: 5000,
          transmissionType: "manual",
          titleStatus: "clean",
        },
        {
          vin: "99999999999999997",
          make: "Hyundai",
          model: "unk",
          mileage: 105000,
          transmissionType: "automatic",
          titleStatus: "salvage",
        },
      ]);
    });
};
