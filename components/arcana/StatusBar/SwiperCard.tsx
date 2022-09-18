import React, { useMemo, useState } from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import { openLink } from '../../../utils';

enum MEME_ICON {
  LIKE,
  SMILE,
  CRY,
}

function Card({ name }: { name: string }) {
  return <div className="text-center">{name}</div>;
}

export default function SwiperCard() {
  const [checked, setChecked] = useState<MEME_ICON>();

  const activities = useMemo<{ type: MEME_ICON; checked: string; unchecked: string }[]>(
    () => [
      {
        type: MEME_ICON.LIKE,
        checked: '/img/arcana/statusbar/like_checked.webp',
        unchecked: '/img/arcana/statusbar/like.webp',
      },
      {
        type: MEME_ICON.SMILE,
        checked: '/img/arcana/statusbar/smile_checked.webp',
        unchecked: '/img/arcana/statusbar/smile.webp',
      },
      {
        type: MEME_ICON.CRY,
        checked: '/img/arcana/statusbar/cry_checked.webp',
        unchecked: '/img/arcana/statusbar/cry.webp',
      },
    ],
    [],
  );

  return (
    <div className="flex">
      <div className="h-[160px] w-[224px] bg-[url('/img/arcana/statusbar/swiper_card_bg.webp')] bg-cover bg-no-repeat p-2 xs:h-[29.87vw] xs:w-[41.87vw] xs:p-[1.6vw]">
        <div className="h-[100px] w-[210px] xs:h-[18.67vw] xs:w-[39.2vw]">
          <Swiper loop modules={[Autoplay]} autoplay={{ delay: 8000, disableOnInteraction: false }}>
            <SwiperSlide>
              <Card name="Card 1" />
            </SwiperSlide>
            <SwiperSlide>
              <Card name="Card 2" />
            </SwiperSlide>
            <SwiperSlide>
              <Card name="Card 3" />
            </SwiperSlide>
            <SwiperSlide>
              <Card name="Card 4" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-2 xs:mt-[1.6vw] xs:gap-[1.6vw]">
          {activities.map((item) => (
            <div
              key={item.type}
              className="activity flex items-center justify-center py-1.5 xs:py-[1vw]"
              onClick={() => setChecked(item.type)}
            >
              <img className="w-6 xs:w-[4.53vw]" src={checked === item.type ? item.checked : item.unchecked} alt="activity" />
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-[84px] bg-[url('/img/arcana/statusbar/right.webp')] bg-cover bg-no-repeat xs:w-[15.73vw]">
        <img
          className="activity absolute bottom-[80px] left-[15px] w-[27px] xs:left-[2.67vw] xs:bottom-[15vw] xs:w-[5.33vw]"
          src="/img/arcana/statusbar/info.webp"
          alt="info"
        />
        <img
          onClick={() => openLink('https://discord.gg/p12')}
          className="activity absolute bottom-5 left-[15px] w-[27px] xs:left-[2.67vw] xs:bottom-[4vw] xs:w-[5.33vw]"
          src="/img/arcana/statusbar/discord.webp"
          alt="discord"
        />
      </div>
    </div>
  );
}
