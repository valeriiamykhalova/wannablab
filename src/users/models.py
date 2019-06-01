from django.db import models
from django.utils.translation import gettext as _
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth.models import User

from core.models import BaseModel
from wannablab.models import Language


class Profile(BaseModel):
    user = models.OneToOneField(
        User,
        verbose_name=_('User'),
        on_delete=models.CASCADE
    )

    image = models.ImageField(
        default='default.jpg',
        verbose_name=_('Image'),
        upload_to='profile_pics'
    )

    birth_date = models.DateField(
        null=True,
        verbose_name=_('Date of birth'),
        blank=True
    )

    info = models.TextField(
        verbose_name=_('Info about user')
    )

    city = models.CharField(
        max_length=50,
        verbose_name=_('City')
    )

    rating = models.IntegerField(
        default=5,
        validators=[MinValueValidator(0), MaxValueValidator(5)],
        verbose_name=_('Rating')
    )

    language = models.ForeignKey(
        to=Language,
        related_name='user_language',
        on_delete=models.SET_NULL,
        null=True
    )

    def __str__(self):
        return f'{self.user.username} profile'

    class Meta:
        db_table = 'profile'
        verbose_name = _('Profile')
        verbose_name_plural = _('Profiles')



