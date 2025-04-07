// Copyright (c) 2025, md and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
	refresh(frm) {
        frm.add_custom_button("Accept",()=>{
            
            frappe.show_alert("It is Clicked")
        })

        if( frm.doc.rate==""){
            frm.set_value("rate",frappe.db.get_single_value("Rental Setting","standard_rate"))
            frm.save()
            
           
        }
        frm.trigger("update_total_amount")

	},

    rate(frm){

        
        frm.trigger("update_total_amount")
        
    },

    update_total_amount(frm){
        let total_distance=0
        for(let trip of frm.doc.trips){

            total_distance+=trip.distance

            console.log(trip.distance)
        }
        let amount=frm.doc.rate*total_distance
        frm.set_value("total",amount)

    },

});

frappe.ui.form.on('Ride Booking Item', {
	refresh(frm) {
		// your code here
       
	},

    distance(frm,cdt,cdm){// cdt is name child table and cdm is what row of child table
        // console.log("Distance is change below ")
        // console.log(cdt,cdm);
        // console.log("Distance is change ")

        // mychiled=frappe.get_doc(cdt,cdm)

        // frappe.model.set_value(cdt,cdm,"source","Updated value")

        frm.trigger("update_total_amount")
       
    },// this called whenever distance field in child table is changed

    trips_remove(frm){
        frm.trigger("update_total_amount")
    }
})
