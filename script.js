/* =========================================================
   EDIT WEBSITE CONTENT HERE — MULAI DARI SINI
   =========================================================
   Ganti data di bawah sesuai kebutuhan kamu.
   Semua teks, foto, timeline, surat, lokasi, countdown,
   dan musik bisa diubah dari satu tempat ini.
   ========================================================= */

const siteData = {
  siteName: "KKN MEMORIES",
  heroTitle: "KKN MEMORIES",
  heroQuote: "Kita datang sebagai orang asing, pulang sebagai keluarga yang tidak terlupakan.",
  heroSub: "Satu perjalanan. 13 orang. Ribuan cerita yang tidak akan selesai hanya dalam satu halaman.",
  heroHandwritten: "selamat datang di album kecil kami",

  musicSrc: "assets/music/kkn-song.wav",
  musicTitle: "Lagu KKN Kita",

  reunionDate: "2026-12-31T19:00:00",

  location: {
    name: "Desa Sukamaju",
    address: "Kecamatan Sukamaju, Kabupaten Bahagia",
    date: "Juni – Juli 2025",
    mapEmbed: "https://www.google.com/maps?q=-7.797068,110.370529&z=13&output=embed"
  },

  finalText1: "KKN mungkin sudah selesai.",
  finalText2: "Tapi beberapa orang yang kita temui di perjalanan, ternyata menjadi bagian dari cerita yang ingin kita simpan selamanya.",
  finalHighlight: "13 people. 1 journey. Countless memories."
};

/* ========== DATA 13 ANGGOTA ========== */
const members = [
  {
    name: "Yehezkiel Temorubun",
    nickname: "Okan",
    photo: "assets/members/member-01.jpg.png",
    role: "Koordinator",
    quote: "Quote singkat anggota 01.",
    description: "Cerita singkat tentang anggota 01. Bisa diisi nanti.",
    instagram: "https://instagram.com/username01"
  },
  {
    name: "Meigita E. Kawulur",
    nickname: "Gita",
    photo: "assets/members/member-02.jpg.png",
    role: "Bendahara",
    quote: "Quote singkat anggota 02.",
    description: "Cerita singkat tentang anggota 02. Bisa diisi nanti.",
    instagram: "https://instagram.com/username02"
  },
  {
    name: "Estevania I. Tengker",
    nickname: "Intan",
    photo: "assets/members/member-03.jpg.png",
    role: "Sekretaris",
    quote: "Quote singkat anggota 03.",
    description: "Cerita singkat tentang anggota 03. Bisa diisi nanti.",
    instagram: "https://instagram.com/username03"
  },
  {
    name: "Walanda Raintama",
    nickname: "Wals",
    photo: "assets/members/member-04.jpg.png",
    role: "Humas",
    quote: "Quote singkat anggota 04.",
    description: "Cerita singkat tentang anggota 04. Bisa diisi nanti.",
    instagram: "https://instagram.com/username04"
  },
  {
    name: "Wasti K. Rapar",
    nickname: "Wasti",
    photo: "assets/members/member-05.jpg.png",
    role: "Humas",
    quote: "Quote singkat anggota 05.",
    description: "Cerita singkat tentang anggota 05. Bisa diisi nanti.",
    instagram: "https://instagram.com/username05"
  },
  {
    name: "Anastasia G. Bakker",
    nickname: "Tasya",
    photo: "assets/members/member-06.jpg.png",
    role: "Humas",
    quote: "Quote singkat anggota 06.",
    description: "Cerita singkat tentang anggota 06. Bisa diisi nanti.",
    instagram: "https://instagram.com/username06"
  },
  {
    name: "Mikhail Andrew Leo",
    nickname: "Leo",
    photo: "assets/members/member-07.jpg.png",
    role: "PDD",
    quote: "Quote singkat anggota 07.",
    description: "Cerita singkat tentang anggota 07. Bisa diisi nanti.",
    instagram: "https://instagram.com/username07"
  },
  {
    name: "Melissa L. Merentek",
    nickname: "Lisa",
    photo: "assets/members/member-08.jpg.png",
    role: "PDD",
    quote: "Quote singkat anggota 08.",
    description: "Cerita singkat tentang anggota 08. Bisa diisi nanti.",
    instagram: "https://instagram.com/username08"
  },
  {
    name: "Michaela F.J. Lendo",
    nickname: "Mika",
    photo: "assets/members/member-09.jpg.png",
    role: "PDD",
    quote: "Quote singkat anggota 09.",
    description: "Cerita singkat tentang anggota 09. Bisa diisi nanti.",
    instagram: "https://instagram.com/username09"
  },
  {
    name: "Leonard C. Waas",
    nickname: "Clief",
    photo: "assets/members/member-10.jpg.png",
    role: "Perlengkapan",
    quote: "Quote singkat anggota 10.",
    description: "Cerita singkat tentang anggota 10. Bisa diisi nanti.",
    instagram: "https://instagram.com/username10"
  },
  {
    name: "Tesalonika L.T. Laoh",
    nickname: "Tesa",
    photo: "assets/members/member-11.jpg.png",
    role: "Acara",
    quote: "Quote singkat anggota 11.",
    description: "Cerita singkat tentang anggota 11. Bisa diisi nanti.",
    instagram: "https://instagram.com/username11"
  },
  {
    name: "Francois Y. Robo",
    nickname: "Frans",
    photo: "assets/members/member-12.jpg.png",
    role: "Perlengkapan",
    quote: "Quote singkat anggota 12.",
    description: "Cerita singkat tentang anggota 12. Bisa diisi nanti.",
    instagram: "https://instagram.com/username12"
  },
  {
    name: "Adelheit Rumondor",
    nickname: "Adel",
    photo: "assets/members/member-13.jpg.png",
    role: "Acara",
    quote: "Quote singkat anggota 13.",
    description: "Cerita singkat tentang anggota 13. Bisa diisi nanti.",
    instagram: "https://instagram.com/username13"
  }
];

