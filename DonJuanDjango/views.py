from django.shortcuts import render


def home(request):
    return render(request, 'index.html')

def perfil(request):
    return render(request, 'perfil/perfil.html')

def servicos(request):
    return render(request, 'servicos/servicos.html')

def contato(request):
    return render(request, 'contato/contato.html')

def sobre(request):
    return render(request, 'sobre/sobre.html')