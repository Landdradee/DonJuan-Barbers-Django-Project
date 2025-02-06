def profile_view(request):
    context = {
        'popular_services': [
            {'name': 'Classic Haircut', 'count': 156},
            {'name': 'Beard Trim', 'count': 89},
            {'name': 'Hair Styling', 'count': 67},
        ],
        'availability': [
            {'name': 'Monday', 'hours': '9:00 - 18:00'},
            {'name': 'Tuesday', 'hours': '9:00 - 18:00'},
            {'name': 'Wednesday', 'hours': '9:00 - 18:00'},
            {'name': 'Thursday', 'hours': '9:00 - 20:00'},
            {'name': 'Friday', 'hours': '9:00 - 20:00'},
            {'name': 'Saturday', 'hours': '10:00 - 16:00'},
        ],
        'badges': [
            {
                'name': 'Top Rated',
                'icon': 'fas fa-trophy',
                'color': 'yellow',
                'description': '4.9+ Rating'
            },
            {
                'name': 'Expert',
                'icon': 'fas fa-certificate',
                'color': 'blue',
                'description': '5+ Years'
            },
            # Add more badges...
        ],
        'recent_activities': [
            {
                'icon': 'fas fa-cut',
                'color': 'green',
                'description': 'Completed haircut for John Doe',
                'time': '2 hours ago'
            },
            # Add more activities...
        ],
    }
    return render(request, 'perfil/perfil.html', context) 