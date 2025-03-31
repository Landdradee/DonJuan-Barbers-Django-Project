from django.shortcuts import render, redirect
from functools import wraps
import socket
import errno
from django.contrib.auth.decorators import login_required
from django.contrib import messages

def handle_broken_pipe(view_func):
    @wraps(view_func)
    def wrapped_view(*args, **kwargs):
        try:
            return view_func(*args, **kwargs)
        except socket.error as e:
            if e.errno != errno.EPIPE:  # Broken pipe
                raise
            # Log the error if needed but don't raise it
            return None
    return wrapped_view

@handle_broken_pipe
def home(request):
    return render(request, 'home/index.html')

@login_required
def perfil(request):
    try:
        profile = Profile.objects.get(user=request.user)
    except Profile.DoesNotExist:
        profile = Profile.objects.create(user=request.user)
    return render(request, 'perfil/perfil.html', {'profile': profile})

@handle_broken_pipe
def servicos(request):
    return render(request, 'servicos/servicos.html')

@handle_broken_pipe
def contato(request):
    return render(request, 'contato/contato.html')

@handle_broken_pipe
def sobre(request):
    return render(request, 'sobre/sobre.html')

from django.shortcuts import render

def custom_404(request, exception):
    return render(request, '404.html', status=404)

@login_required
def edit_profile(request):
    if request.method == 'POST':
        # Handle profile update logic here
        user = request.user
        profile = user.profile
        
        # Update profile fields
        profile.bio = request.POST.get('bio', '')
        if 'avatar' in request.FILES:
            profile.avatar = request.FILES['avatar']
        
        profile.save()
        messages.success(request, 'Profile updated successfully!')
        return redirect('perfil')
        
    return render(request, 'perfil/edit_profile.html')

def appointments_view(request):
    return render(request, 'appointments.html')

def services_view(request):
    return render(request, 'services.html')

def gallery_view(request):
    return render(request, 'gallery.html')