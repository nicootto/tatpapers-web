from django.contrib import admin

from .models import Order
from .models import Contact

admin.site.register(Contact)
admin.site.register(Order)