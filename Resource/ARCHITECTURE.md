# 🏗️ خطة أركتكتشر البورتفوليو — Zead Helal

## 1) اللي راجعته في البورتفوليو الحالي

فتحت الملف اللي بعتهولي (`task_3.zip`) ولقيت مشروع Visual Studio فيه:

- `HTMLPage1.html` — صفحة واحدة فيها كل حاجة: Header, Hero, About, Skills & Tools, Beyond the Code (soft skills), Projects (ومعاها أزرار فلترة), Hobbies, Contact, Footer.
- `StyleSheet1.css` — تصميم متكامل ومنظم فعلاً: ألوان محددة بمتغيرات CSS (`--primary`, `--secondary`...)، تايبوجرافي مظبوط (Playfair Display / Source Serif 4 / Work Sans)، وresponsive على مقاسين (900px و640px).
- صورتك الشخصية (`zead-photo.jpeg`).
- **مفيش أي ملف JavaScript خالص.**

يعني التصميم والشكل تمام ومش هلمسه أبدًا — هو ده اللي هيفضل بالظبط زي ما هو. بس فيه 3 مشاكل حقيقية الأركتكتشر الجديد هيحلها:

1. **زرار منيو الموبايل وأزرار فلترة المشاريع (All / Full Stack / Frontend...) موجودين في الـ HTML والـ CSS بس مش شغالين خالص** — محتاجين JS يشغّلهم، وده مش موجود حاليًا.
2. **بياناتك الشخصية (الإيميل، التليفون، لينكدإن، جيت هاب) متكررة 3 مرات** في الصفحة (كارت الـ About، قسم Contact، الـ Footer). لو غيرت رقم تليفونك مثلاً، هتحتاج تدور وتعدل في 3 أماكن.
3. **أي إضافة (مشروع جديد، مهارة جديدة) محتاجة copy-paste لبلوك HTML كامل** جوه ملف ضخم واحد — وده بالظبط اللي عاوز نتجنبه.

كمان حاجتين عمليين مهمين:
- اسم الملف `HTMLPage1.html` لازم يتغير لـ `index.html` — الاستضافات زي Vercel بتدوّر على `index.html` بالتحديد عشان تعرضه كصفحة رئيسية، أي اسم تاني ملهوش نفس المعاملة تلقائيًا.
- فولدر المشروع اسمه `task 3` وفيه مسافة — أنصح تسميه حاجة زي `zead-portfolio` قبل الرفع على GitHub.

---

## 2) المبادئ اللي الأركتكتشر مبني عليها

- **فصل البيانات عن الشكل عن السلوك** — المحتوى في ملفات بيانات، الشكل في CSS، السلوك (العرض/التفاعل) في JS. كل واحد يتعدل لوحده من غير ما يأثر على التاني.
- **Data-driven** — أي قسم فيه عناصر بتتكرر (مشاريع، مهارات، كورسات، إنجازات، هوايات) = مصفوفة بيانات واحدة + دالة واحدة بترسمها. تضيف عنصر = تزود سطر في المصفوفة، مش تكتب HTML جديد.
- **Open/Closed** — تقدر تزوّد محتوى جديد من غير ما تلمس أو تكسر اللي شغال قبل كده.
- **DRY (منع التكرار)** — بياناتك الشخصية تتكتب مرة واحدة بس، وتتوزع تلقائي على الأماكن التلاتة.
- **بساطة (KISS/YAGNI)** — HTML/CSS/JS عادي زي ما طلبت بالظبط، من غير framework ولا build tool. ومش كل حاجة لازم تبقى ديناميكية: اسمك في الهيدر مثلاً هيفضل مكتوب ثابت زي ما هو، لأنه مش عنصر بيتكرر في قائمة ولا بيتغير.

---

## 3) هيكل الملفات المقترح

```
zead-portfolio/
├── index.html
├── README.md
├── ARCHITECTURE.md
│
├── assets/
│   ├── images/
│   │   ├── profile/          → صورتك
│   │   ├── projects/         → سكرين شوت لكل مشروع (اختياري)
│   │   ├── courses/          → شهادات الكورسات (اختياري)
│   │   └── achievements/     → صور الهاكاثونات والجوايز
│   └── qr/                   → هنا هيتحط QR code بعد الرفع على Vercel
│
├── css/
│   ├── base.css              → :root variables + reset + عناصر مشتركة (.btn, .wrap, .section-title, .rule...)
│   ├── nav.css
│   ├── hero.css
│   ├── about.css
│   ├── skills.css
│   ├── soft-skills.css
│   ├── projects.css
│   ├── courses.css           ← جديد
│   ├── achievements.css      ← جديد
│   ├── hobbies.css
│   ├── contact.css
│   ├── footer.css
│   └── responsive.css        → كل الـ @media query في مكان واحد بس
│
└── js/
    ├── data/                 → محتوى بس، صفر منطق جواه
    │   ├── profile.js
    │   ├── skills.js
    │   ├── softSkills.js
    │   ├── projects.js
    │   ├── courses.js        ← جديد
    │   ├── achievements.js   ← جديد
    │   └── hobbies.js
    │
    ├── components/           → كل ملف بيرسم قسم واحد بس من الـ HTML
    │   ├── renderContactInfo.js
    │   ├── renderSkills.js
    │   ├── renderSoftSkills.js
    │   ├── renderProjects.js
    │   ├── renderCourses.js      ← جديد
    │   ├── renderAchievements.js ← جديد
    │   └── renderHobbies.js
    │
    └── main.js                → بيشغّل كل حاجة لما الصفحة تفتح + منيو الموبايل + فلترة المشاريع
```

