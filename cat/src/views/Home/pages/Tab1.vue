<template>
  <div>
    tab1
 
  </div>
</template>
<script>

export default {
 data () {
   return {
     list :[]
   }
 },
components: {

},
created () {
    this.getList()
},
methods: {
  getList (){
    this.$http.get('/api/list').then(res =>{
      console.log(res.data.list.movieList)
    })
  }
}
}
</script>