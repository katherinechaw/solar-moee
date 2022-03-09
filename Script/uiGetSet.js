/*
************************************************************************************
************************************* uiGetSet *************************************
************************************************************************************
*/

////////////////////////////////// Load Dropdown //////////////////////////////////

var Currencies = [
	{"CurrencyName": "MMK",  "Description": "MMK (သိန်းကျပ်)", "Rate": "2000"},
	{"CurrencyName": "USD",  "Description": "USD", "Rate": "1"},
]

var BatterySystems = [
	{"Inverter": "1500",  "BatterySystem":"12"},
	{"Inverter": "3500",  "BatterySystem":"24"},
	{"Inverter": "5000",  "BatterySystem":"48"},
]

var BatterySizes = [
	{"BatterySystem":"12",    "Capacity":"300",    "Price":"20",       "Description":"12V 25Ah (25Ah x 1) "},
	{"BatterySystem":"12",    "Capacity":"420",    "Price":"49",       "Description":"12V 35Ah (35Ah x 1) "},
	{"BatterySystem":"12",    "Capacity":"840",    "Price":"83",       "Description":"12V 70Ah (70Ah x 1) "},
	{"BatterySystem":"12",    "Capacity":"1200",    "Price":"121",       "Description":"12V 100Ah (100Ah x 1) "},
	{"BatterySystem":"12",    "Capacity":"1440",    "Price":"147",       "Description":"12V 120Ah (120Ah x 1) "},
	{"BatterySystem":"12",    "Capacity":"1800",    "Price":"181",       "Description":"12V 150Ah (150Ah x 1) "},
	{"BatterySystem":"12",    "Capacity":"2400",    "Price":"228",       "Description":"12V 200Ah (200Ah x 1) "},
	{"BatterySystem":"12",    "Capacity":"4800",    "Price":"456",       "Description":"12V 400Ah (200Ah x 2) "},
	{"BatterySystem":"12",    "Capacity":"7200",    "Price":"684",       "Description":"12V 600Ah (200Ah x 3) "},
	{"BatterySystem":"12",    "Capacity":"9600",    "Price":"912",       "Description":"12V 800Ah (200Ah x 4) "},
	{"BatterySystem":"24",    "Capacity":"840",    "Price":"98",       "Description":"24V 35Ah (35Ah x 2) "},
	{"BatterySystem":"24",    "Capacity":"1680",    "Price":"166",       "Description":"24V 70Ah (70Ah x 2) "},
	{"BatterySystem":"24",    "Capacity":"2400",    "Price":"242",       "Description":"24V 100Ah (100Ah x 2) "},
	{"BatterySystem":"24",    "Capacity":"2880",    "Price":"294",       "Description":"24V 120Ah (120Ah x 2) "},
	{"BatterySystem":"24",    "Capacity":"3600",    "Price":"362",       "Description":"24V 150Ah (150Ah x 2) "},
	{"BatterySystem":"24",    "Capacity":"4800",    "Price":"456",       "Description":"24V 200Ah (200Ah x 2) "},
	{"BatterySystem":"24",    "Capacity":"9600",    "Price":"912",       "Description":"24V 400Ah (200Ah x 4) "},
	{"BatterySystem":"48",    "Capacity":"1680",    "Price":"196",       "Description":"48V 35Ah (35Ah x 4) "},
	{"BatterySystem":"48",    "Capacity":"3360",    "Price":"332",       "Description":"48V 70Ah (70Ah x 4) "},
	{"BatterySystem":"48",    "Capacity":"4800",    "Price":"484",       "Description":"48V 100Ah (100Ah x 4) "},
	{"BatterySystem":"48",    "Capacity":"5760",    "Price":"588",       "Description":"48V 120Ah (120Ah x 4) "},
	{"BatterySystem":"48",    "Capacity":"7200",    "Price":"724",       "Description":"48V 150Ah (150Ah x 4) "},
	{"BatterySystem":"48",    "Capacity":"9600",    "Price":"912",       "Description":"48V 200Ah (200Ah x 4) "},


	/*{"BatterySystem":"12",    "Capacity":"420",    "Price":"49",       "Description":"12V 35Ah (35Ah x 1) "},
	{"BatterySystem":"12",    "Capacity":"840",    "Price":"83",       "Description":"12V 70Ah (70Ah x 1) "},
	{"BatterySystem":"12",    "Capacity":"1200",    "Price":"121",       "Description":"12V 100Ah (100Ah x 1) "},
	{"BatterySystem":"12",    "Capacity":"1440",    "Price":"147",       "Description":"12V 120Ah (120Ah x 1) "},
	{"BatterySystem":"24",    "Capacity":"1680",    "Price":"166",       "Description":"24V 70Ah (70Ah x 2) "},
	{"BatterySystem":"12",    "Capacity":"1800",    "Price":"181",       "Description":"12V 150Ah (150Ah x 1) "},
	{"BatterySystem":"12",    "Capacity":"2400",    "Price":"228",       "Description":"12V 200Ah (200Ah x 1) "},
	{"BatterySystem":"12",    "Capacity":"2520",    "Price":"249",       "Description":"12V 210Ah (70Ah x 3) "},
	{"BatterySystem":"24",    "Capacity":"2880",    "Price":"294",       "Description":"24V 120Ah (120Ah x 2) "},
	{"BatterySystem":"48",    "Capacity":"3360",    "Price":"332",       "Description":"48V 70Ah (70Ah x 4) "},
	{"BatterySystem":"24",    "Capacity":"3600",    "Price":"362",       "Description":"24V 150Ah (150Ah x 2) "},
	{"BatterySystem":"12",    "Capacity":"4200",    "Price":"415",       "Description":"12V 350Ah (70Ah x 5) "},
	{"BatterySystem":"12",    "Capacity":"4320",    "Price":"441",       "Description":"12V 360Ah (120Ah x 3) "},
	{"BatterySystem":"24",    "Capacity":"4800",    "Price":"456",       "Description":"24V 200Ah (200Ah x 2) "},
	{"BatterySystem":"12",    "Capacity":"5040",    "Price":"498",       "Description":"12V 420Ah (70Ah x 6) "},
	{"BatterySystem":"12",    "Capacity":"5400",    "Price":"543",       "Description":"12V 450Ah (150Ah x 3) "},
	{"BatterySystem":"12",    "Capacity":"5880",    "Price":"581",       "Description":"12V 490Ah (70Ah x 7) "},
	{"BatterySystem":"12",    "Capacity":"6000",    "Price":"605",       "Description":"12V 500Ah (100Ah x 5) "},
	{"BatterySystem":"12",    "Capacity":"6720",    "Price":"664",       "Description":"12V 560Ah (70Ah x 8) "},
	{"BatterySystem":"12",    "Capacity":"7200",    "Price":"684",       "Description":"12V 600Ah (200Ah x 3) "},
	{"BatterySystem":"48",    "Capacity":"7200",    "Price":"724",       "Description":"48V 150Ah (150Ah x 4) "},
	{"BatterySystem":"12",    "Capacity":"7560",    "Price":"747",       "Description":"12V 630Ah (70Ah x 9) "},
	{"BatterySystem":"12",    "Capacity":"8400",    "Price":"830",       "Description":"12V 700Ah (70Ah x 10) "},
	{"BatterySystem":"12",    "Capacity":"8640",    "Price":"882",       "Description":"12V 720Ah (120Ah x 6) "},
	{"BatterySystem":"12",    "Capacity":"9000",    "Price":"905",       "Description":"12V 750Ah (150Ah x 5) "},
	{"BatterySystem":"48",    "Capacity":"9600",    "Price":"912",       "Description":"48V 200Ah (200Ah x 4) "},
	{"BatterySystem":"12",    "Capacity":"10080",    "Price":"996",       "Description":"12V 840Ah (70Ah x 12) "},
	{"BatterySystem":"12",    "Capacity":"10920",    "Price":"1079",       "Description":"12V 910Ah (70Ah x 13) "},
	{"BatterySystem":"12",    "Capacity":"12000",    "Price":"1140",       "Description":"12V 1000Ah (200Ah x 5) "},
	{"BatterySystem":"12",    "Capacity":"12600",    "Price":"1245",       "Description":"12V 1050Ah (70Ah x 15) "},
	{"BatterySystem":"12",    "Capacity":"12960",    "Price":"1323",       "Description":"12V 1080Ah (120Ah x 9) "},
	{"BatterySystem":"12",    "Capacity":"13200",    "Price":"1331",       "Description":"12V 1100Ah (100Ah x 11) "},
	{"BatterySystem":"12",    "Capacity":"14400",    "Price":"1368",       "Description":"12V 1200Ah (200Ah x 6) "},
	{"BatterySystem":"12",    "Capacity":"15600",    "Price":"1573",       "Description":"12V 1300Ah (100Ah x 13) "},
	{"BatterySystem":"12",    "Capacity":"16800",    "Price":"1596",       "Description":"12V 1400Ah (200Ah x 7) "},
	{"BatterySystem":"12",    "Capacity":"17280",    "Price":"1764",       "Description":"12V 1440Ah (120Ah x 12) "},
	{"BatterySystem":"12",    "Capacity":"18000",    "Price":"1810",       "Description":"12V 1500Ah (150Ah x 10) "},
	{"BatterySystem":"12",    "Capacity":"19200",    "Price":"1824",       "Description":"12V 1600Ah (200Ah x 8) "},
	{"BatterySystem":"12",    "Capacity":"19800",    "Price":"1991",       "Description":"12V 1650Ah (150Ah x 11) "},
	{"BatterySystem":"12",    "Capacity":"21600",    "Price":"2052",       "Description":"12V 1800Ah (200Ah x 9) "},
	{"BatterySystem":"12",    "Capacity":"24000",    "Price":"2280",       "Description":"12V 2000Ah (200Ah x 10) "},
	{"BatterySystem":"12",    "Capacity":"26400",    "Price":"2508",       "Description":"12V 2200Ah (200Ah x 11) "},
	{"BatterySystem":"12",    "Capacity":"27000",    "Price":"2715",       "Description":"12V 2250Ah (150Ah x 15) "},
	{"BatterySystem":"12",    "Capacity":"28800",    "Price":"2736",       "Description":"12V 2400Ah (200Ah x 12) "},
	{"BatterySystem":"12",    "Capacity":"31200",    "Price":"2964",       "Description":"12V 2600Ah (200Ah x 13) "},
	{"BatterySystem":"12",    "Capacity":"33600",    "Price":"3192",       "Description":"12V 2800Ah (200Ah x 14) "},
	{"BatterySystem":"12",    "Capacity":"36000",    "Price":"3420",       "Description":"12V 3000Ah (200Ah x 15) "},
	{"BatterySystem":"12",    "Capacity":"38400",    "Price":"3648",       "Description":"12V 3200Ah (200Ah x 16) "},
	{"BatterySystem":"12",    "Capacity":"40800",    "Price":"3876",       "Description":"12V 3400Ah (200Ah x 17) "},
	{"BatterySystem":"12",    "Capacity":"43200",    "Price":"4104",       "Description":"12V 3600Ah (200Ah x 18) "},
	{"BatterySystem":"12",    "Capacity":"45600",    "Price":"4332",       "Description":"12V 3800Ah (200Ah x 19) "},
	{"BatterySystem":"12",    "Capacity":"48000",    "Price":"4560",       "Description":"12V 4000Ah (200Ah x 20) "},
	{"BatterySystem":"12",    "Capacity":"50400",    "Price":"4788",       "Description":"12V 4200Ah (200Ah x 21) "},
	{"BatterySystem":"12",    "Capacity":"52800",    "Price":"5016",       "Description":"12V 4400Ah (200Ah x 22) "},
	{"BatterySystem":"12",    "Capacity":"55200",    "Price":"5244",       "Description":"12V 4600Ah (200Ah x 23) "},
	{"BatterySystem":"12",    "Capacity":"57600",    "Price":"5472",       "Description":"12V 4800Ah (200Ah x 24) "},
	{"BatterySystem":"12",    "Capacity":"60000",    "Price":"5700",       "Description":"12V 5000Ah (200Ah x 25) "},
	{"BatterySystem":"12",    "Capacity":"62400",    "Price":"5928",       "Description":"12V 5200Ah (200Ah x 26) "},
	{"BatterySystem":"12",    "Capacity":"64800",    "Price":"6156",       "Description":"12V 5400Ah (200Ah x 27) "},
	{"BatterySystem":"12",    "Capacity":"67200",    "Price":"6384",       "Description":"12V 5600Ah (200Ah x 28) "},
	{"BatterySystem":"12",    "Capacity":"69600",    "Price":"6612",       "Description":"12V 5800Ah (200Ah x 29) "},
	{"BatterySystem":"12",    "Capacity":"72000",    "Price":"6840",       "Description":"12V 6000Ah (200Ah x 30) "},
	{"BatterySystem":"12",    "Capacity":"74400",    "Price":"7068",       "Description":"12V 6200Ah (200Ah x 31) "},
	{"BatterySystem":"12",    "Capacity":"76800",    "Price":"7296",       "Description":"12V 6400Ah (200Ah x 32) "},
	{"BatterySystem":"12",    "Capacity":"79200",    "Price":"7524",       "Description":"12V 6600Ah (200Ah x 33) "},
	{"BatterySystem":"12",    "Capacity":"81600",    "Price":"7752",       "Description":"12V 6800Ah (200Ah x 34) "},
	{"BatterySystem":"12",    "Capacity":"84000",    "Price":"7980",       "Description":"12V 7000Ah (200Ah x 35) "},
	{"BatterySystem":"12",    "Capacity":"86400",    "Price":"8208",       "Description":"12V 7200Ah (200Ah x 36) "},
	{"BatterySystem":"12",    "Capacity":"88800",    "Price":"8436",       "Description":"12V 7400Ah (200Ah x 37) "},
	{"BatterySystem":"12",    "Capacity":"91200",    "Price":"8664",       "Description":"12V 7600Ah (200Ah x 38) "},
	{"BatterySystem":"12",    "Capacity":"93600",    "Price":"8892",       "Description":"12V 7800Ah (200Ah x 39) "},
	{"BatterySystem":"12",    "Capacity":"96000",    "Price":"9120",       "Description":"12V 8000Ah (200Ah x 40) "},
	{"BatterySystem":"12",    "Capacity":"98400",    "Price":"9348",       "Description":"12V 8200Ah (200Ah x 41) "},
	{"BatterySystem":"12",    "Capacity":"100800",    "Price":"9576",       "Description":"12V 8400Ah (200Ah x 42) "},
	{"BatterySystem":"12",    "Capacity":"103200",    "Price":"9804",       "Description":"12V 8600Ah (200Ah x 43) "},
	{"BatterySystem":"12",    "Capacity":"105600",    "Price":"10032",       "Description":"12V 8800Ah (200Ah x 44) "},
	{"BatterySystem":"12",    "Capacity":"108000",    "Price":"10260",       "Description":"12V 9000Ah (200Ah x 45) "},
	{"BatterySystem":"12",    "Capacity":"110400",    "Price":"10488",       "Description":"12V 9200Ah (200Ah x 46) "},
	{"BatterySystem":"12",    "Capacity":"112800",    "Price":"10716",       "Description":"12V 9400Ah (200Ah x 47) "},
	{"BatterySystem":"12",    "Capacity":"115200",    "Price":"10944",       "Description":"12V 9600Ah (200Ah x 48) "},
	{"BatterySystem":"12",    "Capacity":"117600",    "Price":"11172",       "Description":"12V 9800Ah (200Ah x 49) "},
	{"BatterySystem":"12",    "Capacity":"120000",    "Price":"11400",       "Description":"12V 10000Ah (200Ah x 50) "},*/
]

