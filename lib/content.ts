export const event = {
  name: "Anugerah Prestasi Cemerlang 2026",
  short: "APC 2026",
  theme: "Kompetensi Memacu Prestasi",
  organizer: "Jabatan Penerangan Malaysia",
  ministry: "Kementerian Komunikasi",
  dateLabel: "30 November 2026",
  dateIso: "2026-11-30",
  venue: "PICC",
  venueFull: "Putrajaya International Convention Centre (PICC)",
  venueAddress: "Presint 5, 62000 Putrajaya",
  status: "Menjelang majlis",
} as const;

export const contact = {
  address: [
    "Aras 5, 9–16 dan 18",
    "Kompleks Kementerian Komunikasi",
    "Lot 4G9, Persiaran Perdana, Presint 4",
    "Pusat Pentadbiran Kerajaan Persekutuan",
    "62100 Putrajaya, Malaysia",
  ],
  phone: "+603-8911 3440",
  phoneHref: "tel:+60389113440",
  fax: "+603-8911 7599",
  email: "webmaster@inform.gov.my",
  portal: "https://www.penerangan.gov.my",
  directory: "https://direktori.penerangan.gov.my/direktori/contact.php",
  privacy: "https://www.penerangan.gov.my/dasar-privasi/",
  security: "https://www.penerangan.gov.my/dasar-keselamatan/",
  picc: "https://www.picc.com.my",
} as const;

export const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/JabatanPeneranganMalaysia",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/japenmalaysia/",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCuVoIQqgN9vEAdiBmOyULdA",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@japentv",
  },
  {
    label: "X",
    href: "https://twitter.com/JPenerangan",
  },
] as const;

export const nav = [
  { href: "/#utama", label: "Utama" },
  { href: "/#mengenai", label: "Mengenai" },
  { href: "/#kategori", label: "Kategori" },
  { href: "/#garis-panduan", label: "Garis Panduan" },
  { href: "/#soalan", label: "Soalan Lazim" },
  { href: "/#hubungi", label: "Hubungi Kami" },
] as const;

export const objectives = [
  {
    title: "Mengiktiraf pekerja cemerlang",
    text: "Memberi pengiktirafan yang jelas kepada warga yang menunaikan tugas melebihi jangkaan biasa.",
  },
  {
    title: "Menggalakkan budaya berdaya saing",
    text: "Membuka ruang untuk setiap warga mengukur mutu kerja sendiri dan belajar daripada rakan sejawat.",
  },
  {
    title: "Memperkasakan integriti",
    text: "Menegaskan bahawa prestasi hanya bermakna apabila disertai disiplin, ketelusan dan amanah.",
  },
  {
    title: "Meningkatkan kecekapan penyampaian perkhidmatan",
    text: "Menghargai cara kerja yang mempercepat, memudahkan dan memperjelas perkhidmatan kepada rakyat.",
  },
  {
    title: "Menggalakkan perkongsian ilmu dan amalan terbaik",
    text: "Menjadikan kejayaan seseorang atau sesebuah pasukan sebagai rujukan yang boleh diulang.",
  },
] as const;

export type Category = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  points: string[];
  icon: "crown" | "trend" | "handshake" | "heart" | "spark" | "medal";
  span: string;
};

