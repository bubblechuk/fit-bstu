import json

with open('news.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

for index, item in enumerate(reversed(data), start=1):
    item['id'] = index

data_with_ids = list(data)

with open('news.json', 'w', encoding='utf-8') as output_file:
    json.dump(data_with_ids, output_file, ensure_ascii=False, indent=4)

