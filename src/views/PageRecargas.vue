
<template >
    <div>
        <v-card class="mx-auto" max-width="500" outlined>
            
            <v-toolbar
      color="grey"
      dark>
      <i class="material-icons ml-3">arrow_back</i>
      <v-toolbar-title>Recargas</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>
            <div class="pl-3 pt-6">Buscar empresa</div>

            <v-col cols="12">
                <v-text-field label="Culqi" filled></v-text-field>
            </v-col>
            <div>
                <v-chip class="ma-2" color="success" outlined>
                    <i class="material-icons pr-2">favorite_border</i>
                    Todas
                </v-chip>

                <v-chip class="ma-2" color="primary" outlined pill>
                    <i class="material-icons pr-2"> star_border</i>
                    Favoritas

                </v-chip>

                <v-chip class="ma-2" color="deep-purple accent-4" outlined>
                    <i class="material-icons pr-2"> phone</i>
                    Telefonia
                </v-chip>
            </div>
            <ul class="collection">
                <li class="collection-item avatar pl-1" style="min-height: 5px;" v-for="data in datas" v-bind:key="data">
                    <img :alt="data.company" :src="data.image" width="30" hight="30">
                    <span class="title ml-3 pb-2"> {{ data.company }}</span>
                    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                </li>
            </ul>
        </v-card>

    </div>
</template>

<script>
export default {
    name: 'PageRecargas',
    data() {
        return {
            datas: [],
        }
    },
    created() {
        this.datas = JSON.parse(localStorage.getItem('providers'))
    },
}
</script>
