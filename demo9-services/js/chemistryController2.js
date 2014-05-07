'use strict';

chemistryApp.controller('chemCtrl2',
    function chemCtrl($scope,chemistryDataP) {
        chemistryDataP.getChemistryDataP().then(function(data) {
            $scope.periodic = data;
        });
    }
);

