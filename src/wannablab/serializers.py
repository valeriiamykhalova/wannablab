from rest_framework import serializers
from wannablab.models import Category, Comment, Event, Language, Level


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = (
            'id', 'name'
                )


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = (
            'id', 'text', 'author_id', 'recipient_id', 'created', 'updated'
        )


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = (
            'id', 'name'
                )


class LevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Level
        fields = (
            'id', 'shot_name', 'full_name'
                )


class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event
        fields = (
            'id', 'topic', 'description', 'language_id', 'level_id',
            'date', 'time', 'category_id', 'author_name',
            'max_members', 'location', 'created', 'author_id'
        )

