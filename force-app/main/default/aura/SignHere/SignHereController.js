({
	init : function(component, event, helper) {
        // extract the named parameter from the URL
        var id=decodeURIComponent((new RegExp('[?|&]id=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
        component.set("v.recordId", id);
	}
})