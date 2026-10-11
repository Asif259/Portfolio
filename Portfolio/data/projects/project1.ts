import { PortfolioProject } from "../portfolio";

export const project1: PortfolioProject = {
  id: 1,
  name: "Redesigned MyBBBGlobal Website",
  category: "Frontend Development",
  coverImage: "/img/cryzen/cryzen-1.png",
  images: [
    "/img/cryzen/cryzen-1.png",
    "/img/cryzen/cryzen-2.png",
    "/img/cryzen/cryzen-3.png",
    "/img/cryzen/cryzen-4.png",
    "/img/cryzen/cryzen-5.png",
    "/img/cryzen/cryzen-6.png",
  ],
  description:
    "Cryzen is a self-billed “global mutual-aid investment community” that offers a web dashboard where members can pool money (PH – Provide Help), receive payouts (GH – Get Help), track MAVRO internal tokens, and view staged profit statistics. The UI mixes classic HYIP language (“up to 30 % per month”, “financial apocalypse”) with familiar fintech components (balance cards, transaction history, referral counters).",
  longDescription:
    "Cryzen wants to look like a neobroker while operating like a closed-loop money-circulation game. New participants deposit USDT which is converted to an in-platform unit called MAVRO. A “Total PH count” shows how much money has been injected; a “Total GH count” shows how much has been withdrawn. A “recommitment” mechanism forces users to redeposit a slice of any withdrawal, keeping liquidity inside the system. The front page showcases fabricated top-performer cards (“Marcus Rodriguez turned $25 k → $89 k in 12 months”) to create FOMO. A “stacking” page and a “port wallet” imitate DeFi staking, but no on-chain contract addresses are supplied. Everything is denominated in dollars and MAVRO, yet no KYC or real-broker license is mentioned ",
  technologies: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
  features: [
    "Dual wallet: USDT balance + MAVRO balance",
    "PH / GH ledger: Provide-Help vs Get-Help history with running counters",
    "Recommitment tracker: Forces partial redeposit before next withdrawal",
    "Stacking page: Promises extra yield for “locking” MAVRO",
    "Referral dashboard: Shows down-line participant count & bonus history",
    "Top-performer carousel: Fabricated ROI stories (+256 %, +274 %, etc.)",
    "Quick action buttons: “+ Withdraw”, “Start investing →”",
    "Multi-language placeholder: “already in 15 countries”",
    "Social login: Google / Facebook sign-in options",
    "Live “portfolio performance” ticker: “+34.2 % this year”",
  ],
  challenges: [
    {
      title: "Regulatory Risk",
      description: "Uses securities-like language without license disclosure",
    },
    {
      title: "Sustainability Concerns",
      description: "Classic Ponzi arithmetic – new PH funds old GH",
    },
    {
      title: "Trust Gap",
      description: "No verifiable on-chain contracts or third-party custody",
    },
    {
      title: "Withdrawal Friction",
      description: "Recommitment rule can block full exit",
    },
    {
      title: "Reputation Issues",
      description:
        "Homepage mirrors known HYIP templates (30 % monthly, ideological manifesto)",
    },
    {
      title: "Security Vulnerabilities",
      description:
        "Centralized off-chain database holds all balances; single hack can wipe records",
    },
  ],
  solution:
    "Cryzen claims its “solution” is a peer-to-peer mutual-aid loop that cuts out banks: deposits become MAVRO tokens, an internal algorithm caps supply, and a mandatory recommitment rule recycles a slice of every withdrawal back into the pool, while feel-good education tips and glowing success stories keep newcomers pouring in fast enough to let earlier members cash out—postponing, not solving, the inevitable shortfall.",
  liveUrl: "https://cry-zen.vercel.app/",
  githubUrl: ["https://github.com/Asif259/CryZen"],
  date: "2025-07-01",
  client: "MYBBBGlobal",
  role: "Frontend Developer",
};