/* ========== DATA GALLERY ========== */
const memories = [
  {
    src: "assets/memories/photo-01.jpg.svg",
    caption: "Foto pertama sebelum tahu drama yang menanti.",
    category: "Random",
    date: "Day 01"
  },
  {
    src: "assets/memories/photo-02.jpg.svg",
    caption: "Makan bareng pertama, masih sopan.",
    category: "Makan",
    date: "Day 03"
  },
  {
    src: "assets/memories/photo-03.jpg.svg",
    caption: "Rapat malam berubah jadi konser dadakan.",
    category: "Malam",
    date: "Day 07"
  },
  {
    src: "assets/memories/photo-04.jpg.svg",
    caption: "Kerja bakti sambil foto tidak jelas.",
    category: "Kegiatan",
    date: "Day 10"
  },
  {
    src: "assets/memories/photo-05.jpg.svg",
    caption: "Perjalanan ke pasar, nyasar tapi seru.",
    category: "Jalan-jalan",
    date: "Day 14"
  },
  {
    src: "assets/memories/photo-06.jpg.svg",
    caption: "Momen konyol yang tidak boleh dilupakan.",
    category: "Funny Moments",
    date: "Day 17"
  },
  {
    src: "assets/memories/photo-07.jpg.svg",
    caption: "Mie instan jam 11 malam, selalu juara.",
    category: "Makan",
    date: "Day 20"
  },
  {
    src: "assets/memories/photo-08.jpg.svg",
    caption: "Langit senja di hari terakhir.",
    category: "Last Day",
    date: "Last Day"
  },
  {
    src: "assets/memories/photo-09.jpg.svg",
    caption: "Kejar-kejaran hujan di lapangan.",
    category: "Random",
    date: "Day 05"
  },
  {
    src: "assets/memories/photo-10.jpg.svg",
    caption: "Acara desa dan kami yang ikut panik.",
    category: "Kegiatan",
    date: "Day 12"
  },
  {
    src: "assets/memories/photo-11.jpg.svg",
    caption: "Jalan-jalan sore mencari es kelapa.",
    category: "Jalan-jalan",
    date: "Day 16"
  },
  {
    src: "assets/memories/photo-12.jpg.svg",
    caption: "Foto terakhir sebelum koper ditutup.",
    category: "Last Day",
    date: "Last Day"
  }
];