var SolarSizes = [
	{"Size":  "50",    "Price": "37.026",     "Description": "50W (50W x 1)",      "SolarController": "PWM"},
	{"Size":  "100",    "Price": "49.92",     "Description": "100W (100W x 1)",      "SolarController": "PWM"},
	{"Size":  "150",    "Price": "64.35",     "Description": "150W (150W x 1)",      "SolarController": "PWM"},
	{"Size":  "200",    "Price": "87.12",     "Description": "200W (200W x 1)",      "SolarController": "MPPT"},
	{"Size":  "200",    "Price": "99.84",     "Description": "200W (100W x 2)",      "SolarController": "PWM"},
	{"Size":  "250",    "Price": "107.25",     "Description": "250W (250W x 1)",      "SolarController": "MPPT"},
	{"Size":  "300",    "Price": "110.88",     "Description": "300W (300W x 1)",      "SolarController": "MPPT"},
	{"Size":  "320",    "Price": "115.808",     "Description": "320W (320W x 1)",      "SolarController": "MPPT"},
	{"Size":  "410",    "Price": "148.386",     "Description": "410W (410W x 1)",      "SolarController": "MPPT"},
	{"Size":  "500",    "Price": "214.5",     "Description": "500W (250W x 2)",      "SolarController": "MPPT"},
	{"Size":  "600",    "Price": "221.76",     "Description": "600W (300W x 2)",      "SolarController": "MPPT"},
	{"Size":  "640",    "Price": "231.616",     "Description": "640W (320W x 2)",      "SolarController": "MPPT"},
	{"Size":  "560",    "Price": "231",     "Description": "560W (280W x 2)",      "SolarController": "MPPT"},
	{"Size":  "680",    "Price": "246.092",     "Description": "680W (340W x 2)",      "SolarController": "MPPT"},
	{"Size":  "760",    "Price": "275.044",     "Description": "760W (380W x 2)",      "SolarController": "MPPT"},
	{"Size":  "820",    "Price": "296.772",     "Description": "820W (410W x 2)",      "SolarController": "MPPT"},
	{"Size":  "920",    "Price": "332.948",     "Description": "920W (460W x 2)",      "SolarController": "MPPT"},
	{"Size":  "960",    "Price": "347.424",     "Description": "960W (320W x 3)",      "SolarController": "MPPT"},
	{"Size":  "1020",    "Price": "369.138",     "Description": "1020W (340W x 3)",      "SolarController": "MPPT"},
	{"Size":  "1140",    "Price": "412.566",     "Description": "1140W (380W x 3)",      "SolarController": "MPPT"},
	{"Size":  "1230",    "Price": "445.158",     "Description": "1230W (410W x 3)",      "SolarController": "MPPT"},
	{"Size":  "1380",    "Price": "499.422",     "Description": "1380W (460W x 3)",      "SolarController": "MPPT"},
	{"Size":  "1520",    "Price": "550.088",     "Description": "1520W (380W x 4)",      "SolarController": "MPPT"},
	{"Size":  "1640",    "Price": "593.544",     "Description": "1640W (410W x 4)",      "SolarController": "MPPT"},
	{"Size":  "1840",    "Price": "665.896",     "Description": "1840W (460W x 4)",      "SolarController": "MPPT"},
	{"Size":  "1900",    "Price": "687.61",     "Description": "1900W (380W x 5)",      "SolarController": "MPPT"},
	{"Size":  "2050",    "Price": "741.93",     "Description": "2050W (410W x 5)",      "SolarController": "MPPT"},
	{"Size":  "2300",    "Price": "832.37",     "Description": "2300W (460W x 5)",      "SolarController": "MPPT"},
	{"Size":  "2460",    "Price": "890.316",     "Description": "2460W (410W x 6)",      "SolarController": "MPPT"},
	{"Size":  "2760",    "Price": "998.844",     "Description": "2760W (460W x 6)",      "SolarController": "MPPT"},
	{"Size":  "2870",    "Price": "1038.702",     "Description": "2870W (410W x 7)",      "SolarController": "MPPT"},
	{"Size":  "3220",    "Price": "1165.318",     "Description": "3220W (460W x 7)",      "SolarController": "MPPT"},
	{"Size":  "3280",    "Price": "1187.088",     "Description": "3280W (410W x 8)",      "SolarController": "MPPT"},
	{"Size":  "3680",    "Price": "1331.792",     "Description": "3680W (460W x 8)",      "SolarController": "MPPT"},
	{"Size":  "3690",    "Price": "1335.474",     "Description": "3690W (410W x 9)",      "SolarController": "MPPT"},
	{"Size":  "4140",    "Price": "1498.266",     "Description": "4140W (460W x 9)",      "SolarController": "MPPT"},
	{"Size":  "4600",    "Price": "1664.74",     "Description": "4600W (460W x 10)",      "SolarController": "MPPT"},
	{"Size":  "5060",    "Price": "1831.214",     "Description": "5060W (460W x 11)",      "SolarController": "MPPT"},
	{"Size":  "5520",    "Price": "1997.688",     "Description": "5520W (460W x 12)",      "SolarController": "MPPT"},
	{"Size":  "5980",    "Price": "2164.162",     "Description": "5980W (460W x 13)",      "SolarController": "MPPT"},
	{"Size":  "6440",    "Price": "2330.636",     "Description": "6440W (460W x 14)",      "SolarController": "MPPT"},
	{"Size":  "6900",    "Price": "2497.11",     "Description": "6900W (460W x 15)",      "SolarController": "MPPT"},
	{"Size":  "7360",    "Price": "2663.584",     "Description": "7360W (460W x 16)",      "SolarController": "MPPT"},
	{"Size":  "7820",    "Price": "2830.058",     "Description": "7820W (460W x 17)",      "SolarController": "MPPT"},
	{"Size":  "8280",    "Price": "2996.532",     "Description": "8280W (460W x 18)",      "SolarController": "MPPT"},
	{"Size":  "8740",    "Price": "3163.006",     "Description": "8740W (460W x 19)",      "SolarController": "MPPT"},
	{"Size":  "9200",    "Price": "3329.48",     "Description": "9200W (460W x 20)",      "SolarController": "MPPT"},
	{"Size":  "9660",    "Price": "3495.954",     "Description": "9660W (460W x 21)",      "SolarController": "MPPT"},
	{"Size":  "10120",    "Price": "3662.428",     "Description": "10120W (460W x 22)",      "SolarController": "MPPT"},
	{"Size":  "10580",    "Price": "3828.902",     "Description": "10580W (460W x 23)",      "SolarController": "MPPT"},
	{"Size":  "11040",    "Price": "3995.376",     "Description": "11040W (460W x 24)",      "SolarController": "MPPT"},
	{"Size":  "11500",    "Price": "4161.85",     "Description": "11500W (460W x 25)",      "SolarController": "MPPT"},
	{"Size":  "11960",    "Price": "4328.324",     "Description": "11960W (460W x 26)",      "SolarController": "MPPT"},
	{"Size":  "12420",    "Price": "4494.798",     "Description": "12420W (460W x 27)",      "SolarController": "MPPT"},
	{"Size":  "12880",    "Price": "4661.272",     "Description": "12880W (460W x 28)",      "SolarController": "MPPT"},
	{"Size":  "13340",    "Price": "4827.746",     "Description": "13340W (460W x 29)",      "SolarController": "MPPT"},
	{"Size":  "13800",    "Price": "4994.22",     "Description": "13800W (460W x 30)",      "SolarController": "MPPT"},
	{"Size":  "14260",    "Price": "5160.694",     "Description": "14260W (460W x 31)",      "SolarController": "MPPT"},
	{"Size":  "14720",    "Price": "5327.168",     "Description": "14720W (460W x 32)",      "SolarController": "MPPT"},
	{"Size":  "15180",    "Price": "5493.642",     "Description": "15180W (460W x 33)",      "SolarController": "MPPT"},
	{"Size":  "15640",    "Price": "5660.116",     "Description": "15640W (460W x 34)",      "SolarController": "MPPT"},
	{"Size":  "16100",    "Price": "5826.59",     "Description": "16100W (460W x 35)",      "SolarController": "MPPT"},
	{"Size":  "16560",    "Price": "5993.064",     "Description": "16560W (460W x 36)",      "SolarController": "MPPT"},
	{"Size":  "17020",    "Price": "6159.538",     "Description": "17020W (460W x 37)",      "SolarController": "MPPT"},
	{"Size":  "17480",    "Price": "6326.012",     "Description": "17480W (460W x 38)",      "SolarController": "MPPT"},
	{"Size":  "17940",    "Price": "6492.486",     "Description": "17940W (460W x 39)",      "SolarController": "MPPT"},
	{"Size":  "18400",    "Price": "6658.96",     "Description": "18400W (460W x 40)",      "SolarController": "MPPT"},
	{"Size":  "18860",    "Price": "6825.434",     "Description": "18860W (460W x 41)",      "SolarController": "MPPT"},
	{"Size":  "19320",    "Price": "6991.908",     "Description": "19320W (460W x 42)",      "SolarController": "MPPT"},
	{"Size":  "19780",    "Price": "7158.382",     "Description": "19780W (460W x 43)",      "SolarController": "MPPT"},
	{"Size":  "20240",    "Price": "7324.856",     "Description": "20240W (460W x 44)",      "SolarController": "MPPT"},
	{"Size":  "20700",    "Price": "7491.33",     "Description": "20700W (460W x 45)",      "SolarController": "MPPT"},
	{"Size":  "21160",    "Price": "7657.804",     "Description": "21160W (460W x 46)",      "SolarController": "MPPT"},
	{"Size":  "21620",    "Price": "7824.278",     "Description": "21620W (460W x 47)",      "SolarController": "MPPT"},
	{"Size":  "22080",    "Price": "7990.752",     "Description": "22080W (460W x 48)",      "SolarController": "MPPT"},
	{"Size":  "22540",    "Price": "8157.226",     "Description": "22540W (460W x 49)",      "SolarController": "MPPT"},
	{"Size":  "23000",    "Price": "8323.7",     "Description": "23000W (460W x 50)",      "SolarController": "MPPT"},
]

