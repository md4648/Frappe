// Copyright (c) 2025, md and contributors
// For license information, please see license.txt

frappe.ui.form.on("Vehicle", {
	get_summary(frm) {
        frm.get_field("summary").$wrapper.append("<h1>Here is the vehicle summary</h1>")
        

	},
});
