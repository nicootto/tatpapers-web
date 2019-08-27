# Generated by Django 2.1.2 on 2019-08-21 00:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('phone', models.CharField(max_length=120)),
                ('contact_mode', models.CharField(max_length=120)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(blank=True, null=True)),
                ('date', models.DateTimeField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=100)),
                ('delivered', models.BooleanField(default=False)),
                ('contact', models.ForeignKey(on_delete='CASCADE', to='orders.Contact')),
            ],
        ),
    ]