var InverterSizes = [
	{"Size":  "500",  "Description": "300 W", "Price": "50"},
	{"Size":  "1000",  "Description": "1000 W", "Price": "100"},
	{"Size":  "2000",  "Description": "2000 W", "Price": "200"},
	{"Size": "3000", "Description": "3000 W", "Price": "400"},
	{"Size": "4000", "Description": "4000 W", "Price": "450"},
	{"Size": "5000", "Description": "5000 W", "Price": "500"},
]

var  ElectricDevice = [
	{"Code": "001001_5", "Description": "မီးလုံး (5W)", "Watt":"5"},
	{"Code": "001002_10", "Description": "မီးလုံး (10W) ", "Watt":"10"},
	{"Code": "001003_0", "Description": "မီးလုံး (Watt ကိုရိုက်ထည့်မည်) ", "Watt":"0"},
	{"Code": "002001_20", "Description": "မီးချောင်း 2 ပေ (20W) ", "Watt":"20"},
	{"Code": "002002_40", "Description": "မီးချောင်း 4 ပေ (40W) ", "Watt":"40"},
	{"Code": "002003_0", "Description": "မီးချောင်း (Watt ကိုရိုက်ထည့်မည်) ", "Watt":"0"},
	{"Code": "003001_300", "Description": "TV 26in (300W) ", "Watt":"300"},
	{"Code": "003002_400", "Description": "TV 32in (400W) ", "Watt":"400"},
	{"Code": "003003_500", "Description": "TV 40in (500W) ", "Watt":"500"},
	{"Code": "003004_0", "Description": "TV (Watt ကိုရိုက်ထည့်မည်) ", "Watt":"0"},
	{"Code": "004001_30", "Description": "Laptop (30W) ", "Watt":"30"},
	{"Code": "004002_0", "Description": "Laptop (Watt ကိုရိုက်ထည့်မည်) ", "Watt":"0"},
	{"Code": "005001_200", "Description": "Computer (200W) ", "Watt":"200"},
	{"Code": "005002_0", "Description": "Computer (Watt ကိုရိုက်ထည့်မည်) ", "Watt":"0"},
	{"Code": "006001_100", "Description": "ပန်ကာ (100W) <span style='color:red'>* must use pure sin wave inverter </span>", "Watt":"100"},
	{"Code": "006002_150", "Description": "ပန်ကာ (150W) <span style='color:red'>* must use pure sin wave inverter </span>", "Watt":"150"},
	{"Code": "007003_200", "Description": "ပန်ကာ (200W) <span style='color:red'>* must use pure sin wave inverter </span>", "Watt":"200"},
	{"Code": "007004_0", "Description": "ပန်ကာ Other ", "Watt":"0"},
	{"Code": "008001_0", "Description": "အခြားလျှပ်စစ်ပစ္စည်း (Watt ကိုရိုက်ထည့်မည်) ", "Watt":"0"}
]

