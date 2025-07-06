const fetch = require("node-fetch");

exports.handler = async (event) => {
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
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(result)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
