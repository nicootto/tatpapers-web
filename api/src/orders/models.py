from django.db import models


class Contact(models.Model):
    name = models.CharField(max_length=120)
    phone = models.CharField(max_length=120)
    contact_mode = models.CharField(max_length=120)

    def __str__(self):
        return self.name

class Order(models.Model):
    contact = models.ForeignKey(Contact, on_delete='CASCADE')
    description = models.TextField(blank=True, null=True)
    date = models.DateTimeField()
    price = models.DecimalField(decimal_places=2, max_digits=100)
    delivered = models.BooleanField(default=False)
    
    def __str__(self):
        return self.contact.name + ' - ' + str(self.date)