var filmes = [
  "https://upload.wikimedia.org/wikipedia/pt/1/10/The_Chronicles_of_Narnia_-_The_Lion%2C_the_Witch_and_the_Wardrobe.jpg",
  "https://s2.glbimg.com/zyaaSEbf4qZ6BNkc778luqyVhkE=/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2019/r/0/u4CVkTSpKCAj94NO5G1w/05cul-200-dvd2-d30-img01.jpg",
  "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/91/32/20224832.jpg",
  "https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg",
  "https://br.web.img3.acsta.net/pictures/18/10/10/20/06/1581256.jpg"
];

for (var indice = 0; indice < filmes.length; indice++) {
  document.write("<img src=" + filmes[indice] + ">");
}
