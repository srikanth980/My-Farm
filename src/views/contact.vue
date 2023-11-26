<template>
  <div class="row header header-contact text-center">
    <h1 class="text-success mb-0 float-star">
      <marquee width="60%" direction="right" height="100px">CONTACT FOR ORDERS</marquee>
    </h1>
    <span
      ><marquee class="text-danger p-0 m-0" behavior="scroll" direction="right" scrollamount="10"
        >We are supplying for Wholesale & Retails
      </marquee></span
    >
  </div>
  <div class="row">
    <div class="col text-center">
      <img
        class=""
        src="https://www.srinivasapoultry.com/wp-content/uploads/2021/04/SPF-CHICKEN-01.png"
      />
    </div>
  </div>

  <div class="text-center m-2 p-3 contact-box">
    <form >
      <div class="mb-3 col-xl-8 col-md-10 col-sm-12 mt-5 mb-5 ">
        <!-- name field -->
        <div class="row mb-3 contact-container">
          <div class="col-xl-4 col-md-4 col-sm-4">
            <label for="name" class="form-label">NAME:</label>
          </div>
          <div class="col-xl-8 col-md-8 col-sm-8">
            <input type="text" class="form-control" placeholder="Enter name" id="name" />
          </div>
        </div>
        <!-- number field-->
        <div class="row mb-3">
          <div class="col-xl-4 col-md-4 col-sm-4">
            <label for="name" class="form-label">NUMBE:</label>
          </div>
          <div class="col-xl-8 col-md-8 col-sm-8">
            <input type="number" class="form-control"  placeholder="Enter number" id="name" />
          </div>
        </div>
        <!-- address field-->
        <div class="row mb-3">
          <div class="col-xl-4 col-md-4 col-sm-4">
            <label for="name" class="form-label">ADDRESS:</label>
          </div>
          <div class="col-xl-8 col-md-8 col-sm-8">
            <input type="text" class="form-control" placeholder="Enter address" id="name" />
          </div>
        </div>

        <!-- email field-->
        <div class="row mb-3">
          <div class="col-xl-4 col-md-4 col-sm-4">
            <label for="name" class="form-label">EMAIL:</label>
          </div>
          <div class="col-xl-8 col-md-8 col-sm-8">
            <input type="email" class="form-control" placeholder="Enter email" id="name" />
          </div>
        </div>

        <!-- number in (kgs)-->
        <div class="row mb-3">
          <div class="col-xl-4 col-md-4 col-sm-4">
            <label for="name" class="form-label">ORDER(in kgs)</label>
          </div>
          <div class="col-xl-8 col-md-8 col-sm-8">
            <input type="text" class="form-control" placeholder="Enter number (in kgs)" id="name" />
          </div>
        </div>
        <!-- text area-->
        <div class="row mb-3">
          <div class="col-xl-4 col-md-4 col-sm-4">
            <label for="name" class="form-label">COMMENT:</label>
          </div>
          <div class="col-xl-8 col-md-8 col-sm-8">
            <textarea class="form-control" rows="5" id="comment" placeholder="comment"></textarea>
          </div>
        </div>
        <!-- submit button -->
        <div class="mt-5
        "> 
<button type="button" class=" btn btn-primary  px-5 py-2">submit</button>
        </div>
      </div>
    </form>
  </div>
  <div class=" row footer-contact mt-5 text-center py-5"> 
<div class="float-end"> <span class="text-white float-end mb-3 me-5"> &copy; srikanth farm houses </span></div>
    <!-- <a href="#" class="fa fa-facebook"></a> -->
    <div class="display-6 bolder mt-5 text-white">
          <span class="text-white GET-TOUCH mt-4"> DIRECTLY </span>CONTACT (869718943)
        </div>
        <P class="ps-5 me-5 text-warning"
          >
          Can also touch in directly above number and <span class="text-light fw-bolder h3 undeline">srikanthg4242@gmail.com</span>
        </P>
        <i class="fa fa-cloud"></i> 

    <h3> iconss <font-awesome-icon :icon="['fab', 'facebook']" /></h3>
   </div>
</template>

<script>
export default {}
</script>

<style scoped>
.contact-bg-image {
  /* background-image: url('https://www.srinivasapoultry.com/wp-content/uploads/2021/04/SPF-BG-LETTER.png'); */
  background-position: center;
  background-repeat: no-repeat;
  /* background-size: cover; */
  background-color: rgb(12, 107, 167);
}
.header-contact {
  background-color: whitesmoke;
}
.contact-box{
  border:2px solid cyan;
  border-radius: 30px;
  background-color: rgb(119, 177, 213);
}
.footer-contact{
background-color:rgb(19, 153, 19) ;
}
</style>
