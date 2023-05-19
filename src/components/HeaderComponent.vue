<template>
    <header class="c-header">
      <div class="c-wrapper-header">
        <div class="d-flex align-items-center justify-content-between">
          <figure class="c-header__figure">
              <a href="" class="c-header__logo d-block">
                <img class="h-100" src="@/assets/images/logo.svg" alt="Lottiefile Logo">
              </a>
          </figure>

          <div class="c-header__right d-flex align-items-center justify-content-end justify-content-lg-between">
            <nav class="c-nav d-none d-lg-block">
              <ul class="c-nav__list d-flex align-items-center">
                <li>
                  <a href="">Products</a>
                </li>
                <li>
                  <a href="">Integrations</a>
                </li>
                <li>
                  <a href="">Customers</a>
                </li>
                <li>
                  <a href="">Resources</a>
                </li>
              </ul>
            </nav>

            <div class="d-flex align-items-center">
              <div class="d-lg-none">
                <button class="c-header__search">
                  <Icon icon="ic:round-search" />
                </button>
              </div>
              <div class="d-none d-lg-block">
                <form class="c-search">
                  <input id="searchinput" type="search" autocomplete="off" placeholder="Search for animations">
                </form>
              </div>
              <div class="d-none d-md-block">
                <div class="c-header__log-out">
                  <a>Login</a>
                  <a class="c-button c-button--primary">Sign up</a>
                </div>
              </div>
              <div class="d-lg-none">
                <div class="c-header__burguer">
                  <Icon icon="material-symbols:menu" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    msg: String
  }
}
</script>