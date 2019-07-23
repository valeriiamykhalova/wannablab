from rest_framework import routers
from .api import CommentViewSet, CategoryViewSet, EventViewSet, LanguageViewSet, LevelViewSet

router = routers.DefaultRouter()
router.register('api/v1/comments', CommentViewSet, 'comments')
router.register('api/v1/categories', CategoryViewSet, 'categories')
router.register('api/v1/languages', LanguageViewSet, 'languages')
router.register('api/v1/levels', LevelViewSet, 'levels')
router.register('api/v1/events', EventViewSet, 'events')
urlpatterns = router.urls
