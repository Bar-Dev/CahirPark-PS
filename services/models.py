from django.db import models

class PrivateLesson(models.Model):
    date = models.DateField()
    time_slot = models.CharField(max_length=20)
    booked = models.BooleanField(default=False)

    def __str__(self):
        return f"Private Lesson on {self.date} ({self.time_slot})"