/* ========== FUNNY MOMENTS ========== */
const funnyMoments = [
  {
    title: "Rapat 10 menit",
    text: "Rapat 10 menit berubah menjadi sesi ngobrol 2 jam. Agendanya cuma satu, tapi ceritanya sampai tiga generasi.",
    people: "Semua anggota"
  },
  {
    title: "Abis makan dikejar anjing",
    text: "lagi santai,ngobrol dengan perut kenyang bukan nya jalan pelan pelan malah lari dikejar anjing.",
    people: "Clief,Okan,Leo,Frans"
  },
  {
    title: "Hp Rusak gara gara kecebur",
    text: "jalan jalan ke mata air,yang harus nya happy malah sedih gara gara hp mati",
    people: "Lisa"
  },
  {
    title: "Naik Mobil Pick up kondisi hujan",
    text: "Lagi happy karena mau ke soputan,masalah utamanya adalah Hujan dengan mobil terbuka,Akhirnya ditutupin pake terpal",
    people: "Semua anggota"
  }
];

/* ========== TIMELINE ========== */
const timeline = [
  {
    day: "DAY 01",
    title: "First Meeting",
    text: "Duduk rapi, senyum malu-malu,dan Semua masih jaim."
  },
  {
    day: "DAY 03",
    title: "Mulai Adaptasi",
    text: "Mulai berani komentar kecil, bawa camilan, dan lupa pakai bahasa formal."
  },
  {
    day: "DAY 07",
    title: "Mulai Kompak",
    text: "Kerja bareng mulai lancar, inside jokes mulai bermunculan."
  },
  {
    day: "DAY 14",
    title: "Cerita Makin Banyak",
    text: "Makan bareng, lembur bareng, dan curhat sampai lupa waktu."
  },
  {
    day: "DAY 21",
    title: "Mulai Terasa Seperti Rumah",
    text: "Pulang ke posko rasanya seperti pulang ke rumah sendiri."
  },
  {
    day: "LAST DAY",
    title: "\"Wait... sudah selesai?\"",
    text: "Koper di depan pintu, tapi tidak ada yang mau duluan pamit."
  }
];

/* ========== LETTERS ========== */
const letters = [
  {
    to: "Untuk kalian",
    from: "",
    date: "Last Day",
    content: "Dulu aku takut tidak nyambung. Sekarang? Aku malah takut kehilangan kalian.",
    signature: "Miss you guys"
  },
  {
    to: "Untuk kalian",
    from: "",
    date: "Last Day",
    content: "KKN cuma sebentar, tapi ketawa kita bisa bertahan lama.",
    signature: "Sampai jumpa"
  },
  {
    to: "Untuk kalian",
    from: "",
    date: "Last Day",
    content: "Aku tidak akan lupa malam-malam kita yang lebih banyak cerita daripada tidurnya.",
    signature: "Happy"
  },
  {
    to: "Untuk kalian",
    from: "",
    date: "Last Day",
    content: "Terima kasih sudah jadi tempat pulang selama KKN.",
    signature: "Tetap bahagia"
  },
  {
    to: "Untuk kalian",
    from: "",
    date: "",
    content: "Kita datang sebagai orang asing. Pulangnya sebagai keluarga.",
    signature: "Hugs"
  },
  {
    to: "Untuk kalian",
    from: "",
    date: "Last Day",
    content: "Semua makanan terasa lebih enak karena dimakan bareng-bareng.",
    signature: "Sampai ketemu lagi"
  },
  {
    to: "Untuk kalian",
    from: "",
    date: "Last Day",
    content: "Ada banyak cerita yang tidak sempat difoto. Tapi semuanya terekam di sini.",
    signature: "Jangan lupa aku"
  },
  {
    to: "Untuk kalian",
    from: "",
    date: "Last Day",
    content: "Terima kasih sudah menerima segala hal yang terjadi meskipun bikin kesel",
    signature: "Salam hangat"
  },
  {
    to: "Untuk kalian",
    from: "",
    date: "Last Day",
    content: "Jika bisa mengulang, aku tetap pilih kalian. Tapi mungkin tidak kuat sama capeknya.",
    signature: "Hugs"
  },
  {
    to: "Untuk kalian",
    from: "",
    date: "Last Day",
    content: "Aku tidak tahu kapan kita bisa kumpul lagi. Tapi aku akan selalu simpan cerita ini.",
    signature: "Sampai jumpa"
  },
  {
    to: "Untuk kalian",
    from: "",
    date: "Last Day",
    content: "Terima kasih untuk tawa, lelah, dan semua hal konyol yang kita lakukan bersama.",
    signature: "Dari aku"
  },
  {
    to: "Untuk kalian",
    from: "",
    date: "Last Day",
    content: "Kalian adalah alasan kenapa KKN terasa singkat.",
    signature: "Selalu tersenyum"
  },
  {
    to: "Untuk kalian",
    from: "",
    date: "Last Day",
    content: "Cerita ini mungkin selesai, tapi persahabatan kita tidak.",
    signature: "Sampai nanti"
  }
];

