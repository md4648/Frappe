# Copyright (c) 2025, md and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Driver(Document):
	def before_save(self):
		# self.full_name=f"{self.first_name} {self.last_name}"   it removed because change to patch 
		self.set_title()
		

	def set_title(self):
		self.full_name=f"{self.first_name} {self.last_name}"

		

	def	send_alert(self):
		print("sending Message")










	# Hooks Assignment  if age>20 make the nameing serias adult 
	# def autoname(self):
	# 	if self.age>0:
	# 		name----adult 

	# find form controller documentation


# API Secret: 90c6be1f943a8e3
# API Key: b31b3424a77cd63

# video 3:45
