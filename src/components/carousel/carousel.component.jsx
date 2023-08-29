import CountdownOverlap from "../countdown/countdown-overlap.component"

export default function Carousel({images}) {

  return(
    <div className="flex gap-2 w-full overflow-auto rounded">
      { 
        images.map((img, i) =>
        <div key={i} className="relative min-w-max h-55 w-55">
          <img alt="caro" src={img} className="w-50 max-sm1:w-full" />
          <CountdownOverlap deadline={"Jan 5, 2026 15:37:25"} />
        </div>
      
        )
      }
      
    </div>
  )
}