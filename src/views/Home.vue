<template>
  <div class="home">
    <Head></Head>
    <div id="wrapper">
      <van-row gutter="20">
        <van-col span="8">Mobile App</van-col>
        <van-col span="8">Span 2</van-col>
        <van-col span="8">Span 3</van-col>
      </van-row>
    </div>
    <div id="footerDiv">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Head from '@/components/header'
import Footer from '@/components/footer'

export default {
  // name: 'Home',
  data () {
    return {

    }
  },
  components: {
    Head,
    Footer
  },
  created () {

  },
  methods: {

  },
  computed: {

  }
}
</script>

<style scoped>
#wrapper{
  margin: 2em 10em;
}
</style>
