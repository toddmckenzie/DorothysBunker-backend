
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shelters').del()
    .then(function () {
      // Inserts seed entries
      return knex('shelters').insert([
        {'id': 51, 'name': 'Soaring Heights', 'street_num': 4604, 'road': 'E. 20th St', 'city': 'Joplin', 'state': 'MO', 'zip_code': 64801, 'lat': 37.0683939, 'lng': -94.4481984, 'description': 'null'} ,
        {'id': 52, 'name': 'West Central Elementary', 'street_num': 1001, 'road': 'W. 7th St', 'city': 'Joplin', 'state': 'MO', 'zip_code': 64801, 'lat': 37.0847171, 'lng': -94.5246969, 'description': 'null'} ,
        {'id': 53, 'name': 'Missouri Southern State University', 'street_num': 1007, 'road': 'International Ave', 'city': 'Joplin', 'state': 'MO', 'zip_code': 64801, 'lat': 37.0990004, 'lng': -94.46115859999999, 'description': 'null'} ,
        {'id': 54, 'name': 'Cecil Floyd Elementary', 'street_num': 2201, 'road': 'W. 24th St', 'city': 'Joplin', 'state': 'MO', 'zip_code': 64804, 'lat': 37.065537, 'lng': -94.543812, 'description': 'null'} ,
        {'id': 55, 'name': 'Joplin High School', 'street_num': 2104, 'road': 'Indiana Ave', 'city': 'Joplin', 'state': 'MO', 'zip_code': 64804, 'lat': 37.0673017, 'lng': -94.5071969, 'description': 'null'} ,
        {'id': 56, 'name': 'Kelsey Norman Elementary', 'street_num': 1323, 'road': 'E. 28th St', 'city': 'Joplin', 'state': 'MO', 'zip_code': 64804, 'lat': 37.05975, 'lng': -94.5003393, 'description': 'null'} ,
        {'id': 57, 'name': 'Stapleton Elementary', 'street_num': 101, 'road': 'E. 41st. St', 'city': 'Joplin', 'state': 'MO', 'zip_code': 64804, 'lat': 37.0444517, 'lng': -94.51384329999999, 'description': 'null'} ,
        {'id': 58, 'name': 'McDonald County R-1 School District', 'street_num': 100, 'road': 'Mustang Drive', 'city': 'Anderson', 'state': 'MO', 'zip_code': 64831, 'lat': 36.643441, 'lng': -94.42598269999999, 'description': 'null'} ,
        {'id': 59, 'name': 'Avilla R-XIII School District', 'street_num': 400, 'road': 'Sarcoxie St', 'city': 'Avilla', 'state': 'MO', 'zip_code': 64833, 'lat': 37.1918616, 'lng': -94.1294578, 'description': 'null'} ,
        {'id': 60, 'name': 'Carterville Elementary School', 'street_num': 210, 'road': 'East Hall', 'city': 'Carterville', 'state': 'MO', 'zip_code': 64835, 'lat': 37.1503187, 'lng': -94.4402974, 'description': 'null'} ,
        {'id': 61, 'name': 'Diamond R-IV School District', 'street_num': 401, 'road': 'South Main Street', 'city': 'Diamond', 'state': 'MO', 'zip_code': 64840, 'lat': 36.9905198, 'lng': -94.3130753, 'description': 'null'} ,
        {'id': 62, 'name': 'East Newton County School District', 'street_num': 22876, 'road': 'East Highway 86', 'city': 'Granby', 'state': 'MO', 'zip_code': 64844, 'lat': 36.8783324, 'lng': -94.2314131, 'description': 'null'} ,
        {'id': 63, 'name': 'South Elementary School', 'street_num': 1111, 'road': 'Wornall St', 'city': 'Neosho', 'state': 'MO', 'zip_code': 64850, 'lat': 36.8553772, 'lng': -94.38282919999999, 'description': 'null'} ,
        {'id': 64, 'name': 'G.W. Carver Elementary School', 'street_num': 12350, 'road': 'Norway Rd', 'city': 'Neosho', 'state': 'MO', 'zip_code': 64850, 'lat': 36.8527253, 'lng': -94.4174111, 'description': 'null'} ,
        {'id': 65, 'name': 'Neosho High School', 'street_num': 511, 'road': 'S Neosho Blvd', 'city': 'Neosho', 'state': 'MO', 'zip_code': 64850, 'lat': 36.8637051, 'lng': -94.38076509999999, 'description': 'null'} ,
        {'id': 66, 'name': 'McDonald County R-1 School District', 'street_num': 202, 'road': 'East 8th Street', 'city': 'Pineville', 'state': 'MO', 'zip_code': 64856, 'lat': 36.5963948, 'lng': -94.3843495, 'description': 'null'} ,
        {'id': 67, 'name': 'Sarcoxie R-II School District', 'street_num': 214, 'road': 'South 11th Street', 'city': 'Sarcoxie', 'state': 'MO', 'zip_code': 64862, 'lat': 37.0675244, 'lng': -94.12159729999999, 'description': 'null'} ,
        {'id': 68, 'name': 'Sarcoxie R-II School District', 'street_num': 101, 'road': 'South 17th Street', 'city': 'Sarcoxie', 'state': 'MO', 'zip_code': 64862, 'lat': 37.0692888, 'lng': -94.13080110000001, 'description': 'null'} ,
        {'id': 69, 'name': 'McDonald County R-1 School District', 'street_num': 411, 'road': 'Academy Street', 'city': 'Southwest City', 'state': 'MO', 'zip_code': 64863, 'lat': 36.5167251, 'lng': -94.6165528, 'description': 'null'} ,
        {'id': 70, 'name': 'Seneca R-VII School District', 'street_num': 1817, 'road': 'St. Eugene Street', 'city': 'Seneca', 'state': 'MO', 'zip_code': 64865, 'lat': 36.8362704, 'lng': -94.60382659999999, 'description': 'null'} ,
        {'id': 71, 'name': 'Madge T. James Kindergarten Center', 'street_num': 1427, 'road': 'West Aylor', 'city': 'Webb City', 'state': 'MO', 'zip_code': 64870, 'lat': 37.1531052, 'lng': -94.4816659, 'description': 'null'} ,
        {'id': 72, 'name': 'Webb City High School Cardinal Dome', 'street_num': 621, 'road': 'North Madison', 'city': 'Webb City', 'state': 'MO', 'zip_code': 64870, 'lat': 37.1523434, 'lng': -94.4730558, 'description': 'null'} ,
        {'id': 73, 'name': 'Truman Elementary', 'street_num': 810, 'road': 'North Highway D', 'city': 'Webb City', 'state': 'MO', 'zip_code': 64870, 'lat': 37.1983442, 'lng': -94.4544639, 'description': 'null'} ,
        {'id': 74, 'name': 'Eldon R-I School District', 'street_num': 407, 'road': 'East 15th Street', 'city': 'Eldon', 'state': 'MO', 'zip_code': 65026, 'lat': 38.3396317, 'lng': -92.5785952, 'description': 'null'} ,
        {'id': 75, 'name': 'Moniteau County R-V', 'street_num': 156, 'road': 'School Street', 'city': 'Latham', 'state': 'MO', 'zip_code': 65050, 'lat': 38.558855, 'lng': -92.6807391, 'description': 'null'} 
        
      ]);
    });
};
