import { Consent } from 'src/app/Models/consent';

export const CONSENTS: Consent[] = [
  {
      id: 1,
      name: 'Ricardo',
      email: 'ricardo@gmail.com',
      receiveNewsletter: false,
      beShownTargetedAds: true,
      contributeToAnonymousVisitStatistics: false
  },
  {
    id: 2,
    name: 'Kawan',
    email: 'kawan@gmail.com',
    receiveNewsletter: true,
    beShownTargetedAds: true,
    contributeToAnonymousVisitStatistics: true
  },
  {
    id: 3,
    name: 'Anna',
    email: 'anna@gmail.com',
    receiveNewsletter: true,
    beShownTargetedAds: false,
    contributeToAnonymousVisitStatistics: true
  },
  {
    id: 4,
    name: 'Mary',
    email: 'mary@gmail.com',
    receiveNewsletter: false,
    beShownTargetedAds: false,
    contributeToAnonymousVisitStatistics: true
  },
  {
    id: 5,
    name: 'Steve',
    email: 'steve@gmail.com',
    receiveNewsletter: true,
    beShownTargetedAds: true,
    contributeToAnonymousVisitStatistics: false
  },
  {
    id: 6,
    name: 'Maria',
    email: 'maria@gmail.com',
    receiveNewsletter: true,
    beShownTargetedAds: true,
    contributeToAnonymousVisitStatistics: false
  },
  {
    id: 7,
    name: 'Marta',
    email: 'marta@gmail.com',
    receiveNewsletter: true,
    beShownTargetedAds: true,
    contributeToAnonymousVisitStatistics: false
  }
];
