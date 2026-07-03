import type { Metadata } from "next";
import { v2Team } from "@/data/v2";

export const metadata: Metadata = {
  title: "Team | AWT Leadership",
  description:
    "Meet the AWT leadership team driving ECM technology development, engineering execution, finance, partnerships, and global project strategy.",
  keywords: [
    "AWT team",
    "water technology leadership",
    "ECM technology team",
    "water treatment experts",
    "ceramic membrane experts"
  ],
  alternates: {
    canonical: "/team/"
  },
  openGraph: {
    title: "Team | AWT Leadership",
    description:
      "Meet the AWT leadership team behind ECM technology development, engineering, finance, partnerships, and global project strategy.",
    url: "https://adwatertech.com/team/",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Team | AWT Leadership",
    description:
      "Meet the AWT leadership team behind ECM technology development, engineering, finance, partnerships, and global project strategy.",
    images: ["https://adwatertech.com/images/awt_logo.png"]
  }
};

export default function TeamPage() {
  const team = v2Team;

  return (
    <>
      <section className="page-hero hero-bg-team">
        <p>Team</p>
        <h1>Leadership Team</h1>
        <p>Technology invention, engineering execution, finance, and global project development in one focused team.</p>
      </section>

      <section className="band">
        <div className="grid two">
          {team.map((member) => (
            <article className="team-profile-card detailed" key={member.name}>
              <h2>{member.name}</h2>
              <strong>{member.role}</strong>
              <p>{member.summary}</p>
              <ul>
                {member.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
