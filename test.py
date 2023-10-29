import pytesseract
from PIL import Image

# Open an image file
img = Image.open('/home/dedalus/projects/deepl-groceries-app/text_example.png')

# Use pytesseract to do OCR on the image
text = pytesseract.image_to_string(img)

# Print the extracted text
print(text)