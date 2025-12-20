# Contact Form Email Setup

## Configuration

To enable email sending from the contact form, you need to set up environment variables.

### 1. Create `.env.local` file

Create a file named `.env.local` in the `frontend` directory with the following content:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

### 2. Gmail Setup (Recommended)

If using Gmail:

1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Generate an App Password:
   - Visit: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the generated 16-character password
4. Use this App Password in `EMAIL_PASSWORD`

### 3. Alternative Email Providers

You can use other email providers by modifying the transporter configuration in:
`frontend/app/api/contact/route.ts`

**SendGrid Example:**
```typescript
const transporter = nodemailer.createTransporter({
    host: 'smtp.sendgrid.net',
    port: 587,
    auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY
    }
});
```

**Mailgun Example:**
```typescript
const transporter = nodemailer.createTransporter({
    host: 'smtp.mailgun.org',
    port: 587,
    auth: {
        user: process.env.MAILGUN_USER,
        pass: process.env.MAILGUN_PASSWORD
    }
});
```

### 4. Testing

To test the contact form:

1. Start the development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out and submit the form
4. Check `support@ilovepdfkit.com` for the email

### Security Notes

- Never commit `.env.local` to version control
- `.env.local` is already in `.gitignore`
- Use App Passwords, not your actual email password
- For production, use environment variables in your hosting platform

## Troubleshooting

**Email not sending?**
- Check your email credentials
- Verify 2-Step Verification is enabled (for Gmail)
- Check the console for error messages
- Ensure port 587 is not blocked by your firewall

**Gmail "Less secure app" error?**
- Use an App Password instead of your regular password
- Enable 2-Step Verification first
