import axios from "axios";

// GÖREV 5
// ---------------------
// Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
// Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
// Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
//
// <div class="card">
//   <div class="headline">{ anabaslik }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ yazarFoto }>
//     </div>
//     <span>{ yazarAdı } tarafından</span>
//   </div>
// </div>
//

const Card = (makale) => {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("card");

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = makale.anabaslik;

  const author = document.createElement("div");
  author.classList.add("author");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const img = document.createElement("img");
  img.src = makale.yazarFoto;

  const yazarAdi = document.createElement("span");
  yazarAdi.textContent = makale.yazarAdi;

  mainDiv.append(headline, author);
  author.append(imgContainer, yazarAdi);
  imgContainer.appendChild(img);

  mainDiv.addEventListener("click", () => {
    console.log(makale.anabaslik);
  });

  return mainDiv;
};

// GÖREV 6
// ---------------------
// Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
// Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
// Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
// Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
// Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//
const cardEkleyici = (secici) => {
  const yeniCard = document.querySelector(secici);
  axios.get("http://localhost:5001/api/makaleler").then((response) => {
    for (let key in response.data.makaleler) {
      for (let i = 0; i < response.data.makaleler[key].length; i++) {
        yeniCard.appendChild(Card(response.data.makaleler[key][i]));
      }
    }
  });
};

export { Card, cardEkleyici };
