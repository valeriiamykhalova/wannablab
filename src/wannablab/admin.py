from django.contrib import admin
from wannablab import models


@admin.register(models.Comment)
class CommentAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Category)
class CategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Event)
class EventAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Language)
class LanguageAdmin(admin.ModelAdmin):
    pass
