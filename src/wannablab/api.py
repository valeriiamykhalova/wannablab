from wannablab.models import Category, Comment, Event, Language, Level
from rest_framework import viewsets, permissions
from .serializers import (
    CategorySerializer,
    CommentSerializer,
    EventSerializer,
    LanguageSerializer,
    LevelSerializer
)


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = CommentSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = CategorySerializer


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]

    serializer_class = EventSerializer

    def perform_create(self, serializer):
        # import ipdb
        # ipdb.set_trace()
        serializer.save(author=self.request.user)


class LanguageViewSet(viewsets.ModelViewSet):
    queryset = Language.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = LanguageSerializer


class LevelViewSet(viewsets.ModelViewSet):
    queryset = Level.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = LevelSerializer



