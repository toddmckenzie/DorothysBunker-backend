
exports.seed = function(knex) {
    return knex('shelters').insert([
        {'id': 100, 'name': 'Marshfield School District', 'street_num': 190, 'road': 'N. Locus', 'city': 'Marshfield', 'state': 'MO', 'zip_code': 65706, 'lat': 37.339583, 'lng': -92.89883019999999 } ,
        {'id': 101, 'name': 'Monett R-I School District', 'street_num': 601, 'road': 'Learning Lane', 'city': 'Monett', 'state': 'MO', 'zip_code': 65708, 'lat': 36.9230377, 'lng': -93.9427656 } ,
        {'id': 102, 'name': 'Monett R-I School District', 'street_num': 711, 'road': '9th Street', 'city': 'Monett', 'state': 'MO', 'zip_code': 65708, 'lat': 36.9283967, 'lng': -93.91686399999999 } ,
        {'id': 103, 'name': 'Monett R-I School District', 'street_num': 1, 'road': 'David Sippy Drive', 'city': 'Monett', 'state': 'MO', 'zip_code': 65708, 'lat': 36.9294624, 'lng': -93.90776059999999 } ,
        {'id': 104, 'name': 'Marion C. Early R-5 School District', 'street_num': 5309, 'road': 'South Main Street', 'city': 'Morrisville', 'state': 'MO', 'zip_code': 65710, 'lat': 37.4796282, 'lng': -93.4284551 } ,
        {'id': 105, 'name': 'City of Niangua', 'street_num': 301, 'road': 'Rumsey St', 'city': 'Niangua', 'state': 'MO', 'zip_code': 65713, 'lat': 37.3932327, 'lng': -92.83179129999999 } ,
        {'id': 106, 'name': 'Nixa Public Schools', 'street_num': 301, 'road': 'S. Main St', 'city': 'Nixa', 'state': 'MO', 'zip_code': 65714, 'lat': 37.0416354, 'lng': -93.2952291 } ,
        {'id': 107, 'name': 'Ozark Tech Community College', 'street_num': 3369, 'road': 'W Jackson St', 'city': 'Nixa', 'state': 'MO', 'zip_code': 65714, 'lat': 37.0313015, 'lng': -93.25058410000001 } ,
        {'id': 108, 'name': 'Inman Intermediate', 'street_num': 1300, 'road': 'N. Nicholas Road', 'city': 'Nixa', 'state': 'MO', 'zip_code': 65714, 'lat': 37.0627316, 'lng': -93.32487619999999 } ,
        {'id': 109, 'name': 'Mathews Elementary', 'street_num': 605, 'road': 'S. Gregg Road', 'city': 'Nixa', 'state': 'MO', 'zip_code': 65714, 'lat': 37.0341993, 'lng': -93.3199592 } ,
        {'id': 110, 'name': 'Nixa High School', 'street_num': 514, 'road': 'S. Nicholas Rd', 'city': 'Nixa', 'state': 'MO', 'zip_code': 65714, 'lat': 37.0326453, 'lng': -93.3254687 } ,
        {'id': 111, 'name': 'Nixa Junior High', 'street_num': 205, 'road': 'North Street', 'city': 'Nixa', 'state': 'MO', 'zip_code': 65715, 'lat': 37.0514131, 'lng': -93.2930274 } ,
        {'id': 112, 'name': 'City of Ozark', 'street_num': 1530, 'road': 'North Jackson Street', 'city': 'Ozark', 'state': 'MO', 'zip_code': 65721, 'lat': 37.0221394, 'lng': -93.2208172 } ,
        {'id': 113, 'name': 'City of Pierce', 'street_num': 307, 'road': 'E. Main St.', 'city': 'Pierce City', 'state': 'MO', 'zip_code': 65723, 'lat': 36.945787, 'lng': -93.9988858 } ,
        {'id': 114, 'name': 'Pierce City R-IV Schools', 'street_num': 400, 'road': 'Gibbs Elementary', 'city': 'Pierce City', 'state': 'MO', 'zip_code': 65723, 'lat': 36.9492259, 'lng': -93.99635889999999 } ,
        {'id': 115, 'name': 'Republic School District', 'street_num': 720, 'road': 'North Main', 'city': 'Republic', 'state': 'MO', 'zip_code': 65738, 'lat': 37.1281436, 'lng': -93.47942450000001 } ,
        {'id': 116, 'name': 'Sweeny Elementary', 'street_num': 720, 'road': 'N Main', 'city': 'Republic', 'state': 'MO', 'zip_code': 65738, 'lat': 37.1281436, 'lng': -93.47942450000001 } ,
        {'id': 117, 'name': 'City of Rogersville', 'street_num': 101, 'road': 'W Basin St', 'city': 'Rogersville', 'state': 'MO', 'zip_code': 65742, 'lat': 37.1195379, 'lng': -93.05803069999999 } ,
        {'id': 118, 'name': 'Logan Rogersville Schools', 'street_num': 8225, 'road': 'East Farm Road 174', 'city': 'Rogersville', 'state': 'MO', 'zip_code': 65742, 'lat': 37.1278361, 'lng': -93.1172398 } ,
        {'id': 119, 'name': 'Seymour School District', 'street_num': 700, 'road': 'East Clinton Avenue', 'city': 'Seymour', 'state': 'MO', 'zip_code': 65746, 'lat': 37.1484604, 'lng': -92.759121 } ,
        {'id': 120, 'name': 'West Plains R-VII Schools', 'street_num': 730, 'road': 'E Olden St', 'city': 'West Plains', 'state': 'MO', 'zip_code': 65775, 'lat': 36.734002, 'lng': -91.8416627 } ,
        {'id': 121, 'name': 'Howell County FairView R-XI', 'street_num': 4036, 'road': 'State Rt. K', 'city': 'West Plains', 'state': 'MO', 'zip_code': 65775, 'lat': 36.7160416, 'lng': -91.9322608 } ,
        {'id': 122, 'name': 'Howell County Howell Valley RI', 'street_num': 6461, 'road': 'State Route ZZ', 'city': 'West Plains', 'state': 'MO', 'zip_code': 65775, 'lat': 36.71279579999999, 'lng': -91.81863399999999 } ,
        {'id': 123, 'name': 'Richards R-V School District', 'street_num': 3461, 'road': 'County Road 1710', 'city': 'West Plains', 'state': 'MO', 'zip_code': 65775, 'lat': 36.7867959, 'lng': -91.88917 } ,
        {'id': 124, 'name': 'Glenwood R-VIII School District', 'street_num': 10286, 'road': 'State Route 17', 'city': 'West Plains', 'state': 'MO', 'zip_code': 65775, 'lat': 36.6743459, 'lng': -91.8605645 } ,
        {'id': 125, 'name': 'Missouri State University', 'street_num': 323, 'road': 'West Trish Knight Street', 'city': 'West Plains', 'state': 'MO', 'zip_code': 65775, 'lat': 36.730083, 'lng': -91.8556881 } 
      
      ]);
};
