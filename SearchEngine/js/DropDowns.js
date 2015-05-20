var jsonObj = {
    Siblings: [
         {
             "sibName": "Brother",
             "sibValue": "brotherVal"
         },
           {
               "sibName": "Sister",
               "sibValue": "sisterVal"
           }
           ,
           {
               "sibName": "Other",
               "sibValue": "othersVal"
           }
    ]
};


$(document).ready(function () {

    //for (var i = 0; i < jsonObj.Siblings.length; i++) {
    //    var option = $('<option></option>').text(jsonObj.Siblings[i]['sibName']);
    //    $('select').append(option);
    $scope.siblings = [
       {'name': 'Brother', 'value': 1 },
       { 'name': 'Sister', 'value': 2 },
       { 'name': 'Other', 'value': 3 }
    ];

    })
//});