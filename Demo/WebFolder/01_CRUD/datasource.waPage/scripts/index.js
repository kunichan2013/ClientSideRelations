
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var buildFromSelectionButton = {};	// @button
	var removeCurrentButton = {};	// @button
	var updateNameButton = {};	// @button
	var selectByKeyButton = {};	// @button
	var queryButton3 = {};	// @button
	var queryButton2 = {};	// @button
	var queryButton1 = {};	// @button
	var validateSaveButton = {};	// @button
	var newEntityButton = {};	// @button
	var addNewElementButton = {};	// @button
	var companyName1 = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	buildFromSelectionButton.click = function buildFromSelectionButton_click (event)// @startlock
	{// @endlock
		sources.company.buildFromSelection(sources.company.getSelection());
	};// @lock

	removeCurrentButton.click = function removeCurrentButton_click (event)// @startlock
	{// @endlock
		sources.company.removeCurrent();
	};// @lock

	updateNameButton.click = function updateNameButton_click (event)// @startlock
	{// @endlock
		sources.company.save();
	};// @lock

	selectByKeyButton.click = function selectByKeyButton_click (event)// @startlock
	{// @endlock
		sources.company.selectByKey($$('queryKey').getValue());
	};// @lock

	queryButton3.click = function queryButton3_click (event)// @startlock
	{// @endlock
		ds.Company.returnCompanies($$('queryName3').getValue(),{
			onSuccess: function(event){
				sources.company.setEntityCollection(event.result);
			}	
		});
	};// @lock

	queryButton2.click = function queryButton2_click (event)// @startlock
	{// @endlock
		sources.company.filterQuery("name = :1", {
			params: [$$('queryName2').getValue() + "*"],
			onSuccess: function(event){
				//do things after query
			}
		});
	};// @lock

	queryButton1.click = function queryButton1_click (event)// @startlock
	{// @endlock
		sources.company.query("name = :1", {
			params: [$$('queryName1').getValue() + "*"],
			onSuccess: function(event){
				//do things after query
			}
		});

	};// @lock

	validateSaveButton.click = function validateSaveButton_click (event)// @startlock
	{// @endlock
		sources.company.addNewElement();
		sources.company.name = $$('companyName4').getValue();
		sources.company.autoDispatch();
		sources.company.save({
			onSuccess: function(event){
				//saved
			},
			onError: function(err){
				$$('companyErrorText').setValue(err.error[0].message);
			}
		});
	};// @lock

	newEntityButton.click = function newEntityButton_click (event)// @startlock
	{// @endlock
		sources.company.newEntity();
		sources.company.name = $$('companyName3').getValue();
		sources.company.autoDispatch();
		
		sources.company.addEntity(sources.company.getCurrentElement());
		sources.company.save({
			onSuccess: function(event){
				//saved successfully.
			}
		});
	};// @lock

	addNewElementButton.click = function addNewElementButton_click (event)// @startlock
	{// @endlock
		sources.company.addNewElement();
		sources.company.name = $$('companyName2').getValue();
		sources.company.autoDispatch();
		sources.company.save();
	};// @lock

	companyName1.keyup = function companyName1_keyup (event)// @startlock
	{// @endlock
		sources.company.name = $$('companyName1').getValue();
		sources.company.autoDispatch();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("buildFromSelectionButton", "click", buildFromSelectionButton.click, "WAF");
	WAF.addListener("removeCurrentButton", "click", removeCurrentButton.click, "WAF");
	WAF.addListener("updateNameButton", "click", updateNameButton.click, "WAF");
	WAF.addListener("selectByKeyButton", "click", selectByKeyButton.click, "WAF");
	WAF.addListener("queryButton3", "click", queryButton3.click, "WAF");
	WAF.addListener("queryButton2", "click", queryButton2.click, "WAF");
	WAF.addListener("queryButton1", "click", queryButton1.click, "WAF");
	WAF.addListener("validateSaveButton", "click", validateSaveButton.click, "WAF");
	WAF.addListener("newEntityButton", "click", newEntityButton.click, "WAF");
	WAF.addListener("addNewElementButton", "click", addNewElementButton.click, "WAF");
	WAF.addListener("companyName1", "keyup", companyName1.keyup, "WAF");
// @endregion
};// @endlock
