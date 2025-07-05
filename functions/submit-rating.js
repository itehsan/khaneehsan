exports.handler = async function(event, context) {
  const { title, rating, comment } = JSON.parse(event.body || "{}");

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbyqqeO1WaeOLrctM0I2q-wKQh-Zd1MUO0-ewP3R-pv3pAJhHxgl-GC5L6Z9FcpMBRg/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, rating, comment })
    });

    const result = await response.text();
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, response: result })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};

