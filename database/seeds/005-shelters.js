
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shelters').del()
    .then(function () {
      // Inserts seed entries
      return knex('shelters').insert([
        {'id': 126, 'name': 'Drury University', 'street_num': 935, 'road': 'N Summit Ave', 'city': 'Springfield', 'state': 'MO', 'zip_code': 65802, 'lat': 37.21841149999999, 'lng': -93.2846946, 'description': 'null'} ,
        {'id': 127, 'name': 'Missouri State University', 'street_num': 827, 'road': 'E Elm St', 'city': 'Springfield', 'state': 'MO', 'zip_code': 65897, 'lat': 37.2056689, 'lng': -93.28289269999999, 'description': 'null'} ,
        {'id': 128, 'name': 'Crowder College', 'street_num': 601, 'road': 'Laclede Ave', 'city': 'Neosho', 'state': 'MO', 'zip_code': 64850, 'lat': 36.81418, 'lng': -94.368685, 'description': 'null'} ,
        {'id': 129, 'name': 'Willow Springs R-IV Schools', 'street_num': 215, 'road': 'W. 4th', 'city': 'Willow Springs', 'state': 'MO', 'zip_code': 'null', 'lat': 36.9952563, 'lng': -91.9698672, 'description': 'null'} ,
        {'id': 130, 'name': 'LaMonte Shelter', 'street_num': 300, 'road': 'W Front Street', 'city': 'La Monte', 'state': 'MO', 'zip_code': 'null', 'lat': 38.76381749999999, 'lng': -93.4253868, 'description': 'null'} ,
        {'id': 131, 'name': 'Maplewood Shelter', 'street_num': 3174, 'road': 'Highway TT', 'city': 'Sedalia', 'state': 'MO', 'zip_code': 'null', 'lat': 38.667615, 'lng': -93.153538, 'description': 'null'} ,
        {'id': 132, 'name': 'Smithton Shelter', 'street_num': 105, 'road': 'E Marvin', 'city': 'Smithton', 'state': 'MO', 'zip_code': 'null', 'lat': 38.6800181, 'lng': -93.092979, 'description': 'null'} ,
        {'id': 133, 'name': 'Skyline Shelter', 'street_num': 2505, 'road': 'W 32nd', 'city': 'Sedalia', 'state': 'MO', 'zip_code': 'null', 'lat': 38.6832293, 'lng': -93.2576856, 'description': 'null'} ,
        {'id': 134, 'name': 'Green Ridge Shelter', 'street_num': 207, 'road': 'N Ohio', 'city': 'Green Ridge', 'state': 'MO', 'zip_code': 'null', 'lat': 38.6221989, 'lng': -93.4123724, 'description': 'null'} ,
        {'id': 135, 'name': 'Houstonia Shelter', 'street_num': 305, 'road': 'Tuck', 'city': 'Houstonia', 'state': 'MO', 'zip_code': 'null', 'lat': 38.8968784, 'lng': -93.3598123, 'description': 'null'} ,
        {'id': 136, 'name': 'North Sedalia Shelter', 'street_num': 200, 'road': 'E Clay', 'city': 'Sedalia', 'state': 'MO', 'zip_code': 'null', 'lat': 38.7180943, 'lng': -93.2236046, 'description': 'null'} ,
        {'id': 137, 'name': 'Smith-Cotton Jr High School', 'street_num': 312, 'road': 'E Broadway', 'city': 'Sedalia', 'state': 'MO', 'zip_code': 'null', 'lat': 38.7031852, 'lng': -93.2256214, 'description': 'null'} ,
        {'id': 138, 'name': 'East Carter Co. R-II School', 'street_num': 24, 'road': 'South Herren Ave', 'city': 'Ellsinore', 'state': 'MO', 'zip_code': 'null', 'lat': 36.93022, 'lng': -90.746003, 'description': 'null'} ,
        {'id': 139, 'name': 'City of Holts Summit', 'street_num': 245, 'road': 'S. Summit Dr', 'city': 'Holts Summit', 'state': 'MO', 'zip_code': 'null', 'lat': 38.62277820000001, 'lng': -92.14128939999999, 'description': 'null'} ,
        {'id': 140, 'name': 'Licking R-VIII School District', 'street_num': 125, 'road': 'College Avenue', 'city': 'Licking', 'state': 'MO', 'zip_code': 'null', 'lat': 37.4901837, 'lng': -91.8584449, 'description': 'null'} ,
        {'id': 141, 'name': 'Hillcrest High School', 'street_num': 3319, 'road': 'N. Grant', 'city': 'Springfield', 'state': 'MO', 'zip_code': 'null', 'lat': 37.25696, 'lng': -93.296843, 'description': 'null'} ,
        {'id': 142, 'name': 'Westport Elementary School', 'street_num': 415, 'road': 'S. Golden Ave', 'city': 'Springfield', 'state': 'MO', 'zip_code': 'null', 'lat': 37.207633, 'lng': -93.3406232, 'description': 'null'} ,
        {'id': 143, 'name': 'Jeffries Elementary School', 'street_num': 4051, 'road': 'S. Scenic', 'city': 'Springfield', 'state': 'MO', 'zip_code': 'null', 'lat': 37.140683, 'lng': -93.334994, 'description': 'null'} ,
        {'id': 144, 'name': 'Kickapoo High School', 'street_num': 3710, 'road': 'S. Jefferson', 'city': 'Springfield', 'state': 'MO', 'zip_code': 'null', 'lat': 37.147677, 'lng': -93.28913899999999, 'description': 'null'} ,
        {'id': 145, 'name': 'Jasper County School District', 'street_num': 201, 'road': 'West Mercer Street', 'city': 'Jasper', 'state': 'MO', 'zip_code': 'null', 'lat': 37.3410363, 'lng': -94.3031397, 'description': 'null'}
      ]);
    });
};
