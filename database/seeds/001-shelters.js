
exports.seed = function(knex) {
   return knex('shelters').del()
   .then(function () {
    return knex('shelters').insert([
        {'id': 1, 'name': 'Orchard Farm RV school District', 'street_num': 3489, 'road': 'Boschertown Rd', 'city': 'St. Charles', 'state': 'MO', 'zip_code': 63301, 'lat': 38.8287611, 'lng': -90.47850749999999, 'description': 'This shelter first function is to provide protection for students, staff, and visitors during normal school hours.  Outside of normal school hours, the safe room will be availabe to rsidents in the community that do not have basements or safe rooms that live within the Tornado Protection Zone (TPZ).  Max Capacity is 739.  For more info on this shelter and to view the TPZ visit: http://ofsd.k12.mo.us/cms/One.aspx?portalId=20282425&pageId=33009890', 'website': "http://ofsd.k12.mo.us/cms/One.aspx?portalId=20282425&pageId=33009890", 'phone': '636-925-5400'  },
        {'id': 2, 'name': 'Moberly Area CC', 'street_num': 190, 'road': 'Shinn Lane', 'city': 'Hannibal', 'state': 'MO', 'zip_code': 63401, 'lat': 39.7043522, 'lng': -91.4455079, 'phone': '660-263-4100'} ,
        {'id': 3, 'name': 'Ralls County R-II School District', 'street_num': 21622, 'road': 'Highway 19', 'city': 'Center', 'state': 'MO', 'zip_code': 63436, 'lat': 39.5155673, 'lng': -91.5116918 } ,
        {'id': 4, 'name': 'Southern Reynolds Co. RII', 'street_num': 1, 'road': 'School Street', 'city': 'Ellington', 'state': 'MO', 'zip_code': 63638, 'lat': 37.2397211, 'lng': -90.9629729 } ,
        {'id': 5, 'name': 'Farmington R-7 School District', 'street_num': 209, 'road': 'West College Street', 'city': 'Farmington', 'state': 'MO', 'zip_code': 63640, 'lat': 37.7834403, 'lng': -90.42284699999999 } ,
        {'id': 6, 'name': 'Clever R-V', 'street_num': 419, 'road': 'Newberry Street', 'city': 'Fredericktown', 'state': 'MO', 'zip_code': 63645, 'lat': 37.5542334, 'lng': -90.2885222} ,
        {'id': 7, 'name': 'Kelly A Burlison Middle School', 'street_num': 825, 'road': 'East Highway 72', 'city': 'Fredericktown', 'state': 'MO', 'zip_code': 63645, 'lat': 37.5656012, 'lng': -90.277056 } ,
        {'id': 8, 'name': 'Marquand-Zion School District', 'street_num': 205, 'road': 'East Morley', 'city': 'Marquand', 'state': 'MO', 'zip_code': 63655, 'lat': 37.4294223, 'lng': -90.16695999999999 } ,
        {'id': 9, 'name': 'City of Jackson', 'street_num': 381, 'road': 'East Deerwood Drive', 'city': 'Jackson', 'state': 'MO', 'zip_code': 63755, 'lat': 37.3986357, 'lng': -89.6570136 } ,
        {'id': 10, 'name': 'Scott City School District', 'street_num': 3000, 'road': 'Main Street', 'city': 'Scott City', 'state': 'MO', 'zip_code': 63780, 'lat': 37.2134709, 'lng': -89.54208799999999 } ,
        {'id': 11, 'name': 'Three Rivers College', 'street_num': 1400, 'road': 'S. Main', 'city': 'Sikeston', 'state': 'MO', 'zip_code': 63801, 'lat': 36.8541974, 'lng': -89.58235839999999 } ,
        {'id': 12, 'name': 'East Prairie R-II School District', 'street_num': 304, 'road': 'East Walnut', 'city': 'East Prairie', 'state': 'MO', 'zip_code': 63845, 'lat': 36.7752039, 'lng': -89.3792134 } ,
        {'id': 13, 'name': 'Malden R-I School District', 'street_num': 505, 'road': 'Burkhart', 'city': 'Malden', 'state': 'MO', 'zip_code': 63863, 'lat': 36.567501, 'lng': -89.9730103 } ,
        {'id': 14, 'name': 'Poplar Bluff Junior High School', 'street_num': 550, 'road': 'North Westwood', 'city': 'Poplar Bluff', 'state': 'MO', 'zip_code': 63901, 'lat': 36.761669, 'lng': -90.408875 } ,
        {'id': 15, 'name': "Poplar Bluff O'Neal Elementary", 'street_num': 2300, 'road': 'Baugh Lane', 'city': 'Poplar Bluff', 'state': 'MO', 'zip_code': 63901, 'lat': 36.7824774, 'lng': -90.4192194 } ,
        {'id': 16, 'name': 'Three Rivers College', 'street_num': 2080, 'road': 'Three Rivers Blvd', 'city': 'Poplar Bluff', 'state': 'MO', 'zip_code': 63901, 'lat': 36.7764609, 'lng': -90.4307836 } ,
        {'id': 17, 'name': 'Doniphan R-I School District', 'street_num': 904, 'road': 'Elm St', 'city': 'Doniphan', 'state': 'MO', 'zip_code': 63935, 'lat': 36.6243944, 'lng': -90.8199758 } ,
        {'id': 18, 'name': 'Greenville R-II School District', 'street_num': 185, 'road': 'Walnut Street', 'city': 'Greenville', 'state': 'MO', 'zip_code': 63944, 'lat': 37.1335499, 'lng': -90.4459778 } ,
        {'id': 19, 'name': 'Clearwater R-1 School District', 'street_num': 825, 'road': 'North Main Street', 'city': 'Piedmont', 'state': 'MO', 'zip_code': 63957, 'lat': 37.1601217, 'lng': -90.69072419999999 } ,
        {'id': 20, 'name': 'Puxico R-VIII School District', 'street_num': 433, 'road': 'N. Hickman', 'city': 'Puxico', 'state': 'MO', 'zip_code': 63960, 'lat': 36.952072, 'lng': -90.1560116 } ,
        {'id': 21, 'name': 'Van Buren R-I School District', 'street_num': 202, 'road': 'West College Street', 'city': 'Van Buren', 'state': 'MO', 'zip_code': 63965, 'lat': 36.9999975, 'lng': -91.0126983 } ,
        {'id': 22, 'name': 'Belton School District', 'street_num': 801, 'road': 'West North Avenue', 'city': 'Belton', 'state': 'MO', 'zip_code': 64012, 'lat': 38.8136416, 'lng': -94.5521588 } ,
        {'id': 23, 'name': 'Blue Springs RIV', 'street_num': 201, 'road': 'SE Sunnyside School Road', 'city': 'Blue Springs', 'state': 'MO', 'zip_code': 64014, 'lat': 39.0173849, 'lng': -94.25937449999999 } ,
        {'id': 24, 'name': 'James Lewis Elementary', 'street_num': 717, 'road': 'NW Park Road', 'city': 'Blue Springs', 'state': 'MO', 'zip_code': 64015, 'lat': 39.0486167, 'lng': -94.27235879999999 } ,
        {'id': 25, 'name': 'Metropolitan Community College', 'street_num': 20301, 'road': 'East 78 Highway', 'city': 'Independence', 'state': 'MO', 'zip_code': 64057, 'lat': 39.083176, 'lng': -94.339174 } 
        
        
  ])
})
}