/* ========== DUMMY GUESTBOOK ========== */
const guestbookDefaults = [
  {
    name: "Admin",
    emoji: "✨",
    message: "Pesan ini bisa dihapus. Silakan tambahkan pesanmu!"
  },
  {
    name: "Teman KKN",
    emoji: "💛",
    message: "Kangen masa-masa ini."
  },
  {
    name: "Pengunjung",
    emoji: "📷",
    message: "Albumnya keren banget."
  }
];

const guestbookKey = "kkn_memories_guestbook";

/* =========================================================
   SELESAI EDIT DATA — DI BAWAH INI FUNGSI WEBSITE
   ========================================================= */

/* ---------- HELPER ---------- */
function getInitials(name) {
  const parts = name.trim().split(/\s+/);
  return parts.length > 1 ? parts[0][0] + parts[1][0] : parts[0].slice(0, 2).toUpperCase();
}

function getNoteColor(index) {
  const colors = ["#f4d35e", "#f1c6a2", "#f9dce4", "#c9e3e8", "#dfe6cd"];
  return colors[index % colors.length];
}

/* ---------- RENDER MEMBERS ---------- */
function renderMembers() {
  const grid = document.getElementById("membersGrid");
  if (!grid) return;
  grid.innerHTML = members.map((m, i) => {
    const initials = getInitials(m.name);
    return `
      <article class="member-card" data-index="${i}" tabindex="0" role="button" aria-label="Buka detail ${m.name}">
        <div class="polaroid member-polaroid">
          <div class="member-photo">
            <img src="${m.photo}" alt="Foto ${m.name}" loading="lazy" onerror="this.style.display='none'; this.parentElement.classList.add('img-missing');" />
            <span class="member-initials">${initials}</span>
          </div>
          <div class="member-info">
            <h3>${m.name}</h3>
            <p class="nickname">${m.nickname ? '"' + m.nickname + '"' : ''}</p>
            <span class="role">${m.role}</span>
          </div>
          <span class="tape tape-top-left"></span>
        </div>
      </article>
    `;
  }).join('');
}

/* ---------- RENDER FILTER & GALLERY ---------- */
function getUniqueCategories() {
  return ["All", ...new Set(memories.map(m => m.category))];
}

function renderFilterButtons() {
  const container = document.getElementById("filterContainer");
  if (!container) return;
  const categories = getUniqueCategories();
  container.innerHTML = categories.map(cat =>
    `<button class="filter-btn ${cat === "All" ? "active" : ""}" data-filter="${cat}">${cat}</button>`
  ).join('');
}