function fnLoadDropDownNumber(sObjectCSSID, fn, nStart, nEnd, nDefaultVal)
{
	var o = $("." + sObjectCSSID);
	
   	o.append(
			$('<option></option>').val("").html("-")
	);
    for(var i = nStart ; i<= nEnd; i++){
		var sValue = i;
		var sText = fn(i);
		o.append(
				$('<option></option>').val(sValue).html(sText)
			);
	}
	
	o.val(nDefaultVal);
}

function fnLoadDropDownAll()
{
	//clsNightTimeHrs
   	fnLoadDropDownNumber("clsNightTimeHrs", function(n) {return n + " နာရီ"}, 1, 16, 4)
	
	//clsDayTimeHrs
   	fnLoadDropDownNumber("clsDayTimeHrs", function(n) {return n + " နာရီ"}, 1, 8, 4)
	
	//clsBlackoutTimeHrs
   	fnLoadDropDownNumber("clsBlackoutTimeHrs", function(n) {return n + " နာရီ"}, 1, 24, 4)	

	//clsBlackoutHr
   	fnLoadDropDownNumber("clsBlackoutHr", function(n) {return n + " နာရီ"}, 1, 24, 5)	
	
	//clsQuantity
   	fnLoadDropDownNumber("clsQuantity", function(n) {return n}, 1, 20, 1)	

  //Currencies
    for(var i = 0 ; i< Currencies.length; i++){
		var o = Currencies[i];
		var sValue = o.CurrencyName;
		var sText = o.Description;
		$(".clsCurrency").append(
				$('<option></option>').val(sValue).html(sText)
			);
	}
	var sCurrency = getCurrency();
	var o = fnChooseCurrency(sCurrency);
	var nCurrencyRate = (o)?o.Rate : 0;

	fnLoadDropDownCurrencyRelated(sCurrency, nCurrencyRate);
   
/*
	//ElectricDevice
	$(".clsItem").append(
			$('<option></option>').val("").html("-")
	);
    for(var i = 0 ; i< ElectricDevice.length; i++){
		var o = ElectricDevice[i];
		var sValue = o.Code;
		var sText = o.Description ;
		$(".clsItem").append(
				$('<option></option>').val(sValue).html(sText)
			);
	}*/
}

