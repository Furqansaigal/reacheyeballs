export const siteContent = {
  company: 'Reach Eyeballs',
  email: 'hello@reacheyeballs.co.uk',
  bookingUrl: '#booking',
  booking: {
    // Change this to control how many days ahead the first available date appears.
    leadDays: 5,
    // Add, remove, or rename times here whenever availability changes.
    timeSlots: ['10:00 AM', '1:30 PM', '3:00 PM'],
  },
  navigation: [
    ['Home', '#top'],
    ['How it works', '#how-it-works'],
    ['Why Reach Eyeballs', '#difference'],
    ['Results', '#results'],
    ['About', '#about'],
    ['FAQ', '#faq'],
  ],
  stats: [
    { value: '30+', label: 'Qualified leads target', note: 'In your first 30 days' },
    { value: '72 HRS', label: 'Potential launch time', note: 'To start reaching your calendar' },
    { value: '100%', label: 'Exclusive opportunities', note: 'No shared lead platforms' },
    { value: 'DONE FOR YOU', label: 'Lead generation system', note: 'Strategy through to appointment' },
  ],
  painPoints: [
    ['01', 'Shared leads', "You're competing with several companies for the same homeowner."],
    ['02', 'Price shoppers', 'Too many enquiries are only looking for the cheapest quote.'],
    ['03', 'Unpredictable pipeline', "Some weeks you're overloaded. Other weeks your calendar is empty."],
    ['04', 'Wasted sales time', "Your team spends hours chasing leads who never answer or aren't ready."],
  ],
  solutions: [
    ['Exclusive appointments', "You're not fighting several installers for the same opportunity."],
    ['Pre-qualified prospects', 'Focus on people with real intent, budget and timeline.'],
    ['Predictable pipeline', 'Know where your next sales conversations are coming from.'],
    ['Done-for-you acquisition', 'Campaign strategy, advertising and appointment generation handled for you.'],
    ['Industry specialists', 'A strategy designed specifically around window and door replacement companies.'],
    ['Premium positioning', 'Get in front of homeowners before the conversation becomes purely about price.'],
  ],
  process: [
    ['01', 'Target', 'We target homeowners within your selected service radius who are considering window or door replacement.'],
    ['02', 'Attract', 'High-converting campaigns and offers generate homeowner enquiries.'],
    ['03', 'Qualify', 'Leads are screened based on suitability, intent, project requirements and your agreed criteria.'],
    ['04', 'Book', 'Qualified prospects are scheduled directly into your sales calendar.'],
  ],
  industries: [
    'Window Replacement Companies', 'Door Installation Companies', 'Aluminium Window Specialists',
    'Bifold Door Companies', 'Glazing Businesses', 'Home Improvement Companies',
  ],
  faqs: [
    ['What does Reach Eyeballs do?', 'We help UK window and door companies attract suitable homeowner enquiries, qualify them against agreed criteria and book appropriate appointments directly into their sales calendar.'],
    ['Do you specialise in window and door companies?', 'Yes. Our strategy and messaging are built for the buying journey of window and door replacement projects.'],
    ['Are the leads exclusive?', 'Our service is designed around exclusive opportunities, so you are not competing for the same lead through a shared marketplace.'],
    ['How are leads qualified?', 'We agree the relevant suitability criteria with you, then screen prospects around intent, project requirements, timeline and fit before booking.'],
    ['Where do the appointments appear?', 'Qualified appointments are scheduled into the sales calendar you agree with us.'],
    ['How quickly can campaigns launch?', 'Launch timing depends on your service area and campaign setup. Once ready, leads can begin reaching your calendar within 72 hours.'],
    ['Do you manage the advertising?', 'Yes. The system is done for you, including campaign strategy, advertising and appointment generation.'],
    ['Which areas of the UK do you cover?', 'We work with suitable window and door businesses across the UK, subject to availability in your service area.'],
    ['How many companies do you work with in one area?', 'We limit the number of companies we work with in each area. Ask us about availability on your strategy call.'],
    ['How do I get started?', 'Book a free 30-minute strategy call and we will discuss your area, sales goals and whether the service is a fit.'],
  ],
  testimonials: [],
  social: { instagram: '#', facebook: '#', linkedin: '#' },
} as const;
