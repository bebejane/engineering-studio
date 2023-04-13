import Head from 'next/head'
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import type { Swiper } from 'swiper';
import Image from 'next/image'
import "swiper/css";
import s from './index.module.scss'
import { useState, useRef } from 'react';


const images = [
  { path: '/images/slide0.webp', width: 2704, height: 1786 },
  { path: '/images/slide1.webp', width: 2704, height: 1786 },
  { path: '/images/slide2.webp', width: 1600, height: 1057 },
  { path: '/images/slide3.webp', width: 2704, height: 1786 },
]

export default function Home() {

  const [index, setIndex] = useState(0)
  const swiperRef = useRef<Swiper | null>(null)

  return (
    <>
      <Head>
        <title>Engineering Studio</title>
      </Head>
      <SwiperReact
        id={`swiper-wrap`}
        className={s.swiper}
        loop={true}
        noSwiping={false}
        simulateTouch={true}
        slidesPerView='auto'
        onClick={() => swiperRef.current?.slideNext()}
        initialSlide={0}
        onSlideChange={({ realIndex }) => setIndex(realIndex)}
        onSwiper={(swiper) => swiperRef.current = swiper}
      >
        {images?.map(({ path, width, height }, idx) =>
          <SwiperSlide key={idx} className={s.slide} >
            <figure onClick={() => { }} >
              <Image
                src={path}
                className={s.image}
                width={width}
                height={height}
                alt={`slide ${idx}`}
              />
            </figure>
          </SwiperSlide>
        )}
      </SwiperReact>

      <div className={s.prev}>
        <span onClick={() => swiperRef.current?.slidePrev()}>‹</span>
      </div>
      <div className={s.next}>
        <span onClick={() => swiperRef.current?.slideNext()}>›</span>
      </div>
    </>
  )
}
