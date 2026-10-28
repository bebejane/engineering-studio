import Head from 'next/head';
import cn from 'classnames';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import type { Swiper } from 'swiper';
import Image from 'next/image';
import 'swiper/css';
import s from './index.module.scss';
import { useState, useRef } from 'react';

const images = [
	{ path: '/images/home/1.jpg', width: 3888, height: 2592, left: true },
	{ path: '/images/home/2.jpg', width: 3072, height: 2304 },
	{ path: '/images/home/3.jpg', width: 1711, height: 1116 },
	{ path: '/images/home/4.jpg', width: 1600, height: 1200 },
	{ path: '/images/home/5.jpg', width: 4320, height: 3240 },
	{ path: '/images/home/6.jpg', width: 5504, height: 3096 },
];

export default function Home() {
	const [index, setIndex] = useState(0);
	const swiperRef = useRef<Swiper | null>(null);

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
				onSwiper={(swiper) => (swiperRef.current = swiper)}
			>
				{images?.map(({ path, width, height, left }, idx) => (
					<SwiperSlide key={idx} className={s.slide}>
						<figure onClick={() => {}}>
							<Image
								src={path}
								className={cn(s.image, left && s.left)}
								width={width}
								height={height}
								alt={`slide ${idx}`}
							/>
						</figure>
					</SwiperSlide>
				))}
			</SwiperReact>

			<div className={s.prev}>
				<button onClick={() => swiperRef.current?.slidePrev()}>‹</button>
			</div>
			<div className={s.next}>
				<button onClick={() => swiperRef.current?.slideNext()}>›</button>
			</div>
		</>
	);
}
