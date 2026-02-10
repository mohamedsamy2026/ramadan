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
const ramadanDate = new Date("February 19, 2026 0:00:00").getTime();

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






//الاذكار يبدأ

// بيانات الأذكار

const azkarData = {

    morning: [
        
{ 
            text: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ ( بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ (1) الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ (2) الرَّحْمَنِ الرَّحِيمِ (3) مَالِكِ يَوْمِ الدِّينِ (4) إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ (5) اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ (6) صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ )عَلَيْهِمْ وَلَا الضَّالِّينَ (7)", 
            repeat: 1 
        },

        { text: "﷽ الم ﴿1﴾ ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِلْمُتَّقِينَ ﴿2﴾ الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ ﴿3﴾ وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنْزِلَ إِلَيْكَ وَمَا أُنْزِلَ مِنْ قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ ﴿4﴾ أُولَٰئِكَ عَلَىٰ هُدًى مِنْ رَبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ ﴿5﴾", repeat: 1 },
        


        { text: "﴿ اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ ﴾", repeat: 1 },

        { text: "﴿ ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيۡهِ مِن رَّبِّهِۦ وَٱلۡمُؤۡمِنُونَۚ كُلٌّ ءَامَنَ بِٱللَّهِ وَمَلَٰٓئِكَتِهِۦ وَكُتُبِهِۦ وَرُسُلِهِۦ لَا نُفَرِّقُ بَيۡنَ أَحَدٖ مِّن رُّسُلِهِۦۚ وَقَالُواْ سَمِعۡنَا وَأَطَعۡنَاۖ غُفۡرَانَكَ رَبَّنَا وَإِلَيۡكَ ٱلۡمَصِيرُ (*) لَا يُكَلِّفُ ٱللَّهُ نَفۡسًا إِلَّا وُسۡعَهَاۚ لَهَا مَا كَسَبَتۡ وَعَلَيۡهَا مَا ٱكۡتَسَبَتۡۗ رَبَّنَا لَا تُؤَاخِذۡنَآ إِن نَّسِينَآ أَوۡ أَخۡطَأۡنَاۚ رَبَّنَا وَلَا تَحۡمِلۡ عَلَيۡنَآ إِصۡرٗا كَمَا حَمَلۡتَهُۥ عَلَى ٱلَّذِينَ مِن قَبۡلِنَاۚ رَبَّنَا وَلَا تُحَمِّلۡنَا مَا لَا طَاقَةَ لَنَا بِهِۦۖ وَٱعۡفُ عَنَّا وَٱغۡفِرۡ لَنَا وَٱرۡحَمۡنَآۚ أَنتَ مَوۡلَىٰنَا فَٱنصُرۡنَا عَلَى ٱلۡقَوۡمِ ٱلۡكَٰفِرِينَ ﴾", repeat: 1 },


        { text: "بسم الله الرحمن الرحيم ( قُلۡ هُوَ ٱللَّهُ أَحَدٌ (1) ٱللَّهُ ٱلصَّمَدُ (2) لَمۡ يَلِدۡ وَلَمۡ يُولَدۡ (3) وَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدُۢ (4)", repeat: 3 },


        { text: "بسم الله الرحمن الرحيم ( قُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ (1) مِن شَرِّ مَا خَلَقَ (2) وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ (3) وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِي ٱلۡعُقَدِ (4) وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ (5)", repeat: 3 },

        { text: "بسم الله الرحمن الرحيم ( قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ (1) مَلِكِ ٱلنَّاسِ (2) إِلَٰهِ ٱلنَّاسِ (3) مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ (4) ٱلَّذِي يُوَسۡوِسُ فِي صُدُورِ ٱلنَّاسِ (5) مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ (6)", repeat: 3 },

        { text: "{رَبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ}", repeat: 1 },

        { text: "{رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنْتَ خَيْرُ الْفَاتِحِينَ}", repeat: 1 },

        { text: "{أعوذ بكلمات الله التامات من شر ما خلق} \n\n من قالها ثلاث مرات  صباحا ومساء لم يضره شئ", repeat: 3 },

        { text: "﴿ رَبَّنَا لَا تُزِغۡ قُلُوبَنَا بَعۡدَ إِذۡ هَدَيۡتَنَا وَهَبۡ لَنَا مِن لَّدُنكَ رَحۡمَةًۚ إِنَّكَ أَنتَ ٱلۡوَهَّابُ  ﴾", repeat: 1 },

        { text:"{ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ.}", repeat: 1 },

        { text:" {بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَىْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ }\n\n من قالها ثلاث مرات لم يضره شئ", repeat: 3 },

        
        { text: "{سبحان الله وبحمده عدد خلقه ورضا نفسه وزنة عرشه ومداد كلماته }\n\n تقال ثلاث مرات صباحا فقط", repeat: 3 },

         { text: "{يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغيثُ أَصْلِحْ لِي شَأْنِيَ كُلَّهُ وَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.}", repeat: 1 },
        
        { text: " {رَضِيتُ بِاللهِ رَبًّا، وَبِالإسْلاَمِ دِيناً، وَبِمُحَمَّدٍ -صلَّى الله عليه وسلَّم- نَبِيًّا }\n\n من قالها ثلاث مرات حين يصبح, كان حقا على الله ان يرضيه يوم القيامة", repeat: 3 },

        { text: "{اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.} \n\n تقال بعد السلم من صلاه الفجر", repeat: 1 },

        { text: "{لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ} \n\n تقال ثلاث مرات", repeat: 3 },

        { text: "اللهم أجرني من النار \n\n تقال سبع مرات قبل القيام من صلاه الصبح او صلاه المغرب", repeat: 7 },


        { text:"{ اللهمَّ بك أصبحنا وبك أمسينا وبك نحيا وبك نموتُ وإليك النُّشورُ}", repeat: 1 },


        { text: "{اللهم إني أصبحت أُشهدك وأُشهد حملة عرشك وملائكتك وجميع خلقك: أنك أنت الله لا إله إلا أنت، وأن محمدًا عبدك ورسولك.} \n\n من قالها اربع مرات حين يصبح وحين يمسي اعتقه الله من النار", repeat: 4 },

        { text:"{ اللهم ما أصبح بي من نعمة أو بأحد من خلقك فمنك وحدك، لا شريك لك، فلك الحمد ولك الشكر.}" , repeat: 1 },

        { text: "{اللهم لك الحمد كما ينبغي لجلال وجهك وعظيم سلطانك}", repeat: 1 },


        { text: "{ اللهم إن هذا إقبال ليلك وإدبار نهارك وأصوات دعاتك فاغفر لي} \n\n تقال عند سماع  اذان المغرب ", repeat: 1 },

        { text:"{ اللهم عافني في بدني، اللهم عافني في سمعي، اللهم عافني في بصري، لا إله إلا أنت. اللهم إني أعوذ بك من الكفر والفقر، اللهم إني أعوذ بك من عذاب القبر، لا إله إلا أنت } \n\n تقال ثلاث مرات صباحا ومساء ",repeat: 3 },


        { text:"{ اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي؛ فَاغْفِرْ لِي؛ فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ}" , repeat: 1 },


        { text:"{ اللهم فاطر السماوات والأرض، عالم الغيب والشهادة، رب كل شيء ومليكه، أشهد أن لا إله إلا أنت، أعوذ بك من شر نفسي ومن شر الشيطان وشركه، وأن أقترف على نفسي سوءًا أو أجره إلى مسلم}", repeat: 1 },


        { text:"{ اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ، وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ، وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، وَبَارِكْ عَلَى مُحَمَّدٍ، وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ، وَعَلَى آلِ إِبْرَاهِيمَ، فِي الْعَالَمِينَ إِنَّكَ حَمِيدٌ مَجِيدٌ} \n\n تقال 10 مرات ", repeat: 10 },
    ],


    evening: [
        
{ 
            text: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ ( بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ (1) الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ (2) الرَّحْمَنِ الرَّحِيمِ (3) مَالِكِ يَوْمِ الدِّينِ (4) إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ (5) اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ (6) صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ )عَلَيْهِمْ وَلَا الضَّالِّينَ (7)", 
            repeat: 1 
        },

        { text: "﷽ الم ﴿1﴾ ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِلْمُتَّقِينَ ﴿2﴾ الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ ﴿3﴾ وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنْزِلَ إِلَيْكَ وَمَا أُنْزِلَ مِنْ قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ ﴿4﴾ أُولَٰئِكَ عَلَىٰ هُدًى مِنْ رَبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ ﴿5﴾", repeat: 1 },
        


        { text: "﴿ اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ ﴾", repeat: 1 },

        { text: "﴿ ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيۡهِ مِن رَّبِّهِۦ وَٱلۡمُؤۡمِنُونَۚ كُلٌّ ءَامَنَ بِٱللَّهِ وَمَلَٰٓئِكَتِهِۦ وَكُتُبِهِۦ وَرُسُلِهِۦ لَا نُفَرِّقُ بَيۡنَ أَحَدٖ مِّن رُّسُلِهِۦۚ وَقَالُواْ سَمِعۡنَا وَأَطَعۡنَاۖ غُفۡرَانَكَ رَبَّنَا وَإِلَيۡكَ ٱلۡمَصِيرُ (*) لَا يُكَلِّفُ ٱللَّهُ نَفۡسًا إِلَّا وُسۡعَهَاۚ لَهَا مَا كَسَبَتۡ وَعَلَيۡهَا مَا ٱكۡتَسَبَتۡۗ رَبَّنَا لَا تُؤَاخِذۡنَآ إِن نَّسِينَآ أَوۡ أَخۡطَأۡنَاۚ رَبَّنَا وَلَا تَحۡمِلۡ عَلَيۡنَآ إِصۡرٗا كَمَا حَمَلۡتَهُۥ عَلَى ٱلَّذِينَ مِن قَبۡلِنَاۚ رَبَّنَا وَلَا تُحَمِّلۡنَا مَا لَا طَاقَةَ لَنَا بِهِۦۖ وَٱعۡفُ عَنَّا وَٱغۡفِرۡ لَنَا وَٱرۡحَمۡنَآۚ أَنتَ مَوۡلَىٰنَا فَٱنصُرۡنَا عَلَى ٱلۡقَوۡمِ ٱلۡكَٰفِرِينَ ﴾", repeat: 1 },


        { text: "بسم الله الرحمن الرحيم ( قُلۡ هُوَ ٱللَّهُ أَحَدٌ (1) ٱللَّهُ ٱلصَّمَدُ (2) لَمۡ يَلِدۡ وَلَمۡ يُولَدۡ (3) وَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدُۢ (4)", repeat: 3 },


        { text: "بسم الله الرحمن الرحيم ( قُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ (1) مِن شَرِّ مَا خَلَقَ (2) وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ (3) وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِي ٱلۡعُقَدِ (4) وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ (5)", repeat: 3 },

        { text: "بسم الله الرحمن الرحيم ( قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ (1) مَلِكِ ٱلنَّاسِ (2) إِلَٰهِ ٱلنَّاسِ (3) مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ (4) ٱلَّذِي يُوَسۡوِسُ فِي صُدُورِ ٱلنَّاسِ (5) مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ (6)", repeat: 3 },

        { text: "{رَبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ}", repeat: 1 },

        { text: "{رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنْتَ خَيْرُ الْفَاتِحِينَ}", repeat: 1 },

        { text: "{أعوذ بكلمات الله التامات من شر ما خلق} \n\n من قالها ثلاث مرات  صباحا ومساء لم يضره شئ", repeat: 3 },

        { text: "﴿ رَبَّنَا لَا تُزِغۡ قُلُوبَنَا بَعۡدَ إِذۡ هَدَيۡتَنَا وَهَبۡ لَنَا مِن لَّدُنكَ رَحۡمَةًۚ إِنَّكَ أَنتَ ٱلۡوَهَّابُ  ﴾", repeat: 1 },

        { text:"{ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ.}", repeat: 1 },

        { text:" {بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَىْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ }\n\n من قالها ثلاث مرات لم يضره شئ", repeat: 3 },

        
        { text: "{سبحان الله وبحمده عدد خلقه ورضا نفسه وزنة عرشه ومداد كلماته }\n\n تقال ثلاث مرات صباحا فقط", repeat: 3 },

         { text: "{يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغيثُ أَصْلِحْ لِي شَأْنِيَ كُلَّهُ وَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.}", repeat: 1 },
        
        { text: " {رَضِيتُ بِاللهِ رَبًّا، وَبِالإسْلاَمِ دِيناً، وَبِمُحَمَّدٍ -صلَّى الله عليه وسلَّم- نَبِيًّا }\n\n من قالها ثلاث مرات حين يصبح, كان حقا على الله ان يرضيه يوم القيامة", repeat: 3 },

        { text: "{اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.} \n\n تقال بعد السلم من صلاه الفجر", repeat: 1 },

        { text: "{لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ} \n\n تقال ثلاث مرات", repeat: 3 },

        { text: "اللهم أجرني من النار \n\n تقال سبع مرات قبل القيام من صلاه الصبح او صلاه المغرب", repeat: 7 },


        { text:"{اللهم بك أمسينا وبك أصبحنا وبك نحيا وبك نموت وإليك المصير}", repeat: 1 },


        { text: "{اللهم إني أصبحت أُشهدك وأُشهد حملة عرشك وملائكتك وجميع خلقك: أنك أنت الله لا إله إلا أنت، وأن محمدًا عبدك ورسولك.} \n\n من قالها اربع مرات حين يصبح وحين يمسي اعتقه الله من النار", repeat: 4 },

        { text:"{ اللهم ما أصبح بي من نعمة أو بأحد من خلقك فمنك وحدك، لا شريك لك، فلك الحمد ولك الشكر.}" , repeat: 1 },

        { text: "{اللهم لك الحمد كما ينبغي لجلال وجهك وعظيم سلطانك}", repeat: 1 },


        { text: "{ اللهم إن هذا إقبال ليلك وإدبار نهارك وأصوات دعاتك فاغفر لي} \n\n تقال عند سماع  اذان المغرب ", repeat: 1 },

        { text:"{ اللهم عافني في بدني، اللهم عافني في سمعي، اللهم عافني في بصري، لا إله إلا أنت. اللهم إني أعوذ بك من الكفر والفقر، اللهم إني أعوذ بك من عذاب القبر، لا إله إلا أنت } \n\n تقال ثلاث مرات صباحا ومساء ",repeat: 3 },


        { text:"{ اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي؛ فَاغْفِرْ لِي؛ فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ}" , repeat: 1 },


        { text:"{ اللهم فاطر السماوات والأرض، عالم الغيب والشهادة، رب كل شيء ومليكه، أشهد أن لا إله إلا أنت، أعوذ بك من شر نفسي ومن شر الشيطان وشركه، وأن أقترف على نفسي سوءًا أو أجره إلى مسلم}", repeat: 1 },


        { text:"{ اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ، وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ، وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، وَبَارِكْ عَلَى مُحَمَّدٍ، وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ، وَعَلَى آلِ إِبْرَاهِيمَ، فِي الْعَالَمِينَ إِنَّكَ حَمِيدٌ مَجِيدٌ} \n\n تقال 10 مرات ", repeat: 10 },
    ],

};

