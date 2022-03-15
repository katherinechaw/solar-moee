/*
************************************************************************************
************************************* BizLogic *************************************
************************************************************************************
*/

////////////////////////////////// Data In/Out //////////////////////////////////
var inputData = {
	"UsageMode": "",
	"IsOffgridMode": "",
	"OffgridDayWh": 0,
	"OffgridNightWh": 0,
	"OffgridTotalWh": 0,
	"OffgridTotalWattMax": 0,
	"BlackoutWh": 0,
	"BlackoutWatt": 0,
	"BlackoutHr": 0,
	"Currency": "MMK", 
	"CurrencyRate": 2000,
}

var outputData = {
	"BatterySystem": 0,
	"BatterySize": 0,
	"Inverter": 0,
	"InverterType": "",
	"Solar": 0,
	"Controller": 0,
	"ACCharger": 0,
	"TotalCost": 0,
	"BatterySystemUnit": "V",
	"BatterySizeUnit": "Ah",
	"InverterUnit": "Watt",
	"SolarUnit": "Watt",
	"ControllerUnit": "A",
	"ACChargerUnit": "A",
}

////////////////////////////////// Choose Product //////////////////////////////////

function fnChooseCurrency(sCurrency) {
    for(var i = 0 ; i< Currencies.length; i++){
		var o = Currencies[i];
			if(o.CurrencyName == sCurrency) {
				return o;
			}
    }
	return null;
}

function fnChooseBatterySystem(nInverter){
	for(var i = 0 ; i< BatterySystems.length; i++){
		var o = BatterySystems[i];
			if(o.Inverter >= nInverter) {
				return o;
			}
    }
	return null;
}

function fnChooseBattery(nBatterySystem, nCapacity) {
    for(var i = 0 ; i< BatterySizes.length; i++){
		var o = BatterySizes[i];
		
		if(o.BatterySystem != nBatterySystem) continue;
		
		if(parseInt(o.Capacity) >= nCapacity) {
			return o;
		}
    }
	alert("Error: No battery size available for the input." +"#"+nBatterySystem+"#"+nCapacity);
	return null;
}

function fnChooseSolar(nSolarSize) {
    for(var i = 0 ; i< SolarSizes.length; i++){
		var o = SolarSizes[i];
			if(parseInt(o.Size) >= nSolarSize) {
				return o;
			}
    }
	alert("Error: No Solar size available for the input." +"#"+ nSolarSize);
	return null;
}

function fnChooseInverter(sUsageMode, sInverterType, nInverterSize) {
    for(var i = 0 ; i< InverterSizes.length; i++){
		var o = InverterSizes[i];
		
		if(o.UsageMode != sUsageMode) continue;
		if(o.InverterType != sInverterType) continue;
		
		if(parseInt(o.Size) >= nInverterSize) {
			return o;
		}
    }
	alert("Error: No Inverter size available for the input." +"#"+ sUsageMode+"#"+sInverterType+"#"+ nInverterSize);
	return null;
}

function fnChooseSolarController(sUsageMode, sControllerType, sBatterySystem, nControllerSize) {
    for(var i = 0 ; i< SolarControllers.length; i++){
		var o = SolarControllers[i];
//alert(o.UsageMode +"#"+ o.Type +"#"+ o.BatterySystem +"#"+ o.Size);		
		if(o.UsageMode != sUsageMode) continue;
		if(o.Type != sControllerType) continue;
		if(o.BatterySystem != sBatterySystem) continue;

		if(parseInt(o.Size) >= nControllerSize) {
			return o;
		}
    }
	alert("Error: No Solar Controller size available for the input." +"#"+ sUsageMode+"#"+ sControllerType+"#"+ sBatterySystem+"#"+nControllerSize);
	return null;
}

function fnChooseACCharger(sUsageMode, sInverterType, nSize) {
    for(var i = 0 ; i< ACChargers.length; i++){
		var o = ACChargers[i];
		if(o.UsageMode != sUsageMode) continue;
		if(o.InverterType != sInverterType) continue;

		if(parseInt(o.Size) >= nSize) {
			return o;
		}
    }
	alert("Error: No AC Charger size available for the input." +"#"+ sUsageMode+"#"+ sInverterType+"#"+nSize);
	return null;
}

