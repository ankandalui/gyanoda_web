import Link from "next/link";
import { SRLWrapper } from "simple-react-lightbox";
import { useState } from "react";

export default function SingleIsotope({
  item: { title, image, category, toBeRemoved },
}) {
  return (
    <>
      <SRLWrapper>
        <div className="portfolio-item-card">
          <div className="d-block pointer">
            <a href={`/img/portfolio/${image}`}>
              <img src={`/img/portfolio/${image}`} alt={`${title}`} />
            </a>
          </div>

          <div className="contents">
            <h5>
              <Link href="/project-details">
                <a>{title}</a>
              </Link>
            </h5>
            <span>{category}</span>
          </div>
        </div>
      </SRLWrapper>
    </>
  );
}
