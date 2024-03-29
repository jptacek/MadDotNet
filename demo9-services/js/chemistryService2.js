
chemistryApp.factory('chemistryDataP', function($http, $log, $q) {
    return { getChemistryDataP: function() {

        var perioicData= {
            // melting - Degrees C
            // Boiling - Degrees C
            elements: [
                {
                    "atomicNumber": 1,
                    "name": "Hydrogen",
                    "atomicWeight": 1.00794,
                    "phase": "Gas",
                    "ionization": 13.5984,
                    "melting": -259.15,
                    "boiling": -252.87
                },
                {
                    "atomicNumber": 2,
                    "name": "Helium",
                    "atomicWeight": 4.002602,
                    "phase": "Gas",
                    "ionization": 24.5874,
                    "melting": 0,
                    "boiling": -268.93
                },
                {
                    "atomicNumber": 3,
                    "name": "Lithium",
                    "atomicWeight": 6.941,
                    "phase": "Solid",
                    "ionization": 5.3917,
                    "melting": 180.54,
                    "boiling": 1342
                },
                {
                    "atomicNumber": 4,
                    "name": "Beryllium",
                    "atomicWeight": 9.012182,
                    "phase": "Solid",
                    "ionization": 9.3227,
                    "melting": 1287,
                    "boiling": 2470
                },
                {
                    "atomicNumber": 5,
                    "name": "Boron",
                    "atomicWeight": 10.811,
                    "phase": "Solid",
                    "ionization": 8.298,
                    "melting": 2075,
                    "boiling": 4000
                },
                {
                    "atomicNumber": 6,
                    "name": "Carbon",
                    "atomicWeight": 12.0107,
                    "phase": "Solid",
                    "ionization": 11.2603,
                    "melting": 3550,
                    "boiling": 4027
                },
                {
                    "atomicNumber": 7,
                    "name": "Nitrogen",
                    "atomicWeight": 14.0067,
                    "phase": "Gas",
                    "ionization": 14.5341,
                    "melting": -210.1,
                    "boiling": -195.79
                },
                {
                    "atomicNumber": 8,
                    "name": "Oxygen",
                    "atomicWeight": 15.9994,
                    "phase": "Gas",
                    "ionization": 13.6181,
                    "melting": -218.3,
                    "boiling": -182.9
                },
                {
                    "atomicNumber": 9,
                    "name": "Fluorine",
                    "atomicWeight": 18.9984032,
                    "phase": "Gas",
                    "ionization": 17.4228,
                    "melting": -219.6,
                    "boiling": -188.12
                },
                {
                    "atomicNumber": 10,
                    "name": "Neon",
                    "atomicWeight": 20.1797,
                    "phase": "Gas",
                    "ionization": 21.5645,
                    "melting": -248.59,
                    "boiling": -246.08
                },
                {
                    "atomicNumber": 11,
                    "name": "Sodium",
                    "atomicWeight": 22.98977,
                    "phase": "Solid",
                    "ionization": 5.1391,
                    "melting": 97.72,
                    "boiling": 883
                },
                {
                    "atomicNumber": 12,
                    "name": "Magnesium",
                    "atomicWeight": 24.305,
                    "phase": "Solid",
                    "ionization": 7.6462,
                    "melting": 650,
                    "boiling": 1090
                },
                {
                    "atomicNumber": 13,
                    "name": "Aluminum",
                    "atomicWeight": 26.981538,
                    "phase": "Solid",
                    "ionization": 5.9858,
                    "melting": 660.32,
                    "boiling": 2519
                },
                {
                    "atomicNumber": 14,
                    "name": "Silicon",
                    "atomicWeight": 28.0855,
                    "phase": "Solid",
                    "ionization": 8.1517,
                    "melting": 1414,
                    "boiling": 2900
                },
                {
                    "atomicNumber": 15,
                    "name": "Phosphorus",
                    "atomicWeight": 30.97361,
                    "phase": "Solid",
                    "ionization": 10.4867,
                    "melting": 44.2,
                    "boiling": 280.5
                },
                {
                    "atomicNumber": 16,
                    "name": "Sulfur",
                    "atomicWeight": 32.065,
                    "phase": "Solid",
                    "ionization": 10.36,
                    "melting": 115.21,
                    "boiling": 444.72
                },
                {
                    "atomicNumber": 17,
                    "name": "Chlorine",
                    "atomicWeight": 35.453,
                    "phase": "Gas",
                    "ionization": 12.9676,
                    "melting": -101.5,
                    "boiling": -34.04
                },
                {
                    "atomicNumber": 18,
                    "name": "Argon",
                    "atomicWeight": 39.948,
                    "phase": "Gas",
                    "ionization": 15.7596,
                    "melting": -189.3,
                    "boiling": -185.8
                },
                {
                    "atomicNumber": 19,
                    "name": "Potassium",
                    "atomicWeight": 39.0983,
                    "phase": "Solid",
                    "ionization": 4.3407,
                    "melting": 63.38,
                    "boiling": 759
                },
                {
                    "atomicNumber": 20,
                    "name": "Calcium",
                    "atomicWeight": 40.078,
                    "phase": "Solid",
                    "ionization": 6.1132,
                    "melting": 842,
                    "boiling": 1484
                },
                {
                    "atomicNumber": 21,
                    "name": "Scandium",
                    "atomicWeight": 44.95591,
                    "phase": "Solid",
                    "ionization": 6.5615,
                    "melting": 1541,
                    "boiling": 2830
                },
                {
                    "atomicNumber": 22,
                    "name": "Titanium",
                    "atomicWeight": 47.867,
                    "phase": "Solid",
                    "ionization": 6.8281,
                    "melting": 1668,
                    "boiling": 3287
                },
                {
                    "atomicNumber": 23,
                    "name": "Vanadium",
                    "atomicWeight": 50.9415,
                    "phase": "Solid",
                    "ionization": 6.7462,
                    "melting": 1910,
                    "boiling": 3407
                },
                {
                    "atomicNumber": 24,
                    "name": "Chromium",
                    "atomicWeight": 51.9961,
                    "phase": "Solid",
                    "ionization": 6.7665,
                    "melting": 1907,
                    "boiling": 2671
                },
                {
                    "atomicNumber": 25,
                    "name": "Manganese",
                    "atomicWeight": 54.938049,
                    "phase": "Solid",
                    "ionization": 7.434,
                    "melting": 1246,
                    "boiling": 2061
                },
                {
                    "atomicNumber": 26,
                    "name": "Iron",
                    "atomicWeight": 55.845,
                    "phase": "Solid",
                    "ionization": 7.9024,
                    "melting": 1538,
                    "boiling": 2861
                },
                {
                    "atomicNumber": 27,
                    "name": "Cobalt",
                    "atomicWeight": 58.9332,
                    "phase": "Solid",
                    "ionization": 7.881,
                    "melting": 1495,
                    "boiling": 2927
                },
                {
                    "atomicNumber": 28,
                    "name": "Nickel",
                    "atomicWeight": 58.6934,
                    "phase": "Solid",
                    "ionization": 7.6398,
                    "melting": 1455,
                    "boiling": 2913
                },
                {
                    "atomicNumber": 29,
                    "name": "Copper",
                    "atomicWeight": 63.546,
                    "phase": "Solid",
                    "ionization": 7.7264,
                    "melting": 1084.62,
                    "boiling": 2927
                },
                {
                    "atomicNumber": 30,
                    "name": "Zinc",
                    "atomicWeight": 65.409,
                    "phase": "Solid",
                    "ionization": 9.3942,
                    "melting": 419.53,
                    "boiling": 907
                },
                {
                    "atomicNumber": 31,
                    "name": "Gallium",
                    "atomicWeight": 69.723,
                    "phase": "Solid",
                    "ionization": 5.9993,
                    "melting": 29.76,
                    "boiling": 2204
                },
                {
                    "atomicNumber": 32,
                    "name": "Germanium",
                    "atomicWeight": 72.64,
                    "phase": "Solid",
                    "ionization": 7.8994,
                    "melting": 938.3,
                    "boiling": 2820
                },
                {
                    "atomicNumber": 33,
                    "name": "Arsenic",
                    "atomicWeight": 74.9216,
                    "phase": "Solid",
                    "ionization": 9.7886,
                    "melting": 817,
                    "boiling": 614
                },
                {
                    "atomicNumber": 34,
                    "name": "Selenium",
                    "atomicWeight": 78.96,
                    "phase": "Solid",
                    "ionization": 9.7524,
                    "melting": 221,
                    "boiling": 685
                },
                {
                    "atomicNumber": 35,
                    "name": "Bromine",
                    "atomicWeight": 79.904,
                    "phase": "Liquid",
                    "ionization": 11.8138,
                    "melting": -7.3,
                    "boiling": 59
                },
                {
                    "atomicNumber": 36,
                    "name": "Krypton",
                    "atomicWeight": 83.798,
                    "phase": "Gas",
                    "ionization": 13.9996,
                    "melting": -157.36,
                    "boiling": -153.22
                },
                {
                    "atomicNumber": 37,
                    "name": "Rubidium",
                    "atomicWeight": 85.4678,
                    "phase": "Solid",
                    "ionization": 4.1771,
                    "melting": 39.31,
                    "boiling": 688
                },
                {
                    "atomicNumber": 38,
                    "name": "Strontium",
                    "atomicWeight": 87.62,
                    "phase": "Solid",
                    "ionization": 5.6949,
                    "melting": 777,
                    "boiling": 1382
                },
                {
                    "atomicNumber": 39,
                    "name": "Yttrium",
                    "atomicWeight": 88.90585,
                    "phase": "Solid",
                    "ionization": 6.2173,
                    "melting": 1526,
                    "boiling": 3345
                },
                {
                    "atomicNumber": 40,
                    "name": "Zirconium",
                    "atomicWeight": 91.224,
                    "phase": "Solid",
                    "ionization": 6.6339,
                    "melting": 1855,
                    "boiling": 4409
                },
                {
                    "atomicNumber": 41,
                    "name": "Niobium",
                    "atomicWeight": 92.90638,
                    "phase": "Solid",
                    "ionization": 6.7589,
                    "melting": 2477,
                    "boiling": 4744
                },
                {
                    "atomicNumber": 42,
                    "name": "Molybdenum",
                    "atomicWeight": 95.94,
                    "phase": "Solid",
                    "ionization": 7.0924,
                    "melting": 2623,
                    "boiling": 4639
                },
                {
                    "atomicNumber": 43,
                    "name": "Technetium",
                    "atomicWeight": (98),
                    "phase": "Synthetic",
                    "ionization": 7.28,
                    "melting": 2157,
                    "boiling": 4265
                },
                {
                    "atomicNumber": 44,
                    "name": "Ruthenium",
                    "atomicWeight": 101.07,
                    "phase": "Solid",
                    "ionization": 7.3605,
                    "melting": 2334,
                    "boiling": 4150
                },
                {
                    "atomicNumber": 45,
                    "name": "Rhodium",
                    "atomicWeight": 102.9055,
                    "phase": "Solid",
                    "ionization": 7.4589,
                    "melting": 1964,
                    "boiling": 3695
                },
                {
                    "atomicNumber": 46,
                    "name": "Palladium",
                    "atomicWeight": 106.42,
                    "phase": "Solid",
                    "ionization": 8.3369,
                    "melting": 1554.9,
                    "boiling": 2963
                },
                {
                    "atomicNumber": 47,
                    "name": "Silver",
                    "atomicWeight": 107.8682,
                    "phase": "Solid",
                    "ionization": 7.5762,
                    "melting": 961.78,
                    "boiling": 2162
                },
                {
                    "atomicNumber": 48,
                    "name": "Cadmium",
                    "atomicWeight": 112.411,
                    "phase": "Solid",
                    "ionization": 8.9938,
                    "melting": 321.07,
                    "boiling": 767
                },
                {
                    "atomicNumber": 49,
                    "name": "Indium",
                    "atomicWeight": 114.818,
                    "phase": "Solid",
                    "ionization": 5.7864,
                    "melting": 156.6,
                    "boiling": 2072
                },
                {
                    "atomicNumber": 50,
                    "name": "Tin",
                    "atomicWeight": 118.71,
                    "phase": "Solid",
                    "ionization": 7.3439,
                    "melting": 231.93,
                    "boiling": 2602
                },
                {
                    "atomicNumber": 51,
                    "name": "Antimony",
                    "atomicWeight": 121.76,
                    "phase": "Solid",
                    "ionization": 8.6084,
                    "melting": 630.63,
                    "boiling": 1587
                },
                {
                    "atomicNumber": 52,
                    "name": "Tellurium",
                    "atomicWeight": 127.6,
                    "phase": "Solid",
                    "ionization": 9.0096,
                    "melting": 449.51,
                    "boiling": 988
                },
                {
                    "atomicNumber": 53,
                    "name": "Iodine",
                    "atomicWeight": 126.90447,
                    "phase": "Solid",
                    "ionization": 10.4513,
                    "melting": 113.7,
                    "boiling": 184.3
                },
                {
                    "atomicNumber": 54,
                    "name": "Xenon",
                    "atomicWeight": 131.293,
                    "phase": "Gas",
                    "ionization": 12.1298,
                    "melting": -111.8,
                    "boiling": -108
                },
                {
                    "atomicNumber": 55,
                    "name": "Cesium",
                    "atomicWeight": 132.90545,
                    "phase": "Solid",
                    "ionization": 3.8939,
                    "melting": 28.44,
                    "boiling": 671
                },
                {
                    "atomicNumber": 56,
                    "name": "Barium",
                    "atomicWeight": 137.327,
                    "phase": "Solid",
                    "ionization": 5.2117,
                    "melting": 727,
                    "boiling": 1870
                },
                {
                    "atomicNumber": 57,
                    "name": "Lanthanum",
                    "atomicWeight": 138.9055,
                    "phase": "Solid",
                    "ionization": 5.5769,
                    "melting": 920,
                    "boiling": 3464
                },
                {
                    "atomicNumber": 58,
                    "name": "Cerium",
                    "atomicWeight": 140.116,
                    "phase": "Solid",
                    "ionization": 5.5387,
                    "melting": 798,
                    "boiling": 3360
                },
                {
                    "atomicNumber": 59,
                    "name": "Praseodymium",
                    "atomicWeight": 140.90765,
                    "phase": "Solid",
                    "ionization": 5.473,
                    "melting": 931,
                    "boiling": 3290
                },
                {
                    "atomicNumber": 60,
                    "name": "Neodymium",
                    "atomicWeight": 144.24,
                    "phase": "Solid",
                    "ionization": 5.525,
                    "melting": 1021,
                    "boiling": 3100
                },
                {
                    "atomicNumber": 61,
                    "name": "Promethium",
                    "atomicWeight": (145),
                    "phase": "Synthetic",
                    "ionization": 5.582,
                    "melting": 1100,
                    "boiling": 3000
                },
                {
                    "atomicNumber": 62,
                    "name": "Samarium",
                    "atomicWeight": 150.36,
                    "phase": "Solid",
                    "ionization": 5.6437,
                    "melting": 1072,
                    "boiling": 1803
                },
                {
                    "atomicNumber": 63,
                    "name": "Europium",
                    "atomicWeight": 151.964,
                    "phase": "Solid",
                    "ionization": 5.6704,
                    "melting": 822,
                    "boiling": 1527
                },
                {
                    "atomicNumber": 64,
                    "name": "Gadolinium",
                    "atomicWeight": 157.25,
                    "phase": "Solid",
                    "ionization": 6.1498,
                    "melting": 1313,
                    "boiling": 3250
                },
                {
                    "atomicNumber": 65,
                    "name": "Terbium",
                    "atomicWeight": 158.92534,
                    "phase": "Solid",
                    "ionization": 5.8638,
                    "melting": 1356,
                    "boiling": 3230
                },
                {
                    "atomicNumber": 66,
                    "name": "Dysprosium",
                    "atomicWeight": 162.5,
                    "phase": "Solid",
                    "ionization": 5.9389,
                    "melting": 1412,
                    "boiling": 2567
                },
                {
                    "atomicNumber": 67,
                    "name": "Holmium",
                    "atomicWeight": 164.93032,
                    "phase": "Solid",
                    "ionization": 6.0215,
                    "melting": 1474,
                    "boiling": 2700
                },
                {
                    "atomicNumber": 68,
                    "name": "Erbium",
                    "atomicWeight": 167.259,
                    "phase": "Solid",
                    "ionization": 6.1077,
                    "melting": 1497,
                    "boiling": 2868
                },
                {
                    "atomicNumber": 69,
                    "name": "Thulium",
                    "atomicWeight": 168.93421,
                    "phase": "Solid",
                    "ionization": 6.1843,
                    "melting": 1545,
                    "boiling": 1950
                },
                {
                    "atomicNumber": 70,
                    "name": "Ytterbium",
                    "atomicWeight": 173.04,
                    "phase": "Solid",
                    "ionization": 6.2542,
                    "melting": 819,
                    "boiling": 1196
                },
                {
                    "atomicNumber": 71,
                    "name": "Lutetium",
                    "atomicWeight": 174.967,
                    "phase": "Solid",
                    "ionization": 5.4259,
                    "melting": 1663,
                    "boiling": 3402
                },
                {
                    "atomicNumber": 72,
                    "name": "Hafnium",
                    "atomicWeight": 178.49,
                    "phase": "Solid",
                    "ionization": 6.8251,
                    "melting": 2233,
                    "boiling": 4603
                },
                {
                    "atomicNumber": 73,
                    "name": "Tantalum",
                    "atomicWeight": 180.9479,
                    "phase": "Solid",
                    "ionization": 7.5496,
                    "melting": 3017,
                    "boiling": 5458
                },
                {
                    "atomicNumber": 74,
                    "name": "Tungsten",
                    "atomicWeight": 183.84,
                    "phase": "Solid",
                    "ionization": 7.864,
                    "melting": 3422,
                    "boiling": 5555
                },
                {
                    "atomicNumber": 75,
                    "name": "Rhenium",
                    "atomicWeight": 186.207,
                    "phase": "Solid",
                    "ionization": 7.8335,
                    "melting": 3186,
                    "boiling": 5596
                },
                {
                    "atomicNumber": 76,
                    "name": "Osmium",
                    "atomicWeight": 190.23,
                    "phase": "Solid",
                    "ionization": 8.4382,
                    "melting": 3033,
                    "boiling": 5012
                },
                {
                    "atomicNumber": 77,
                    "name": "Iridium",
                    "atomicWeight": 192.217,
                    "phase": "Solid",
                    "ionization": 8.967,
                    "melting": 2466,
                    "boiling": 4428
                },
                {
                    "atomicNumber": 78,
                    "name": "Platinum",
                    "atomicWeight": 195.078,
                    "phase": "Solid",
                    "ionization": 8.9588,
                    "melting": 1768.3,
                    "boiling": 3825
                },
                {
                    "atomicNumber": 79,
                    "name": "Gold",
                    "atomicWeight": 196.96655,
                    "phase": "Solid",
                    "ionization": 9.2255,
                    "melting": 1064.18,
                    "boiling": 2856
                },
                {
                    "atomicNumber": 80,
                    "name": "Mercury",
                    "atomicWeight": 200.59,
                    "phase": "Liquid",
                    "ionization": 10.4375,
                    "melting": -38.83,
                    "boiling": 356.73
                },
                {
                    "atomicNumber": 81,
                    "name": "Thallium",
                    "atomicWeight": 204.3833,
                    "phase": "Solid",
                    "ionization": 6.1082,
                    "melting": 304,
                    "boiling": 1473
                },
                {
                    "atomicNumber": 82,
                    "name": "Lead",
                    "atomicWeight": 207.2,
                    "phase": "Solid",
                    "ionization": 7.4167,
                    "melting": 327.46,
                    "boiling": 1749
                },
                {
                    "atomicNumber": 83,
                    "name": "Bismuth",
                    "atomicWeight": 208.98038,
                    "phase": "Solid",
                    "ionization": 7.2855,
                    "melting": 271.3,
                    "boiling": 1564
                },
                {
                    "atomicNumber": 84,
                    "name": "Polonium",
                    "atomicWeight": (209),
                    "phase": "Solid",
                    "ionization": 8.414,
                    "melting": 254,
                    "boiling": 962
                },
                {
                    "atomicNumber": 86,
                    "name": "Radon",
                    "atomicWeight": (222),
                    "phase": "Gas",
                    "ionization": 10.7485,
                    "melting": -71,
                    "boiling": -61.7
                },
                {
                    "atomicNumber": 88,
                    "name": "Radium",
                    "atomicWeight": (226),
                    "phase": "Solid",
                    "ionization": 5.2784,
                    "melting": 700,
                    "boiling": 1737
                },
                {
                    "atomicNumber": 89,
                    "name": "Actinium",
                    "atomicWeight": (227),
                    "phase": "Solid",
                    "ionization": 5.17,
                    "melting": 1050,
                    "boiling": 3200
                },
                {
                    "atomicNumber": 90,
                    "name": "Thorium",
                    "atomicWeight": 232.0381,
                    "phase": "Solid",
                    "ionization": 6.3067,
                    "melting": 1750,
                    "boiling": 4820
                },
                {
                    "atomicNumber": 91,
                    "name": "Protactinium",
                    "atomicWeight": 231.03588,
                    "phase": "Solid",
                    "ionization": 5.89,
                    "melting": 1572,
                    "boiling": 4000
                },
                {
                    "atomicNumber": 92,
                    "name": "Uranium",
                    "atomicWeight": 238.02891,
                    "phase": "Solid",
                    "ionization": 6.1941,
                    "melting": 1135,
                    "boiling": 3927
                },
                {
                    "atomicNumber": 93,
                    "name": "Neptunium",
                    "atomicWeight": (237),
                    "phase": "Synthetic",
                    "ionization": 6.2657,
                    "melting": 644,
                    "boiling": 4000
                },
                {
                    "atomicNumber": 94,
                    "name": "Plutonium",
                    "atomicWeight": (244),
                    "phase": "Synthetic",
                    "ionization": 6.026,
                    "melting": 640,
                    "boiling": 3230
                },
                {
                    "atomicNumber": 95,
                    "name": "Americium",
                    "atomicWeight": (243),
                    "phase": "Synthetic",
                    "ionization": 5.9738,
                    "melting": 1176,
                    "boiling": 2011
                },
                {
                    "atomicNumber": 96,
                    "name": "Curium",
                    "atomicWeight": (247),
                    "phase": "Synthetic",
                    "ionization": 5.9914,
                    "melting": 1345,
                    "boiling": 3110
                }

            ]
        };

        $log.info('getChemistryDataP');

        var deferred = $q.defer();

        deferred.resolve(perioicData);

        return deferred.promise;

        /* Real World
         $http({ method: 'POST', url: serviceURL }).
         success(function(data, status, headers, config) {
         //$log.info(data, status, headers(), config);
         deferred.resolve(data);
         }).
         error(function(data, status, headers, config) {
         //$log.warn(data, status, headers(), config);
         deferred.reject(status);
         });
         return deferred.promise;
         */


    }
    }

});
