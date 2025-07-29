import { Frame, LifeBuoy, PieChart, Send } from 'lucide-react'

export const DATA_SIDEBAR = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      name: 'Family',
      url: '/family',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
  ],
  navSecondary: [
    {
      title: 'Support',
      url: '#',
      icon: LifeBuoy,
    },
    {
      title: 'Feedback',
      url: '#',
      icon: Send,
    },
  ],
}
