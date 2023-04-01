({
	handleCaptured : function(component, event, helper) 
    {
        component.get('v.theRecordFields').Signature_Captured__c=true;

        component.find("recordUpdater").saveRecord(function(saveResult) {
            var resultsToast = $A.get("e.force:showToast");
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                resultsToast.setParams({
                    "type":"success",
                    "title": "Record Signed",
                    "message": "The record whas been marked as signed."
                });

                resultsToast.fire();

                $A.get("e.force:refreshView").fire();
            }
            else {
                resultsToast.setParams({
                    "type":"error",
                    "title": "Record Sign Failed"
                });
                if (saveResult.state === "INCOMPLETE") {
                    resultsToast.setParams({
                        "message":"User is offline, device doesn't support drafts."}
                    );
                }
                else if (saveResult.state === "ERROR") {
                    resultsToast.setParams({
                        "message":"Problem updating record, error: " +
                        JSON.stringify(saveResult.error)}
                    );
                }
                else {
                    resultsToast.setParams({
                        "message":"Unknown problem, state: " + saveResult.state +
                        ", error: " + JSON.stringify(saveResult.error)}
                    );
                }     
                resultsToast.fire();
            }   
        });
    }
})