export const categories: Category[] = [
  {
    id: "pekerja-terbaik",
    title: "Pekerja Terbaik Tahun 2026",
    summary:
      "Pengiktirafan tertinggi bagi warga yang menampilkan prestasi menyeluruh, konsisten dan menjadi teladan sepanjang tahun.",
    detail:
      "Kategori ini melihat keseluruhan sumbangan, bukan satu projek semata-mata. Panel mencari warga yang menjaga mutu, membantu rakan sekerja, dan mengangkat nama jabatan.",
    points: [
      "Prestasi konsisten merentas tugasan utama.",
      "Teladan dari segi integriti dan kerjasama.",
      "Impak yang dirasai oleh unit dan pelanggan.",
    ],
    icon: "crown",
    span: "lg:col-span-7 lg:row-span-2",
  },
  {
    id: "prestasi",
    title: "Prestasi Pekerja Terbaik",
    summary:
      "Bagi mereka yang mencatat hasil kerja melebihi jangkaan, dengan kualiti, ketepatan masa dan impak kepada organisasi.",
    detail:
      "Fokusnya ialah hasil yang boleh ditunjukkan: mutu output, penyiapan tepat masa, dan kesan kepada penyampaian maklumat.",
    points: [
      "Hasil kerja yang melebihi skop biasa.",
      "Ketepatan masa tanpa mengorbankan mutu.",
      "Bukti impak kepada unit atau pelanggan.",
    ],
    icon: "trend",
    span: "lg:col-span-5",
  },
  {
    id: "mesra",
    title: "Paling Mesra Pelanggan",
    summary:
      "Menghargai layanan yang jelas, sopan dan menyelesaikan keperluan pelanggan dengan penuh integriti.",
    detail:
      "Mesra pelanggan di sini bermaksud maklumat yang mudah difahami, respons yang hormat, dan penyelesaian yang tidak membebankan orang ramai.",
    points: [
      "Komunikasi yang jelas dan sopan.",
      "Penyelesaian aduan atau pertanyaan yang tuntas.",
      "Imej jabatan yang lebih dipercayai.",
    ],
    icon: "handshake",
    span: "lg:col-span-5",
  },
  {
    id: "masyarakat",
    title: "Anugerah Khidmat Masyarakat",
    summary:
      "Mengiktiraf sumbangan sukarela dan kerja komuniti yang memperkukuh hubungan jabatan dengan masyarakat.",
    detail:
      "Kategori ini meraikan inisiatif yang turun ke lapangan, mendengar komuniti, dan membawa maklumat kerajaan dengan cara yang dekat.",
    points: [
      "Sumbangan di luar tugasan meja semata-mata.",
      "Hubungan yang dibina bersama komuniti.",
      "Nilai khidmat yang boleh dicontohi.",
    ],
    icon: "heart",
    span: "lg:col-span-4",
  },
  {
    id: "inovasi",
    title: "Penggerak Inovasi Cemerlang",
    summary:
      "Bagi idea dan pelaksanaan baharu yang menambah baik proses, kandungan atau penyampaian maklumat.",
    detail:
      "Inovasi tidak perlu besar. Ia boleh berupa aliran kerja yang lebih ringkas, format kandungan baharu, atau cara digital yang mempercepat siaran.",
    points: [
      "Masalah yang dikenal pasti dengan jelas.",
      "Penyelesaian yang sudah dilaksanakan.",
      "Potensi untuk dikongsi ke unit lain.",
    ],
    icon: "spark",
    span: "lg:col-span-4",
  },
  {
    id: "sukan",
    title: "Anugerah Cemerlang Bidang Sukan",
    summary:
      "Menghargai kecemerlangan, disiplin dan semangat kesukanan yang mengharumkan nama jabatan.",
    detail:
      "Kategori ini mengiktiraf pencapaian sukan serta sikap yang dibawa kembali ke tempat kerja: disiplin, daya tahan dan semangat berpasukan.",
    points: [
      "Pencapaian atau komitmen sukan yang nyata.",
      "Disiplin yang konsisten.",
      "Semangat yang mengangkat nama jabatan.",
    ],
    icon: "medal",
    span: "lg:col-span-4",
  },
];

export const benefits = [
  {
    index: "01",
    title: "Pengiktirafan rasmi",
    text: "Nama anda disebut dalam majlis anjuran jabatan, di hadapan rakan sekerja dan pimpinan.",
  },
  {
    index: "02",
    title: "Platform mengetengahkan idea",
    text: "Kerja yang biasanya berlaku di belakang tabir mendapat pentas untuk difahami dan dihargai.",
  },
  {
    index: "03",
    title: "Peluang memperluaskan jaringan",
    text: "Majlis di PICC mengumpulkan warga dari pelbagai bahagian, negeri dan pasukan lapangan.",
  },
  {
    index: "04",
    title: "Perkongsian pengalaman",
    text: "Amalan yang berjaya boleh bergerak dari satu unit ke unit yang lain.",
  },
  {
    index: "05",
    title: "Pengiktirafan pencapaian pasukan",
    text: "Kecemerlangan jarang kerja seorang. Anugerah ini juga meraikan orang di sekeliling anda.",
  },
] as const;

