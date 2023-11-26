<template>
  <div class="about">
    <div class="block header-div">
      <nav class="navbar navbar-expand-sm bg-success text-white col-xl-12 col-md-12 col-sm-12 ">
        <div class="container-fluid">
          <button
            class="navbar-toggler text-white bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <img
            class="navbar-brand text-danger logo-image"
            src="data:image/jpeg;base64,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"
          />
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav ms-auto">
              <!-- <button class="c-name btn btn-sucess"> Srikanth O- farms(logo)</button>  -->
              <li class="nav-item">
                <!-- <a class="nav-link text-white" href="#">Home</a> -->
                <router-link class="nav-link text-white" to="/" exact>HOME</router-link>
              </li>
              <li class="nav-item">
                <!-- <a class="nav-link text-white" href="#"> Contact</a> -->
                <router-link class="nav-link text-white" to="/about">ABOUT</router-link>
              </li>
              <li class="nav-item">
                <!-- <a class="nav-link text-white" href="#"> Contact</a> -->
                <router-link class="nav-link text-white" to="/contact">CONTACT</router-link>
              </li>
              <li class="nav-item">
                <!-- <a class="nav-link text-white" href="#">Products</a> -->
                <router-link class="nav-link text-white" to="/products">PRODUCTS</router-link>
              </li>
              <li class="nav-item">
                <!-- <a class="nav-link text-white" href="#">Products</a> -->
                <router-link class="nav-link text-white" to="/life">LIFE</router-link>
              </li>
              <li class="nav-item">
                <!-- <a class="nav-link text-white" href="#">Products</a> -->
                <router-link class="nav-link text-white" to="/facts">MATHS &FACTS</router-link>
              </li>
              
              <li>
                <div class="dropdown">
                  <button
                    type="button"
                    class="btn btn-success dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    WHY CHICKEN
                  </button>
                  <ul class="dropdown-menu bg-warning">
                    <li>                <router-link class="nav-link text-white" to="/whychicken">WHY</router-link></li>
                    <!-- <li><a class="dropdown-item active" href="#">Active</a></li>
                    <li><a class="dropdown-item disabled" href="#">Disabled</a></li> -->
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <router-view></router-view>
  </div>
  
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
.logo-image {
  width: 109px;
  height: 85px;
  border-radius: 12px;
}
.main-content-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
p::first-letter {
  font-size: 200%;
  color: #8a2be2;
}
.third-container {
  background-image: url('https://images.unsplash.com/photo-1571342010689-7dfe80da1195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80');
  /* Full height */
  height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.about-name {
  font-weight: bold;
}
.GET-TOUCH {
  font-weight: bold;
}
.Organization-Standards {
  padding-bottom: 100px;
}
.bis {
  margin-top: 60px;
}
p {
  text-align: justify;
  text-indent: 30px;
}
/* word animation */
.animate-charcter {
  text-transform: uppercase;
  background-image: linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%);
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  /* text-fill-color: transparent; */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 90px;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
/* .infrastructure{
  padding: 30px 254px;
} */
.footer-div,header-div {
  background-color: rgb(13, 156, 13);
}
</style>
