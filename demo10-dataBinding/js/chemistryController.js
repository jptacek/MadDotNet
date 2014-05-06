'use strict';

chemistryApp.controller('chemCtrl',
    function chemCtrl($scope,$log)  {
        $scope.periodic = perioicData;
        $scope.showTable = false;

        $scope.swapView = function() {
            $scope.showTable = !$scope.showTable;
        };
        $scope.protons = function(element) {
            return element.atomicNumber;
        };
        $scope.electrons = function(element) {
            return element.atomicNumber;
        };
        $scope.neutrons = function(element) {
            return Math.ceil(element.atomicWeight) -element.atomicNumber ;
        }
        ;
        $scope.filterSolids = function(element) {
            if (element.phase == 'Solid' && element.melting >500) {
                return element;
            }
        };

        $scope.newElementName ;
        $scope.newElementAtomicNumber;

        $scope.addElement = function() {
            $log.info('new item');
            $scope.periodic.elements.push({name: $scope.newElementName, atomicNumber: $scope.newElementAtomicNumber});
            $scope.newElementName='' ;
            $scope.newElementAtomicNumber='';

        };
    });
