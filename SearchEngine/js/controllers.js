'use strict';

SearchEngineApp.controller("FHHController", function ($scope, $filter, $http,  $log) {
    var diagnosisid;
    var x;
    $scope.relationships = [{
        siblings: [{ sibName: 'Father' }, { sibName: 'Mother' }, { sibName: 'Brother' }, { sibName: 'Sister' }, { sibName: 'Son' }, { sibName: 'Daughter' }, { sibName: 'Other' }, { sibName: 'Paternal Uncle' }, { sibName: 'Maternal Uncle' }, { sibName: 'Paternal Aunt' }, { sibName: 'Maternal Aunt' }, { sibName: 'Paternal Cousin' }, { sibName: 'Maternal Cousin' }]
    }];

    $scope.modalShown = false;
    $scope.toggleModal = function () {
        $scope.modalShown = !$scope.modalShown;
    };
    $scope.diagnosismodal = false;

    $scope.users = [
    {
        id: 0, name: 'Rita', dob: '2011-10-10', relation: 4, diagnosisdetails: '001,002,003', members: [
            { id: 0, diagnosisname: "001", startdate: '2011-10-10', enddate: '2011-10-10' },
            { id: 1, diagnosisname: "002", startdate: '2011-11-11', enddate: '2011-11-11' },
            { id: 2, diagnosisname: "003", startdate: '2011-12-12', enddate: '2011-12-12' }
        ]
    },
    {
        id: 1, name: 'John', dob: '2012-10-10', relation: 3, diagnosisdetails: '004,005,006', members: [
          {id:0, diagnosisname: "004", startdate: '2011-10-10', enddate: '2011-10-10' },
          { id: 1, diagnosisname: "005", startdate: '2011-11-11', enddate: '2011-11-11' },
          { id: 2, diagnosisname: "006", startdate: '2011-12-12', enddate: '2011-12-12' }
        ]
    },
    {
        id: 2, name: 'Bryan', dob: '2013-10-10', relation: 1, diagnosisdetails: '007,008,009', members: [
            { id: 0, diagnosisname: "007", startdate: '2011-10-10', enddate: '2011-10-10' },
            { id: 1, diagnosisname: "008", startdate: '2011-11-11', enddate: '2011-11-11' },
            { id: 2, diagnosisname: "009", startdate: '2011-12-12', enddate: '2011-12-12' }
        ]
    }
    ];

    $scope.relations = [
  { value: 1, text: 'Father' },
  { value: 2, text: 'Mother' },
  { value: 3, text: 'Brother' },
  { value: 4, text: 'Sister' },
  { value: 5, text: 'Son' },
  { value: 6, text: 'Daughter' },
  { value: 7, text: 'Other' },
  { value: 8, text: 'Paternal Uncle' },
  { value: 9, text: 'Maternal Uncle' },
  { value: 10, text: 'Paternal Aunt' },
  { value: 11, text: 'Maternal Aunt' },
  { value: 12, text: 'Paternal Cousin' },
  { value: 13, text: 'Maternal Cousin' }
    ];

    $scope.names = ["Headache(001)", "Migrane(002)", "Hypertension(003)", "Speech Defects(004)", "Autism(005)", "Diabetes(006)", "Fetal Alcohol Syndrome(007)", "Hydrocephalus(008)", "Hernia(009)", "test1(010)", "test2(011)", "test3(012)", "test4(013)", "test5(014)", "test6(015)","Cancer(016)"];

    $scope.showStatus = function (user) {
        var selected = [];
        if (user.relation) {
            selected = $filter('filter')($scope.relations, { value: user.relation });
        }
        return selected.length ? selected[0].text : 'Not set';
    };

    $scope.saveUser = function (data, id) {
        angular.extend(data, { id: id });
        return $http.post('/saveUser', data);
    };

    $scope.updatediagnosis = function () {
        alert("Diagnosis Updated!");
        scope: $scope;
        $scope.mem[x].diagnosisname = $scope.dname;
        $scope.mem[x].startdate = $scope.dstartdate;
        $scope.mem[x].enddate = $scope.denddate;
        $scope.diagnosismodal = false;
    }
    
    // remove user
    $scope.removeUser = function (index) {
        $scope.users.splice(index, 1);
    };

    $scope.removediag = function (uindex,index) {
        $scope.users[uindex].members.splice(index, 1);

    };    
    $scope.GetSearchresults = function () {
        if ($scope.patientname == undefined)
            alert("Enter Patient Name");
        else
            $scope.testshow = !$scope.testshow;
        var enteredPatient = $scope.patient;
        var patientName = FHH.PatientFamily[0].PatientName;
        if (patientName == enteredPatient) {
        }
    }
    var diagnosisnamepopupval;

    var diagnosis_list = {
        "diagnosisnames": [{
            "id": "001",
            "name": "Headache(001)"
        }, {
            "id": "002",
            "name": "Migrane(002)"
        }, {
            "id": "003",
            "name": "Hypertension(003)"
        }, {
            "id": "004",
            "name": "Speech Defects(004)"
        }, {
            "id": "005",
            "name": "Autism(005)"
        }, {
            "id": "006",
            "name": "Diabetes(006)"
        }, {
            "id": "007",
            "name": "Fetal Alcohol Syndrome(007)"
        }, {
            "id": "008",
            "name": "Hydrocephalus(008)"
        }, {
            "id": "009",
            "name": "Hernia(009)"
        }, {
            "id": "010",
            "name": "test1(010)"
        }, {
            "id": "011",
            "name": "test2(011)"
        }, {
            "id": "012",
            "name": "test3(012)"
        }, {
            "id": "013",
            "name": "test4(013)"
        }, {
            "id": "014",
            "name": "test5(014)"
        }, {
            "id": "015",
            "name": "test6(015)"
        }, {
            "id": "016",
            "name": "Cancer(016)"
        }]
    };

    $scope.modalShown2 = false;

    $scope.popupedit = function (index,memindex) {
        x = index;        
        var fetchid = $scope.users[x].members[memindex].diagnosisname;
        diagnosisnamepopupval = $filter('filter')(diagnosis_list.diagnosisnames, { id: fetchid })[0];
        $scope.selectedUser = $scope.users[x];
        $scope.selectedUser.members.diagnosisname = diagnosisnamepopupval.name;
        $scope.selectedUser.members.diagstartdate = $scope.users[x].members[memindex].startdate;//$scope.mem[x].startdate;
        $scope.selectedUser.members.diagenddate = $scope.users[x].members[memindex].enddate;
        $scope.diagnosismodal = !$scope.diagnosismodal;
        $scope.selectedRowMemberId = $scope.users[x].members[memindex].id;
    };

    $scope.SaveDiagnosis = function (that, index) {
        diagnosisid = that.$$childHead.selectedUser.members.diagnosisname;
        var splitstr = diagnosisid.substring(diagnosisid.lastIndexOf("(") + 1, diagnosisid.lastIndexOf(")"));
        $scope.users[x].members[index].diagnosisname = splitstr;
        $scope.users[x].members[index].startdate = that.$$childHead.selectedUser.members.diagstartdate;
        $scope.users[x].members[index].enddate = that.$$childHead.selectedUser.members.diagenddate;
        alert("Changes Saved");
        $scope.diagnosismodal = !$scope.diagnosismodal;
    };
});