let currentList = [];
let currentIndex = 0;
let currentType = "";

// --- منطق الأذكار ---
function openAzkar(type) {
    currentType = type;
    
    // تعديل مهم: بناخد نسخة من البيانات ونضيف عليها خاصية الـ remaining (المتبقي)
    // عشان لو رجعنا للذكر نلاقي المتبقي زي ما هو
    currentList = azkarData[type].map(zekr => ({
        ...zekr,
        remaining: zekr.remaining !== undefined ? zekr.remaining : zekr.repeat
    }));

    currentIndex = parseInt(localStorage.getItem(`lastIndex_${type}`)) || 0;
    showZekr();
    document.getElementById('azkar-modal').style.display = 'flex';
}

function showZekr() {
    // بدل block هنخليها flex عشان ترجع تتوسطن في النص بالظبط
    const countDisplay = document.getElementById('zekr-count-display');
    countDisplay.parentElement.style.display = "flex"; 
    countDisplay.parentElement.style.justifyContent = "center"; // نضمن إنها في النص
    countDisplay.parentElement.style.alignItems = "center";
    
    const zekr = currentList[currentIndex];
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    document.getElementById('zekr-text').innerText = zekr.text;
    
    // بنعرض الـ remaining (المتبقي) مش الـ repeat (الأساسي)
    document.getElementById('zekr-count-display').innerText = zekr.remaining;
    
    document.getElementById('zekr-index').innerText = `${currentIndex + 1} / ${currentList.length}`;

    // --- إضافة ميزة تعطيل الأزرار (Disabled) ---
    // لو إحنا في أول ذكر، زرار السابق يتعطل
    prevBtn.disabled = (currentIndex === 0);
    
    // لو إحنا في آخر ذكر، زرار التالي يتعطل
    nextBtn.disabled = (currentIndex === currentList.length - 1);
    // ------------------------------------------
    
    localStorage.setItem(`lastIndex_${currentType}`, currentIndex);
}

