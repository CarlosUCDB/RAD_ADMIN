<template>
<div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
            </div>
            <input type="text" class="form-control" aria-label="Default" v-model="email" aria-describedby="inputGroup-sizing-default">
            <button type="button" class="btn btn-success" @click="verifica()"
             aria-label="Default" aria-describedby="inputGroup-sizing-default">Verifica</button>
             <div class="col-md-12" style="margin-top:20px;">{{  msg  }}</div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script>

import axios from 'axios'
export default {
  data () {
    return {
      email: undefined,
      msg: undefined
    }
  },
  methods: {
    verifica () {
      var vm = this
      axios.get(`https://tap-api-tads.herokuapp.com/usuario/${vm.email}`)
        .then(function (response) {
          vm.msg = response.data.mensagem
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
