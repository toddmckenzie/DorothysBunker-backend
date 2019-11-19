exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shelters').del()
    .then(function () {
      // Inserts seed entries
      return knex('shelters').insert([
        {'id': 76, 'name': 'City of Independence', 'street_num': 950, 'road': 'N. Spring', 'city': 'Independence', 'state': 'MO', 'zip_code': 65050, 'lat': 39.1011271, 'lng': -94.4200577, 'description': 'null'} ,
        {'id': 77, 'name': 'Linn State Technical College', 'street_num': 1, 'road': 'Technology Drive', 'city': 'Linn', 'state': 'MO', 'zip_code': 65051, 'lat': 38.46754800000001, 'lng': -91.814313, 'description': 'null'} ,
        {'id': 78, 'name': 'Mexico #59 School District', 'street_num': 1250, 'road': 'West Curtis', 'city': 'Mexico', 'state': 'MO', 'zip_code': 65265, 'lat': 39.1767869, 'lng': -91.8961107, 'description': 'null'} ,
        {'id': 79, 'name': 'Salisbury R-IV', 'street_num': 1000, 'road': 'South Maple Avenue', 'city': 'Salisbury', 'state': 'MO', 'zip_code': 65281, 'lat': 39.415051, 'lng': -92.8053691, 'description': 'null'} ,
        {'id': 80, 'name': 'Sedalia #200 School District', 'street_num': 312, 'road': 'E Broadway Blvd', 'city': 'Sedalia', 'state': 'MO', 'zip_code': 65301, 'lat': 38.7031852, 'lng': -93.2256214, 'description': 'null'} ,
        {'id': 81, 'name': 'Sedalia #200 School District', 'street_num': 2505, 'road': 'W 32nd St', 'city': 'Sedalia', 'state': 'MO', 'zip_code': 65301, 'lat': 38.6832293, 'lng': -93.2576856, 'description': 'null'} ,
        {'id': 82, 'name': 'MO Department of Agriculture', 'street_num': 2503, 'road': 'W. 16th Street', 'city': 'Sedalia', 'state': 'MO', 'zip_code': 65301, 'lat': 38.6944834, 'lng': -93.2585896, 'description': 'null'} ,
        {'id': 83, 'name': 'Crocker R-II School District', 'street_num': 601, 'road': 'North Commercial Street', 'city': 'Crocker', 'state': 'MO', 'zip_code': 65452, 'lat': 37.9553088, 'lng': -92.2633305, 'description': 'null'} ,
        {'id': 84, 'name': 'Phelps County RIII', 'street_num': 17790, 'road': 'State Route M', 'city': 'Edgar Springs', 'state': 'MO', 'zip_code': 65462, 'lat': 37.7218934, 'lng': -91.8949351, 'description': 'null'} ,
        {'id': 85, 'name': 'City of Houston', 'street_num': 191, 'road': 'N 1st St', 'city': 'Houston', 'state': 'MO', 'zip_code': 65483, 'lat': 37.3271484, 'lng': -91.9572288, 'description': 'null'} ,
        {'id': 86, 'name': 'Texas County Memorial Hospital', 'street_num': 1333, 'road': 'South Sam Houston Blvd', 'city': 'Houston', 'state': 'MO', 'zip_code': 65483, 'lat': 37.31602549999999, 'lng': -91.9610167, 'description': 'null'} ,
        {'id': 87, 'name': 'Iberia School District', 'street_num': 201, 'road': 'Pemberton Drive', 'city': 'Iberia', 'state': 'MO', 'zip_code': 65486, 'lat': 38.087213, 'lng': -92.30136, 'description': 'null'} ,
        {'id': 88, 'name': 'Waynesville R-VI School District', 'street_num': 1501, 'road': 'State Road F', 'city': 'Waynesville', 'state': 'MO', 'zip_code': 65583, 'lat': 37.8253523, 'lng': -92.1888113, 'description': 'null'} ,
        {'id': 89, 'name': 'Ava R-I School District', 'street_num': 702, 'road': 'N Jefferson St', 'city': 'Ava', 'state': 'MO', 'zip_code': 65608, 'lat': 36.9573909, 'lng': -92.6602793, 'description': 'null'} ,
        {'id': 90, 'name': 'Buffalo High School', 'street_num': 500, 'road': 'W. Main', 'city': 'Buffalo', 'state': 'MO', 'zip_code': 65622, 'lat': 37.642223, 'lng': -93.0963141, 'description': 'null'} ,
        {'id': 91, 'name': 'Buffalo, City of and School District', 'street_num': 500, 'road': 'W. Main Street', 'city': 'Buffalo', 'state': 'MO', 'zip_code': 65622, 'lat': 37.642223, 'lng': -93.0963141, 'description': 'null'} ,
        {'id': 92, 'name': 'Cassville R-IV School District', 'street_num': 1501, 'road': 'Main Street', 'city': 'Cassville', 'state': 'MO', 'zip_code': 65625, 'lat': 36.6903709, 'lng': -93.86282609999999, 'description': 'null'} ,
        {'id': 93, 'name': 'Hollister R-V School', 'street_num': 1825, 'road': 'Highway Y', 'city': 'Cassville', 'state': 'MO', 'zip_code': 65625, 'lat': 38.8849644, 'lng': -90.7682809, 'description': 'null'} ,
        {'id': 94, 'name': 'Chadwick R-1 School District', 'street_num': 7090, 'road': 'State Highway 125', 'city': 'South Chadwick', 'state': 'MO', 'zip_code': 65629, 'lat': 36.9231888, 'lng': -93.0589893, 'description': 'null'} ,
        {'id': 95, 'name': 'Clever R-V (K-8)', 'street_num': 6800, 'road': 'W State Highway 14', 'city': 'Clever', 'state': 'MO', 'zip_code': 65631, 'lat': 37.0340204, 'lng': -93.4650832, 'description': 'null'} ,
        {'id': 96, 'name': 'Fordland R-III School District', 'street_num': 252, 'road': 'N. Center Street', 'city': 'Fordland', 'state': 'MO', 'zip_code': 65652, 'lat': 37.1594888, 'lng': -92.9403645, 'description': 'null'} ,
        {'id': 97, 'name': 'Hollister R-V School', 'street_num': 1798, 'road': 'State Highway BB', 'city': 'Hollister', 'state': 'MO', 'zip_code': 65672, 'lat': 36.6215533, 'lng': -93.19381489999999, 'description': 'null'} ,
        {'id': 98, 'name': 'Cabool R-IV School District', 'street_num': 720, 'road': 'Peabody', 'city': 'Cabool', 'state': 'MO', 'zip_code': 65689, 'lat': 37.1260433, 'lng': -92.10376920000002, 'description': 'null'} ,
        {'id': 99, 'name': 'Marshfield', 'street_num': 120, 'road': 'Garst Dr', 'city': 'Marshfield', 'state': 'MO', 'zip_code': 65706, 'lat': 37.3453411, 'lng': -92.90485439999999, 'description': 'null'} 
      ]);
    });
};
