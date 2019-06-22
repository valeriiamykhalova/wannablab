from rest_framework import serializers
from wannablab.models import Category, Comment, Event, Language


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = (
            'id', 'title'
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
            'id', 'title', 'level'
                )


class EventSerializer(serializers.ModelSerializer):
    members = serializers.StringRelatedField(many=True)
    language = LanguageSerializer(read_only=True)
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Event
        fields = (
            'id', 'topic', 'description', 'language',
            'date', 'time', 'category', 'author_name',
            'max_members', 'location',
            'members', 'created'
        )
