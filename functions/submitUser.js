function submitUserInfo() {
  const name = document.getElementById('userName').value.trim();
  const phone = document.getElementById('userPhone').value.trim();

  if (!name || !phone) {
    alert('لطفاً نام و شماره موبایل را وارد کنید.');
    return;
  }

  // ذخیره اطلاعات در localStorage
  localStorage.setItem('userName', name);
  localStorage.setItem('userPhone', phone);

  // ارسال به Google Sheets
  fetch("https://script.google.com/macros/s/AKfycbwiKBevxoGaZpImgEYp2Fd4OvB1_D71f0MOfJuwOxyBnmtg7vbCIf4pGtnNq6LVf60/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone })
  })
  .then(response => response.json())
  .then(data => {
    // موفقیت در ورود
    console.log('ارسال شد:', data);
    window.location.href = "menu.html"; // یا هر صفحه‌ای که منو در اون هست
  })
  .catch(error => {
    console.error("خطا:", error);
    alert("خطا در ارسال اطلاعات");
  });
}

// اگر قبلاً وارد شده، مستقیم منتقل کن
window.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem('userName');
  const phone = localStorage.getItem('userPhone');
  if (name && phone) {
    window.location.href = "menu.html";
  }
});
