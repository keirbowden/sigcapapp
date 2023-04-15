# BrightSIGN Samples
This repository contains samples demonstrating how to use the BrightSIGN lightning component. The Lightning Component is available on the [app exchange](https://appexchange.salesforce.com/listingDetail?listingId=a0N30000000q5XOEAY)
## Sign Here
Example Lightning application that pulls the id of the record to attach the signature to from the URL. Located at src/aura/SignHere.
## Signature Captured Notifier
Example Lightning component that consumes the SignatureCapturedEvt application event and generates a toast message. Located at src/aura/SigCapNotifier. Add this to a Lightning page that contains the SignatureCapture component, and you will be notified when a signature has been successfully captured, with the Id of the record it was captured for.
## Lightning Component Action
The Winter 17 release of the Signature Capture package includes a lightning component action for capturing a signature. Read about how to set this up in the [blog post](http://bobbuzzard.blogspot.co.uk/2016/11/lightning-component-actions-with.html)
## Custom Lightning Component Action
Create your own Lightning Component Action encapsulating the Signature Capture functionality - see the [blog post](https://bobbuzzard.blogspot.co.uk/2016/11/lightning-component-actions-with_10.html) and check out the example code at src/aura/SigCapAction
## Embed in Lightning Flow
Include a Signature Capture screen in a Lightning Flow - see the [blog post](http://bobbuzzard.blogspot.com/2018/06/adding-signature-capture-to-lightning.html) and check out the example flow at src/flows/Signature_Capture-2.flow
## Auto-complete in a Lightning Flow
Automatically finish a Lightning Flow when the signature is captured - see the [blog post](https://bobbuzzard.blogspot.com/2019/10/auto-completing-signature-capture-flow.html) and check out the example flow at src/flows/SigCap-4.flow and associated Lightning Component at src/aura/SigCapFlowWithFinish
## Auto-close quick action
Automatically close a quick action when the signature is captured. The [SignatureCapturedCloseAction](https://github.com/keirbowden/sigcapapp/tree/master/force-app/main/default/aura/SignatureCapturedCloseAction) embeds the BrightSIGN component into a quick action and adds a listener for the SignatureCaptured event. When this event is received, it fires a toast message to inform the user that the signature was captured and closes the action.
## Update Record when Signed
Update a field on the parent record when the signature image is saved. The [SigCapUpdateRecord](https://github.com/keirbowden/sigcapapp/tree/master/force-app/main/default/aura/SigCapUpdateRecord) component receives the Signature Captured event and uses the force:recordData component to set a checkbox on the parent record indicating that it has been signed. For more details, see the [blog post](https://bobbuzzard.blogspot.com/2023/04/brightsign-updating-record-when.html)
