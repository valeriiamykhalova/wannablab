from rest_framework import serializers
from wannablab.models import Category, Comment, Event, Language


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = (
            'id', 'title', 'created', 'updated'
                )


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = (
            'id', 'text', 'author_id', 'recipient_id', 'created', 'updated'
        )


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = (
            'id', 'topic', 'description', 'date', 'time', 'max_members', 'location',
            'author_id', 'language_id', 'member_id', 'category_id',
            'created', 'updated'
                )


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = (
            'id', 'title', 'level', 'created', 'updated'
                )
