exports.handler = async function(event) {
  // CORS preflight response
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS"
      },
      body: ""
    };
  }

  try {
    const userData = JSON.parse(event.body);

    const response = await fetch("https://script.google.com/macros/s/AKfycbwiKBevxoGaZpImgEYp2Fd4OvB1_D71f0MOfJuwOxyBnmtg7vbCIf4pGtnNq6LVf60/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });

    const result = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result)
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ error: error.message })
    };
  }
};
