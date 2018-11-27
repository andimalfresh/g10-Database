exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("students")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("students").insert([
        {
          id: 1,
          name: "Trey",
          fave_animal:
            "https://images-na.ssl-images-amazon.com/images/I/61irQrNjgnL._SY679_.jpg",
          previous_occupation: "General Manager",
          hometown_lat: 37.2638,
          hometown_long: 122.023,
          useless_superpower: "super deaf"
        },
        {
          id: 2,
          name: "Sonja",
          fave_animal:
            "https://i0.wp.com/www.wagpets.com/wp-content/uploads/2017/11/the-pug-rose-ears.jpeg?w=960&ssl=1",
          previous_occupation: "Marketing Manager",
          hometown_lat: 36.407249,
          hometown_long: -105.573067,
          useless_superpower: "can understand the inner workings of butter"
        }
      ]);
    });
};