// عند الضغط على التالي أو السابق، الـ remaining بيفضل محفوظ في الـ currentList
document.getElementById('next-btn').onclick = () => { 
    if(currentIndex < currentList.length -1) { 
        currentIndex++; 
        showZekr(); 
    } 
};

document.getElementById('prev-btn').onclick = () => { 
    if(currentIndex > 0) { 
        currentIndex--; 
        showZekr(); 
    } 
};

document.getElementById('zekr-counter-click').onclick = function() {
    const zekr = currentList[currentIndex];
    
    if (zekr.remaining > 0) {
        zekr.remaining--; // بننقص من المتبقي
        document.getElementById('zekr-count-display').innerText = zekr.remaining;
        
        // اهتزاز بسيط مع كل ضغطة
        if (navigator.vibrate) navigator.vibrate(40);

        // --- التعديل الجديد هنا ---
        // لو العداد وصل لصفر والذكر مش الأخير في القائمة
        if (zekr.remaining === 0) {
            if (currentIndex < currentList.length - 1) {
                // بنعمل تأخير بسيط (نص ثانية) عشان المستخدم يشوف رقم 0 قبل ما يقلب
                setTimeout(() => {
                    currentIndex++; 
                    showZekr();
                    // اهتزاز أطول شوية عشان يعرف إنه نقل للذكر اللي بعده
                    if (navigator.vibrate) navigator.vibrate([50, 30, 50]); 
                }, 500);
           } else {
    const display = document.getElementById('zekr-count-display');
    
    // 1. نخفي العنصر اللي شايل كلمة "المتبقي" والرقم
    // كلمة parentElement بتجيب العنصر اللي شايل العداد كله وتخفيه
    display.parentElement.style.display = "none"; 

    // 2. نغير نص الذكر ونظبط شكله
    const zekrText = document.getElementById('zekr-text');
    zekrText.innerHTML = "<div style='color:green; font-size:3rem;'>✔</div>تم بحمد الله ختم هذه الأذكار";
}
        }
    }
};

