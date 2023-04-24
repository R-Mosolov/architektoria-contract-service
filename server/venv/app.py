from flask import Flask
import json

app = Flask(__name__)

@app.route("/api/products")
def get_products_list():
    file = open('./data/products.json')
    data = json.load(file)
    return json.dumps(data, ensure_ascii=False)

@app.route("/api/products/<slug>")
def get_product(slug):
    result = {}

    products_file = open('./data/products.json')
    base_file = open('./data/base.json')
    materials_file = open('./data/materials.json')
    options_file = open('./data/options.json')
    sizes_file = open('./data/sizes.json')

    products_data = json.load(products_file)
    base_data = json.load(base_file)
    materials_data = json.load(materials_file)
    options_data = json.load(options_file)
    sizes_data = json.load(sizes_file)

    for product in products_data:
        if str(product['slug']) == str(slug):
            result = product

    result['properties'] = {}
    result['properties']['materials'] = materials_data
    result['properties']['options'] = options_data
    result['properties']['base'] = base_data
    result['properties']['sizes'] = sizes_data

    return json.dumps(result, ensure_ascii=False)