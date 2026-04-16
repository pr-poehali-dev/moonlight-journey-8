import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправляет заявку с номером телефона на почту atoyo.vega@gmail.com"""

    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    try:
        body = json.loads(event.get("body") or "{}")
        phone = body.get("phone", "").strip()

        if not phone:
            return {
                "statusCode": 400,
                "headers": cors_headers,
                "body": json.dumps({"error": "Укажите номер телефона"}),
            }

        smtp_password = os.environ.get("SMTP_PASSWORD", "")
        sender_email = "atoyo.vega@gmail.com"
        recipient_email = "atoyo.vega@gmail.com"

        msg = MIMEMultipart("alternative")
        msg["Subject"] = "Новая заявка с сайта ДиректПро"
        msg["From"] = sender_email
        msg["To"] = recipient_email

        html = f"""
        <html>
          <body style="font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px;">
            <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 12px; padding: 32px; border-top: 4px solid #FFCC00;">
              <h2 style="color: #2E3A46; margin-top: 0;">Новая заявка</h2>
              <p style="color: #666;">С сайта ДиректПро поступила заявка:</p>
              <div style="background: #f9f9f9; border-radius: 8px; padding: 16px; margin: 20px 0;">
                <strong style="color: #2E3A46;">Телефон:</strong>
                <span style="color: #F5A623; font-size: 20px; margin-left: 10px;">{phone}</span>
              </div>
              <p style="color: #999; font-size: 12px;">Свяжитесь с клиентом как можно скорее!</p>
            </div>
          </body>
        </html>
        """

        msg.attach(MIMEText(html, "html"))

        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(sender_email, smtp_password)
            server.sendmail(sender_email, recipient_email, msg.as_string())

        return {
            "statusCode": 200,
            "headers": cors_headers,
            "body": json.dumps({"success": True, "message": "Заявка отправлена!"}),
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "headers": cors_headers,
            "body": json.dumps({"error": str(e)}),
        }
