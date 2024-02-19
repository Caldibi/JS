//function myFunction() {
    //var x = document.getElementById("myLinks");
    //if (x.style.display === "block") 
   // {
   //     x.style.display = "none";
   // } else {
   //     x.style.display = "block";
  //  }
//}

//1. soru cevap : a linkine tıklandığında, mylinks ile gelen değer none
// olduğu için else kısmı çalışıp display block aktif oluyor, tekrar tıkladığında blok değeri geldiği için
//display none oluyor. kısa açılıp kapanıyor.

//2 ve 3 soru cevap hazır taslağı olan  bootstrap clasını js kullanarak ekle ve çıkarma işlemi yaptım. max width boyutu 1000px altına düştüğünde hamburger menü olacak şekilde düzenledim.

function myFunction(x) {
    if (x.matches) {
      document.getElementById("navbar-unig").classList.remove("navbar-expand-lg");
    } else {
     document.getElementById("navbar-unig").classList.add("navbar-expand-lg");
    }
  }
  
  
  var x = window.matchMedia("(max-width: 1000px)")
  
  
  myFunction(x);
  
  
  x.addEventListener("change", function() {
    myFunction(x);
  });