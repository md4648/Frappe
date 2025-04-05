import frappe

def execute():
    driver=frappe.db.get_all("Driver",pluck='name')
    for v in driver:
        drive=frappe.get_doc("Driver",v)
        drive.set_title() # set_title must exist in Driver class in driver.py 
        drive.save()

    frappe.db.commit()

    # video pause 37:36 