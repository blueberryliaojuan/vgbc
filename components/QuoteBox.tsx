export default function QuoteBox() {
  return (
    <section className="bg-persianGreen p-10 mx-1 md:mx-10">
      <blockquote
        className={[
          "relative text-white text-center p-10 w-full m-1",
          "font-[Helvetica]",

          // 四角蓝色边框（用 background + arbitrary values）
          "bg-[linear-gradient(to_right,#039be5_6px,transparent_4px)_0_100%]",
          "bg-[linear-gradient(to_left,#039be5_6px,transparent_4px)_100%_0]",
          "bg-[linear-gradient(to_bottom,#039be5_6px,transparent_4px)_100%_0]",
          "bg-[linear-gradient(to_top,#039be5_6px,transparent_4px)_0_100%]",
          "bg-no-repeat bg-[length:20px_20px]",

          // before / after icons
          "before:content-['\\f10d'] before:font-[FontAwesome] before:text-[#039be5]",
          "before:absolute before:-top-3 before:-right-5",
          "before:text-[34px]",

          "after:content-['\\f10e'] after:font-[FontAwesome] after:text-[#039be5]",
          "after:absolute after:-bottom-5 after:-left-5",
          "after:text-[34px]",
        ].join(" ")}
      >
        爱是恒久忍耐，又有恩慈；爱是不嫉妒；爱是不自夸，不张狂；不作害羞的事，不求自己的益处，不轻易发怒，不计算人的恶；不喜爱不义，只喜爱真理。凡事包容，凡事相信，凡事盼望，凡事忍耐。”
        <cite> - 《哥林多前书》13:4-7</cite>
      </blockquote>
    </section>
  );
}
