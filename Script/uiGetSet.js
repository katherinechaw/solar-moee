/*
************************************************************************************
************************************* uiGetSet *************************************
************************************************************************************
*/
var sError_DeviceUnavailable = "(Unavailable)";
var sMsg_Unnecessary_Solar = "<span style='color:blue'>(တပ်ဆင်ရန်မလိုအပ်ပါ)</span>";
var sMsg_Unnecessary_InverterRelated = "(အင်ဗာတာနှင့် တွဲရက်ပါရှိပါသည်)";
var sConfig_DefaultValue_InverterType = "InverterType";
var sElectricDeviceDropDownInstruction = "---လျှပ်စစ်ပစ္စည်း ရွေးပါ---";

var SimulationVisiblity = {
	"isSolarVisible": false,
	"isSolarControllerVisible": false,
	"isInverterTypeModifiable": false,
	"isACChargerVisible": false,
	"isBlackoutVisible": false,
	"isDayNightVisible": false
}

var PricingVisiblity = {
	"isSolarVisible": false,
	"isSolarControllerVisible": false,
	"isACChargerVisible": false
}

////////////////////////////////// Show Dialog //////////////////////////////////
function fnShowDialogMsg(sMsg, idOpener){
//	 $("#divDialogMsg").text(sMsg);	
//	$( "#divDialogMsg" ).dialog( "open" );
	$('#btnDialogMsg').click(function(){
		$('#divDialogMsg').modal('show')
	});
}
////////////////////////////////// Config //////////////////////////////////
function fnChooseSimulationVisiblitySetting(sUsageMode) {
	var sConfigName = "SimulationVisiblitySettings";
	
    for(var i = 0 ; i< ApplicationConfig.length; i++){
		var o = ApplicationConfig[i];
		if(o.ConfigName != sConfigName) continue;
		if(o.UsageMode != sUsageMode) continue;
		return o;
    }
	alert("Internal Error: We are sorry there is internal error '1001'.");
	return null;
}

function fnChoosePricingVisiblitySetting(sUsageMode, sInverterType) {
	var sConfigName = "PricingVisiblitySettings";
	
    for(var i = 0 ; i< ApplicationConfig.length; i++){
		var o = ApplicationConfig[i];
		if(o.ConfigName != sConfigName) continue;
		if(o.UsageMode != sUsageMode) continue;
		if(o.InverterType != sInverterType) continue;
		return o;
    }
	alert("Internal Error: We are sorry there is internal error '1002'.");
	return null;
}

 function getDefaultInverterTypeConfig(sUsageMode, sDefaultValueName){
	var sConfigName = "DefaultValue";
	for(var i = 0 ; i< ApplicationConfig.length; i++){
		var o = ApplicationConfig[i];
		if(o.ConfigName != sConfigName) continue;
		if(o.UsageMode != sUsageMode) continue;
		if(o.Name != sDefaultValueName) continue;
		return (o) ? o.Value : "";
    }
	alert("Internal Error: We are sorry there is internal error '1003'."/* +"#"+ sConfigName +"#"+ sUsageMode +"#"+ sDefaultValueName*/);
	return null;
}

////////////////////////////////// Screen Visiblity //////////////////////////////////
function fnLoadSimulationVisiblity(sUsageMode){
	var oSimulationVisiblitySetting = fnChooseSimulationVisiblitySetting(sUsageMode); 
	if(!oSimulationVisiblitySetting) return;
	
	SimulationVisiblity.isSolarVisible = oSimulationVisiblitySetting.isSolarVisible;
	SimulationVisiblity.isSolarControllerVisible = oSimulationVisiblitySetting.isSolarControllerVisible;
	SimulationVisiblity.isInverterTypeModifiable = oSimulationVisiblitySetting.isInverterTypeModifiable; 
	SimulationVisiblity.isACChargerVisible = oSimulationVisiblitySetting.isACChargerVisible;
	SimulationVisiblity.isBlackoutVisible = oSimulationVisiblitySetting.isBlackoutVisible;
	SimulationVisiblity.isDayNightVisible = oSimulationVisiblitySetting.isDayNightVisible;
}

