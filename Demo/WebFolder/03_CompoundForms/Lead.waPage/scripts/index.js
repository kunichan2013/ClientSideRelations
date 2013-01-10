
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var leadEvent = {};	// @dataSource
	var leadTypeRadioGroup = {};	// @radioGroup
	var newLeadButton = {};	// @button
// @endregion// @endlock
//************** THIS CODE IS INCOMPLETE ************
//Will be updated for an advanced webinar

// eventHandlers// @lock

	leadEvent.onCurrentElementChange = function leadEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		if(sources.lead.isNewElement()){
			$$('leadTypeRadioGroup').setValue(sources.lead.type);
		}
	};// @lock

	leadTypeRadioGroup.change = function leadTypeRadioGroup_change (event)// @startlock
	{// @endlock
		if($$('leadTypeRadioGroup').getValue() == 'Company'){
			$$('firstNameInput').disable();
			$$('lastNameInput').disable();
			$$('companyNameInput').enable();
			sources.lead.person.set(null);
			
			var newCompany = ds.Company.newEntity();
			newCompany.save();
		
		} else {
			$$('firstNameInput').enable();
			$$('lastNameInput').enable();
			$$('companyNameInput').disable();
			sources.lead.company.set(null);

			var newPerson = ds.Person.newEntity(); //Add new element cannot be used with a relation datasource
			newPerson.save();
			sources.lead.person.set(newPerson);
		}
	};// @lock

	newLeadButton.click = function newLeadButton_click (event)// @startlock
	{// @endlock
		sources.lead.addNewElement();
		sources.lead.type = 'Person';
		sources.lead.autoDispatch();
		sources.lead.dispatch('onCurrentElementChange');
		
		sources.targetPerson.addNewElement();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("lead", "onCurrentElementChange", leadEvent.onCurrentElementChange, "WAF");
	WAF.addListener("leadTypeRadioGroup", "change", leadTypeRadioGroup.change, "WAF");
	WAF.addListener("newLeadButton", "click", newLeadButton.click, "WAF");
// @endregion
};// @endlock