export const steps = [
  {
    index: "01",
    title: "Senarai Nama Terpilih",
    text: "Nama calon dikemukakan melalui saluran rasmi jabatan. Hanya nama yang lengkap dan disokong ketua unit dibawa ke peringkat seterusnya.",
  },
  {
    index: "02",
    title: "Pilihan Kategori",
    text: "Setiap calon dipadankan dengan kategori yang paling tepat menggambarkan sumbangan utama, supaya perbandingan dibuat secara adil.",
  },
  {
    index: "03",
    title: "Penilaian Panel",
    text: "Panel meneliti rekod prestasi, disiplin, kehadiran, keupayaan mengurus pelbagai tugas, potensi dan kelestarian sumbangan.",
  },
  {
    index: "04",
    title: "Pengumuman Pemenang",
    text: "Finalis diumumkan terlebih dahulu. Penerima menerima anugerah pada majlis penyampaian di PICC.",
  },
] as const;

export const criteria = [
  {
    title: "Rekod prestasi kerja",
    text: "Mutu, ketepatan masa dan hasil yang boleh ditunjukkan, bukan sekadar kesibukan.",
  },
  {
    title: "Rekod disiplin dan kehadiran",
    text: "Kepatuhan, amanah dan kehadiran yang menyokong kepercayaan pasukan.",
  },
  {
    title: "Multitasking",
    text: "Keupayaan mengurus beberapa tugasan serentak tanpa menggugurkan mutu.",
  },
  {
    title: "Potensi pengembangan",
    text: "Kesediaan belajar, membimbing orang lain dan memikul tanggungjawab yang lebih luas.",
  },
  {
    title: "Kelestarian tenaga kerja",
    text: "Sumbangan yang boleh dikekalkan, dikongsi dan tidak bergantung pada usaha sekali lalu.",
  },
] as const;

export const dates = [
  {
    label: "Pembukaan penyertaan",
    when: "1 September 2026",
    note: "Tarikh indikatif",
    text: "Penyertaan dibuka kepada warga jabatan mengikut saluran yang ditetapkan dalam arahan rasmi.",
  },
  {
    label: "Penilaian",
    when: "6–23 Oktober 2026",
    note: "Tarikh indikatif",
    text: "Panel menilai rekod dan padanan kategori. Tempoh sebenar tertakluk kepada arahan jabatan.",
  },
  {
    label: "Pengumuman finalis",
    when: "10 November 2026",
    note: "Tarikh indikatif",
    text: "Nama finalis diumumkan sebelum majlis supaya persiapan penerima dapat dibuat.",
  },
  {
    label: "Majlis penyampaian anugerah",
    when: "30 November 2026",
    note: "Tarikh majlis",
    text: "Majlis diadakan di Putrajaya International Convention Centre (PICC), Presint 5, Putrajaya.",
  },
] as const;

export const winners = [
  {
    title: "Arkib Suara Komuniti",
    organization: "Unit contoh — bukan rekod rasmi",
    category: "Penggerak Inovasi Cemerlang",
    text: "Ilustrasi sebuah pasukan yang mengumpul cerita lapangan dan mengubahnya menjadi bahan penerangan yang pendek, jelas dan mudah dikongsi.",
    tone: "from-[#3a2d14] via-[#14120e] to-black",
  },
  {
    title: "Lensaria Daerah",
    organization: "Unit contoh — bukan rekod rasmi",
    category: "Prestasi Pekerja Terbaik",
    text: "Ilustrasi kerja jurufoto daerah yang menyusun arkib gambar supaya setiap program boleh diceritakan semula dengan tepat.",
    tone: "from-[#1a2433] via-[#101216] to-black",
  },
  {
    title: "Jurnal Lapangan",
    organization: "Unit contoh — bukan rekod rasmi",
    category: "Anugerah Khidmat Masyarakat",
    text: "Ilustrasi penulis jurnal yang merekod suara komuniti dan memastikan fakta disemak sebelum disiarkan.",
    tone: "from-[#2a2218] via-[#12100e] to-black",
  },
] as const;

export const guidelines = [
  {
    title: "Siapa yang boleh dinamakan",
    text: "Warga Jabatan Penerangan Malaysia. Penamaan dibuat melalui ketua unit, bukan sebagai pendaftaran awam.",
  },
  {
    title: "Bayaran",
    text: "Tiada bayaran penyertaan dipaparkan bagi anugerah dalaman ini. Jika arahan rasmi menyebut perkara lain, arahan itu yang dipakai.",
  },
  {
    title: "Dokumen yang membantu panel",
    text: "Rekod prestasi, rekod disiplin dan kehadiran, serta ringkasan sumbangan. Senarai muktamad tertakluk kepada pekeliling jabatan.",
  },
  {
    title: "Pilihan kategori",
    text: "Enam kategori dipaparkan di laman ini. Padankan calon dengan satu kategori yang paling hampir dengan sumbangan utama.",
  },
  {
    title: "Jika ringkasan ini berbeza",
    text: "Laman ini ialah panduan paparan. Pekeliling dan arahan rasmi Jabatan Penerangan Malaysia mengatasi mana-mana ayat di sini.",
  },
] as const;

