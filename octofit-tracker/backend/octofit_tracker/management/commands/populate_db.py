from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Workout, Leaderboard
from datetime import date

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        # Clear existing data in correct order
        Activity.objects.all().delete()
        Workout.objects.all().delete()
        Leaderboard.objects.all().delete()
        for user in User.objects.filter(pk__isnull=False):
            user.delete()
        for team in Team.objects.filter(pk__isnull=False):
            team.delete()

        # Create Teams
        marvel = Team.objects.create(name='Team Marvel', description='Marvel superheroes')
        dc = Team.objects.create(name='Team DC', description='DC superheroes')

        # Create Users (superheroes)
        spiderman = User.objects.create(name='Spider-Man', email='spiderman@marvel.com', team=marvel, is_superhero=True)
        ironman = User.objects.create(name='Iron Man', email='ironman@marvel.com', team=marvel, is_superhero=True)
        wonderwoman = User.objects.create(name='Wonder Woman', email='wonderwoman@dc.com', team=dc, is_superhero=True)
        batman = User.objects.create(name='Batman', email='batman@dc.com', team=dc, is_superhero=True)

        # Create Activities
        Activity.objects.create(user=spiderman, activity_type='Running', duration_minutes=30, date=date.today())
        Activity.objects.create(user=ironman, activity_type='Cycling', duration_minutes=45, date=date.today())
        Activity.objects.create(user=wonderwoman, activity_type='Swimming', duration_minutes=60, date=date.today())
        Activity.objects.create(user=batman, activity_type='Martial Arts', duration_minutes=50, date=date.today())

        # Create Workouts
        Workout.objects.create(name='Hero HIIT', description='High intensity for heroes', suggested_for_team=marvel)
        Workout.objects.create(name='Gotham Strength', description='Strength training for Gotham defenders', suggested_for_team=dc)

        # Create Leaderboard
        Leaderboard.objects.create(team=marvel, total_points=150, rank=1)
        Leaderboard.objects.create(team=dc, total_points=120, rank=2)

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data!'))
