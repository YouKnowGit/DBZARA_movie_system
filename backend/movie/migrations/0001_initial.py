# Generated by Django 3.2.8 on 2021-12-04 17:01

from django.db import migrations, models
import django.db.models.deletion
import movie.validators


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Actor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=10)),
                ('name', models.CharField(max_length=250)),
                ('birth_date', models.DateField(null=True)),
                ('image', models.ImageField(null=True, upload_to='movie/actors')),
            ],
            options={
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='Character',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('character_name', models.CharField(max_length=250)),
                ('actor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='movie.actor')),
            ],
        ),
        migrations.CreateModel(
            name='Director',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=10)),
                ('name', models.CharField(max_length=250)),
                ('birth_date', models.DateField(null=True)),
                ('image', models.ImageField(null=True, upload_to='movie/directors')),
            ],
            options={
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='Distributor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('distributor_id', models.CharField(max_length=10)),
                ('name', models.CharField(max_length=250)),
                ('image', models.ImageField(null=True, upload_to='movie/distributors')),
            ],
            options={
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, unique=True)),
            ],
            options={
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.IntegerField(choices=[(1, 'Poster'), (2, 'BackDrop'), (3, 'Others')])),
                ('image', models.ImageField(null=True, upload_to='movie/images')),
            ],
        ),
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('kobis_id', models.CharField(max_length=8)),
                ('tmdb_id', models.CharField(max_length=10, null=True)),
                ('imdb_id', models.CharField(max_length=10, null=True)),
                ('name', models.CharField(max_length=100)),
                ('watch_grade', models.CharField(max_length=50)),
                ('running_time', models.IntegerField(null=True)),
                ('summary', models.TextField()),
                ('opening_date', models.DateField()),
                ('closing_date', models.DateField()),
                ('actors', models.ManyToManyField(through='movie.Character', to='movie.Actor')),
                ('directors', models.ManyToManyField(to='movie.Director')),
                ('distributors', models.ManyToManyField(to='movie.Distributor')),
                ('genres', models.ManyToManyField(to='movie.Genre')),
                ('images', models.ManyToManyField(related_name='_movie_movie_images_+', to='movie.Image')),
            ],
        ),
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=30)),
                ('site', models.CharField(max_length=20)),
                ('key', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('score', models.IntegerField(validators=[movie.validators.validate_score])),
                ('comment', models.TextField()),
                ('sympathy', models.IntegerField()),
                ('not_sympathy', models.IntegerField()),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('movie', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='movie.movie')),
                ('profile', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='accounts.profile')),
            ],
        ),
        migrations.CreateModel(
            name='MovieInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('age', models.JSONField(null=True)),
                ('gender', models.JSONField(null=True)),
                ('counts', models.IntegerField(default=0)),
                ('sales', models.IntegerField(default=0)),
                ('updated', models.DateField(auto_now=True)),
                ('movie', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='movie.movie')),
            ],
        ),
        migrations.AddField(
            model_name='movie',
            name='videos',
            field=models.ManyToManyField(related_name='_movie_movie_videos_+', to='movie.Video'),
        ),
        migrations.AddField(
            model_name='character',
            name='movie',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='movie.movie'),
        ),
    ]
