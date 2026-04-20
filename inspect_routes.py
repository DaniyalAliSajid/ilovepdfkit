import app
with app.app.app_context():
    print(app.app.url_map)
