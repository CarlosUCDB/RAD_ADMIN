/* eslint-disable curly */
<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">Nome do curso</span>
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Default"
              v-model="curso"
              aria-describedby="inputGroup-sizing-default"
            />

            <button
              type="button"
              class="btn btn-success"
              @click="buscaCurso()"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            >Busca Curso</button>
            <div class="col-md-12" style="margin-top:20px;">{{ msg }}</div>
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
      curso: undefined,
      msg: undefined
    };
  },
  methods: {
    buscaCurso() {
      var vm = this;
      axios
        .post(`https://tap-api-tads.herokuapp.com/buscarcurso/${vm.curso}`)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
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
