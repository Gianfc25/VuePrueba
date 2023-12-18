<template lang="en">
    <div>
        <v-card class="mx-auto" max-width="500" outlined>


            <v-toolbar
      color="grey"
      dark>
      <i class="material-icons ml-3">arrow_back</i>
      <v-toolbar-title>Recargas y Pagos</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>
            <div class="py-2 pl-3">Saldo Virtual <i class="material-icons">info_outline</i> </div>
            <div class="text-h5 pl-3"> {{ data }}</div>


    <v-chip
      class="ma-2"
      outlined
    >
    <i class="material-icons left">favorite_border</i>
      ¿ como cargar mi saldo virtual?
    </v-chip>
    <div class="pl-3">Codigo para cargar tu saldo {12345678901}    </div>
    <v-divider class="my-3 mx-4"></v-divider>

            <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#808080"
            dark
            class="pa-3 my-2"
          >
          <form @submit.prevent="IniciarRecarga">
                        <button v-show="!loading" type="submit">
                            Iniciar Seccion    <i class="material-icons left">phone_android</i>
                        </button>
                        <div v-show="loading" class="progress">
                            <div class="indeterminate">

                            </div>
                        </div>
            </form>          </v-card>
            <v-card
            color="#808080"
            dark
            class="pa-3 my-2"
          >
          <form >
                        <button  type="submit">
                            Pago de servicios    <i class="material-icons left">lightbulb_outline</i>
                        </button>

            </form>          </v-card>          <v-card
            color="#808080"
            dark
            class="pa-3 my-2"
          >
          <form >
                        <button  type="submit">
                            Historial de ganancias y Operaciones   <i class="material-icons left">perm_contact_calendar</i>
                        </button>

            </form>          </v-card>
        </v-col>
      </v-row>
    </v-container>
        </v-card>
    </div>
</template>

<script>
import M from "materialize-css";
export default {
    name: "RecargasPagos",
    async mounted() {
        // await this.axios.get('/Estudiantes')
        //     .then(response => {
        //         console.log(response.data.data.balanceCommerce)
        //     });
    },
    created() {
        this.data = localStorage.getItem("balance");
    },

    data() {
        return {
            data: "",
            recarga: "",
            loading: false,
        };
    },
    methods: {
        async IniciarRecarga() {
            this.loading = true;
            var accessToken =
                "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Indpbmdlcmxpb24uY3VscWkiLCJleHAiOjE3MDY5NDIxNjR9.j7_UICJFBvPiHv_bhnoRNprVU_DaML41Vjmd51jcRDI";
            await this.axios
                .get("/getProviders", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                })
                .then((response) => {
                    this.$router.push("/PageRecargas");
                    this.recarga = response.data.data.companies;
                    localStorage.setItem("providers", JSON.stringify(this.recarga));
                })
                .catch((error) => {
                    var recarga = error;
                    M.toast({ html: recarga.message });
                });
            this.loading = false;
        },
    },
};
</script>
