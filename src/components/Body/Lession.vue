<template lang="">
    <div class="lession">
        <div class="lession-box">
            <h2 class="title">
                Trac nghiem Tieng Anh
            </h2>
            <p class="text">Tổng hợp hàng ngàn câu trắc nghiệm Tiếng Anh Online và các đề thi chứng chỉ quốc tế TOEIC, TOEFL, IELTS giúp các bạn ôn luyện và đạt điểm tốt trong các kỳ thi Tiếng Anh.</p>
            <router-link to="/Exam">Lam ngay</router-link>
        </div>
    </div>
    <div class="lession02">
        <div class="lession02-img"></div>
        <div class="lession02-content">
            <h2>Trac nghiem IT</h2>
            <p class="text">Hệ thống các bài trắc nghiệm online về tin học văn phòng, tin học cơ bản, lập trình, quản trị hệ thống, chứng chỉ quốc tế giúp các bạn ôn luyện và thi các chứng chỉ về CNTT.</p>
            <router-link to="/Exam">Lam ngay</router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
        h2 {
            font-size: 40px;
            line-height: 1.1;
            font-weight: bold;
        }
        a {
            display: inline-block;
            min-width: 172px;
            padding: 0 55px;
            background-color: #ffb83c;
            font-size: 14px;
            line-height: 42px;
            font-weight: bold;
            color: white;
            text-align: center;
            border-radius: 6px;
        }
        .text {
                margin: 14px 0px 30px;
                font-size: 14px;
                line-height: 1.1;
                text-align: justify;
            }
    .lession {
        width: 100%;
        min-height: 480px;
        background: url(https://s.tracnghiem.net/assets/images/home/lession1.jpg) center top no-repeat;
        &-box {
            max-width: 50%;
            padding-top: 146px;
            padding-left: 150px;
            z-index: 3;
        }
    }

    .lession02 {
        width: 100%;
        display: flex;
        &-img {
            width: 50%;
            background: url(https://s.tracnghiem.net/assets/images/home/lession2.jpg) no-repeat center center;
            min-height: 530px;
        }
        &-content {
            width: 50%;
            padding-left: 50px;
            padding-top: 146px;
        }
    }
</style>