function fnFormatDisplayText_Cost(nAmount, sCurrency)
{
	if(sCurrency == "USD"){
		 return "US $" + nAmount;
	}
	if(sCurrency == "MMK"){
		 return nAmount + " - သိန်းကျပ်"
	}
	return "";
}

function fnLoadDropDownCurrencyRelated(sCurrency, nCurrencyRate)
{
	//BatterySizes
	$(".clsBatterySize").empty();
	$(".clsBatterySize").append(
			$('<option></option>').val("").html("-")
	);
    for(var i = 0 ; i< BatterySizes.length; i++){
		var o = BatterySizes[i];
		var nPriceCoverted = convertCurrency(o.Price, sCurrency, nCurrencyRate);
		var sValue = o.BatterySystem +"_"+ o.Capacity;
		var sText = o.Description + " (" + fnFormatDisplayText_Cost(nPriceCoverted, sCurrency) + ")";
		$(".clsBatterySize").append(
				$('<option></option>').val(sValue).html(sText)
			);
	}
	
	//SolarSizes
	$(".clsSolarSize").empty();
	$(".clsSolarSize").append(
			$('<option></option>').val("").html("-")
	);
    for(var i = 0 ; i< SolarSizes.length; i++){
		var o = SolarSizes[i];
		var nPriceCoverted = convertCurrency(o.Price, sCurrency, nCurrencyRate);
		var sValue = o.Size;
		var sText = o.Description  + " (" + fnFormatDisplayText_Cost(nPriceCoverted, sCurrency) +")";
		$(".clsSolarSize").append(
				$('<option></option>').val(sValue).html(sText)
			);
	}

	//InverterSizes
	$(".clsInverter").empty();
	$(".clsInverter").append(
			$('<option></option>').val("").html("-")
	);
    for(var i = 0 ; i< InverterSizes.length; i++){
		var o = InverterSizes[i];
		var nPriceCoverted = convertCurrency(o.Price, sCurrency, nCurrencyRate);
		var sValue = o.Size;
		var sText = o.Description  + " (" + fnFormatDisplayText_Cost(nPriceCoverted, sCurrency) + ")";
		$(".clsInverter").append(
				$('<option></option>').val(sValue).html(sText)
			);
	}
}

	//$(".clsItem").val("")

