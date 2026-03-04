import React from 'react'
import { book_10, setguul_6, tailan_4, book_12, book_18, tailan_6, book_19, book_20, setguul_7,alibom_3,taniltsuulga_14,setguul_3,PrintMus_038,tailan_8,neriinhuudas_5,taniltsuulga_8,book_25,logos_gmobile,logos_mobicom,logos_skytel,logos_голомт_банк,logos_хаан_банк,logos_хас_банк,logos_оюу_толгой,logos_төрийн_банк } from '../assets'

const Home = () => {
  return (
    <>
     <section className="bg-gradient-primary text-white text-center">
        <div className="max-w-[1200px] mx-auto px-5 py-5">
            <div className="grid grid-cols-6 grid-rows-6  h-[600px]">
                <div className="col-start-1 col-end-4 row-start-1 row-end-6 rounded-tl-3xl rounded-bl-3xl overflow-hidden relative" >
                    <div className="absolute inset-0 rounded-tl-3xl rounded-bl-3xl bg-white/30 backdrop-blur-md" aria-hidden="true"></div>
                    <div className="relative z-10 px-5 py-5 h-full my-auto text-start space-y-6 flex flex-col justify-center">
                        <h1 className="text-6xl font-semibold text-white">Мэргэжлийн цаасан хэвлэлийн шийдэл</h1>
                        <p>Ном • Тайлан • Сэтгүүл • Нэрийн хуудас • Шошго • Танилцуулга • Урилга,Мэндчилгээ • Календарь • Альбом панобүүк • Дипломын хавтас • Дэвтэр • Маягт • Нэрийн хуудас • Албан бланк,дугтуй • Меню • Тасалбар,талон</p>
                        <div className="buttons flex gap-4 mt-6">
                            <button
                                className="bg-[var(--primary-color,#00AEEF)] hover:bg-[var(--tertiary-color,#0018F0)] text-[var(--text-inverse,#fff)] font-semibold py-3 px-6 rounded-lg shadow transition-colors duration-150"
                            >
                                Үнийн санал авах
                            </button>
                            <button
                                className="bg-[var(--secondary-color,#0064F0)] hover:bg-[var(--primary-color,#00AEEF)] text-[var(--text-inverse,#fff)] font-semibold py-3 px-6 rounded-lg shadow transition-colors duration-150"
                            >
                                Бүтээгдэхүүн
                            </button>
                        </div>
                    </div>
                </div>
                <div className="tag col-start-1 col-end-4 row-start-6 row-end-6  flex items-center justify-around">
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
                </div>
                <div className=" col-start-4 col-end-7 row-start-1 row-end-7 rounded-tr-3xl rounded-bl-3xl rounded-br-3xl" style={{ backgroundColor: 'var(--primary-color, #00AEEF)' }} ></div>
            </div>
        </div>
    </section>
     <section className="py-12 px-4">
     <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-4 grid-rows-4 gap-[15px] h-[600px]">
         <div className="col-start-1 col-end-3 row-start-1 row-end-2 flex items-center justify-start px-4">
             <h2 className="text-4xl font-semibold">ОНЦЛОХ <br /> БҮТЭЭГДЭХҮҮНҮҮД</h2>
         </div>
         <div className="col-start-3 col-end-4 row-start-1 row-end-2 bg-gray-200 rounded-lg overflow-hidden">
             <img src={book_10} alt="" className="w-full h-full object-cover"/>
         </div>
         <div className="col-start-4 col-end-5 row-start-1 row-end-3 bg-green-500 rounded-lg overflow-hidden">
             <img src={setguul_6} alt="" className="w-full h-full object-cover"/>
         </div>
         <div className="col-start-3 col-end-4 row-start-2 row-end-4 bg-red-500 rounded-lg overflow-hidden">
             <img src={tailan_4} alt="" className="w-full h-full object-cover"/>
         </div>
         <div className="col-start-4 col-end-5 row-start-3 row-end-5 bg-yellow-500 rounded-lg overflow-hidden">
             <img src={book_12} alt="" className="w-full h-full object-cover"/>
         </div>
         <div className="col-start-3 col-end-4 row-start-4 row-end-5 bg-purple-500 rounded-lg overflow-hidden">
             <img src={book_18} alt="" className="w-full h-full object-cover"/>
         </div>
         <div className="col-start-2 col-end-3 row-start-2 row-end-3 bg-pink-500 rounded-lg overflow-hidden">
             <img src={tailan_6} alt="" className="w-full h-full object-cover"/>
         </div>
         <div className="col-start-2 col-end-3 row-start-3 row-end-5 bg-blue-500 rounded-lg overflow-hidden">
             <img src={book_19} alt="" className="w-full h-full object-cover"/>
         </div>
         <div className="col-start-1 col-end-2 row-start-4 row-end-5 bg-gray-500 rounded-lg overflow-hidden">
             <img src={book_20} alt="" className="w-full h-full object-cover"/>
         </div>
         <div className="col-start-1 col-end-2 row-start-2 row-end-4 bg-gray-500 rounded-lg overflow-hidden">
             <img src={setguul_7} alt="" className="w-full h-full object-cover"/>
         </div>
     </div>
 </section>

    <section>
        <div className="text-center mb-12 bg-[#0064F0] text-white">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-4 py-12 px-5">
                <div className="flex items-center justify-between w-full">
                    <h2 className="text-4xl font-semibold">Бүтээгдэхүүн</h2>
                    <a href="#" className="text-white text-sm font-medium hover:underline">Бүгд</a>
                </div>
                <div className="grid grid-cols-4 gap-4 h-auto  ">
                    <div className="space-y-2 text-center flex flex-col items-center justify-center">
                        <div className="rounded-lg overflow-hidden">
                            <img src={book_12} alt="Ном" className="w-full h-full object-cover"/>
                        </div>
                        <h3 className="text-2xl font-semibold">Ном</h3>
                    </div>
                    <div className="space-y-2 text-center flex flex-col items-center justify-center">
                        <div className="rounded-lg overflow-hidden">
                            <img src={tailan_4} alt="Ном" className="w-full h-full object-cover"/>
                        </div>
                        <h3 className="text-2xl font-semibold">Тайлан</h3>
                    </div>
                    <div className="space-y-2 text-center flex flex-col items-center justify-center">
                        <div className="rounded-lg overflow-hidden">
                            <img src={alibom_3} alt="Ном" className="w-full h-full object-cover"/>
                        </div>
                        <h3 className="text-2xl font-semibold">Сэтгүүл</h3>
                    </div>
                    <div className="space-y-2 text-center flex flex-col items-center justify-center">
                        <div className="rounded-lg overflow-hidden">
                            <img src={taniltsuulga_14} alt="Ном" className="w-full h-full object-cover"/>
                        </div>
                        <h3 className="text-2xl font-semibold">Танилцуулга</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* TECHNOLOGY */}
    <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-5">
            <div className="flex items-center justify-between w-full mb-6 ">
                <h2 className=" text-4xl font-semibold">Ашигладаг технологи</h2>
                <a href="#" className="text- text-sm font-medium hover:underline">Бүгд</a>
            </div>
            <div className="grid grid-cols-4 grid-rows-3 gap-[15px] h-[600px] ">
                <div className="row-start-1 row-end-2 col-start-1 col-end-3 rounded-lg overflow-hidden relative">
                    <img src={setguul_3} alt="" className="w-full h-full object-cover"/>
                    <div className="absolute bottom-0 left-0 w-full h-full bg-black/50"></div>
                    <h3 className="absolute top-0 right-0 text-white text-2xl p-4 ">Метал цаас</h3>
                </div>

                <div className="row-start-1 row-end-3 col-start-3 col-end-5 rounded-lg overflow-hidden relative">
                    <img src={PrintMus_038} alt="" className="w-full h-full object-cover"/>
                    <div className="absolute bottom-0 left-0 w-full h-full bg-black/50"></div>
                    <h3 className="absolute top-0 right-0 text-white text-2xl p-4 ">Фольго</h3>
                </div>

                <div className="row-start-2 row-end-3 col-start-1 col-end-3 rounded-lg overflow-hidden relative">
                    <img src="./assets/alibom/image_5.jpg" alt="" className="w-full h-full object-cover"/>
                    <div className="absolute bottom-0 left-0 w-full h-full bg-black/50"></div>
                    <h3 className="absolute top-0 right-0 text-white text-2xl p-4 ">Лак</h3>
                </div>

                <div className="row-start-3 row-end-4 col-start-1 col-end-2 rounded-lg overflow-hidden relative">
                    <img src={tailan_8} alt="" className="w-full h-full object-cover"/>
                    <div className="absolute bottom-0 left-0 w-full h-full bg-black/50"></div>
                    <h3 className="absolute top-0 right-0 text-white text-2xl p-4 ">Panobook</h3>
                </div>

                <div className="row-start-3 row-end-4 col-start-2 col-end-3 rounded-lg overflow-hidden relative">
                    <img src={neriinhuudas_5} alt="" className="w-full h-full object-cover"/>
                    <div className="absolute bottom-0 left-0 w-full h-full bg-black/50"></div>
                    <h3 className="absolute top-0 right-0 text-white text-2xl p-4 ">Эмбосс</h3>
                </div>

                <div className="row-start-3 row-end-4 col-start-3 col-end-5 rounded-lg overflow-hidden relative">
                    <img src={taniltsuulga_8} alt="" className="w-full h-full object-cover"/>
                    <div className="absolute bottom-0 left-0 w-full h-full bg-black/50"></div>
                    <h3 className="absolute top-0 right-0 text-white text-2xl p-4 ">Лазер зүсэлт</h3>
                </div>
            </div>
        </div>
    </section>

    {/* PRICING CTA */}
    <section className="bg-[var(--secondary-color,#0064F0)] text-white">
        <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between gap-8 py-12">
            <div className="w-1/2">
                <h2 className="text-4xl font-semibold">Үнийн санал &</h2>
                <p className="text-lg mt-2">Загвар,хэмжээ, материал, тоо ширхэгээ оруулаад шууд үнэ санал авах</p>
                <button
                    className="px-7 py-3.5 rounded-lg border-none cursor-pointer mt-5 bg-gray-900 text-white font-medium hover:opacity-90">Үнэ
                    санал авах</button>
            </div>
            <div className="w-1/2 overflow-hidden ">
                <img src={book_25} alt="" className="w-full h-full object-cover"/>
            </div>
        </div>
    </section>

    {/* CLIENTS  */}
    <section className="bg-[#f9f9f9] py-10 overflow-hidden">
        <div className="flex gap-[60px] w-max animate-[scrollX_20s_linear_infinite] py-6">
            <div className="w-40 h-20 flex items-center justify-center shrink-0"><img src={logos_gmobile} alt="client"
                    className="max-h-full max-w-full object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100" /></div>
            <div className="w-40 h-20 flex items-center justify-center shrink-0"><img src={logos_mobicom} alt="client"
                    className="max-h-full max-w-full object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100" /></div>
            <div className="w-40 h-20 flex items-center justify-center shrink-0"><img src={logos_skytel} alt="client"
                    className="max-h-full max-w-full object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100" /></div>
            <div className="w-40 h-20 flex items-center justify-center shrink-0"><img src={logos_голомт_банк} alt="client"
                    className="max-h-full max-w-full object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100" /></div>
            <div className="w-40 h-20 flex items-center justify-center shrink-0"><img src={logos_хаан_банк} alt="client"
                    className="max-h-full max-w-full object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100" /></div>
            <div className="w-40 h-20 flex items-center justify-center shrink-0"><img src={logos_хас_банк} alt="client"
                    className="max-h-full max-w-full object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100" /></div>
            <div className="w-40 h-20 flex items-center justify-center shrink-0"><img src={logos_оюу_толгой} alt="client"
                    className="max-h-full max-w-full object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100" /></div>
            <div className="w-40 h-20 flex items-center justify-center shrink-0"><img src={logos_төрийн_банк} alt="client"
                    className="max-h-full max-w-full object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100" /></div>
            <div className="w-40 h-20 flex items-center justify-center shrink-0"><img src={logos_gmobile} alt="client"
                    className="max-h-full max-w-full object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100" /></div>
            <div className="w-40 h-20 flex items-center justify-center shrink-0"><img src={logos_mobicom} alt="client"
                    className="max-h-full max-w-full object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100" /></div>
        </div>
    </section>


    {/* WHAT WE DO */}
    <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl">
                <h3 className="text-lg font-semibold mb-2">📄 Хэвлэл</h3>
                <p>Өндөр чанартай хэвлэл үйлдвэрлэл</p>
            </div>
            <div className="bg-white p-8 rounded-2xl">
                <h3 className="text-lg font-semibold mb-2">🎨 Дизайн</h3>
                <p>Мэргэжлийн дизайн үйлчилгээ</p>
            </div>
            <div className="bg-white p-8 rounded-2xl">
                <h3 className="text-lg font-semibold mb-2">🚚 Хүргэлт</h3>
                <p>Хурдан, найдвартай хүргэлт</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home