from django.contrib.auth import get_user_model
from django.test import TestCase
from wannablab.models import Category, Language, Comment, Event

import datetime


class BaseTest(TestCase):
    def setUp(self):
        self.user_1 = get_user_model().objects.create(
            username='user1', password='qwerty123'
        )

        self.user_2 = get_user_model().objects.create(
            username='user2', password='qwerty456'
        )

        Category.objects.create(
            id="10",
            title="animals"
        )

        Language.objects.create(
            id="10",
            title="French",
            level="C1",
        )

        Comment.objects.create(
            id="10",
            author=self.user_1,
            recipient=self.user_2,
            text="Some very important text",
        )

        Event.objects.create(
            id="10",
            topic="Cats in our life",
            description="Discussion pets, how important to have a cat in your house",
            category_id="10",
            author=self.user_1,
            language_id="10",
            date="2019-06-12",
            time="06:00:00",
            max_members="2",
            member=self.user_2,
            location="Saksaganskogo, 56"
        )


class CategoryModelTest(BaseTest):
    def test_category_title(self):
        cat = Category.objects.get(id=10)
        self.assertEqual(cat.title, "animals")


class LanguageModelTest(BaseTest):
    def test_language_title(self):
        lang = Language.objects.get(id=10)
        self.assertEqual(lang.title, "French")

    def test_language_level(self):
        lang = Language.objects.get(id=10)
        self.assertEqual(lang.level, "C1")

    def test_str(self):
        lang = Language.objects.get(id=10)
        self.assertEqual(str(lang), "French [C1]")


class CommentModelTest(BaseTest):
    def test_comment_author(self):
        comm = Comment.objects.get(id=10)
        self.assertEqual(comm.author, self.user_1)

    def test_comment_recipient(self):
        comm = Comment.objects.get(id=10)
        self.assertEqual(comm.recipient, self.user_2)

    def test_comment_text(self):
        comm = Comment.objects.get(id=10)
        self.assertEqual(comm.text, 'Some very important text')


class EventModelTest(BaseTest):
    def test_event_topic(self):
        evt = Event.objects.get(id=10)
        self.assertEqual(evt.topic, 'Cats in our life')

    def test_event_description(self):
        evt = Event.objects.get(id=10)
        self.assertEqual(evt.description,
                         'Discussion pets, how important to have a cat in your house')

    def test_event_date(self):
        evt = Event.objects.get(id=10)
        self.assertEqual(evt.date, datetime.date(2019, 6, 12))

    def test_event_time(self):
        evt = Event.objects.get(id=10)
        self.assertEqual(evt.time, datetime.time(6, 0))

    def test_event_max_members(self):
        evt = Event.objects.get(id=10)
        self.assertEqual(evt.max_members, 2)

    def test_event_max_location(self):
        evt = Event.objects.get(id=10)
        self.assertEqual(evt.location, 'Saksaganskogo, 56')

    def test_event_author(self):
        evt = Event.objects.get(id=10)
        self.assertEqual(evt.author, self.user_1)

