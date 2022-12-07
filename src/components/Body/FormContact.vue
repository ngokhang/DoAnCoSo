<template>
    <h2>YOUR INFORMATION</h2>
    <form action="#" method="post" class="form">
            <div>
                <label for="fullname">Fullname</label>
                <input type="text" name="fullname" id="fullname" class="inpinfo">
            </div>
            <div>
                <label for="emailfb">Email</label>
                <input type="email" name="fullname" id="emailfb" class="inpinfo">
            </div>
            <div>
                <label for="dienthoai">Your phone number</label>
                <input type="text" name="dienthoai" id="dienthoai" class="inpinfo">
            </div>
            <div>
                <label for="tieude">Title</label>
                <input type="text" name="tieude" id="tieude" class="inpinfo">
            </div>
            <div>
                <label for="diachhi">Address</label>
                <input type="text" name="diachi" id="diachi" class="inpinfo">
            </div>
            <div class="text-area">
                <label for="noidung">Content</label>
                <textarea name="noidung" id="noidung" cols="30" rows="10" class="inpinfo"></textarea>
            </div>
            <button class="button">Send</button>
    </form>
</template>

<script>
export default {

}
</script>

<style scoped>
    .form {
        display: grid;
        row-gap: 1fr;
        column-gap: 50px;
        grid-template-columns: 50% 50%;
        grid-template-rows: 20% 20% 20% 20% 20%;
    }

    .form > div {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .text-area {
        grid-row: 4;
    }

    .button {
        margin-top: 10px;
        grid-row: 5;
    }

     .form .inpinfo {
        width: 590px;
        font-size: 20px;
        line-height: 1.25;
        padding: 5px 20px;
        background: rgba(136, 126, 126, 0.1);
        outline: none;
        box-sizing: border-box;
        border: 2px solid rgba(0, 0, 0, 0.02);
    }

    .form button {
        display: inline-block;
        width: 150px;
        height: 50px;
        padding: 10px;
        font-size: 20px;
        background-color: rgb(121, 119, 119);
        border-radius: 10px;
        color: white;
        cursor: pointer;
    } 
</style>