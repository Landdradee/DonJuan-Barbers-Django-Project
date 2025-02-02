from django.shortcuts import render
from functools import wraps
import socket
import errno

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
    return render(request, 'allauth/index.html')

@handle_broken_pipe
def perfil(request):
    return render(request, 'perfil/perfil.html')

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