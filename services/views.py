from django.shortcuts import render
from .models import PrivateLesson
from datetime import datetime, timedelta


# Create your views here.


def index(request):
    return render(request, 'services/services.html')


def private_lessons(request):
    today = datetime.now().date()
    end_date = today + timedelta(days=6)
    days = [today + timedelta(days=i) for i in range(7)]
    time_slots = ["9-10 am", "10-11 am", "11 am - 12 pm", "12-1 pm", "1-2 pm", "2-3 pm", "3-4 pm", "4-5 pm", "5-6 pm"]

    private_lessons = PrivateLesson.objects.filter(date__range=(today, end_date))
    lessons_by_day_and_time = []

    for day in days:
        day_lessons = private_lessons.filter(date=day)
        day_data = {'date': day, 'slots': []}
        for time_slot in time_slots:
            lesson = day_lessons.filter(time_slot=time_slot).first()
            day_data['slots'].append({'time_slot': time_slot, 'lesson': lesson})
        lessons_by_day_and_time.append(day_data)

    context = {
        'days': days,
        'lessons_by_day_and_time': lessons_by_day_and_time,  # Correct variable name
    }

    return render(request, 'services/private_lessons.html', context)