function closeAzkarModal() { 
    document.getElementById('azkar-modal').style.display = 'none';
    // لما نقفل المودال، ممكن نصفر الألوان عشان المرة الجاية
    document.getElementById('zekr-text').style.color = "#333";
}

// --- منطق السبحة (كما هو بدون تغيير) ---
let totalSebha = localStorage.getItem('totalSebha') || 0;
document.getElementById('sebha-count-modal').innerText = totalSebha;

function openSebhaModal() { document.getElementById('sebha-modal').style.display = 'flex'; }
function closeSebhaModal() { document.getElementById('sebha-modal').style.display = 'none'; }

document.getElementById('sebha-click-btn').onclick = () => {
    totalSebha++;
    document.getElementById('sebha-count-modal').innerText = totalSebha;
    localStorage.setItem('totalSebha', totalSebha);
    if (navigator.vibrate) navigator.vibrate(60);
};

document.getElementById('reset-sebha-btn').onclick = () => {
    if(confirm("تصفير السبحة؟")) {
        totalSebha = 0;
        document.getElementById('sebha-count-modal').innerText = 0;
        localStorage.setItem('totalSebha', 0);
    }
};

window.onclick = function(e) {
    if (e.target.classList.contains('azkar-modal')) {
        closeAzkarModal();
        closeSebhaModal();
    }
};