function renderMemories(filter = "All") {
  const grid = document.getElementById("memoriesGrid");
  if (!grid) return;
  const filtered = filter === "All" ? memories : memories.filter(m => m.category === filter);
  grid.innerHTML = filtered.map((photo, idx) => {
    const globalIndex = memories.indexOf(photo);
    return `
      <article class="memory-item" data-index="${globalIndex}" tabindex="0" role="button" aria-label="Buka foto ${photo.caption}">
        <div class="polaroid memory-polaroid">
          <div class="memory-photo">
            <img src="${photo.src}" alt="${photo.caption}" loading="lazy" onerror="this.style.display='none'; this.parentElement.classList.add('img-missing');" />
            <span class="memory-placeholder">📷</span>
          </div>
          <div class="memory-caption">${photo.caption}</div>
          ${photo.date ? `<time class="memory-date">${photo.date}</time>` : ''}
          <span class="tape tape-top-right"></span>
        </div>
      </article>
    `;
  }).join('');
}

/* ---------- RENDER FUNNY MOMENTS ---------- */
function renderFunnyMoments() {
  const container = document.getElementById("funnyGrid");
  if (!container) return;
  container.innerHTML = funnyMoments.map(item => `
    <article class="funny-card reveal">
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <p class="funny-people">${item.people}</p>
    </article>
  `).join('');
}

/* ---------- RENDER TIMELINE ---------- */
function renderTimeline() {
  const container = document.getElementById("timeline");
  if (!container) return;
  container.innerHTML = timeline.map(item => `
    <div class="timeline-item reveal">
      <div class="timeline-day">${item.day}</div>
      <div class="timeline-title">${item.title}</div>
      <p class="timeline-text">${item.text}</p>
    </div>
  `).join('');
}

/* ---------- RENDER LETTERS ---------- */
function renderLetters() {
  const container = document.getElementById("lettersGrid");
  if (!container) return;
  container.innerHTML = letters.map((letter, i) => `
    <article class="letter-card reveal" data-index="${i}" tabindex="0" role="button" aria-label="Buka surat ${letter.to}">
      <h3>${letter.to}</h3>
      <p class="letter-from">${letter.from}</p>
    </article>
  `).join('');
}

/* ---------- MODALS: MEMBER & LETTER ---------- */
function openMemberModal(index) {
  const m = members[index];
  if (!m) return;
  const modal = document.getElementById("memberModal");
  modal.querySelector("#modalMemberName").textContent = m.name;
  modal.querySelector("#modalMemberNickname").textContent = m.nickname ? `"${m.nickname}"` : "";
  modal.querySelector("#modalMemberRole").textContent = m.role;
  modal.querySelector("#modalMemberDescription").textContent = m.description || "";
  modal.querySelector("#modalMemberQuote").textContent = m.quote ? `“${m.quote}”` : "";
  modal.querySelector("#modalMemberInstagram").href = m.instagram || "#";
  modal.querySelector("#modalMemberInstagram").style.display = m.instagram ? "inline-block" : "none";
  const img = modal.querySelector("#modalMemberImg");
  img.src = m.photo;
  img.alt = `Foto ${m.name}`;
  img.style.display = "block";
  img.parentElement.classList.remove("img-missing");
  modal.querySelector("#modalMemberInitials").textContent = getInitials(m.name);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close").focus();
}

