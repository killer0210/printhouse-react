import React from 'react'
import { PrintMus_038 } from '../assets'

const About = () => {
  return (
    <>
    {/* ABOUT HEADER */}
    <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
                <p className="uppercase tracking-[0.15em] text-sm text-[#0064F0] font-semibold">Танилцуулга</p>
                <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                    Бид харилцагчийн итгэл, сонголтод тулгуурласан хэвлэлийн загвар компани байх болно
                </h1>
                
            </div>
            <div className="relative h-[260px] md:h-[340px] rounded-3xl overflow-hidden">
                <img src={PrintMus_038} alt="Мөнхийн Үсэг үйлдвэр" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/10 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 rounded-2xl px-4 py-3 shadow">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Туршлага</p>
                    <p className="text-lg font-semibold">30+ жил хэвлэлийн салбарт</p>
                </div>
            </div>
        </div>
    </section>

    {/* ABOUT BODY */}
    <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-5 grid md:grid-cols-[1.4fr_1fr] gap-10">
            <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-semibold">Бидний тухай</h2>
                <p className="text-gray-700 leading-relaxed">
                    “Мөнхийн Үсэг” ХХК нь хэвлэлийн салбарт олон жилийн турш тогтвортой үйл ажиллагаа
                    явуулж байгаа бөгөөд эдүгээ Монгол улсын хэвлэлийн салбарын хөгжлийн чиг хандлагыг
                    тодорхойлогч, бүрэн автоматжсан хэвлэлийн тэргүүлэх үйлдвэр юм.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Бид хэрэглэгч, харилцагчиддаа чанартай бүтээгдэхүүн, үйлчилгээг хүргэх зорилгын хүрээнд
                    хэвлэлийн салбарын хамгийн сүүлийн үеийн дэвшилтэт техник технологийг нэвтрүүлэхийн
                    зэрэгцээ хэвлэлийн салбарт анхлан Чанарын Удирдлагын Тогтолцооны
                    ISO 9001:2015 стандартыг нэвтрүүлэн ажиллаж байна.
                </p>
            </div>
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Үндсэн үйл ажиллагаа</h3>
                <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00AEEF]"></span>
                        <span>Офсет хэвлэл</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00AEEF]"></span>
                        <span>Торгон хэвлэл</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    {/* VISION / VALUES */}
    <section className="py-12 bg-[#f5f7fb]">
        <div className="max-w-[1200px] mx-auto px-5 grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold">Үзэл баримтлал</h2>
                <p className="text-gray-700 leading-relaxed">
                    Хэрэглэгч, үйлчлүүлэгчдээ хүндэтгэн дээдэлж, чанартай бүтээгдэхүүн, соёлтой
                    үйлчилгээгээр хангаснаар байнгын бизнесийн түншүүдийг бий болгох, ажилтнуудынхаа ур
                    чадвар, үнэнч шударга, өөриймсөг чанарыг эрхэмлэн дэмжиж, бусдаас ялгарч шинэлэг байх,
                    өөрчлөлт шинэчлэлтэнд богино хугацаанд дасан зохицох чадвартай, байгууллагаараа
                    суралцагч, багаар ажиллагч хамт олон байж, нийгмийн хөгжилд хувь нэмрээ оруулахад оршино.
                </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <p className="text-sm uppercase tracking-[0.18em] text-gray-500 mb-2">Бидний үнэт зүйлс</p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Чанарыг эрхэмлэх</li>
                        <li>• Итгэлцэл, урт хугацааны түншлэл</li>
                        <li>• Инноваци, дэвшилтэт технологи</li>
                        <li>• Хариуцлага, шударга байдал</li>
                    </ul>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <p className="text-sm uppercase tracking-[0.18em] text-gray-500 mb-2">Стандарт</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        ISO 9001:2015 чанарын удирдлагын тогтолцоог нэвтрүүлсэн
                        хэвлэлийн салбарын анхны байгууллагуудын нэг.
                    </p>
                </div>
            </div>
        </div>
    </section>

    {/* TIMELINE */}
    <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-5">
            <div className="flex items-center justify-between gap-4 mb-10">
                <div>
                    <p className="uppercase tracking-[0.18em] text-sm text-[#0064F0] font-semibold">Бидний</p>
                    <h2 className="text-3xl md:text-4xl font-semibold">Түүхэн замнал</h2>
                </div>
            </div>

            <div className="timeline">
                {/* 1990 */}
                <div className="timeline-item">
                    <div className="timeline-side text-right pr-6">
                        <p className="timeline-year">1990 он</p>
                    </div>
                    <div className="timeline-marker">
                        <div className="timeline-dot"></div>
                    </div>
                    <div className="timeline-side pl-6">
                        <h3 className="text-base md:text-lg font-semibold mb-1">Эхлэл</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Мөнхийн үсэг группыг үүсгэн байгуулагч Г.Батмөнх “Өрхийн төсөв” номоо хэвлүүлсэнээр
                            анхны үйл ажиллагаагаа эхлүүлэв.
                        </p>
                    </div>
                </div>

                {/* 1991 */}
                <div className="timeline-item">
                    <div className="timeline-side pr-6">
                        <h3 className="text-base md:text-lg font-semibold mb-1">Анхны үйлдвэр</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Хөтөл хотхонд “Сэргэлэн” пүүс байгуулагдав. Анхны ажилтан, үсэг өрөгч У.Цэрэн,
                            Л.Цэцгээ нар ажиллаж байв.
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Хэвлэлийн анхны машин: ЗХУ-д үйлдвэрлэгдсэн 1956 оны ПТ-4 тигль машин болон
                            1991–1993 оны хооронд ашиглагдсан анхны огтлолтын машин (Н.Цэвээндорж).
                        </p>
                    </div>
                    <div className="timeline-marker">
                        <div className="timeline-dot"></div>
                    </div>
                    <div className="timeline-side pl-6">
                        <p className="timeline-year">1991 он</p>
                    </div>
                </div>

                {/* 1995 */}
                <div className="timeline-item">
                    <div className="timeline-side text-right pr-6">
                        <p className="timeline-year">1995 он</p>
                    </div>
                    <div className="timeline-marker">
                        <div className="timeline-dot"></div>
                    </div>
                    <div className="timeline-side pl-6">
                        <h3 className="text-base md:text-lg font-semibold mb-1">Технологийн шилжилт</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Өндөр хэвлэлийн технологиос офсет хэвлэлийн технологид шилжиж,
                            үйлдвэрлэлийн шинэ шатанд гарч эхэлсэн.
                        </p>
                    </div>
                </div>

                {/* 1996 */}
                <div className="timeline-item">
                    <div className="timeline-side pr-6">
                        <h3 className="text-base md:text-lg font-semibold mb-1">“Мөнхийн Үсэг” нэр төрсөн нь</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Улаанбаатар хотын салбар “Сэргэлэн” компани “Мөнхийн Үсэг” нэртэй болж,
                            албан ёсны гэрчилгээгээ авсан.
                        </p>
                    </div>
                    <div className="timeline-marker">
                        <div className="timeline-dot"></div>
                    </div>
                    <div className="timeline-side pl-6">
                        <p className="timeline-year">1996 он</p>
                    </div>
                </div>

                {/* 1998 */}
                <div className="timeline-item">
                    <div className="timeline-side text-right pr-6">
                        <p className="timeline-year">1998 он</p>
                    </div>
                    <div className="timeline-marker">
                        <div className="timeline-dot"></div>
                    </div>
                    <div className="timeline-side pl-6">
                        <h3 className="text-base md:text-lg font-semibold mb-1">Шинэ байр, шинэ боломж</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            “Мөнхийн Үсэг” компанийн шинэ байрыг ашиглалтад оруулснаар
                            үйлдвэрлэлийн хүчин чадлыг эрс нэмэгдүүлэв.
                        </p>
                    </div>
                </div>

                {/* 2002 */}
                <div className="timeline-item">
                    <div className="timeline-side pr-6">
                        <h3 className="text-base md:text-lg font-semibold mb-1">4 өнгийн офсет хэвлэл</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Монголд анх удаа 4 өнгийн офсет хэвлэлийн “RYOBI‑524” автомат хэвлэлийн машиныг
                            үйлдвэртээ суурилуулж, 2 өнгийн машинаас дэвшилтэт технологид шилжив.
                        </p>
                    </div>
                    <div className="timeline-marker">
                        <div className="timeline-dot"></div>
                    </div>
                    <div className="timeline-side pl-6">
                        <p className="timeline-year">2002 он</p>
                    </div>
                </div>

                {/* 2007 */}
                <div className="timeline-item">
                    <div className="timeline-side text-right pr-6">
                        <p className="timeline-year">2007 он</p>
                    </div>
                    <div className="timeline-marker">
                        <div className="timeline-dot"></div>
                    </div>
                    <div className="timeline-side pl-6">
                        <h3 className="text-base md:text-lg font-semibold mb-1">Том формат, дэвшилтэт хүчин чадал</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Таван өнгийн, хамгийн том форматын сүүлийн үеийн “RYOBI‑925” хэвлэх машиныг
                            үйлдвэрлэлдээ суурилуулснаар дотооддоо богино хугацаанд том форматтай,
                            чанартай бүтээгдэхүүн үйлдвэрлэх боломжийг нээв.
                        </p>
                    </div>
                </div>

                {/* 2008 */}
                <div className="timeline-item">
                    <div className="timeline-side pr-6">
                        <h3 className="text-base md:text-lg font-semibold mb-1">СТР ба шинэ үйлчилгээ</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Хальс боловсруулах технологийг халж, компьютерээс шууд хавтанд буулгах СТР
                            технологийг ашиглаж эхэлсэн.
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            RYOBI‑755 хэвлэлийн машин суурилуулж, Лентикуляр хэвлэл, пластик хэвлэл,
                            5C, 6C үйлчилгээг Монголын зах зээлд анх нэвтрүүлэв.
                        </p>
                    </div>
                    <div className="timeline-marker">
                        <div className="timeline-dot"></div>
                    </div>
                    <div className="timeline-side pl-6">
                        <p className="timeline-year">2008 он</p>
                    </div>
                </div>

                {/* 2010 */}
                <div className="timeline-item">
                    <div className="timeline-side text-right pr-6">
                        <p className="timeline-year">2010 он</p>
                    </div>
                    <div className="timeline-marker">
                        <div className="timeline-dot"></div>
                    </div>
                    <div className="timeline-side pl-6">
                        <h3 className="text-base md:text-lg font-semibold mb-1">ISO 9001:2008</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            2010.11.18-ны өдөр ISO 9001:2008 гэрчилгээ гардан авснаар Монголын хэвлэлийн
                            салбарт чанарыг эрхэмлэгч анхны байгууллагын нэг болов.
                        </p>
                    </div>
                </div>

                {/* 2011 */}
                <div className="timeline-item">
                    <div className="timeline-side pr-6">
                        <h3 className="text-base md:text-lg font-semibold mb-1">B1 формат</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            B1 формат буюу Монголд хамгийн том форматын тоног төхөөрөмжийг суурилуулснаар
                            бүтээгдэхүүн үйлдвэрлэх хугацааг 2–3 дахин богиносгож, шинэ үйлдвэрийн байрыг
                            ашиглалтад оруулав.
                        </p>
                    </div>
                    <div className="timeline-marker">
                        <div className="timeline-dot"></div>
                    </div>
                    <div className="timeline-side pl-6">
                        <p className="timeline-year">2011 он</p>
                    </div>
                </div>

                {/* 2013 */}
                <div className="timeline-item">
                    <div className="timeline-side text-right pr-6">
                        <p className="timeline-year">2013 он</p>
                    </div>
                    <div className="timeline-marker">
                        <div className="timeline-dot"></div>
                    </div>
                    <div className="timeline-side pl-6">
                        <h3 className="text-base md:text-lg font-semibold mb-1">ISO батламжаа сунгав</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Офсет хэвлэх үйлдвэрийн үйл ажиллагаанд хамрах хүрээнд Чанарын удирдлагын
                            тогтолцоо ISO 9001:2008 /MNS ISO 9001:2010/ стандартын №31 тоот гэрчилгээг
                            2017.03.03-ны өдөр хүртэл хугацаагаар сунгуулж батламжаа гардан авлаа.
                        </p>
                    </div>
                </div>

                {/* 2015 */}
                <div className="timeline-item">
                    <div className="timeline-side pr-6">
                        <h3 className="text-base md:text-lg font-semibold mb-1">Шинэ бүрэлт ба Panobook</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            2015.01.13-нд алтлаг болон мөнгөлөг саатай бүрэлтийн шинэ технологийг нэвтрүүлэв.
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            2015 оны 1-р сард Panobook технологийг нэвтрүүлснээр меню, зургийн альбом зэрэг
                            бүтээгдэхүүнд шинэчлэлт хийж, илүү бат бөх, ус болон элэгдэлд тэсвэртэй,
                            бүрэн дэлгэгдэх боломжийг бий болгосон.
                        </p>
                    </div>
                    <div className="timeline-marker">
                        <div className="timeline-dot"></div>
                    </div>
                    <div className="timeline-side pl-6">
                        <p className="timeline-year">2015 он</p>
                    </div>
                </div>

                {/* 2016 */}
                <div className="timeline-item">
                    <div className="timeline-side text-right pr-6">
                        <p className="timeline-year">2016 он</p>
                    </div>
                    <div className="timeline-marker">
                        <div className="timeline-dot"></div>
                    </div>
                    <div className="timeline-side pl-6">
                        <h3 className="text-base md:text-lg font-semibold mb-1">Азийн загвар байгууллага</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Азийн бүтээмжийн төв болон Монголын бүтээмжийн төвөөс зарласан “Загвар байгууллага”
                            төслийн сонгон шалгаруулалтад шалгарч, МУЗТ‑ISO 14051 стандартыг нэвтрүүлэх
                            MFCA төслийг амжилттай хэрэгжүүлэн “Азийн загвар байгууллага” гэрчилгээг гардан авлаа.
                        </p>
                    </div>
                </div>

                {/* 2017 */}
                <div className="timeline-item">
                    <div className="timeline-side pr-6">
                        <h3 className="text-base md:text-lg font-semibold mb-1">Хүн төвтэй үнэлгээ</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            “Мөнхийн Үсэг” группийн үүсгэн байгуулагч Т.Доржсүрэн
                            “Аж үйлдвэрийн гавьяат ажилтан” цол тэмдгээр шагнагдав.
                        </p>
                    </div>
                    <div className="timeline-marker">
                        <div className="timeline-dot"></div>
                    </div>
                    <div className="timeline-side pl-6">
                        <p className="timeline-year">2017 он</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About