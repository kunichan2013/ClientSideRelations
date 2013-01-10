
guidedModel =// @startlock
{
	Company :
	{
		methods :
		{// @endlock
			getNewCompanies:function()
			{// @lock
				var myCollection = ds.Company.createEntityCollection();
				var currentEnt = "";
				for(i=0; i<=5; i++){
					currentEnt = new ds.Company({name: "Collection Company " + i});
					currentEnt.save();
					myCollection.add(currentEnt);
				}
				return myCollection;
			},// @lock
			returnCompanies:function(search)
			{// @lock
				return ds.Company.query('name = :1', search + "*")
			}// @startlock
		},
		events :
		{
			onSave:function()
			{// @endlock
				if(this.name == "dowdy"){
					return {error: 101, errorMessage: "Dowdy is not allowed"};
				}
			},// @startlock
			onValidate:function()
			{// @endlock
				if(this.name == "howdy"){
					return {error: 100, errorMessage: "Howdy is not allowed"};
				}
			}// @startlock
		}
	},
	Person :
	{
		fullName :
		{
			onGet:function()
			{// @endlock
				return this.firstName + " " + this.lastName;
			}// @startlock
		}
	}
};// @endlock
