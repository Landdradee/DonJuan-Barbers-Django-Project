from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    avatar = models.FileField(upload_to='profile_avatars/', null=True, blank=True)
    bio = models.TextField(max_length=500, blank=True, null=True)
    loyalty_points = models.IntegerField(default=0)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    appointments_count = models.IntegerField(default=0)
    reviews_count = models.IntegerField(default=0)
    
    class Meta:
        db_table = 'users_profile'
        app_label = 'users'
    
    def __str__(self):
        return f"{self.user.username}'s profile"

    def get_avatar_url(self):
        if self.avatar:
            return self.avatar.url
        return None

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save() 