/* eslint-disable curly */
<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Default"
              v-model="email"
              aria-describedby="inputGroup-sizing-default"
            />
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">Senha</span>
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Default"
              v-model="senha"
              aria-describedby="inputGroup-sizing-default"
            />
            <button
              type="button"
              class="btn btn-success"
              @click="adiciona()"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            >Login</button>
            <div class="col-md-12" v-show="usuarioInvalido">Usuario Inválido</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      email: undefined,
      senha: undefined,
      usuarioInvalido: false
    };
  },
  methods: {
    adiciona() {
      var vm = this;
      vm.usuarioInvalido = false;
      axios
        .get("https://tap-api-tads.herokuapp.com/validarToken", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(response) {
          vm.$router.push("/bemVindo");
        })
        .catch(function(error) {
          vm.usuarioInvalido = true;
          console.log(error);
        });
    },
    mostraToken() {
      console.log(localStorage.getItem("token"));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
