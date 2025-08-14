document.addEventListener('DOMContentLoaded', () => {
  // Data ramalan (sama seperti sebelumnya, disingkat untuk kejelasan)
  // GANTIKAN ARRAY LAMA ANDA DENGAN YANG INI
const predictions = [
  { number: 1, text: "Hari ini adalah hari keberuntungan Anda. Apa yang Anda kerjakan akan membuahkan hasil yang baik. Tetaplah rendah hati dan bersyukur atas segala nikmat yang diberikan.", guidance: "Dewa memberkati perjalanan hidup Anda. Tetaplah pada jalan kebenaran dan jangan ragu untuk membantu sesama.", love: "Hubungan asmara akan semakin harmonis", career: "Kesempatan karier baru akan datang", health: "Jaga pola makan dan istirahat yang cukup", wealth: "Rezeki akan mengalir dengan lancar" },
  { number: 2, text: "Kesabaran adalah kunci hari ini. Jangan terburu-buru dalam mengambil keputusan penting. Dengarkan nasihat dari orang yang lebih berpengalaman.", guidance: "Dewa menyarankan untuk lebih sabar dan bijaksana dalam menghadapi masalah.", love: "Berikan perhatian lebih pada pasangan", career: "Hindari konflik di tempat kerja", health: "Lakukan meditasi untuk ketenangan batin", wealth: "Hindari pengeluaran tidak penting" },
  { number: 3, text: "Waktunya untuk memulai sesuatu yang baru. Jangan takut untuk keluar dari zona nyaman. Keberanian Anda akan membawa hasil yang manis.", guidance: "Dewa mendukung langkah baru Anda. Percayalah pada insting dan kemampuan diri.", love: "Waktu yang tepat untuk mengungkapkan perasaan", career: "Proyek baru akan membawa kesuksesan", health: "Tubuh memerlukan lebih banyak istirahat", wealth: "Investasi kecil akan memberikan hasil" },
  { number: 4, text: "Perhatikan kesehatan dan keseimbangan hidup. Jangan terlalu memaksakan diri dalam pekerjaan. Luangkan waktu untuk diri sendiri dan keluarga.", guidance: "Dewa mengingatkan pentingnya keseimbangan dalam hidup.", love: "Komunikasi adalah kunci hubungan", career: "Fokus pada kualitas kerja", health: "Periksa kesehatan secara rutin", wealth: "Hati-hati dengan penawaran menggiurkan" },
  { number: 5, text: "Keberuntungan sedang berpihak pada Anda. Manfaatkan kesempatan emas yang datang dengan bijaksana. Jangan lupa berbagi dengan mereka yang membutuhkan.", guidance: "Dewa memperingatkan untuk tidak sombong atas pencapaian yang diperoleh.", love: "Momen romantis akan terjadi", career: "Kesempatan promosi terbuka lebar", health: "Kesehatan fisik dan mental baik", wealth: "Rezeki datang dari arah tak terduga" },
  { number: 6, text: "Ada rintangan di depan yang perlu Anda hadapi dengan keberanian. Percayalah pada kemampuan diri sendiri dan mintalah dukungan dari orang terdekat.", guidance: "Dewa mengingatkan untuk tetap tenang dalam menghadapi masalah.", love: "Perbaiki hubungan yang renggang", career: "Kerja tim akan membuahkan hasil", health: "Hindari stres berlebihan", wealth: "Pengeluaran perlu dikontrol" },
  { number: 7, text: "Kebaikan yang Anda lakukan akan kembali kepada Anda. Teruslah berbuat baik tanpa pamrih. Bantuan kecil yang Anda berikan akan berarti besar bagi orang lain.", guidance: "Dewa memberkati mereka yang tulus membantu sesama.", love: "Kasih sayang akan tumbuh subur", career: "Bantuan rekan kerja sangat berarti", health: "Perbanyak aktivitas fisik", wealth: "Sedekah membuka pintu rezeki" },
  { number: 8, text: "Kesuksesan sudah di depan mata. Tetaplah konsisten dan jangan menyerah pada rintangan. Usaha keras Anda akan terbayar dengan manis.", guidance: "Dewa memberkati ketekunan Anda. Teruslah berusaha dan berdoa.", love: "Hubungan akan semakin serius", career: "Pekerjaan keras akan dihargai", health: "Tubuh dalam kondisi prima", wealth: "Keuangan stabil dan aman" },
  { number: 9, text: "Hari ini adalah waktu yang tepat untuk introspeksi diri. Evaluasi apa yang sudah Anda lakukan dan rencanakan langkah selanjutnya dengan matang.", guidance: "Dewa menyarankan untuk merenung dan mengevaluasi hidup.", love: "Pahami kebutuhan pasangan", career: "Rencanakan karier jangka panjang", health: "Jaga keseimbangan emosi", wealth: "Buat anggaran yang realistis" },
  { number: 10, text: "Jangan takut untuk meminta bantuan ketika diperlukan. Ada orang di sekitar Anda yang siap membantu. Terimalah bantuan dengan lapang dada.", guidance: "Dewa mengingatkan bahwa manusia tidak bisa hidup sendirian.", love: "Buka diri untuk hubungan baru", career: "Mintalah bimbingan atasan", health: "Konsultasikan masalah kesehatan", wealth: "Cari nasihat keuangan profesional" },
  { number: 11, text: "Kreativitas Anda sedang berada di puncak. Manfaatkan untuk menciptakan sesuatu yang baru dan bermanfaat. Ide-ide brilian akan muncul hari ini.", guidance: "Dewa memberkati mereka yang menciptakan kebaikan.", love: "Rencanakan kejutan untuk pasangan", career: "Inovasi akan dihargai", health: "Kreativitas menyehatkan jiwa", wealth: "Ide baru bisa menghasilkan uang" },
  { number: 12, text: "Kepercayaan diri Anda adalah kunci hari ini. Tunjukkan kemampuan Anda tanpa ragu. Orang lain akan menghargai keahlian dan bakat Anda.", guidance: "Dewa mendorong Anda untuk percaya pada diri sendiri.", love: "Percaya diri menarik perhatian", career: "Presentasikan ide dengan yakin", health: "Percaya diri meningkatkan kesehatan mental", wealth: "Ambil risiko yang diperhitungkan" },
  { number: 13, text: "Perubahan besar sedang menanti. Bersiaplah untuk menghadapi transformasi dalam hidup. Perubahan ini akan membawa Anda ke arah yang lebih baik.", guidance: "Dewa menuntun Anda melalui perubahan hidup.", love: "Hubungan akan memasuki fase baru", career: "Kesempatan kerja baru terbuka", health: "Mulai pola hidup sehat", wealth: "Pendapatan akan meningkat" },
  { number: 14, text: "Kesederhanaan adalah kunci kebahagiaan hari ini. Hargai hal-hal kecil dalam hidup. Kebahagiaan sejati tidak selalu datang dari hal-hal mewah.", guidance: "Dewa mengajarkan arti kesederhanaan dan rasa syukur.", love: "Kebersamaan sederhana penuh makna", career: "Fokus pada hal-hal penting", health: "Hidup sederhana mengurangi stres", wealth: "Hemat pangkal kaya" },
  { number: 15, text: "Hari ini adalah waktu untuk memaafkan. Lepaskan dendam dan kebencian yang membebani hati. Memaafkan akan membebaskan Anda dari beban emosional.", guidance: "Dewa menganjurkan pengampunan untuk kedamaian batin.", love: "Maafkan kesalahan pasangan", career: "Lupakan konflik masa lalu", health: "Memaafkan menyehatkan jiwa", wealth: "Jangan simpan kebencian" },
  { number: 16, text: "Kesempatan kedua akan datang. Manfaatkan dengan baik dan jangan ulangi kesalahan yang sama. Belajarlah dari pengalaman masa lalu.", guidance: "Dewa memberikan kesempatan untuk memperbaiki diri.", love: "Rekonsiliasi mungkin terjadi", career: "Perbaiki kesalahan pekerjaan", health: "Mulai pola hidup sehat", wealth: "Perbaiki kesalahan finansial" },
  { number: 17, text: "Kebijaksanaan Anda akan diuji hari ini. Pikirkan matang-matang sebelum mengambil keputusan. Pertimbangkan semua aspek dengan teliti.", guidance: "Dewa memberkati keputusan yang bijaksana.", love: "Bersikap bijak dalam hubungan", career: "Ambil keputusan dengan hati-hati", health: "Pilih perawatan terbaik", wealth: "Investasi dengan bijak" },
  { number: 18, text: "Kejujuran adalah kebijakan terbaik hari ini. Jangan menyembunyikan kebenaran, terutama pada orang terdekat. Kejujuran akan membangun kepercayaan.", guidance: "Dewa menghargai kejujuran dan ketulusan.", love: "Jujur tentang perasaan", career: "Transparan dalam pekerjaan", health: "Jujur pada dokter", wealth: "Transparan dalam keuangan" },
  { number: 19, text: "Kesabaran Anda akan segera terbayar. Apa yang Anda usahakan selama ini akan memberikan hasil yang memuaskan. Tetaplah konsisten dan jangan menyerah.", guidance: "Dewa memberkati mereka yang sabar dan tekun.", love: "Hubungan akan semakin dalam", career: "Usaha keras akan dihargai", health: "Proses penyembuhan berjalan baik", wealth: "Investasi jangka panjang berbuah" },
  { number: 20, text: "Hari ini adalah waktu untuk berbagi. Bagikan pengetahuan, pengalaman, atau rezeki dengan orang lain. Berbagi akan melipatgandakan kebahagiaan.", guidance: "Dewa memberkati mereka yang murah hati.", love: "Bagikan waktu untuk pasangan", career: "Berbagi pengetahuan dengan rekan", health: "Berbagi cerita mengurangi beban", wealth: "Sedekah membuka pintu rezeki" },
  { number: 21, text: "Jangan takut untuk bermimpi besar. Tetapkan tujuan tinggi dan berusahalah mencapainya. Mimpi besar memotivasi Anda untuk bergerak maju.", guidance: "Dewa mendukung cita-cita mulia.", love: "Bermimpilah tentang masa depan bersama", career: "Tetapkan tujuan karier tinggi", health: "Tetapkan target kesehatan", wealth: "Rencanakan kemandirian finansial" },
  { number: 22, text: "Keseimbangan adalah kunci hari ini. Jaga keseimbangan antara pekerjaan, keluarga, dan diri sendiri. Ketidakseimbangan akan menyebabkan stres.", guidance: "Dewa mengajarkan pentingnya hidup seimbang.", love: "Seimbangkan waktu untuk pasangan", career: "Jangan bekerja berlebihan", health: "Seimbangkan fisik dan mental", wealth: "Seimbangkan pendapatan dan pengeluaran" },
  { number: 23, text: "Waktunya untuk introspeksi diri. Ada hal-hal yang perlu Anda perbaiki untuk mencapai tujuan yang diinginkan. Dengarkan nasihat orang bijak.", guidance: "Dewa menyarankan untuk lebih sabar dan bijaksana dalam mengambil keputusan.", love: "Hindari kesalahpahaman dengan komunikasi terbuka", career: "Fokus pada pekerjaan saat ini", health: "Perhatikan kesehatan mental", wealth: "Hindari pengeluaran tidak perlu" },
  { number: 24, text: "Kesetiaan Anda akan dihargai. Tetaplah setia pada nilai-nilai yang Anda yakini. Kesetiaan membangun karakter yang kuat.", guidance: "Dewa menghargai kesetiaan dan komitmen.", love: "Kesetiaan memperkuat hubungan", career: "Setia pada pekerjaan membuahkan hasil", health: "Setia pada pola hidup sehat", wealth: "Setia pada rencana keuangan" },
  { number: 25, text: "Petualangan baru menanti. Jangan takut untuk mencoba hal-hal baru. Pengalaman baru akan memperkaya hidup Anda.", guidance: "Dewa mendukung jiwa petualang Anda.", love: "Coba kegiatan baru bersama pasangan", career: "Ambil proyek yang menantang", health: "Coba olahraga baru", wealth: "Eksplorasi peluang baru" },
  { number: 26, text: "Kedamaian batin akan Anda rasakan hari ini. Tenangkan pikiran dan jernihkan hati. Kedamaian batin adalah sumber kekuatan.", guidance: "Dewa memberikan ketenangan jiwa bagi yang mencari.", love: "Ketenangan memperbaiki hubungan", career: "Pikiran jernih membantu pengambilan keputusan", health: "Ketenangan menyehatkan jiwa", wealth: "Keputusan finansial yang tenang" },
  { number: 27, text: "Kekuatan Anda terletak pada ketekunan. Teruslah berusaha meski menghadapi rintangan. Ketekunan akan mengalahkan segala kesulitan.", guidance: "Dewa memberkati mereka yang tekun dan pantang menyerah.", love: "Ketekunan dalam hubungan berbuah manis", career: "Terus berusaha mencapai target", health: "Terus jalani pola hidup sehat", wealth: "Ketekunan dalam usaha berbuah" },
  { number: 28, text: "Hari ini adalah waktu untuk merayakan pencapaian kecil. Hargai setiap langkah maju yang Anda buat. Pencapaian kecil adalah fondasi kesuksesan besar.", guidance: "Dewa mengajarkan untuk bersyukur atas hal-hal kecil.", love: "Rayakan momen kecil bersama", career: "Hargai setiap kemajuan pekerjaan", health: "Rayakan setiap kemajuan kesehatan", wealth: "Syukuri setiap tambahan penghasilan" },
  { number: 29, text: "Kepercayaan orang lain pada Anda adalah modal berharga. Jaga kepercayaan itu dengan tindakan dan integritas. Kepercayaan yang hilang sulit dipulihkan.", guidance: "Dewa menghargai integritas dan kejujuran.", love: "Jaga kepercayaan pasangan", career: "Jaga kepercayaan atasan dan rekan", health: "Dokter mempercayai keterbukaan Anda", wealth: "Jaga reputasi keuangan" },
  { number: 30, text: "Keluarga adalah prioritas hari ini. Luangkan waktu untuk anggota keluarga. Dukungan keluarga adalah kekuatan terbesar Anda.", guidance: "Dewa memberkati keluarga yang harmonis.", love: "Perhatikan kebutuhan keluarga", career: "Jangan lupakan keluarga karena kerja", health: "Kesehatan keluarga perlu perhatian", wealth: "Sisihkan untuk kebutuhan keluarga" },
  { number: 31, text: "Kemurahan hati akan membawa berkah. Berikan bantuan pada yang membutuhkan tanpa mengharapkan balasan. Kemurahan hati menarik energi positif.", guidance: "Dewa memberkati mereka yang murah hati.", love: "Murah hati pada pasangan", career: "Bantu rekan yang kesulitan", health: "Bantu mereka yang sakit", wealth: "Sedekah akan kembali berlipat" },
  { number: 32, text: "Jangan biarkan rasa takut menghalangi langkah Anda. Hadapi ketakutan dengan keberanian. Di balik rasa takut ada kesempatan besar.", guidance: "Dewa memberikan keberanian pada mereka yang menghadapi ketakutan.", love: "Berani mengambil langkah dalam hubungan", career: "Hadapi tantangan baru", health: "Berani menghadapi masalah kesehatan", wealth: "Berani mengambil peluang" },
  { number: 33, text: "Kebijaksanaan datang dari pengalaman. Gunakan pengetahuan masa lalu untuk menghadapi masa kini. Pengalaman adalah guru terbaik.", guidance: "Dewa memberikan hikmah melalui pengalaman hidup.", love: "Pengalaman memperkaya hubungan", career: "Pengalaman membantu pengambilan keputusan", health: "Pengalaman mengajarkan pola hidup sehat", wealth: "Pengalaman keuangan menjadi pelajaran" },
  { number: 34, text: "Kesederhanaan adalah kecantikan sejati. Hargai hal-hal sederhana dalam hidup. Kebahagiaan sejati tidak memerlukan kemewahan.", guidance: "Dewa mengajarkan kesederhanaan dan rasa syukur.", love: "Cinta sederhana penuh keindahan", career: "Kesederhanaan dalam pekerjaan membawa ketenangan", health: "Hidup sederhana menyehatkan", wealth: "Hemat adalah kekayaan" },
  { number: 35, text: "Kesabaran Anda sedang diuji hari ini. Tetaplah tenang dalam menghadapi masalah. Kesabaran adalah senjata ampuh.", guidance: "Dewa memberkati mereka yang sabar dalam menghadapi cobaan.", love: "Sabar dalam memahami pasangan", career: "Sabar menunggu hasil kerja", health: "Sabar dalam proses penyembuhan", wealth: "Sabar menunggu hasil investasi" },
  { number: 36, text: "Kreativitas adalah kekuatan Anda hari ini. Gunakan imajinasi untuk memecahkan masalah. Ide-ide kreatif akan muncul saat Anda rileks.", guidance: "Dewa memberkati pikiran kreatif dan inovatif.", love: "Ciptakan momen kreatif bersama pasangan", career: "Solusi kreatif untuk masalah pekerjaan", health: "Kreatif dalam menjaga kesehatan", wealth: "Ide kreatif menghasilkan uang" },
  { number: 37, text: "Kepercayaan pada diri sendiri adalah kunci hari ini. Jangan biarkan keraguan menguasai Anda. Percaya diri akan membuka banyak pintu.", guidance: "Dewa mendorong Anda untuk percaya pada kemampuan sendiri.", love: "Percaya diri menarik perhatian", career: "Percaya pada kemampuan profesional", health: "Percaya pada proses penyembuhan", wealth: "Percaya pada keputusan finansial" },
  { number: 38, text: "Keseimbangan emosi sangat penting hari ini. Jaga kestabilan perasaan dalam menghadapi situasi. Emosi yang stabil membantu pengambilan keputusan.", guidance: "Dewa mengajarkan pengendalian diri dan emosi.", love: "Jaga kestabilan emosi dalam hubungan", career: "Emosi stabil meningkatkan kinerja", health: "Keseimbangan emosi menyehatkan", wealth: "Keputusan finansial tanpa emosi" },
  { number: 39, text: "Persahabatan adalah harta berharga. Hargai teman-teman yang selalu mendukung Anda. Persahabatan sejati adalah anugerah.", guidance: "Dewa memberkati persahabatan yang tulus.", love: "Teman bisa menjadi pendukung hubungan", career: "Jaringan pertemanan membantu karier", health: "Teman mendukung kesehatan mental", wealth: "Teman memberi saran keuangan" },
  { number: 40, text: "Kesempatan emas akan datang tiba-tiba. Bersiaplah untuk menyambutnya. Keberanian mengambil kesempatan akan membawa keberuntungan.", guidance: "Dewa memberikan kesempatan pada mereka yang siap.", love: "Kesempatan untuk memperbaiki hubungan", career: "Kesempatan kerja baru muncul", health: "Kesempatan untuk hidup sehat", wealth: "Kesempatan investasi menguntungkan" },
  { number: 41, text: "Kebijaksanaan dalam berbicara sangat penting. Pikirkan sebelum berkata-kata. Kata-kata bisa menyembuhkan atau melukai.", guidance: "Dewa mengajarkan pentingnya tutur kata yang baik.", love: "Kata-kata lembut memperkuat hubungan", career: "Komunikasi efektif di tempat kerja", health: "Kata-kata positif menyehatkan", wealth: "Negosiasi dengan bijak" },
  { number: 42, text: "Kesetiaan pada nilai-nilai akan diuji. Tetaplah teguh pada prinsip yang baik. Integritas adalah fondasi karakter.", guidance: "Dewa menghargai kesetiaan pada prinsip kebenaran.", love: "Setia pada komitmen hubungan", career: "Setia pada etika pekerjaan", health: "Setia pada gaya hidup sehat", wealth: "Setia pada rencana keuangan" },
  { number: 43, text: "Petualangan kecil akan menyegarkan pikiran. Lakukan sesuatu yang berbeda dari rutinitas. Perubahan suasana baik untuk jiwa.", guidance: "Dewa mendukung jiwa petualang yang sehat.", love: "Coba aktivitas baru bersama", career: "Eksplorasi bidang baru", health: "Coba makanan sehat baru", wealth: "Eksplorasi investasi baru" },
  { number: 44, text: "Kedamaian hati akan Anda temukan hari ini. Tenangkan pikiran dan jernihkan hati. Kedamaian batin adalah sumber kebahagiaan.", guidance: "Dewa memberikan ketenangan pada mereka yang mencari kedamaian.", love: "Ketenangan memperbaiki hubungan", career: "Pikiran jernih membantu pekerjaan", health: "Ketenangan menyehatkan jiwa", wealth: "Keputusan finansial dengan tenang" },
  { number: 45, text: "Ketekunan akan membawa hasil. Teruslah berusaha meski lambat. Konsistensi lebih penting dari kecepatan.", guidance: "Dewa memberkati usaha yang tekun dan konsisten.", love: "Ketekunan dalam hubungan berbuah manis", career: "Terus berusaha mencapai target", health: "Konsisten dengan pola hidup sehat", wealth: "Ketekunan dalam usaha berbuah" },
  { number: 46, text: "Syukuri apa yang Anda miliki hari ini. Rasa syukur akan menarik lebih banyak berkah. Fokus pada kelimpahan bukan kekurangan.", guidance: "Dewa memberkati hati yang bersyukur.", love: "Syukuri pasangan Anda", career: "Syukuri pekerjaan Anda", health: "Syukuri kesehatan Anda", wealth: "Syukuri setiap rezeki yang ada" },
  { number: 47, text: "Kepercayaan adalah dasar hubungan. Jaga kepercayaan yang diberikan pada Anda. Kepercayaan yang hilang sulit dipulihkan.", guidance: "Dewa menghargai kepercayaan dan integritas.", love: "Jaga kepercayaan pasangan", career: "Jaga kepercayaan rekan kerja", health: "Dokter mempercayai laporan Anda", wealth: "Jaga reputasi keuangan" },
  { number: 48, text: "Keluarga adalah sumber kekuatan. Luangkan waktu untuk mereka. Dukungan keluarga tak tergantikan.", guidance: "Dewa memberkati keluarga yang rukun.", love: "Perhatikan keluarga pasangan", career: "Jangan abaikan keluarga karena kerja", health: "Jaga kesehatan keluarga", wealth: "Sisihkan untuk kebutuhan keluarga" },
  { number: 49, text: "Kemurahan hati membuka pintu rezeki. Berbagilah dengan tulus. Apa yang Anda berikan akan kembali berlipat.", guidance: "Dewa memberkati mereka yang murah hati.", love: "Murah hati pada pasangan", career: "Bantu rekan yang kesulitan", health: "Bantu mereka yang membutuhkan", wealth: "Sedekah akan kembali berlipat" },
  { number: 50, text: "Keberanian menghadapi ketakutan adalah kemenangan. Hadapi apa yang Anda takuti. Di balik ketakutan ada kekuatan baru.", guidance: "Dewa memberikan keberanian pada mereka yang berani mencoba.", love: "Berani mengungkapkan perasaan", career: "Hadapi tantangan pekerjaan", health: "Berani menghadapi masalah kesehatan", wealth: "Berani mengambil peluang" },
  { number: 51, text: "Kebijaksanaan dari pengalaman adalah harta. Gunakan pelajaran masa lalu untuk masa kini. Pengalaman adalah guru terbaik.", guidance: "Dewa memberikan hikmah melalui pengalaman hidup.", love: "Pengalaman memperkaya hubungan", career: "Pengalaman membantu karir", health: "Pengalaman mengajarkan kesehatan", wealth: "Pengalaman keuangan menjadi pelajaran" },
  { number: 52, text: "Kesederhanaan membawa ketenangan. Nikmati hidup sederhana. Kebahagiaan sejati tidak memerlukan kemewahan.", guidance: "Dewa mengajarkan kesederhanaan dan rasa syukur.", love: "Cinta sederhana penuh makna", career: "Kesederhanaan dalam bekerja", health: "Hidup sederhana menyehatkan", wealth: "Hemat pangkal kaya" },
  { number: 53, text: "Kesabaran adalah kebajikan utama. Tetaplah sabar dalam situasi sulit. Kesabaran akan membuahkan hasil manis.", guidance: "Dewa memberkati mereka yang sabar.", love: "Sabar dengan kekurangan pasangan", career: "Sabar menunggu hasil kerja", health: "Sabar dalam proses penyembuhan", wealth: "Sabar menunggu hasil investasi" },
  { number: 54, text: "Kreativitas akan memecahkan masalah. Gunakan imajinasi untuk solusi baru. Ide-ide kreatif datang saat Anda rileks.", guidance: "Dewa memberkati pikiran kreatif.", love: "Ciptakan momen kreatif bersama", career: "Solusi kreatif untuk masalah", health: "Kreatif dalam menjaga kesehatan", wealth: "Ide kreatif menghasilkan uang" },
  { number: 55, text: "Kepercayaan diri adalah kunci kesuksesan. Percaya pada kemampuan Anda. Keyakinan diri menarik keberhasilan.", guidance: "Dewa mendorong Anda untuk percaya diri.", love: "Percaya diri menarik pasangan", career: "Percaya pada kemampuan profesional", health: "Percaya pada proses penyembuhan", wealth: "Percaya pada keputusan finansial" },
  { number: 56, text: "Keseimbangan emosi penting untuk keputusan. Jaga kestabilan perasaan. Emosi stabil membantu berpikir jernih.", guidance: "Dewa mengajarkan pengendalian emosi.", love: "Jaga emosi dalam hubungan", career: "Emosi stabil meningkatkan kinerja", health: "Keseimbangan emosi menyehatkan", wealth: "Keputusan finansial tanpa emosi" },
  { number: 57, text: "Persahabatan adalah anugerah berharga. Hargai teman-teman sejati. Persahabatan sejati sulit ditemukan.", guidance: "Dewa memberkati persahabatan yang tulus.", love: "Teman mendukung hubungan Anda", career: "Jaringan pertemanan membantu karir", health: "Teman baik untuk kesehatan mental", wealth: "Teman memberi saran keuangan" },
  { number: 58, text: "Kesempatan akan datang tiba-tiba. Bersiaplah menyambutnya. Keberanian mengambil kesempatan membawa keberuntungan.", guidance: "Dewa memberikan kesempatan pada mereka yang siap.", love: "Kesempatan untuk hubungan baru", career: "Kesempatan kerja baru muncul", health: "Kesempatan untuk hidup sehat", wealth: "Kesempatan investasi menguntungkan" },
  { number: 59, text: "Kebijaksanaan dalam berbicara sangat penting. Pikirkan sebelum berkata. Kata-kata bisa membangun atau merusak.", guidance: "Dewa mengajarkan tutur kata yang baik.", love: "Kata-kata lembut memperkuat cinta", career: "Komunikasi efektif di tempat kerja", health: "Kata-kata positif menyehatkan jiwa", wealth: "Negosiasi dengan bijak" },
  { number: 60, text: "Kesetiaan pada prinsip akan dihargai. Tetaplah teguh pada nilai kebenaran. Integritas membangun karakter kuat.", guidance: "Dewa menghargai kesetiaan pada kebenaran.", love: "Setia pada komitmen cinta", career: "Setia pada etika profesional", health: "Setia pada gaya hidup sehat", wealth: "Setia pada rencana keuangan" },
  { number: 61, text: "Petualangan kecil menyegarkan jiwa. Lakukan sesuatu yang berbeda. Perubahan suasana baik untuk pikiran.", guidance: "Dewa mendukung jiwa petualang yang sehat.", love: "Coba aktivitas baru bersama", career: "Eksplorasi bidang baru", health: "Coba makanan sehat baru", wealth: "Eksplorasi investasi baru" },
  { number: 62, text: "Kedamaian batin akan Anda rasakan. Tenangkan pikiran dan hati. Kedamaian adalah sumber kekuatan.", guidance: "Dewa memberikan ketenangan jiwa.", love: "Ketenangan memperbaiki hubungan", career: "Pikiran jernih membantu pekerjaan", health: "Ketenangan menyehatkan", wealth: "Keputusan finansial dengan tenang" },
  { number: 63, text: "Ketekunan adalah kunci keberhasilan. Terus berusaha meski lambat. Konsistensi lebih penting dari kecepatan.", guidance: "Dewa memberkati usaha yang tekun.", love: "Ketekunan dalam cinta berbuah", career: "Terus berusaha mencapai tujuan", health: "Konsisten dengan pola sehat", wealth: "Ketekunan usaha berbuah" },
  { number: 64, text: "Syukuri segala berkat hari ini. Rasa syukur menarik lebih banyak berkah. Fokus pada kelimpahan bukan kekurangan.", guidance: "Dewa memberkati hati yang bersyukur.", love: "Syukuri cinta yang ada", career: "Syukuri pekerjaan Anda", health: "Syukuri kesehatan Anda", wealth: "Syukuri setiap rezeki yang ada" },
  { number: 65, text: "Kepercayaan adalah fondasi hubungan. Jaga kepercayaan yang diberikan. Kepercayaan yang hilang sulit dipulihkan.", guidance: "Dewa menghargai kepercayaan dan integritas.", love: "Jaga kepercayaan pasangan", career: "Jaga kepercayaan rekan kerja", health: "Dokter percaya pada Anda", wealth: "Jaga reputasi keuangan" },
  { number: 66, text: "Keluarga adalah prioritas utama. Luangkan waktu untuk mereka. Dukungan keluarga tak ternilai.", guidance: "Dewa memberkati keluarga yang harmonis.", love: "Perhatikan keluarga pasangan", career: "Jangan lupakan keluarga karena kerja", health: "Jaga kesehatan keluarga", wealth: "Sisihkan untuk keluarga" },
  { number: 67, text: "Kemurahan hati membuka pintu berkah. Berbagilah dengan tulus. Apa yang Anda berikan akan kembali berlipat.", guidance: "Dewa memberkati mereka yang murah hati.", love: "Murah hati pada pasangan", career: "Bantu rekan yang kesulitan", health: "Bantu mereka yang sakit", wealth: "Sedekah akan berlipat ganda" },
  { number: 68, text: "Keberanian menghadapi ketakutan adalah kekuatan. Hadapi apa yang Anda takuti. Di balik ketakutan ada kesempatan.", guidance: "Dewa memberikan keberanian pada mereka yang berani.", love: "Berani mengungkapkan perasaan", career: "Hadapi tantangan pekerjaan", health: "Berani hadapi masalah kesehatan", wealth: "Berani ambil peluang" },
  { number: 69, text: "Kebijaksanaan dari pengalaman adalah guru. Gunakan pelajaran masa lalu. Pengalaman adalah harta berharga.", guidance: "Dewa memberikan hikmah melalui pengalaman.", love: "Pengalaman memperkaya cinta", career: "Pengalaman membantu karir", health: "Pengalaman mengajarkan kesehatan", wealth: "Pengalaman keuangan bermanfaat" },
  { number: 70, text: "Kesederhanaan membawa kebahagiaan. Nikmati hidup sederhana. Kebahagiaan sejati dalam kesederhanaan.", guidance: "Dewa mengajarkan kesederhanaan dan syukur.", love: "Cinta sederhana penuh arti", career: "Kesederhanaan dalam bekerja", health: "Hidup sederhana menyehatkan", wealth: "Hemat adalah kekayaan" },
  { number: 71, text: "Kesabaran akan terbayar dengan manis. Tetaplah sabar dalam kesulitan. Kesabaran adalah kebajikan mulia.", guidance: "Dewa memberkati mereka yang sabar.", love: "Sabar dengan pasangan", career: "Sabar menunggu hasil", health: "Sabar dalam penyembuhan", wealth: "Sabar menunggu investasi" },
  { number: 72, text: "Kreativitas memecahkan kebuntuan. Gunakan imajinasi untuk solusi. Ide kreatif muncul saat rileks.", guidance: "Dewa memberkati pikiran kreatif.", love: "Ciptakan momen kreatif", career: "Solusi kreatif untuk masalah", health: "Kreatif dalam kesehatan", wealth: "Ide kreatif menghasilkan" },
  { number: 73, text: "Kepercayaan diri adalah kunci. Percaya pada kemampuan Anda. Keyakinan diri menarik sukses.", guidance: "Dewa mendorong percaya diri.", love: "Percaya diri menarik perhatian", career: "Percaya pada kemampuan", health: "Percaya pada penyembuhan", wealth: "Percaya pada keputusan" },
  { number: 74, text: "Keseimbangan emosi penting. Jaga kestabilan perasaan. Emosi stabil membantu berpikir.", guidance: "Dewa mengajarkan kendali emosi.", love: "Jaga emosi dalam cinta", career: "Emosi stabil meningkatkan kerja", health: "Keseimbangan emosi sehat", wealth: "Keputusan tanpa emosi" },
  { number: 75, text: "Persahabatan adalah harta. Hargai teman sejati. Persahabatan sejati langka.", guidance: "Dewa memberkati persahabatan tulus.", love: "Teman dukung hubungan", career: "Jaringan teman bantu karir", health: "Teman baik untuk mental", wealth: "Teman beri saran keuangan" },
  { number: 76, text: "Kesempatan datang tiba-tiba. Bersiaplah menyambut. Keberanian ambil kesempatan bawa keberuntungan.", guidance: "Dewa beri kesempatan pada yang siap.", love: "Kesempatan untuk hubungan baru", career: "Kesempatan kerja muncul", health: "Kesempatan hidup sehat", wealth: "Kesempatan investasi" },
  { number: 77, text: "Kebijaksanaan dalam bicara penting. Pikir sebelum bicara. Kata-kata bisa menyembuhkan.", guidance: "Dewa ajarkan tutur kata baik.", love: "Kata lembut perkuat cinta", career: "Komunikasi efektif di kerja", health: "Kata positif sehatkan jiwa", wealth: "Negosiasi bijak" },
  { number: 78, text: "Kesetiaan pada nilai dihargai. Tetap teguh pada kebenaran. Integritas bangun karakter.", guidance: "Dewa hargai kesetiaan pada benar.", love: "Setia pada komitmen cinta", career: "Setia pada etika kerja", health: "Setia pada hidup sehat", wealth: "Setia pada rencana uang" },
  { number: 79, text: "Petualangan kecil segarkan pikiran. Lakukan hal berbeda. Perubahan suasana baik.", guidance: "Dewa dukung jiwa petualang sehat.", love: "Coba aktivitas baru bersama", career: "Eksplorasi bidang baru", health: "Coba makanan sehat baru", wealth: "Eksplorasi investasi baru" },
  { number: 80, text: "Kedamaian batin Anda rasakan. Tenangkan pikiran dan hati. Kedamaian sumber kekuatan.", guidance: "Dewa beri ketenangan jiwa.", love: "Ketenangan perbaiki hubungan", career: "Pikiran jernih bantu kerja", health: "Ketenangan menyehatkan", wealth: "Keputusan uang tenang" },
  { number: 81, text: "Ketekunan kunci keberhasilan. Terus berusaha meski lambat. Konsistensi lebih penting.", guidance: "Dewa berkati usaha tekun.", love: "Tekun dalam cinta berbuah", career: "Terus usaha capai tujuan", health: "Konsisten pola sehat", wealth: "Tekun usaha berbuah" },
  { number: 82, text: "Syukuri berkat hari ini. Rasa syukur tarik lebih berkah. Fokus pada kelimpahan.", guidance: "Dewa berkati hati bersyukur.", love: "Syukuri cinta ada", career: "Syukuri pekerjaan", health: "Syukuri kesehatan", wealth: "Syukuri rezeki ada" },
  { number: 83, text: "Kepercayaan fondasi hubungan. Jaga kepercayaan diberikan. Kepercayaan hilang sulit pulih.", guidance: "Dewa hargai kepercayaan.", love: "Jaga kepercayaan pasangan", career: "Jaga kepercayaan rekan", health: "Dokter percaya Anda", wealth: "Jaga reputasi keuangan" },
  { number: 84, text: "Keluarga prioritas utama. Luangkan waktu untuk mereka. Dukungan keluarga berharga.", guidance: "Dewa berkati keluarga rukun.", love: "Perhatikan keluarga pasangan", career: "Jangan lupakan keluarga", health: "Jaga kesehatan keluarga", wealth: "Sisihkan untuk keluarga" },
  { number: 85, text: "Kemurahan hati buka pintu berkah. Berbagi dengan tulus. Apa diberikan kembali berlipat.", guidance: "Dewa berkati yang murah hati.", love: "Murah hati pada pasangan", career: "Bantu rekan kesulitan", health: "Bantu yang sakit", wealth: "Sedekah berlipat ganda" },
  { number: 86, text: "Keberanian hadapi ketakutan kekuatan. Hadapi yang ditakuti. Di balik ketakutan ada kesempatan.", guidance: "Dewa beri keberanian pada yang berani.", love: "Berani ungkap perasaan", career: "Hadapi tantangan kerja", health: "Berani hadapi masalah kesehatan", wealth: "Berani ambil peluang" },
  { number: 87, text: "Kebijaksanaan pengalaman guru. Gunakan pelajaran masa lalu. Pengalaman harta berharga.", guidance: "Dewa beri hikmah lewat pengalaman.", love: "Pengalaman perkuat cinta", career: "Pengalaman bantu karir", health: "Pengalaman ajarkan kesehatan", wealth: "Pengalaman keuangan bermanfaat" },
  { number: 88, text: "Kesederhanaan bawa kebahagiaan. Nikmati hidup sederhana. Bahagia sejati dalam kesederhanaan.", guidance: "Dewa ajarkan sederhana dan syukur.", love: "Cinta sederhana bermakna", career: "Sederhana dalam bekerja", health: "Hidup sederhana sehat", wealth: "Hemat adalah kaya" },
  { number: 89, text: "Kesabaran terbayar manis. Tetaplah sabar dalam kesulitan. Kesabaran kebajikan mulia.", guidance: "Dewa berkati yang sabar.", love: "Sabar dengan pasangan", career: "Sabar menunggu hasil", health: "Sabar dalam penyembuhan", wealth: "Sabar tunggu investasi" },
  { number: 90, text: "Kreativitas pecahkan kebuntuan. Gunakan imajinasi untuk solusi. Ide kreatif datang saat rileks.", guidance: "Dewa berkati pikiran kreatif.", love: "Ciptakan momen kreatif", career: "Solusi kreatif masalah", health: "Kreatif jaga kesehatan", wealth: "Ide kreatif hasilkan uang" },
  { number: 91, text: "Kepercayaan diri kunci sukses. Percaya kemampuan Anda. Keyakinan diri tarik keberhasilan.", guidance: "Dewa dukung percaya diri.", love: "Percaya diri tarik perhatian", career: "Percaya kemampuan profesional", health: "Percaya proses penyembuhan", wealth: "Percaya keputusan finansial" },
  { number: 92, text: "Keseimbangan emosi penting. Jaga kestabilan perasaan. Emosi stabil bantu berpikir jernih.", guidance: "Dewa ajarkan kendali emosi.", love: "Jaga emosi dalam hubungan", career: "Emosi stabil tingkatkan kinerja", health: "Keseimbangan emosi sehat", wealth: "Keputusan uang tanpa emosi" },
  { number: 93, text: "Persahabatan harta berharga. Hargai teman sejati. Persahabatan sejati langka.", guidance: "Dewa berkati persahabatan tulus.", love: "Teman dukung hubungan", career: "Jaringan teman bantu karir", health: "Teman baik untuk mental", wealth: "Teman beri saran keuangan" },
  { number: 94, text: "Kesempatan datang tiba-tiba. Bersiap menyambut. Keberanian ambil kesempatan bawa keberuntungan.", guidance: "Dewa beri kesempatan pada siap.", love: "Kesempatan hubungan baru", career: "Kesempatan kerja muncul", health: "Kesempatan hidup sehat", wealth: "Kesempatan investasi" },
  { number: 95, text: "Kebijaksanaan bicara penting. Pikir sebelum bicara. Kata-kata bisa menyembuhkan.", guidance: "Dewa ajarkan tutur kata baik.", love: "Kata lembut perkuat cinta", career: "Komunikasi efektif kerja", health: "Kata positif sehatkan jiwa", wealth: "Negosiasi bijak" },
  { number: 96, text: "Kesetiaan nilai dihargai. Tetap teguh kebenaran. Integritas bangun karakter.", guidance: "Dewa hargai setia benar.", love: "Setia komitmen cinta", career: "Setia etika kerja", health: "Setia hidup sehat", wealth: "Setia rencana uang" },
  { number: 97, text: "Petualangan kecil segarkan. Lakukan hal berbeda. Perubahan suasana baik.", guidance: "Dewa dukung jiwa petualang.", love: "Coba aktivitas baru", career: "Eksplorasi bidang baru", health: "Coba makanan sehat", wealth: "Eksplorasi investasi" },
  { number: 98, text: "Kedamaian batin Anda rasakan. Tenangkan pikiran hati. Kedamaian sumber kekuatan.", guidance: "Dewa beri ketenangan jiwa.", love: "Ketenangan perbaiki hubungan", career: "Pikiran jernih bantu kerja", health: "Ketenangan sehatkan", wealth: "Keputusan uang tenang" },
  { number: 99, text: "Ketekunan kunci sukses. Terus berusaha meski lambat. Konsistensi penting.", guidance: "Dewa berkati usaha tekun.", love: "Tekun cinta berbuah", career: "Terus usaha capai tujuan", health: "Konsisten pola sehat", wealth: "Tekun usaha berhasil" },
  { number: 100, text: "Syukuri segala berkat. Rasa syukur tarik lebih berkah. Fokus kelimpahan.", guidance: "Dewa berkati hati bersyukur.", love: "Syukuri cinta ada", career: "Syukuri pekerjaan", health: "Syukuri kesehatan", wealth: "Syukuri rezeki" }
];

  // Elemen DOM
  const nameInput = document.getElementById('nameInput');
  const dateDisplay = document.getElementById('dateDisplay');
  const shakeBtn = document.getElementById('shakeBtn');
  const throwBtn = document.getElementById('throwBtn');
  const ciamsiContainer = document.getElementById('ciamsiContainer');
  const fallingStick = document.getElementById('fallingStick');
  const puakpois = [document.getElementById('puakpoi1'), document.getElementById('puakpoi2')];
  const shakeResult = document.getElementById('shakeResult');
  const throwResult = document.getElementById('throwResult');
  const throwResultText = document.getElementById('throwResultText');
  const predictionNumber = document.getElementById('predictionNumber');
  const predictionResult = document.getElementById('predictionResult');
  const predictionCard = document.getElementById('predictionCard');
  const resultNumber = document.getElementById('resultNumber');
  const outputName = document.getElementById('outputName');
  const outputDate = document.getElementById('outputDate');
  const predictionText = document.getElementById('predictionText');
  const guidanceText = document.getElementById('guidanceText');
  const loveGuidance = document.getElementById('loveGuidance');
  const careerGuidance = document.getElementById('careerGuidance');
  const healthGuidance = document.getElementById('healthGuidance');
  const wealthGuidance = document.getElementById('wealthGuidance');
  const whatsappShare = document.getElementById('whatsappShare');
  const downloadBtn = document.getElementById('downloadBtn');
  const throwCountElement = document.getElementById('throwCount');
  const counterWarning = document.getElementById('counterWarning');

  // Variabel state
  let currentPrediction = null;
  let throwCount = 0;
  const maxThrows = 3;
  let formattedDate = '';

  // Inisialisasi Aplikasi
  function initialize() {
      // Set tanggal otomatis
      const today = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      formattedDate = today.toLocaleDateString('id-ID', options);
      dateDisplay.textContent = `Tanggal: ${formattedDate}`;

      // Aktifkan tombol Kocok jika nama diisi
      nameInput.addEventListener('input', () => {
          shakeBtn.disabled = nameInput.value.trim() === '';
      });

      // Registrasi Service Worker untuk PWA
      if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/sw.js')
              .then(reg => console.log('Service Worker terdaftar', reg))
              .catch(err => console.error('Pendaftaran Service Worker gagal', err));
      }
  }

  // Fungsi untuk mengocok Ciam Si
  shakeBtn.addEventListener('click', () => {
      // Reset state
      throwCount = 0;
      throwCountElement.textContent = throwCount;
      counterWarning.classList.add('hidden');
      throwResult.classList.add('hidden');
      predictionResult.classList.add('hidden');
      puakpois.forEach(p => p.textContent = '-');
      throwBtn.disabled = true;

      // Animasi kocok
      ciamsiContainer.classList.add('shake-animation');
      fallingStick.classList.remove('fall-animation'); // Hapus animasi lama
      fallingStick.style.opacity = 0; // Sembunyikan stik

      setTimeout(() => {
          ciamsiContainer.classList.remove('shake-animation');
          fallingStick.classList.add('fall-animation');
          
          // Generate nomor dan tampilkan
          const randomNumber = Math.floor(Math.random() * 100) + 1;
          predictionNumber.textContent = randomNumber;
          currentPrediction = predictions.find(p => p.number === randomNumber);
          
          shakeResult.classList.remove('hidden');
          throwBtn.disabled = false;
      }, 800);
  });

  // Fungsi untuk melempar Puak Poi
  throwBtn.addEventListener('click', () => {
      throwCount++;
      throwCountElement.textContent = throwCount;
      if (throwCount === maxThrows - 1) counterWarning.classList.remove('hidden');
      
      puakpois.forEach(poi => {
          poi.textContent = '';
          poi.classList.add('throw-animation');
          setTimeout(() => poi.classList.remove('throw-animation'), 800);
      });

      setTimeout(() => {
          const result1 = Math.round(Math.random());
          const result2 = Math.round(Math.random());
          puakpois[0].textContent = result1 === 0 ? '凹' : '凸'; // Cekung & Cembung
          puakpois[1].textContent = result2 === 0 ? '凹' : '凸';
          
          const isConfirmed = result1 !== result2;
          
          if (isConfirmed) {
              throwResultText.textContent = 'Hasil lemparan: Dikonfirmasi Dewa!';
              showPrediction();
              throwBtn.disabled = true;
          } else {
              if (throwCount >= maxThrows) {
                  throwResultText.textContent = 'Batas lemparan tercapai. Ramalan tetap ditampilkan.';
                  showPrediction();
                  throwBtn.disabled = true;
              } else {
                  throwResultText.textContent = 'Belum dikonfirmasi. Ulangi lemparan.';
              }
          }
          throwResult.classList.remove('hidden');
      }, 900);
  });

  // Fungsi untuk menampilkan hasil ramalan
  function showPrediction() {
      // Isi data ke kartu hasil
      resultNumber.textContent = predictionNumber.textContent;
      outputName.textContent = nameInput.value.trim();
      outputDate.textContent = formattedDate;
      predictionText.textContent = currentPrediction.text;
      guidanceText.textContent = currentPrediction.guidance;
      loveGuidance.textContent = currentPrediction.love;
      careerGuidance.textContent = currentPrediction.career;
      healthGuidance.textContent = currentPrediction.health;
      wealthGuidance.textContent = currentPrediction.wealth;

      predictionResult.classList.remove('hidden');
      predictionResult.scrollIntoView({ behavior: 'smooth' });

      // Set link WhatsApp
      const shareText = `*Ramalan Ciam Si untuk ${nameInput.value.trim()}* (${formattedDate})\n\n` +
          `*Nomor Ramalan: ${currentPrediction.number}*\n\n` +
          `_${currentPrediction.text}_\n\n` +
          `*Petunjuk Dewa:* ${currentPrediction.guidance}\n\n` +
          `❤️ *Asmara:* ${currentPrediction.love}\n` +
          `💼 *Karier:* ${currentPrediction.career}\n` +
          `⚕️ *Kesehatan:* ${currentPrediction.health}\n` +
          `💰 *Keuangan:* ${currentPrediction.wealth}\n\n` +
          `Dapatkan ramalan Anda di: ${window.location.href}`;
      whatsappShare.href = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
  }

  // Fungsi untuk mengunduh hasil sebagai JPG
  downloadBtn.addEventListener('click', () => {
      html2canvas(predictionCard, {
          backgroundColor: '#f8f4e9', // Match card background
          scale: 2 // Increase resolution for better quality
      }).then(canvas => {
          const link = document.createElement('a');
          link.download = `Ramalan_CiamSi_${nameInput.value.trim().replace(' ', '_')}.jpg`;
          link.href = canvas.toDataURL('image/jpeg', 0.9);
          link.click();
      });
  });

  // Jalankan inisialisasi
  initialize();
});