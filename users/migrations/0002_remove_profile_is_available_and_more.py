# Generated by Django 4.2.19 on 2025-02-06 18:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='is_available',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='total_clients',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='total_haircuts',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='years_experience',
        ),
        migrations.AlterField(
            model_name='profile',
            name='avatar',
            field=models.FileField(blank=True, null=True, upload_to='profile_avatars/'),
        ),
        migrations.DeleteModel(
            name='Review',
        ),
    ]
