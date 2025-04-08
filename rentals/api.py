import frappe

@frappe.whitelist(allow_guest=True)

def get_emoji():
    return "Hellow Emoji custome api"

def throw_emoji(doc,event):
    frappe.throw("Hellow this is from hooks.py file")


def send_rental_reminders():
    print("The is Schduled task okay")

def get_query_condition_for_vehicle(user):
    
    # frappe.throw(user)

    return "name=2"
