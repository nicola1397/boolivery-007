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
  <div class="mb-4">
    <div class="row d-block d-md-flex">
      <div class="col-md-6 column">
        <img src="../assets/img/bg-alt.svg" alt="" />
      </div>
      <div class="col-md-6 column">
        <!-- <h1 class="display-2">Diventa partner Boolivery! 🛵🍝</h1>
          <p class="fs-2 rob4 my-5">
            Registra la tua attività ed entra a far parte della famiglia di
            Boolivery! Aggiungi i tuoi piatti e raggiungi subito nuovi clienti!
          </p> -->
        <div class="btn-restaurant">
          <!-- BUTTON -->
          <router-link
            :to="{ name: 'restaurants.index' }"
            href="#"
            class="btn btn--action"
            ><span>Scegli il tuo ristorante</span></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;
.row {
  @include d-flex-center;

  .column {
    margin: 0 auto;
    @include d-flex-center;
    justify-content: center;

    img {
      max-height: 500px;
    }

    .btn-restaurant {
      width: 70%;

      .btn--action {
        font-size: 1.5rem;
        display: block;
        width: 100%;
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
  }
}
</style>
