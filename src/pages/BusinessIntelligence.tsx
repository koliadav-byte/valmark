import { useEffect } from 'react';
import { gsap } from 'gsap';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BusinessIntelligence() {
  useEffect(() => {
    gsap.fromTo(
      '.page-content',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    );
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0A0A0A] pt-20 pb-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <a href="/" className="inline-flex items-center gap-2 text-[#C9A962] hover:text-[#B8984F] mb-8">
            <ArrowLeft className="w-4 h-4" />
            Назад
          </a>

          <div className="page-content">
            <h1 className="text-5xl font-bold text-white mb-6">
              <span className="text-[#C9A962]">Business Intelligence</span> — Бизнес
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mb-10">
              Аналитика конкурентных позиций, моделей прибыльности и структурных сдвигов 
              в бизнесе обустройства пространства.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#111111] border border-gray-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Что включает</h2>
                <ul className="text-gray-400 space-y-3">
                  <li className="flex gap-3">
                    <span className="text-[#C9A962]">•</span>
                    <span>Анализ конкуренции и позиций игроков</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#C9A962]">•</span>
                    <span>Модели доходности по сегментам</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#C9A962]">•</span>
                    <span>Структурные сдвиги в индустрии</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#C9A962]">•</span>
                    <span>Риск-карты и сценарии развития</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#111111] border border-gray-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Для кого</h2>
                <ul className="text-gray-400 space-y-3">
                  <li className="flex gap-3">
                    <span className="text-[#C9A962]">•</span>
                    <span>Советы директоров</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#C9A962]">•</span>
                    <span>Финансовые директоры</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#C9A962]">•</span>
                    <span>Коммерческие директоры</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#C9A962]">•</span>
                    <span>М&А специалисты</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#C9A962]/10 to-transparent border border-[#C9A962]/30 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Стратегическая аналитика</h2>
              <p className="text-gray-400 mb-6">
                Business Intelligence помогает принимать решения на основе точного понимания 
                динамики индустрии и конкурентных позиций.
              </p>
              <Button className="bg-[#C9A962] hover:bg-[#B8984F] text-[#0A0A0A]">
                Получить доступ к Business Intelligence
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
