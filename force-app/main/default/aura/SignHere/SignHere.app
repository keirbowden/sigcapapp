<aura:application access="global" implements="force:appHostable">
    <aura:attribute name="recordId" type="id" />
	<aura:handler name="init" value="{!this}" action="{!c.init}" />
    <div>
        <div class="main"> 
            <h1>Sign Here</h1>
            <p>This is a demonstration app for the Signature Capture lightning component.</p>
            <BGSIGCAP:SignatureCapture recordId="{!v.recordId}"
                                 startMsg="Click the button to get started"
                                 enterMsg="Please sign below"
                                 completeMsg="Here is the signature you entered"
                                 width="50%"
                                 height="200px"/>
        </div>
    </div>
</aura:application>