////////////////////////////////// Get/Set //////////////////////////////////
function getUsageMode(){
	return $("input[name='rdUsageMode']:checked").val();
}

/*function setUsageMode(sValue){
	return $(".clsUsageMode").val(sValue);xxxxxxx
}*/

function getQuantity(){
	return $(".clsQuantity").val();
}

function setQuantity(sValue){
	return $(".clsQuantity").val(sValue);
}

function getDayTimeHrs(){
	return $(".clsDayTimeHrs").val();
}

function setDayTimeHrs(sValue){
	return $(".clsDayTimeHrs").val(sValue);
}

function getNightTimeHrs(){
	return $(".clsNightTimeHrs").val();
}

function setNightTimeHrs(sValue){
	return $(".clsNightTimeHrs").val(sValue);
}

function getBlackoutTimeHrs(){
	return $(".clsBlackoutTimeHrs").val();
}

function setBlackoutTimeHrs(sValue){
	return $(".clsBlackoutTimeHrs").val(sValue);
}

function getCurrency(){
	return $(".clsCurrency").val();
}

function setCurrency(sValue){
	return $(".clsCurrency").val(sValue);
}

function getCurrencyRate(){
	return $("#txtCurrencyRate").val();
}

function setCurrencyRate(sValue){
	return $("#txtCurrencyRate").val(sValue);
}

