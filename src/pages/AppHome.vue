<script>
export default {
  data() {
    return {
      titleComponent: "Home Page",
    };
  },

  created() {},
};
</script>

<template>
  <div id="splash">
    <img src="../assets/img/jumbo-2.svg" alt="" />
  </div>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-6 d-flex justify-content-center text-center">
        <div>
          <h2 class="display-2 title">Ordina subito con Boolivery! 🛵🍝</h2>

          <!-- BUTTON -->
          <div class="btn-restaurant mb-5">
            <router-link
              :to="{ name: 'restaurants.index' }"
              href="#"
              class="btn btn--action"
              ><span>Vai ai ristoranti</span></router-link
            >
          </div>

          <h5 class="title">oppure</h5>
          <h3 class="display-5 title">Sei un ristoratore?</h3>
          <!-- BUTTON -->
          <div class="btn-restaurant mb-5">
            <a class="btn btn--action" href="http://127.0.0.1:8000/login"
              ><span>Accedi al tuo account</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;
.container {
  min-height: calc(100vh - 160px);
  overflow: hidden;

  .row {
    .btn-restaurant {
      .btn--action {
        font-size: 1.5rem;
        display: block;
        padding: 1rem;
        border-radius: 100px;
        background-color: white;
        color: black;
        transition: all 0.5s ease 0s;
        box-shadow: 0 10px #18186c;
      }

      .btn--action span {
        display: inline-block;
        position: relative;
        transition: all 0.5s ease;
      }

      .btn--action span::before {
        content: "🧑🏻‍🍳";
        display: inline-block;
        position: absolute;
        top: 50%;
        font-size: 2rem;
        transform: translate(-100%, -50%);
        left: 1.5rem;
        opacity: 0;
        transition: all 0.1s ease 0s;
      }

      .btn--action:hover {
        background-color: #2929b9;
      }

      .btn--action:hover span {
        padding-left: 1.5rem;
        color: white;
      }

      .btn--action:hover span:before {
        left: 0;
        opacity: 1;
      }

      .btn--action:active {
        box-shadow: 0 5px #58e888;
        transform: translateY(5px);
      }
    }
    .title {
      text-shadow: -2px -2px 15px #4477d5, 2px -2px 15px #4477d5,
        -2px 2px 15px #4477d5, 2px 2px 15px #4477d5;
    }
  }
}

// JUMBO IMAGE
#splash {
  z-index: -1;
  position: absolute;
  overflow: hidden;

  img {
    min-width: 100vw;
    min-height: calc(100vh - 160px);
    object-fit: cover;
  }
}
</style>