function fnChoosePricingVisiblitySetting(sUsageMode, sInverterType) {
    for(var i = 0 ; i< ApplicationConfig.length; i++){
		var o = ApplicationConfig[i];
		if(o.ConfigName != "PricingVisiblitySettings") continue;
		if(o.UsageMode != sUsageMode) continue;
		if(o.InverterType != sInverterType) continue;
		return o;
    }
	alert("Internal Error: We are sorry there is internal error in 'Pricing Visiblity'.");
	return null;
}
////////////////////////////////// Utilities //////////////////////////////////
function parseIntEx(s)
{
	var n = parseInt(s);
	return (n)?n:0;
}

function convertCurrency(nAmount, sToCur, nUSDMMKRate){
	if(sToCur == "MMK")	{
		return parseFloat(nAmount * nUSDMMKRate /100000).toFixed(1) ;
	}
	if(sToCur == "USD")	{
		return parseFloat(nAmount).toFixed(0) ;
	}
	return null;
}

////////////////////////////////// Other Biz Logic //////////////////////////////////

var  nInverterThreshold = 1.3;
var nSolarThreshold = 0.8;
var nTotalWattSolarWattConverter = 4;

function fnReCalculate(bExcludeBatterySystem)
{
	inputData.OffgridDayWh = 0;
	inputData.OffgridNightWh = 0;
	inputData.OffgridTotalWh = 0;
	inputData.OffgridTotalWattMax = 0;
	inputData.BlackoutWh = 0;
	inputData.BlackoutWatt = 0;
	
	var nOffgridDayWattTotal = 0;
	var nOffgridNightWattTotal = 0;
	
	for(i=0;i<$(".clsWatt").length;i++){
		var nCurWatt = parseIntEx($(".clsWatt")[i].value);  
		var nCurQuantity = parseIntEx($(".clsQuantity")[i].value);
		var nCurOffgridDayHr = parseIntEx($(".clsDayTimeHrs")[i].value);
		var nCurOffgridNightHr = parseIntEx($(".clsNightTimeHrs")[i].value);
		var nCurBlackoutHr = parseIntEx($(".clsBlackoutTimeHrs")[i].value);
		
		var nTotalWatt = nCurWatt * nCurQuantity;
		
		inputData.OffgridDayWh += nTotalWatt * nCurOffgridDayHr;
		inputData.OffgridNightWh += nTotalWatt * nCurOffgridNightHr;
		inputData.BlackoutWh += nTotalWatt * nCurBlackoutHr;
		
		nOffgridDayWattTotal += (nCurOffgridDayHr > 0) ? nTotalWatt : 0;
		nOffgridNightWattTotal += (nCurOffgridNightHr > 0) ? nTotalWatt : 0;
		inputData.BlackoutWatt += (nCurBlackoutHr > 0) ? nTotalWatt : 0;
		
		//alert(inputData.OffgridDayWh + "#" + 	inputData.OffgridNightWh + "#" +	inputData.OffgridTotalWh + "#" +	inputData.OffgridTotalWattMax + "#" +	inputData.BlackoutWh + "#" +	inputData.BlackoutWatt );
	}
	inputData.OffgridTotalWh = inputData.OffgridDayWh + inputData.OffgridNightWh;
	
	inputData.OffgridTotalWattMax = Math.max(nOffgridDayWattTotal, nOffgridNightWattTotal);

	//var ddlElectricDevice = cur.children('.clsItem').children('.clsItem')[0];
	//var txtWatt = cur.children('.clsItem').children('.clsWatt')[0];
	//txtWatt.value = (ddlElectricDevice.value.split('_')[1]);

	inputData.BlackoutHr = parseInt( getBlackoutHr());
	
	inputData.Currency = getCurrency();
	inputData.CurrencyRate = getCurrencyRate();

	/*inputData.BlackoutHr = 5;
	inputData.BlackoutWh = 2000;
	inputData.BlackoutWatt = 800;
	inputData.OffgridTotalWh = 550;
	inputData.OffgridTotalWattMax = 300;
	inputData.OffgridNightWh = 250;
*/
	
	////// get UI values //////
	outputData.InverterType = getInverterType();	
	////// Calculation Logic ///////
	outputData.Inverter = Math.round(((inputData.IsOffgridMode) ? inputData.OffgridTotalWattMax : inputData.BlackoutWatt)*nInverterThreshold);	
	
	var nBatteryCapacityWh = (inputData.IsOffgridMode) ? inputData.OffgridNightWh : inputData.BlackoutWh;
	
	if(bExcludeBatterySystem){
		outputData.BatterySystem =  getBatterySystem();
	}
	else{
		var oBatterySystem = fnChooseBatterySystem(outputData.Inverter); 
		outputData.BatterySystem = (oBatterySystem) ? oBatterySystem.BatterySystem : 12;
	}
	
	var oBattery = fnChooseBattery(outputData.BatterySystem, nBatteryCapacityWh * nInverterThreshold); 
	outputData.BatterySize = Math.round( ((nBatteryCapacityWh)  / outputData.BatterySystem ) * nInverterThreshold );
	outputData.Solar = Math.round( ((inputData.IsOffgridMode) ? inputData.OffgridTotalWh : inputData.BlackoutWh) /nTotalWattSolarWattConverter);
	outputData.Controller = Math.round( (outputData.Solar * nSolarThreshold) / outputData.BatterySystem ); 
	outputData.ACCharger = Math.round( (inputData.BlackoutWh / outputData.BatterySystem) / (24 - inputData.BlackoutHr) );

	////// Set UI Value ///////
	fnLoadSimulationVisiblity(inputData.UsageMode);
	fnLoadPricingVisiblity(inputData.UsageMode, outputData.InverterType);
	
	// Battery System
	setBatterySystem(outputData.BatterySystem);
	
	// Battery Size
	setBatterySizeRequired(outputData.BatterySize);
	setBatterySize((oBattery)? oBattery.Description: sError_DeviceUnavailable);
	setBatterySizeCost((oBattery)? fnFormatDisplayText_Cost(convertCurrency(oBattery.Price, inputData.Currency, inputData.CurrencyRate), inputData.Currency) : sError_DeviceUnavailable);

	// Solar
	var oSolar = null;
	if(SimulationVisiblity.isSolarVisible){
		setSolarRequired(outputData.Solar);
	}
	if(PricingVisiblity.isSolarVisible){
		oSolar = fnChooseSolar(outputData.Solar); 
		setSolar((oSolar)? oSolar.Description : sError_DeviceUnavailable);
		setSolarCost((oSolar)?  fnFormatDisplayText_Cost(convertCurrency(oSolar.Price, inputData.Currency, inputData.CurrencyRate), inputData.Currency) : sError_DeviceUnavailable);
	}	
	else{
		setSolar(sMsg_Unnecessary_Solar);
		setSolarCost(0);
	}
	
	// Inverter
	setInverterRequired(outputData.Inverter );
	var oInverter = fnChooseInverter(inputData.UsageMode, outputData.InverterType, outputData.Inverter); 
	setInverter((oInverter)? oInverter.Description : sError_DeviceUnavailable);
	setInverterCost((oInverter)? fnFormatDisplayText_Cost(convertCurrency(oInverter.Price, inputData.Currency, inputData.CurrencyRate), inputData.Currency) : sError_DeviceUnavailable);
	
	// Controller
	var oSolarController = null;
	if(SimulationVisiblity.isSolarControllerVisible){
		setSolarChargeControllerRequired(outputData.Controller );
	}
	if(PricingVisiblity.isSolarControllerVisible){
		oSolarController = fnChooseSolarController(inputData.UsageMode, ((oSolar)? oSolar.SolarController:""), outputData.BatterySystem, outputData.Controller); 
		setSolarChargeController((oSolarController)? oSolarController.Description : sError_DeviceUnavailable);
		setSolarChargeControllerCost((oSolarController)? fnFormatDisplayText_Cost(convertCurrency(oSolarController.Price, inputData.Currency, inputData.CurrencyRate), inputData.Currency) : sError_DeviceUnavailable);
	}	
	else{
		setSolarChargeController(sMsg_Unnecessary_InverterRelated);
		setSolarChargeControllerCost(0);
	}
	
	// ACCharger
	var oACCharger = null;
	if(SimulationVisiblity.isACChargerVisible){
		setACChargerRequired(outputData.ACCharger);
	}
	if(PricingVisiblity.isACChargerVisible){
		oACCharger = fnChooseACCharger(inputData.UsageMode, outputData.InverterType, outputData.ACCharger); 
		setACCharger((oACCharger)? oACCharger.Description : sError_DeviceUnavailable);
		setACChargerCost((oACCharger)? fnFormatDisplayText_Cost(convertCurrency(oACCharger.Price, inputData.Currency, inputData.CurrencyRate), inputData.Currency) : sError_DeviceUnavailable);
	}	else{
		setACCharger(sMsg_Unnecessary_InverterRelated);
		setACChargerCost(0);
	}
	
	//Total Cost
	outputData.TotalCost = 0;
	outputData.TotalCost +=  parseFloat((oBattery) ? oBattery.Price : 0);
	outputData.TotalCost +=   (PricingVisiblity.isSolarVisible) ? parseFloat((oSolar) ? oSolar.Price : 0) : 0;
	outputData.TotalCost +=   (PricingVisiblity.isSolarControllerVisible) ? parseFloat((oSolarController) ? oSolarController.Price : 0) : 0;
	outputData.TotalCost +=   parseFloat((oInverter) ? oInverter.Price : 0);
	outputData.TotalCost +=    (PricingVisiblity.isACChargerVisible) ? parseFloat((oACCharger) ? oACCharger.Price : 0) : 0;
	
	var nTotalCostConverted = convertCurrency(outputData.TotalCost, inputData.Currency, inputData.CurrencyRate)
	setTotalCost(fnFormatDisplayText_Cost(nTotalCostConverted, inputData.Currency));
}

