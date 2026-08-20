import { insights, images } from '../content'

/**
 * LatestSection
 * ---------------------------------------------------------------------------
 * "Latest" card grid matching theme.html: an outline button plus four image
 * cards with a gray title bar and arrow. Cards surface four DLG insight
 * topics with original site imagery.
 */
const cards = [
  { title: insights.topics[0], image: images.purpose },
  { title: insights.topics[1], image: images.classroom },
  { title: insights.topics[2], image: images.meeting },
  { title: insights.topics[3], image: images.campus },
]

export default function LatestSection() {
  return (
    <section id="insights" className="mx-auto max-w-[1200px] px-[78px] pb-[25px] pt-[35px]">
      <a
        href="#insights"
        className="inline-block rounded-[8px] border-2 border-do bg-white px-[18px] py-3 text-xs font-bold text-do transition-colors hover:bg-do hover:text-white"
      >
        VIEW OUR LATEST
      </a>

      <div className="mt-5 grid grid-cols-4 gap-[22px]">
        {cards.map((card) => (
          <article key={card.title} className="overflow-hidden bg-white shadow-[0_2px_10px_rgba(0,0,0,0.13)]">
            <img src={card.image} alt="" className="block h-[205px] w-full object-cover" />
            <h3 className="relative min-h-[50px] bg-cardbar p-3 text-[13px] font-bold text-white">
              {card.title}
              <span className="absolute right-3 top-2 text-lg" aria-hidden="true">
                →
              </span>
            </h3>
          </article>
        ))}
      </div>
    </section>
  )
}