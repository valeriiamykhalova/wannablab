from django.contrib import admin
from wannablab import models


@admin.register(models.Comment)
class ArticleAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Category)
class CategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Event)
class TagAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Language)
class CommentAdmin(admin.ModelAdmin):
    pass