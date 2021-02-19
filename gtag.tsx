export const GA_TRACKING_ID = "G-V3VBD8BPCC";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: any) => {
  // @ts-expect-error
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: any) => {
  // @ts-expect-error
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
