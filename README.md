# Signature Capture Samples
This repository contains samples demonstrating how to use the Signature Capture lightning component. The Lightning Component is available on the [app exchange](https://appexchange.salesforce.com/listingDetail?listingId=a0N30000000q5XOEAY)
## Sign Here
Example Lightning application that pulls the id of the record to attach the signature to from the URL. Located at src/aura/SignHere.
## Signature Captured Notifier
Example Lightning component that consumes the SignatureCapturedEvt application event and generates a toast message. Located at src/aura/SigCapNotifier. Add this to a Lightning page that contains the SignatureCapture component, and you will be notified when a signature has been successfully captured, with the Id of the record it was captured for.
## Lightning Component Action
The Winter 17 release of the Signature Capture package includes a lightning component action for capturing a signature. Read about how to set this up in the [blog post](http://bobbuzzard.blogspot.co.uk/2016/11/lightning-component-actions-with.html)
## Custom Lightning Component Action
Create your own Lightning Component Action encapsulating the Signature Capture functionality - see the [blog post](https://bobbuzzard.blogspot.co.uk/2016/11/lightning-component-actions-with_10.html) and check out the example code at src/aura/SigCapAction
## Embed in Lightning Flow
Include a Signature Capture screen in a Lightning Flow - see the [blog post](http://bobbuzzard.blogspot.com/2018/06/adding-signature-capture-to-lightning.html) and check out the example flow at src/flows/Signature_Capture_2.flow
