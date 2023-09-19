"use client";

import Image from "next/image";
import { Element } from "react-scroll";

const Section = ({ children, elementName, bgImage, sectionClassName = "" }) => {
  return (
    <>
      {elementName && <Element name={elementName}> </Element>}
      <section
        className={`py-[56px] tablet:py-[66px] desktop:py-[104px] relative ${sectionClassName}`}
      >
        <Image
          className="object-cover"
          alt=""
          src={bgImage}
          placeholder="blur"
          fill
          quality={100}
          sizes="100vw" //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-0 left-0 w-screen h-full bg-linear-gradient-main"></div>

        <div className="container relative">{children}</div>
      </section>
    </>
  );
};
export default Section;

/**
 * sizes
Рядок, схожий на медіа-запит, який надає інформацію про ширину зображення в різних точках зупинки. Значення sizesсуттєво вплине на продуктивність зображень, які використовують fillабо мають адаптивний розмір .

Властивість sizesслужить двом важливим цілям, пов’язаним із продуктивністю зображення:

По-перше, значення sizesвикористовується браузером для визначення розміру зображення для завантаження з next/imageавтоматично створеного srcset. Коли браузер вибирає, він ще не знає розміру зображення на сторінці, тому він вибирає зображення, яке має такий самий розмір або більше, ніж область перегляду. Властивість sizesдозволяє вам повідомити браузеру, що зображення насправді буде меншим за повний екран. Якщо ви не вказали sizesзначення в зображенні з властивістю, використовується fillзначення за замовчуванням (повна ширина екрана).100vw
По-друге, sizesвластивість змінює поведінку автоматично згенерованого srcsetзначення. Якщо значення відсутнє , генерується sizesмалий , придатний для зображення фіксованого розміру (1x/2x/тощо). srcsetЯкщо визначено, генерується sizesвеликий , придатний для адаптивного зображення (640 Вт/750 Вт/тощо). srcsetЯкщо sizesвластивість включає такі розміри 50vw, як відсоток від ширини вікна перегляду, тоді обрізається, srcsetщоб не включати жодних значень, які є надто малими, щоб бути необхідними.
Наприклад, якщо ви знаєте, що ваш стиль призведе до повної ширини зображення на мобільних пристроях, макета з 2 стовпцями на планшетах і макета з 3 стовпцями на настільних дисплеях, вам слід включити властивість sizes, як-от наведену нижче. :


import Image from 'next/image'
 
export default function Page() {
  return (
    <div className="grid-element">
      <Image
        fill
        src="/example.png"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}
Цей приклад sizesможе мати драматичний вплив на показники продуктивності. Без 33vwрозмірів зображення, вибране із сервера, було б у 3 рази ширшим, ніж потрібно. Оскільки розмір файлу пропорційний квадрату ширини, sizesкористувач не завантажить зображення, яке в 9 разів перевищує необхідне.

Дізнайтеся більше про srcsetта sizes:

web.dev https://web.dev/learn/design/responsive-images/#sizes
mdn https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes
 */
