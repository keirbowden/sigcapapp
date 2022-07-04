({
	handleCaptured : function(component, event, helper) {
		let message='Signature captured for record id ' + event.getParam('recordId');
		const from=event.getParam('name');
		if (from!==undefined) {
			message+=' from instance ' + from;
		}
        message+=' - closing action';
		const toastEvent=$A.get("e.force:showToast");
    	toastEvent.setParams({
    		"type":'info',
    		"title":'Signatured Captured',
    		"message":message
    	});
    	toastEvent.fire();

        const dismissActionPanel = $A.get("e.force:closeQuickAction");
        dismissActionPanel.fire();
	}
})