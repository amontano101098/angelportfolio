import type { Review } from "../types/review";
import regProfile from "../assets/img/reg_profile.jfif";
import sanaProfile from "../assets/img/sana_profile.jfif";
import carolyneProfile from "../assets/img/carolyne-reviewer.png";
import aliceProfile from "../assets/img/alice_profile.jfif";

export const reviews: Review[] = [
    {
    name: "Reginald Offemaria",
    role: "Mentor in Code Blossom /Founder/Mentor at Test Automation Ph",
    avatar: regProfile,
    review: `Angel played a key role in bringing the playground to life. Her dedication, patience, and attention to detail really showed throughout the entire development process. She approached every challenge with creativity and determination, 
    making sure the platform was not only functional but also smooth and enjoyable to use
    On top of that, Angel has been amazing in creating the social media graphics for Test Automation PH. Her designs are clean, professional, and eye-catching—always capturing the message and vibe perfectly. 
    She consistently puts in the extra effort to make every graphic look polished and engaging.`,
    date: "November 2025"
  },
  {
    name: "Sana Fatima",
    role: "Mentor/Lead Asia — Code Blossom",
    avatar: sanaProfile,
    review: `Angelica is an outstanding mentee and a truly valuable participant. 
    She exhibits excellence in her studies, grasps complex material quickly and 
    applies herself diligently, resulting in high-quality work and a deep understanding 
    of the subject matter.She is highly organized and demonstrates impeccable time management.
     Angelica consistently completes all checklist items and assignments well before or right on time,
      never requiring reminders or extensions.<strong> This reliability is a major asset.</strong>She also maintains a
       highly professional demeanor in all interactions. Her approach to the program is serious,
        respectful, and mature.I highly recommend her and look forward to seeing her future success.`,
    date: "November 2025"
  },
  {
    name: "Corlyne Mutemi",
    role: "Mentor — Code Blossom",
    avatar: carolyneProfile,
    review: `Angel has shown strong dedication and authentic engagement throughout the program.
Their projects consistently reflect thoughtful effort, clear understanding, and their own creative touch.
Their Computer Science background provides a strong foundation, but it's their curiosity, discipline, and willingness to go deeper that truly set them apart.

Their hackathon ideas and execution have been especially impressive, showcasing both solid technical skills and creativity. A highly promising developer — we're glad to have them in the cohort.`,
    date: "November 2025"
  },
  {
    name: "Alice Musukwa",
    role: "Mentor/Lead Africa — Code Blossom",
    avatar: aliceProfile,
    review: `During her time at Code Blossom, Angel has shown strong determination and excellent discipline in her studies toward becoming a full-stack developer. She completes curriculum tasks thoroughly and often ahead of schedule, reaching key milestones quickly. She also consistently follows community guidelines 
    and actively participates in all our events, making her a standout member of the program.`,
    date: "November 2025"
  }
];
