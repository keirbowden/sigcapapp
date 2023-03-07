({
	handleCaptured : function(component, event, helper) 
    {
        console.log('Captured signature')
        let flowAction=null;
        let availableActions=component.get('v.availableActions');
        console.log('Available actions = ' + availableActions);
        for (let idx=0; idx<availableActions.length && null==flowAction; idx++) {
            let availAction=availableActions[idx];
            if ('NEXT'==availAction) {
                flowAction=availAction;
            }
            else if ('FINISH'==availAction) {
                flowAction=availAction
            }
        }
        console.log('Flow action = ' + flowAction);
        if (null!=flowAction) {
			let navigate=component.get("v.navigateFlow");
            navigate(flowAction);
        }
	}
})