<template lang="">
    <div class="features">
        <FeatureCard v-for="(item, index) in listFeatures" 
            :key="index"
            :title="item.title"
            :text="item.text"
            :urlImg="item.urlImg"/>
    </div>
</template>
<script>
import FeatureCard from './FeatureCard.vue';
export default {
    components: {
        FeatureCard
    },
    data() {
        return {
            listFeatures : [
                {
                    id: 1,
                    title: 'Đề thi học kỳ',
                    text: 'Ngân hàng câu hỏi đầy đủ các môn cấp 1,2,3 được trộn tạo đề theo cấu trúc phân loại giúp các em dễ dàng ôn tập online đề thi giữa học kỳ, thi học kỳ theo các chủ đề đã học.',
                    urlImg: 'https://s.tracnghiem.net/assets/images/home/feature1.jpg'
                },
                {
                    id: 2,
                    title: 'Đề thi THPT QG',
                    text: 'Tổng hợp đề thi trắc nghiệm online THPT QG của các môn Toán, Tiếng Anh, Vật lý, Hóa học, Sinh học, Địa lý, Lịch sử, GDCD kèm đáp án và lời giải chi tiết.',
                    urlImg: 'https://s.tracnghiem.net/assets/images/home/feature2.jpg'
                },
                {
                    id: 3,
                    title: 'Đề kiểm tra',
                    text: 'Hệ thống bài kiểm tra 1 tiết, kiểm tra 15 phút được thiết kế theo hình thức trắc nghiệm online giúp học sinh có thể tạo ra đề tự luyện tập và chấm điểm trực tuyến.',
                    urlImg: 'https://s.tracnghiem.net/assets/images/home/feature3.jpg'
                },
            ],
        }
    }
}
</script>
<style lang="scss" scoped>
    .features {
        max-height: 483px;
        display: flex;
        gap: 16px;
        justify-content: center;
        padding-bottom: 97px;
        margin-top: -30px;
    }
</style>