<template>
  <div>
    <div class="link-body" style="background: #ffffff">
      <div class="container animate__animated animate__fadeIn">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-md-8 link-content">
            <header class="d-flex flex-column align-items-center" style="color: #000000">
              <img
                id="image"
                src="https://i.ibb.co/f8gzM1z/A-nh-chu-p-Ma-n-hi-nh-2023-09-01-lu-c-00-30-25.png"
                alt="Avatar"
                class="link-image"
                style="display: none"
              />
  
              <div class="d-flex flex-row align-items-center mt-4">
                <h1 id="title"></h1>
              </div>
  
              <p id="description"></p>
            </header>
            <main id="links" class="mt-4">
              <div class="row">
                <div data-biolink-block-id="1273" class="col-12 my-2">
                  <a href="#" data-biolink-block-id="1273" target="_blank">
                    <img
                      src="../static/uploads/block_images/6e0d547ceea4da64394b1a4fb37ef007.png"
                      class="img-fluid rounded"
                    />
                  </a>
                </div>
                
                <div data-biolink-block-id="1272" class="col-12 my-2">
                  <a
                    @click="continueAction()"
                    data-biolink-block-id="1272"
                    class="btn btn-block btn-primary link-btn link-btn-rounded animate__animated animate__repeat-1 animate__false animate__delay-2s"
                    style="background: #2574ea; color: #ffffff"
                  >
                    <div
                      class="link-btn-image-wrapper link-btn-rounded"
                      style="display: none"
                    >
                      <!-- <img src="" class="link-btn-image" loading="lazy" /> -->
                    </div>
  
                    Continue
                  </a>
                </div>
              </div>
  
              <div id="socials" class="d-flex flex-wrap justify-content-center mt-5"></div>
            </main>
  
            <footer class="link-footer">
              <a
                id="branding"
                href="https://www.facebook.com/legal/terms?paipv=0&eav=AfZ-n0rF_sl3GP74yuYqcJAuMjtNpTHfUcnbG6w6xeh0GTLwLIRte40HvdraKz052z0&_rdr"
                style="color: #000000"
                >Terms of Service © 2023</a
              >
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // name : "MetaCommunityStandard",
  data() {
    return {
      redirect_url: process.env.redirect_url
    }
  },
  methods: {
    continueAction() {
      const nextRoute = this.$router.match('/business-help-center');
      if (nextRoute) {
        nextRoute.meta.canAccessNextPage = true;
        return this.$router.push("/business-help-center");
      }
      return this.$router.push("/meta-community-standard");
    },
  }
};
</script>
<style lang="css" scoped>
body {
  font-family: 'Lato', sans-serif !important;
}
</style>



// WEBPACK FOOTER //
// src/pages/MetaCommunityStandard.vue