export const faqs = [
  {
    q: "Siapakah peserta?",
    a: "Peserta ialah warga Jabatan Penerangan Malaysia. Anugerah ini mengiktiraf anggota perkhidmatan di jabatan, termasuk pasukan yang menyokong penyampaian maklumat kepada rakyat. Ia bukan pertandingan terbuka kepada orang awam.",
  },
  {
    q: "Adakah penyertaan dikenakan bayaran?",
    a: "Tiada bayaran dipaparkan. Anugerah ini dianjurkan secara dalaman oleh jabatan. Sebarang arahan bertulis yang dikeluarkan kemudian akan menjadi rujukan muktamad.",
  },
  {
    q: "Berapa kategori yang boleh disertai?",
    a: "Laman ini memaparkan enam kategori. Bagi paparan ini, seorang calon dipadankan dengan satu kategori yang paling tepat. Bilangan sebenar, jika berbeza, tertakluk kepada arahan rasmi jabatan.",
  },
  {
    q: "Apakah kelayakan yang diperlukan?",
    a: "Panel melihat rekod prestasi kerja, rekod disiplin dan kehadiran, keupayaan mengurus pelbagai tugas, potensi pengembangan, dan kelestarian sumbangan. Butiran dokumen ditetapkan oleh jabatan.",
  },
  {
    q: "Bagaimanakah proses penilaian dijalankan?",
    a: "Empat peringkat dipaparkan: senarai nama terpilih, pilihan kategori, penilaian panel, kemudian pengumuman pemenang pada majlis. Panel tidak menggunakan undian terbuka di laman ini.",
  },
] as const;

/**
 * Nama dan jawatan disalin daripada direktori awam Jabatan Penerangan Malaysia
 * (Bahagian Media Siber serta Bahagian Media dan Komunikasi Korporat).
 * Nombor telefon dan e-mel peribadi pegawai tidak dipaparkan.
 * Ini bukan senarai penerima anugerah.
 */
export const directorySample = [
  {
    name: "CHUA HIN CHIEW",
    role: "Pengarah",
    unit: "Bahagian Media Siber",
  },
  {
    name: "ATAN BIN LUT",
    role: "Timbalan Pengarah",
    unit: "Pemasaran & Maklumat Digital, Bahagian Media Siber",
  },
  {
    name: "YUMNA BINTI BAHARUDDIN",
    role: "Penolong Pengarah",
    unit: "Pemasaran & Maklumat Digital, Bahagian Media Siber",
  },
  {
    name: "MOHD FAIDZYUL BIN HASSAN",
    role: "Penolong Pengarah",
    unit: "Kandungan Digital, Bahagian Media Siber",
  },
  {
    name: "AZMIRA BINTI AZEMI",
    role: "Penolong Pengarah",
    unit: "Kandungan Digital, Bahagian Media Siber",
  },
  {
    name: "MOHD HAIZUL BIN HOD",
    role: "Pengarah",
    unit: "Bahagian Media dan Komunikasi Korporat",
  },
  {
    name: "NORHAZUREN BINTI HALID",
    role: "Timbalan Pengarah",
    unit: "Media, Bahagian Media dan Komunikasi Korporat",
  },
  {
    name: "FATINAH BINTI MOHD KHALID",
    role: "Penolong Pengarah",
    unit: "Media, Bahagian Media dan Komunikasi Korporat",
  },
  {
    name: "SHARON A/P JOHN JOSEPH",
    role: "Penolong Pengarah",
    unit: "Komunikasi Korporat, Bahagian Media dan Komunikasi Korporat",
  },
  {
    name: "NURUL AZALIA BINTI SOBRI",
    role: "Penolong Pengarah",
    unit: "Komunikasi Korporat, Bahagian Media dan Komunikasi Korporat",
  },
] as const;

export const facts = [
  { k: "Edisi", v: "2026" },
  { k: "Kategori", v: "6" },
  { k: "Lokasi", v: "PICC" },
  { k: "Penganjur", v: "JAPEN" },
] as const;
