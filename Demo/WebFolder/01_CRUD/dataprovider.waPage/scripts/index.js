
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var dpDeleteButton1 = {};	// @button
	var dpReadButton1 = {};	// @button
	var dpGetCollectionButton = {};	// @button
	var dpMultipleDatasourceButton = {};	// @button
	var dpCreateButton1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	dpDeleteButton1.click = function dpDeleteButton1_click (event)// @startlock
	{// @endlock
		var selectedEntity = sources.company.getCurrentElement();
		selectedEntity.remove();
		
		sources.company.all();
	};// @lock

	dpReadButton1.click = function dpReadButton1_click (event)// @startlock
	{// @endlock
		var myCollection = ds.Company.query('name = :1', $$('dpQueryName').getValue() + "*", {
			onSuccess: function(event){
				souces.company.setEntityCollection(myCollection);
			}	
		});
	};// @lock

	dpGetCollectionButton.click = function dpGetCollectionButton_click (event)// @startlock
	{// @endlock
		ds.Company.getNewCompanies({
			onSuccess: function(event){
				sources.company.setEntityCollection(event.result);
			}
			
		});
	};// @lock

	dpMultipleDatasourceButton.click = function dpMultipleDatasourceButton_click (event)// @startlock
	{// @endlock
		var myEntity = ds.Company.newEntity();
		myEntity.name.setValue("XXX Company");
		myEntity.save({
			onSuccess: function(event){
				sources.company.addEntity(myEntity);
			}	
		});
		
		var myEntity2 = ds.Company.newEntity();
		myEntity2.name.setValue("XXX Company2");
		myEntity2.save({
			onSuccess: function(event){
				sources.company.addEntity(myEntity2);
			}	
		});
	};// @lock

	dpCreateButton1.click = function dpCreateButton1_click (event)// @startlock
	{// @endlock
		var myEntity = ds.Company.newEntity();
		myEntity.name.setValue("The Company Name");
		sources.company.addEntity(myEntity);
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("dpDeleteButton1", "click", dpDeleteButton1.click, "WAF");
	WAF.addListener("dpReadButton1", "click", dpReadButton1.click, "WAF");
	WAF.addListener("dpGetCollectionButton", "click", dpGetCollectionButton.click, "WAF");
	WAF.addListener("dpMultipleDatasourceButton", "click", dpMultipleDatasourceButton.click, "WAF");
	WAF.addListener("dpCreateButton1", "click", dpCreateButton1.click, "WAF");
// @endregion
};// @endlock
