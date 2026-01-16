// ده كود بتاع الناف بار
const navbar = document.querySelector(".navbar");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const humburgerMenu = document.querySelector(".humburger");

humburgerMenu.addEventListener("click", () => {
  bars.classList.toggle("active");
  xmark.classList.toggle("active");
  navbar.classList.toggle("active");
});

// دي عشنا القئمه تقفل تاني
document.querySelectorAll(".navbar ul li a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        bars.classList.add("active");     
        xmark.classList.remove("active");  
    });
});

// ده كود بتاع الناف بار انتهي


// بتاع سشكن العد التنازلي



// التعديل الجديد لتاريخ رمضان 2026 الصح
const ramadanDate = new Date("February 18, 2026 0:00:00").getTime();

const updateCountdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = ramadanDate - now;

    // حسابات الأيام والساعات والدقائق والثواني
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // عرض النتيجة في العناصر
    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

    // لو الوقت خلص
    if (distance < 0) {
        clearInterval(updateCountdown);
        document.getElementById("countdown").innerHTML = "<h2 style='color: #FFD700;'>رمضان مبارك!</h2>";
    }
}, 1000);


// بتاع سشكن العد التنازلي انتهي



// مواقيت الصلاه يبدأ
function fetchPrayerTimes() {
    const city = "Cairo";
    const country = "Egypt";
    const method = 5; // طريقة حساب الهيئة العامة المصرية للمساحة

    fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=${method}`)
        .then(response => response.json())
        .then(data => {
            const timings = data.data.timings;
            
            // تحديث العناصر في الصفحة بالمواعيد الحقيقية
            document.getElementById('fajr-time').innerText = formatTime(timings.Fajr);
            document.getElementById('dhuhr-time').innerText = formatTime(timings.Dhuhr);
            document.getElementById('asr-time').innerText = formatTime(timings.Asr);
            document.getElementById('maghrib-time').innerText = formatTime(timings.Maghrib);
            document.getElementById('isha-time').innerText = formatTime(timings.Isha);
        })
        .catch(error => console.error('خطأ في جلب مواقيت الصلاة:', error));
}

// وظيفة بسيطة لتحويل الوقت لنظام 12 ساعة (PM/AM) عشان يبقى شكله أحلى
function formatTime(time) {
    let [hours, minutes] = time.split(':');
    let period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${period}`;
}

// تشغيل الدالة أول ما الصفحة تفتح
fetchPrayerTimes();
// مواقيت الصلاه ينتهي


// الاذكار يبدأ 
// بيانات الأذكار
const dhikrData = {
    'أذكار الصباح': 'أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير.',
    'أذكار المساء': 'أمسينـا وأمسى الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير.',
    'تسبيح': 'سبحان الله وبحمده، عدد خلقه، ورضا نفسه، وزينة عرشه، ومداد كلماته.'
};

let count = 0;
const modal = document.getElementById('dhikr-modal');
const countBtn = document.getElementById('count-btn');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

// فتح المودال وبرمجة الأزرار
document.querySelectorAll('.btn-dhikr').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const title = button.parentElement.querySelector('h3').innerText;
        
        modalTitle.innerText = title;
        modalBody.innerText = dhikrData[title];
        
        count = 0;
        countBtn.innerText = count;
        modal.style.display = 'flex';
    });
});

// عداد التسبيح
countBtn.addEventListener('click', () => {
    count++;
    countBtn.innerText = count;
});

// إغلاق المودال
closeModal.onclick = () => {
    modal.style.display = 'none';
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
// الاذكار ينتهي
