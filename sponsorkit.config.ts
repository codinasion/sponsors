import { defineConfig, presets } from "sponsorkit";



export default defineConfig({
  // Providers configs
  github: {
    // `user` or `organization`
    type: "organization",
  },

  tiers: [
    {
      title: "🤝 Supporter 🤝",
      preset: presets.xs,
    },
    {
      title: "💝 Backer 💝",
      monthlyDollars: 10,
      preset: presets.small,
    },
    {
      title: "🥈 Silver Sponsor 🥈",
      monthlyDollars: 50,
      preset: presets.base,
    },
    {
      title: "🥇 Gold Sponsor 🥇",
      monthlyDollars: 100,
      preset: presets.medium,
    },
    {
      title: "🌟 Platinum Sponsor 🌟",
      monthlyDollars: 500,
      preset: presets.large,
      
    },
    {
      title: "💎 Diamond Sponsor 💎",
      monthlyDollars: 1000,
      preset: presets.xl,
    },
  ],
});
