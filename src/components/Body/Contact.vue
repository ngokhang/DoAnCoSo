<template>
  <div class="contact">
    <ul class="info">
      <li>ADDRESS <br> Yen Nghia - Ha Dong - Ha Noi city</li>
      <li>EMAIL <br> cs@phenikaa-uni.edu.vn</li>
      <li>HOTLINE <br> 024.66569.110 | Hotline: 094.651.1010</li>
      <li>WEBSITE <br> www.cs.phenikaa-uni.edu.vn</li>
    </ul>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.893682634383!2d105.74606287539454!3d20.961052610023764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452efff394ce3%3A0x391a39d4325be464!2sPhenikaa%20University!5e0!3m2!1sen!2s!4v1670137851582!5m2!1sen!2s" width="1000" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .contact {
    display: flex;
  }
  .info {
    width: 278px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: #e94b00;
  }

  .info li {
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    color: white;
    padding: 30px 0 30px 30px;
    border-bottom: 1px solid #ec6728;
  }

  .info li:last-child {
    border:none
  }
</style>