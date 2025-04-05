// Copyright (c) 2025, md and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {


	refresh(frm) {

        if (frm.doc.status==="New"){

             frm.add_custom_button("Accept",()=>{
            frm.set_value("status","Accepted")
            frm.save()
            frappe.show_alert("It is Clicked")
        },"Action")


        frm.add_custom_button("Reject",()=>{
            frm.set_value("status","Rejected")
            frm.save()
            frappe.show_alert("It is Clicked")
        },"Action")

        }  

    
	},

    status(frm){
        console.log("Status changedddd");
    }// this is called when status field is changed
});