---

## 4) شرح كل جزء

**`index.html`**
الهيكل العام بس: Header, Hero, About (النص الثابت)، وحاويات `<div id="...">` فاضية للأقسام الديناميكية. هيتضاف فيه كمان meta description و Open Graph tags بسيطة، عشان لما تشارك اللينك في واتساب أو لينكدإن يظهر بريفيو حلو (اسمك وصورتك) بدل ما يظهر كلينك عادي.

**`css/*`**
كل قسم في ملفه الخاص، متحمّلين بعلامات `<link>` منفصلة بترتيب واضح في الـ `<head>`. الألوان والخطوط الموجودة عندك دلوقتي هتفضل زي ما هي بالظبط في `base.css`.

**`js/data/*`**
ملفات بيانات فقط (arrays / objects)، صفر function جواها. دي أكتر الأماكن اللي هتفتحها بمرور الوقت.

| الملف | الحقول |
|---|---|
| `profile.js` | name, title, tagline, location, education, role, email, phone, linkedin, github |
| `skills.js` | languages[], fields[], tools[] |
| `softSkills.js` | `[{ title, description }]` |
| `projects.js` | `[{ title, category, description, image?, githubLink?, liveLink? }]` |
| `courses.js` | `[{ title, provider, date, certificateImage?, certificateLink? }]` |
| `achievements.js` | `[{ title, date, description, image?, link? }]` |
| `hobbies.js` | `[{ emoji, label }]` |

(الحقول اللي عليها `?` اختيارية — الدالة اللي بترسم بتتأكد إنها موجودة قبل ما تعرضها، فمش لازم تملاها كلها كل مرة.)

**`js/components/*`**
كل ملف فيه دالة واحدة بس، بتاخد array البيانات + الـ container بتاعها، وتطلّع الـ HTML جواه. مفيش أي بيانات مكتوبة جوه الملفات دي — لو غيرت بياناتك في `data/`، الشكل هنا هيتحدث لوحده.

**`js/main.js`**
الملف الوحيد اللي بيجمع كل حاجة: بيستدعي كل دالة render لما الصفحة تفتح، وفيه أي سلوك عام مش خاص بقسم معين — زي فتح/قفل منيو الموبايل، والـ logic بتاع فلترة المشاريع.

---

## 5) مثال عملي — إضافة إنك كسبت هاكاثون بعد شهر

كل اللي هتعمله: تفتح `js/data/achievements.js` وتزوّد عنصر جديد في المصفوفة:

```js
// js/data/achievements.js
const achievementsData = [
  {
    title: "المركز الأول — [اسم الهاكاثون]",
    date: "سبتمبر 2026",
    description: "وصف قصير للمشروع وليه كسب.",
    image: "assets/images/achievements/hackathon-sep2026.jpg", // اختياري
    link: "" // اختياري
  }
];
```

تحفظ، تعمل رفرش — الكارت هيظهر تلقائي في قسم Achievements بنفس شكل باقي الكروت. مش هتفتح HTML ولا CSS خالص.

نفس المنطق بالظبط لو عاوز تضيف مشروع جديد (`projects.js`)، كورس جديد (`courses.js`)، أو مهارة جديدة (`skills.js`).

---

## 6) الأقسام الجديدة اللي هتتضاف

مش موجودين في النسخة الحالية:

- **Courses & Certifications** — قسم منفصل عن Projects، مخصوص للكورسات والشهادات.
- **Achievements & Awards** — قسم جديد للهاكاثونات والمسابقات اللي هتكسبها.

هيتضافوا في الـ nav كمان بعد Projects:
`About · Skills · Projects · Courses · Achievements · Hobbies · Contact`

(دي افتراضات مبدئية مني — لو حابب تدمج Courses مع Achievements في قسم واحد بدل ما يكونوا منفصلين، قولّي وهغيّرها بسهولة قبل ما نبدأ نبني.)

---

## 7) الرفع على Vercel + الـ QR

المشروع كله HTML/CSS/JS عادي من غير أي build step، فالرفع على Vercel هيبقى مباشر: تربط الـ GitHub repo، تختار "Other" كـ framework preset، من غير أي build command. بعد ما ياخد لينك شغال، تعمل QR code بيه (فيه مواقع مجانية كتير لده) وتحطه في `assets/qr/`. الأركتكتشر مش محتاج أي تعديل عشان الجزء ده.

---

## 8) خطوات الشغل الجاية

هنشتغل فولدر ورا فولدر زي المتفق عليه:

1. `assets/` + `css/base.css` — الأساسيات والتوكنز (الألوان والخطوط الحالية)
2. باقي `css/*` — كل قسم في ملفه
3. `js/data/*` — نقل بياناتك الحالية للملفات الجديدة + الحقول الإضافية
4. `js/components/*` — دوال الرسم
5. `js/main.js` + تحديث `index.html` — الحاويات والربط النهائي
6. تجربة ومراجعة نهائية (المنيو، الفلترة، الـ responsive)

مش هنعدي لفولدر جديد غير لما تقولي "تمام كمل".