function getBlackoutHr(){
	return $(".clsBlackoutHr").val();
}

function setBlackoutHr(sValue){
	return $(".clsBlackoutHr").val(sValue);
}

function getBatterySystem(){
	return $(".clsBatterySystem").val();
}

function setBatterySystem(sValue){
	return $(".clsBatterySystem").val(sValue);
}

function getBatterySizeRequired(){
	return $(".clsBatterySizeRequired").val();
}

function setBatterySizeRequired(sValue){
	return $(".clsBatterySizeRequired").val(sValue);
}

function getBatterySize(){
	return $(".clsBatterySize").val();
}

function setBatterySize(sValue){
	return $(".clsBatterySize").val(sValue);
}

function getInverterRequired(){
	return $(".clsInverterRequired").val();
}

function setInverterRequired(sValue){
	return $(".clsInverterRequired").val(sValue);
}

function getInverter(){
	return $(".clsInverter").val();
}

function setInverter(sValue){
	return $(".clsInverter").val(sValue);
}

function getHybridInverterRequired(){
	return $(".clsHybridInverterRequired").val();
}

function setHybridInverterRequired(sValue){
	return $(".clsHybridInverterRequired").val(sValue);
}

function getHybridInverter(){
	return $(".clsHybridInverter").val();
}

function setHybridInverter(sValue){
	return $(".clsHybridInverter").val(sValue);
}

function getSolarRequired(){
	return $(".clsSolarRequired").val();
}

function setSolarRequired(sValue){
	return $(".clsSolarRequired").val(sValue);
}

function getSolar(){
	return $(".clsSolarSize").val();
}

function setSolar(sValue){
	return $(".clsSolarSize").val(sValue);
}

function getSolarChargeControllerRequired(){
	return $(".clsSolarChargeControllerRequired").val();
}

function setSolarChargeControllerRequired(sValue){
	return $(".clsSolarChargeControllerRequired").val(sValue);
}

function getSolarChargeController(){
	return $(".clsSolarChargeController").val();
}

function setSolarChargeController(sValue){
	return $(".clsSolarChargeController").val(sValue);
}

function getACChargerRequired(){
	return $(".clsACChargerRequired").val();
}

function setACChargerRequired(sValue){
	return $(".clsACChargerRequired").val(sValue);
}

function getACCharger(){
	return $(".clsACCharger").val();
}

function setACCharger(sValue){
	return $(".clsACCharger").val(sValue);
}

function getTotalCost(){
	return $(".clsTotalCost").val();
}

function setTotalCost(sValue){
	return $(".clsTotalCost").val(sValue);
}

