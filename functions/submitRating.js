const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const data = JSON.parse(event.body);
  const googleScriptURL = "https://script.google.com/macros/s/AKfycbxV4D5K3FMHI4nklZnDTmidknCpL7ddQYVsu9O0Ftt69V1_F0hkN8XXk7lx_SKk36o/exec"; // لینک شما اینجا

  const response = await fetch(googleScriptURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Saved!" })
  };
};