function fnLoadPricingVisiblity(sUsageMode, sInverterType){
	var oPricingVisiblitySetting = fnChoosePricingVisiblitySetting(sUsageMode, sInverterType); 
	if(!oPricingVisiblitySetting) return;
	
	PricingVisiblity.isSolarVisible = oPricingVisiblitySetting.isSolarVisible;
	PricingVisiblity.isSolarControllerVisible = oPricingVisiblitySetting.isSolarControllerVisible;
	PricingVisiblity.isACChargerVisible = oPricingVisiblitySetting.isACChargerVisible;
}
////////////////////////////////// Load Dropdown //////////////////////////////////
function fnLoadDropDownNumber(sObjectCSSID, fn, nStart, nEnd, nDefaultVal, arrAdditionalVals)
{
	var o = $("." + sObjectCSSID);
	
   	o.append(
			$('<option></option>').val("0").html("0")
	);
	
	if( arrAdditionalVals){
		for(var i = 0 ; i< arrAdditionalVals.length; i++){
			var sValue =arrAdditionalVals[i];
			var sText = fn(sValue);
			o.append(
					$('<option></option>').val(sValue).html(sText)
			);			
		}
	}
	
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
   	fnLoadDropDownNumber("clsNightTimeHrs", function(n) {return n + " နာရီ"}, 1, 16, 0, ["0.5"])
	
	//clsDayTimeHrs
   	fnLoadDropDownNumber("clsDayTimeHrs", function(n) {return n + " နာရီ"}, 1, 8, 0, ["0.5"])
	
	//clsBlackoutTimeHrs
   	fnLoadDropDownNumber("clsBlackoutTimeHrs", function(n) {return n + " နာရီ"}, 1, 24, 0, ["0.5"])	

	//clsBlackoutHr
   	fnLoadDropDownNumber("clsBlackoutHr", function(n) {return n + " နာရီ"}, 1, 24, 5, null)	
	
	//clsQuantity
   	fnLoadDropDownNumber("clsQuantity", function(n) {return n}, 1, 20, 1, null)	

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
   

	//ElectricDevice
	$(".clsItem").append(
			$('<option></option>').val("").html(sElectricDeviceDropDownInstruction)
	);
    for(var i = 0 ; i< ElectricDevice.length; i++){
		var o = ElectricDevice[i];
		var sValue = o.Code + "_" + o.Watt;
		var sText = o.Description ;
		var sDisable = (o.Watt == "-1") ? "disabled" : "";
		$(".clsItem").append(
				$('<option ' + sDisable + '></option>').val(sValue).html(sText)
			);
	}
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
{/*
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
	}*/
	/*
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
	}*/

	//InverterSizes
	/*$(".clsInverter").empty();
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
	}*/
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

function getBatterySizeCost(){
	return $(".clsBatterySizeCost").val();
}

function setBatterySizeCost(sValue){
	return $(".clsBatterySizeCost").val(sValue);
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

function getInverterCost(){
	return $(".clsInverterCost").val();
}

function setInverterCost(sValue){
	return $(".clsInverterCost").val(sValue);
}
function getInverterType(){
	return $(".clsInverterType").val();
}

function setInverterType(sValue){
	$(".clsInverterType").val(sValue);
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

function getSolarCost(){
	return $(".clsSolarSizeCost").val();
}

function setSolarCost(sValue){
	return $(".clsSolarSizeCost").val(sValue);
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

function getSolarChargeControllerCost(){
	return $(".clsSolarChargeControllerCost").val();
}

function setSolarChargeControllerCost(sValue){
	return $(".clsSolarChargeControllerCost").val(sValue);
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

function getACChargerCost(){
	return $(".clsACChargerCost").val();
}

function setACChargerCost(sValue){
	return $(".clsACChargerCost").val(sValue);
}

function getTotalCost(){
	return $(".clsTotalCost").val();
}

function setTotalCost(sValue){
	return $(".clsTotalCost").val(sValue);
}

