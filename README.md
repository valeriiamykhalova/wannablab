
## Installation
* [Python 3.7.x](https://www.python.org/)
* [python-virtualenv](https://virtualenv.pypa.io/en/stable/installation/) 
* [PIP](https://pip.pypa.io/en/latest/installing/)
* [PostgreSQL 11.x](https://www.postgresql.org/)
* [Node.js and npm](https://nodejs.org/uk/download/)

## Clone
Clone this repo to your local machine using `git clone https://github.com/emerell/wannablab`

## Setup local database
- `postgres psql`
- `create role wannablab nosuperuser nocreatedb login encrypted password 'wannablab';`
-  `create database wannablab with owner=wannablab encoding='UTF8';`
-  ` grant all privileges on database wannablab to wannablab;`
-  `\q`


## Setup project
- `cd wannablab`
- `virtualenv venv --python=/usr/local/bin/python3.7`
- `source venv/bin/activate`
- `pip install -r src/.meta/packages`
- `cd src`
- `python manage.py migrate`
- `python manage.py runserver`

