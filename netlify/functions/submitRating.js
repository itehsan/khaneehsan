// netlify/functions/submitRating.js

const { google } = require('googleapis');

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}');
    const { title, rating } = body;

    if (!title || !rating) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'اطلاعات ناقص است.' })
      };
    }

    // در اینجا باید اطلاعات به Google Sheets یا فایل دیگر ذخیره شود
    console.log('امتیاز ثبت شد:', title, rating);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'امتیاز ثبت شد.' })
    };
  } catch (err) {
    console.error('خطای سرور:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'خطا در پردازش.' })
    };
  }
};
