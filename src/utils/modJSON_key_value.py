import json
from shutil import copyfile
import os

# Print the current working directory
print("Current Working Directory:", os.getcwd())

# File paths
original_file_path = 'src/utils/MenuList.json'
backup_file_path = 'src/utils/MenuList_backup.json'
output_file_path = 'src/utils/MenuList_updated.json'

# Read original JSON data from the file with explicit encoding
with open(original_file_path, 'r', encoding='utf-8') as original_file:
    data = json.load(original_file)

# Create a backup by copying the original data to a new file
copyfile(original_file_path, backup_file_path)

# Iterate through the list and update values for the key "Page"
for item in data:
    if "Page" in item:
        item["Page"] = item["Page"].lower()

# Write the updated data to a new file
with open(output_file_path, 'w') as output_file:
    json.dump(data, output_file, indent=2)

# Print a message indicating the process is complete
print(f"Changes applied and backup created in {backup_file_path}. Updated data saved to {output_file_path}.")
