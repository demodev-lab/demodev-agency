export const GA_CTA_EVENTS = {
  onClickGuideCTA: "click_index_guide",
  onClickNavHome: "click_navigation_home",
  onClickNavChallenge: "click_navigation_challenge",
  onClickNavWorkshop: "click_navigation_workshop",
  onClickCTA: "click_index_cta",
  onClickTopChallengeCTA: "click_challenge_top_cta",
  onClickMiddleChallengeCTA: "click_challenge_middle_cta",
  onClickBottomChallengeCTA: "click_challenge_bottom_cta",
  onClickTopWorkshopCTA: "click_workshop_top_cta",
  onClickBottomWorkshopCTA: "click_workshop_bottom_cta",
} as const;

export type GA_CTA_EVENT = (typeof GA_CTA_EVENTS)[keyof typeof GA_CTA_EVENTS];