function closeMemberModal() {
  const modal = document.getElementById("memberModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function openLetterModal(index) {
  const letter = letters[index];
  if (!letter) return;
  const modal = document.getElementById("letterModal");
  modal.querySelector("#letterModalTo").textContent = letter.to;
  modal.querySelector("#letterModalDate").textContent = letter.date || "";
  modal.querySelector("#letterModalContent").textContent = letter.content;
  modal.querySelector("#letterModalSignature").textContent = letter.signature || "";
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close").focus();
}

function closeLetterModal() {
  const modal = document.getElementById("letterModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/* ---------- LIGHTBOX ---------- */
let currentMemoryIndex = 0;

function openLightbox(index) {
  currentMemoryIndex = index;
  const photo = memories[index];
  if (!photo) return;
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImage");
  img.src = photo.src;
  img.alt = photo.caption;
  document.getElementById("lightboxCaption").textContent = photo.caption;
  document.getElementById("lightboxDate").textContent = photo.date || "";
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function nextMemory() {
  openLightbox((currentMemoryIndex + 1) % memories.length);
}

function prevMemory() {
  openLightbox((currentMemoryIndex - 1 + memories.length) % memories.length);
}

/* ---------- GUESTBOOK ---------- */
function getGuestbook() {
  const saved = localStorage.getItem(guestbookKey);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return [...guestbookDefaults];
    }
  }
  return [...guestbookDefaults];
}

function setGuestbook(messages) {
  localStorage.setItem(guestbookKey, JSON.stringify(messages));
}

function renderGuestbook() {
  const board = document.getElementById("guestbookBoard");
  if (!board) return;
  const messages = getGuestbook();
  board.innerHTML = messages.map((msg, i) => `
    <div class="sticky-note" style="--note-rotate: ${(i % 5 - 2) * 2}deg; background: ${getNoteColor(i)};">
      <button class="delete-note" data-index="${i}" aria-label="Hapus pesan">×</button>
      <p class="note-name">${msg.name}</p>
      <p class="note-message">${msg.message}</p>
      <p class="note-emoji">${msg.emoji || '✨'}</p>
    </div>
  `).join('');
}

/* ---------- COUNTDOWN ---------- */
function startCountdown() {
  const target = new Date(siteData.reunionDate).getTime();
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const messageEl = document.getElementById("countdownMessage");

  function update() {
    const now = Date.now();
    const diff = target - now;
    if (diff <= 0) {
      if (daysEl) daysEl.textContent = "00";
      if (hoursEl) hoursEl.textContent = "00";
      if (minutesEl) minutesEl.textContent = "00";
      if (secondsEl) secondsEl.textContent = "00";
      if (messageEl) messageEl.textContent = "Maybe it's time to make another memory.";
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0");
    if (messageEl) messageEl.textContent = "";
  }

  update();
  setInterval(update, 1000);
}

/* ---------- MUSIC PLAYER ---------- */
function initMusicPlayer() {
  const audio = new Audio(siteData.musicSrc);
  audio.preload = "metadata";
  const toggle = document.getElementById("musicToggle");
  const icon = document.getElementById("musicIcon");
  const title = document.getElementById("musicTitle");
  const progress = document.getElementById("musicProgressBar");
  const progressContainer = document.getElementById("musicProgress");
  const volumeSlider = document.getElementById("volumeSlider");

  if (title) title.textContent = siteData.musicTitle;
  if (volumeSlider) volumeSlider.value = audio.volume;

  let isPlaying = false;

  function updateIcon() {
    icon.className = isPlaying ? "fa-solid fa-pause" : "fa-solid fa-play";
  }

  function play() {
    audio.play().then(() => {
      isPlaying = true;
      updateIcon();
    }).catch(err => {
      console.warn("Autoplay diblokir atau file musik belum tersedia:", err);
    });
  }

  function pause() {
    audio.pause();
    isPlaying = false;
    updateIcon();
  }

  toggle.addEventListener("click", () => {
    if (isPlaying) pause();
    else play();
  });

  toggle.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (isPlaying) pause();
      else play();
    }
  });

  audio.addEventListener("timeupdate", () => {
    if (!audio.duration) return;
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${percent}%`;
  });

  progressContainer.addEventListener("click", (e) => {
    if (!audio.duration) return;
    const rect = progressContainer.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * audio.duration;
  });

  volumeSlider.addEventListener("input", () => {
    audio.volume = parseFloat(volumeSlider.value);
  });

  audio.addEventListener("ended", () => {
    isPlaying = false;
    updateIcon();
    audio.currentTime = 0;
  });
}

/* ---------- NAVIGATION ---------- */
function initNavigation() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
  });

  menu.addEventListener("click", (e) => {
    if (e.target.closest(".nav-link")) {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Buka menu");
    }
  });

  document.querySelectorAll('.nav-link, a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href !== "#") {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
}

/* ---------- SCROLL REVEAL ---------- */
function initScrollReveal() {
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  revealEls.forEach(el => observer.observe(el));
}

/* ---------- EVENT DELEGATION ---------- */
function initEvents() {
  // Buka kenangan button
  const openBtn = document.getElementById("openMemoriesBtn");
  if (openBtn) {
    openBtn.addEventListener("click", () => {
      document.getElementById("story").scrollIntoView({ behavior: "smooth" });
    });
  }

  // Back to top
  const backBtn = document.getElementById("backToTop");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Members grid
  const membersGrid = document.getElementById("membersGrid");
  if (membersGrid) {
    membersGrid.addEventListener("click", (e) => {
      const card = e.target.closest(".member-card");
      if (card) openMemberModal(parseInt(card.dataset.index));
    });
    membersGrid.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const card = e.target.closest(".member-card");
        if (card) {
          e.preventDefault();
          openMemberModal(parseInt(card.dataset.index));
        }
      }
    });
  }

  // Modal member close
  const memberModal = document.getElementById("memberModal");
  memberModal.addEventListener("click", (e) => {
    if (e.target.closest("[data-close-modal]")) closeMemberModal();
  });

  // Filter container
  const filterContainer = document.getElementById("filterContainer");
  if (filterContainer) {
    filterContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (btn) {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderMemories(btn.dataset.filter);
      }
    });
  }

  // Memories grid
  const memoriesGrid = document.getElementById("memoriesGrid");
  if (memoriesGrid) {
    memoriesGrid.addEventListener("click", (e) => {
      const item = e.target.closest(".memory-item");
      if (item) openLightbox(parseInt(item.dataset.index));
    });
    memoriesGrid.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const item = e.target.closest(".memory-item");
        if (item) {
          e.preventDefault();
          openLightbox(parseInt(item.dataset.index));
        }
      }
    });
  }

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", prevMemory);
  document.getElementById("lightboxNext").addEventListener("click", nextMemory);

  // Letters grid
  const lettersGrid = document.getElementById("lettersGrid");
  if (lettersGrid) {
    lettersGrid.addEventListener("click", (e) => {
      const card = e.target.closest(".letter-card");
      if (card) openLetterModal(parseInt(card.dataset.index));
    });
    lettersGrid.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const card = e.target.closest(".letter-card");
        if (card) {
          e.preventDefault();
          openLetterModal(parseInt(card.dataset.index));
        }
      }
    });
  }

  // Letter modal close
  const letterModal = document.getElementById("letterModal");
  letterModal.addEventListener("click", (e) => {
    if (e.target.closest("[data-close-letter]")) closeLetterModal();
  });

  // Close modals with ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMemberModal();
      closeLetterModal();
      closeLightbox();
    }
  });

  // Guestbook form
  const form = document.getElementById("guestbookForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("guestName").value.trim();
      const message = document.getElementById("guestMessage").value.trim();
      const emoji = document.getElementById("guestEmoji").value.trim() || "✨";
      if (!name || !message) return;
      const messages = getGuestbook();
      messages.push({ name, message, emoji });
      setGuestbook(messages);
      renderGuestbook();
      form.reset();
    });
  }

  // Guestbook delete
  const board = document.getElementById("guestbookBoard");
  if (board) {
    board.addEventListener("click", (e) => {
      const del = e.target.closest(".delete-note");
      if (del) {
        const index = parseInt(del.dataset.index);
        const messages = getGuestbook();
        messages.splice(index, 1);
        setGuestbook(messages);
        renderGuestbook();
      }
    });
  }
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderMembers();
  renderFilterButtons();
  renderMemories();
  renderFunnyMoments();
  renderTimeline();
  renderLetters();
  renderGuestbook();
  startCountdown();
  initMusicPlayer();
  initNavigation();
  initScrollReveal();
  initEvents();

  // Set dynamic location
  if (document.getElementById("locationName")) {
    document.getElementById("locationName").textContent = siteData.location.name;
  }
  if (document.getElementById("locationAddress")) {
    document.getElementById("locationAddress").textContent = siteData.location.address;
  }
  if (document.getElementById("locationDate")) {
    document.getElementById("locationDate").textContent = siteData.location.date;
  }
  if (document.getElementById("locationMap")) {
    document.getElementById("locationMap").src = siteData.location.mapEmbed;
  }
});
