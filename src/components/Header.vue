<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <router-link class="logo" :to="'/'">
          <svg class="logo-img" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#3ADA7A"/>
              <path d="M28.4135 11.0125L27.2 9.79898H8.4221V30.201L18.1337 39.9126C18.7484 39.9695 19.3705 40 20 40C30.7668 40 39.5449 31.4918 39.9815 20.8322L31.5778 12.4286L28.9684 10.3445L28.4135 11.0125Z" fill="#31B666"/>
              <path d="M26.5051 27.8819H10.7413V12.1181H25.2735L27.2001 9.79898H8.42218V30.201H28.8242V18.8068L26.5051 21.5885V27.8819Z" fill="#E9E9E9"/>
              <path d="M14.2302 15.9141L11.8998 18.2445L20.0483 26.3929L23.4045 22.544L31.5778 12.4286L28.9683 10.3445L19.809 21.3708L14.2302 15.9141Z" fill="#E9E9E9"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="40" height="40" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <span class="logo-text">Task List</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
};
</script>

<style scoped>
  .header {
    background: #4682b4;
    margin-bottom: 30px;
  }

  .header-inner {
    padding: 10px 0;
  }
</style>