function fnChangeBatterySize()
{
/*	var sBatterySizeVal = $(".clsBatterySize").val();
	var nBatterySystem = parseInt( (sBatterySizeVal.split('_')[0]) );
	var nBatterySize = parseInt( (sBatterySizeVal.split('_')[1]) );
	
	$(".clsBatterySystem").val(nBatterySystem);*/
}

function fnChangeBlackoutTime()
{
	fnReCalculate(true)
}

function  fnRefreshUsageMode(bExcludeInverterType){
	inputData.UsageMode = getUsageMode(); 
	inputData.IsOffgridMode = (inputData.UsageMode == "NoEPCWithSolar");
	
	outputData.InverterType = getInverterType();

	if(!bExcludeInverterType){
		outputData.InverterType = getDefaultInverterTypeConfig(inputData.UsageMode, sConfig_DefaultValue_InverterType );		
		setInverterType(outputData.InverterType);
	}
	if(inputData.Currency == "MMK")
	{
		$(".clsCurrencyRate").show();
	}
	else{
		$(".clsCurrencyRate").hide();
	}

	//visiblity setup	
	fnLoadSimulationVisiblity(inputData.UsageMode);
	fnLoadPricingVisiblity(inputData.UsageMode, outputData.InverterType);
	$("#ddlInverterType").attr("disabled",(!SimulationVisiblity.isInverterTypeModifiable));

	(SimulationVisiblity.isBlackoutVisible) ? $(".clsBlackoutRow").show() : $(".clsBlackoutRow").hide() ;
	(SimulationVisiblity.isBlackoutVisible) ? $(".clsBlackoutHrsCol").show() : $(".clsBlackoutHrsCol").hide() ;
	(SimulationVisiblity.isDayNightVisible) ? $(".clsDayTimeCol").show() : $(".clsDayTimeCol").hide() ;
	(SimulationVisiblity.isDayNightVisible) ? $(".clsNightTimeCol").show() : $(".clsNightTimeCol").hide() ;
	
	(SimulationVisiblity.isSolarVisible) ? $(".clsSolarOutput").show() : $(".clsSolarOutput").hide() ;
	(SimulationVisiblity.isSolarControllerVisible) ? $(".clsSolarController").show() : $(".clsSolarController").hide() ;
	(SimulationVisiblity.isACChargerVisible) ? $(".clsACChargerRow").show() : $(".clsACChargerRow").hide() ;

	(PricingVisiblity.isSolarControllerVisible) ? $("#divSolarChargeControllerPricing").show() : $("#divSolarChargeControllerPricing").hide() ;
	(PricingVisiblity.isACChargerVisible) ? $("#divACChargerPricing").show() : $("#divACChargerPricing").hide() ;
}

