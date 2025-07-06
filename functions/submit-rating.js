exports.handler = async function(event, context) {
  const { title, rating, comment } = JSON.parse(event.body || "{}");

  try {
        

    const response = await fetch("https://script.google.com/macros/s/AKfycbxV4D5K3FMHI4nklZnDTmidknCpL7ddQYVsu9O0Ftt69V1_F0hkN8XXk7lx_SKk36o/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
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
