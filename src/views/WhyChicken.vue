<template>
  <div class="mb-5"> 
    <div class="row  why-chicken w-100 h-100">
      <h1 class="text-light text-center wetrade">HOW CHICKEN POWERS OUR BODY </h1>
    </div>
  </div>
  <div class="mt-5 why-chicken text-center"> 
    <img class="text-center w-100 h-100" src="src/assets/whychicken.jpg"/>
  </div>
  <div class=" row footer-whyc mt-5 text-center py-5"> 
<div class="float-end"> <span class="text-white float-end mb-3 me-5"> &copy; srikanth farm houses </span></div>
    <!-- <a href="#" class="fa fa-facebook"></a> -->
    <div class="display-6 bolder mt-5 text-white">
          <span class="text-white GET-TOUCH mt-4"> GET </span>IN TOUCH
        </div>
        <P class="ps-5 me-5 text-warning"
          >We are strict with the quality and right nutrition to the birds from day one when the
          parent chicks reach our campus till they are in hands of the consumers. Broiler birds are
        </P>
        <i class="fa fa-cloud"></i> 

    <h3> iconss <font-awesome-icon :icon="['fab', 'facebook']" /></h3>
   </div>
</template>

<script>
export default {

}
</script>

<style>
*{
    padding:0px;
    margin:0px
}
.why-chicken{
 background-image: url("src/assets/bg.jpg");
  /* Full height */
  height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
}
.wetrade{
  padding-top: 200px;
  padding-bottom: 200px;
}
.why-chicken-img{
    background-image: url("src/assets/whychicken.jpg");
  /* Full height */
  height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
}
.footer-whyc{
    background-color:rgb(19, 153, 19) 
}
</style>