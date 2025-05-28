'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import CardProcedimento from '../Card-procedimento/Card-procedimento';

export default function CarrocelCard() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><CardProcedimento /></SwiperSlide>
                <SwiperSlide><CardProcedimento /></SwiperSlide>
                <SwiperSlide><CardProcedimento /></SwiperSlide>
                <SwiperSlide><CardProcedimento /></SwiperSlide>
                <SwiperSlide><CardProcedimento /></SwiperSlide>
                <SwiperSlide><CardProcedimento /></SwiperSlide>
                <SwiperSlide><CardProcedimento /></SwiperSlide>
                <SwiperSlide><CardProcedimento /></SwiperSlide>
                <SwiperSlide><CardProcedimento /></SwiperSlide>

            </Swiper>
        </>
    );
}
