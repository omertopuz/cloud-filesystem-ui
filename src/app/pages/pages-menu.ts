import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Menu',
    group: true,
  },
  {
    title: 'Portal Operations',
    icon: 'grid-outline',
    children: [
      {
        title: 'Applications',
        link: '/pages/portal-operations/view-applications',
      },
      {
        title: 'Cloud Files',
        link: '/pages/portal-operations/cloud-files',
      }
    ],
  }
];
