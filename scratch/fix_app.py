import os

file_path = 'app.py'
if os.path.exists(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    # Clean up: keep lines until the first occurrence of the serve route
    content = []
    for line in lines:
        if "@app.route('/', defaults={'path': ''})" in line:
            break
        content.append(line)

    # Now add the correct ending
    ending = [
        "@app.route('/', defaults={'path': ''})\n",
        "@app.route('/<path:path>')\n",
        "def serve(path):\n",
        "    if path != '' and os.path.exists(app.static_folder + '/' + path):\n",
        "        return app.send_static_file(path)\n",
        "    \n",
        "    # Fallback for production when frontend is hosted elsewhere (Netlify)\n",
        "    if not os.path.exists(os.path.join(app.static_folder, 'index.html')):\n",
        "        return jsonify({\n",
        "            'message': 'iLovePDFKit API is running',\n",
        "            'status': 'healthy',\n",
        "            'frontend': 'https://ilovepdfkit.com'\n",
        "        }), 200\n",
        "        \n",
        "    return app.send_static_file('index.html')\n",
        "\n",
        "if __name__ == '__main__':\n",
        "    app.run(debug=True, port=5001, host='0.0.0.0', use_reloader=False)\n"
    ]

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(content + ending)
    print("app.py repaired successfully")
else:
    print("app.py not found")