function resetAzkarProgress() {
    // 1. نرجع المؤشر للصفر (أول ذكر)
    currentIndex = 0;

    // 2. نعيد تصفير العدادات (المتبقي) لكل الأذكار في القائمة الحالية
    currentList = azkarData[currentType].map(zekr => ({
        ...zekr,
        remaining: zekr.repeat
    }));

    // 3. نحدث الشاشة لعرض أول ذكر
    showZekr();
    
    // 4. نخزن الحالة الجديدة في المتصفح
    localStorage.setItem(`lastIndex_${currentType}`, 0);
}
// الاذكار ينتهي


// اغاني رمضان تبدأ 
// قائمة الأغاني بـ ID اليوتيوب
// قائمة أغاني رمضان بالـ IDs الجديدة اللي بعتها
const ramadanSongs = [

    { 
        title: "رمضان كريم", 
        artist: "حكيم", 
        id: "xtRoFhRzFAs" 
    },
    { 
        title: "قد جائنا رمضان", 
        artist: "أحمد حسن ", 
        id: "YTKryn8MeoM" 
    },
        { 
    title: "اهلا رمضان", 
    artist: "الحسن عادل", 
    id: "nBxFl1dziqs" 
},
    { 
        title: "وحوي يا وحوي", 
        artist: "أحمد حسن ",
        id: "V9_f0yiYMpw" 
    },
    { 
        title: "مرحب شهر الصوم", 
        artist: "مرحب رمضان", 
        id: "vs7hrEDqSaY" 
    },
    { 
    title: "يا حلاوة رمضان", 
    artist: "الحسن عادل", 
    id: "yZmcOlJlnag" 
},




];

