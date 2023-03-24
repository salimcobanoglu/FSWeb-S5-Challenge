import axios from "axios";

// GÖREV 3
// ---------------------
// Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
// Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
// fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//
// <div class="topics">
//   <div class="tab">javascript</div>
//   <div class="tab">bootstrap</div>
//   <div class="tab">teknoloji</div>
// </div>
//
const Tablar = (konu) => {
  const anaDiv = document.createElement("div");
  anaDiv.classList.add("topics");

  konu.forEach((item) => {
    const tab = document.createElement("div");
    tab.classList.add("tab");
    tab.textContent = item;
    anaDiv.appendChild(tab);
  });
  return anaDiv;
};

// GÖREV 4
// ---------------------
// Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
// Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
// Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
// Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//

const tabEkleyici = (secici) => {
  axios.get(`http://localhost:5001/api/konular`).then((response) => {
    console.log(response.data.konular);

    const elem = document.querySelector(secici);
    const tablar = Tablar(response.data.konular);
    elem.appendChild(tablar);
  });
};

export { Tablar, tabEkleyici };
