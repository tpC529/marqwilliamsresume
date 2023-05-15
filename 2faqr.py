import pyqrcode
from PIL import Image
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.image import MIMEImage

# Define a function to generate a QR code with the user's name and email
def generate_qr_code(name, email):
    # Combine the name and email into a string
    data = f"{name} {email}"
    
    # Generate a QR code with the data using the pyqrcode library
    qr_code = pyqrcode.create(data)
    
    # Create an image from the QR code using the Pillow library
    qr_code_image = qr_code.png('qr_code.png', scale=6)
    
    # Send the image to the user via email using Nodemailer
    send_email(name, email, 'qr_code.png')
    
    # Remove the image file from disk
    os.remove('qr_code.png')

# Define a function to send an email with the QR code image attached
def send_email(name, email, image_path):
    # Set up the email message
    message = MIMEMultipart()
    message['Subject'] = 'Your 2FA QR code'
    message['From'] = 'your-email@example.com'
    message['To'] = email
    
    # Add a message body to the email
    body = f"Hello {name},\n\nHere is your 2FA QR code:"
    message.attach(MIMEText(body))
    
    # Add the QR code image as an attachment to the email
    with open(image_path, 'rb') as image_file:
        image_data = image_file.read()
    image = MIMEImage(image_data, name=os.path.basename(image_path))
    message.attach(image)
    
    # Send the email using SMTP and Nodemailer
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login('your-email@example.com', 'your-password')
    server.sendmail('your-email@example.com', email, message.as_string())
    server.quit()

# Ask the user for their name and email
name = input("Enter your name: ")
email = input("Enter your email: ")

# Generate a QR code for the user and send it via email
generate_qr_code(name, email)
