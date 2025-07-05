export async function handler(event, context) {
  const body = JSON.parse(event.body);
  const { title, rating } = body;

  // اینجا می‌تونی اطلاعات رو به Google Sheets بفرستی یا ذخیره محلی
  console.log('دریافت امتیاز:', title, rating);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'امتیاز دریافت شد!', title, rating }),
  };
}
