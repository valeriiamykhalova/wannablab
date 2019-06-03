from django.db import models
from django.conf import settings
from django.utils.translation import gettext as _
from django.core.validators import MinValueValidator, MaxValueValidator
from core.models import BaseModel
from .choices import LanguageChoices


class Category(BaseModel):
    title = models.CharField(
        max_length=100,
        unique=True,
        verbose_name=_('Title')
    )

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'category'
        verbose_name = _('Category')
        verbose_name_plural = _('Categories')


class Language(BaseModel):

    title = models.CharField(
        max_length=50,
        verbose_name=_('Title')
    )

    level = models.CharField(
        max_length=2,
        choices=LanguageChoices.LEVEL_CHOICES,
        default=LanguageChoices.BEGINNER,
        verbose_name=_('Level')
    )

    def __str__(self):
        return f'{self.title} [{self.level}]'

    class Meta:
        db_table = 'language'
        verbose_name = _('Language')
        verbose_name_plural = _('Languages')


class Comment(BaseModel):
    author = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        related_name='comment_author',
        verbose_name=_('Author'),
        on_delete=models.SET_NULL,
        null=True
    )

    recipient = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        related_name='comment_recipient',
        verbose_name=_('Recipient'),
        on_delete=models.SET_NULL,
        null=True
    )

    text = models.TextField(
        verbose_name=_('Text')
    )

    def __str__(self):
        return f'{self.author.username} [{self.recipient.username}]'

    class Meta:
        db_table = 'comment'
        verbose_name = _('Comment')
        verbose_name_plural = _('Comments')


class Event(BaseModel):
    topic = models.CharField(
        max_length=150,
        verbose_name=_('Topic')
    )

    description = models.TextField(
        verbose_name=_('Description')
    )

    category = models.ForeignKey(
        to=Category,
        on_delete=models.SET_NULL,
        null=True
    )

    author = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        related_name='event_author',
        verbose_name=_('Author'),
        on_delete=models.SET_NULL,
        null=True
    )

    language = models.ForeignKey(
        to=Language,
        related_name='event_language',
        on_delete=models.SET_NULL,
        null=True
    )

    date = models.DateField(
        verbose_name=_('Date')
    )

    time = models.TimeField(
        verbose_name=_('Time')
    )

    max_members = models.IntegerField(
        default=2,
        validators=[MinValueValidator(2), MaxValueValidator(50)],
        verbose_name=_('Max number of members')
    )

    member = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        related_name='event_member',
        verbose_name=_('Members'),
        on_delete=models.SET_NULL,
        null=True
    )

    location = models.CharField(
        max_length=100,
        verbose_name=_('Location')
    )

    def __str__(self):
        return self.topic

    class Meta:
        db_table = 'event'
        verbose_name = _('Event')
        verbose_name_plural = _('Events')

