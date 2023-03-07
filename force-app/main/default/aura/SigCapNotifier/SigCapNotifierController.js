({
	handleCaptured : function(component, event, helper) {
		var toastEvent=$A.get("e.force:showToast");
    	toastEvent.setParams({
    		"type":'info',
    		"title":'Signatured Captured',
    		"message":'Signature captured for record id ' + event.getParam('recordId')
    	});
    	toastEvent.fire();

	}
})