import { ComplaintItem } from "@/types/types";
import vector from '../public/Vector.png';
import userRemove from '@/public/user-remove.png';
import danger from '@/public/danger.png';
import milk from '@/public/milk.png';
import coin from '../public/coin.png';

export const COMPLAINT_ITEMS: ComplaintItem[] = [
    {
        description: 'Inappropriate language',
        icon: coin,
        amount: '553 reports',
        time: 'in the past month'
    },
    {
        description: 'Fake profile',
        icon: userRemove,
        amount: '1249 reports',
        time: 'in the past month'
    },
    {
        description: 'Suspicious information',
        icon: danger,
        amount: '1357 reports',
        time: 'in the past month'
    },
    {
        description: 'Underage',
        icon: milk,
        amount: '760 reports',
        time: 'in the past month'
    },
    {
        description: 'Wrong address',
        amount: '345 reports',
        time: 'in the past month'
    },
    {
        description: 'False information',
        amount: '853 reports',
        time: 'in the past month'
    }
]