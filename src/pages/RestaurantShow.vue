<script>
import axios from "axios";
import { api } from "../store";
import AppCard from "../components/AppCard.vue";

export default {
  data() {
    return {
      restaurant: [],
      /* store,
      restaurant: null, */
    };
  },

  components: { AppCard },

  methods: {
    fetchRestaurants() {
      const restaurantSlug = this.$route.params.slug;
      axios
        .get(api.baseApiURI + `restaurants/${restaurantSlug}`)
        .then((response) => {
          this.restaurant = response.data.restaurants[0];
          console.log(response.data.restaurants[0].dishes);
          /* this.types = response.data.types; */
        });
    },
  },

  created() {
    this.fetchRestaurants();
  },

  mounted() {},
};
</script>

<template>
  <div class="row justify-content-between container">
    <h1 class="mb-4">
      Dettagli ristorante:
      {{ restaurant.name }}
    </h1>
    <div class="d-flex justify-content-center flex-column col-5">
      <app-card :restaurant="restaurant" class="w-100"></app-card>
    </div>
    <div class="col-6">
      <h3 class="">Menù</h3>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Piatto</th>
            <th scope="col">Prezzo</th>
            <th scope="col">Dettagli</th>
            <th scope="col">Acquista</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="dish in restaurant.dishes">
            <th>{{ dish.name }}</th>
            <td>€{{ dish.price }}</td>
            <td class="d-flex justify-content-center">
              <!-- Button trigger modal -->
              <button
                :dish="dish"
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <font-awesome-icon :icon="['fas', 'eye']" />
              </button>

              <!-- Modal -->
              <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="#staticBackdrop"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content bg-secondary">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">
                        {{ dish.name }}
                      </h5>

                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <img :src="dish.image" class="w-100" />
                      <p>Descrizione: {{ dish.description }}</p>
                      <p>Prezzo: €{{ dish.price }}</p>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-warning"
                        data-bs-dismiss="modal"
                      >
                        Chiudi
                      </button>
                      <button type="button" class="btn btn-info">
                        Aggiungi al carrello
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <font-awesome-icon :icon="['fas', 'cart-shopping']" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
