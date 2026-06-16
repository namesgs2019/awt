"use client";

import { v2Team } from "@/data/v2";

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
