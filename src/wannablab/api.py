from wannablab.models import Category, Comment, Event, Language
from rest_framework import viewsets, permissions
from .serializers import (
    CategorySerializer,
    CommentSerializer,
    EventSerializer,
    LanguageSerializer,
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
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]

    serializer_class = EventSerializer

    def get_queryset(self):
        return Event.objects.filter(author_id=self.request.user.id)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class LanguageViewSet(viewsets.ModelViewSet):
    queryset = Language.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = LanguageSerializer




