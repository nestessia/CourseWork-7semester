AUTHOR = 'Anastasia Kryuchkova'
SITENAME = 'Backend Developer Portfolio'
SITEURL = 'https://nestessia.github.io/CourseWork-7semester'
RELATIVE_URLS = False

PATH = "content"

TIMEZONE = 'Europe/Moscow'

DEFAULT_LANG = 'en'

DISPLAY_PAGES_ON_MENU = True
DISPLAY_CATEGORIES_ON_MENU = False


# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (
    ("Pelican", "https://getpelican.com/"),
    ("Python.org", "https://www.python.org/"),
    ("Jinja2", "https://palletsprojects.com/p/jinja/"),
    ("You can modify those links in your config file", "#"),
)

# Social widget
SOCIAL = (
    ("You can add links in your config file", "#"),
    ("Another social link", "#"),
)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True

THEME_TEMPLATES_OVERRIDES = ['templates']
PAGE_TEMPLATES = {
    'index': 'page_index.html',
    'about': 'page_about.html',
    'projects': 'page_projects.html'
}

# Настройки темы
THEME = 'themes/custom'
THEME_STATIC_DIR = 'theme'

# Дополнительные настройки путей
OUTPUT_PATH = 'output'

# Отключение ненужных файлов
FAVICON_SAVE_AS = ''

# Пути к статическим файлам темы
STATIC_PATHS = ['static/css', 'static/js']

EXTRA_PATH_METADATA = {
    'themes/attila/static/css/custom.css': {'path': 'theme/css/custom.css'},
    'themes/attila/static/css/style.css': {'path': 'theme/css/style.css'},
    'themes/attila/static/js/stars.js': {'path': 'theme/js/stars.js'},
}
