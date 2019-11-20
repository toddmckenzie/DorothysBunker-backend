
exports.seed = function(knex) {
    return knex('shelters').insert([
        {'id': 26, 'name': 'City of Independence', 'street_num': 1601, 'road': 'S Speck Rd', 'city': 'Independence', 'state': 'MO', 'zip_code': 64057, 'lat': 39.085249, 'lng': -94.359769, 'description': 'null'} ,
        {'id': 27, 'name': 'Oak Grove', 'street_num': 605, 'road': 'E 12th St.', 'city': 'Oak Grove', 'state': 'MO', 'zip_code': 64075, 'lat': 39.001879, 'lng': -94.121926, 'description': 'null'} ,
        {'id': 28, 'name': 'Metropolitan Community College', 'street_num': 500, 'road': 'Southwest Longview Rd', 'city': 'Lee Summit', 'state': 'MO', 'zip_code': 64081, 'lat': 38.9092838, 'lng': -94.45354739999999, 'description': 'null'} ,
        {'id': 29, 'name': 'Richmond XVI School District', 'street_num': 701, 'road': 'East Main Street', 'city': 'Richmond', 'state': 'MO', 'zip_code': 64085, 'lat': 39.2776992, 'lng': -93.9656042, 'description': 'null'} ,
        {'id': 30, 'name': 'Clay CountyCamp Branch', 'street_num': 17201, 'road': 'Paradesian Street', 'city': 'Smithsville', 'state': 'MO', 'zip_code': 64089, 'lat': 39.4043935, 'lng': -94.5195237, 'description': 'null'} ,
        {'id': 31, 'name': 'Clay County Paradise Pointe', 'street_num': 2825, 'road': 'Northeast 180th Street', 'city': 'Smithville', 'state': 'MO', 'zip_code': 64089, 'lat': 39.4234569, 'lng': -94.55217689999999, 'description': 'null'} ,
        {'id': 32, 'name': 'Kansas City Parks & Recreations', 'street_num': 1124, 'road': 'East 5th Street', 'city': 'Kansas City', 'state': 'MO', 'zip_code': 64106, 'lat': 39.11120289999999, 'lng': -94.5686085, 'description': 'null'} ,
        {'id': 33, 'name': 'Metropolitan Community College', 'street_num': 3201, 'road': 'Southwest Trafficway', 'city': 'Kansas City', 'state': 'MO', 'zip_code': 64111, 'lat': 39.0696135, 'lng': -94.5930971, 'description': 'null'} ,
        {'id': 34, 'name': 'Metropolitan Community College', 'street_num': 1775, 'road': 'Universal Ave', 'city': 'Kansas City', 'state': 'MO', 'zip_code': 64120, 'lat': 39.1391013, 'lng': -94.5034163, 'description': 'null'} ,
        {'id': 35, 'name': 'Metropolitan Community College', 'street_num': 2601, 'road': 'Northeast Barry Road', 'city': 'Kansas City', 'state': 'MO', 'zip_code': 64156, 'lat': 39.246921, 'lng': -94.54785009999999, 'description': 'null'} ,
        {'id': 36, 'name': 'North Platte School District', 'street_num': 900, 'road': 'Lewis Street', 'city': 'Edgerton', 'state': 'MO', 'zip_code': 64444, 'lat': 39.5062522, 'lng': -94.6366424, 'description': 'null'} ,
        {'id': 37, 'name': 'Mid-Buchanan RV School District', 'street_num': 3221, 'road': 'Southeast State Route H', 'city': 'Faucett', 'state': 'MO', 'zip_code': 64448, 'lat': 39.6330946, 'lng': -94.8133483, 'description': 'null'} ,
        {'id': 38, 'name': 'Andrew County/Boy Scouts', 'street_num': 9525, 'road': 'County Road 388', 'city': 'St. Joseph', 'state': 'MO', 'zip_code': 64505, 'lat': 39.83917, 'lng': -94.8750013, 'description': 'null'} ,
        {'id': 39, 'name': 'Archie R-V School District', 'street_num': 302, 'road': 'W State Rt. A', 'city': 'Archie', 'state': 'MO', 'zip_code': 64725, 'lat': 38.4837228, 'lng': -94.35613459999999, 'description': 'null'} ,
        {'id': 40, 'name': 'Village of Collins', 'street_num': 1402, 'road': 'Main Street', 'city': 'Collins', 'state': 'MO', 'zip_code': 64738, 'lat': 37.8885033, 'lng': -93.62184839999999, 'description': 'null'} ,
        {'id': 41, 'name': 'St. Clair County Boy Scouts', 'street_num': 5525, 'road': 'NE Scout Camp Rd', 'city': 'Osceola', 'state': 'MO', 'zip_code': 64776, 'lat': 38.0965479, 'lng': -93.552433, 'description': 'null'} ,
        {'id': 42, 'name': 'Rich Hill School District', 'street_num': 320, 'road': 'East Poplar', 'city': 'Rich Hill', 'state': 'MO', 'zip_code': 64779, 'lat': 38.1016199, 'lng': -94.3654962, 'description': 'null'} ,
        {'id': 43, 'name': 'Columbia Elementary', 'street_num': 610, 'road': 'W. F St.', 'city': 'Joplin', 'state': 'MO', 'zip_code': 64801, 'lat': 37.09845920000001, 'lng': -94.51913569999999, 'description': 'null'} ,
        {'id': 44, 'name': 'Joplin Early Childhood', 'street_num': 202, 'road': 'Malloy Circle', 'city': 'Joplin', 'state': 'MO', 'zip_code': 64801, 'lat': 37.0770382, 'lng': -94.4148507, 'description': 'null'} ,
        {'id': 45, 'name': 'Eastmorland Elementary', 'street_num': 1131, 'road': 'Highview Ave', 'city': 'Joplin', 'state': 'MO', 'zip_code': 64801, 'lat': 37.0774462, 'lng': -94.4792518, 'description': 'null'} ,
        {'id': 46, 'name': 'Irving Elementary', 'street_num': 2901, 'road': 'S. McClelland Blvd.', 'city': 'Joplin', 'state': 'MO', 'zip_code': 64801, 'lat': 37.0577705, 'lng': -94.5311397, 'description': 'null'} ,
        {'id': 47, 'name': 'Jefferson Elementary', 'street_num': 130, 'road': 'McKinley Ave', 'city': 'Joplin', 'state': 'MO', 'zip_code': 64801, 'lat': 37.0909674, 'lng': -94.5417336, 'description': 'null'} ,
        {'id': 48, 'name': 'Junge Field', 'street_num': 800, 'road': 'Junge Blvd', 'city': 'Joplin', 'state': 'MO', 'zip_code': 64801, 'lat': 37.0761429, 'lng': -94.5237392, 'description': 'null'} ,
        {'id': 49, 'name': 'McKinley Elementary', 'street_num': 610, 'road': 'S. Forest Ave', 'city': 'Joplin', 'state': 'MO', 'zip_code': 64801, 'lat': 37.0845251, 'lng': -94.4911628, 'description': 'null'} ,
        {'id': 50, 'name': 'Royal Heights Elementary', 'street_num': 2100, 'road': 'Rolla St', 'city': 'Joplin', 'state': 'MO', 'zip_code': 64801, 'lat': 37.10651560000001, 'lng': -94.48907009999999, 'description': 'null'} 
      ]);
};
