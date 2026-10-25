import { marqueeConfig } from "@/config/marqueeConfig";

function MarqueeCopy({ items, className }: { items: readonly string[]; className: string }) {
  return (
    <div className={className}>
      {items.map((item, index) => (
        <span className="marquee-item-group" key={`${item}-${index}`}>
          <span className="marquee-item">{item}</span>
        </span>
      ))}
    </div>
  );
}

export function MarqueeBand() {
  return (
    <section className="marquee-band" aria-hidden="true">
      <div className="marquee-row marquee-row-subjects">
        <div className="marquee-track marquee-track-left">
          <MarqueeCopy items={marqueeConfig.subjects} className="marquee-copy-subjects" />
          <MarqueeCopy items={marqueeConfig.subjects} className="marquee-copy-subjects" />
        </div>
      </div>
      <div className="marquee-row marquee-row-programmes">
        <div className="marquee-track marquee-track-right">
          <MarqueeCopy items={marqueeConfig.programmes} className="marquee-copy-programmes" />
          <MarqueeCopy items={marqueeConfig.programmes} className="marquee-copy-programmes" />
        </div>
      </div>
    </section>
  );
}
