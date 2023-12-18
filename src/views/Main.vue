<template>
    <div>
        <v-card class="mx-auto" max-width="344" outlined>
            <form @submit.prevent="IniciarSeccion" class="text-center">
                <div class="row">
                    <div class="col m12 mt-3">
                        <button v-show="!loading" type="submit" class="btn">
                            Iniciar
                        </button>
                        <div v-show="loading" class="progress">
                            <div class="indeterminate">

                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </v-card>
    </div>
</template>

<script>
import M from 'materialize-css'
export default {
    name: 'Login',
    data() {
        return {
            data: '',
            loading: false,
        }
    },
    methods: {
        async IniciarSeccion() {
            this.loading = true;
            var accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Indpbmdlcmxpb24uY3VscWkiLCJleHAiOjE3MDY5NDIxNjR9.j7_UICJFBvPiHv_bhnoRNprVU_DaML41Vjmd51jcRDI';
            await this.axios.get('/getActualBalance', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(response => {
                    this.$router.push('/RecargasPagos');
                    this.data = response.data.data.balanceCommerce;
                    localStorage.setItem('balance', this.data);

                })
                .catch(error => {
                    var data = error;
                    M.toast({ html: data.message });
                })
            this.loading = false;
        }
    }
}
</script>

