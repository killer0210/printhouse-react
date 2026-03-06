import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

import hero_image from "../assets/imgages/h1_deco.png";
import {
  book_10,
  setguul_6,
  tailan_4,
  book_12,
  book_18,
  tailan_6,
  book_19,
  book_20,
  setguul_7,
  alibom_3,
  taniltsuulga_14,
  setguul_3,
  PrintMus_038,
  tailan_8,
  neriinhuudas_5,
  taniltsuulga_8,
  book_25,
  logos_gmobile,
  logos_mobicom,
  logos_skytel,
  logos_голомт_банк,
  logos_хаан_банк,
  logos_хас_банк,
  logos_оюу_толгой,
  logos_төрийн_банк,
  alibom_5,
} from "../assets";
import design from "../assets/imgages/h6_img1.png";

const products = [
  {
    id: 1,
    name: "Ном",
    image: book_10,
  },

  {
    id: 2,
    name: "Тайлан",
    image: tailan_4,
  },

  {
    id: 3,
    name: "Сэтгүүл",
    image: setguul_6,
  },
  {
    id: 4,
    name: "Нэрийн хуудас",
    image: neriinhuudas_5,
  },
  {
    id: 5,
    name: "Шошго",
    image: book_25,
  },
  {
    id: 6,
    name: "Танилцуулга",
    image: taniltsuulga_14,
  },
  {
    id: 7,
    name: "Урилга,Мэндчилгээ",
    image: tailan_6,
  },
  {
    id: 8,
    name: "Календарь",
    image: book_12,
  },

  {
    id: 9,
    name: "Альбом панобүүк",
    image: book_18,
  },
  {
    id: 10,
    name: "Дипломын хавтас",
    image: alibom_3,
  },
  {
    id: 11,
    name: "Дэвтэр",
    image: setguul_3,
  },
  {
    id: 12,
    name: "Маягт",
    image: neriinhuudas_5,
  },
  {
    id: 13,
    name: "Нэрийн хуудас",
    image: neriinhuudas_5,
  },
  {
    id: 14,
    name: "Албан бланк,дугтуй",
    image: taniltsuulga_8,
  },
  {
    id: 15,
    name: "Меню",
    image: setguul_6,
  },
  {
    id: 16,
    name: "Тасалбар,талон",
    image: taniltsuulga_8,
  },
];

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const move = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * 20;
    const rotateY = (x / rect.width - 0.5) * 20;

    ref.current.style.transform = `
        perspective(300px)
        rotateX(${-rotateX}deg)
        rotateY(${rotateY}deg)
      `;
  };

  const leave = () => {
    ref.current.style.transform =
      "perspective(300px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <>
      <section className="bg-gradient-primary text-white text-center">
        <div className="max-w-[1400px] mx-auto px-5 py-5">
          <div className="grid grid-cols-6 grid-rows-6  h-[700px]">
            <div className="col-start-1 col-end-4 row-start-1 row-end-6 rounded-tl-3xl rounded-bl-3xl overflow-hidden relative">
              <div
                className="absolute inset-0 rounded-tl-3xl rounded-bl-3xl bg-white/30 backdrop-blur-md"
                aria-hidden="true"
              ></div>
              <div className="relative z-10 px-5 py-5 h-full my-auto text-start space-y-6 flex flex-col justify-center">
                <h1 className="text-6xl font-semibold text-white">
                  Мэргэжлийн цаасан хэвлэлийн шийдэл
                </h1>
                <p>
                  Ном • Тайлан • Сэтгүүл • Нэрийн хуудас • Шошго • Танилцуулга •
                  Урилга,Мэндчилгээ • Календарь • Альбом панобүүк • Дипломын
                  хавтас •
                </p>
                <div className="buttons flex gap-4 mt-6">
                  <button className="bg-[var(--primary-color,#00AEEF)] hover:bg-[var(--tertiary-color,#0018F0)] text-[var(--text-inverse,#fff)] font-semibold py-3 px-6 rounded-lg shadow transition-colors duration-150">
                    Үнийн санал авах
                  </button>
                  {/* <button className="bg-[var(--secondary-color,#0064F0)] hover:bg-[var(--primary-color,#00AEEF)] text-[var(--text-inverse,#fff)] font-semibold py-3 px-6 rounded-lg shadow transition-colors duration-150">
                    Бүтээгдэхүүн
                  </button> */}
                  <button
                type="button"
                className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors shadow"
                aria-label="Видео тоглуулах"
              >
                <span className="ml-1 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-[12px] border-l-gray-800" />
              </button>
                </div>
              </div>
            </div>
            <div className="tag div-notch col-start-1 col-end-4 row-start-6 row-end-6  flex items-center justify-around ">
              <div>
                <p className="text-6xl font-semibold">2.5</p>
                <span className="text-md font-medium">Сая брошуур</span>
              </div>
              <div>
                <p className="text-6xl font-semibold">100</p>
                <span className="text-md font-medium">Мянган сэтгүүл</span>
              </div>

              <div>
                <p className="text-6xl font-semibold">30</p>
                <span className="text-md font-medium">Мянган ном</span>
              </div>
              <div className="tag-right-top bg-white/30 backdrop-blur-md"></div>
            </div>
            <div className=" col-start-4 col-end-7 row-start-1 row-end-7 rounded-tr-3xl rounded-bl-3xl rounded-br-3xl bg-white/30 backdrop-blur-md">
              <div
                ref={ref}
                onMouseMove={move}
                onMouseLeave={leave}
                className="w-[600px] h-[600px] transition-transform duration-200 flex items-center justify-center"
              >
                <img
                  src={hero_image}
                  alt=""
                  className="w-full h-full object-contain "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-12 px-4">
        <div className="max-w-[1400px] mx-auto px-5 grid grid-cols-4 grid-rows-4 gap-[15px] h-[700px]">
          <div className="col-start-1 col-end-3 row-start-1 row-end-2  border border-[var(--secondary-color)] rounded-lg flex items-center px-4 relative">
            <h2 className="text-4xl font-semibold ">БҮТЭЭГДЭХҮҮН</h2>
            <Link to="/products">
              <div className="absolute right-0 bottom-0 w-10 h-10 m-4 rounded-full border border-[var(--secondary-color)]  flex items-center justify-center cursor-pointer group rotate-45 hover:rotate-225 transition-transform duration-300 ease-in-out">
                {/* <span className="text-sm font-medium absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">Бүгд</span> */}
                <i className="fa-solid fa-arrow-right text-[var(--secondary-color)] "></i>
              </div>
            </Link>
          </div>
          <div className="col-start-3 col-end-4 row-start-1 row-end-2 bg-gray-200 rounded-lg overflow-hidden relative group">
            <img
              src={book_10}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-black/50 z-10 opacity-0 group-hover:opacity-100  transition-opacity duration-300 ease-in-out">
              <h3 className="text-white text-2xl font-semibold p-4">Ном</h3>
            </div>
          </div>
          <div className="col-start-4 col-end-5 row-start-1 row-end-3 bg-green-500 rounded-lg overflow-hidden relative group">
            <img
              src={setguul_6}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-black/50 z-10 opacity-0 group-hover:opacity-100  transition-opacity duration-300 ease-in-out">
              <h3 className="text-white text-2xl font-semibold p-4">Сэтгүүл</h3>
            </div>
          </div>
          <div className="col-start-3 col-end-4 row-start-2 row-end-4 bg-red-500 rounded-lg overflow-hidden relative group">
            <img
              src={tailan_4}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-black/50 z-10 opacity-0 group-hover:opacity-100  transition-opacity duration-300 ease-in-out">
              <h3 className="text-white text-2xl font-semibold p-4">Тайлан</h3>
            </div>
          </div>
          <div className="col-start-4 col-end-5 row-start-3 row-end-5 bg-yellow-500 rounded-lg overflow-hidden relative group">
            <img
              src={book_12}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-black/50 z-10 opacity-0 group-hover:opacity-100  transition-opacity duration-300 ease-in-out">
              <h3 className="text-white text-2xl font-semibold p-4">Ном</h3>
            </div>
          </div>
          <div className="col-start-3 col-end-4 row-start-4 row-end-5 bg-purple-500 rounded-lg overflow-hidden relative group">
            <img
              src={book_18}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-black/50 z-10 opacity-0 group-hover:opacity-100  transition-opacity duration-300 ease-in-out">
              <h3 className="text-white text-2xl font-semibold p-4">Ном</h3>
            </div>
          </div>
          <div className="col-start-2 col-end-3 row-start-2 row-end-3 bg-pink-500 rounded-lg overflow-hidden relative group">
            <img
              src={tailan_6}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-black/50 z-10 opacity-0 group-hover:opacity-100  transition-opacity duration-300 ease-in-out">
              <h3 className="text-white text-2xl font-semibold p-4">Тайлан</h3>
            </div>
          </div>
          <div className="col-start-2 col-end-3 row-start-3 row-end-5 bg-blue-500 rounded-lg overflow-hidden relative group">
            <img
              src={book_19}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-black/50 z-10 opacity-0 group-hover:opacity-100  transition-opacity duration-300 ease-in-out">
              <h3 className="text-white text-2xl font-semibold p-4">Ном</h3>
            </div>
          </div>
          <div className="col-start-1 col-end-2 row-start-4 row-end-5 bg-gray-500 rounded-lg overflow-hidden relative group">
            <img
              src={book_20}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-black/50 z-10 opacity-0 group-hover:opacity-100  transition-opacity duration-300 ease-in-out">
              <h3 className="text-white text-2xl font-semibold p-4">Ном</h3>
            </div>
          </div>
          <div className="col-start-1 col-end-2 row-start-2 row-end-4 bg-gray-500 rounded-lg overflow-hidden relative group">
            <img
              src={setguul_7}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-black/50 z-10 opacity-0 group-hover:opacity-100  transition-opacity duration-300 ease-in-out">
              <h3 className="text-white text-2xl font-semibold p-4">Сэтгүүл</h3>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="bg-[#0064F0] text-white py-12 px-5 rounded-xl">
            <div className="flex items-center justify-between w-full mb-6">
              <h2 className="text-4xl font-semibold ">Бүтээгдэхүүн</h2>
              <a
                href="#"
                className="text-white text-sm font-medium hover:border-b-2 border-white"
              >
                <span className="mr-2">Бүгд</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="w-full overflow-x-auto scrollbar-hide">
              <Swiper
                slidesPerView={4.5}
                spaceBetween={16}
                className="relative rounded-lg overflow-hidden h-[200px]"
              >
                <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black to-transparent z-10 " />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black to-transparent z-10" />
                {products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className=" rounded-lg overflow-hidden relative shrink-0 cursor-pointer group h-full">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/80 to-transparent z-10 flex items-end justify-center rounded-b-lg">
                      <h3 className="text-white text-xl font-large p-4">
                        {product.name}
                      </h3>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section> */}

      {/* TECHNOLOGY */}
      <section className="py-12">
        <div className="max-w-[1400px] mx-auto px-5">
          <div className="flex items-center justify-between w-full mb-6 ">
            <h2 className=" text-4xl font-semibold">Ашигладаг технологи</h2>
            <a
              href="#"
              className="text- text-sm font-medium hover:border-b-2 border-black"
            >
              <span className="mr-2">Бүгд</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="grid grid-cols-4 grid-rows-3 gap-[15px] h-[600px] ">
            <div className="row-start-1 row-end-2 col-start-1 col-end-3 rounded-lg overflow-hidden relative group">
              <img
                src={setguul_3}
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full h-full bg-black/50"></div>
              <h3 className="absolute top-0 right-0 text-white text-2xl p-4 ">
                Метал цаас
              </h3>
            </div>

            <div className="row-start-1 row-end-3 col-start-3 col-end-5 rounded-lg overflow-hidden relative group">
              <img
                src={PrintMus_038}
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full h-full bg-black/50"></div>
              <h3 className="absolute top-0 right-0 text-white text-2xl p-4 ">
                Фольго
              </h3>
            </div>

            <div className="row-start-2 row-end-3 col-start-1 col-end-3 rounded-lg overflow-hidden relative group">
              <img
                src={alibom_5}
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full h-full bg-black/50"></div>
              <h3 className="absolute top-0 right-0 text-white text-2xl p-4 ">
                Лак
              </h3>
            </div>

            <div className="row-start-3 row-end-4 col-start-1 col-end-2 rounded-lg overflow-hidden relative group">
              <img
                src={tailan_8}
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full h-full bg-black/50"></div>
              <h3 className="absolute top-0 right-0 text-white text-2xl p-4 ">
                Panobook
              </h3>
            </div>

            <div className="row-start-3 row-end-4 col-start-2 col-end-3 rounded-lg overflow-hidden relative group">
              <img
                src={neriinhuudas_5}
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full h-full bg-black/50"></div>
              <h3 className="absolute top-0 right-0 text-white text-2xl p-4 ">
                Эмбосс
              </h3>
            </div>

            <div className="row-start-3 row-end-4 col-start-3 col-end-5 rounded-lg overflow-hidden relative group">
              <img
                src={taniltsuulga_8}
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-105 group-hover:object-contain"
              />
              <div className="absolute bottom-0 left-0 w-full h-full bg-black/50"></div>
              <h3 className="absolute top-0 right-0 text-white text-2xl p-4 ">
                Лазер зүсэлт
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING CTA */}
      <section className="w-full">
        <div className="max-w-[1400px] mx-auto px-5  ">
          <div className="flex items-center justify-between w-full gap-8 bg-[var(--secondary-color,#0064F0)] text-white rounded-xl overflow-hidden py-12 px-6">
            <div className="w-1/2">
              <h2 className="text-4xl font-semibold">Үнийн санал &</h2>
              <p className="text-lg mt-2">
                Загвар,хэмжээ, материал, тоо ширхэгээ оруулаад шууд үнэ санал
                авах
              </p>
              <button className="px-7 py-3.5 rounded-lg border-none cursor-pointer mt-5 bg-gray-900 text-white font-medium hover:opacity-90">
                <span>Үнэ санал авах</span>
              </button>
            </div>
            <div className="w-1/2 overflow-hidden ">
              <img
                src={book_25}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS  */}
      <section className="bg-[#f9f9f9] py-10 w-full">
        <div className="max-w-[1400px] mx-auto overflow-hidden px-4">
          <div className="flex gap-[60px] w-max animate-[scrollX_20s_linear_infinite] py-6">
            <div className="w-40 h-20 flex items-center justify-center shrink-0">
              <img
                src={logos_gmobile}
                alt="client"
                className="max-h-full max-w-full object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
            <div className="w-40 h-20 flex items-center justify-center shrink-0">
              <img
                src={logos_mobicom}
                alt="client"
                className="max-h-full max-w-full object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
            <div className="w-40 h-20 flex items-center justify-center shrink-0">
              <img
                src={logos_skytel}
                alt="client"
                className="max-h-full max-w-full object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
            <div className="w-40 h-20 flex items-center justify-center shrink-0">
              <img
                src={logos_голомт_банк}
                alt="client"
                className="max-h-full max-w-full object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
            <div className="w-40 h-20 flex items-center justify-center shrink-0">
              <img
                src={logos_хаан_банк}
                alt="client"
                className="max-h-full max-w-full object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
            <div className="w-40 h-20 flex items-center justify-center shrink-0">
              <img
                src={logos_хас_банк}
                alt="client"
                className="max-h-full max-w-full object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
            <div className="w-40 h-20 flex items-center justify-center shrink-0">
              <img
                src={logos_оюу_толгой}
                alt="client"
                className="max-h-full max-w-full object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
            <div className="w-40 h-20 flex items-center justify-center shrink-0">
              <img
                src={logos_төрийн_банк}
                alt="client"
                className="max-h-full max-w-full object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
            <div className="w-40 h-20 flex items-center justify-center shrink-0">
              <img
                src={logos_gmobile}
                alt="client"
                className="max-h-full max-w-full object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
            <div className="w-40 h-20 flex items-center justify-center shrink-0">
              <img
                src={logos_mobicom}
                alt="client"
                className="max-h-full max-w-full object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* social media  */}
      {/* <section className="py-12">
        <div className="max-w-[1400px] mx-auto px-5">
          <div className="flex items-center justify-between w-full mb-6">
            <h2 className="text-4xl font-semibold">СОШИАЛ Контент</h2>
          </div>
          <div>
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02pqLU32u23rWM9UpXR7wFboFR68etb7aRR3UomVFtKaW1vTtbcJGexqn8H6wc6rPkl%26id%3D61580401465257&show_text=true&width=500" width="500" height="430" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      </section> */}

      {/* WHAT WE DO — G7 / өндөр чанар */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Баруун талын зөөлөн gradient */}
        <div className="absolute top-0 right-0 w-1/3 h-full " />
        <div className="max-w-[1400px] mx-auto px-5 gap-12 lg:gap-16 flex flex-col lg:flex-row items-center">
          {/* Зүүн тал: бүтээгдэхүүн + засаглал (dashed тойрог + төв дүгээр) */}
          <div className="flex-1 w-full relative min-h-[380px] flex items-center justify-center">
            
            <div className="w-full h-full  overflow-hidden shadow-lg  ">
              <img src={design} alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Баруун тал: текст + CTA (z-10 нь gradient overlay-ийн дээр текст гаргана) */}
          <div className="flex-1 w-full pl-0 lg:pl-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 ">
            Таны хэвлэлийн бүх хэрэгцээг нэг дор шийднэ
            </h2>
            <p className="text-gray-500 text-base md:text-lg mb-2 max-w-lg">
            Дизайн, хэвлэл, хүргэлтийн цогц үйлчилгээг нэг дороос авч,
            таны бүтээгдэхүүн болон брэндийг илүү чанартайгаар хэрэглэгчдэд хүргэнэ.
            </p>
            <div className="flex flex-col gap-4 mb-8">
              <div>
                <div className="flex items-center text-xl gap-2">
                <i class="fa-solid fa-check-double text-[var(--secondary-color)]"></i>
                  <h3 className="text-lg font-semibold text-gray-900 ">Дизайн</h3>
                </div>
                
                <p className="text-gray-600 px-6 text-sm leading-relaxed">
                  Мэргэжлийн дизайн үйлчилгээ, брэндийн өнгө төрхийг нэг мөр болгоно.
                </p>
              </div>
              <div>
                <div className="flex items-center text-xl gap-2">
                <i class="fa-solid fa-check-double text-[var(--secondary-color)]"></i>
                  <h3 className="text-lg font-semibold text-gray-900">Хэвлэл</h3>
                </div>
                <p className="text-gray-600 text-sm px-6  leading-relaxed">
                  Өндөр чанартай хэвлэл үйлдвэрлэл, өнгөний нарийн хяналттай.
                </p>
              </div>
              <div>
                <div className="flex items-center text-xl gap-2">
                <i class="fa-solid fa-check-double text-[var(--secondary-color)]"></i>
                  <h3 className="text-lg font-semibold text-gray-900">Хүргэлт</h3>
                </div>
                <p className="text-gray-600 text-sm px-6  leading-relaxed">
                  Хурдан, найдвартай хүргэлт — хугацаандаа, аюулгүй хүргэнэ.
                </p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