// تأكد إن دالة loadRamadanSongs موجودة تحتها عشان تعرضهم أول ما الصفحة تفتح
function loadRamadanSongs() {
    const songsList = document.getElementById('songs-list');
    if(!songsList) return; // حماية لو القسم مش موجود
    
    songsList.innerHTML = ""; 

    ramadanSongs.forEach((song, index) => {
        const card = document.createElement('div');
        card.className = 'song-card';
        card.onclick = () => openMusicPlayer(index);
        card.innerHTML = `
            <i class="fas fa-music"></i>
            <h4>${song.title}</h4>
            <p style="font-size: 0.9rem;     font-weight: 800; color: #666;">${song.artist}</p>
        `;
        songsList.appendChild(card);
    });
}

// استدعاء الدالة
document.addEventListener('DOMContentLoaded', loadRamadanSongs);

// دالة فتح المشغل
function openMusicPlayer(index) {
    const song = ramadanSongs[index];
    const playerContainer = document.getElementById('youtube-player');
    
    // وضع الـ Iframe
    playerContainer.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${song.id}?autoplay=1" 
                frameborder="0" 
                allow="autoplay; encrypted-media" 
                allowfullscreen>
        </iframe>`;
    
    document.getElementById('song-title-display').innerText = song.title;
    document.getElementById('music-modal').style.display = 'flex';
}

// دالة قفل المشغل (مهمة جداً لمسح الفيديو)
function closeMusicModal() {
    document.getElementById('youtube-player').innerHTML = ""; // يمسح الفيديو عشان الصوت يقف
    document.getElementById('music-modal').style.display = 'none';
}

// تشغيل الدالة عند تحميل الصفحة
// اغاني رمضان تنتهي



document.addEventListener("DOMContentLoaded", function() {
    // حدد هنا الـ IDs اللي عايز تعملها Lazy Loading بس
    const targetIds = ["#azkar", ".all", ".modern-footer"]; 
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // ضيف كلاس يظهر الخلفية
                entry.target.classList.add("show-bg"); 
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: "0px 0px 200px 0px" });

    // تشغيل المراقبة على العناصر المحددة فقط
    targetIds.forEach(id => {
        const element = document.querySelector(id);
        if (element) observer.observe(element);
    });
});