function fnSelectCurrency(element){
		inputData.Currency = getCurrency();
		var o = fnChooseCurrency(inputData.Currency);
		
		inputData.CurrencyRate = (o)?o.Rate : 0;
		setCurrencyRate(inputData.CurrencyRate);
		
		//fnLoadDropDownCurrencyRelated(inputData.Currency, inputData.CurrencyRate);
		fnRefreshUsageMode(true);
		fnReCalculate(true);
}

function fnChangeCurrencyRate(element){
		var sCurrency = getCurrency();
		var nCurrencyRate = getCurrencyRate();
				
		//fnLoadDropDownCurrencyRelated(sCurrency, nCurrencyRate);
		
		fnReCalculate(true);
}

function fnSelectElectricDevice(element){
		var cur = $(element).parent('div').parent('div');
        var ddlElectricDevice = cur.children('.clsItemDiv').children('.clsItem')[0];
		var txtWatt = cur.children('.clsWattDiv').children('.clsWatt')[0];
		var sSelectedWatt = ddlElectricDevice.value.split('_')[1];

		if(!sSelectedWatt) return false; 

		txtWatt.value = (sSelectedWatt);
		
		return true;
}

	////// Page_Init //////
	$( document ).ready(function() {
		//// UI Preparation ////
		fnLoadDropDownAll();
		
		/*setQuantity("1");
		setDayTimeHrs("4");
		setNightTimeHrs("4");
		setBlackoutTimeHrs("4");*/
	


	////////// Electric Device controls //////////
	var attrs = ['for', 'id', 'name'];
	function resetAttributeNames(section) { 
		var tags = section.find('input, label'), idx = section.index();
		tags.each(function() {
		  var $this = $(this);
		  
		  $.each(attrs, function(i, attr) {
			var attr_val = $this.attr(attr); 
			if (attr_val) {
				$this.attr(attr, attr_val.replace(/_\d+$/, '_'+(idx + 1)))
			}
		  })
		})
	}

	$('.addNewRow').click(function(e){
			e.preventDefault();
			fnAddNewRow();
		});
		
		function fnAddNewRow()
		{
			var lastRepeatingGroup = $('.clsInputRow').last();
			var cloned = lastRepeatingGroup.clone(true)  
			cloned.insertAfter(lastRepeatingGroup);
			resetAttributeNames(cloned)
		}

	$('.deleteRow').click(function(e){
			e.preventDefault();
			var cur = $(this).parent('div').parent('div');
			 inputRow = cur.siblings('.clsInputRow');
			if (inputRow.length === 0) {
				return;
			}
			cur.slideUp('slow', function() {
				cur.remove();
				inputRow.each(function() {
				   resetAttributeNames($(this)); 
				})            
			})   
		});

		for(i=0;i<4;i++){
			fnAddNewRow();
		}

		//// Default selection ////
		$("#rdUsageWithEPCWithSolar").attr('checked', true);
		
		outputData.BatterySystem = 12;
		setBatterySystem(outputData.BatterySystem);
		setCurrencyRate(inputData.CurrencyRate);

		//// Calculate ////
		fnRefreshUsageMode(false);
		//fnReCalculate();
		
		/*  $( function() {
			$( "#divMain" ).tabs();
		  } );*/

	$( "#divDialogMsg" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 200
      },
      hide: {
        effect: "blind",
        duration: 200
      }
    });
	});