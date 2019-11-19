
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shelters').del()
    .then(function () {
      // Inserts seed entries
      return knex('shelters').insert([
        {'id': 100, 'name': 'Marshfield School District', 'street_num': 190, 'road': 'N. Locus', 'city': 'Marshfield', 'state': 'MO', 'zip_code': 65706, 'lat': 37.339583, 'lng': -92.89883019999999, 'description': 'null'} ,
        {'id': 101, 'name': 'Monett R-I School District', 'street_num': 601, 'road': 'Learning Lane', 'city': 'Monett', 'state': 'MO', 'zip_code': 65708, 'lat': 36.9230377, 'lng': -93.9427656, 'description': 'null'} ,
        {'id': 102, 'name': 'Monett R-I School District', 'street_num': 711, 'road': '9th Street', 'city': 'Monett', 'state': 'MO', 'zip_code': 65708, 'lat': 36.9283967, 'lng': -93.91686399999999, 'description': 'null'} ,
        {'id': 103, 'name': 'Monett R-I School District', 'street_num': 1, 'road': 'David Sippy Drive', 'city': 'Monett', 'state': 'MO', 'zip_code': 65708, 'lat': 36.9294624, 'lng': -93.90776059999999, 'description': 'null'} ,
        {'id': 104, 'name': 'Marion C. Early R-5 School District', 'street_num': 5309, 'road': 'South Main Street', 'city': 'Morrisville', 'state': 'MO', 'zip_code': 65710, 'lat': 37.4796282, 'lng': -93.4284551, 'description': 'null'} ,
        {'id': 105, 'name': 'City of Niangua', 'street_num': 301, 'road': 'Rumsey St', 'city': 'Niangua', 'state': 'MO', 'zip_code': 65713, 'lat': 37.3932327, 'lng': -92.83179129999999, 'description': 'null'} ,
        {'id': 106, 'name': 'Nixa Public Schools', 'street_num': 301, 'road': 'S. Main St', 'city': 'Nixa', 'state': 'MO', 'zip_code': 65714, 'lat': 37.0416354, 'lng': -93.2952291, 'description': 'null'} ,
        {'id': 107, 'name': 'Ozark Tech Community College', 'street_num': 3369, 'road': 'W Jackson St', 'city': 'Nixa', 'state': 'MO', 'zip_code': 65714, 'lat': 37.0313015, 'lng': -93.25058410000001, 'description': 'null'} ,
        {'id': 108, 'name': 'Inman Intermediate', 'street_num': 1300, 'road': 'N. Nicholas Road', 'city': 'Nixa', 'state': 'MO', 'zip_code': 65714, 'lat': 37.0627316, 'lng': -93.32487619999999, 'description': 'null'} ,
        {'id': 109, 'name': 'Mathews Elementary', 'street_num': 605, 'road': 'S. Gregg Road', 'city': 'Nixa', 'state': 'MO', 'zip_code': 65714, 'lat': 37.0341993, 'lng': -93.3199592, 'description': 'null'} ,
        {'id': 110, 'name': 'Nixa High School', 'street_num': 514, 'road': 'S. Nicholas Rd', 'city': 'Nixa', 'state': 'MO', 'zip_code': 65714, 'lat': 37.0326453, 'lng': -93.3254687, 'description': 'null'} ,
        {'id': 111, 'name': 'Nixa Junior High', 'street_num': 205, 'road': 'North Street', 'city': 'Nixa', 'state': 'MO', 'zip_code': 65715, 'lat': 37.0514131, 'lng': -93.2930274, 'description': 'null'} ,
        {'id': 112, 'name': 'City of Ozark', 'street_num': 1530, 'road': 'North Jackson Street', 'city': 'Ozark', 'state': 'MO', 'zip_code': 65721, 'lat': 37.0221394, 'lng': -93.2208172, 'description': 'null'} ,
        {'id': 113, 'name': 'City of Pierce', 'street_num': 307, 'road': 'E. Main St.', 'city': 'Pierce City', 'state': 'MO', 'zip_code': 65723, 'lat': 36.945787, 'lng': -93.9988858, 'description': 'null'} ,
        {'id': 114, 'name': 'Pierce City R-IV Schools', 'street_num': 400, 'road': 'Gibbs Elementary', 'city': 'Pierce City', 'state': 'MO', 'zip_code': 65723, 'lat': 36.9492259, 'lng': -93.99635889999999, 'description': 'null'} ,
        {'id': 115, 'name': 'Republic School District', 'street_num': 720, 'road': 'North Main', 'city': 'Republic', 'state': 'MO', 'zip_code': 65738, 'lat': 37.1281436, 'lng': -93.47942450000001, 'description': 'null'} ,
        {'id': 116, 'name': 'Sweeny Elementary', 'street_num': 720, 'road': 'N Main', 'city': 'Republic', 'state': 'MO', 'zip_code': 65738, 'lat': 37.1281436, 'lng': -93.47942450000001, 'description': 'null'} ,
        {'id': 117, 'name': 'City of Rogersville', 'street_num': 101, 'road': 'W Basin St', 'city': 'Rogersville', 'state': 'MO', 'zip_code': 65742, 'lat': 37.1195379, 'lng': -93.05803069999999, 'description': 'null'} ,
        {'id': 118, 'name': 'Logan Rogersville Schools', 'street_num': 8225, 'road': 'East Farm Road 174', 'city': 'Rogersville', 'state': 'MO', 'zip_code': 65742, 'lat': 37.1278361, 'lng': -93.1172398, 'description': 'null'} ,
        {'id': 119, 'name': 'Seymour School District', 'street_num': 700, 'road': 'East Clinton Avenue', 'city': 'Seymour', 'state': 'MO', 'zip_code': 65746, 'lat': 37.1484604, 'lng': -92.759121, 'description': 'null'} ,
        {'id': 120, 'name': 'West Plains R-VII Schools', 'street_num': 730, 'road': 'E Olden St', 'city': 'West Plains', 'state': 'MO', 'zip_code': 65775, 'lat': 36.734002, 'lng': -91.8416627, 'description': 'null'} ,
        {'id': 121, 'name': 'Howell County FairView R-XI', 'street_num': 4036, 'road': 'State Rt. K', 'city': 'West Plains', 'state': 'MO', 'zip_code': 65775, 'lat': 36.7160416, 'lng': -91.9322608, 'description': 'null'} ,
        {'id': 122, 'name': 'Howell County Howell Valley RI', 'street_num': 6461, 'road': 'State Route ZZ', 'city': 'West Plains', 'state': 'MO', 'zip_code': 65775, 'lat': 36.71279579999999, 'lng': -91.81863399999999, 'description': 'null'} ,
        {'id': 123, 'name': 'Richards R-V School District', 'street_num': 3461, 'road': 'County Road 1710', 'city': 'West Plains', 'state': 'MO', 'zip_code': 65775, 'lat': 36.7867959, 'lng': -91.88917, 'description': 'null'} ,
        {'id': 124, 'name': 'Glenwood R-VIII School District', 'street_num': 10286, 'road': 'State Route 17', 'city': 'West Plains', 'state': 'MO', 'zip_code': 65775, 'lat': 36.6743459, 'lng': -91.8605645, 'description': 'null'} ,
        {'id': 125, 'name': 'Missouri State University', 'street_num': 323, 'road': 'West Trish Knight Street', 'city': 'West Plains', 'state': 'MO', 'zip_code': 65775, 'lat': 36.730083, 'lng': -91.8556881, 'description': 'null'} ,
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
