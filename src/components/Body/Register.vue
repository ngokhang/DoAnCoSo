<template>
  <div class="register">
      <form action="#" method="post">
        <p class="title">Register</p>
        <label for="username">Username </label>
        <input type="text" name="username" id="username" placeholder="Username">
        <label for="password">Password </label>
        <input type="password" name="password" id="password" placeholder="Password">
        <label for="email">Email </label>
        <input type="email" name="email" id="email" placeholder="Your Email">
        <label for="pnum">Phone number </label>
        <input type="text" name="pnum" id="pnum" placeholder="Your phone number">
        
        <button type="submit">Register!</button>
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped> 
.register {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        border: 1px solid transparent;
        border-radius: 10px;
    }

    .register .title {
        font-size: 24px;
        text-align: center;
        font-weight: bold;
        color: black;

    }

    .register > form {
        width: 500px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
    }

    .register > form label {
        color: black;
        font-size: 18px;
        font-weight: bold;
    }

    .register > form input {
        font-size: 20px;
        line-height: 1.25;
        padding: 5px 20px;
        background: rgba(136, 126, 126, 0.1);
        border: none;
        border-radius: 20px;
        outline: none;
        box-sizing: border-box;
        border: 2px solid rgba(0, 0, 0, 0.02);
    }

    .register > form button {
        display: inline-block;
        width: 100px;
        padding: 10px;
        font-size: 20px;
        background-color: rgb(121, 119, 119);
        border-radius: 10px;
        color: white;
        cursor: pointer;
    }

    .register > form button:hover {
        background-color: green;
    }
</style>