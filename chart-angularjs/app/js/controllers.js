'use strict';

/* Controllers */
google.load('visualization', '1', {packages:['corechart']});
google.setOnLoadCallback(function () {
    angular.bootstrap(document.body, ['myApp']);
});
angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope',function($scope) {
	var data = google.visualization.arrayToDataTable([
		['Year','Sales','Expenses'],
		['INDIA',861134,0],
		['SWITZERLAND',447572,0],
		['NETHERLANDS',289357,0],
		['TURKS&CAICOS',7229,0],
		['SWEDEN',2873,0],
		['COSTARICA',2784,0],
		['HAITI',2004,0],
		['DOMINICANREP',1614,0],
		['LESOTHO',1428,0],
		['TAIWAN',798,0],
		['CAMBODIA',698,0],
		['PARAGUAY',516,0],
		['DENMARK',482,0],
		['MALAYSIA',321,0],
		['BERMUDA',296,0],
		['KAZAKHSTAN',200,0],
		['CAYMANISLANDS',148,0],
		['FIJI',84,0],
		['TRINIDAD-TOBAGO',84,0],
		['THAILAND',66,0],
		['JAMAICA',60,0],
		['RUSSIA',31,0],
		['ARGENTINA',21,0],
		['BOLIVIA',13,0],
		['GUATEMALA',8,0]
        ]);
	var options = {
          title: 'Company Performance'
        };
        var chart = {};
        chart.data = data;
        chart.options = options;

	$scope.chartTypes = [
            { typeName: 'LineChart', typeValue: '1'},
            { typeName: 'BarChart', typeValue: '2'},
            { typeName: 'ColumnChart', typeValue: '3'},
            { typeName: 'PieChart', typeValue: '4'},
            { typeName: 'MapChart', typeValue: '5'}
            ];
	$scope.selectType = function (type) {
        	$scope.chart.type = type.typeValue;
		$scope.chart.typeName = type.typeName;
    	}
        chart.type = $scope.chartTypes[0].typeValue;
        chart.typeName = $scope.chartTypes[0].typeName;
        $scope.chartType = $scope.chartTypes[0];
	
        $scope.chart = chart;
        
        
  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('TabsDemoCtrl', ['$scope',function($scope) {
    

  $scope.navType = 'pills';
  }]);

