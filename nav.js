
nav=` <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Kampotik Corp</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Главная</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contacts.html">Контакты</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">О нас</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="services.html">Услуги</a>
          </li>
        </ul>
        <span class="navbar-text">
          смешнявка
        </span>
      </div>
    </div>
  </nav>`;

    //   console.log(x);  // выводим в консоль
        //   document.getElementById() // получаем элемент
        //   element.innerHTML =

        var nav_element = document.getElementById("nav_container");
        nav_element.innerHTML = nav;//nav переменная из файла nav.js